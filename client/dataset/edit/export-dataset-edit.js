import {
  PU,
  CREATIVE_COMMONS,
} from "../../app-service/vocabulary";
import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "../distribution-model";
import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "../dataset-model";

const CONTEXT = "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/" +
  "kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

export function exportDatasetToJsonLdForLocal(dataset, distributions) {
  // Add IRIs to distributions nad data services.
  const prefix = dataset.iri + "/distribuce/";
  distributions = distributions.map((distribution, index) => ({
    ...distribution,
    "iri": prefix + (index + 1),
  }));
  return exportDatasetToJsonLd(dataset, distributions);
}

export function exportDatasetToJsonLdForNational(dataset, distributions) {
  if (isEmpty(dataset.iri)) {
    dataset = {
      ...dataset,
      "iri": "_:ds",
    };
  }
  // Never export publisher for NKOD.
  dataset.publisher = undefined;
  return exportDatasetToJsonLd(dataset, distributions);
}

export function exportDatasetToJsonLd(dataset, distributions) {
  const output = {
    "@context": CONTEXT,
    "iri": dataset.iri,
    "typ": "Datová sada",
    "název": asLangMap(dataset.title_cs, dataset.title_en),
    "popis": asLangMap(dataset.description_cs, dataset.description_en),
    ...exportSpatial(dataset),
    ...exportTemporal(dataset),
  };

  const keywords = asLangMap(dataset.keywords_cs, dataset.keywords_en);
  if (keywords["cs"] || keywords["en"]) {
    output["klíčové_slovo"] = keywords;
  }

  if (isNotEmpty(dataset.accrual_periodicity)) {
    output["periodicita_aktualizace"] = updateIris(dataset.accrual_periodicity);
  }

  if (isNotEmpty(dataset.documentation)) {
    output["dokumentace"] = dataset.documentation;
  }

  output["téma"] = updateIris(dataset.dataset_themes);

  output["koncept_euroVoc"] = [
    ...updateIris(dataset.themes),
    ...updateIris(dataset.dataset_custom_themes),
  ];

  if (dataset.ofn.length > 0) {
    output["specifikace"] = dataset.ofn;
  }

  if (isNotEmpty(dataset.temporal_resolution)) {
    output["časové_rozlišení"] = updateIris(dataset.temporal_resolution);
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output["prostorové_rozlišení_v_metrech"] =
      dataset.spatial_resolution_meters;
  }

  const contactPoint = exportContactPoint(dataset);
  if (isNotEmpty(contactPoint)) {
    output["kontaktní_bod"] = contactPoint;
  }

  if (isNotEmpty(dataset.publisher)) {
    output["poskytovatel"] = dataset.publisher;
  }

  output["distribuce"] = distributions.map(
    (distribution) => exportDistribution(distribution, dataset.iri));

  console.log("export", output);

  return output;
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function isNotEmpty(value) {
  return !isEmpty(value);
}

function asLangMap(value_cs, value_en) {
  const result = {};
  if (isNotEmpty(value_cs)) {
    result["cs"] = value_cs;
  }
  if (isNotEmpty(value_en)) {
    result["en"] = value_en;
  }
  return result;
}

function exportSpatial(dataset) {
  const ruian = [];
  const geo_area = [];
  const custom = [];

  dataset.spatial.map((spatial) => {
    const url = updateIris(spatial.url);
    switch (spatial.type) {
    case SPATIAL_RUIAN:
      ruian.push(url);
      break;
    case SPATIAL_CONTINENT:
    case SPATIAL_COUNTRY:
    case SPATIAL_PLACE:
      geo_area.push(url);
      break;
    case SPATIAL_URL:
      custom.push(url);
      break;
    default:
      console.warn("Unknown spatial type for", spatial);
      custom.push(url);
      break;
    }
  });

  const result = {};
  if (ruian.length > 0) {
    result["prvek_rúian"] = ruian;
  }
  if (geo_area.length > 0) {
    result["geografické_území"] = geo_area;
  }
  if (custom.length > 0) {
    result["prostorové_pokrytí"] = custom;
  }

  return result;
}

function updateIris(values) {
  return values;
}

function exportTemporal(dataset) {
  if (!containsValidDate(dataset.temporal_start) &&
    !containsValidDate(dataset.temporal_end)) {
    return {};
  }
  const output = {
    "typ": "Časový interval",
  };
  if (containsValidDate(dataset.temporal_start)) {
    output["začátek"] = dataset.temporal_start;
  }
  if (containsValidDate(dataset.temporal_end)) {
    output["konec"] = dataset.temporal_end;
  }
  return {
    "časové_pokrytí": output,
  };
}

function containsValidDate(value) {
  return isNotEmpty(value);
}

function exportContactPoint(catalog) {
  if (isEmpty(catalog.contact_point_name) &&
    isEmpty(catalog.contact_point_email)) {
    return {};
  }
  const output = {
    "typ": "Organizace",
  };
  if (isNotEmpty(catalog.contact_point_name)) {
    output["jméno"] = asLangMap(catalog.contact_point_name);
  }
  if (isNotEmpty(catalog.contact_point_email)) {
    output["e-mail"] = "mailto:" + catalog.contact_point_email;
  }
  return output;
}

function exportDistribution(distribution, datasetIri) {

  const result = {
    "typ": "Distribuce",
  };

  if (isNotEmpty(distribution.iri)) {
    result["iri"] = distribution.iri;
  }

  let title = asLangMap(distribution.title_cs, distribution.title_en);
  if (title["cs"] || title["en"]) {
    result["název"] = title;
  }

  if (distribution.type === DIST_TYPE_FILE) {
    result["soubor_ke_stažení"] = distribution.url;
    result["přístupové_url"] = distribution.url;

    if (isNotEmpty(distribution.media_type)) {
      result["typ_média"] = updateIris(distribution.media_type);
    }

    if (isNotEmpty(distribution.format)) {
      result["formát"] = updateIris(distribution.format);
    }

    if (isNotEmpty(distribution.schema)) {
      result["schéma"] = updateIris(distribution.schema);
    }

    if (isNotEmpty(distribution.package_format)) {
      result["typ_média_balíčku"] = updateIris(distribution.package_format);
    }

    if (isNotEmpty(distribution.compress_format)) {
      result["typ_média_komprese"] = updateIris(distribution.compress_format);
    }

  } else if (distribution.type === DIST_TYPE_SERVICE) {
    result["přístupové_url"] = distribution.service_endpoint_url;
    result["přístupová_služba"] = {
      "typ": "Datová služba",
      "přístupový_bod": distribution.service_endpoint_url,
      "popis_přístupového_bodu": distribution.service_description,
    };
    if (isNotEmpty(distribution.iri)) {
      result["přístupová_služba"]["iri"] =
        distribution.iri + "/přístupová-služba";
    }
    if (title["cs"] || title["en"]) {
      result["přístupová_služba"]["název"] = title;
    }
    if (isNotEmpty(datasetIri)) {
      result["přístupová_služba"]["poskytuje_datovou_sadu"] = datasetIri;
    }
  } else {
    console.error("Distribution must be either FILE or SERVICE.", distribution);
  }
  result["podmínky_užití"] = exportLicense(distribution);
  return result;
}

function exportLicense(distribution) {
  const result = {
    "typ": "Specifikace podmínek užití",
  };
  switch (distribution.license_author_type) {
  case "MULTI":
    result["autorské_dílo"] = PU.obsahujeViceAutorskychDel;
    break;
  case "CC BY":
    result["autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result["autor"] = asLangMap(distribution.license_author_name);
    break;
  case "NO":
    result["autorské_dílo"] = PU.neobsahujeAutorskaDila;
    break;
  case "CUSTOM":
    result["autorské_dílo"] = distribution.license_author_custom;
    break;
  default:
    console.error("Unexpected license_author_type value:",
      distribution.license_author_type);
    break;
  }

  switch (distribution.license_db_type) {
  case "CC BY":
    result["databáze_jako_autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result["autor_databáze"] = asLangMap(distribution.license_db_name);
    break;
  case "NO":
    result["databáze_jako_autorské_dílo"] =
      PU.neniAutorskopravneChranenouDatabazi;
    break;
  case "CUSTOM":
    result["databáze_jako_autorské_dílo"] =
      distribution.license_db_custom;
    break;
  default:
    console.error("Unexpected license_db_type value:",
      distribution.license_db_type);
    break;
  }

  switch (distribution.license_specialdb_type) {
  case "CC0":
    result["databáze_chráněná_zvláštními_právy"] =
      CREATIVE_COMMONS.PUBLIC_ZERO_10;
    break;
  case "NO":
    result["databáze_chráněná_zvláštními_právy"] =
      PU.neniChranenazvlastnimPravemPorizovateleDatabaze;
    break;
  case "CUSTOM":
    result["databáze_chráněná_zvláštními_právy"] =
      distribution.license_specialdb_custom;
    break;
  default:
    console.error("Unexpected license_specialdb_type value:",
      distribution.license_specialdb_type);
    break;
  }

  switch (distribution.license_personal_type) {
  case "YES":
    result["osobní_údaje"] = PU.obsahujeOsobniUdaje;
    break;
  case "NO":
    result["osobní_údaje"] = PU.neobsahujeOsobniUdaje;
    break;
  default:
    console.error("Unexpected license_personal_type value:",
      distribution.license_personal_type);
    break;
  }

  return result;
}
