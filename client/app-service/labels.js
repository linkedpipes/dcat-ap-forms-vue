import CatalogLabels from "@/catalog/labels";

export const labels = {
    "get": get,
    "data": {
         ...CatalogLabels,
        "app_header": "Registrace datové sady",
        "step_dataset": "Datová sada",
        "step_distribution": "Distribuce",
        "step_download": "Shrnutí",
        "dataset_title": "Název datové sady",
        "dataset_title_invalid": "Název datové sady je povinný.",
        "dataset_description": "Popis datové sady",
        "dataset_description_invalid": "Popis datové sady je povinný.",
        "accrual_periodicity": "Periodicita aktualizace",
        "ruian_type": "Související území - Typ územního prvku RÚIAN",
        "ruian": "Související území - Název územního prvku RÚIAN",
        "ruian_iri": "Související územní prvek RÚIAN",
        "ruian_invalid": "Název územního prvku RÚIAN je povinný.",
        "keywords": "Klíčová slova",
        "hint_keywords": "Klíčová slova oddělujte tabulátorem či enterem.",
        "keywords_error": "Klíčová slova jsou povinná.",
        "contact_point_name": "Jméno kurátora dat",
        "contact_point_email": "Email kurátora dat",
        "contact_point_email_invalid": "Nevalidní email.",
        "temporal": "Dotčené časové období",
        "temporal_start": "Dotčené časové období od",
        "hint_temporal_start": "Vyberte začátek období. Pro změnu roku klikněte na rok v kalendáři.",
        "temporal_end": "Dotčené časové období do",
        "hint_temporal_end": "Vyberte konec období. Pro změnu roku klikněte na rok v kalendáři.",
        "documentation": "Odkaz na dokumentaci datové sady",
        "documentation_invalid": "Nevalidní HTTPS URL.",
        "themes": "EuroVoc témata",
        "distribution_url": "Odkaz na soubor ke stažení",
        "distribution_url_missing": "URL je povinné.",
        "distribution_url_invalid": "Nevalidní HTTPS URL.",
        "distribution_media_type": "Media type souboru ke stažení",
        "distribution_format": "Formát souboru ke stažení",
        "format_missing": "Formát je povinný.",
        "distribution_title": "Název distribuce",
        "distribution_schema_link": "Odkaz na schéma distribuce",
        "distribution_schema_missing": "URL je povinné.",
        "distribution_schema_invalid": "Nevalidní HTTPS URL.",
        "license_author_type": "Autorské dílo",
        "license_author_name": "Jména autorů díla",
        "license_author_custom": "Odkaz na vlastní licenci k autorskému dílu",
        "license_author_custom_invalid": "Nevalidní HTTPS URL.",
        "license_db_type": "Originální databáze",
        "license_db_name": "Jména autorů originální databáze",
        "license_db_custom": "Odkaz na vlastní licenci k originální databázi",
        "license_db_custom_invalid": "Nevalidní HTTPS URL.",
        "license_specialdb_type": "Zvláštní právo pořizovatele databáze",
        "license_specialdb_custom": "Odkaz na vlastní licenci týkající se zvláštního práva pořizovatele databáze",
        "license_specialdb_custom_invalid": "Nevalidní HTTPS URL.",
        "license_personal_type":  "Osobní údaje",
        "no_distribution": "Datová sada teď neobsahuje žádné distribuce.",
        "delete_distribution": "Smaž distribuci",
        "headline_distribution_license": "Podmínky užití distribuce",
        "headline_distribution_access": "Přístup k distribuci",
        "distribution_download": "Soubor ke stažení",
        "media_type": "Media type",
        "media_type_missing" : "Media type je povinný.",
        "distribution_schema": "Schéma distribuce",
        "terms_of_use": "Podmínky užití",
        "nav_download": "Shrnutí",
        "nav_dataset": "Datová sada",
        "nav_distributions": "Distribuce",
        "summary_download":"Registrační záznam stáhněte a zašlete jako přílohu do datové schránky ",
        "summary_error":"Formulář ještě není správně vyplněn.",
        "summary_info":"Zde vidíte náhled registrované datové sady.",
        "ruian_autocomplete_no_data": "Začněte psát název územního prvku",
        "format_autocomplete_no_data": "Začněte psát formát souboru, např. \"CSV\"",
        "media_type_autocomplete_no_data": "Začněte psát media type, např. \"text/csv\"",
        "themes_autocomplete_no_data": "Začněte psát název EuroVoc tématu",
        "author_name_missing" : "Jména autorů jsou povinná pro CC BY 4.0.",
        "custom_license_missing": "Odkaz na vlastní licenci je povinný.",
        "dataset_theme": "Téma datové sady",
        "dataset_theme_invalid": "Téma datové sady je povinné.",
        "hint_dataset_title": "Měl by být krátký, věcný a výstižný.",
        "help_dataset_title": "<h3>Název datové sady</h3><p>Zadejte název publikované datové sady. Měl by být krátký, věcný a výstižný. Jde o jedno z hlavních vyhledávacích kritérií, podle kterých budou uživatelé vaše data hledat. Zvažte například, zda slova jako &quot;seznam&quot; nejsou v názvu nadbytečná vzhledem k tomu, že většina datových sad bývají seznamy.</p>",
        "hint_dataset_description": "Napište co datová sada obsahuje, jak se dá použít a také na co si případně při jejím používání dávat pozor.",
        "help_dataset_description": "<h3>Popis datové sady</h3><p>Zadejte delší popis publikované datové sady. Napište co datová sada obsahuje, jak se dá použít a také na co si případně při jejím používání dávat pozor.</p>",
        "help_accrual_periodicity": "<h3>Periodicita aktualizace</h3><p>Slouží k informování uživatelů datové sady o tom, jak často mají kontrolovat, zda je k dispozici její aktualizace. Není tedy přesným vyjádřením toho, kdy nastane příští aktualizace. Hodnoty jsou z <a href=\"https://publications.europa.eu/cs/web/eu-vocabularies/at-concept-scheme/-/resource/authority/frequency/?target=Browse\" target=\"_blank\">evropského číselníku frekvencí</a>.</p>",
        "help_ruian_type": "<h3>Související území - typ prvku RÚIAN</h3><p>Identifikátor území, kterého se publikovaná datová sada týká. Prvky se vybírají z Registru územní identifikace, adres a nemovitostí RÚIAN. Nejprve vyberte typ prvku, následně zadejte jeho kód.</p>",
        "help_ruian": "<h3>Související území - kód prvku RÚIAN</h3><p>Identifikátor území, kterého se publikovaná datová sada týká. Prvky se vybírají z Registru územní identifikace, adres a nemovitostí RÚIAN. Nejprve vyberte typ prvku, následně zadejte jeho kód.</p>",
        "help_keywords": "<h3>Klíčová slova</h3><p>Klíčová slova charakterizující publikovanou datovou sadu. Slouží k vyhledávání datových sad napříč poskytovateli. Nemělo by se tedy jednat o interní identifikátory poskytovatele, nýbrž o slova, která by k popisu datové sady použilo co nejvíce uživatelů. Pro inspiraci doporučujeme se podívat na podobné datové sady, které jsou již v NKOD zaregistrovány.</p>",
        "help_contact_point_name": "<h3>Jméno kurátora dat</h3><p>Jméno osoby či útvaru, který lze kontaktovat ohledně zpětné vazby k této datové sadě. Jedná se o důležitý komunikační kanál, kterým mohou uživatelé hlásit chyby nebo nesrovnalosti v datové sadě.</p>",
        "help_contact_point_email": "<h3>Email kurátora dat</h3><p>Emailová adresa osoby či útvaru, který lze kontaktovat ohledně zpětné vazby k této datové sadě. Jedná se o důležitý komunikační kanál, kterým mohou uživatelé hlásit chyby nebo nesrovnalosti v datové sadě.</p>",
        "help_temporal_start": "<h3>Dotčené časové období</h3><p>Časové období, kterého se datová sada týká. Například pro rozpočet za rok 2017 zde bude vyplněno začátek: <code>2017-01-01</code> a konec: <code>2017-12-31</code>.</p>",
        "help_temporal_end": "<h3>Dotčené časové období</h3><p>Časové období, kterého se datová sada týká. Například pro rozpočet za rok 2017 zde bude vyplněno začátek: <code>2017-01-01</code> a konec: <code>2017-12-31</code>.</p>",
        "help_documentation": "<h3>Odkaz na dokumentaci datové sady</h3><p>URL webové stránky, na které se nachází podrobná odkumentace publikované datové sady. Zdůrazňujeme, že se má jednat o URL <strong>webové stránky</strong>. Jakékoliv dokumenty připravené pro tisk (<code>*.doc</code><code>*.docx</code> či dokonce <code>*.pdf</code>) jsou v prostředí webu nevhodné.</p>",
        "help_dataset_theme": "<h3>Téma datové sady</h3><p>Téma datové sady z <a href=\"https://publications.europa.eu/cs/web/eu-vocabularies/at-concept-scheme/-/resource/authority/data-theme/?target=Browse\" target=\"_blank\">evropského číselníku datových témat</a>. Slouží k zařazení datové sady do jednoho ze základních témat, kterými lze klasifikovat datové sady napříč Evropou.</p>",
        "hint_themes": "Začněte psát název tématu. Témat lze vybrat i více.",
        "hint_contact_point_name": "Osoba či útvar, kterému bude chodit zpětná vazba.",
        "hint_documentation": "Uveďte HTTPS URL webové stránky s dokumentací datové sady.",
        "hint_contact_point_email": "Email, kam ve vaší organizaci bude chodit zpětná vazba.",
        "help_themes": "<h3>EuroVoc témata</h3><p>Témata z <a href=\"https://publications.europa.eu/cs/web/eu-vocabularies/th-top-concept-scheme/-/resource/eurovoc/100141?target=Browse&\" target=\"_blank\">evropského mnohojazyčného tezauru EuroVoc</a>. Slouží k přesnější klasifikaci datové sady.</p>",
        "help_distribution_schema_link": "<h3>Odkaz na schéma distribuce</h3><p>URL strojově čitelného schématu, vůči kterému je soubor ke stažení reprezentovaný touto distribucí validní. Například pro XML soubor to bude soubor XSD (XML Schema), pro CSV soubor to bude jeho JSON descriptor dle doporučení CSV on the Web, pro JSON soubor to bude jeho JSON schéma, atd.</p>",
        "hint_distribution_title": "Uveďte název distribuce, který ji odliší od ostatních distribucí datové sady.",
        "help_distribution_title": "<h3>Název distribuce</h3><p>Název distribuce, který ji odliší od ostatních distribucí datové sady.</p>",
        "help_distribution_format": "<h3>Formát souboru ke stažení</h3><p>Udává formát souboru ke stažení dle <a href=\"https://publications.europa.eu/cs/web/eu-vocabularies/at-concept-scheme/-/resource/authority/file-type/?target=Browse\" target=\"blank\">evropského číselníku typů souborů</a>. Příklady: <code>CSV</code> nebo <code>Zipped GML</code>. Pokud zde není položka pro váš konkrétní formát, zvolte nejbližší odpovídající formát. Například pokud ze není položka pro nějaký speciální XML formát, zvolte prostě <code>XML</code> a <a href=\"https://publications.europa.eu/cs/web/eu-vocabularies/at-dataset/-/resource/dataset/file-type\" target=\"_blank\">zašlete příspěvek</a> požadující zařazení vašeho formátu. Tento číselník má překryv se seznamem Media Typů spravovaným IANA, ale nejsou ekvivalentní. Proto je třeba zvolit hodnoty v obou polích.</p>",
        "help_distribution_media_type": "<h3>Media type souboru ke stažení</h3><p>Udává Media Type souboru ke stažení dle oficiálního <a href=\"https://iana.org/assignments/media-types/media-types.xhtml\" target=\"_blank\">seznamu IANA</a>. Příklady: <code>text/csv</code> nebo <code>application/ld+json</code>. Pokud zde není položka pro váš konkrétní formát, zvolte nejbližší odpovídající formát. Například pokud ze není položka pro nějaký speciální XML formát, zvolte prostě <code>application/xml</code>. Tento číselník má překryv s evropským číselníkem typů souborů, ale nejsou ekvivalentní. Proto je třeba zvolit hodnoty v obou polích.</p>",
        "hint_distribution_url": "Uveďte HTTPS URL souboru ke stažení.",
        "hint_distribution_schema": "Uveďte HTTPS URL strojově čitelného schématu distribuce (XSD, CSVW, ...).",
        "help_distribution_url": "<h3>Odkaz na soubor ke stažení</h3><p>HTTPS URL <strong>souboru ke stažení</strong>. Nemělo by se zde tedy vyskytnout URL webové stránky s textem či dalšími odkazy. Rovněž by se zde nemělo vyskytnout URL webové služby, která potřebuje další parametry k tomu, aby vrátila soubor. Naopak  URL volání webové služby, na které se vrátí soubor ke stažení obsahující všechna data datové sady v daném formátu zde být může.</p>",
        "help_license_author_type": "<h3>Autorské dílo</h3><p>Tato položka se řídí <a href=\"https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti#autorská_práva\" target=\"_blank\">podrobným návodem</a>. Její správné vyplnění je stěžejní pro to, aby byla mohla být distribuce datové sady považována za otevřenou. Věnujte tedy jejímu vyplnění maximální pozornost.</p>",
        "help_license_author_name": "<h3>Jména autorů díla</h3><p>Pokud je distribuce licencována pomocí CC BY 4.0, uveďte zde jména autorů díla, která jsou nezbytnou součástí informace o poskytnuté licenci a která je následně třeba uvést všude tam, kde je distribuce datové sady použita.</p>",
        "help_license_author_custom": "<h3>Odkaz na vlastní licenci k autorskému dílu</h3><p>Pokud je distribuce licencována pomocí vlastní licence, což <strong>se nedoporučuje</strong>, uveďte zde URL na webovou stránku s jejím textem.</p>",
        "help_license_db_type": "<h3>Originální databáze</h3><p>Tato položka se řídí <a href=\"https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti#autorskoprávní_ochrana_databáze_jako_díla\" target=\"_blank\">podrobným návodem</a>. Její správné vyplnění je stěžejní pro to, aby byla mohla být distribuce datové sady považována za otevřenou. Věnujte tedy jejímu vyplnění maximální pozornost.</p>",
        "help_license_db_name": "<h3>Jména autorů originální databáze</h3><p>Pokud je distribuce licencována jako originální databáze pomocí CC BY 4.0, uveďte zde jména autorů originální databáze,  která jsou nezbytnou součástí informace o poskytnuté licenci a která je následně třeba uvést všude tam, kde je distribuce datové sady použita.</p>",
        "hint_license_author_custom": "Uveďte HTTPS URL webové stránky s textem licence.",
        "hint_license_specialdb_custom": "Uveďte HTTPS URL webové stránky s textem licence.",
        "hint_license_author_name": "Pokud je autorů více, oddělujte je čárkou a mezerou.",
        "hint_license_db_name": "Pokud je autorů více, oddělujte je čárkou a mezerou.",
        "hint_license_db_custom": "Uveďte HTTPS URL webové stránky s textem licence",
        "help_license_db_custom": "<h3>Odkaz na vlastní licenci k originální databázi</h3><p>Pokud je distribuce licencována jako originální databáze pomocí vlastní licence, což <strong>se nedoporučuje</strong>, uveďte zde URL na webovou stránku s jejím textem.</p>",
        "help_license_specialdb_type": "<h3>Zvláštní právo pořizovatele databáze</h3><p>Tato položka se řídí <a href=\"https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti#zvláštní_práva_pořizovatele_databáze\" target=\"_blank\">podrobným návodem</a>. Její správné vyplnění je stěžejní pro to, aby byla mohla být distribuce datové sady považována za otevřenou. Věnujte tedy jejímu vyplnění maximální pozornost.</p>",
        "help_license_specialdb_custom": "<h3>Odkaz na vlastní licenci týkající se zvláštního práva pořizovatele databáze</h3><p>Pokud je distribuce licencována kvůli zvláštním právům pořizovatele databáze pomocí vlastní licence, což <strong>se nedoporučuje</strong>, uveďte zde URL na webovou stránku s jejím textem.</p>",
        "help_license_personal_type": "<h3>Osobní údaje</h3><p>Uveďte, zda distribuce datové sady obsahuje osobní údaje. Pokud ano, informujete tím uživatele této distribuce, že jejím použitím se na ně vztahují povinnosti správce osobních údajů.</p>",
        "license_author_ccby_full": "Autorské dílo licencované CC BY 4.0",
        "license_author_ccby_short": "CC BY 4.0",
        "license_author_no_full": "Neobsahuje autorská díla",
        "license_author_no_short": "Neobsahuje",
        "license_author_multi_full": "Obsahuje více autorských děl",
        "license_author_multi_short": "Obsahuje více děl",
        "license_author_custom_full": "Vlastní licence (nedoporučeno)",
        "license_author_custom_short": "Vlastní licence",
        "license_db_ccby_full": "Databáze licencována CC BY 4.0",
        "license_db_ccby_short": "CC BY 4.0",
        "license_db_no_full": "Není autorskoprávně chráněnou databází",
        "license_db_no_short": "Není chráněna",
        "license_db_custom_full": "Vlastní licence (nedoporučeno)",
        "license_db_custom_short": "Vlastní licence",
        "license_specialdb_cc0_full": "Licencováno CC0",
        "license_specialdb_cc0_short": "CC0",
        "license_specialdb_no_full": "Není chráněna zvláštním právem pořizovatele databáze",
        "license_specialdb_no_short": "Není chráněna",
        "license_specialdb_custom_full": "Vlastní licence (nedoporučeno)",
        "license_specialdb_custom_short": "Vlastní licence",
        "license_personal_no_full": "Neobsahuje osobní údaje",
        "license_personal_no_short": "Neobsahuje",
        "license_personal_yes_full": "Obsahuje osobní údaje",
        "license_personal_yes_short": "Obsahuje"
    }
};

function get(name) {
    if (process.env.NODE_ENV === "development") {
        if (labels.data[name] === undefined) {
            console.warn("Missing labels:", name);
        }
    }
    return labels.data[name];
}

function install(Vue, options) {

    // Add property getter to every component.
    Object.defineProperty(Vue.prototype, "$labels", {
        "get": function () {
            return this.$root._labels;
        }
    });

    // Add reactive (observed) value to root.
    Vue.mixin({
        "beforeCreate": function () {
            if (this.$root === this) {
                Vue.util.defineReactive(this, "_labels", labels);
            }
        }
    });

}

const Plugins = {
    "install": install
};

export default Plugins;
