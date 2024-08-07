/* eslint-disable @typescript-eslint/no-unused-vars */

export const getData = async (category: string, subCategory: string) => {
  const data = await fetch(
    `https://api.sampleapis.com/${category}/${subCategory}`,
  );
  const res = await data.json();
  return res;
};

const wineRose = [
  {
    winery: 'Antica Terra',
    wine: 'Angelicall Rosé 2014',
    rating: {average: '4.7', reviews: '33 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/LRmcfSasTD22xR6lRSKcIw_pb_x300.png',
    id: 1,
  },
  {
    winery: 'Antinori',
    wine: "Fonte de' Medici 2011",
    rating: {average: '4.6', reviews: '199 ratings'},
    location: "Italy\n·\nVino d'Italia",
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 2,
  },
  {
    winery: 'Minuty',
    wine: '281 Rosé 2014',
    rating: {average: '4.6', reviews: '39 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
    id: 3,
  },
  {
    winery: 'Château Saint-Maur',
    wine: 'Clos de Capelune Côtes de Provence Rosé 2017',
    rating: {average: '4.6', reviews: '34 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/l7BLBu7ERi2tJIQqtli_NA_pb_x300.png',
    id: 4,
  },
  {
    winery: 'Villa M',
    wine: 'Rosé 2016',
    rating: {average: '4.6', reviews: '33 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/__JeiUHGQ5KF6LBGEREllw_pb_x300.png',
    id: 5,
  },
  {
    winery: 'Minuty',
    wine: '281 Rosé 2017',
    rating: {average: '4.5', reviews: '152 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
    id: 6,
  },
  {
    winery: 'Castello di Amorosa',
    wine: 'La Fantasia 2015',
    rating: {average: '4.5', reviews: '150 ratings'},
    location: 'United States\n·\nCalifornia',
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 7,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2017',
    rating: {average: '4.5', reviews: '148 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 8,
  },
  {
    winery: 'Minuty',
    wine: '281 Rosé 2016',
    rating: {average: '4.5', reviews: '147 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
    id: 9,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2010',
    rating: {average: '4.5', reviews: '115 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 10,
  },
  {
    winery: 'Blankiet',
    wine: 'Prince of Hearts Rosé N.V.',
    rating: {average: '4.5', reviews: '77 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/BXIqIzVzT2OwkLs59qSPig_pb_x300.png',
    id: 11,
  },
  {
    winery: 'Bodegas Vilano',
    wine: 'Think Pink Rosado 2017',
    rating: {average: '4.5', reviews: '76 ratings'},
    location: 'Spain\n·\nRibera del Duero',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 12,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: "L'Hydropathe Elite Rosé 2018",
    rating: {average: '4.5', reviews: '59 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Kkn7RIMUSkmQIhkF6MApiA_pb_x300.png',
    id: 13,
  },
  {
    winery: 'Château Simone',
    wine: 'Palette Rose 2016',
    rating: {average: '4.5', reviews: '58 ratings'},
    location: 'France\n·\nPalette',
    image:
      'https://images.vivino.com/thumbs/lnQL_iedQN2WcC2L68IceQ_pb_x300.png',
    id: 14,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2010',
    rating: {average: '4.5', reviews: '40 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/uE0N0zxUS1K36LSWVi_S_Q_pb_x300.png',
    id: 15,
  },
  {
    winery: 'Château La Sauvageonne',
    wine: 'La Villa Rosé 2015',
    rating: {average: '4.5', reviews: '40 ratings'},
    location: 'France\n·\nLanguedoc',
    image:
      'https://images.vivino.com/thumbs/QNTe2Md7So6KJ9Wz59btzw_pb_x300.png',
    id: 16,
  },
  {
    winery: 'Le Coste',
    wine: 'Rosato 2017',
    rating: {average: '4.4', reviews: '39 ratings'},
    location: 'Italy\n·\nLazio',
    image:
      'https://images.vivino.com/thumbs/Gvb6SDzfRBWCBmsYYQZqZA_pb_x300.png',
    id: 17,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Fantastique Rosé 2017',
    rating: {average: '4.5', reviews: '35 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/WiDmw-hpT5-D3TfjjnOXDA_pb_x300.png',
    id: 18,
  },
  {
    winery: 'Cakebread',
    wine: 'Vin De Porche Rosé 2017',
    rating: {average: '4.5', reviews: '32 ratings'},
    location: 'United States\n·\nAnderson Valley',
    image:
      'https://images.vivino.com/thumbs/IZ_XBIxLSKuCRa1KhuRcGQ_pb_x300.png',
    id: 19,
  },
  {
    winery: 'Fratelli Vogadori',
    wine: 'Molinara Rosato 2013',
    rating: {average: '4.5', reviews: '30 ratings'},
    location: 'Italy\n·\nValpolicella',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 20,
  },
  {
    winery: 'Bartenura',
    wine: 'Malvasia di Casorzo 2017',
    rating: {average: '4.5', reviews: '30 ratings'},
    location: "Italy\n·\nMalvasia di Casorzo d'Asti",
    image:
      'https://images.vivino.com/thumbs/sJd7QpiATmqtzQq3xwcvpg_pb_x300.png',
    id: 21,
  },
  {
    winery: 'Antica Terra',
    wine: 'Angelicall Rosé 2013',
    rating: {average: '4.5', reviews: '29 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/LRmcfSasTD22xR6lRSKcIw_pb_x300.png',
    id: 22,
  },
  {
    winery: 'Batič',
    wine: 'Rosé 2013',
    rating: {average: '4.5', reviews: '29 ratings'},
    location: 'Slovenia\n·\nVipava',
    image:
      'https://images.vivino.com/thumbs/JGtf1UccSRab3Tv4lihFNw_pb_x300.png',
    id: 23,
  },
  {
    winery: 'Domaine Serisier',
    wine: 'Bordeaux Rosé 2012',
    rating: {average: '4.5', reviews: '27 ratings'},
    location: 'France\n·\nBordeaux',
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 24,
  },
  {
    winery: 'Monte da Ravasqueira',
    wine: 'Touriga Nacional 2010',
    rating: {average: '4.5', reviews: '26 ratings'},
    location: 'Portugal\n·\nAlentejano',
    image:
      'https://images.vivino.com/thumbs/mE9if7kSTWOjfGBiV5T5CA_pb_x300.png',
    id: 25,
  },
  {
    winery: 'Weingut A. Diehl',
    wine: 'Eins Zu Eins Merlot Rosé 2016',
    rating: {average: '4.5', reviews: '25 ratings'},
    location: 'Germany\n·\nPfalz',
    image:
      'https://images.vivino.com/thumbs/LzLL-fVGQGSPaw7RBeYpeg_pb_x300.png',
    id: 26,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé N.V.',
    rating: {average: '4.4', reviews: '1844 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 27,
  },
  {
    winery: 'Minuty',
    wine: '281 Rosé N.V.',
    rating: {average: '4.4', reviews: '692 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
    id: 28,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2014',
    rating: {average: '4.4', reviews: '476 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 29,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2013',
    rating: {average: '4.4', reviews: '241 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/znOSQj0RQ5-wnZBGajuK9w_pb_x300.png',
    id: 30,
  },
  {
    winery: 'Ruth Lewandowski',
    wine: 'Feints 2017',
    rating: {average: '4.4', reviews: '195 ratings'},
    location: 'United States\n·\nMendocino County',
    image:
      'https://images.vivino.com/thumbs/UyNLuTh0TvS1OuQJA0xJKg_pb_x300.png',
    id: 31,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2016',
    rating: {average: '4.4', reviews: '188 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 32,
  },
  {
    winery: 'Robert Sinskey',
    wine: 'Pinot Noir of Vin Gris 2017',
    rating: {average: '4.4', reviews: '160 ratings'},
    location: 'United States\n·\nLos Carneros',
    image:
      'https://images.vivino.com/thumbs/Tdaodpr5SIqmaVqoeRgMQA_pb_x300.png',
    id: 33,
  },
  {
    winery: 'Robert Sinskey',
    wine: 'Pinot Noir of Vin Gris 2016',
    rating: {average: '4.4', reviews: '152 ratings'},
    location: 'United States\n·\nLos Carneros',
    image:
      'https://images.vivino.com/thumbs/Tdaodpr5SIqmaVqoeRgMQA_pb_x300.png',
    id: 34,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2013',
    rating: {average: '4.4', reviews: '135 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 35,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Rosé 2015',
    rating: {average: '4.4', reviews: '133 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Id4QDWSbR0SEnLq-5Zj5KQ_pb_x300.png',
    id: 36,
  },
  {
    winery: 'Goldeneye',
    wine: 'Vin Gris of Pinot Noir 2011',
    rating: {average: '4.4', reviews: '124 ratings'},
    location: 'United States\n·\nAnderson Valley',
    image:
      'https://images.vivino.com/thumbs/Al-bmQXBSrqxEzw5kVGx6w_pb_x300.png',
    id: 37,
  },
  {
    winery: 'Marani',
    wine: 'Pirosmani Medium Dry Rosé 2016',
    rating: {average: '4.4', reviews: '104 ratings'},
    location: 'Georgia\n·\nKakheti',
    image:
      'https://images.vivino.com/thumbs/zwtlu0ULTDiN43iBOuVE-w_pb_x300.png',
    id: 38,
  },
  {
    winery: 'Notorious Pink',
    wine: 'Grenache Rosé 2013',
    rating: {average: '4.4', reviews: '78 ratings'},
    location: 'France\n·\nVin de France',
    image:
      'https://images.vivino.com/thumbs/0iPgtJgmQ-2CeV5FUKQMfA_pb_x300.png',
    id: 39,
  },
  {
    winery: 'Château de Saint Martin',
    wine: 'Eternelle Favorite Rosé 2012',
    rating: {average: '4.4', reviews: '72 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ODBpWgzbSnuz-rO_guBoyg_pb_x300.png',
    id: 40,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: "L'Hydropathe Elite Rosé 2016",
    rating: {average: '4.4', reviews: '72 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Kkn7RIMUSkmQIhkF6MApiA_pb_x300.png',
    id: 41,
  },
  {
    winery: 'Château Barbeyrolles',
    wine: 'Pétale de Rosé 2018',
    rating: {average: '4.4', reviews: '68 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Sx-mc4NxQc6b0zR0HPodqw_pb_x300.png',
    id: 42,
  },
  {
    winery: 'Encostas do Lima',
    wine: 'Rosé 2015',
    rating: {average: '4.4', reviews: '56 ratings'},
    location: 'Portugal\n·\nVinho Verde',
    image:
      'https://images.vivino.com/thumbs/boQ570-lQcKcDj5rsJBCQQ_pb_x300.png',
    id: 43,
  },
  {
    winery: "Domaine de l'Abbaye",
    wine: 'Clos Beylesse Côtes de Provence Rosé 2018',
    rating: {average: '4.4', reviews: '49 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xZn0pd4XTRy8AMP8njODpQ_pb_x300.png',
    id: 44,
  },
  {
    winery: 'Luccío',
    wine: 'Pink Moscato N.V.',
    rating: {average: '4.4', reviews: '47 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/JCFib4pKSjWtP5R9-wuAtQ_pb_x300.png',
    id: 45,
  },
  {
    winery: 'Seven Mountains Wine Cellars',
    wine: 'Tickled Pink N.V.',
    rating: {average: '4.4', reviews: '44 ratings'},
    location: 'United States\n·\nPennsylvania',
    image:
      'https://thumbs.vivino.com/avatars/00910za83dzxp0584dcabdb_50x50.jpg',
    id: 46,
  },
  {
    winery: 'Château de Caraguilhes',
    wine: 'Cara de Caraguilhes Rosé 2017',
    rating: {average: '4.4', reviews: '40 ratings'},
    location: 'France\n·\nCorbières',
    image:
      'https://images.vivino.com/thumbs/A6x3Ax2STWKTbmAkwn8RgQ_pb_x300.png',
    id: 47,
  },
  {
    winery: 'Cillar de Silos',
    wine: 'Dominio del Pidio Rosado N.V.',
    rating: {average: '4.4', reviews: '37 ratings'},
    location: 'Spain\n·\nRibera del Duero',
    image: 'https://thumbs.vivino.com/avatars/NnHf7y_aQdKIbhFd5-ovAA_50x50.jpg',
    id: 48,
  },
  {
    winery: 'Maison CR',
    wine: 'Coeur de Rosé Prestige 2015',
    rating: {average: '4.4', reviews: '37 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/SL3tl_SdTv-qMOl54fyvBw_pb_x300.png',
    id: 49,
  },
  {
    winery: 'Unti',
    wine: 'Rosé 2014',
    rating: {average: '4.4', reviews: '37 ratings'},
    location: 'United States\n·\nDry Creek Valley',
    image:
      'https://images.vivino.com/thumbs/u5iQqLRISUmZ5eQcT-DUKQ_pb_x300.png',
    id: 50,
  },
  {
    winery: 'José Maria da Fonseca',
    wine: 'Domingos Soares Franco Colecção Privada Moscatel Roxo Rosé 2001',
    rating: {average: '4.4', reviews: '36 ratings'},
    location: 'Portugal\n·\nPenínsula de Setúbal',
    image: 'https://thumbs.vivino.com/avatars/1962205_131690_big_app_50x50.jpg',
    id: 51,
  },
  {
    winery: 'François Cotat',
    wine: 'Chavignol Sancerre Rosé 2015',
    rating: {average: '4.4', reviews: '34 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/Brth9y9JRgeSCsnhCj2bXw_pb_x300.png',
    id: 52,
  },
  {
    winery: 'Fattoria Aldobrandesca',
    wine: 'Aleatico Toscana Rosato 2014',
    rating: {average: '4.4', reviews: '31 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/mu0MhRNbSma0xmVFTkt3vA_pb_x300.png',
    id: 53,
  },
  {
    winery: '90+ Cellars',
    wine: 'ACK Provence Rosé N.V.',
    rating: {average: '4.4', reviews: '30 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/V621_MNYRI-t8IbXgCMEVA_pb_x300.png',
    id: 54,
  },
  {
    winery: 'Bartenura',
    wine: 'Malvasia Castelnuovo Don Bosco Rosé 2008',
    rating: {average: '4.4', reviews: '30 ratings'},
    location: 'Italy\n·\nMalvasia di Castelnuovo don Bosco',
    image:
      'https://images.vivino.com/thumbs/bx6znn-kQJ-hQ7GQWXlDuw_pb_x300.png',
    id: 55,
  },
  {
    winery: 'Michel Laurent',
    wine: "Rosé d'Anjou 2017",
    rating: {average: '4.4', reviews: '29 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/budNlf3DSxy8JQxcnlCQrA_pb_x300.png',
    id: 56,
  },
  {
    winery: 'Kivelstadt Cellars',
    wine: 'Twice Removed Rosé 2015',
    rating: {average: '4.4', reviews: '28 ratings'},
    location: 'United States\n·\nLake County',
    image:
      'https://images.vivino.com/thumbs/wOeIaBF4THWtY9lO81R0Ng_pb_x300.png',
    id: 57,
  },
  {
    winery: 'Born Rosé Barcelona',
    wine: 'Born Rosé N.V.',
    rating: {average: '4.4', reviews: '27 ratings'},
    location: 'Spain\n·\nCatalunya',
    image:
      'https://images.vivino.com/thumbs/1bSlC0oQQvSm_i28QyB1Tg_pb_x300.png',
    id: 58,
  },
  {
    winery: 'Alain Girard & Fils',
    wine: 'Sancerre Rosé N.V.',
    rating: {average: '4.4', reviews: '26 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/f2pQOazjTRO6Ig2Su32L0g_pb_x300.png',
    id: 59,
  },
  {
    winery: 'Tbilvino',
    wine: 'Iveriuli Alazani Valley Rosé (Алазанская долина розовое) 2016',
    rating: {average: '4.4', reviews: '26 ratings'},
    location: 'Georgia\n·\nKakheti',
    image: 'https://images.vivino.com/avatars/default_user_50x50.png',
    id: 60,
  },
  {
    winery: 'Parparoussis',
    wine: 'Petite Fleur Dry Rosé 2017',
    rating: {average: '4.4', reviews: '26 ratings'},
    location: 'Greece\n·\nAchaia',
    image:
      'https://images.vivino.com/thumbs/Y8kWhQjsSLS_YXsv8ckbew_pb_x300.png',
    id: 61,
  },
  {
    winery: "Domaine de l'Abbaye",
    wine: 'Clos Beylesse Côtes de Provence Rosé N.V.',
    rating: {average: '4.3', reviews: '945 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xZn0pd4XTRy8AMP8njODpQ_pb_x300.png',
    id: 62,
  },
  {
    winery: 'Robert Sinskey',
    wine: 'Pinot Noir of Vin Gris N.V.',
    rating: {average: '4.3', reviews: '938 ratings'},
    location: 'United States\n·\nLos Carneros',
    image:
      'https://images.vivino.com/thumbs/Tdaodpr5SIqmaVqoeRgMQA_pb_x300.png',
    id: 63,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2017',
    rating: {average: '4.3', reviews: '916 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 64,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2018',
    rating: {average: '4.3', reviews: '681 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 65,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2016',
    rating: {average: '4.3', reviews: '562 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/HTx2ObtVSqKNdcDX3rdbxA_pb_x300.png',
    id: 66,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) 2015',
    rating: {average: '4.3', reviews: '472 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vHGbmhbzSCm-UgQszBCs-w_pb_x300.png',
    id: 67,
  },
  {
    winery: 'R. López de Heredia Viña Tondonia',
    wine: 'Gran Reserva Rosado N.V.',
    rating: {average: '4.3', reviews: '458 ratings'},
    location: 'Spain\n·\nRioja Alta',
    image:
      'https://images.vivino.com/thumbs/2WhWo25KTeyKq3pKSACY8g_pb_x300.png',
    id: 68,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) 2014',
    rating: {average: '4.3', reviews: '432 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vHGbmhbzSCm-UgQszBCs-w_pb_x300.png',
    id: 69,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: "L'Hydropathe Elite Rosé N.V.",
    rating: {average: '4.3', reviews: '420 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Kkn7RIMUSkmQIhkF6MApiA_pb_x300.png',
    id: 70,
  },
  {
    winery: 'Ruth Lewandowski',
    wine: 'Feints N.V.',
    rating: {average: '4.3', reviews: '416 ratings'},
    location: 'United States\n·\nMendocino County',
    image:
      'https://images.vivino.com/thumbs/UyNLuTh0TvS1OuQJA0xJKg_pb_x300.png',
    id: 71,
  },
  {
    winery: 'Commanderie de la Bargemone',
    wine: 'Cuvée Marina Rosé 2018',
    rating: {average: '4.3', reviews: '374 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/WAF5yEazROuzWMyspVSnVg_pb_x300.png',
    id: 72,
  },
  {
    winery: 'Marcel Martin',
    wine: "La Jaglerie Rosé d'Anjou 2018",
    rating: {average: '4.3', reviews: '340 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/Wln49EWoRZ2Ck1Pv01AVHw_pb_x300.png',
    id: 73,
  },
  {
    winery: 'San Salvatore',
    wine: 'Vetere Paestum Rosato 2018',
    rating: {average: '4.3', reviews: '338 ratings'},
    location: 'Italy\n·\nPaestum',
    image:
      'https://images.vivino.com/thumbs/Is67T4-ySk6gbvW4Ty458g_pb_x300.png',
    id: 74,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) 2017',
    rating: {average: '4.3', reviews: '334 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/2J5LDR2GTQKcG98pAApYqA_pb_x300.png',
    id: 75,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2015',
    rating: {average: '4.3', reviews: '331 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/znOSQj0RQ5-wnZBGajuK9w_pb_x300.png',
    id: 76,
  },
  {
    winery: 'Castello di Amorosa',
    wine: 'La Fantasia 2012',
    rating: {average: '4.3', reviews: '332 ratings'},
    location: 'United States\n·\nCalifornia',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 77,
  },
  {
    winery: 'San Salvatore',
    wine: 'Vetere Paestum Rosato 2017',
    rating: {average: '4.3', reviews: '293 ratings'},
    location: 'Italy\n·\nPaestum',
    image:
      'https://images.vivino.com/thumbs/Is67T4-ySk6gbvW4Ty458g_pb_x300.png',
    id: 78,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2018',
    rating: {average: '4.3', reviews: '274 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/HTx2ObtVSqKNdcDX3rdbxA_pb_x300.png',
    id: 79,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2015',
    rating: {average: '4.3', reviews: '232 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 80,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Rock Angel Rosé 2018',
    rating: {average: '4.3', reviews: '226 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/zWXfkD9kQc2r_W5A7Vihkg_pb_x300.png',
    id: 81,
  },
  {
    winery: 'Bartenura',
    wine: 'Malvasia di Casorzo N.V.',
    rating: {average: '4.3', reviews: '194 ratings'},
    location: "Italy\n·\nMalvasia di Casorzo d'Asti",
    image:
      'https://images.vivino.com/thumbs/sJd7QpiATmqtzQq3xwcvpg_pb_x300.png',
    id: 82,
  },
  {
    winery: "Domaine de l'Abbaye",
    wine: 'Clos Beylesse Côtes de Provence Rosé 2013',
    rating: {average: '4.3', reviews: '189 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xZn0pd4XTRy8AMP8njODpQ_pb_x300.png',
    id: 83,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2012',
    rating: {average: '4.3', reviews: '189 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 84,
  },
  {
    winery: 'R. López de Heredia Viña Tondonia',
    wine: 'Gran Reserva Rosado 2008',
    rating: {average: '4.3', reviews: '182 ratings'},
    location: 'Spain\n·\nRioja Alta',
    image:
      'https://images.vivino.com/thumbs/2WhWo25KTeyKq3pKSACY8g_pb_x300.png',
    id: 85,
  },
  {
    winery: 'Tenuta Il Poggione',
    wine: 'Rosato di Toscana Brancato 2016',
    rating: {average: '4.3', reviews: '178 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/UlzJZw2ZSViSGaTrZd3Few_pb_x300.png',
    id: 86,
  },
  {
    winery: 'Château La Sauvageonne',
    wine: 'La Villa Rosé N.V.',
    rating: {average: '4.3', reviews: '173 ratings'},
    location: 'France\n·\nLanguedoc',
    image:
      'https://images.vivino.com/thumbs/QNTe2Md7So6KJ9Wz59btzw_pb_x300.png',
    id: 87,
  },
  {
    winery: 'Elio Perrone',
    wine: 'Bigarò Rosé 2015',
    rating: {average: '4.3', reviews: '169 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/kixsM17DQPm1fVhtXU7CVw_pb_x300.png',
    id: 88,
  },
  {
    winery: "Domaine de l'Abbaye",
    wine: 'Clos Beylesse Côtes de Provence Rosé 2015',
    rating: {average: '4.3', reviews: '160 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xZn0pd4XTRy8AMP8njODpQ_pb_x300.png',
    id: 89,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2018',
    rating: {average: '4.3', reviews: '155 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/tE2hMYcUTnuNw1l0_BFZlA_pb_x300.png',
    id: 90,
  },
  {
    winery: 'Venâncio da Costa Lima',
    wine: 'Moscatel Roxo 2013',
    rating: {average: '4.3', reviews: '146 ratings'},
    location: 'Portugal\n·\nSetúbal',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 91,
  },
  {
    winery: "Domaine de l'Abbaye",
    wine: 'Clos Beylesse Côtes de Provence Rosé 2016',
    rating: {average: '4.3', reviews: '144 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xZn0pd4XTRy8AMP8njODpQ_pb_x300.png',
    id: 92,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2011',
    rating: {average: '4.3', reviews: '142 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 93,
  },
  {
    winery: 'Robert Sinskey',
    wine: 'Pinot Noir of Vin Gris 2013',
    rating: {average: '4.3', reviews: '141 ratings'},
    location: 'United States\n·\nLos Carneros',
    image:
      'https://images.vivino.com/thumbs/Tdaodpr5SIqmaVqoeRgMQA_pb_x300.png',
    id: 94,
  },
  {
    winery: 'Domaine la Colombette',
    wine: 'Grenache Rosé 2018',
    rating: {average: '4.3', reviews: '138 ratings'},
    location: 'France\n·\nHérault',
    image:
      'https://images.vivino.com/thumbs/lN3RJZA-SIq29mTDAkYX6A_pb_x300.png',
    id: 95,
  },
  {
    winery: 'Domaine des Diables',
    wine: 'Rosé Bonbon Côtes de Provence 2017',
    rating: {average: '4.3', reviews: '136 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/MGG4mGSwQ9aiLpGuXCFvjQ_pb_x300.png',
    id: 96,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) 2012',
    rating: {average: '4.3', reviews: '136 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vHGbmhbzSCm-UgQszBCs-w_pb_x300.png',
    id: 97,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: 'MiP Collection Côtes de Provence Rosé 2018',
    rating: {average: '4.3', reviews: '129 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vsfrVEIUR-mDQ56LcBvrhg_pb_x300.png',
    id: 98,
  },
  {
    winery: 'Proprieta Sperino',
    wine: 'Rosa del Rosa Rosato 2016',
    rating: {average: '4.3', reviews: '128 ratings'},
    location: 'Italy\n·\nCoste della Sesia',
    image:
      'https://images.vivino.com/thumbs/z-SK6OnBQpe1QDXp_tReUw_pb_x300.png',
    id: 99,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2012',
    rating: {average: '4.3', reviews: '127 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 100,
  },
  {
    winery: 'Rezabal',
    wine: 'Rosé 2018',
    rating: {average: '4.3', reviews: '122 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/Jheym4PjRdKFrgRxtC9Bwg_pb_x300.png',
    id: 101,
  },
  {
    winery: 'Fattoria Aldobrandesca',
    wine: 'Aleatico Toscana Rosato 2015',
    rating: {average: '4.3', reviews: '121 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/mu0MhRNbSma0xmVFTkt3vA_pb_x300.png',
    id: 102,
  },
  {
    winery: 'Minuty',
    wine: '281 Rosé 2018',
    rating: {average: '4.3', reviews: '112 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
    id: 103,
  },
  {
    winery: 'Encostas do Lima',
    wine: 'Rosé N.V.',
    rating: {average: '4.3', reviews: '108 ratings'},
    location: 'Portugal\n·\nVinho Verde',
    image:
      'https://images.vivino.com/thumbs/boQ570-lQcKcDj5rsJBCQQ_pb_x300.png',
    id: 104,
  },
  {
    winery: 'Château Saint-Maur',
    wine: 'Clos de Capelune Côtes de Provence Rosé N.V.',
    rating: {average: '4.3', reviews: '104 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/l7BLBu7ERi2tJIQqtli_NA_pb_x300.png',
    id: 105,
  },
  {
    winery: 'Le Coste',
    wine: 'Rosato N.V.',
    rating: {average: '4.3', reviews: '101 ratings'},
    location: 'Italy\n·\nLazio',
    image:
      'https://images.vivino.com/thumbs/Gvb6SDzfRBWCBmsYYQZqZA_pb_x300.png',
    id: 106,
  },
  {
    winery: 'Marani',
    wine: 'Pirosmani Medium Dry Rosé 2013',
    rating: {average: '4.3', reviews: '98 ratings'},
    location: 'Georgia\n·\nKakheti',
    image:
      'https://images.vivino.com/thumbs/zwtlu0ULTDiN43iBOuVE-w_pb_x300.png',
    id: 107,
  },
  {
    winery: 'VieVité',
    wine: 'Extraordinaire Côtes de Provence Rosé N.V.',
    rating: {average: '4.3', reviews: '90 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NuKJFEunRACwvmQwzqu-1g_pb_x300.png',
    id: 108,
  },
  {
    winery: 'Scribe',
    wine: 'Rosé of Pinot Noir 2018',
    rating: {average: '4.3', reviews: '85 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/JcMStljASvegQOhoXmtZKg_pb_x300.png',
    id: 109,
  },
  {
    winery: 'Château Pigoudet',
    wine: 'Le Grand Pigoudet Rosé 2013',
    rating: {average: '4.3', reviews: '84 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/fzKZr7VJTf-MW0NWL5vDCA_pb_x300.png',
    id: 110,
  },
  {
    winery: 'Muse',
    wine: 'Night Cabernet Franc (Blue) 2017',
    rating: {average: '4.3', reviews: '83 ratings'},
    location: 'Romania\n·\nRecas',
    image:
      'https://images.vivino.com/thumbs/D9T2FX7zR9CUNaDTchW9HQ_pb_x300.png',
    id: 111,
  },
  {
    winery: 'Gassier',
    wine: 'Château Gassier 946 Sainte Victoire Sélection Parcellaire Rosé 2015',
    rating: {average: '4.3', reviews: '82 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/UVQlLZR2Q6mnuDrWbQUfkQ_pb_x300.png',
    id: 112,
  },
  {
    winery: 'Gut Oggau',
    wine: 'Winifred Rosé 2018',
    rating: {average: '4.3', reviews: '82 ratings'},
    location: 'Austria\n·\nWeinland',
    image:
      'https://images.vivino.com/thumbs/-JU7UEW5S82dB_d8Pzvwag_pb_x300.png',
    id: 113,
  },
  {
    winery: 'Empathy',
    wine: 'Rosé N.V.',
    rating: {average: '4.3', reviews: '81 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/43AGnXJbTD6nlL_-hfk3dA_pb_x300.png',
    id: 114,
  },
  {
    winery: 'Château Barbebelle',
    wine: 'Héritage Rosé N.V.',
    rating: {average: '4.3', reviews: '81 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/aqjoZYX9QWOqxBKFHnNDjw_pb_x300.png',
    id: 115,
  },
  {
    winery: 'Château de Montgueret',
    wine: "Rosé d'Anjou 2018",
    rating: {average: '4.3', reviews: '79 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/DrcuSt14R4aO5PBKjZHz0A_pb_x300.png',
    id: 116,
  },
  {
    winery: 'R. López de Heredia Viña Tondonia',
    wine: 'Gran Reserva Rosado 2009',
    rating: {average: '4.3', reviews: '79 ratings'},
    location: 'Spain\n·\nRioja Alta',
    image:
      'https://images.vivino.com/thumbs/2WhWo25KTeyKq3pKSACY8g_pb_x300.png',
    id: 117,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2011',
    rating: {average: '4.3', reviews: '78 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 118,
  },
  {
    winery: 'Château de Saint Martin',
    wine: 'Eternelle Favorite Rosé 2018',
    rating: {average: '4.3', reviews: '78 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ODBpWgzbSnuz-rO_guBoyg_pb_x300.png',
    id: 119,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2009',
    rating: {average: '4.3', reviews: '77 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 120,
  },
  {
    winery: 'Le Paradou',
    wine: 'Côtes de Provence Rosé 2016',
    rating: {average: '4.3', reviews: '76 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/VVqgzl1CT7KsPiXjNEnhtA_pb_x300.png',
    id: 121,
  },
  {
    winery: 'Château La Sauvageonne',
    wine: 'La Villa Rosé 2016',
    rating: {average: '4.3', reviews: '75 ratings'},
    location: 'France\n·\nLanguedoc',
    image:
      'https://images.vivino.com/thumbs/QNTe2Md7So6KJ9Wz59btzw_pb_x300.png',
    id: 122,
  },
  {
    winery: 'Château Barbeyrolles',
    wine: 'Pétale de Rosé 2017',
    rating: {average: '4.3', reviews: '75 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Sx-mc4NxQc6b0zR0HPodqw_pb_x300.png',
    id: 123,
  },
  {
    winery: 'Domaine du Castel',
    wine: 'Rosé du Castel 2017',
    rating: {average: '4.3', reviews: '72 ratings'},
    location: 'Israel\n·\nJerusalem',
    image:
      'https://images.vivino.com/thumbs/KXb-lXq_T8WPcy3P0Ulwhw_pb_x300.png',
    id: 124,
  },
  {
    winery: 'Château Barbebelle',
    wine: 'Cuvée Madeleine Rosé 2017',
    rating: {average: '4.3', reviews: '73 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/o1YbbQ2NSAKnpHgSBJogGg_pb_x300.png',
    id: 125,
  },
  {
    winery: 'Valentini',
    wine: "Cerasuolo Montepulciano d'Abruzzo Rosé 2016",
    rating: {average: '4.3', reviews: '67 ratings'},
    location: "Italy\n·\nCerasuolo d'Abruzzo",
    image:
      'https://images.vivino.com/thumbs/hQgeM_g0SGa3oziz1Lxd-g_pb_x300.png',
    id: 126,
  },
  {
    winery: 'R. López de Heredia Viña Tondonia',
    wine: 'Gran Reserva Rosado 2000',
    rating: {average: '4.3', reviews: '66 ratings'},
    location: 'Spain\n·\nRioja Alta',
    image:
      'https://images.vivino.com/thumbs/2WhWo25KTeyKq3pKSACY8g_pb_x300.png',
    id: 127,
  },
  {
    winery: 'Matthiasson',
    wine: 'Rosé 2013',
    rating: {average: '4.3', reviews: '64 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/jZT-TbjrRzaWoP1g9bcjUw_pb_x300.png',
    id: 128,
  },
  {
    winery: 'Château la Calisse',
    wine: 'Patricia Ortelli Coteaux Varois en Provence Rosé 2017',
    rating: {average: '4.3', reviews: '60 ratings'},
    location: 'France\n·\nCoteaux Varois en Provence',
    image:
      'https://images.vivino.com/thumbs/3DKKRBJRSdyIrhEkHQmzPg_pb_x300.png',
    id: 129,
  },
  {
    winery: 'Roy René',
    wine: "Opale Coteaux d'Aix-en-Provence 2018",
    rating: {average: '4.3', reviews: '59 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/_xGzmNBMQdW2qEnPQW4TmA_pb_x300.png',
    id: 130,
  },
  {
    winery: 'L.A.S. Vino',
    wine: 'Albino PNO Rosé N.V.',
    rating: {average: '4.3', reviews: '61 ratings'},
    location: 'Australia\n·\nMargaret River',
    image:
      'https://images.vivino.com/thumbs/seccCrRCQWeCNeT5yGT6bQ_pb_x300.png',
    id: 131,
  },
  {
    winery: 'Gran Moraine',
    wine: 'Rosé of Pinot Noir 2016',
    rating: {average: '4.3', reviews: '57 ratings'},
    location: 'United States\n·\nYamhill-Carlton District',
    image:
      'https://images.vivino.com/thumbs/pPRHEAfKRtecaxf6Hsrv0w_pb_x300.png',
    id: 132,
  },
  {
    winery: 'Corzano e Paterno',
    wine: 'Il Corzanello Rosato 2017',
    rating: {average: '4.3', reviews: '55 ratings'},
    location: 'Italy\n·\nToscana',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 133,
  },
  {
    winery: 'Empathy',
    wine: 'Rosé 2018',
    rating: {average: '4.3', reviews: '61 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/43AGnXJbTD6nlL_-hfk3dA_pb_x300.png',
    id: 134,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Love Provence Rosé N.V.',
    rating: {average: '4.3', reviews: '53 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/n_HeSqJqQRaCeBxtro8O9Q_pb_x300.png',
    id: 135,
  },
  {
    winery: 'Ruth Lewandowski',
    wine: 'Feints 2018',
    rating: {average: '4.3', reviews: '51 ratings'},
    location: 'United States\n·\nMendocino County',
    image:
      'https://images.vivino.com/thumbs/UyNLuTh0TvS1OuQJA0xJKg_pb_x300.png',
    id: 136,
  },
  {
    winery: 'Domaine de Marquiliani',
    wine: 'Rosé 2016',
    rating: {average: '4.3', reviews: '50 ratings'},
    location: 'France\n·\nCorsica',
    image:
      'https://images.vivino.com/thumbs/6WgRtQgxQf67A6HH014Ggw_pb_x300.png',
    id: 137,
  },
  {
    winery: 'Domaine de Cala',
    wine: 'Coteaux Varois en Provence 2015',
    rating: {average: '4.3', reviews: '48 ratings'},
    location: 'France\n·\nCoteaux Varois en Provence',
    image:
      'https://images.vivino.com/thumbs/sLNmeCHjRYmaGO1ARlvaig_pb_x300.png',
    id: 138,
  },
  {
    winery: 'Curran',
    wine: 'Grenache Gris Rosé 2017',
    rating: {average: '4.3', reviews: '48 ratings'},
    location: 'United States\n·\nSanta Barbara County',
    image:
      'https://images.vivino.com/thumbs/_VUqQcP_RVavJP7rSUDhlQ_pb_x300.png',
    id: 139,
  },
  {
    winery: 'Boschendal',
    wine: 'Blanc de Noir 2010',
    rating: {average: '4.3', reviews: '43 ratings'},
    location: 'South Africa\n·\nCoastal Region',
    image:
      'https://images.vivino.com/thumbs/rn9UOCcgTdmp3Ji531GG0Q_pb_x300.png',
    id: 140,
  },
  {
    winery: 'Vino dei Fratelli',
    wine: 'Mochetto N.V.',
    rating: {average: '4.3', reviews: '44 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/tP3HY737RoaqFOWYbWUKbA_pb_x300.png',
    id: 141,
  },
  {
    winery: 'Scribe',
    wine: 'Rosé of Pinot Noir 2014',
    rating: {average: '4.3', reviews: '42 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/JcMStljASvegQOhoXmtZKg_pb_x300.png',
    id: 142,
  },
  {
    winery: 'Domaine Barcelo',
    wine: 'Rosé N.V.',
    rating: {average: '4.3', reviews: '42 ratings'},
    location: 'France\n·\nCorsica',
    image:
      'https://images.vivino.com/thumbs/J6djxVsBQ8-Wl74PwiFbvg_pb_x300.png',
    id: 143,
  },
  {
    winery: 'Vallombrosa',
    wine: 'Terrasses Première Cuvée Rosé 2015',
    rating: {average: '4.3', reviews: '41 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/JSmettHtTLCn_H_-4ApwgQ_pb_x300.png',
    id: 144,
  },
  {
    winery: 'Bressan',
    wine: 'Rosantico 2011',
    rating: {average: '4.3', reviews: '41 ratings'},
    location: 'Italy\n·\nVenezia Giulia',
    image:
      'https://images.vivino.com/thumbs/Bkafk2EuTJmwoq83gW4Cxw_pb_x300.png',
    id: 145,
  },
  {
    winery: 'Domaine Ray-Jane',
    wine: 'Bandol Rosé 2017',
    rating: {average: '4.3', reviews: '39 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/T2pIhT7oQqqv-AfZnfL5rA_pb_x300.png',
    id: 146,
  },
  {
    winery: 'Goldeneye',
    wine: 'Pinot Noir Rosé 2017',
    rating: {average: '4.3', reviews: '39 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/Yq6tTHTpQ0uIDY1g8IwLfA_pb_x300.png',
    id: 147,
  },
  {
    winery: 'Balea',
    wine: 'Rosé N.V.',
    rating: {average: '4.3', reviews: '38 ratings'},
    location: 'Spain\n·\nBizkaiko Txakolina',
    image: 'https://thumbs.vivino.com/avatars/YKRBBp-jQ3-6NjxOcVux0g_50x50.jpg',
    id: 148,
  },
  {
    winery: 'Buena Vista',
    wine: "Count's Selection Pinot Noir Rosé 2014",
    rating: {average: '4.3', reviews: '37 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/YokD6mjEQd2-EOw0eCaWag_pb_x300.png',
    id: 149,
  },
  {
    winery: 'Keltis',
    wine: 'Žan 2018',
    rating: {average: '4.3', reviews: '37 ratings'},
    location: 'Slovenia\n·\nŠtajerska',
    image: 'https://thumbs.vivino.com/avatars/jDShWwE-Q_2sovPU5Ye1WA_50x50.jpg',
    id: 150,
  },
  {
    winery: 'Château Ste Anne',
    wine: 'Bandol Rosé 2015',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/_dl1Te_eSqiZyiraNbpCpQ_pb_x300.png',
    id: 151,
  },
  {
    winery: 'Domaine Hippolyte Reverdy',
    wine: 'Sancerre Rosé 2016',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'France\n·\nUpper Loire',
    image:
      'https://images.vivino.com/thumbs/YxaUaXBoSSe9Hf-atGwxyQ_pb_x300.png',
    id: 152,
  },
  {
    winery: 'Alain Gueneau',
    wine: 'Chavignolet Sancerre 2018',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/JEXST_rCTFi9pjidyso40w_pb_x300.png',
    id: 153,
  },
  {
    winery: 'Stift Gœttweig',
    wine: 'Rosé Messwein 2014',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'Austria\n·\nNiederösterreich',
    image:
      'https://images.vivino.com/thumbs/Wr6VlNFKT-m0IyVneZYPRg_pb_x300.png',
    id: 154,
  },
  {
    winery: 'Castelfeder',
    wine: 'Lagrein Kretzer Rosato N.V.',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/3rmMSXQ0Q0mhxjTJpBDapA_pb_x300.png',
    id: 155,
  },
  {
    winery: 'Apriori',
    wine: 'Sangiacomo Vineyard Rosé N.V.',
    rating: {average: '4.3', reviews: '36 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/CgR-GoH8RoiqPV1083sXRA_pb_x300.png',
    id: 156,
  },
  {
    winery: 'Weszeli',
    wine: 'Eden Rosé 2018',
    rating: {average: '4.3', reviews: '35 ratings'},
    location: 'Austria\n·\nKamptal',
    image:
      'https://images.vivino.com/thumbs/D0WtuXeySuuJg18wAckJaA_pb_x300.png',
    id: 157,
  },
  {
    winery: 'Malabaila',
    wine: 'Langhe Rosato N.V.',
    rating: {average: '4.3', reviews: '35 ratings'},
    location: 'Italy\n·\nLanghe',
    image:
      'https://images.vivino.com/thumbs/cG79_KYsT6eRw6X34b5i1Q_pb_x300.png',
    id: 158,
  },
  {
    winery: 'Pierpaolo Pecorari',
    wine: 'Ros Alba Rosato 2014',
    rating: {average: '4.3', reviews: '33 ratings'},
    location: 'Italy\n·\nVenezia Giulia',
    image:
      'https://images.vivino.com/thumbs/mgbrWidYRVuAvLSmoSDpTA_pb_x300.png',
    id: 159,
  },
  {
    winery: 'Eric Kent',
    wine: 'Rosé 2017',
    rating: {average: '4.3', reviews: '33 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/VmxzPxjKTD2S5acgHeVPtA_pb_x300.png',
    id: 160,
  },
  {
    winery: 'A Tribute to Grace',
    wine: 'Santa Barbara Highlands Vineyard Rosé of Grenache 2014',
    rating: {average: '4.3', reviews: '32 ratings'},
    location: 'United States\n·\nSanta Barbara County',
    image:
      'https://images.vivino.com/thumbs/GneOz8q4QGenHEUMFFZHcw_pb_x300.png',
    id: 161,
  },
  {
    winery: 'Illahe',
    wine: 'Tempranillo Rosé 2017',
    rating: {average: '4.3', reviews: '32 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/efDn_ECiQje9n27mBC7Qsg_pb_x300.png',
    id: 162,
  },
  {
    winery: 'Château Simone',
    wine: 'Palette Rose 2012',
    rating: {average: '4.3', reviews: '31 ratings'},
    location: 'France\n·\nPalette',
    image:
      'https://images.vivino.com/thumbs/lnQL_iedQN2WcC2L68IceQ_pb_x300.png',
    id: 163,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Love Provence Rosé 2017',
    rating: {average: '4.3', reviews: '31 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/n_HeSqJqQRaCeBxtro8O9Q_pb_x300.png',
    id: 164,
  },
  {
    winery: 'Smith Story',
    wine: 'Pinot Noir Rosé 2016',
    rating: {average: '4.3', reviews: '31 ratings'},
    location: 'Germany\n·\nRheingau',
    image:
      'https://images.vivino.com/thumbs/T3YhtNQuT8SQ2EsTlnn4ow_pb_x300.png',
    id: 165,
  },
  {
    winery: 'Seven Mountains Wine Cellars',
    wine: 'Tickled Pink 2008',
    rating: {average: '4.3', reviews: '31 ratings'},
    location: 'United States\n·\nPennsylvania',
    image: 'https://images.vivino.com/avatars/default_user_50x50.png',
    id: 166,
  },
  {
    winery: 'Château La Gordonne',
    wine: 'La Chapelle Gordonne Côtes de Provence Rosé 2018',
    rating: {average: '4.3', reviews: '31 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vMl7E3J0Sp2cI9fFS7L0jg_pb_x300.png',
    id: 167,
  },
  {
    winery: 'Château Les Crostes',
    wine: 'Cuvée Prestige Rosé 2017',
    rating: {average: '4.3', reviews: '30 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/liIJacrjSo6ExhE7DhY5Ow_pb_x300.png',
    id: 168,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2007',
    rating: {average: '4.3', reviews: '30 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 169,
  },
  {
    winery: 'Quinta da Sequeira',
    wine: 'Rosé 2014',
    rating: {average: '4.3', reviews: '30 ratings'},
    location: 'Portugal\n·\nDouro',
    image:
      'https://images.vivino.com/thumbs/2-B76LxrRq-sX0CY8tBRJw_pb_x300.png',
    id: 170,
  },
  {
    winery: 'Tablas Creek Vineyard',
    wine: 'Dianthus 2016',
    rating: {average: '4.3', reviews: '30 ratings'},
    location: 'United States\n·\nPaso Robles',
    image:
      'https://images.vivino.com/thumbs/g7r2VQFnRdGe_GrEc-5Xfg_pb_x300.png',
    id: 171,
  },
  {
    winery: 'Ehlers Estate',
    wine: 'Sylviane 2015',
    rating: {average: '4.3', reviews: '30 ratings'},
    location: 'United States\n·\nSt. Helena',
    image:
      'https://images.vivino.com/thumbs/ps9oagsAROeYg69gwm5_6A_pb_x300.png',
    id: 172,
  },
  {
    winery: 'Domaine du Gour de Chaule',
    wine: 'Amour de Rosé Gigondas 2017',
    rating: {average: '4.3', reviews: '29 ratings'},
    location: 'France\n·\nGigondas',
    image:
      'https://images.vivino.com/thumbs/h4JlUs_1QSWvvBxFkWG8xA_pb_x300.png',
    id: 173,
  },
  {
    winery: "Stags' Leap",
    wine: 'Amparo Rosé 2011',
    rating: {average: '4.3', reviews: '29 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/U3wmjZoRSQCUm_UhNY3qfw_pb_x300.png',
    id: 174,
  },
  {
    winery: 'Withers',
    wine: 'Rosé 2018',
    rating: {average: '4.3', reviews: '29 ratings'},
    location: 'United States\n·\nEl Dorado',
    image:
      'https://images.vivino.com/thumbs/qRuyhcjhQi6R2y60COe7kQ_pb_x300.png',
    id: 175,
  },
  {
    winery: 'Malene',
    wine: 'Rosé 2015',
    rating: {average: '4.3', reviews: '28 ratings'},
    location: 'United States\n·\nSanta Barbara County',
    image:
      'https://images.vivino.com/thumbs/_QvglVc5SLmV_sR_eAnJ8w_pb_x300.png',
    id: 176,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Les Domaniers Rosé 2016',
    rating: {average: '4.3', reviews: '28 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/toDmfbGCQhmyKYw6cVWdUQ_pb_x300.png',
    id: 177,
  },
  {
    winery: 'Andrian',
    wine: 'Lagrein Rosé 2017',
    rating: {average: '4.3', reviews: '28 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/LrtqJ2EsTviLfp15e46shw_pb_x300.png',
    id: 178,
  },
  {
    winery: 'Château Saint-Hilaire',
    wine: 'Prestige Rosé 2015',
    rating: {average: '4.3', reviews: '28 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 179,
  },
  {
    winery: 'Valentini',
    wine: "Cerasuolo Montepulciano d'Abruzzo Rosé 2005",
    rating: {average: '4.3', reviews: '28 ratings'},
    location: "Italy\n·\nCerasuolo d'Abruzzo",
    image:
      'https://images.vivino.com/thumbs/hQgeM_g0SGa3oziz1Lxd-g_pb_x300.png',
    id: 180,
  },
  {
    winery: 'Heidi Schröck',
    wine: 'Rosé Biscaya 2018',
    rating: {average: '4.3', reviews: '28 ratings'},
    location: 'Austria\n·\nNeusiedlersee-Hügelland',
    image:
      'https://images.vivino.com/thumbs/eXtjMVNJTwWS7b5z38e0BA_pb_x300.png',
    id: 181,
  },
  {
    winery: 'L.A.S. Vino',
    wine: 'Albino PNO Rosé 2017',
    rating: {average: '4.3', reviews: '29 ratings'},
    location: 'Australia\n·\nMargaret River',
    image:
      'https://images.vivino.com/thumbs/seccCrRCQWeCNeT5yGT6bQ_pb_x300.png',
    id: 182,
  },
  {
    winery: 'Scribe',
    wine: 'Rosé of Pinot Noir 2013',
    rating: {average: '4.3', reviews: '27 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/JcMStljASvegQOhoXmtZKg_pb_x300.png',
    id: 183,
  },
  {
    winery: 'Marani',
    wine: 'Pirosmani Medium Dry Rosé 2017',
    rating: {average: '4.3', reviews: '27 ratings'},
    location: 'Georgia\n·\nKakheti',
    image:
      'https://images.vivino.com/thumbs/zwtlu0ULTDiN43iBOuVE-w_pb_x300.png',
    id: 184,
  },
  {
    winery: 'Prieler',
    wine: 'Rosé vom Stein 2014',
    rating: {average: '4.3', reviews: '26 ratings'},
    location: 'Austria\n·\nBurgenland',
    image:
      'https://images.vivino.com/thumbs/xjKu36qZQsKzeoc-G2Nlbw_pb_x300.png',
    id: 185,
  },
  {
    winery: 'Lieu Dit',
    wine: 'Pinot Noir Rosé 2017',
    rating: {average: '4.3', reviews: '26 ratings'},
    location: 'United States\n·\nSanta Barbara County',
    image:
      'https://images.vivino.com/thumbs/0tbihpodT6qxzbutsCiWjg_pb_x300.png',
    id: 186,
  },
  {
    winery: 'Château de la Selve',
    wine: "L'audacieuse Rosé 2015",
    rating: {average: '4.3', reviews: '26 ratings'},
    location: 'France\n·\nArdèche',
    image:
      'https://images.vivino.com/thumbs/aoxfxtEjSNi08runL6gjYg_pb_x300.png',
    id: 187,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé 2007',
    rating: {average: '4.3', reviews: '25 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 188,
  },
  {
    winery: 'Domaine de Marquiliani',
    wine: 'Le Rosé de Pauline 2014',
    rating: {average: '4.3', reviews: '25 ratings'},
    location: 'France\n·\nCorsica',
    image:
      'https://images.vivino.com/thumbs/z8FGNwlQQCO5qDkOtjpm5Q_pb_x300.png',
    id: 189,
  },
  {
    winery: 'Notorious Pink',
    wine: 'Grenache Rosé N.V.',
    rating: {average: '4.2', reviews: '3960 ratings'},
    location: 'France\n·\nVin de France',
    image:
      'https://images.vivino.com/thumbs/0iPgtJgmQ-2CeV5FUKQMfA_pb_x300.png',
    id: 190,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or N.V.',
    rating: {average: '4.2', reviews: '3928 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 191,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) N.V.',
    rating: {average: '4.2', reviews: '3581 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/tE2hMYcUTnuNw1l0_BFZlA_pb_x300.png',
    id: 192,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) N.V.',
    rating: {average: '4.2', reviews: '3330 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/HTx2ObtVSqKNdcDX3rdbxA_pb_x300.png',
    id: 193,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé N.V.',
    rating: {average: '4.2', reviews: '2990 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 194,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) N.V.',
    rating: {average: '4.2', reviews: '2449 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/2J5LDR2GTQKcG98pAApYqA_pb_x300.png',
    id: 195,
  },
  {
    winery: 'Frank Cornelissen',
    wine: 'Susucaru N.V.',
    rating: {average: '4.2', reviews: '2296 ratings'},
    location: 'Italy\n·\nTerre Siciliane',
    image:
      'https://images.vivino.com/thumbs/BVH8ELQXQb-mU6_RXOOb9Q_pb_x300.png',
    id: 196,
  },
  {
    winery: 'Ameztoi',
    wine: 'Rubentis N.V.',
    rating: {average: '4.2', reviews: '2143 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/MuVqotNHTreQehQE5bjS4Q_pb_x300.png',
    id: 197,
  },
  {
    winery: 'Notorious Pink',
    wine: 'Grenache Rosé 2017',
    rating: {average: '4.2', reviews: '1476 ratings'},
    location: 'France\n·\nVin de France',
    image:
      'https://images.vivino.com/thumbs/0iPgtJgmQ-2CeV5FUKQMfA_pb_x300.png',
    id: 198,
  },
  {
    winery: 'La Tour Melas',
    wine: "Idylle d'Achinos Rosé N.V.",
    rating: {average: '4.2', reviews: '1326 ratings'},
    location: 'Greece\n·\nFthiotida',
    image:
      'https://images.vivino.com/thumbs/9aUmPPTPRXiSZKyQ5FAtTA_pb_x300.png',
    id: 199,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé N.V.',
    rating: {average: '4.2', reviews: '1317 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 200,
  },
  {
    winery: 'San Salvatore',
    wine: 'Vetere Paestum Rosato N.V.',
    rating: {average: '4.2', reviews: '1155 ratings'},
    location: 'Italy\n·\nPaestum',
    image:
      'https://images.vivino.com/thumbs/Is67T4-ySk6gbvW4Ty458g_pb_x300.png',
    id: 201,
  },
  {
    winery: 'Notorious Pink',
    wine: 'Grenache Rosé 2016',
    rating: {average: '4.2', reviews: '1082 ratings'},
    location: 'France\n·\nVin de France',
    image:
      'https://images.vivino.com/thumbs/0iPgtJgmQ-2CeV5FUKQMfA_pb_x300.png',
    id: 202,
  },
  {
    winery: 'Elio Perrone',
    wine: 'Bigarò Rosé N.V.',
    rating: {average: '4.2', reviews: '923 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/kixsM17DQPm1fVhtXU7CVw_pb_x300.png',
    id: 203,
  },
  {
    winery: 'Frank Cornelissen',
    wine: 'Susucaru 2017',
    rating: {average: '4.2', reviews: '801 ratings'},
    location: 'Italy\n·\nTerre Siciliane',
    image:
      'https://images.vivino.com/thumbs/BVH8ELQXQb-mU6_RXOOb9Q_pb_x300.png',
    id: 204,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2016',
    rating: {average: '4.2', reviews: '792 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 205,
  },
  {
    winery: 'Colinas de São Lourenço',
    wine: 'Principal Rosé Téte de Cuvée N.V.',
    rating: {average: '4.2', reviews: '773 ratings'},
    location: 'Portugal\n·\nBairrada',
    image:
      'https://images.vivino.com/thumbs/vmjXeGfgQiC4PiyvQX8sTw_pb_x300.png',
    id: 206,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Symphonie Côtes de Provence Rosé N.V.',
    rating: {average: '4.2', reviews: '713 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/RxXi347kRsu_KivwmBoMzA_pb_x300.png',
    id: 207,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2017',
    rating: {average: '4.2', reviews: '702 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/tE2hMYcUTnuNw1l0_BFZlA_pb_x300.png',
    id: 208,
  },
  {
    winery: 'Domaine des Diables',
    wine: 'Rosé Bonbon Côtes de Provence N.V.',
    rating: {average: '4.2', reviews: '679 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/MGG4mGSwQ9aiLpGuXCFvjQ_pb_x300.png',
    id: 209,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2017',
    rating: {average: '4.2', reviews: '670 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/HTx2ObtVSqKNdcDX3rdbxA_pb_x300.png',
    id: 210,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2016',
    rating: {average: '4.2', reviews: '627 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/tE2hMYcUTnuNw1l0_BFZlA_pb_x300.png',
    id: 211,
  },
  {
    winery: 'Tenuta Il Poggione',
    wine: 'Rosato di Toscana Brancato N.V.',
    rating: {average: '4.2', reviews: '623 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/UlzJZw2ZSViSGaTrZd3Few_pb_x300.png',
    id: 212,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé 2016',
    rating: {average: '4.2', reviews: '610 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 213,
  },
  {
    winery: 'Reymos',
    wine: 'Viña Tendida Moscato Rosé N.V.',
    rating: {average: '4.2', reviews: '586 ratings'},
    location: 'Spain\n·\nValencia',
    image:
      'https://images.vivino.com/thumbs/-9gKjljFTMuwfFY1W658SQ_pb_x300.png',
    id: 214,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2015',
    rating: {average: '4.2', reviews: '582 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/uE0N0zxUS1K36LSWVi_S_Q_pb_x300.png',
    id: 215,
  },
  {
    winery: 'Marcel Martin',
    wine: "La Jaglerie Rosé d'Anjou 2016",
    rating: {average: '4.2', reviews: '567 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/Wln49EWoRZ2Ck1Pv01AVHw_pb_x300.png',
    id: 216,
  },
  {
    winery: 'Mirabeau',
    wine: 'Etoile Provence Rosé N.V.',
    rating: {average: '4.2', reviews: '558 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ctt2wzP2RmmkI6Vn7O2Oyw_pb_x300.png',
    id: 217,
  },
  {
    winery: 'Mud House',
    wine: 'Sauvignon Blanc Rosé 2017',
    rating: {average: '4.2', reviews: '533 ratings'},
    location: 'New Zealand\n·\nMarlborough',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 218,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2015',
    rating: {average: '4.2', reviews: '470 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 219,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé 2015',
    rating: {average: '4.2', reviews: '467 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 220,
  },
  {
    winery: 'Scribe',
    wine: 'Rosé of Pinot Noir N.V.',
    rating: {average: '4.2', reviews: '459 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/JcMStljASvegQOhoXmtZKg_pb_x300.png',
    id: 221,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: 'MiP Classic Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '453 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/WUA65QuMRxeViLJllLqN_A_pb_x300.png',
    id: 222,
  },
  {
    winery: 'Frank Cornelissen',
    wine: 'Susucaru 2016',
    rating: {average: '4.2', reviews: '450 ratings'},
    location: 'Italy\n·\nTerre Siciliane',
    image:
      'https://images.vivino.com/thumbs/BVH8ELQXQb-mU6_RXOOb9Q_pb_x300.png',
    id: 223,
  },
  {
    winery: 'Commanderie de la Bargemone',
    wine: 'Cuvée Marina Rosé 2016',
    rating: {average: '4.2', reviews: '435 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/WAF5yEazROuzWMyspVSnVg_pb_x300.png',
    id: 224,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Clos Mireille Rosé (Coeur de Grain) 2016',
    rating: {average: '4.2', reviews: '422 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/2J5LDR2GTQKcG98pAApYqA_pb_x300.png',
    id: 225,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2013',
    rating: {average: '4.2', reviews: '419 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/uE0N0zxUS1K36LSWVi_S_Q_pb_x300.png',
    id: 226,
  },
  {
    winery: 'Château Pigoudet',
    wine: 'Classic Rosé 2017',
    rating: {average: '4.2', reviews: '418 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/7NuqRindSxW7cXDBQLU4SQ_pb_x300.png',
    id: 227,
  },
  {
    winery: 'La Tour Melas',
    wine: "Idylle d'Achinos Rosé 2017",
    rating: {average: '4.2', reviews: '416 ratings'},
    location: 'Greece\n·\nFthiotida',
    image:
      'https://images.vivino.com/thumbs/9aUmPPTPRXiSZKyQ5FAtTA_pb_x300.png',
    id: 228,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé 2017',
    rating: {average: '4.2', reviews: '402 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 229,
  },
  {
    winery: 'Colinas de São Lourenço',
    wine: 'Principal Rosé Téte de Cuvée 2010',
    rating: {average: '4.2', reviews: '398 ratings'},
    location: 'Portugal\n·\nBairrada',
    image:
      'https://images.vivino.com/thumbs/vmjXeGfgQiC4PiyvQX8sTw_pb_x300.png',
    id: 230,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Rock Angel Rosé 2014',
    rating: {average: '4.2', reviews: '380 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vafcQPqBT4-cODnCEedeag_pb_x300.png',
    id: 231,
  },
  {
    winery: 'Ameztoi',
    wine: 'Rubentis 2017',
    rating: {average: '4.2', reviews: '369 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/MuVqotNHTreQehQE5bjS4Q_pb_x300.png',
    id: 232,
  },
  {
    winery: 'Liquid Farm',
    wine: 'Vogelzang Vineyard Rosé N.V.',
    rating: {average: '4.2', reviews: '364 ratings'},
    location: 'United States\n·\nHappy Canyon of Santa Barbara',
    image:
      'https://images.vivino.com/thumbs/DRKKiypkReWEm-BpptBhQg_pb_x300.png',
    id: 233,
  },
  {
    winery: 'La Tour Melas',
    wine: "Idylle d'Achinos Rosé 2018",
    rating: {average: '4.2', reviews: '359 ratings'},
    location: 'Greece\n·\nFthiotida',
    image:
      'https://images.vivino.com/thumbs/9aUmPPTPRXiSZKyQ5FAtTA_pb_x300.png',
    id: 234,
  },
  {
    winery: 'Innocent Bystander',
    wine: 'Moscato Rosé 2016',
    rating: {average: '4.2', reviews: '343 ratings'},
    location: 'Australia\n·\nVictoria',
    image:
      'https://images.vivino.com/thumbs/TIcrihLETMi5Z-NUkyq4ag_pb_x300.png',
    id: 235,
  },
  {
    winery: 'Commanderie de la Bargemone',
    wine: 'Cuvée Marina Rosé 2017',
    rating: {average: '4.2', reviews: '341 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/WAF5yEazROuzWMyspVSnVg_pb_x300.png',
    id: 236,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2014',
    rating: {average: '4.2', reviews: '335 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 237,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: 'MiP Collection Côtes de Provence Rosé N.V.',
    rating: {average: '4.2', reviews: '330 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vsfrVEIUR-mDQ56LcBvrhg_pb_x300.png',
    id: 238,
  },
  {
    winery: 'Drouet Fréres',
    wine: "Les Roseraies Rosé d'Anjou 2016",
    rating: {average: '4.2', reviews: '325 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/mz1-HLsKT022Iy5Cu2sWwg_pb_x300.png',
    id: 239,
  },
  {
    winery: 'Frank Cornelissen',
    wine: 'Susucaru 2018',
    rating: {average: '4.2', reviews: '310 ratings'},
    location: 'Italy\n·\nTerre Siciliane',
    image:
      'https://images.vivino.com/thumbs/BVH8ELQXQb-mU6_RXOOb9Q_pb_x300.png',
    id: 240,
  },
  {
    winery: 'Ameztoi',
    wine: 'Rubentis 2016',
    rating: {average: '4.2', reviews: '309 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/MuVqotNHTreQehQE5bjS4Q_pb_x300.png',
    id: 241,
  },
  {
    winery: "Tenuta Sant'Antonio",
    wine: 'Scaia Rosato 2018',
    rating: {average: '4.2', reviews: '309 ratings'},
    location: 'Italy\n·\nVeneto',
    image:
      'https://images.vivino.com/thumbs/QNczyaedT3OgXcam4NGd7g_pb_x300.png',
    id: 242,
  },
  {
    winery: 'Silver Moki',
    wine: 'Sauvignon Blanc Blush N.V.',
    rating: {average: '4.2', reviews: '308 ratings'},
    location: 'New Zealand\n·\nMarlborough',
    image:
      'https://images.vivino.com/thumbs/QWKNuDV9QZWneng1oSNegA_pb_x300.png',
    id: 243,
  },
  {
    winery: 'Domaine de Fontsainte',
    wine: 'Gris de Gris Corbières Rosé 2017',
    rating: {average: '4.2', reviews: '296 ratings'},
    location: 'France\n·\nCorbières',
    image:
      'https://images.vivino.com/thumbs/IrnrLk1LTcWMVdMZwSzz9g_pb_x300.png',
    id: 244,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château de Selle Rosé (Coeur de Grain) 2012',
    rating: {average: '4.2', reviews: '294 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/znOSQj0RQ5-wnZBGajuK9w_pb_x300.png',
    id: 245,
  },
  {
    winery: 'Gut Oggau',
    wine: 'Winifred Rosé 2017',
    rating: {average: '4.2', reviews: '291 ratings'},
    location: 'Austria\n·\nWeinland',
    image:
      'https://images.vivino.com/thumbs/-JU7UEW5S82dB_d8Pzvwag_pb_x300.png',
    id: 246,
  },
  {
    winery: 'Oliver',
    wine: 'Cherry Moscato N.V.',
    rating: {average: '4.2', reviews: '287 ratings'},
    location: 'United States\n·\nIndiana',
    image:
      'https://images.vivino.com/thumbs/Tb0hDplEQjyTkUX9wV7GFA_pb_x300.png',
    id: 247,
  },
  {
    winery: 'Silver Moki',
    wine: 'Sauvignon Blanc Blush 2018',
    rating: {average: '4.2', reviews: '285 ratings'},
    location: 'New Zealand\n·\nMarlborough',
    image:
      'https://images.vivino.com/thumbs/QWKNuDV9QZWneng1oSNegA_pb_x300.png',
    id: 248,
  },
  {
    winery: 'La Tour Melas',
    wine: "Idylle d'Achinos Rosé 2016",
    rating: {average: '4.2', reviews: '271 ratings'},
    location: 'Greece\n·\nFthiotida',
    image:
      'https://images.vivino.com/thumbs/9aUmPPTPRXiSZKyQ5FAtTA_pb_x300.png',
    id: 249,
  },
  {
    winery: 'Unti',
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '269 ratings'},
    location: 'United States\n·\nDry Creek Valley',
    image:
      'https://images.vivino.com/thumbs/u5iQqLRISUmZ5eQcT-DUKQ_pb_x300.png',
    id: 250,
  },
  {
    winery: 'Domaine Tempier',
    wine: 'Bandol Rosé 2014',
    rating: {average: '4.2', reviews: '264 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/8gpGyvR_Sx62deQQ4I9IVg_pb_x300.png',
    id: 251,
  },
  {
    winery: 'François Cotat',
    wine: 'Chavignol Sancerre Rosé N.V.',
    rating: {average: '4.2', reviews: '267 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/Brth9y9JRgeSCsnhCj2bXw_pb_x300.png',
    id: 252,
  },
  {
    winery: 'Saint Andre de Figuiere',
    wine: 'Première de Figuière Rosé 2017',
    rating: {average: '4.2', reviews: '262 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/oCF-ZahhTXOYNuSXDtZUuA_pb_x300.png',
    id: 253,
  },
  {
    winery: 'Ameztoi',
    wine: 'Rubentis 2013',
    rating: {average: '4.2', reviews: '258 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/MuVqotNHTreQehQE5bjS4Q_pb_x300.png',
    id: 254,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2012',
    rating: {average: '4.2', reviews: '248 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 255,
  },
  {
    winery: 'Minuty',
    wine: 'Prestige Rosé 2013',
    rating: {average: '4.2', reviews: '238 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/looU6BtORRmCTb5RbU6V9g_pb_x300.png',
    id: 256,
  },
  {
    winery: 'Chatelain Desjacques',
    wine: "Rosé d'Anjou 2015",
    rating: {average: '4.2', reviews: '235 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 257,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2013',
    rating: {average: '4.2', reviews: '230 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 258,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Symphonie Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '230 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/RxXi347kRsu_KivwmBoMzA_pb_x300.png',
    id: 259,
  },
  {
    winery: 'Withers',
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '223 ratings'},
    location: 'United States\n·\nEl Dorado',
    image:
      'https://images.vivino.com/thumbs/qRuyhcjhQi6R2y60COe7kQ_pb_x300.png',
    id: 260,
  },
  {
    winery: 'Château Pigoudet',
    wine: 'Le Grand Pigoudet Rosé N.V.',
    rating: {average: '4.2', reviews: '214 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/fzKZr7VJTf-MW0NWL5vDCA_pb_x300.png',
    id: 261,
  },
  {
    winery: 'Bartenura',
    wine: 'Malvasia Castelnuovo Don Bosco Rosé N.V.',
    rating: {average: '4.2', reviews: '213 ratings'},
    location: 'Italy\n·\nMalvasia di Castelnuovo don Bosco',
    image:
      'https://images.vivino.com/thumbs/bx6znn-kQJ-hQ7GQWXlDuw_pb_x300.png',
    id: 262,
  },
  {
    winery: 'Tenuta Il Poggione',
    wine: 'Rosato di Toscana Brancato 2015',
    rating: {average: '4.2', reviews: '205 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/UlzJZw2ZSViSGaTrZd3Few_pb_x300.png',
    id: 263,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2015',
    rating: {average: '4.2', reviews: '205 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 264,
  },
  {
    winery: 'San Salvatore',
    wine: 'Vetere Paestum Rosato 2016',
    rating: {average: '4.2', reviews: '204 ratings'},
    location: 'Italy\n·\nPaestum',
    image:
      'https://images.vivino.com/thumbs/Is67T4-ySk6gbvW4Ty458g_pb_x300.png',
    id: 265,
  },
  {
    winery: 'Teutonic',
    wine: 'Rosé (Laurel Vineyard) N.V.',
    rating: {average: '4.2', reviews: '204 ratings'},
    location: 'United States\n·\nChehalem Mountains',
    image:
      'https://images.vivino.com/thumbs/DDrh0bQqRfWoJfsQyoqh-Q_pb_x300.png',
    id: 266,
  },
  {
    winery: 'Rezabal',
    wine: 'Rosé 2017',
    rating: {average: '4.2', reviews: '199 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/Jheym4PjRdKFrgRxtC9Bwg_pb_x300.png',
    id: 267,
  },
  {
    winery: 'Colinas de São Lourenço',
    wine: 'Principal Rosé Téte de Cuvée 2007',
    rating: {average: '4.2', reviews: '188 ratings'},
    location: 'Portugal\n·\nBairrada',
    image:
      'https://images.vivino.com/thumbs/vmjXeGfgQiC4PiyvQX8sTw_pb_x300.png',
    id: 268,
  },
  {
    winery: 'Pico Maccario',
    wine: 'Piemonte Lavignone Rosato 2017',
    rating: {average: '4.2', reviews: '184 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/5uadg-Q-RXWUdO79CA4uCQ_pb_x300.png',
    id: 269,
  },
  {
    winery: 'Eric Kent',
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '179 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/VmxzPxjKTD2S5acgHeVPtA_pb_x300.png',
    id: 270,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Symphonie Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '177 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/RxXi347kRsu_KivwmBoMzA_pb_x300.png',
    id: 271,
  },
  {
    winery: 'Long Meadow Ranch',
    wine: 'Anderson Valley Rosé of Pinot Noir N.V.',
    rating: {average: '4.2', reviews: '174 ratings'},
    location: 'United States\n·\nAnderson Valley',
    image:
      'https://images.vivino.com/thumbs/OhR-I6jlSPuz7Lyz2MCw6w_pb_x300.png',
    id: 272,
  },
  {
    winery: 'Paraduxx',
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '174 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/pN2vg4RPR9SigF5TX7696w_pb_x300.png',
    id: 273,
  },
  {
    winery: 'Pascal Jolivet',
    wine: 'Sancerre Rosé 2015',
    rating: {average: '4.2', reviews: '172 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/PDy6pyrRQIepnH_IxE8RwQ_pb_x300.png',
    id: 274,
  },
  {
    winery: 'Peyrassol',
    wine: 'Chateau Peyrassol Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '170 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/bgikOQJGSFWghwQ4lpdF8g_pb_x300.png',
    id: 275,
  },
  {
    winery: "Château La Tour de l'Évêque",
    wine: 'Pétale de Rosé 2018',
    rating: {average: '4.2', reviews: '170 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/5uSM8XPUSK6AvR6oVmw1jA_pb_x300.png',
    id: 276,
  },
  {
    winery: 'Clos Cibonne',
    wine: 'Cuvée Prestige Caroline Rosé N.V.',
    rating: {average: '4.2', reviews: '164 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/CEs3G3roR3qkt0mn3gK6Ew_pb_x300.png',
    id: 277,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2015',
    rating: {average: '4.2', reviews: '164 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 278,
  },
  {
    winery: "L'Anglore - Eric Pfifferling",
    wine: 'Tavel 2015',
    rating: {average: '4.2', reviews: '164 ratings'},
    location: 'France\n·\nTavel',
    image:
      'https://images.vivino.com/thumbs/QlIar-lNTGO4UWMhuNE7gQ_pb_x300.png',
    id: 279,
  },
  {
    winery: 'Château Saint-Maur',
    wine: "L'Excellence Côtes de Provence Rosé 2018",
    rating: {average: '4.2', reviews: '161 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/s-f3NeCPQCOlbSMmmwDUGw_pb_x300.png',
    id: 280,
  },
  {
    winery: 'Mirabeau',
    wine: 'Etoile Provence Rosé 2018',
    rating: {average: '4.2', reviews: '159 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ctt2wzP2RmmkI6Vn7O2Oyw_pb_x300.png',
    id: 281,
  },
  {
    winery: 'Château de Campuget',
    wine: '1753 Syrah - Vermentino Rosé 2017',
    rating: {average: '4.2', reviews: '154 ratings'},
    location: 'France\n·\nCostières-de-Nîmes',
    image:
      'https://images.vivino.com/thumbs/IG0LfhSDR8uRjlmun4vouQ_pb_x300.png',
    id: 282,
  },
  {
    winery: 'Cantalupo',
    wine: 'Il Mimo Nebbiolo Colline Novaresi 2008',
    rating: {average: '4.2', reviews: '152 ratings'},
    location: 'Italy\n·\nColline Novaresi',
    image:
      'https://images.vivino.com/thumbs/ilHzbamqSiWL3uEnnNqmaQ_pb_x300.png',
    id: 283,
  },
  {
    winery: 'Amuse Bouche',
    wine: 'Prêt à Boire Rosé N.V.',
    rating: {average: '4.2', reviews: '151 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/hNtHnTZ3Q8ynhRc1jc7Lpg_pb_x300.png',
    id: 284,
  },
  {
    winery: 'Manincor',
    wine: 'La Rosé de Manincor 2017',
    rating: {average: '4.2', reviews: '151 ratings'},
    location: 'Italy\n·\nVigneti delle Dolomiti',
    image:
      'https://images.vivino.com/thumbs/zLeKMJeeRuKddvgUjmzOXA_pb_x300.png',
    id: 285,
  },
  {
    winery: 'Domaine des Nouelles',
    wine: "Rosé d'Anjou 2017",
    rating: {average: '4.2', reviews: '150 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 286,
  },
  {
    winery: 'Domaine des Diables',
    wine: 'Rosé Bonbon Côtes de Provence 2016',
    rating: {average: '4.2', reviews: '150 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/MGG4mGSwQ9aiLpGuXCFvjQ_pb_x300.png',
    id: 287,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2016',
    rating: {average: '4.2', reviews: '149 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 288,
  },
  {
    winery: 'Saint Andre de Figuiere',
    wine: 'Première de Figuière Rosé 2018',
    rating: {average: '4.2', reviews: '144 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/oCF-ZahhTXOYNuSXDtZUuA_pb_x300.png',
    id: 289,
  },
  {
    winery: 'Château Sainte Marguerite',
    wine: 'Symphonie Côtes de Provence Rosé 2018',
    rating: {average: '4.2', reviews: '140 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/RxXi347kRsu_KivwmBoMzA_pb_x300.png',
    id: 290,
  },
  {
    winery: 'Drouet Fréres',
    wine: "Les Roseraies Rosé d'Anjou 2018",
    rating: {average: '4.2', reviews: '139 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/mz1-HLsKT022Iy5Cu2sWwg_pb_x300.png',
    id: 291,
  },
  {
    winery: 'Riunite',
    wine: 'Moscato Peach N.V.',
    rating: {average: '4.2', reviews: '139 ratings'},
    location: 'Italy\n·\nEmilia-Romagna',
    image:
      'https://images.vivino.com/thumbs/AcVtS7ZrTZeOxUIoVzXSMw_pb_x300.png',
    id: 292,
  },
  {
    winery: "Stags' Leap",
    wine: 'Amparo Rosé 2015',
    rating: {average: '4.2', reviews: '151 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/U3wmjZoRSQCUm_UhNY3qfw_pb_x300.png',
    id: 293,
  },
  {
    winery: 'Gut Oggau',
    wine: 'Rosé (Family Reunion) N.V.',
    rating: {average: '4.2', reviews: '138 ratings'},
    location: 'Austria\n·\nWeinland',
    image:
      'https://images.vivino.com/thumbs/L897GdEYT0uWdHmgyxj9QQ_pb_x300.png',
    id: 294,
  },
  {
    winery: 'Domaine Lafage',
    wine: 'La Grande Cuvée Rosé 2013',
    rating: {average: '4.2', reviews: '137 ratings'},
    location: 'France\n·\nCôtes du Roussillon',
    image:
      'https://images.vivino.com/thumbs/eLc1KykxT9uFfFn0J4nGkg_pb_x300.png',
    id: 295,
  },
  {
    winery: 'Conte Ottavio Piccolomini',
    wine: 'Impressioni Italiane Ponticello Vallagarina N.V.',
    rating: {average: '4.2', reviews: '140 ratings'},
    location: 'Italy\n·\nVallagarina',
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 296,
  },
  {
    winery: 'Château d’Ollières',
    wine: 'Rosé 2017',
    rating: {average: '4.2', reviews: '132 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/Ym9PbtvnS0mgYjfuWmMsKA_pb_x300.png',
    id: 297,
  },
  {
    winery: 'Villa M',
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '132 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/__JeiUHGQ5KF6LBGEREllw_pb_x300.png',
    id: 298,
  },
  {
    winery: 'Domaines Ott',
    wine: 'Château Romassan Rosé (Coeur de Grain) 2012',
    rating: {average: '4.2', reviews: '132 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/uE0N0zxUS1K36LSWVi_S_Q_pb_x300.png',
    id: 299,
  },
  {
    winery: 'Minuty',
    wine: 'Rosé et Or 2012',
    rating: {average: '4.2', reviews: '130 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/xkMPG20ZS5mehP-XH0iBXg_pb_x300.png',
    id: 300,
  },
  {
    winery: 'Domaine de Marquiliani',
    wine: 'Le Rosé de Pauline N.V.',
    rating: {average: '4.2', reviews: '123 ratings'},
    location: 'France\n·\nCorsica',
    image:
      'https://images.vivino.com/thumbs/z8FGNwlQQCO5qDkOtjpm5Q_pb_x300.png',
    id: 301,
  },
  {
    winery: 'Château d’Ollières',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '122 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/Ym9PbtvnS0mgYjfuWmMsKA_pb_x300.png',
    id: 302,
  },
  {
    winery: 'Le Roi des Pierres',
    wine: 'Sancerre Rosé N.V.',
    rating: {average: '4.2', reviews: '122 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/5iVUziRpQ9aFTGORqhE8pg_pb_x300.png',
    id: 303,
  },
  {
    winery: 'La Mascaronne',
    wine: "Quat' Saisons Côtes de Provence 2018",
    rating: {average: '4.2', reviews: '122 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/WaUeUV2PRm6KVLxl8qHsDQ_pb_x300.png',
    id: 304,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2014',
    rating: {average: '4.2', reviews: '121 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 305,
  },
  {
    winery: 'North Valley',
    wine: 'Pinot Noir Rosé N.V.',
    rating: {average: '4.2', reviews: '120 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/pSGD5Is1SGK2utMyU0W1nA_pb_x300.png',
    id: 306,
  },
  {
    winery: 'Domaine du Paternel',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '116 ratings'},
    location: 'France\n·\nCassis',
    image:
      'https://images.vivino.com/thumbs/kRCztNbFRUmIbkv_EOZaWA_pb_x300.png',
    id: 307,
  },
  {
    winery: 'Western Cellars',
    wine: 'Zinfandel Rosé 2018',
    rating: {average: '4.2', reviews: '115 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/nScMDK3BTiyz0P--QLiSWQ_pb_x300.png',
    id: 308,
  },
  {
    winery: 'Wooing Tree',
    wine: 'Blondie 2018',
    rating: {average: '4.2', reviews: '114 ratings'},
    location: 'New Zealand\n·\nCentral Otago',
    image:
      'https://images.vivino.com/thumbs/60KJESfOQQeeI7SyD80Lkg_pb_x300.png',
    id: 309,
  },
  {
    winery: 'Gut Oggau',
    wine: 'Rosé (Family Reunion) 2016',
    rating: {average: '4.2', reviews: '114 ratings'},
    location: 'Austria\n·\nWeinland',
    image:
      'https://images.vivino.com/thumbs/L897GdEYT0uWdHmgyxj9QQ_pb_x300.png',
    id: 310,
  },
  {
    winery: 'Scala Dei',
    wine: 'Pla del Àngels Rosado 2017',
    rating: {average: '4.2', reviews: '114 ratings'},
    location: 'Spain\n·\nPriorat',
    image:
      'https://images.vivino.com/thumbs/R5JqTwFKSuS9SF7qFQr5-g_pb_x300.png',
    id: 311,
  },
  {
    winery: 'San Salvatore',
    wine: 'Vetere Paestum Rosato 2015',
    rating: {average: '4.2', reviews: '111 ratings'},
    location: 'Italy\n·\nPaestum',
    image:
      'https://images.vivino.com/thumbs/Is67T4-ySk6gbvW4Ty458g_pb_x300.png',
    id: 312,
  },
  {
    winery: 'Scribe',
    wine: 'Rosé of Pinot Noir 2016',
    rating: {average: '4.2', reviews: '110 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/JcMStljASvegQOhoXmtZKg_pb_x300.png',
    id: 313,
  },
  {
    winery: 'Maison Williams Chase',
    wine: 'Rosé 2017',
    rating: {average: '4.2', reviews: '109 ratings'},
    location: 'France\n·\nLuberon',
    image:
      'https://images.vivino.com/thumbs/gr6uy4QmQSuzw0L2gkGF6w_pb_x300.png',
    id: 314,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2016',
    rating: {average: '4.2', reviews: '107 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 315,
  },
  {
    winery: 'Château Barbeyrolles',
    wine: 'Pétale de Rosé 2015',
    rating: {average: '4.2', reviews: '106 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Sx-mc4NxQc6b0zR0HPodqw_pb_x300.png',
    id: 316,
  },
  {
    winery: 'Lakewood',
    wine: 'Abby Rosé N.V.',
    rating: {average: '4.2', reviews: '104 ratings'},
    location: 'United States\n·\nFinger Lakes',
    image:
      'https://images.vivino.com/thumbs/1hfYxQ_4SMqgj2iYwTUukA_pb_x300.png',
    id: 317,
  },
  {
    winery: 'Marchandise',
    wine: 'Côtes de Provence Rosé 2018',
    rating: {average: '4.2', reviews: '103 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/dWhtr5XDR762PT2bJDi-jA_pb_x300.png',
    id: 318,
  },
  {
    winery: 'Sono Montenidoli',
    wine: 'Canaiuolo Rosato 2018',
    rating: {average: '4.2', reviews: '102 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/_aiWDsHdRv-cMWA2zX7tmA_pb_x300.png',
    id: 319,
  },
  {
    winery: 'Henri Badoux',
    wine: 'Aigle les Murailles Rosé 2017',
    rating: {average: '4.2', reviews: '103 ratings'},
    location: 'Switzerland\n·\nChablais',
    image:
      'https://images.vivino.com/thumbs/bgBJLl48QF-vX7Kit2Gi3w_pb_x300.png',
    id: 320,
  },
  {
    winery: 'Saraceni',
    wine: 'Volare N.V.',
    rating: {average: '4.2', reviews: '102 ratings'},
    location: 'Italy\n·\nVeneto',
    image:
      'https://images.vivino.com/thumbs/FGqi3tz4TuKyIOxY1cjvfg_pb_x300.png',
    id: 321,
  },
  {
    winery: 'Day Wines',
    wine: 'Babycheeks Rosé N.V.',
    rating: {average: '4.2', reviews: '102 ratings'},
    location: 'United States\n·\nOregon',
    image:
      'https://images.vivino.com/thumbs/nY1khh1sR0eeW8VabK1qbw_pb_x300.png',
    id: 322,
  },
  {
    winery: 'Château de Pampelonne',
    wine: 'Légende Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '101 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/AcGRR_98RCOe3GcHn6C5Cw_pb_x300.png',
    id: 323,
  },
  {
    winery: 'Château Rasque',
    wine: 'Cuvée Alexandra Côtes de Provence 2013',
    rating: {average: '4.2', reviews: '100 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/WiF8BZpYQMq901Lg9xfyUg_pb_x300.png',
    id: 324,
  },
  {
    winery: 'Ameztoi',
    wine: 'Rubentis 2012',
    rating: {average: '4.2', reviews: '100 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/MuVqotNHTreQehQE5bjS4Q_pb_x300.png',
    id: 325,
  },
  {
    winery: 'Chêne Bleu',
    wine: 'Rosé 2016',
    rating: {average: '4.2', reviews: '98 ratings'},
    location: 'France\n·\nVaucluse',
    image:
      'https://images.vivino.com/thumbs/h49M-L__QcCQ4x84n4QwYQ_pb_x300.png',
    id: 326,
  },
  {
    winery: 'Maison Williams Chase',
    wine: 'Rosé 2016',
    rating: {average: '4.2', reviews: '98 ratings'},
    location: 'France\n·\nLuberon',
    image:
      'https://images.vivino.com/thumbs/gr6uy4QmQSuzw0L2gkGF6w_pb_x300.png',
    id: 327,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2017',
    rating: {average: '4.2', reviews: '96 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 328,
  },
  {
    winery: 'Proprieta Sperino',
    wine: 'Rosa del Rosa Rosato 2018',
    rating: {average: '4.2', reviews: '95 ratings'},
    location: 'Italy\n·\nCoste della Sesia',
    image:
      'https://images.vivino.com/thumbs/z-SK6OnBQpe1QDXp_tReUw_pb_x300.png',
    id: 329,
  },
  {
    winery: 'Domaine des Diables',
    wine: 'Rosé Bonbon Côtes de Provence 2015',
    rating: {average: '4.2', reviews: '93 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/MGG4mGSwQ9aiLpGuXCFvjQ_pb_x300.png',
    id: 330,
  },
  {
    winery: 'Limerick Lane',
    wine: 'Syrah of Rosé N.V.',
    rating: {average: '4.2', reviews: '94 ratings'},
    location: 'United States\n·\nRussian River Valley',
    image:
      'https://images.vivino.com/thumbs/IUJDaRtvTpKyQCWtQn9_1g_pb_x300.png',
    id: 331,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2011',
    rating: {average: '4.2', reviews: '89 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 332,
  },
  {
    winery: 'Château Simone',
    wine: 'Palette Rose 2013',
    rating: {average: '4.2', reviews: '88 ratings'},
    location: 'France\n·\nPalette',
    image:
      'https://images.vivino.com/thumbs/lnQL_iedQN2WcC2L68IceQ_pb_x300.png',
    id: 333,
  },
  {
    winery: 'Robert Sinskey',
    wine: 'Pinot Noir of Vin Gris 2018',
    rating: {average: '4.2', reviews: '87 ratings'},
    location: 'United States\n·\nLos Carneros',
    image:
      'https://images.vivino.com/thumbs/Tdaodpr5SIqmaVqoeRgMQA_pb_x300.png',
    id: 334,
  },
  {
    winery: 'Domaine du Castel',
    wine: 'Rosé du Castel 2016',
    rating: {average: '4.2', reviews: '85 ratings'},
    location: 'Israel\n·\nJerusalem',
    image:
      'https://images.vivino.com/thumbs/KXb-lXq_T8WPcy3P0Ulwhw_pb_x300.png',
    id: 335,
  },
  {
    winery: 'Franz Haas',
    wine: 'Moscato Rosa Schweizer 2013',
    rating: {average: '4.2', reviews: '85 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/vrIIWtC_Rcq-5EdiqvRTFQ_pb_x300.png',
    id: 336,
  },
  {
    winery: 'Brotte',
    wine: 'Côtes De Provence Père Anselme Rosè 2018',
    rating: {average: '4.2', reviews: '85 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/KUqXWIx8RASsdhscCt4VVw_pb_x300.png',
    id: 337,
  },
  {
    winery: 'Oliver',
    wine: 'Blueberry Moscato N.V.',
    rating: {average: '4.2', reviews: '82 ratings'},
    location: 'United States\n·\nIndiana',
    image:
      'https://images.vivino.com/thumbs/E2bv6SbeTwSwZddIxnAfsw_pb_x300.png',
    id: 338,
  },
  {
    winery: 'Cantalupo',
    wine: 'Il Mimo Nebbiolo Colline Novaresi 2009',
    rating: {average: '4.2', reviews: '80 ratings'},
    location: 'Italy\n·\nColline Novaresi',
    image:
      'https://images.vivino.com/thumbs/ilHzbamqSiWL3uEnnNqmaQ_pb_x300.png',
    id: 339,
  },
  {
    winery: 'Chêne Bleu',
    wine: 'Rosé 2017',
    rating: {average: '4.2', reviews: '80 ratings'},
    location: 'France\n·\nVaucluse',
    image:
      'https://images.vivino.com/thumbs/h49M-L__QcCQ4x84n4QwYQ_pb_x300.png',
    id: 340,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2017',
    rating: {average: '4.2', reviews: '79 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 341,
  },
  {
    winery: 'Steininger',
    wine: 'Cabernet Sauvignon Rosé 2016',
    rating: {average: '4.2', reviews: '78 ratings'},
    location: 'Austria\n·\nNiederösterreich',
    image:
      'https://images.vivino.com/thumbs/NnKNncAtRZqZ9Z0I54lTbw_pb_x300.png',
    id: 342,
  },
  {
    winery: 'Berri Estates',
    wine: 'Rosé 2016',
    rating: {average: '4.2', reviews: '78 ratings'},
    location: 'Australia\n·\nSouth Eastern Australia',
    image:
      'https://images.vivino.com/thumbs/aofLsnU9ScmUMob8JhTSuw_pb_x300.png',
    id: 343,
  },
  {
    winery: 'Château de Mauny',
    wine: "Rosé d'Anjou 2017",
    rating: {average: '4.2', reviews: '77 ratings'},
    location: "France\n·\nRosé d'Anjou",
    image:
      'https://images.vivino.com/thumbs/PCbRdyZDS8SS5cntxL0rrw_pb_x300.png',
    id: 344,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Garrus Rosé 2011',
    rating: {average: '4.2', reviews: '74 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png',
    id: 345,
  },
  {
    winery: 'Matthiasson',
    wine: 'Rosé 2015',
    rating: {average: '4.2', reviews: '73 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/jZT-TbjrRzaWoP1g9bcjUw_pb_x300.png',
    id: 346,
  },
  {
    winery: "L'Anglore - Eric Pfifferling",
    wine: 'Tavel 2017',
    rating: {average: '4.2', reviews: '72 ratings'},
    location: 'France\n·\nTavel',
    image:
      'https://images.vivino.com/thumbs/QlIar-lNTGO4UWMhuNE7gQ_pb_x300.png',
    id: 347,
  },
  {
    winery: 'Wölffer Estate',
    wine: 'Summer In A Bottle Rosé 2014',
    rating: {average: '4.2', reviews: '73 ratings'},
    location: 'United States\n·\nLong Island',
    image:
      'https://images.vivino.com/thumbs/J0Dp6I3eREma6PrZSQPwew_pb_x300.png',
    id: 348,
  },
  {
    winery: 'New Age',
    wine: 'Rosado (Dulce Natural) 2018',
    rating: {average: '4.2', reviews: '72 ratings'},
    location: 'Argentina\n·\nMendoza',
    image:
      'https://images.vivino.com/thumbs/EO2kbEePSXq8jWKW-FW36w_pb_x300.png',
    id: 349,
  },
  {
    winery: 'La Vidaubanaise',
    wine: 'Domaine des Blaïs Rosé 2015',
    rating: {average: '4.2', reviews: '72 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/7Y2nTl4OR5SmdM-R7wkLQA_pb_x300.png',
    id: 350,
  },
  {
    winery: 'Quinta de Ventozelo',
    wine: 'Rosé de Ventozelo 2017',
    rating: {average: '4.2', reviews: '72 ratings'},
    location: 'Portugal\n·\nDouro',
    image:
      'https://images.vivino.com/thumbs/1oxuSpIJRw-JNJeavInOEw_pb_x300.png',
    id: 351,
  },
  {
    winery: 'Barone Montalto',
    wine: "Passivento Nero d'Avola Rosato 2017",
    rating: {average: '4.2', reviews: '74 ratings'},
    location: 'Italy\n·\nTerre Siciliane',
    image:
      'https://images.vivino.com/thumbs/853oRNc2SH-_SMT7yCMzGA_pb_x300.png',
    id: 352,
  },
  {
    winery: 'Fattoria Aldobrandesca',
    wine: 'Aleatico Toscana Rosato 2016',
    rating: {average: '4.2', reviews: '69 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/mu0MhRNbSma0xmVFTkt3vA_pb_x300.png',
    id: 353,
  },
  {
    winery: "L'Aventure",
    wine: 'Rosé N.V.',
    rating: {average: '4.2', reviews: '69 ratings'},
    location: 'United States\n·\nPaso Robles',
    image:
      'https://images.vivino.com/thumbs/oCOFVV3zQYKZ3G0F6GviBg_pb_x300.png',
    id: 354,
  },
  {
    winery: 'Bartenura',
    wine: 'Malvasia di Casorzo 2015',
    rating: {average: '4.2', reviews: '68 ratings'},
    location: "Italy\n·\nMalvasia di Casorzo d'Asti",
    image:
      'https://images.vivino.com/thumbs/sJd7QpiATmqtzQq3xwcvpg_pb_x300.png',
    id: 355,
  },
  {
    winery: 'Monte Saline',
    wine: 'Vintage Rosé 2015',
    rating: {average: '4.1', reviews: '69 ratings'},
    location: 'Italy\n·\nVeneto',
    image:
      'https://images.vivino.com/thumbs/KfYk6GnlQfGwCpHgip_lBA_pb_x300.png',
    id: 356,
  },
  {
    winery: 'Attanasio',
    wine: 'Primitivo Salento Rosato 2015',
    rating: {average: '4.2', reviews: '67 ratings'},
    location: 'Italy\n·\nSalento',
    image:
      'https://images.vivino.com/thumbs/_qlLh-E2QRCFawI1u8iyCQ_pb_x300.png',
    id: 357,
  },
  {
    winery: 'Terra Santa',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '65 ratings'},
    location: 'France\n·\nIle de Beaute',
    image:
      'https://images.vivino.com/thumbs/-fNmKlsJRMif2CyneoC3Uw_pb_x300.png',
    id: 358,
  },
  {
    winery: "L'Avenir",
    wine: 'Glen Rosé 2018',
    rating: {average: '4.2', reviews: '65 ratings'},
    location: 'South Africa\n·\nStellenbosch',
    image:
      'https://images.vivino.com/thumbs/1-jeI4lUQBOkBpGx2MQH7w_pb_x300.png',
    id: 359,
  },
  {
    winery: 'Croteaux',
    wine: '181 Merlot Rosé N.V.',
    rating: {average: '4.2', reviews: '65 ratings'},
    location: 'United States\n·\nLong Island',
    image:
      'https://images.vivino.com/thumbs/7ZORDdvXRCepP0uwRFqg8Q_pb_x300.png',
    id: 360,
  },
  {
    winery: 'Pascal et Nicolas Reverdy',
    wine: 'Terre De Maimbray Rose 2015',
    rating: {average: '4.2', reviews: '63 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/lMZqkpIVQXSkQv22QB-Rvg_pb_x300.png',
    id: 361,
  },
  {
    winery: 'Barefoot',
    wine: 'Red Moscato 2000',
    rating: {average: '4.2', reviews: '63 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/5aibQITxTBKxjlbdD3S5lA_pb_x300.png',
    id: 362,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Les Clans Rosé 2010',
    rating: {average: '4.2', reviews: '62 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/67wqpawVTKGh1Ibl--Zr1w_pb_x300.png',
    id: 363,
  },
  {
    winery: 'Château de Saint Martin',
    wine: 'Eternelle Favorite Rosé 2017',
    rating: {average: '4.2', reviews: '62 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ODBpWgzbSnuz-rO_guBoyg_pb_x300.png',
    id: 364,
  },
  {
    winery: 'Comincioli',
    wine: 'Diamante Rosé 2015',
    rating: {average: '4.2', reviews: '61 ratings'},
    location: 'Italy\n·\nBenaco Bresciano',
    image:
      'https://images.vivino.com/thumbs/1aRHSaUGSgeH7X9DnoKcUw_pb_x300.png',
    id: 365,
  },
  {
    winery: 'Liquid Farm',
    wine: 'Vogelzang Vineyard Rosé 2014',
    rating: {average: '4.2', reviews: '61 ratings'},
    location: 'United States\n·\nHappy Canyon of Santa Barbara',
    image:
      'https://images.vivino.com/thumbs/DRKKiypkReWEm-BpptBhQg_pb_x300.png',
    id: 366,
  },
  {
    winery: 'Bedrock Wine Co.',
    wine: 'Ode To Lulu Rosé 2016',
    rating: {average: '4.2', reviews: '61 ratings'},
    location: 'United States\n·\nCalifornia',
    image:
      'https://images.vivino.com/thumbs/XcIvCCwpQNK322nDhAuFzA_pb_x300.png',
    id: 367,
  },
  {
    winery: 'Kenzo Estate',
    wine: 'Yui Rosé 2015',
    rating: {average: '4.2', reviews: '61 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/VETkcbQ8QyyFkZylaOiFfg_pb_x300.png',
    id: 368,
  },
  {
    winery: 'Château Léoube',
    wine: 'Secret de Léoube Rosé 2016',
    rating: {average: '4.2', reviews: '60 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ZtUhxN_nQzGEyhnDuJ4JAw_pb_x300.png',
    id: 369,
  },
  {
    winery: 'Antica Terra',
    wine: 'Erratica Rosé N.V.',
    rating: {average: '4.2', reviews: '60 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/BabqYp3gStC0BEcKDp-BBA_pb_x300.png',
    id: 370,
  },
  {
    winery: 'Le Contesse',
    wine: 'Single Fermentation Pinot Noir Rosé N.V.',
    rating: {average: '4.2', reviews: '60 ratings'},
    location: 'Italy\n·\nVeneto',
    image:
      'https://images.vivino.com/thumbs/TBY2Jx51R6O7buebAiuSOQ_pb_x300.png',
    id: 371,
  },
  {
    winery: 'Château de la Grille',
    wine: 'Chinon Rosé 2014',
    rating: {average: '4.2', reviews: '59 ratings'},
    location: 'France\n·\nChinon',
    image:
      'https://images.vivino.com/thumbs/q9VyEmBWSau8eMlzrUezzA_pb_x300.png',
    id: 372,
  },
  {
    winery: 'Batič',
    wine: 'Rosé 2015',
    rating: {average: '4.2', reviews: '58 ratings'},
    location: 'Slovenia\n·\nVipava',
    image:
      'https://images.vivino.com/thumbs/JGtf1UccSRab3Tv4lihFNw_pb_x300.png',
    id: 373,
  },
  {
    winery: 'Liquid Farm',
    wine: 'Vogelzang Vineyard Rosé 2015',
    rating: {average: '4.2', reviews: '57 ratings'},
    location: 'United States\n·\nHappy Canyon of Santa Barbara',
    image:
      'https://images.vivino.com/thumbs/DRKKiypkReWEm-BpptBhQg_pb_x300.png',
    id: 374,
  },
  {
    winery: 'Commanderie de la Bargemone',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '56 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/-pmXmo26QQikh-t3qLdNLw_pb_x300.png',
    id: 375,
  },
  {
    winery: 'Margerum',
    wine: 'Riviera Rosé 2015',
    rating: {average: '4.2', reviews: '56 ratings'},
    location: 'United States\n·\nSan Luis Obispo County',
    image:
      'https://images.vivino.com/thumbs/tCjsVWC6TumMGdlmPYzwjA_pb_x300.png',
    id: 376,
  },
  {
    winery: 'Della Staffa',
    wine: 'Conestabile Rosato 2017',
    rating: {average: '4.2', reviews: '56 ratings'},
    location: 'Italy\n·\nUmbria',
    image:
      'https://images.vivino.com/thumbs/F12HWDn-SdCyB8nl4mn6JQ_pb_x300.png',
    id: 377,
  },
  {
    winery: 'Long Meadow Ranch',
    wine: 'Anderson Valley Rosé of Pinot Noir 2016',
    rating: {average: '4.2', reviews: '55 ratings'},
    location: 'United States\n·\nAnderson Valley',
    image:
      'https://images.vivino.com/thumbs/OhR-I6jlSPuz7Lyz2MCw6w_pb_x300.png',
    id: 378,
  },
  {
    winery: 'Tenuta San Francesco',
    wine: "Costa d'Amalfi Rosato 2014",
    rating: {average: '4.2', reviews: '55 ratings'},
    location: "Italy\n·\nCosta d'Amalfi",
    image:
      'https://images.vivino.com/thumbs/sXT3gjeBTBeUnfjTt1L3BQ_pb_x300.png',
    id: 379,
  },
  {
    winery: 'Pascal Lambert',
    wine: 'Cuvée Mathilde Chinon Rosé N.V.',
    rating: {average: '4.2', reviews: '55 ratings'},
    location: 'France\n·\nChinon',
    image:
      'https://images.vivino.com/thumbs/MlXeZ-LaQCigZL3BVU_AlA_pb_x300.png',
    id: 380,
  },
  {
    winery: 'Peyrassol',
    wine: 'Le Clos Peyrassol Côtes de Provence Rosé 2015',
    rating: {average: '4.2', reviews: '55 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/20Ap8hJ2ScakR7gx0uidIw_pb_x300.png',
    id: 381,
  },
  {
    winery: 'Château le Puy',
    wine: 'Rose-Marie N.V.',
    rating: {average: '4.2', reviews: '54 ratings'},
    location: 'France\n·\nBlaye - Côtes de Bordeaux',
    image:
      'https://images.vivino.com/thumbs/Ppd7eHIwQzGQN0wZAr-hNQ_pb_x300.png',
    id: 382,
  },
  {
    winery: "Maison l'Envoye",
    wine: 'Le Saint Pâle Rosé 2016',
    rating: {average: '4.2', reviews: '54 ratings'},
    location: 'France\n·\nBeaujolais',
    image:
      'https://images.vivino.com/thumbs/QqCvdPrHQnecKpCyTU3yBA_pb_x300.png',
    id: 383,
  },
  {
    winery: 'Domaine Les Trois Terres',
    wine: 'Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '53 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/GRKXuZIOTVazgzgvuoyPxQ_pb_x300.png',
    id: 384,
  },
  {
    winery: 'Peregrine',
    wine: 'Pinot Noir Rosé 2016',
    rating: {average: '4.2', reviews: '53 ratings'},
    location: 'New Zealand\n·\nCentral Otago',
    image:
      'https://images.vivino.com/thumbs/WzGdgeDDTbGgvN1U0sallw_pb_x300.png',
    id: 385,
  },
  {
    winery: 'Domaine de Pallus',
    wine: 'Messanges Rosé Chinon 2018',
    rating: {average: '4.2', reviews: '52 ratings'},
    location: 'France\n·\nChinon',
    image:
      'https://images.vivino.com/thumbs/OalSbgw8QRqQ58zuL-4szg_pb_x300.png',
    id: 386,
  },
  {
    winery: 'Peyrassol',
    wine: 'Le Clos Peyrassol Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '51 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/20Ap8hJ2ScakR7gx0uidIw_pb_x300.png',
    id: 387,
  },
  {
    winery: 'Biserno',
    wine: 'Sof Bibbona 2015',
    rating: {average: '4.2', reviews: '50 ratings'},
    location: 'Italy\n·\nTerratico di Bibbona',
    image:
      'https://images.vivino.com/thumbs/iEwX4t8kQOafQWstJB8Clg_pb_x300.png',
    id: 388,
  },
  {
    winery: 'Promise',
    wine: 'The Joy N.V.',
    rating: {average: '4.2', reviews: '50 ratings'},
    location: 'United States\n·\nRussian River Valley',
    image:
      'https://images.vivino.com/thumbs/T-0OVRB-Sz-CXbyEuPlGAA_pb_x300.png',
    id: 389,
  },
  {
    winery: 'Château de Bellet',
    wine: 'Cuvée Baron G. Rosé 2015',
    rating: {average: '4.2', reviews: '48 ratings'},
    location: 'France\n·\nBellet',
    image:
      'https://images.vivino.com/thumbs/EBBOjXXnSFOh5VyjzjIFlw_pb_x300.png',
    id: 390,
  },
  {
    winery: 'Brendan Tracey',
    wine: 'Rue de la Soif Rosé 2016',
    rating: {average: '4.2', reviews: '46 ratings'},
    location: 'France\n·\nVin de France',
    image:
      'https://images.vivino.com/thumbs/ORJNWnEDQDalvYuWYMiD1A_pb_x300.png',
    id: 391,
  },
  {
    winery: 'Clos Cibonne',
    wine: 'Cuvée Prestige Caroline Rosé 2017',
    rating: {average: '4.2', reviews: '46 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/CEs3G3roR3qkt0mn3gK6Ew_pb_x300.png',
    id: 392,
  },
  {
    winery: 'Ruth Lewandowski',
    wine: 'Feints 2016',
    rating: {average: '4.2', reviews: '45 ratings'},
    location: 'United States\n·\nMendocino County',
    image:
      'https://images.vivino.com/thumbs/UyNLuTh0TvS1OuQJA0xJKg_pb_x300.png',
    id: 393,
  },
  {
    winery: 'Domaine de Montine',
    wine: 'Muse Rosé 2018',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nDrôme',
    image:
      'https://images.vivino.com/thumbs/YYVctT3rT06oPDeHpFRQAg_pb_x300.png',
    id: 394,
  },
  {
    winery: 'Chateau Réal Martin',
    wine: 'Perle de Rosé Côtes de Provence 2017',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/26j2Mao7RSOSpJ4BhyXHSA_pb_x300.png',
    id: 395,
  },
  {
    winery: 'Château Puech-Haut',
    wine: 'Saint-Drézéry Tête de Bélier Rosé 2013',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nSaint-Drézéry',
    image:
      'https://images.vivino.com/thumbs/DvZQOj26QleykGQiDdm0nQ_pb_x300.png',
    id: 396,
  },
  {
    winery: 'Luccío',
    wine: 'Strawberry Moscato N.V.',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/K4rsUN2GS_-5QahQlVpdBw_pb_x300.png',
    id: 397,
  },
  {
    winery: 'Domaine La Bernarde',
    wine: 'Les Hauts du Luc Côtes de Provence Rosé 2018',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/aZNJ11uhTJO35TwPPtSa1g_pb_x300.png',
    id: 398,
  },
  {
    winery: 'Domaines Bunan',
    wine: 'Château La Rouvière Rosé 2013',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/6G9NXbAUQHu6aszkpyiwIw_pb_x300.png',
    id: 399,
  },
  {
    winery: 'Château Haut Gleon',
    wine: 'Vallée du Paradis Rosé 2016',
    rating: {average: '4.2', reviews: '43 ratings'},
    location: 'France\n·\nVallee du Paradis',
    image:
      'https://images.vivino.com/thumbs/fXL1jfuERpCdsLkv2qHZ7Q_pb_x300.png',
    id: 400,
  },
  {
    winery: 'Domaine Hippolyte Reverdy',
    wine: 'Sancerre Rosé 2017',
    rating: {average: '4.2', reviews: '43 ratings'},
    location: 'France\n·\nUpper Loire',
    image:
      'https://images.vivino.com/thumbs/YxaUaXBoSSe9Hf-atGwxyQ_pb_x300.png',
    id: 401,
  },
  {
    winery: 'Château de Pibarnon',
    wine: 'Bandol Rosé 2010',
    rating: {average: '4.2', reviews: '43 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/sc6DACwZQy-v_9-QxHzBhw_pb_x300.png',
    id: 402,
  },
  {
    winery: 'Chivite',
    wine: 'Navarra Coleccion 125 Rosado 2016',
    rating: {average: '4.2', reviews: '43 ratings'},
    location: 'Spain\n·\nNavarra',
    image:
      'https://images.vivino.com/thumbs/ESS54hWmQXSlMn66uYbPsA_pb_x300.png',
    id: 403,
  },
  {
    winery: 'Christian Bamberger 1658',
    wine: 'Blanc de Noir Merlot 2013',
    rating: {average: '4.2', reviews: '43 ratings'},
    location: 'Germany\n·\nNahe',
    image:
      'https://images.vivino.com/thumbs/QztRYHXoRz6Wb882CqRYkw_pb_x300.png',
    id: 404,
  },
  {
    winery: 'Alain Gueneau',
    wine: 'Chavignolet Sancerre 2016',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/JEXST_rCTFi9pjidyso40w_pb_x300.png',
    id: 405,
  },
  {
    winery: 'Populis',
    wine: 'Reversée Rosé 2018',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'United States\n·\nMendocino County',
    image: 'https://images.vivino.com/highlights/icon/best_user_rated.svg',
    id: 406,
  },
  {
    winery: 'Estandon',
    wine: 'Côtes de Provence Zénith 2018',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image: 'https://images.vivino.com/highlights/icon/best_user_rated.svg',
    id: 407,
  },
  {
    winery: 'Château Léoube',
    wine: 'Léoube La-Londe Rosé N.V.',
    rating: {average: '4.2', reviews: '44 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/kXCnYIjIROurANgktcJW5w_pb_x300.png',
    id: 408,
  },
  {
    winery: 'Domaine de Terrebrune',
    wine: 'Terroir du Trias Delille Vigneron Bandol Rosé 2014',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/LOBU6L-fQp-rchWrHMfKjw_pb_x300.png',
    id: 409,
  },
  {
    winery: 'Alain Gueneau',
    wine: 'Chavignolet Sancerre 2015',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/JEXST_rCTFi9pjidyso40w_pb_x300.png',
    id: 410,
  },
  {
    winery: 'Strehn',
    wine: 'Blaufränkisch Rosé 2016',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'Austria\n·\nBurgenland',
    image:
      'https://images.vivino.com/thumbs/8mCFmXM_R92YhS22GLQi8Q_pb_x300.png',
    id: 411,
  },
  {
    winery: 'Domaine de la Garenne',
    wine: 'Sancerre Rosé 2018',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/ImA7zzWpQiud439v4IpHpA_pb_x300.png',
    id: 412,
  },
  {
    winery: 'North Valley',
    wine: 'Pinot Noir Rosé 2017',
    rating: {average: '4.2', reviews: '42 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/pSGD5Is1SGK2utMyU0W1nA_pb_x300.png',
    id: 413,
  },
  {
    winery: 'Gothic',
    wine: 'Telltale Rosé 2015',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/2uANddo3TNe6E0bDv0cB9g_pb_x300.png',
    id: 414,
  },
  {
    winery: 'Wairau River',
    wine: 'Rosé 2016',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: 'New Zealand\n·\nMarlborough',
    image:
      'https://images.vivino.com/thumbs/Ad8liX0rRq-DPcolc1bHtg_pb_x300.png',
    id: 415,
  },
  {
    winery: 'Tablas Creek Vineyard',
    wine: 'Dianthus 2017',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: 'United States\n·\nPaso Robles',
    image:
      'https://images.vivino.com/thumbs/g7r2VQFnRdGe_GrEc-5Xfg_pb_x300.png',
    id: 416,
  },
  {
    winery: 'Jericho Canyon Vineyard',
    wine: 'Estate Rosé N.V.',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: 'United States\n·\nNapa Valley',
    image:
      'https://images.vivino.com/thumbs/155MYRd4RGWn7YlCEYR7rg_pb_x300.png',
    id: 417,
  },
  {
    winery: 'Château Pigoudet',
    wine: 'Classic Rosé 2013',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/7NuqRindSxW7cXDBQLU4SQ_pb_x300.png',
    id: 418,
  },
  {
    winery: 'Spell',
    wine: 'Vin Gris of Pinot Noir Rosé N.V.',
    rating: {average: '4.2', reviews: '41 ratings'},
    location: 'United States\n·\nSonoma County',
    image:
      'https://images.vivino.com/thumbs/nzt9ifVVQFiatef7CnlAPw_pb_x300.png',
    id: 419,
  },
  {
    winery: 'Arnot-Roberts',
    wine: 'Rosé 2016',
    rating: {average: '4.2', reviews: '40 ratings'},
    location: 'United States\n·\nClear Lake',
    image:
      'https://images.vivino.com/thumbs/lG6uTqIARzqFokwpUQ9E-w_pb_x300.png',
    id: 420,
  },
  {
    winery: 'Bodega Otazu',
    wine: 'Otazu Merlot Rosado 2018',
    rating: {average: '4.2', reviews: '40 ratings'},
    location: 'Spain\n·\nNavarra',
    image:
      'https://images.vivino.com/thumbs/_REIJ0thTZSO9TUqqEFxIQ_pb_x300.png',
    id: 421,
  },
  {
    winery: 'Peyrassol',
    wine: 'Le Clos Peyrassol Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '40 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/20Ap8hJ2ScakR7gx0uidIw_pb_x300.png',
    id: 422,
  },
  {
    winery: 'Orenga de Gaffory',
    wine: 'Cuvée Felice Patrimonio Rosé 2016',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'France\n·\nPatrimonio',
    image:
      'https://images.vivino.com/thumbs/op2mSsltRLSlN2oUUy7-bQ_pb_x300.png',
    id: 423,
  },
  {
    winery: 'Château Saint Baillon',
    wine: 'Côtes de Provence Rosé 2014',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/mJY39kKdS9WvUheotiVuHA_pb_x300.png',
    id: 424,
  },
  {
    winery: 'Château le Puy',
    wine: 'Rose-Marie 2016',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'France\n·\nBlaye - Côtes de Bordeaux',
    image:
      'https://images.vivino.com/thumbs/Ppd7eHIwQzGQN0wZAr-hNQ_pb_x300.png',
    id: 425,
  },
  {
    winery: 'Elio Perrone',
    wine: 'Bigarò Rosé 2013',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'Italy\n·\nPiemonte',
    image:
      'https://images.vivino.com/thumbs/kixsM17DQPm1fVhtXU7CVw_pb_x300.png',
    id: 426,
  },
  {
    winery: 'François Cotat',
    wine: 'Chavignol Sancerre Rosé 2016',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/Brth9y9JRgeSCsnhCj2bXw_pb_x300.png',
    id: 427,
  },
  {
    winery: 'Rabble',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'United States\n·\nPaso Robles',
    image:
      'https://images.vivino.com/thumbs/3GZrlMBASP2OSXVLuFWdTA_pb_x300.png',
    id: 428,
  },
  {
    winery: 'Medlock Ames',
    wine: 'Bell Mountain Estate Rosé 2017',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'United States\n·\nAlexander Valley',
    image:
      'https://images.vivino.com/thumbs/YrfLJsIwQi6NMRYIhd_baA_pb_x300.png',
    id: 429,
  },
  {
    winery: 'Mt. Boucherie',
    wine: 'Rosé 2018',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'Canada\n·\nOkanagan Valley',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 430,
  },
  {
    winery: 'La Tour Melas',
    wine: "Idylle d'Achinos Rosé 2011",
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'Greece\n·\nFthiotida',
    image:
      'https://images.vivino.com/thumbs/9aUmPPTPRXiSZKyQ5FAtTA_pb_x300.png',
    id: 431,
  },
  {
    winery: 'Van Duzer',
    wine: 'Pinot Noir Rosé 2013',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/qUGcWUBrR1C-ueHJ8vlX-A_pb_x300.png',
    id: 432,
  },
  {
    winery: 'Division Villages',
    wine: 'l’Avoiron Rosé of Gamay Noir 2016',
    rating: {average: '4.2', reviews: '39 ratings'},
    location: 'United States\n·\nColumbia Valley',
    image:
      'https://images.vivino.com/thumbs/3OWw0-TpQu6Md345Xn-QZA_pb_x300.png',
    id: 433,
  },
  {
    winery: 'Clos Cibonne',
    wine: 'Cuvée Prestige Caroline Rosé 2015',
    rating: {average: '4.3', reviews: '39 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/CEs3G3roR3qkt0mn3gK6Ew_pb_x300.png',
    id: 434,
  },
  {
    winery: 'Domaine Lafage',
    wine: 'La Grande Cuvée Rosé 2016',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'France\n·\nCôtes du Roussillon',
    image:
      'https://images.vivino.com/thumbs/eLc1KykxT9uFfFn0J4nGkg_pb_x300.png',
    id: 435,
  },
  {
    winery: 'Alois Lageder',
    wine: 'Rosenmuskateller Moscato Rosa 2013',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'Italy\n·\nSüdtirol - Alto Adige',
    image:
      'https://images.vivino.com/thumbs/L6AP8-1-SpeRfJzsoJv0Iw_pb_x300.png',
    id: 436,
  },
  {
    winery: 'Château Margüi',
    wine: 'Perle de Margüi Coteaux Varois en Provence Rosé 2014',
    rating: {average: '4.2', reviews: '38 ratings'},
    location: 'France\n·\nCoteaux Varois en Provence',
    image: 'https://images.vivino.com/highlights/icon/best_user_rated.svg',
    id: 437,
  },
  {
    winery: 'Binigrau',
    wine: 'E Rosat (Ecològic) 2015',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'Spain\n·\nMallorca',
    image:
      'https://images.vivino.com/thumbs/Y1vteQLUSyy86igTZ5-7aA_pb_x300.png',
    id: 438,
  },
  {
    winery: 'Talai - Berri',
    wine: 'Finca Jakue Rosé 2016',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/dQ33P825RpGSCL6aEjHboA_pb_x300.png',
    id: 439,
  },
  {
    winery: 'Château Léoube',
    wine: 'Secret de Léoube Rosé 2014',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ZtUhxN_nQzGEyhnDuJ4JAw_pb_x300.png',
    id: 440,
  },
  {
    winery: 'Château Hermitage Saint-Martin',
    wine: 'Enzo Rosé 2016',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/4SwzC0RSSACNnDJAOEsITw_pb_x300.png',
    id: 441,
  },
  {
    winery: 'Camino Roca Altxerri',
    wine: 'Getariako Txakolina Rosé 2016',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'Spain\n·\nGetariako Txakolina',
    image:
      'https://images.vivino.com/thumbs/-0tdQdGHQm6iFVR4S2GnLw_pb_x300.png',
    id: 442,
  },
  {
    winery: 'Château de Caraguilhes',
    wine: 'Cara de Caraguilhes Rosé 2016',
    rating: {average: '4.2', reviews: '36 ratings'},
    location: 'France\n·\nCorbières',
    image:
      'https://images.vivino.com/thumbs/A6x3Ax2STWKTbmAkwn8RgQ_pb_x300.png',
    id: 443,
  },
  {
    winery: 'Bertaine & Fils',
    wine: 'Rosé 2014',
    rating: {average: '4.2', reviews: '37 ratings'},
    location: 'France\n·\nAude',
    image:
      'https://images.vivino.com/thumbs/2Vb0WrgaRUK285q-kN9vmg_pb_x300.png',
    id: 444,
  },
  {
    winery: 'Herrenhof Lamprecht',
    wine: 'Pinot Noir Rosé N.V.',
    rating: {average: '4.2', reviews: '35 ratings'},
    location: 'Austria\n·\nSteiermark',
    image:
      'https://images.vivino.com/thumbs/OEzPtEoMTwm1nPnPs5t_3A_pb_x300.png',
    id: 445,
  },
  {
    winery: 'Fattoria Sardi',
    wine: 'Le Cicale Rosato 2016',
    rating: {average: '4.2', reviews: '35 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/QCInNrOCRki7Ns6BP2hl4g_pb_x300.png',
    id: 446,
  },
  {
    winery: 'Domaine Guillaman',
    wine: 'Rosé de Pressée 2017',
    rating: {average: '4.2', reviews: '34 ratings'},
    location: 'France\n·\nCôtes de Gascogne',
    image:
      'https://images.vivino.com/thumbs/iMT78lnUTkiQE36rw4834g_pb_x300.png',
    id: 447,
  },
  {
    winery: 'Koerner',
    wine: 'Tiver Vivian Vineyard Rosé 2017',
    rating: {average: '4.2', reviews: '34 ratings'},
    location: 'Australia\n·\nClare Valley',
    image: 'https://thumbs.vivino.com/avatars/-GzV1YftRyaokKbezqcbRw_50x50.jpg',
    id: 448,
  },
  {
    winery: 'Barranco Longo',
    wine: 'Oaked Rosé 2009',
    rating: {average: '4.2', reviews: '34 ratings'},
    location: 'Portugal\n·\nAlgarve',
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 449,
  },
  {
    winery: 'Santa Clerissa',
    wine: 'Ramato Rosé 2015',
    rating: {average: '4.2', reviews: '34 ratings'},
    location: 'Italy\n·\ndelle Venezie',
    image:
      'https://thumbs.vivino.com/avatars/0000dvpbw211ha3af4b13b7_50x50.jpg',
    id: 450,
  },
  {
    winery: 'Château Pradeaux',
    wine: 'Bandol Rosé 2018',
    rating: {average: '4.2', reviews: '34 ratings'},
    location: 'France\n·\nBandol',
    image:
      'https://images.vivino.com/thumbs/LXAqwWIuQyus7jvzDP6DkQ_pb_x300.png',
    id: 451,
  },
  {
    winery: 'Domaine de la Baume',
    wine: "Pinot Noir Les Vignes d'Heloise Rosé 2018",
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nLanguedoc-Roussillon',
    image:
      'https://images.vivino.com/thumbs/heCPOeLWQTWeuCEKsW7mwg_pb_x300.png',
    id: 452,
  },
  {
    winery: 'Château de Pampelonne',
    wine: 'Légende Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/AcGRR_98RCOe3GcHn6C5Cw_pb_x300.png',
    id: 453,
  },
  {
    winery: 'Domaine des Campaux',
    wine: 'OséRose Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/vMydKUUaQwOnPbaCJAQBfQ_pb_x300.png',
    id: 454,
  },
  {
    winery: '21 Brix',
    wine: 'Thirsty Elephant N.V.',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'United States\n·\nLake Erie New York',
    image:
      'https://images.vivino.com/thumbs/uOv1Bc1kRRe2pGnnPpdTOg_pb_x300.png',
    id: 455,
  },
  {
    winery: 'Breezette',
    wine: 'Côtes de Provence Rosé 2018',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/bgw3opMETVeSOt_Xgz7u8g_pb_x300.png',
    id: 456,
  },
  {
    winery: 'Firma Gemoed',
    wine: 'Lieve - Rosé N.V.',
    rating: {average: '4.1', reviews: '35 ratings'},
    location: 'France\n·\nRhone Valley',
    image:
      'https://images.vivino.com/thumbs/i_yxh_IHQMiWkUK5OLpz1g_pb_x300.png',
    id: 457,
  },
  {
    winery: 'Gothic',
    wine: 'Telltale Rosé 2013',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'United States\n·\nWillamette Valley',
    image:
      'https://images.vivino.com/thumbs/2uANddo3TNe6E0bDv0cB9g_pb_x300.png',
    id: 458,
  },
  {
    winery: 'Saint Mitre',
    wine: 'Cuvée M Rosé 2012',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nCoteaux Varois en Provence',
    image:
      'https://images.vivino.com/thumbs/HsFK__ZnRRGCx4XLM0ICuQ_pb_x300.png',
    id: 459,
  },
  {
    winery: 'Château de Berne',
    wine: 'Pur Rosé 2015',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/FwpsrGy5Q-i5WmfuK3GwLA_pb_x300.png',
    id: 460,
  },
  {
    winery: 'Gavoty',
    wine: 'Cuvée Clarendon Côtes de Provence Rosé 2015',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/70qRZVC8RGKblSvhU46Eow_pb_x300.png',
    id: 461,
  },
  {
    winery: 'Ferry Lacombe',
    wine: 'Naos Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/kGLpZvZ5Q666cy58k4E-QA_pb_x300.png',
    id: 462,
  },
  {
    winery: 'Château Sainte Béatrice',
    wine: 'Summer Dreams Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '33 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/pv6Fez5aQVip4m_XTNCfpw_pb_x300.png',
    id: 463,
  },
  {
    winery: 'Domaine de la Villaudière',
    wine: 'Sancerre Rosé 2015',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/UzWDNUe9RsWhTF9HdWPasw_pb_x300.png',
    id: 464,
  },
  {
    winery: 'Inman Family',
    wine: 'OGV Estate Endless Crush Rosé Of Pinot Noir 2010',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'United States\n·\nRussian River Valley',
    image:
      'https://images.vivino.com/thumbs/H-hsiNi6RKyAOvXtfBAGnA_pb_x300.png',
    id: 465,
  },
  {
    winery: 'Bulgarini',
    wine: 'Chiaretto Garda Classico 2013',
    rating: {average: '4.2', reviews: '32 ratings'},
    location: 'Italy\n·\nGarda',
    image:
      'https://images.vivino.com/thumbs/A94hJUIDRrG2OP2aw4PkBA_pb_x300.png',
    id: 466,
  },
  {
    winery: 'Wölffer Estate',
    wine: 'Summer In A Bottle Rosé 2013',
    rating: {average: '4.2', reviews: '30 ratings'},
    location: 'United States\n·\nLong Island',
    image:
      'https://images.vivino.com/thumbs/J0Dp6I3eREma6PrZSQPwew_pb_x300.png',
    id: 467,
  },
  {
    winery: 'Château de Caraguilhes',
    wine: 'Cara de Caraguilhes Rosé 2015',
    rating: {average: '4.2', reviews: '29 ratings'},
    location: 'France\n·\nCorbières',
    image:
      'https://images.vivino.com/thumbs/A6x3Ax2STWKTbmAkwn8RgQ_pb_x300.png',
    id: 468,
  },
  {
    winery: 'Gassier',
    wine: 'Château Gassier 946 Sainte Victoire Sélection Parcellaire Rosé 2017',
    rating: {average: '4.2', reviews: '29 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/UVQlLZR2Q6mnuDrWbQUfkQ_pb_x300.png',
    id: 469,
  },
  {
    winery: 'Domaine du Gour de Chaule',
    wine: 'Amour de Rosé Gigondas 2013',
    rating: {average: '4.2', reviews: '29 ratings'},
    location: 'France\n·\nGigondas',
    image:
      'https://images.vivino.com/thumbs/h4JlUs_1QSWvvBxFkWG8xA_pb_x300.png',
    id: 470,
  },
  {
    winery: 'Le Vigne di Zamò',
    wine: 'Ramato Pinot Grigio 2010',
    rating: {average: '4.2', reviews: '27 ratings'},
    location: 'Italy\n·\nColli Orientali del Friuli',
    image:
      'https://images.vivino.com/thumbs/Hs7km_FtQQagw_TKcZ_p0Q_pb_x300.png',
    id: 471,
  },
  {
    winery: "L'Avenir",
    wine: 'Glen Rosé 2016',
    rating: {average: '4.2', reviews: '27 ratings'},
    location: 'South Africa\n·\nStellenbosch',
    image:
      'https://images.vivino.com/thumbs/1-jeI4lUQBOkBpGx2MQH7w_pb_x300.png',
    id: 472,
  },
  {
    winery: 'Château des Marres',
    wine: 'Prestige Rosé 2015',
    rating: {average: '4.2', reviews: '27 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/W1Sa8UU1TOW1X88JS9Z0mQ_pb_x300.png',
    id: 473,
  },
  {
    winery: 'Kayra',
    wine: 'Beyaz Kalecik Karasi Rosé 2018',
    rating: {average: '4.2', reviews: '27 ratings'},
    location: 'Turkey\n·\nDenizli',
    image:
      'https://images.vivino.com/thumbs/q5fyG8iYQrCvhYpcKuezyg_pb_x300.png',
    id: 474,
  },
  {
    winery: 'Comm. G.B. Burlotto',
    wine: 'Elatis Rosato 2011',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: "Italy\n·\nVino d'Italia",
    image:
      'https://images.vivino.com/thumbs/2PizNEm4RLOV9LaylR_-xQ_pb_x300.png',
    id: 475,
  },
  {
    winery: "Château Saint Jacques d'Albas",
    wine: 'La Chapelle en Rosé 2015',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'France\n·\nLanguedoc-Roussillon',
    image:
      'https://images.vivino.com/thumbs/x0GPq-uoR0KSjeFcl59NAw_pb_x300.png',
    id: 476,
  },
  {
    winery: 'Idlewild',
    wine: 'The Flower Flora Fauna Rosé 2016',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'United States\n·\nNorth Coast',
    image:
      'https://images.vivino.com/thumbs/DyP_4TLtS6a76WIhaBgeug_pb_x300.png',
    id: 477,
  },
  {
    winery: 'Cataldi Madonna',
    wine: "Piè delle Vigne Cerasuolo d'Abruzzo 2016",
    rating: {average: '4.2', reviews: '26 ratings'},
    location: "Italy\n·\nCerasuolo d'Abruzzo",
    image:
      'https://images.vivino.com/thumbs/GHslXquISAa3xvS1EhMLeA_pb_x300.png',
    id: 478,
  },
  {
    winery: 'Rosatello',
    wine: 'Rosé 1970',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'Italy\n·\nToscana',
    image:
      'https://images.vivino.com/thumbs/GJt3cv_VSEmFV0-UOQR1Tw_pb_x300.png',
    id: 479,
  },
  {
    winery: 'Château Mangot',
    wine: 'M de Mangot 2015',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'France\n·\nBordeaux',
    image:
      'https://images.vivino.com/thumbs/dDBSAH9USC-knxTdbGF1mw_pb_x300.png',
    id: 480,
  },
  {
    winery: 'Château La Coste',
    wine: 'Bellugue Rosé 2013',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'France\n·\nProvence',
    image:
      'https://images.vivino.com/thumbs/E98vbSm0R4aCctvyPAZ8AQ_pb_x300.png',
    id: 481,
  },
  {
    winery: 'Limerick Lane',
    wine: 'Syrah of Rosé 2017',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'United States\n·\nRussian River Valley',
    image:
      'https://images.vivino.com/thumbs/IUJDaRtvTpKyQCWtQn9_1g_pb_x300.png',
    id: 482,
  },
  {
    winery: 'Gassier',
    wine: 'Château Gassier 946 Sainte Victoire Sélection Parcellaire Rosé 2013',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/UVQlLZR2Q6mnuDrWbQUfkQ_pb_x300.png',
    id: 483,
  },
  {
    winery: 'A Tribute to Grace',
    wine: 'Santa Barbara Highlands Vineyard Rosé of Grenache 2015',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'United States\n·\nSanta Barbara County',
    image:
      'https://images.vivino.com/thumbs/GneOz8q4QGenHEUMFFZHcw_pb_x300.png',
    id: 484,
  },
  {
    winery: 'Domaine de La Croix',
    wine: 'Bastide Blanche 2018',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image: 'https://images.vivino.com/avatars/default_user_50x50.png',
    id: 485,
  },
  {
    winery: 'Les Terriades',
    wine: "Cabernet d'Anjou 2017",
    rating: {average: '4.2', reviews: '25 ratings'},
    location: "France\n·\nCabernet d'Anjou",
    image:
      'https://images.vivino.com/thumbs/s0cMUASFQ6qrSbYm9_cPOQ_pb_x300.png',
    id: 486,
  },
  {
    winery: 'Wente',
    wine: 'Pinot Noir Rose (Small Lot) 2014',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'United States\n·\nArroyo Seco',
    image:
      'https://images.vivino.com/thumbs/PSMKZZgbTsS3t5oRmr0z8w_pb_x300.png',
    id: 487,
  },
  {
    winery: 'Bindella - Tenuta Vallocaia',
    wine: 'Gemella Rosato 2018',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'Italy\n·\nToscana',
    image: 'https://images.vivino.com/highlights/icon/most_user_rated.svg',
    id: 488,
  },
  {
    winery: 'Mathilde Chapoutier',
    wine: 'Côtes de Provence Rosé 2016',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/_nUGINuRRdmHL1OZM9BOwg_pb_x300.png',
    id: 489,
  },
  {
    winery: 'François Cotat',
    wine: 'Chavignol Sancerre Rosé 2011',
    rating: {average: '4.2', reviews: '26 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/Brth9y9JRgeSCsnhCj2bXw_pb_x300.png',
    id: 490,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: "L'Hydropathe Elite Rosé 2015",
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Kkn7RIMUSkmQIhkF6MApiA_pb_x300.png',
    id: 491,
  },
  {
    winery: 'Buena Vista',
    wine: "Count's Selection Pinot Noir Rosé 2011",
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'United States\n·\nSonoma Coast',
    image:
      'https://images.vivino.com/thumbs/YokD6mjEQd2-EOw0eCaWag_pb_x300.png',
    id: 492,
  },
  {
    winery: 'Azul Portugal',
    wine: 'Península de Setúbal Rosé 2015',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'Portugal\n·\nPenínsula de Setúbal',
    image: 'https://images.vivino.com/highlights/icon/top_ranked.svg',
    id: 493,
  },
  {
    winery: 'Domaine de Pellehaut',
    wine: "Gascon L'été Rosé 2015",
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nCôtes de Gascogne',
    image:
      'https://images.vivino.com/thumbs/-C-0Fs-vRsaBxPgCAyuf3w_pb_x300.png',
    id: 494,
  },
  {
    winery: 'Le Roi des Pierres',
    wine: 'Sancerre Rosé 2014',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nSancerre',
    image:
      'https://images.vivino.com/thumbs/5iVUziRpQ9aFTGORqhE8pg_pb_x300.png',
    id: 495,
  },
  {
    winery: 'Cà Maiol',
    wine: 'Chiaretto Garda Classico Rosé 2010',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'Italy\n·\nGarda',
    image:
      'https://images.vivino.com/thumbs/s8qaAFAvT1-vPKoOWbiL4Q_pb_x300.png',
    id: 496,
  },
  {
    winery: 'Moorooduc',
    wine: 'Pinot Gris on Skins 2016',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'Australia\n·\nMornington Peninsula',
    image:
      'https://images.vivino.com/thumbs/8ozeWUqjRFaQDuxaHMDlIg_pb_x300.png',
    id: 497,
  },
  {
    winery: 'Gueissard',
    wine: 'Cuvée G Côtes de Provence Rosé 2017',
    rating: {average: '4.2', reviews: '25 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/ftCDe5LlTeaaFAQne5la5Q_pb_x300.png',
    id: 498,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Whispering Angel Rosé N.V.',
    rating: {average: '4.1', reviews: '32045 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x300.png',
    id: 499,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Whispering Angel Rosé 2017',
    rating: {average: '4.1', reviews: '7076 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x300.png',
    id: 500,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Whispering Angel Rosé 2016',
    rating: {average: '4.1', reviews: '6473 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x300.png',
    id: 501,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Whispering Angel Rosé 2015',
    rating: {average: '4.1', reviews: '4897 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x300.png',
    id: 502,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Whispering Angel Rosé 2018',
    rating: {average: '4.1', reviews: '3251 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x300.png',
    id: 503,
  },
  {
    winery: 'AIX',
    wine: 'Rosé 2017',
    rating: {average: '4.1', reviews: '2871 ratings'},
    location: "France\n·\nCoteaux d'Aix-en-Provence",
    image:
      'https://images.vivino.com/thumbs/TAAfUU3pTQ2POqXy09F-Nw_pb_x300.png',
    id: 504,
  },
  {
    winery: 'Domaine Sainte Lucie',
    wine: 'MiP Classic Côtes de Provence Rosé N.V.',
    rating: {average: '4.1', reviews: '2825 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/WUA65QuMRxeViLJllLqN_A_pb_x300.png',
    id: 505,
  },
  {
    winery: "Château d'Esclans",
    wine: 'Rosé N.V.',
    rating: {average: '4.1', reviews: '2280 ratings'},
    location: 'France\n·\nCôtes de Provence',
    image:
      'https://images.vivino.com/thumbs/Id4QDWSbR0SEnLq-5Zj5KQ_pb_x300.png',
    id: 506,
  },
  {
    winery: 'Chateau Purcari',
    wine: 'Rosé de Purcari N.V.',
    rating: {average: '4.1', reviews: '1940 ratings'},
    location: 'Moldova\n·\nSouth Eastern',
    image:
      'https://images.vivino.com/thumbs/6iw-Jxp7T-2Q3LbmGvRQTA_pb_x300.png',
    id: 507,
  },
  {
    winery: 'Wölffer Estate',
    wine: 'Summer In A Bottle Rosé N.V.',
    rating: {average: '4.1', reviews: '1757 ratings'},
    location: 'United States\n·\nLong Island',
    image:
      'https://images.vivino.com/thumbs/J0Dp6I3eREma6PrZSQPwew_pb_x300.png',
    id: 508,
  },
];
