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