import React from 'react';


/* ::IMPORTANT::
 * Any changes to the KEY part of any mapping must also be reflected on existing MongoDB documents.
 * (Mass MongDB replacing command must be used):

e.g. (for single Role architecture only, Meteor Mongo)

db.users.update(
   {"roles" : ["learner__Role"] },
   { $set: { "roles": ["LEARN"] } },
   {"multi": true}
);

 */


/* Account Configs */
export const ROLE__ACCOUNT = {
   "LEARN" : "Learner",
   "INSTR" : "Instructor"
};

/* Learner Profile Configs */
export const GENDER__LEARNPROF = {
   "M" : "Male",
   "F" : "Female",
   "O" : "Other",
};

export const COUNTRY__LEARNPROF = {

   "USA" : "United States",
   "GBR" : "United Kingdom",
   "CAN" : "Canada",
   "AUS" : "Australia",
   "AFG" : "Afghanistan",
   "ALA" : "Åland Islands",
   "ALB" : "Albania",
   "DZA" : "Algeria",
   "ASM" : "American Samoa",
   "AND" : "Andorra",
   "AGO" : "Angola",
   "AIA" : "Anguilla",
   "ATA" : "Antarctica",
   "ATG" : "Antigua and Barbuda",
   "ARG" : "Argentina",
   "ARM" : "Armenia",
   "ABW" : "Aruba",
   "AUT" : "Austria",
   "AZE" : "Azerbaijan",
   "BHS" : "Bahamas",
   "BHR" : "Bahrain",
   "BGD" : "Bangladesh",
   "BRB" : "Barbados",
   "BLR" : "Belarus",
   "BEL" : "Belgium",
   "BLZ" : "Belize",
   "BEN" : "Benin",
   "BMU" : "Bermuda",
   "BTN" : "Bhutan",
   "BOL" : "Bolivia, Plurinational State of",
   "BES" : "Bonaire, Sint Eustatius and Saba",
   "BIH" : "Bosnia and Herzegovina",
   "BWA" : "Botswana",
   "BVT" : "Bouvet Island",
   "BRA" : "Brazil",
   "IOT" : "British Indian Ocean Territory",
   "BRN" : "Brunei Darussalam",
   "BGR" : "Bulgaria",
   "BFA" : "Burkina Faso",
   "BDI" : "Burundi",
   "KHM" : "Cambodia",
   "CMR" : "Cameroon",
   "CPV" : "Cape Verde",
   "CYM" : "Cayman Islands",
   "CAF" : "Central African Republic",
   "TCD" : "Chad",
   "CHL" : "Chile",
   "CHN" : "China",
   "CXR" : "Christmas Island",
   "CCK" : "Cocos (Keeling) Islands",
   "COL" : "Colombia",
   "COM" : "Comoros",
   "COG" : "Congo",
   "COD" : "Congo, the Democratic Republic of the",
   "COK" : "Cook Islands",
   "CRI" : "Costa Rica",
   "CIV" : "Côte d'Ivoire",
   "HRV" : "Croatia",
   "CUB" : "Cuba",
   "CUW" : "Curaçao",
   "CYP" : "Cyprus",
   "CZE" : "Czech Republic",
   "DNK" : "Denmark",
   "DJI" : "Djibouti",
   "DMA" : "Dominica",
   "DOM" : "Dominican Republic",
   "ECU" : "Ecuador",
   "EGY" : "Egypt",
   "SLV" : "El Salvador",
   "GNQ" : "Equatorial Guinea",
   "ERI" : "Eritrea",
   "EST" : "Estonia",
   "ETH" : "Ethiopia",
   "FLK" : "Falkland Islands (Malvinas)",
   "FRO" : "Faroe Islands",
   "FJI" : "Fiji",
   "FIN" : "Finland",
   "FRA" : "France",
   "GUF" : "French Guiana",
   "PYF" : "French Polynesia",
   "ATF" : "French Southern Territories",
   "GAB" : "Gabon",
   "GMB" : "Gambia",
   "GEO" : "Georgia",
   "DEU" : "Germany",
   "GHA" : "Ghana",
   "GIB" : "Gibraltar",
   "GRC" : "Greece",
   "GRL" : "Greenland",
   "GRD" : "Grenada",
   "GLP" : "Guadeloupe",
   "GUM" : "Guam",
   "GTM" : "Guatemala",
   "GGY" : "Guernsey",
   "GIN" : "Guinea",
   "GNB" : "Guinea-Bissau",
   "GUY" : "Guyana",
   "HTI" : "Haiti",
   "HMD" : "Heard Island and McDonald Islands",
   "VAT" : "Holy See (Vatican City State)",
   "HND" : "Honduras",
   "HKG" : "Hong Kong",
   "HUN" : "Hungary",
   "ISL" : "Iceland",
   "IND" : "India",
   "IDN" : "Indonesia",
   "IRN" : "Iran, Islamic Republic of",
   "IRQ" : "Iraq",
   "IRL" : "Ireland",
   "IMN" : "Isle of Man",
   "ISR" : "Israel",
   "ITA" : "Italy",
   "JAM" : "Jamaica",
   "JPN" : "Japan",
   "JEY" : "Jersey",
   "JOR" : "Jordan",
   "KAZ" : "Kazakhstan",
   "KEN" : "Kenya",
   "KIR" : "Kiribati",
   "PRK" : "Korea, Democratic People's Republic of",
   "KOR" : "Korea, Republic of",
   "KWT" : "Kuwait",
   "KGZ" : "Kyrgyzstan",
   "LAO" : "Lao People's Democratic Republic",
   "LVA" : "Latvia",
   "LBN" : "Lebanon",
   "LSO" : "Lesotho",
   "LBR" : "Liberia",
   "LBY" : "Libya",
   "LIE" : "Liechtenstein",
   "LTU" : "Lithuania",
   "LUX" : "Luxembourg",
   "MAC" : "Macao",
   "MKD" : "Macedonia, the former Yugoslav Republic of",
   "MDG" : "Madagascar",
   "MWI" : "Malawi",
   "MYS" : "Malaysia",
   "MDV" : "Maldives",
   "MLI" : "Mali",
   "MLT" : "Malta",
   "MHL" : "Marshall Islands",
   "MTQ" : "Martinique",
   "MRT" : "Mauritania",
   "MUS" : "Mauritius",
   "MYT" : "Mayotte",
   "MEX" : "Mexico",
   "FSM" : "Micronesia, Federated States of",
   "MDA" : "Moldova, Republic of",
   "MCO" : "Monaco",
   "MNG" : "Mongolia",
   "MNE" : "Montenegro",
   "MSR" : "Montserrat",
   "MAR" : "Morocco",
   "MOZ" : "Mozambique",
   "MMR" : "Myanmar",
   "NAM" : "Namibia",
   "NRU" : "Nauru",
   "NPL" : "Nepal",
   "NLD" : "Netherlands",
   "NCL" : "New Caledonia",
   "NZL" : "New Zealand",
   "NIC" : "Nicaragua",
   "NER" : "Niger",
   "NGA" : "Nigeria",
   "NIU" : "Niue",
   "NFK" : "Norfolk Island",
   "MNP" : "Northern Mariana Islands",
   "NOR" : "Norway",
   "OMN" : "Oman",
   "PAK" : "Pakistan",
   "PLW" : "Palau",
   "PSE" : "Palestinian Territory, Occupied",
   "PAN" : "Panama",
   "PNG" : "Papua New Guinea",
   "PRY" : "Paraguay",
   "PER" : "Peru",
   "PHL" : "Philippines",
   "PCN" : "Pitcairn",
   "POL" : "Poland",
   "PRT" : "Portugal",
   "PRI" : "Puerto Rico",
   "QAT" : "Qatar",
   "REU" : "Réunion",
   "ROU" : "Romania",
   "RUS" : "Russian Federation",
   "RWA" : "Rwanda",
   "BLM" : "Saint Barthélemy",
   "SHN" : "Saint Helena, Ascension and Tristan da Cunha",
   "KNA" : "Saint Kitts and Nevis",
   "LCA" : "Saint Lucia",
   "MAF" : "Saint Martin (French part)",
   "SPM" : "Saint Pierre and Miquelon",
   "VCT" : "Saint Vincent and the Grenadines",
   "WSM" : "Samoa",
   "SMR" : "San Marino",
   "STP" : "Sao Tome and Principe",
   "SAU" : "Saudi Arabia",
   "SEN" : "Senegal",
   "SRB" : "Serbia",
   "SYC" : "Seychelles",
   "SLE" : "Sierra Leone",
   "SGP" : "Singapore",
   "SXM" : "Sint Maarten (Dutch part)",
   "SVK" : "Slovakia",
   "SVN" : "Slovenia",
   "SLB" : "Solomon Islands",
   "SOM" : "Somalia",
   "ZAF" : "South Africa",
   "SGS" : "South Georgia and the South Sandwich Islands",
   "SSD" : "South Sudan",
   "ESP" : "Spain",
   "LKA" : "Sri Lanka",
   "SDN" : "Sudan",
   "SUR" : "Suriname",
   "SJM" : "Svalbard and Jan Mayen",
   "SWZ" : "Swaziland",
   "SWE" : "Sweden",
   "CHE" : "Switzerland",
   "SYR" : "Syrian Arab Republic",
   "TWN" : "Taiwan, Province of China",
   "TJK" : "Tajikistan",
   "TZA" : "Tanzania, United Republic of",
   "THA" : "Thailand",
   "TLS" : "Timor-Leste",
   "TGO" : "Togo",
   "TKL" : "Tokelau",
   "TON" : "Tonga",
   "TTO" : "Trinidad and Tobago",
   "TUN" : "Tunisia",
   "TUR" : "Turkey",
   "TKM" : "Turkmenistan",
   "TCA" : "Turks and Caicos Islands",
   "TUV" : "Tuvalu",
   "UGA" : "Uganda",
   "UKR" : "Ukraine",
   "ARE" : "United Arab Emirates",
   "UMI" : "United States Minor Outlying Islands",
   "URY" : "Uruguay",
   "UZB" : "Uzbekistan",
   "VUT" : "Vanuatu",
   "VEN" : "Venezuela, Bolivarian Republic of",
   "VNM" : "Viet Nam",
   "VGB" : "Virgin Islands, British",
   "VIR" : "Virgin Islands, U.S.",
   "WLF" : "Wallis and Futuna",
   "ESH" : "Western Sahara",
   "YEM" : "Yemen",
   "ZMB" : "Zambia",
   "ZWE" : "Zimbabwe"

};

export const LANGUAGE__LEARNPROF = {

   "eng" : "English",
   "aar" : "Afar",
   "abk" : "Abkhazian",
   "afr" : "Afrikaans",
   "aka" : "Akan",
   "alb" : "Albanian",
   "amh" : "Amharic",
   "ara" : "Arabic",
   "arg" : "Aragonese",
   "arm" : "Armenian",
   "asm" : "Assamese",
   "ava" : "Avaric",
   "ave" : "Avestan",
   "aym" : "Aymara",
   "aze" : "Azerbaijani",
   "bak" : "Bashkir",
   "bam" : "Bambara",
   "baq" : "Basque",
   "bel" : "Belarusian",
   "ben" : "Bengali",
   "bih" : "Bihari languages",
   "bis" : "Bislama",
   "bos" : "Bosnian",
   "bre" : "Breton",
   "bul" : "Bulgarian",
   "bur" : "Burmese",
   "cat" : "Catalan; Valencian",
   "cha" : "Chamorro",
   "che" : "Chechen",
   "chi" : "Chinese (except Mandarin and Cantonese)",
   "chu" : "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
   "chv" : "Chuvash",
   "cmn" : "Mandarin ( Chinese )",
   "cor" : "Cornish",
   "cos" : "Corsican",
   "cre" : "Cree",
   "cze" : "Czech",
   "dan" : "Danish",
   "div" : "Divehi; Dhivehi; Maldivian",
   "dut" : "Dutch; Flemish",
   "dzo" : "Dzongkha",
   "epo" : "Esperanto",
   "est" : "Estonian",
   "ewe" : "Ewe",
   "fao" : "Faroese",
   "fij" : "Fijian",
   "fin" : "Finnish",
   "fre" : "French",
   "fry" : "Western Frisian",
   "ful" : "Fulah",
   "geo" : "Georgian",
   "ger" : "German",
   "gla" : "Gaelic; Scottish Gaelic",
   "gle" : "Irish",
   "glg" : "Galician",
   "glv" : "Manx",
   "gre" : "Greek, Modern (1453-)",
   "grn" : "Guarani",
   "guj" : "Gujarati",
   "hat" : "Haitian; Haitian Creole",
   "hau" : "Hausa",
   "heb" : "Hebrew",
   "her" : "Herero",
   "hin" : "Hindi",
   "hmo" : "Hiri Motu",
   "hrv" : "Croatian",
   "hun" : "Hungarian",
   "ibo" : "Igbo",
   "ice" : "Icelandic",
   "ido" : "Ido",
   "iii" : "Sichuan Yi; Nuosu",
   "iku" : "Inuktitut",
   "ile" : "Interlingue; Occidental",
   "ina" : "Interlingua (International Auxiliary Language Association)",
   "ind" : "Indonesian",
   "ipk" : "Inupiaq",
   "ita" : "Italian",
   "jav" : "Javanese",
   "jpn" : "Japanese",
   "kal" : "Kalaallisut; Greenlandic",
   "kan" : "Kannada",
   "kas" : "Kashmiri",
   "kau" : "Kanuri",
   "kaz" : "Kazakh",
   "khm" : "Central Khmer",
   "kik" : "Kikuyu; Gikuyu",
   "kin" : "Kinyarwanda",
   "kir" : "Kirghiz; Kyrgyz",
   "kom" : "Komi",
   "kon" : "Kongo",
   "kor" : "Korean",
   "kua" : "Kuanyama; Kwanyama",
   "kur" : "Kurdish",
   "lao" : "Lao",
   "lat" : "Latin",
   "lav" : "Latvian",
   "lim" : "Limburgan; Limburger; Limburgish",
   "lin" : "Lingala",
   "lit" : "Lithuanian",
   "ltz" : "Luxembourgish; Letzeburgesch",
   "lub" : "Luba-Katanga",
   "lug" : "Ganda",
   "mac" : "Macedonian",
   "mah" : "Marshallese",
   "mal" : "Malayalam",
   "mao" : "Maori",
   "mar" : "Marathi",
   "may" : "Malay",
   "mlg" : "Malagasy",
   "mlt" : "Maltese",
   "mon" : "Mongolian",
   "nau" : "Nauru",
   "nav" : "Navajo; Navaho",
   "nbl" : "Ndebele, South; South Ndebele",
   "nde" : "Ndebele, North; North Ndebele",
   "ndo" : "Ndonga",
   "nep" : "Nepali",
   "nno" : "Norwegian Nynorsk; Nynorsk, Norwegian",
   "nob" : "Bokmål, Norwegian; Norwegian Bokmål",
   "nor" : "Norwegian",
   "nya" : "Chichewa; Chewa; Nyanja",
   "oci" : "Occitan (post 1500); Provençal",
   "oji" : "Ojibwa",
   "ori" : "Oriya",
   "orm" : "Oromo",
   "oss" : "Ossetian; Ossetic",
   "pan" : "Panjabi; Punjabi",
   "per" : "Persian",
   "pli" : "Pali",
   "pol" : "Polish",
   "por" : "Portuguese",
   "pus" : "Pushto; Pashto",
   "que" : "Quechua",
   "roh" : "Romansh",
   "rum" : "Romanian; Moldavian; Moldovan",
   "run" : "Rundi",
   "rus" : "Russian",
   "sag" : "Sango",
   "san" : "Sanskrit",
   "sin" : "Sinhala; Sinhalese",
   "slo" : "Slovak",
   "slv" : "Slovenian",
   "sme" : "Northern Sami",
   "smo" : "Samoan",
   "sna" : "Shona",
   "snd" : "Sindhi",
   "som" : "Somali",
   "sot" : "Sotho, Southern",
   "spa" : "Spanish; Castilian",
   "srd" : "Sardinian",
   "srp" : "Serbian",
   "ssw" : "Swati",
   "sun" : "Sundanese",
   "swa" : "Swahili",
   "swe" : "Swedish",
   "tah" : "Tahitian",
   "tam" : "Tamil",
   "tat" : "Tatar",
   "tel" : "Telugu",
   "tgk" : "Tajik",
   "tgl" : "Tagalog",
   "tha" : "Thai",
   "tib" : "Tibetan",
   "tir" : "Tigrinya",
   "ton" : "Tonga (Tonga Islands)",
   "tsn" : "Tswana",
   "tso" : "Tsonga",
   "tuk" : "Turkmen",
   "tur" : "Turkish",
   "twi" : "Twi",
   "uig" : "Uighur; Uyghur",
   "ukr" : "Ukrainian",
   "urd" : "Urdu",
   "uzb" : "Uzbek",
   "ven" : "Venda",
   "vie" : "Vietnamese",
   "vol" : "Volapük",
   "wel" : "Welsh",
   "wln" : "Walloon",
   "wol" : "Wolof",
   "xho" : "Xhosa",
   "yid" : "Yiddish",
   "yor" : "Yoruba",
   "yue" : "Cantonese ( Chinese )",
   "zha" : "Zhuang; Chuang",
   "zul" : "Zulu"

};

export const LANG_PROFIC__LEARNPROF = {

   0 : "No proficiency",
   1 : "Elementary proficiency",
   2 : "Limited Working proficiency",
   3 : "Professional Working proficiency",
   4 : "Full Professional proficiency",
   5 : "Native <i>or</i> Bilingual proficiency"

};

export const EDUC_LEVEL__LEARNPROF = {

   0 : "Elementary / Primary school",
   1 : "Lower Secondary / High school",
   2 : "Upper Secondary / High school",
   3 : "College education <i>or equal.</i>",
   4 : "Bachelor education <i>or equal.</i>",
   5 : "Master / Postgraduate education <i>or equal.</i>",
   6 : "PhD (Doctorate)"

};
