import { Api } from "../types/networkingTypes"

const testData = [
  {
    "itemCode": "TLIFBC092",
    "name": "Futura Comfort PVC-vapaa lankku Mountain Oak 21,8X121",
    "gtin": null,
    "attributes": [
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,28",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Asennuksestajaavahukka",
        "name": "Asennuksesta jäävä hukkaprosentti",
        "value": "5-10%",
        "url": null,
        "originalId": "PrAsennuksestaJaavaHukka",
        "images": []
      },
      {
        "id": "Asennusladonta",
        "name": "Asennussuunta/ladonta",
        "value": "Riviladonta",
        "url": null,
        "originalId": "PrAsennusladonta",
        "images": []
      },
      {
        "id": "Asennustapasuositeltuvinyylit",
        "name": "Suositeltu asennustapa",
        "value": "Kelluva asennus lukkopontti",
        "url": null,
        "originalId": "PrAsennustapaSuositeltuVinyylit",
        "images": []
      },
      {
        "id": "Asennustapavinyylit",
        "name": "Asennustavat",
        "value": "Kelluva asennus lukkopontti",
        "url": null,
        "originalId": "PrAsennustavatVinyylit",
        "images": []
      },
      {
        "id": "Askelaanieristavyysdb",
        "name": "Askeläänieristävyys dB",
        "value": "18",
        "url": null,
        "originalId": "PrAskelAAnieristavyys",
        "images": []
      },
      {
        "id": "Hankauksenkestokoe",
        "name": "Hankauksenkestokoe (EN 660)",
        "value": "Luokka T",
        "url": null,
        "originalId": "PrHankauksenkesto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,28",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "TLIFBC092",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Lattiat",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kiiltoaste",
        "name": "Kiiltoaste",
        "value": "Matta",
        "url": null,
        "originalId": "PrLaatanKiiltoaste",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "21,8",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "8",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kulutuksenkestavyysen685",
        "name": "Kulutuksenkestävyys (EN 685)",
        "value": "33 julkiset tilat kova kulutus, 42 teolliset tilat normaali kulutus",
        "url": null,
        "originalId": "PrKulutusluokkaVinyylitVanha",
        "images": []
      },
      {
        "id": "Kulutuskalvonpaksuusmm",
        "name": "Kulutuskalvon paksuus mm",
        "value": "0,3",
        "url": null,
        "originalId": "PrKulutuskalvonPaksuus",
        "images": []
      },
      {
        "id": "Lanseerauspvm",
        "name": "Tuotteen varastointi pvm alkaen",
        "value": "16.1.2025",
        "url": null,
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "121",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "Limityssuositus",
        "name": "Limitys",
        "value": "väh. 15 cm",
        "url": null,
        "originalId": "PrLimityssuositus",
        "images": []
      },
      {
        "id": "Liukkausluokkakengalle",
        "name": "Liukkausluokka R9-R13 kengälle",
        "value": "R09",
        "url": null,
        "originalId": "ItemLiukkauskengalla",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "2,1",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mixable",
        "name": "Valmistuserät sekoitettavissa keskenään",
        "value": "Ei",
        "url": null,
        "originalId": "ItemMixable",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "0",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "8,5",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "Futura Comfort PVC-vapaa lankku Mountain Oak 21,8X121",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "84",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Paastoluokka",
        "name": "Päästöluokka",
        "value": "M1",
        "url": null,
        "originalId": "PrPaastoluokka",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Paloluokka",
        "name": "Paloluokka",
        "value": "Bfl-s1",
        "url": null,
        "originalId": "ItemPaloluokkaSeinat",
        "images": []
      },
      {
        "id": "Pohjamateriaalivinyylit",
        "name": "Pohjamateriaali",
        "value": "Integroitu äänenvaimennuspohja",
        "url": null,
        "originalId": "PrPohjamateriaaliVinyylit",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "Futura Comfort",
        "url": "/tuotteet/sarjat/futura-comfort/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Soveltuvuuslattialammitykseen",
        "name": "Soveltuvuus lattialämmitykseen",
        "value": "maks +27 °C",
        "url": null,
        "originalId": "PrSoveltuvuusLattialammitykseen",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,6",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "5 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Takuunlisatiedot",
        "name": "Takuun lisätiedot",
        "value": "Kulutuspinnan takuu 10 vuotta.",
        "url": null,
        "originalId": "PrTakuuLisatiedot",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Laattapiste-Pukkila tuote",
        "url": null,
        "originalId": "ItemBrandi",
        "images": []
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Puolikovat pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Tammi",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "Mountain Oak",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Viistetytreunat",
        "name": "Viistetyt reunat",
        "value": "4 viistettä",
        "url": null,
        "originalId": "PrReunaviiste",
        "images": []
      },
      {
        "id": "Ymparistoseloste",
        "name": "Ympäristöseloste (EPD)",
        "value": "Lataa ympäristödokumentti EPD (yllä).",
        "url": null,
        "originalId": "PrYmparistoseloste",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/TLIFBC092-Futura-Comfort-PVC-vapaa-lankku-Mountain-Oak-218X121-151826.jpg?preset=120w",
        "maxWidth": 2560,
        "maxHeight": 392,
        "modifiedDate": "2024-09-30T12:35:33+03:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 50.45,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 50.45,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "M2",
    "documents": [
      {
        "resourceFileId": 154154,
        "name": "Esite",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/esite_futura_comfort_esite_a4_08_2024.pdf",
        "modifiedDate": "2024-08-23T11:00:24+03:00"
      },
      {
        "resourceFileId": 149833,
        "name": "Testitulos",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/m1_todistus_futura_comfort.pdf",
        "modifiedDate": "2024-05-17T10:50:14+03:00"
      },
      {
        "resourceFileId": 137133,
        "name": "Ympäristödokumentti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/epd_futura_comfort_2024.pdf",
        "modifiedDate": "2024-01-11T10:05:24+02:00"
      },
      {
        "resourceFileId": 137676,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/FuturaComfort_hoito-ohje_ja_takuu_1-2024.pdf",
        "modifiedDate": "2024-01-19T14:35:31+02:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "Futura Comfort",
      "shortMarketingText": "Futura Comfort on kestävä valinta vilkkaasti liikennöidyn toimiston, hotellin, ravintolan tai liiketilan lattiaksi. Klassinen kuosi- ja värimaailma yhdistyy tässä lattiassa uusimpaan ympäristölle ystävällisempään materiaaliteknologiaan. PVC-vapaan Futura Comfortin valmistuksesta aiheutuu vähemmän hiilidioksidipäästöjä kuin perinteisten vinyylilankkujen valmistuksesta. Futura Comfortin valmistuksessa on käytetty mm. biopohjaisia raaka-aineita, eikä lainkaan PVC:tä. Futura Comfortissa on valmiina askelääniä vaimentava pohjakerros. Asentaminen on kätevien ponttien ansiosta vaivatonta.",
      "url": "/tuotteet/sarjat/futura-comfort/",
      "articleId": "FUTCOM"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Arvioitu tulopäivä 17.1.2025.",
    "availabilityText": "josta vapaana yli 500 m2.",
    "modifiedDate": "2024-12-03T09:34:16.25+02:00"
  },
  {
    "itemCode": "4000017153",
    "name": "LPC Alaska lasittamaton porcelanato mosaiikki 5X5 01 kalkki laineileva matta leikattu lasikuituverkolla 30X30",
    "gtin": "8055493152493",
    "attributes": [
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,48",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,48",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "4000017153",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttoonottopuhdistus",
        "name": "Saumauksen jälkeinen pesu",
        "value": "Fila Deterdek Pro (sementtipohjaisille saumoille)",
        "url": null,
        "originalId": "PrKayttoonottopuhdistus",
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Seinät, Lattiat",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kiiltoaste",
        "name": "Kiiltoaste",
        "value": "Matta",
        "url": null,
        "originalId": "PrLaatanKiiltoaste",
        "images": []
      },
      {
        "id": "Kiinnityssuosituslattiat",
        "name": "Suositeltu kiinnitystapa lattiat",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 1,34 kg/m2.",
        "url": null,
        "originalId": "PrKiinnitysLaata",
        "images": []
      },
      {
        "id": "Kiinnityssuositusseinat",
        "name": "Suositeltu kiinnitystapa seinät",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 1,28 kg/m2.",
        "url": null,
        "originalId": "PrKiinnityssuositusSeina",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "5",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "6",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kuosi",
        "name": "Kuosi",
        "value": "Kivi",
        "url": null,
        "originalId": "ItemKuosi",
        "images": []
      },
      {
        "id": "Kuosivariaatioidenlukumaara",
        "name": "Kuosivariaatioiden lukumäärä",
        "value": "30",
        "url": null,
        "originalId": "ItemKuosivariaatioidenLukumaara",
        "images": []
      },
      {
        "id": "Laatanlasitus",
        "name": "Laatan lasitus",
        "value": "Lasittamaton",
        "url": null,
        "originalId": "PrLasitettu",
        "images": []
      },
      {
        "id": "Laatantyyppi",
        "name": "Laatan tyyppi",
        "value": "Mosaiikki",
        "url": null,
        "originalId": "PrLaatanTyyppi",
        "images": []
      },
      {
        "id": "Laatanvalmistuskokocm",
        "name": "Laatan valmistuskoko cm",
        "value": "4,8X4,8",
        "url": null,
        "originalId": "ItemLaatanValmistuskoko",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "5",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "Liukkausluokkajalalla",
        "name": "Liukkausluokka A, B, C jalalle",
        "value": "B",
        "url": null,
        "originalId": "ItemLiukkausmarallajalalla",
        "images": []
      },
      {
        "id": "Liukkausluokkakengalle",
        "name": "Liukkausluokka R9-R13 kengälle",
        "value": "R10",
        "url": null,
        "originalId": "ItemLiukkauskengalla",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "0",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mitoitustarkkuus",
        "name": "Mitoitustarkkuus",
        "value": "Leikattu",
        "url": null,
        "originalId": "PrRektifioitu",
        "images": []
      },
      {
        "id": "Modulaarinenlaatta",
        "name": "Modulaarinen laatta",
        "value": "Ei",
        "url": null,
        "originalId": "PrModulaarinenlaatta",
        "images": []
      },
      {
        "id": "Monokaliiberi",
        "name": "Monokaliiberi",
        "value": "Ei",
        "url": null,
        "originalId": "PrMonokaliber",
        "images": []
      },
      {
        "id": "Muoto",
        "name": "Muoto",
        "value": "Neliö",
        "url": null,
        "originalId": "PrLaatanMuoto",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "1",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "2,07",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "LPC Alaska lasittamaton porcelanato mosaiikki 5X5 01 kalkki laineileva matta leikattu lasikuituverkolla 30X30",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkaus",
        "name": "Varastoinnin oletuspakkaus",
        "value": "EUR-Kuormalava",
        "url": null,
        "originalId": "ItemOletuspakkaus",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "360",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Pinnanesikasittely",
        "name": "Pinnan esikäsittely",
        "value": "Ei vaadi esikäsittelyä",
        "url": null,
        "originalId": "PrPinnanEsikasittely",
        "images": []
      },
      {
        "id": "Pinnanmuoto",
        "name": "Pinnanmuoto",
        "value": "Laineileva",
        "url": null,
        "originalId": "PrLaatanPinnanMuoto",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "LPC Alaska",
        "url": "/tuotteet/sarjat/lpc-alaska/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Saumanleveysmm",
        "name": "Saumaleveys vähintään mm",
        "value": "2",
        "url": null,
        "originalId": "PrSaumanleveydet",
        "images": []
      },
      {
        "id": "Suositeltavasaumanvari",
        "name": "Suositeltu saumausaine / saumaväri",
        "value": "Fugabella Color KK64, Fugabella Color 05",
        "url": null,
        "originalId": "ItemSuositeltavasaumanvari",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,9",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "5 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Tasausjarjestelmankayttosuositus",
        "name": "Tasausjärjestelmän käyttösuositus",
        "value": "Ei",
        "url": null,
        "originalId": "PrTasausjarjestelma",
        "images": []
      },
      {
        "id": "Tuotekuvaus",
        "name": "Tuotekuvaus",
        "value": "LPC Alaska -sarjaan kuuluva neliön muotoinen lasittamaton 5x5 leikattu porcelanato-mosaiikki. Mosaiikki on mattapintainen, väriltään vaaleanvalkoinen, jolla on laineileva kivi-kuosinen pinta. Tuote soveltuu seinälaataksi ja lattialaataksi sisätiloissa. Yksittäiset laatat on yhdistetty toisiinsa 30X30 cm lasikuituverkolla asennustyön helpottamiseksi.",
        "url": null,
        "originalId": "PrMarkkinointiteksti",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Laattapiste Collection",
        "url": null,
        "originalId": "ItemBrandi",
        "images": []
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Kovat pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Valmistustapalaatat",
        "name": "Valmistustapa",
        "value": "Kuivapuristettu lasittamaton porcellanato (SFS EN 14411, BIa, UGL)",
        "url": null,
        "originalId": "PrValmistustapaLaatat",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Valkoinen",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "01 kalkki",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Varivaihtelu",
        "name": "Värivaihtelu V1-V4",
        "value": "V2 Vähäinen",
        "url": null,
        "originalId": "ItemKirjavuus",
        "images": []
      },
      {
        "id": "Verkotetunarkinkoko",
        "name": "Verkotetun arkin koko cm",
        "value": "30X30",
        "url": null,
        "originalId": "PrVerkotetunArkinKoko",
        "images": []
      },
      {
        "id": "Verkotus",
        "name": "Verkotus",
        "value": "Lasikuituverkolla",
        "url": null,
        "originalId": "PrVerkotus",
        "images": []
      },
      {
        "id": "Ymparistoseloste",
        "name": "Ympäristöseloste (EPD)",
        "value": "Toimitetaan pyydettäessä - pyynnöt tilaukset@laattapiste.fi",
        "url": null,
        "originalId": "PrYmparistoseloste",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/4000017153-LPC-Alaska-lasittamaton-porcelanato-mosaiikki-5X5-01-kalkki-laineileva-matta-leikattu-lasikuituverk-137346.jpg?preset=120w",
        "maxWidth": 1080,
        "maxHeight": 1080,
        "modifiedDate": "2024-05-06T10:55:11+03:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 19.05,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 19.05,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "ARK",
    "documents": [
      {
        "resourceFileId": 621,
        "name": "Suoritustasoilmoitus (DoP)",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/DoP-Keraamiset_laatat-LPC.pdf",
        "modifiedDate": "2022-09-24T15:13:52+03:00"
      },
      {
        "resourceFileId": 121172,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Hoito-ohje_Porcellanato_FI_GB_SE_05_2023.pdf",
        "modifiedDate": "2023-05-03T14:30:06+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "LPC Alaska",
      "shortMarketingText": "LPC Alaska -sarjan laatoissa on vähäeleinen kivikuosi. Hillitty pintakuvio tuo tilaan rauhallista tunnelmaa. Neutraalit ja pehmeät värisävyt ovat ajattomia ja sopivat monenlaiseen sisustukseen. LPC Alaska -sarja on monikäyttöinen ja se on suunniteltu niin kodin tiloihin kuin julkitilarakentamisen kohteisiin, sisään ja ulos. Sarjan erilaisia mosaiikkeja voidaan käyttää tehosteena tai vaikka suihkutilan lattialla. Ulkolaatoitukseen löytyy kolmesta eri laattakoosta koostuva sekoitelma, joilla voidaan toteuttaa roomalainen ladonta.",
      "url": "/tuotteet/sarjat/lpc-alaska/",
      "articleId": "LPCALASKA"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana 462 ark. Seuraava saapuminen 31.12.2024",
    "modifiedDate": "2024-12-03T07:36:08.74+02:00"
  },
  {
    "itemCode": "W010000112",
    "name": "wedi rakennuslevy 2500x600x12,5 mm",
    "gtin": "4024125085298",
    "attributes": [
      {
        "id": "Bruttopaino",
        "name": "Bruttopaino kg",
        "value": "5,1",
        "url": null,
        "originalId": "ItemBruttopaino",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "W010000112",
        "url": null,
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "250",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "1",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Lampotilojenkestavyysc",
        "name": "Lämpötilojen kestävyys °C",
        "value": "– 50 °C...+75 °C",
        "url": null,
        "originalId": "PrLampotilojenkestavyys",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "60",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "1",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "wedi rakennuslevy 2500x600x12,5 mm",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "50",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Paastoluokka",
        "name": "Päästöluokka",
        "value": "M1",
        "url": null,
        "originalId": "PrPaastoluokka",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "wedi rakennuslevy",
        "url": "/tuotteet/sarjat/wedi-rakennuslevy/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "1,25",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Tuotekuvaus",
        "name": "Tuotekuvaus",
        "value": "Vedeneristyslevy, lasikuituverkolla vahvistettu ja erikoisementtilaastilla pinnoitettu XPS-levy, laatoitusvalmis, vedenkestävä ja lämpöä eristävä, päästöluokka M1.",
        "url": null,
        "originalId": "PrMarkkinointiteksti",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Laattapiste-Pukkila tuote",
        "url": null,
        "originalId": "ItemBrandi",
        "images": []
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "XPS levyt ja tuotteet",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Tuoteryhmatr4",
        "name": "Alatuoteryhmä ",
        "value": "XPS rakennuslevyt",
        "url": null,
        "originalId": "ItemTuoteryhmaTR4",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/W010000112-wedi-rakennuslevy-2500x600x125-mm-91265.jpg?preset=120w",
        "maxWidth": 653,
        "maxHeight": 490,
        "modifiedDate": "2023-01-04T15:33:24+02:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 52.79,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 52.79,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "KPL",
    "documents": [
      {
        "resourceFileId": 1518,
        "name": "Asennusohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/asennusopas_wedi_seinaratkaisut_markatiloissa.pdf",
        "modifiedDate": "2022-09-24T14:27:45+03:00"
      },
      {
        "resourceFileId": 142913,
        "name": "Esite",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Esite_Wedi_ratkaisut_kylpyhuoneeseen_2024.pdf",
        "modifiedDate": "2024-03-06T10:50:14+02:00"
      },
      {
        "resourceFileId": 1527,
        "name": "Esite",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/esite_wedi_rakennuslevyt_kylpyhuoneeseen.pdf",
        "modifiedDate": "2022-09-24T14:22:30+03:00"
      },
      {
        "resourceFileId": 517,
        "name": "Sertifikaatti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/sertifikaatti_wedi_levyt_ja_erikoislevyt.pdf",
        "modifiedDate": "2022-09-24T14:22:32+03:00"
      },
      {
        "resourceFileId": 693,
        "name": "Testitulos",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/wedi_markatilalevy_m1_todistus.pdf",
        "modifiedDate": "2022-09-24T14:22:33+03:00"
      },
      {
        "resourceFileId": 5058,
        "name": "Tuotekortti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/tuotekortti_wedi_td_rakennuslevy_fi.pdf",
        "modifiedDate": "2022-09-24T14:27:44+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "wedi rakennuslevy",
      "shortMarketingText": "Vedeneristyslevy, lasikuituverkolla vahvistettu ja erikoisementtilaastilla pinnoitettu XPS-levy.",
      "url": "/tuotteet/sarjat/wedi-rakennuslevy/",
      "articleId": "WLEVY"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana yli 500 kpl.",
    "modifiedDate": "2024-12-12T05:00:16.933+02:00"
  },
  {
    "itemCode": "4000014608",
    "name": "Pukkila Imperial lasitettu kaakeli laatta 30X60 01 puuteri tasapintainen kiiltävä rektifioitu",
    "gtin": "8684430000858",
    "attributes": [
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "6,74",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "6,74",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "4000014608",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttoonottopuhdistus",
        "name": "Saumauksen jälkeinen pesu",
        "value": "Fila Deterdek Pro (sementtipohjaisille saumoille)",
        "url": null,
        "originalId": "PrKayttoonottopuhdistus",
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Seinät",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kiiltoaste",
        "name": "Kiiltoaste",
        "value": "Kiiltävä",
        "url": null,
        "originalId": "PrLaatanKiiltoaste",
        "images": []
      },
      {
        "id": "Kiinnityssuositusseinat",
        "name": "Suositeltu kiinnitystapa seinät",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 2,94 kg/m2.",
        "url": null,
        "originalId": "PrKiinnityssuositusSeina",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "30",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "9",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kuosi",
        "name": "Kuosi",
        "value": "Marmori",
        "url": null,
        "originalId": "ItemKuosi",
        "images": []
      },
      {
        "id": "Kuosivariaatioidenlukumaara",
        "name": "Kuosivariaatioiden lukumäärä",
        "value": "24",
        "url": null,
        "originalId": "ItemKuosivariaatioidenLukumaara",
        "images": []
      },
      {
        "id": "Laatanlasitus",
        "name": "Laatan lasitus",
        "value": "Lasitettu",
        "url": null,
        "originalId": "PrLasitettu",
        "images": []
      },
      {
        "id": "Laatantyyppi",
        "name": "Laatan tyyppi",
        "value": "Laatta",
        "url": null,
        "originalId": "PrLaatanTyyppi",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "60",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "1,62",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mallisto",
        "name": "Mallisto",
        "value": "LPC Asuntorakentamisen mallisto",
        "url": null,
        "originalId": "ItemMallisto",
        "images": []
      },
      {
        "id": "Mitoitustarkkuus",
        "name": "Mitoitustarkkuus",
        "value": "Rektifioitu",
        "url": null,
        "originalId": "PrRektifioitu",
        "images": []
      },
      {
        "id": "Modulaarinenlaatta",
        "name": "Modulaarinen laatta",
        "value": "Ei",
        "url": null,
        "originalId": "PrModulaarinenlaatta",
        "images": []
      },
      {
        "id": "Monokaliiberi",
        "name": "Monokaliiberi",
        "value": "Ei",
        "url": null,
        "originalId": "PrMonokaliber",
        "images": []
      },
      {
        "id": "Muoto",
        "name": "Muoto",
        "value": "Suorakaide",
        "url": null,
        "originalId": "PrLaatanMuoto",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "0",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "12,96",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "Pukkila Imperial lasitettu kaakeli laatta 30X60 01 puuteri tasapintainen kiiltävä rektifioitu",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkaus",
        "name": "Varastoinnin oletuspakkaus",
        "value": "EUR-Kuormalava",
        "url": null,
        "originalId": "ItemOletuspakkaus",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "97,2",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Pinnanesikasittely",
        "name": "Pinnan esikäsittely",
        "value": "Esikostuta saumat ennen saumausta.",
        "url": null,
        "originalId": "PrPinnanEsikasittely",
        "images": []
      },
      {
        "id": "Pinnanmuoto",
        "name": "Pinnanmuoto",
        "value": "Tasapintainen",
        "url": null,
        "originalId": "PrLaatanPinnanMuoto",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "Pukkila Imperial",
        "url": "/tuotteet/sarjat/pukkila-imperial/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Saumanleveysmm",
        "name": "Saumaleveys vähintään mm",
        "value": "2",
        "url": null,
        "originalId": "PrSaumanleveydet",
        "images": []
      },
      {
        "id": "Suositeltavasaumanvari",
        "name": "Suositeltu saumausaine / saumaväri",
        "value": "Fugabella Color KK4, Fugabella Color 05",
        "url": null,
        "originalId": "ItemSuositeltavasaumanvari",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,7",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "5 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Tasausjarjestelmankayttosuositus",
        "name": "Tasausjärjestelmän käyttösuositus",
        "value": "Kyllä",
        "url": null,
        "originalId": "PrTasausjarjestelma",
        "images": []
      },
      {
        "id": "Tuotekuvaus",
        "name": "Tuotekuvaus",
        "value": "Pukkila Imperial -sarjaan kuuluva suorakaiteen muotoinen lasitettu 30x60 rektifioitu kaakeli-laatta. Laatta on kiiltäväpintainen, väriltään vaaleanvalkoinen, jolla on tasapintainen marmori-kuosinen pinta. Tuote soveltuu seinälaataksi sisätiloissa.",
        "url": null,
        "originalId": "PrMarkkinointiteksti",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Pukkila",
        "url": null,
        "originalId": "ItemBrandi",
        "images": [
          {
            "imageUrl": "/globalassets/adeona/resources/tuotemerkki_p.svg?preset=120w",
            "altText": "Pukkila",
            "maxWidth": 0,
            "maxHeight": 0,
            "modifiedDate": "2023-03-22T15:05:26+02:00"
          }
        ]
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Kovat pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Valmistustapalaatat",
        "name": "Valmistustapa",
        "value": "Kuivapuristettu kaakeli (SFS EN 14411, BIII)",
        "url": null,
        "originalId": "PrValmistustapaLaatat",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Valkoinen",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "01 puuteri",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Varivaihtelu",
        "name": "Värivaihtelu V1-V4",
        "value": "V3 Kohtalainen",
        "url": null,
        "originalId": "ItemKirjavuus",
        "images": []
      },
      {
        "id": "Ymparistoseloste",
        "name": "Ympäristöseloste (EPD)",
        "value": "Toimitetaan pyydettäessä - pyynnöt tilaukset@laattapiste.fi",
        "url": null,
        "originalId": "PrYmparistoseloste",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-127843.jpg?preset=120w",
        "maxWidth": 2402,
        "maxHeight": 1220,
        "modifiedDate": "2024-07-16T14:34:18+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-127836.jpg?preset=120w",
        "maxWidth": 2402,
        "maxHeight": 1220,
        "modifiedDate": "2024-07-16T14:34:18+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-127833.jpg?preset=120w",
        "maxWidth": 2402,
        "maxHeight": 1220,
        "modifiedDate": "2024-07-16T14:34:18+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-127840.jpg?preset=120w",
        "maxWidth": 2402,
        "maxHeight": 1220,
        "modifiedDate": "2024-07-16T14:34:18+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-127830.jpg?preset=120w",
        "maxWidth": 2402,
        "maxHeight": 1220,
        "modifiedDate": "2024-07-16T14:34:19+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-137298.jpg?preset=120w",
        "maxWidth": 1440,
        "maxHeight": 1440,
        "modifiedDate": "2024-07-16T14:34:36+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014608-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-01-puuteri-tasapintainen-kiiltava-rektifioitu-129017.jpg?preset=120w",
        "maxWidth": 2111,
        "maxHeight": 1440,
        "modifiedDate": "2024-07-16T14:34:36+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/4000014607-Pukkila-Imperial-lasitettu-kaakeli-laatta-30X60-03-savu-tasapintainen-kiiltava-rektifioitu-129019.jpg?preset=120w",
        "maxWidth": 2073,
        "maxHeight": 1440,
        "modifiedDate": "2024-07-16T14:00:30+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/PUKIMPERI-Pukkila-Imperial-138462.jpg?preset=120w",
        "maxWidth": 1945,
        "maxHeight": 1440,
        "modifiedDate": "2024-03-11T10:56:26+02:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 35.66,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 35.66,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "M2",
    "documents": [
      {
        "resourceFileId": 621,
        "name": "Suoritustasoilmoitus (DoP)",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/DoP-Keraamiset_laatat-LPC.pdf",
        "modifiedDate": "2022-09-24T15:13:52+03:00"
      },
      {
        "resourceFileId": 121170,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Hoito-ohje_Kaakeli_FI-_GB_SE_05_2023.pdf",
        "modifiedDate": "2023-05-03T14:30:09+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "Pukkila Imperial",
      "shortMarketingText": "Pukkila Imperial -sarjan laatoissa on elävä ja kaunis marmorikuosi. Tämä ilmeikäs marmorikuosi tuo tilaan arvokkuutta ja ryhtiä. Perinteisien vaaleiden puuteri ja tuhka -sävyjen lisäksi sarjasta löytyy myös rohkeampi tumma sävy savu. Seinälaataksi on kaksi vaihtoehtoa, matta 20x40 cm tai kiiltävä 30x60 cm. Lattiavaihtoehto 10x10 cm löytyy samasta sarjasta.",
      "url": "/tuotteet/sarjat/pukkila-imperial/",
      "articleId": "PUKIMPERI"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana yli 500 m2.",
    "modifiedDate": "2024-12-12T20:20:29.553+02:00"
  },
  {
    "itemCode": "TLICQB4219006",
    "name": "Interface Output Loop tekstiililaatta 4219006 Steel 50X50",
    "gtin": null,
    "attributes": [
      {
        "id": "Aanieristavyys1000hz",
        "name": "Äänen absorbtio alfa s taajuudella 1000 Hz (EN ISO 354)",
        "value": "0,15",
        "url": null,
        "originalId": "PrAanieristavyys1000Hz",
        "images": []
      },
      {
        "id": "Aanieristavyys125hz",
        "name": "Äänen absorbtio alfa s taajuudella 125 Hz (EN ISO 354)",
        "value": "-0,01",
        "url": null,
        "originalId": "PrAanieristavyys125hZ",
        "images": []
      },
      {
        "id": "Aanieristavyys2000hz",
        "name": "Äänen absorbtio alfa s taajuudella 2000 Hz (EN ISO 354)",
        "value": "0,27",
        "url": null,
        "originalId": "PrAanieristavyys2000Hz",
        "images": []
      },
      {
        "id": "Aanieristavyys250hz",
        "name": "Äänen absorbtio alfa s taajuudella 250 Hz (EN ISO 354)",
        "value": "0,02",
        "url": null,
        "originalId": "PrAanieristavyys250Hz",
        "images": []
      },
      {
        "id": "Aanieristavyys4000hz",
        "name": "Äänen absorbtio alfa s taajuudella 4000 Hz (EN ISO 354)",
        "value": "0,32",
        "url": null,
        "originalId": "PrAanieristavyys4000Hz",
        "images": []
      },
      {
        "id": "Aanieristavyys500hz",
        "name": "Äänen absorbtio alfa s taajuudella 500 Hz (EN ISO 354)",
        "value": "0,04",
        "url": null,
        "originalId": "PrAanieristavyys500Hz",
        "images": []
      },
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "5,72",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Akustinenominaisuusarvo",
        "name": "Äänen absorbtioarvo alfa w (EN ISO 11654)",
        "value": "0,15",
        "url": null,
        "originalId": "PrAkustinenOminaisuusArvo",
        "images": []
      },
      {
        "id": "Allergiatunnukset",
        "name": "Allergiatunnus",
        "value": "Tuotteella on Allergia-, iho- ja astmaliiton Allergiatunnuksen käyttöoikeus",
        "url": null,
        "originalId": "PrAllergiaTunnukset",
        "images": [
          {
            "imageUrl": "/globalassets/adeona/resources/allergiatunnukset_1.svg?preset=120w",
            "altText": "Tuotteella on Allergia-, iho- ja astmaliiton Allergiatunnuksen käyttöoikeus",
            "maxWidth": 0,
            "maxHeight": 0,
            "modifiedDate": "2024-03-14T12:05:04+02:00"
          }
        ]
      },
      {
        "id": "Asennuksestajaavahukka",
        "name": "Asennuksesta jäävä hukkaprosentti",
        "value": "Shakkiruutuasennus: 3-4% \nYksisuuntainen asennus: 3-4%",
        "url": null,
        "originalId": "PrAsennuksestaJaavaHukka",
        "images": []
      },
      {
        "id": "Asennusladonta",
        "name": "Asennussuunta/ladonta",
        "value": "Shakkiruutuasennus, Yksisuuntainen asennus",
        "url": null,
        "originalId": "PrAsennusladonta",
        "images": []
      },
      {
        "id": "Asennustapamatot",
        "name": "Asennustavat",
        "value": "Liimavapaa TacTiles® -tarrakiinnitys, Irtoasennus tarraliimalla",
        "url": null,
        "originalId": "PrAsennustavatMatot",
        "images": []
      },
      {
        "id": "Asennustapasuositeltumatot",
        "name": "Suositeltu asennustapa",
        "value": "Liimavapaa TacTiles® -tarrakiinnitys",
        "url": null,
        "originalId": "PrAsennustapaSuositeltuMatot",
        "images": []
      },
      {
        "id": "Askelaanieristavyysdb",
        "name": "Askeläänieristävyys dB",
        "value": "24",
        "url": null,
        "originalId": "PrAskelAAnieristavyys",
        "images": []
      },
      {
        "id": "Biokiermateriaalinosuus",
        "name": "Biopohjaisen ja kierrätetyn materiaalin osuus %",
        "value": "81,19",
        "url": null,
        "originalId": "PrBioKierMateriaalinOsuus",
        "images": []
      },
      {
        "id": "Biomateriaalinosuus",
        "name": "Biopohjaisen materiaalin osuus %",
        "value": "10,79",
        "url": null,
        "originalId": "PrBioMateriaalinOsuus",
        "images": []
      },
      {
        "id": "Hankaussahkokw",
        "name": "Hankaussähkö kävelytesti (EN 14041:2008-05)",
        "value": "<2kV antistaattinen",
        "url": null,
        "originalId": "PrHankaussahko",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "5,72",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "TLICQB4219006",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Lattiat",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kierratetynmateriaalinosuus",
        "name": "Kierrätetyn materiaalin osuus %",
        "value": "70,4",
        "url": null,
        "originalId": "PrKierratetynMateriaalinOsuus",
        "images": []
      },
      {
        "id": "Kierratetynmateriaalinosuustuotannosta",
        "name": "Kierrätetyn materiaalin osuus % - tuotannosta peräisin oleva",
        "value": "70,4",
        "url": null,
        "originalId": "PrKierratetynMateriaalinOsuusTuotannosta",
        "images": []
      },
      {
        "id": "Kierratysohjelma",
        "name": "Kierrätysohjelma",
        "value": "Interface ReEntry",
        "url": null,
        "originalId": "PrKierratysohjelma",
        "images": []
      },
      {
        "id": "Kierratysvaihtoehdot",
        "name": "Kierrätysvaihtoehdot",
        "value": "Kierrätysohjelma",
        "url": null,
        "originalId": "PrKierratettavyys",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "50",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "20",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kulutuksenkestavyysen1307",
        "name": "Kulutuksenkestävyys (EN 1307)",
        "value": "33 julkiset tilat kova kulutus",
        "url": null,
        "originalId": "PrKulutuksenKestavyys",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "50",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "5",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mixable",
        "name": "Valmistuserät sekoitettavissa keskenään",
        "value": "Ei",
        "url": null,
        "originalId": "ItemMixable",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "0",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "3,679",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "Interface Output Loop tekstiililaatta 4219006 Steel 50X50",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Nukkakorkeusmm",
        "name": "Nukkakorkeus mm",
        "value": "2,5",
        "url": null,
        "originalId": "PrNukkakorkeus",
        "images": []
      },
      {
        "id": "Nukkalanka",
        "name": "Nukkalanka",
        "value": "Läpivärjätty (SD) polyamidi (nylon)",
        "url": null,
        "originalId": "PrNukkalanka",
        "images": []
      },
      {
        "id": "Nukkalankapainog",
        "name": "Nukkalangan paino g/m²",
        "value": "462",
        "url": null,
        "originalId": "PrNukkalankaPaino",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "220",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Paastoluokka",
        "name": "Päästöluokka",
        "value": "M1, GUT, GUI Standard",
        "url": null,
        "originalId": "PrPaastoluokka",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Paloluokka",
        "name": "Paloluokka",
        "value": "Cfl-s1",
        "url": null,
        "originalId": "ItemPaloluokkaSeinat",
        "images": []
      },
      {
        "id": "Pohjamateriaali",
        "name": "Pohjamateriaali",
        "value": "CQuest™Bio",
        "url": null,
        "originalId": "PrPohjamateriaali",
        "images": []
      },
      {
        "id": "Pohjamateriaalilisavaihtoehdot",
        "name": "Pohjamateriaalin lisävaihtoehdot",
        "value": "CQuest™Bio SONE",
        "url": null,
        "originalId": "PrPohjamateriaaliLisa",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sahkonlapimenovastus",
        "name": "Sähkön läpimenovastus (EN 14041:2008-05)",
        "value": "≤10⁹Ω dissipatiivinen",
        "url": null,
        "originalId": "PrSahkonLapimenovastus",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "Interface Output Loop",
        "url": "/tuotteet/sarjat/interface-output-loop/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Soveltuvuuslattialammitykseen",
        "name": "Soveltuvuus lattialämmitykseen",
        "value": "maks +27 °C",
        "url": null,
        "originalId": "PrSoveltuvuusLattialammitykseen",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,56",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "15 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Toimistotuolinpyorienkestavyysluokka",
        "name": "Toimistotuolin pyörien kestävyysluokka (EN 985)",
        "value": ">2,4  (jatkuva käyttö)",
        "url": null,
        "originalId": "PrToimistotuolinPyorienKestavyysluokka",
        "images": []
      },
      {
        "id": "Tufteja",
        "name": "Tufteja/m²",
        "value": "173360",
        "url": null,
        "originalId": "PrTufteja",
        "images": []
      },
      {
        "id": "Tummuusaste",
        "name": "Tummuusaste",
        "value": "Keskitumma",
        "url": null,
        "originalId": "ItemTummuusaste",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Laattapiste-Pukkila tuote",
        "url": null,
        "originalId": "ItemBrandi",
        "images": []
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Pehmeät pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Valmistustapa",
        "name": "Valmistustapa",
        "value": "Tuftattu silmukkanukka",
        "url": null,
        "originalId": "PrValmistustapa",
        "images": []
      },
      {
        "id": "Valonkestavyysluokka",
        "name": "Valonkestävyysluokka  (ISO 105-B02)",
        "value": ">7",
        "url": null,
        "originalId": "PrValonKestavyys",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Harmaa",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "4219006 Steel",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Ylellisyysluokka",
        "name": "Ylellisyysluokka",
        "value": "LC 1",
        "url": null,
        "images": []
      },
      {
        "id": "Ymparistoluokitukset",
        "name": "Ympäristöluokitukset",
        "value": "BREEAM, LEED US and International, HQE, DGNB Germany",
        "url": null,
        "originalId": "PrYmparistoluokitukset",
        "images": []
      },
      {
        "id": "Ymparistoseloste",
        "name": "Ympäristöseloste (EPD)",
        "value": "https://interfaceinc.scene7.com/is/content/InterfaceInc/Interface/EMEA/WebsiteContentAssets/Documents/Certificates/EPD/CQuest%20Bio%20EPDS/wc_eu-epd-int-outputloop-cqb-cbc1-en.pdf",
        "url": "https://interfaceinc.scene7.com/is/content/InterfaceInc/Interface/EMEA/WebsiteContentAssets/Documents/Certificates/EPD/CQuest%20Bio%20EPDS/wc_eu-epd-int-outputloop-cqb-cbc1-en.pdf",
        "originalId": "PrYmparistoseloste",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/TLICQB4219006-Interface-Output-Loop-tekstiililaatta-4219006-Steel-50X50-68567.jpg?preset=120w",
        "maxWidth": 1440,
        "maxHeight": 1440,
        "modifiedDate": "2023-09-12T05:21:14+03:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 49.59,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 49.59,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "M2",
    "documents": [
      {
        "resourceFileId": 154040,
        "name": "Testitulos",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Testitulos_M1_Interface_2024.pdf",
        "modifiedDate": "2024-08-19T14:40:13+03:00"
      },
      {
        "resourceFileId": 99671,
        "name": "Suoritustasoilmoitus (DoP)",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/DoP_Interface_Output_Loop_CQuest_Bio.pdf",
        "modifiedDate": "2022-11-23T10:00:24+02:00"
      },
      {
        "resourceFileId": 1085,
        "name": "Ympäristödokumentti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Interface_BREEAM.pdf",
        "modifiedDate": "2022-09-24T20:57:10+03:00"
      },
      {
        "resourceFileId": 1081,
        "name": "Ympäristödokumentti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Interface_LEED.pdf",
        "modifiedDate": "2022-09-24T20:57:04+03:00"
      },
      {
        "resourceFileId": 1082,
        "name": "Ympäristödokumentti",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Ymparistodokumentti_Interface.pdf",
        "modifiedDate": "2022-09-24T20:55:58+03:00"
      },
      {
        "resourceFileId": 79,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Tekstiililaatan_hoito_ohje_1_2022.pdf",
        "modifiedDate": "2022-09-24T20:57:00+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "Interface Output Loop",
      "shortMarketingText": "Interfacen Output Loop -tekstiililaatat on valmistettu silmukkatuftatusta, läpivärjätystä polyamidista ja ne kestävät kovaa käyttöä esimerkiksi toimistoissa ja kouluissa. Tasaväriset Output Loop -tekstiililaatat on helppo ja nopea asentaa ilman liimaa TacTiles®-tarroilla. TacTiles®-asennusratkaisu mahdollistaa myös tekstiililaattojen kierrätyksen.",
      "url": "/tuotteet/sarjat/interface-output-loop/",
      "articleId": "OUTLOO"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana yli 500 m2.",
    "modifiedDate": "2024-12-11T04:58:20.82+02:00"
  },
  {
    "itemCode": "4000017799",
    "name": "LPC Viva Mosaico lasittamaton porcelanato mosaiikki 5X5 06 pellava tasapintainen matta leikattu lasikuituverkolla 30X30",
    "gtin": "8055493154893",
    "attributes": [
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,48",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "7,48",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "4000017799",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttoonottopuhdistus",
        "name": "Saumauksen jälkeinen pesu",
        "value": "Fila Deterdek Pro (sementtipohjaisille saumoille)",
        "url": null,
        "originalId": "PrKayttoonottopuhdistus",
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Seinät, Lattiat",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kiiltoaste",
        "name": "Kiiltoaste",
        "value": "Matta",
        "url": null,
        "originalId": "PrLaatanKiiltoaste",
        "images": []
      },
      {
        "id": "Kiinnityssuosituslattiat",
        "name": "Suositeltu kiinnitystapa lattiat",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 1,34 kg/m2.",
        "url": null,
        "originalId": "PrKiinnitysLaata",
        "images": []
      },
      {
        "id": "Kiinnityssuositusseinat",
        "name": "Suositeltu kiinnitystapa seinät",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 1,28 kg/m2.",
        "url": null,
        "originalId": "PrKiinnityssuositusSeina",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "5",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "6",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kuosi",
        "name": "Kuosi",
        "value": "Betoni",
        "url": null,
        "originalId": "ItemKuosi",
        "images": []
      },
      {
        "id": "Kuosivariaatioidenlukumaara",
        "name": "Kuosivariaatioiden lukumäärä",
        "value": "30",
        "url": null,
        "originalId": "ItemKuosivariaatioidenLukumaara",
        "images": []
      },
      {
        "id": "Laatanlasitus",
        "name": "Laatan lasitus",
        "value": "Lasittamaton",
        "url": null,
        "originalId": "PrLasitettu",
        "images": []
      },
      {
        "id": "Laatantyyppi",
        "name": "Laatan tyyppi",
        "value": "Mosaiikki",
        "url": null,
        "originalId": "PrLaatanTyyppi",
        "images": []
      },
      {
        "id": "Laatanvalmistuskokocm",
        "name": "Laatan valmistuskoko cm",
        "value": "4,8X4,8",
        "url": null,
        "originalId": "ItemLaatanValmistuskoko",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "5",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "Liukkausluokkajalalla",
        "name": "Liukkausluokka A, B, C jalalle",
        "value": "B",
        "url": null,
        "originalId": "ItemLiukkausmarallajalalla",
        "images": []
      },
      {
        "id": "Liukkausluokkakengalle",
        "name": "Liukkausluokka R9-R13 kengälle",
        "value": "R10",
        "url": null,
        "originalId": "ItemLiukkauskengalla",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "0",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mitoitustarkkuus",
        "name": "Mitoitustarkkuus",
        "value": "Leikattu",
        "url": null,
        "originalId": "PrRektifioitu",
        "images": []
      },
      {
        "id": "Modulaarinenlaatta",
        "name": "Modulaarinen laatta",
        "value": "Ei",
        "url": null,
        "originalId": "PrModulaarinenlaatta",
        "images": []
      },
      {
        "id": "Monokaliiberi",
        "name": "Monokaliiberi",
        "value": "Ei",
        "url": null,
        "originalId": "PrMonokaliber",
        "images": []
      },
      {
        "id": "Muoto",
        "name": "Muoto",
        "value": "Neliö",
        "url": null,
        "originalId": "PrLaatanMuoto",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "1",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "2,07",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "LPC Viva Mosaico lasittamaton porcelanato mosaiikki 5X5 06 pellava tasapintainen matta leikattu lasikuituverkolla 30X30",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkaus",
        "name": "Varastoinnin oletuspakkaus",
        "value": "EUR-Kuormalava",
        "url": null,
        "originalId": "ItemOletuspakkaus",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "360",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Pinnanesikasittely",
        "name": "Pinnan esikäsittely",
        "value": "Ei vaadi esikäsittelyä",
        "url": null,
        "originalId": "PrPinnanEsikasittely",
        "images": []
      },
      {
        "id": "Pinnanmuoto",
        "name": "Pinnanmuoto",
        "value": "Tasapintainen",
        "url": null,
        "originalId": "PrLaatanPinnanMuoto",
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "LPC Viva",
        "url": "/tuotteet/sarjat/lpc-viva/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Saumanleveysmm",
        "name": "Saumaleveys vähintään mm",
        "value": "2",
        "url": null,
        "originalId": "PrSaumanleveydet",
        "images": []
      },
      {
        "id": "Suositeltavasaumanvari",
        "name": "Suositeltu saumausaine / saumaväri",
        "value": "Fugabella Color KK66, Fugabella Color 07",
        "url": null,
        "originalId": "ItemSuositeltavasaumanvari",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,9",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "5 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Tasausjarjestelmankayttosuositus",
        "name": "Tasausjärjestelmän käyttösuositus",
        "value": "Ei",
        "url": null,
        "originalId": "PrTasausjarjestelma",
        "images": []
      },
      {
        "id": "Tuotekuvaus",
        "name": "Tuotekuvaus",
        "value": "LPC Viva -sarjaan kuuluva neliön muotoinen lasittamaton 5x5 leikattu porcelanato-mosaiikki. Mosaiikki on mattapintainen, väriltään keskitummanbeige, jolla on tasapintainen betoni-kuosinen pinta. Tuote soveltuu seinälaataksi ja lattialaataksi sisätiloissa. Yksittäiset laatat on yhdistetty toisiinsa 30X30 cm lasikuituverkolla asennustyön helpottamiseksi.",
        "url": null,
        "originalId": "PrMarkkinointiteksti",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Laattapiste-Pukkila tuote",
        "url": null,
        "originalId": "ItemBrandi",
        "images": []
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Kovat pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Valmistustapalaatat",
        "name": "Valmistustapa",
        "value": "Kuivapuristettu lasittamaton porcellanato (SFS EN 14411, BIa, UGL)",
        "url": null,
        "originalId": "PrValmistustapaLaatat",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Beige",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "06 pellava",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Varivaihtelu",
        "name": "Värivaihtelu V1-V4",
        "value": "V2 Vähäinen",
        "url": null,
        "originalId": "ItemKirjavuus",
        "images": []
      },
      {
        "id": "Verkotetunarkinkoko",
        "name": "Verkotetun arkin koko cm",
        "value": "30X30",
        "url": null,
        "originalId": "PrVerkotetunArkinKoko",
        "images": []
      },
      {
        "id": "Verkotus",
        "name": "Verkotus",
        "value": "Lasikuituverkolla",
        "url": null,
        "originalId": "PrVerkotus",
        "images": []
      },
      {
        "id": "Ymparistoseloste",
        "name": "Ympäristöseloste (EPD)",
        "value": "Toimitetaan pyydettäessä - pyynnöt tilaukset@laattapiste.fi",
        "url": null,
        "originalId": "PrYmparistoseloste",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/4000017799-LPC-Viva-Mosaico-lasittamaton-porcelanato-mosaiikki-5X5-06-pellava-tasapintainen-matta-leikattu-las-139734.jpg?preset=120w",
        "maxWidth": 886,
        "maxHeight": 886,
        "modifiedDate": "2024-02-28T19:27:32+02:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 19.46,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 19.46,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "ARK",
    "documents": [
      {
        "resourceFileId": 621,
        "name": "Suoritustasoilmoitus (DoP)",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/DoP-Keraamiset_laatat-LPC.pdf",
        "modifiedDate": "2022-09-24T15:13:52+03:00"
      },
      {
        "resourceFileId": 121172,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Hoito-ohje_Porcellanato_FI_GB_SE_05_2023.pdf",
        "modifiedDate": "2023-05-03T14:30:06+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "LPC Viva",
      "shortMarketingText": "Viva-sarja on erinomainen valinta, kun etsitään hyvin vähäeleistä ja rauhallista pintakuosia. Sarjasta on saatavana kattava valikoima eri kokoja , isosta slabista monimuotoisiin mosaiikkeihin. Mosaiikeilla voidaan luoda vaikkapa hauskoja tehosteyksityiskohtia. Väripaletista löytyy 8 ajatonta ja pehmeää sävyä, jotka soveltuvat monenlaiseen sisustukseen. Sarja on suunniteltu käytettäväksi sekä kodin tiloissa että julkitila rakentamisessa.",
      "url": "/tuotteet/sarjat/lpc-viva/",
      "articleId": "LPCVIV"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana 301 ark.",
    "modifiedDate": "2024-12-10T12:28:22.407+02:00"
  },
  {
    "itemCode": "4000001047",
    "name": "Pukkila Harmony lasitettu kaakeli laatta 19,7X39,7 White 40-2200 tasapintainen kiiltävä",
    "gtin": "5603498313550",
    "attributes": [
      {
        "id": "Aineetco2",
        "name": "Hiilijalanjälki - raaka-aineet ja tuotanto (A1-A3)",
        "value": "16,4",
        "url": null,
        "originalId": "PrAineetCO2",
        "images": []
      },
      {
        "id": "Hiilijalanjalkikompensaatio",
        "name": "Hiilijalanjälkikompensaatio - raaka-aineet ja tuotanto (A1-A3)",
        "value": "0",
        "url": null,
        "images": []
      },
      {
        "id": "Hiilijalanjalkituotanto",
        "name": "Hiilijalanjälki kompensoinnin jälkeen - raaka-aineet ja tuotanto (A1-A3)",
        "value": "16,4",
        "url": null,
        "originalId": "PrHiilijalanjalkiTuotanto",
        "images": []
      },
      {
        "id": "Hiilijalanjalkiyksikko",
        "name": "Hiilijalanjäljen laskennassa käytetty yksikkö",
        "value": "kg CO₂ eq/m²",
        "url": null,
        "originalId": "PrHiilijalanjalkiYksikko",
        "images": []
      },
      {
        "id": "ItemNimiketunnus",
        "name": "Nimiketunnus",
        "value": "4000001047",
        "url": null,
        "images": []
      },
      {
        "id": "Kayttoonottopuhdistus",
        "name": "Saumauksen jälkeinen pesu",
        "value": "Fila Deterdek Pro (sementtipohjaisille saumoille)",
        "url": null,
        "originalId": "PrKayttoonottopuhdistus",
        "images": []
      },
      {
        "id": "Kayttotarkoitus",
        "name": "Käyttötarkoitus",
        "value": "Seinät",
        "url": null,
        "originalId": "PrLaatankayttoKohde",
        "images": []
      },
      {
        "id": "Kiiltoaste",
        "name": "Kiiltoaste",
        "value": "Kiiltävä",
        "url": null,
        "originalId": "PrLaatanKiiltoaste",
        "images": []
      },
      {
        "id": "Kiinnityssuositusseinat",
        "name": "Suositeltu kiinnitystapa seinät",
        "value": "Kiinnitysaine: mira z-fix. Arvioitu menekki: 2,5 kg/m2.",
        "url": null,
        "originalId": "PrKiinnityssuositusSeina",
        "images": []
      },
      {
        "id": "Korkeus",
        "name": "Korkeus cm",
        "value": "19,7",
        "url": null,
        "originalId": "ItemKorkeus",
        "images": []
      },
      {
        "id": "Kplltk",
        "name": "kpl/ltk",
        "value": "25",
        "url": null,
        "originalId": "Itemkplltk",
        "images": []
      },
      {
        "id": "Kuosi",
        "name": "Kuosi",
        "value": "Yksivärinen",
        "url": null,
        "originalId": "ItemKuosi",
        "images": []
      },
      {
        "id": "Laatanlasitus",
        "name": "Laatan lasitus",
        "value": "Lasitettu",
        "url": null,
        "originalId": "PrLasitettu",
        "images": []
      },
      {
        "id": "Laatantyyppi",
        "name": "Laatan tyyppi",
        "value": "Laatta",
        "url": null,
        "originalId": "PrLaatanTyyppi",
        "images": []
      },
      {
        "id": "Laatanvalmistuskokocm",
        "name": "Laatan valmistuskoko cm",
        "value": "19,7X39,7",
        "url": null,
        "originalId": "ItemLaatanValmistuskoko",
        "images": []
      },
      {
        "id": "Leveys",
        "name": "Leveys cm",
        "value": "39,7",
        "url": null,
        "originalId": "ItemLeveys",
        "images": []
      },
      {
        "id": "M2ltk",
        "name": "m²/ltk",
        "value": "2",
        "url": null,
        "originalId": "Itemm2ltk",
        "images": []
      },
      {
        "id": "Mallisto",
        "name": "Mallisto",
        "value": "LPC Asuntorakentamisen mallisto",
        "url": null,
        "originalId": "ItemMallisto",
        "images": []
      },
      {
        "id": "Modulaarinenlaatta",
        "name": "Modulaarinen laatta",
        "value": "Kyllä",
        "url": null,
        "originalId": "PrModulaarinenlaatta",
        "images": []
      },
      {
        "id": "Monokaliiberi",
        "name": "Monokaliiberi",
        "value": "Kyllä",
        "url": null,
        "originalId": "PrMonokaliber",
        "images": []
      },
      {
        "id": "Muoto",
        "name": "Muoto",
        "value": "Suorakaide",
        "url": null,
        "originalId": "PrLaatanMuoto",
        "images": []
      },
      {
        "id": "Myyntieraminimi",
        "name": "Minimi myyntierä",
        "value": "0",
        "url": null,
        "originalId": "ItemMinMyyntimaara",
        "images": []
      },
      {
        "id": "Ncs",
        "name": "NCS",
        "value": "S 1000-N",
        "url": null,
        "originalId": "ItemNcs",
        "images": []
      },
      {
        "id": "Nettopaino",
        "name": "Nettopaino kg",
        "value": "12",
        "url": null,
        "originalId": "ItemNettopaino",
        "images": []
      },
      {
        "id": "Nimi",
        "name": "Nimi",
        "value": "Pukkila Harmony lasitettu kaakeli laatta 19,7X39,7 White 40-2200 tasapintainen kiiltävä",
        "url": null,
        "originalId": "ItemNimi",
        "images": []
      },
      {
        "id": "Oletuspakkaus",
        "name": "Varastoinnin oletuspakkaus",
        "value": "EUR-Kuormalava",
        "url": null,
        "originalId": "ItemOletuspakkaus",
        "images": []
      },
      {
        "id": "Oletuspakkauskoko",
        "name": "Varastopakkauskoko",
        "value": "96",
        "url": null,
        "originalId": "ItemOletuspakkauskoko",
        "images": []
      },
      {
        "id": "Pakkasenkestava",
        "name": "Pakkasenkestävä",
        "value": "Ei",
        "url": null,
        "originalId": "PrPakkasenKestava",
        "images": []
      },
      {
        "id": "Pinnanesikasittely",
        "name": "Pinnan esikäsittely",
        "value": "Esikostuta saumat ennen saumausta.",
        "url": null,
        "originalId": "PrPinnanEsikasittely",
        "images": []
      },
      {
        "id": "Pinnanmuoto",
        "name": "Pinnanmuoto",
        "value": "Tasapintainen",
        "url": null,
        "originalId": "PrLaatanPinnanMuoto",
        "images": []
      },
      {
        "id": "Pukkilantuotekoodi",
        "name": "Pukkilan tuotekoodi",
        "value": "40-2200",
        "url": null,
        "images": []
      },
      {
        "id": "Saatavuus",
        "name": "Saatavuus",
        "value": "Keskusvarastotuote",
        "url": null,
        "originalId": "ItemOhjaustapamyynti",
        "images": []
      },
      {
        "id": "Sarja",
        "name": "Sarja",
        "value": "Pukkila Harmony",
        "url": "/tuotteet/sarjat/pukkila-harmony/",
        "originalId": "ItemSarja",
        "images": []
      },
      {
        "id": "Saumanleveysmm",
        "name": "Saumaleveys vähintään mm",
        "value": "3",
        "url": null,
        "originalId": "PrSaumanleveydet",
        "images": []
      },
      {
        "id": "Suositeltavasaumanvari",
        "name": "Suositeltu saumausaine / saumaväri",
        "value": "Fugabella Color KK2, Fugabella Color 02",
        "url": null,
        "originalId": "ItemSuositeltavasaumanvari",
        "images": []
      },
      {
        "id": "Syvyys",
        "name": "Syvyys / tuotepaksuus cm",
        "value": "0,75",
        "url": null,
        "originalId": "ItemSyvyys",
        "images": []
      },
      {
        "id": "Takuuaikakk",
        "name": "Takuuaika",
        "value": "5 vuotta",
        "url": null,
        "originalId": "PrTakuunKesto",
        "images": []
      },
      {
        "id": "Tasausjarjestelmankayttosuositus",
        "name": "Tasausjärjestelmän käyttösuositus",
        "value": "Ei",
        "url": null,
        "originalId": "PrTasausjarjestelma",
        "images": []
      },
      {
        "id": "Tuotekuvaus",
        "name": "Tuotekuvaus",
        "value": "Pukkila Harmony -sarjaan kuuluva suorakaiteen muotoinen lasitettu 20x40 kaakeli-laatta. Laatta on kiiltäväpintainen, väriltään keskitummanvalkoinen, jolla on tasapintainen yksivärinen pinta. Tuote soveltuu seinälaataksi sisätiloissa.",
        "url": null,
        "originalId": "PrMarkkinointiteksti",
        "images": []
      },
      {
        "id": "Tuotemerkki",
        "name": "Tuotemerkki",
        "value": "Pukkila",
        "url": null,
        "originalId": "ItemBrandi",
        "images": [
          {
            "imageUrl": "/globalassets/adeona/resources/tuotemerkki_p.svg?preset=120w",
            "altText": "Pukkila",
            "maxWidth": 0,
            "maxHeight": 0,
            "modifiedDate": "2023-03-22T15:05:26+02:00"
          }
        ]
      },
      {
        "id": "Tuoteryhmatr2",
        "name": "Tuotetyyppi",
        "value": "Kovat pintamateriaalit",
        "url": null,
        "originalId": "ItemTuoteryhmaTR2",
        "images": []
      },
      {
        "id": "Valmistustapalaatat",
        "name": "Valmistustapa",
        "value": "Kuivapuristettu kaakeli (SFS EN 14411, BIII)",
        "url": null,
        "originalId": "PrValmistustapaLaatat",
        "images": []
      },
      {
        "id": "Vari",
        "name": "Väri",
        "value": "Valkoinen",
        "url": null,
        "originalId": "ItemVari",
        "images": []
      },
      {
        "id": "Varinlisatiedot",
        "name": "Värin lisätiedot",
        "value": "White 40-2200",
        "url": null,
        "originalId": "ItemVarinLisatiedot",
        "images": []
      },
      {
        "id": "Varivaihtelu",
        "name": "Värivaihtelu V1-V4",
        "value": "V1 Yhdenmukainen",
        "url": null,
        "originalId": "ItemKirjavuus",
        "images": []
      }
    ],
    "images": [
      {
        "imageUrl": "/globalassets/adeona/resources/4000001047-Pukkila-Harmony-lasitettu-kaakeli-laatta-197X397-White-40-2200-tasapintainen-kiiltava-102346.jpg?preset=120w",
        "maxWidth": 1970,
        "maxHeight": 985,
        "modifiedDate": "2024-07-04T05:33:48+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/129134060710-LPC-Shiny-100-lasitettu-kaakeli-laatta-197X397-valkoinen-tasapintainen-kiiltava-6216.jpg?preset=120w",
        "maxWidth": 2415,
        "maxHeight": 1440,
        "modifiedDate": "2024-07-03T17:25:45+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/19105236-LPC-Shiny-100-lasitettu-kaakeli-laatta-197X397-beige-tasapintainen-kiiltava-8623.jpg?preset=120w",
        "maxWidth": 974,
        "maxHeight": 628,
        "modifiedDate": "2024-07-03T17:26:00+03:00"
      },
      {
        "imageUrl": "/globalassets/adeona/resources/129134060710-LPC-Shiny-100-lasitettu-kaakeli-laatta-197X397-valkoinen-tasapintainen-kiiltava-6455.jpg?preset=120w",
        "maxWidth": 2325,
        "maxHeight": 1440,
        "modifiedDate": "2024-07-03T17:25:45+03:00"
      }
    ],
    "svhPrice": {
      "isCampaign": false,
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 38.43,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "campaignPrice": null,
    "netPrice": {
      "priceFriendlyName": "Nettohinta",
      "moneyAmount": 38.43,
      "validUntil": null,
      "validUntilText": null,
      "discountPercentage": 0
    },
    "priceUnit": "M2",
    "documents": [
      {
        "resourceFileId": 621,
        "name": "Suoritustasoilmoitus (DoP)",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/DoP-Keraamiset_laatat-LPC.pdf",
        "modifiedDate": "2022-09-24T15:13:52+03:00"
      },
      {
        "resourceFileId": 121170,
        "name": "Käyttö- ja hoito-ohje",
        "url": "https://www.laattapiste.fi/globalassets/adeona/resources/Hoito-ohje_Kaakeli_FI-_GB_SE_05_2023.pdf",
        "modifiedDate": "2023-05-03T14:30:09+03:00"
      }
    ],
    "series": {
      "benefits": [],
      "name": "Pukkila Harmony",
      "shortMarketingText": "PUKKILA 150 VUOTTA -JUHLAVUOSISARJA! Pukkila Harmony -seinälaattasarjassa on 40 kaunista murrettua väriä ja neljä kokoa: 20×40, 10×30, 20×20, 15×15, joita kaikkia on saatavana sekä matta- että kiiltävälasitteisina.  Laatat sopivat seinälaatoiksi sisätiloissa. Laattojen koot ja värit ovat yhtenevät Pukkila Color -sarjan laattojen kanssa, yhdistele haluamillasi tavoilla! Pukkila juhlii 150 vuotta kestänyttä taivaltaan vuoden 2024 aikana ja juhlavuoden kunniaksi olemme nimenneet Pukkila Harmony Arquitectos -sarjan uudelleen historiallisesti Pukkila Harmonyksi.",
      "url": "/tuotteet/sarjat/pukkila-harmony/",
      "articleId": "PUKHARARQ"
    },
    "replacingVariation": null,
    "deliveryTimeText": "Heti keskusvarastosta Vantaalta.",
    "availabilityText": "Vapaana yli 500 m2.",
    "modifiedDate": "2024-12-12T22:01:43.793+02:00"
  }
]

interface Data {
  [key: string]: string | undefined | null | WildCardObject
}

interface WildCardObject {
  [key: string]: string | undefined | null
}


export const getData = async (apiInfo: Api) => {
  console.log(apiInfo)
  return testData as unknown as Data[]
}