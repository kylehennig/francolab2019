import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  companies: Company[] = [
    {
      'company': 'Choquet Insurance Group Ltd.',
      'contact': 'Gilles Choquet',
      'address': '5025 50 Avenue',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2G9',
      'category': 'Assurance',
      'phone': '800-265-2662',
      'email': 'gilles_choquet@cooperators.ca',
      'id': 0
    }, {
      'company': 'The Co-Opporators',
      'contact': 'Linda Nadeau',
      'address': '130 Macdonell street',
      'city': 'Guelph',
      'region': 'Ontario',
      'postal': 'N1H 6P8',
      'category': 'Assurance',
      'phone': '1-800-265-2662',
      'email': 'the_co-operators_member_relations@cooperators.ca',
      'id': 1
    }, {
      'company': 'Novhaus',
      'contact': 'Aurelien Balondona',
      'address': '1401 8th street',
      'city': 'Nisku',
      'region': 'Alberta',
      'postal': 'T9E 7M5',
      'category': 'Construction',
      'phone': '403-880-4588',
      'email': 'abalondona@novhaus.com',
      'id': 2
    }, {
      'company': 'Centre collégial de l\'Alberta',
      'contact': 'Dolorèse Nolette',
      'address': '8406 91 street NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4G9',
      'category': 'Éducation',
      'phone': '780-492-3111',
      'email': 'dnolette@ualberta.ca',
      'id': 3
    }, {
      'company': 'Schmidt Realty Group Inc.',
      'contact': 'Jeffrey Fafard',
      'address': '4736 99 Street NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6E 5H5',
      'category': 'Immobilier',
      'phone': '780-994-0874',
      'email': 'jeff.fafard@weselledmonton.com',
      'id': 4
    }, {
      'company': 'La Cité francophone',
      'contact': 'Daniel Cournoyer',
      'address': '202-8627 rue Marie-Anne- Gaboury (91e)',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-463-1144',
      'email': 'lacite@lacitefranco.ca',
      'id': 5
    }, {
      'company': 'Oohoo IT services inc.',
      'contact': 'Patrick Thibaudeau',
      'address': '8627 91 Street ,#38',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Services',
      'phone': '780-800-8712',
      'email': '',
      'id': 6
    }, {
      'company': 'PwC Société d\'avocats',
      'contact': 'Jean-Phillipe Couture',
      'address': '111 5th Ave SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 5L3',
      'category': 'Avocat',
      'phone': '403-509-7500',
      'email': 'jean-p.couture@pwc.com',
      'id': 7
    }, {
      'company': 'Bergeron & Co,CGA',
      'contact': 'Simon Belzile',
      'address': '8925 82 Ave NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 0Z2',
      'category': 'Services',
      'phone': '780-468-1667',
      'email': 'simon@bergeron-cga.com',
      'id': 8
    }, {
      'company': 'Kem’s Fashion Manufacturing',
      'contact': 'Thierry Kouembi',
      'address': '2320 35 Ave NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 6S9',
      'category': 'Directeur',
      'phone': '403-776-4436',
      'email': 'info@kemsfashion.com',
      'id': 9
    }, {
      'company': 'Vertical Oxygen',
      'contact': 'Nathalie Callede',
      'address': '4627 Namaka Crescent, NW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2K 2H5',
      'category': 'Art',
      'phone': '403-861-3732',
      'email': 'nathalie@verticaloxygen.com',
      'id': 10
    }, {
      'company': 'AJEFA',
      'contact': 'Denise Lavallée',
      'address': '8627 91 Street, NW, Suite 314',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-450-2443',
      'email': 'bureau@ajefa.ca',
      'id': 11
    }, {
      'company': 'GITASA Concrete ltd.',
      'contact': 'Emmanuel Nyandwi',
      'address': 'Sandin Crescent, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6R 0E9',
      'category': 'Construction',
      'phone': '780-932-9317',
      'email': 'gitasaconcreteltd@gmail.com',
      'id': 12
    }, {
      'company': 'UR DECO',
      'contact': 'Tamra Estay',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 140-P',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Événementiel',
      'phone': '780-604-4904',
      'email': 'ur.deco.events@gmail.com',
      'id': 13
    }, {
      'company': 'dRN Law LLP',
      'contact': 'Andréa de Rocquigny',
      'address': '144 4e avenue SW,suite 1600,',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 3W4',
      'category': 'Avocat',
      'phone': '403-407-2733',
      'email': 'andrea@drnlaw.ca',
      'id': 14
    }, {
      'company': 'Fédération des parents francophones de l\'Alberta',
      'contact': 'Mireille Péloquin',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 112',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-468-6934',
      'email': 'info@fpfa.ab.ca',
      'id': 15
    }, {
      'company': 'Connexion Carrière',
      'contact': 'Erwan Goasdoue',
      'address': 'Bow Valley College,West Campus, 300 6e Avenue, SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 0G5',
      'category': 'Organisme',
      'phone': '587-390-6262',
      'email': 'egoasdoue@bowvalleycollege.ca',
      'id': 16
    }, {
      'company': 'Yann Haute Pâtisserie',
      'contact': 'Jéraldine Blanchard',
      'address': '329 23e Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0J3',
      'category': 'Restauration',
      'phone': '403-244-8091',
      'email': 'jeraldineblanchard@yannboutique.com',
      'id': 17
    }, {
      'company': 'La Poutine',
      'contact': 'Francis Côté',
      'address': '8720 109 Street, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6G 1E9',
      'category': 'Restauration',
      'phone': '780-757-7222',
      'email': 'info@la-poutine.com',
      'id': 18
    }, {
      'company': 'Rocky Mountain Ski Lodge',
      'contact': 'Donna Trautman',
      'address': '1711 Bow Valley Trail',
      'city': 'Canmore/les Rocheuses',
      'region': 'Alberta',
      'postal': 'T1W 1L7',
      'category': 'Tourisme',
      'phone': '800-665-6111',
      'email': 'info@rockyski.ca',
      'id': 19
    }, {
      'company': 'Centre national de musique (Studio Bell)',
      'contact': 'Julijana Capone',
      'address': '850 4 Street Southeast',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 0L8',
      'category': 'Art',
      'phone': '403-543-5123',
      'email': 'julijana.capone@nmc.ca',
      'id': 20
    }, {
      'company': 'Professional Business Connection Centre',
      'contact': 'France Lavoie-Deeprose',
      'address': '95 McLeod Avenue',
      'city': 'Spruce Grove',
      'region': 'Alberta',
      'postal': 'T7X 2Z6',
      'category': 'Conseil',
      'phone': '780-948-0374',
      'email': 'france@dghe.ca',
      'id': 21
    }, {
      'company': 'Francois le roi fine Chocolatier Paris',
      'contact': 'Francois Le roi',
      'address': '8116 gateway blvd nw',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6E 4B1',
      'category': 'Restauration',
      'phone': '780-803-4744',
      'email': 'francoisleroichocolatier@gmail.com',
      'id': 22
    }, {
      'company': 'Kem’s Fashion Manufacturing',
      'contact': 'Thierry Kouembi',
      'address': '2320 35 Ave NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 6S9',
      'category': 'Mode',
      'phone': '403-399-1880',
      'email': 'info@kemsfashion.com',
      'id': 23
    }, {
      'company': 'Fédération du sport francophone de l\'Alberta',
      'contact': 'Céline Dumais',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 308',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-469-1367',
      'email': 'c.dumay@lafsfa.ca',
      'id': 24
    }, {
      'company': 'Sunu Accounting Services Corp.',
      'contact': 'Anta Lowe',
      'address': '10510-107 ave',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5H 0W2',
      'category': 'Services',
      'phone': '587-920-8226',
      'email': 'sunuas2016@gmail.com',
      'id': 25
    }, {
      'company': 'DD  Kandolo  et Associates',
      'contact': 'Dieudonné Kandolo',
      'address': '2nd floor,10510- 107 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5H 0W2',
      'category': 'Avocat',
      'phone': '780-800-1839',
      'email': 'dkand2003@gmail.com',
      'id': 26
    }, {
      'company': 'The Old School Cheesery Ltd.',
      'contact': 'Patrick Dupuis',
      'address': 'Vermilion River County No. 24',
      'city': 'Vermilion',
      'region': 'Alberta',
      'postal': 'T0B 2W0',
      'category': 'Art',
      'phone': '306-914-0327',
      'email': 'theoldschoolcheesery@gmail.com',
      'id': 27
    }, {
      'company': 'Olsatools',
      'contact': 'Charles-Antoine Marois',
      'address': '8627 Rue Marie-Anne Gaboury,    Suite 140-P',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4S8',
      'category': 'Vente en ligne',
      'phone': '',
      'email': 'charles@olsatools.com',
      'id': 28
    }, {
      'company': 'Coach I Tout dans la tête I Performance',
      'contact': 'Nolan Bernhardt',
      'address': '10104 67 Street',
      'city': 'St Peace River',
      'region': 'Alberta',
      'postal': 'T8S0B4',
      'category': 'Conseil',
      'phone': '416-451-6688',
      'email': 'contact@toutdanslatete.com',
      'id': 29
    }, {
      'company': 'Le Campus Saint-Jean',
      'contact': 'Pierre-Yves Mocquais',
      'address': '8406,91 Street',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4G9',
      'category': 'Éducation',
      'phone': '780-465-8766',
      'email': 'adjdoyen@ualberta.ca',
      'id': 30
    }, {
      'company': 'Quartier francophone',
      'contact': 'Jean Johnson',
      'address': '8925 82 Avenue NW, bureau 207',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 0Z2',
      'category': 'Organisme',
      'phone': '587-524-9399',
      'email': 'info@frenchquarteredmonton.ca',
      'id': 31
    }, {
      'company': 'Marcus Translations',
      'contact': 'Marcus Zeidan',
      'address': '9813 104 Street, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5K 0Y8',
      'category': 'Traduction',
      'phone': '613-715-0670',
      'email': 'mzeidan67@gmail.com',
      'id': 32
    }, {
      'company': 'Sketch Nanotechnologies Inc.',
      'contact': 'Alain Vadeboncoeur',
      'address': '4612 48e Avenue, suite 1',
      'city': 'Innisfail',
      'region': 'Alberta',
      'postal': 'T4G 1N5',
      'category': 'Construction',
      'phone': '403-598-0113',
      'email': 'alainv@sketchnano.com',
      'id': 33
    }, {
      'company': 'ACFA Régionale Centralta',
      'contact': 'Cathy Pellerin, directrice',
      'address': 'C.P328, 5109 46e rue',
      'city': 'Legal',
      'region': 'Alberta',
      'postal': 'T0G 1L0',
      'category': 'Organisme',
      'phone': '780-961-3665',
      'email': 'direction.centralta@acfa.ab.ca',
      'id': 34
    }, {
      'company': 'Commun\'e-Action',
      'contact': 'Isabelle Déchène-Guay',
      'address': '5612 84 Avenue, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6B 0H4',
      'category': 'Traduction',
      'phone': '780-716-6465',
      'email': 'communeaction@gmail.com',
      'id': 35
    }, {
      'company': 'DRONEBUZZ',
      'contact': 'Martin Vendrame',
      'address': '2803 James Mowatt Trail, SO,',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6W 2P5',
      'category': 'Vidéos',
      'phone': '780-934-9062',
      'email': 'martin@dronebuzz.ca',
      'id': 36
    }, {
      'company': 'Creative Coco Nuts Inc',
      'contact': 'Julie Picard',
      'address': '8661 92 Avenue, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 1S2',
      'category': 'Site internet',
      'phone': '780-909-5091',
      'email': 'jpicard@creativecoconuts.ca',
      'id': 37
    }, {
      'company': 'Stratégie et Gouvernance de l\'information',
      'contact': 'François Giroux',
      'address': '3 Thornfield Close Southeast',
      'city': 'Airdrie',
      'region': 'Alberta',
      'postal': 'T4A 2K7',
      'category': 'Conseil',
      'phone': '403-390-9577',
      'email': 'fgiroux@shaw.ca',
      'id': 38
    }, {
      'company': 'C&BC',
      'contact': 'Jean Marc MONS',
      'address': '1504 99 Spruce Place SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3C 3X',
      'category': 'Conseil',
      'phone': '587-586-8058',
      'email': 'contact@candbc.net',
      'id': 39
    }, {
      'company': 'Financière Banque Nationale',
      'contact': 'Bruno Mercier',
      'address': '10175 101 rue Nw, suite 1800',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5J 0H3',
      'category': 'Services',
      'phone': '780-412-6614',
      'email': 'bruno.mercier@nbf.ca',
      'id': 40
    }, {
      'company': 'Bermont Realty (1983) Ltd.',
      'contact': 'Guy C. Hébert',
      'address': '14 perron Street suite 200',
      'city': 'St-Albert',
      'region': 'Alberta',
      'postal': 'T8N 1E4',
      'category': 'Immobilier',
      'phone': '780-459-7786',
      'email': 'guy@bermontrealty.com',
      'id': 41
    }, {
      'company': 'Stampede de Calgary',
      'contact': 'Lindsay Jardine',
      'address': '1410 Olympic Way, SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 2W1',
      'category': 'Tourisme',
      'phone': '403-261-0101',
      'email': 'ljardine@calgarystampede.com',
      'id': 42
    }, {
      'company': 'SkiBig3 - Banff-Lake Louise-Sunshine',
      'contact': 'Jeneviève Leblanc',
      'address': '215 Banff Avenue, Suite 207',
      'city': 'Banff',
      'region': 'Alberta',
      'postal': 'T1L 1H9',
      'category': 'Tourisme',
      'phone': '844-754-2443',
      'email': 'jenevieve@skibig3.com',
      'id': 43
    }, {
      'company': 'Fédération des conseils scolaires francophones de l\'Alberta',
      'contact': 'Donald Michaud',
      'address': 'CP 1220',
      'city': 'ST-Isidore',
      'region': 'Alberta',
      'postal': 'T0H 3B0',
      'category': 'Education',
      'phone': '780-624-8855',
      'email': 'fcsfa@rogers.com',
      'id': 44
    }, {
      'company': 'Société de développement économique de la Colombie-Britannique',
      'contact': 'Mylène Letellier',
      'address': '1555 7e Avenue W, Suite 220',
      'city': 'Vancouver',
      'region': 'Colombie-Britanique',
      'postal': 'V6J 1S1',
      'category': 'Organisme',
      'phone': '604-732-3534',
      'email': 'mletellier@sdecb.com/ info@sdecb.com',
      'id': 45
    }, {
      'company': 'Caravel Craft Brewery',
      'contact': 'Vladislav Covali',
      'address': '10221 15e Street NE, Suite 12',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3J 0T1',
      'category': 'Restauration',
      'phone': '587-899-3113',
      'email': 'info@caravelbrewery.com',
      'id': 46
    }, {
      'company': 'By Jean Michel',
      'contact': 'Jean-Michel Gires',
      'address': '537 23e Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0J4',
      'category': 'Mode',
      'phone': '403-973-4833',
      'email': 'jeanmichel.gires@yahoo.com',
      'id': 47
    }, {
      'company': 'Musée des dinosaures Philip J. Currie',
      'contact': 'Brandon Low',
      'address': 'Box 328 9301, 112e Avenue',
      'city': 'Wembley',
      'region': 'Alberta',
      'postal': 'T0H 3S0',
      'category': 'Art',
      'phone': '587-771-0662',
      'email': 'blow@dinomuseum.ca',
      'id': 48
    }, {
      'company': 'Ville de Bonnyville',
      'contact': 'Tracy Ghostkeeper',
      'address': '4917 49e Avenue, Bag 1006',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2J7',
      'category': 'Municipalité',
      'phone': '780-826-3496',
      'email': 'admin@town.bonnyville.ab.ca',
      'id': 49
    }, {
      'company': 'Centre culturel et village historique Métis Crossing',
      'contact': 'Juanita Marois',
      'address': 'Box 548 17339, Victoria trail',
      'city': 'Smoky Lake',
      'region': 'Alberta',
      'postal': 'T0A 3C0',
      'category': 'Tourisme',
      'phone': '780-656-2229',
      'email': 'jmarois@metis.org',
      'id': 50
    }, {
      'company': 'The Job Resource Centre',
      'contact': 'Naomi Hoffmann',
      'address': '710 10e Street, Unit 109',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 0G7',
      'category': 'Municipalité',
      'phone': '403-678-6630',
      'email': 'naomi@jobresourcecentre.com',
      'id': 51
    }, {
      'company': 'Chez François',
      'contact': 'Sylvie Grégoire',
      'address': '1604 2e Avenue',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 1M8',
      'category': 'Restauration',
      'phone': '403-678-6111',
      'email': 'sylvie@restaurantchezfrancois.com.',
      'id': 52
    }, {
      'company': 'Centre d\'arts visuels de l\'Alberta',
      'contact': 'Patrick Dunn',
      'address': '9103 95 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 1Z4',
      'category': 'Art',
      'phone': '780-461-3427',
      'email': 'direction@galeriecava.com',
      'id': 53
    }, {
      'company': 'ACFA St-Paul',
      'contact': 'Claudie-Anne Lampron',
      'address': '4617 50 Avenue',
      'city': 'St-Paul',
      'region': 'Alberta',
      'postal': 'T0A 3A3',
      'category': 'Organisme',
      'phone': '780-645-4800',
      'email': 'saint-paul@acfa.ab.ca',
      'id': 54
    }, {
      'company': 'ACFA Bonnyville',
      'contact': 'Thérèse Dallaire',
      'address': '4904 50 Street',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2G5',
      'category': 'Organisme',
      'phone': '780-466-1680',
      'email': 'direction.bonnyville@acfa.ab.ca',
      'id': 55
    }, {
      'company': 'ACFA Canmore-Banff',
      'contact': 'François Rolland',
      'address': '3100B Stewart Creek Drive, Suite 1',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 3M6',
      'category': 'Organisme',
      'phone': '403-678-7582',
      'email': 'presidence.canmore-b@acfa.ab.ca',
      'id': 56
    }, {
      'company': 'ACFA Calgary',
      'contact': 'Geneviève Cournoyer-Scalise',
      'address': '840 7 Avenue SW, suite 1601',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 3G2',
      'category': 'Organisme',
      'phone': '403-532-8576',
      'email': 'adjoint.calgary@acfa.ab.ca',
      'id': 57
    }, {
      'company': 'Association franco-yukonnaise',
      'contact': 'Emylie Thibeault-Maloney',
      'address': '302 Strickland Street',
      'city': 'Whitehorse',
      'region': 'Yukon',
      'postal': 'Y1A 2K1',
      'category': 'Organisme',
      'phone': '867-668-2663',
      'email': 'tourisme@afy.yk.ca',
      'id': 58
    }, {
      'company': 'ACFA Jasper',
      'contact': 'Alexandra Denommée',
      'address': '500 rue Robson',
      'city': 'Jasper',
      'region': 'Alberta',
      'postal': 'T0E 1E0',
      'category': 'Organisme',
      'phone': '780-852-7476',
      'email': 'jasper@acfa.ab.ca',
      'id': 59
    }, {
      'company': 'ACFA Wood Buffalo',
      'contact': 'Khady Koné',
      'address': '312 Abasand Drive',
      'city': 'Fort McMurray',
      'region': 'Alberta',
      'postal': 'T9J 1B2',
      'category': 'Organisme',
      'phone': '780-791-7700',
      'email': 'adjointe.woodbuffalo@acfa.ab.ca',
      'id': 60
    }, {
      'company': 'Accès Emploi',
      'contact': 'Nathalie Beauregard',
      'address': '202-8627 rue Marie-Anne- Gaboury (91e)',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Municipalité',
      'phone': '780-826-9003',
      'email': 'nathalie.beauregard@accesemploi.net',
      'id': 61
    }, {
      'company': 'Hotel Arts',
      'contact': 'Christie Goss',
      'address': '119 12 Avenue SW',
      'city': 'calgary',
      'region': 'Alberta',
      'postal': 'T2R 0G8',
      'category': 'Hotel',
      'phone': '403-266-4611',
      'email': 'cgoss@hotelarts.ca',
      'id': 62
    }, {
      'company': 'Comté de Lethbridge',
      'contact': 'Martin Ebel',
      'address': '910 4th Avenue South',
      'city': 'Lethbrdge',
      'region': 'Alberta',
      'postal': 'T1J 0P6',
      'category': 'Municipalité',
      'phone': '403-328-5525',
      'email': 'mebel@lethcounty.ca',
      'id': 63
    }, {
      'company': 'Ramada Plaza Calgary Downtown',
      'contact': 'Clara Desmarteau',
      'address': '708 8 Avenue SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 1H2',
      'category': 'Hotel',
      'phone': '403-218-3038',
      'email': 'cdesmarteau@ramadacalgary.com',
      'id': 64
    }, {
      'company': 'Village historique Heritage Park',
      'contact': 'Julie Copland-Stene',
      'address': '1900 Heritage Drive, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2V 2X3',
      'category': 'Tourisme',
      'phone': '403-2688-566',
      'email': 'JCopland-Stene@heritagepark.ca',
      'id': 65
    }, {
      'company': 'EggsOasis Déjeuner & Dîner',
      'contact': 'Khisrow Sadid',
      'address': '2797 Main St SW #160,',
      'city': 'Airdrie',
      'region': 'Alberta',
      'postal': 'T4B 3G2',
      'category': 'Restauration',
      'phone': '403-980-0344',
      'email': 'k_sadid@hotmail.com',
      'id': 66
    }, {
      'company': 'Région de Smoky River',
      'contact': 'Diane Chiasson',
      'address': '701 Main Street,SW',
      'city': 'Falher',
      'region': 'Alberta',
      'postal': 'T0H 1M0',
      'category': 'Municipalité',
      'phone': '780-837-2453',
      'email': 'diane.chiasson@lecdea.ca',
      'id': 67
    }, {
      'company': 'Fête franco-albertaine',
      'contact': 'Alexandra Daigle',
      'address': '8627 91 Street, Numero 308',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-4691367',
      'email': 'fetefranco@fetefrancoalbertaine.ca',
      'id': 68
    }, {
      'company': 'Lieu historique national de la Mine-de-Charbon-Atlas',
      'contact': 'Jessica Jeninga',
      'address': 'Box 521 110 Century Drive',
      'city': 'East Coulee',
      'region': 'Alberta',
      'postal': 'T0J 1B0',
      'category': 'Tourisme',
      'phone': '403-822-2220',
      'email': 'programs@atlascoalmine.com',
      'id': 69
    }, {
      'company': 'Alliance française de Calgary',
      'contact': 'Jean-Baptiste Roux',
      'address': '1721 29 Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2T 6T7',
      'category': 'Organisme',
      'phone': '403-245-5662',
      'email': 'director@afcalgary.ca',
      'id': 70
    }, {
      'company': 'ACFA provinciale',
      'contact': 'Hélène Guillemette',
      'address': '8627 91 Street, Bureau 303',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-466-1680',
      'email': 'h.guillemette@acfa.ab.ca',
      'id': 71
    }, {
      'company': 'Banff Centre for Arts and Creativity',
      'contact': 'Marie-Hélène Dagenais',
      'address': '107 Tunnel Mountain Drive',
      'city': 'Banff',
      'region': 'Alberta',
      'postal': 'T1L 1H5',
      'category': 'Hotel',
      'phone': '403-431-0315',
      'email': 'MarieHelene_Dagenais@banffcentre.ca',
      'id': 72
    }, {
      'company': 'Municipalité de Legal',
      'contact': 'Anna Keane',
      'address': 'Box 390',
      'city': 'Legal',
      'region': 'Alberta',
      'postal': 'T0G1L0',
      'category': 'Municipalité',
      'phone': '780-961-3773',
      'email': 'akeane@legal.ca',
      'id': 73
    }, {
      'company': 'Ville de Beaumont',
      'contact': 'Robert Mackin',
      'address': '5600 49 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1A1',
      'category': 'Municipalité',
      'phone': '',
      'email': 'rob.mackin@beaumont.ab.ca',
      'id': 74
    }, {
      'company': 'ABC Country Restaurant',
      'contact': 'Charles Leclerc',
      'address': '2095 Geatz Avenue Red Deer',
      'city': 'Red Deer',
      'region': 'Alberta',
      'postal': 'T4R 1Z4',
      'category': 'Restauration',
      'phone': '403-358-4280',
      'email': 'abccountry@telus.net',
      'id': 75
    }, {
      'company': 'Les Conseil scolaires du sud - CSSA/CSCFSA Franco sud',
      'contact': 'Brigitte St-Hilaire',
      'address': '6940 Fisher Road, SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2H 0W3',
      'category': 'Education',
      'phone': '403-686-6998',
      'email': 'brigitte.sthilaire@francosud.ca',
      'id': 76
    }, {
      'company': 'La Société des Manoirs Saint-Joachim et Saint-Thomas',
      'contact': 'Roch Labelle',
      'address': '11020 99 Avenue, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5K 2M2',
      'category': 'Hotel',
      'phone': '780-9453274',
      'email': 'info@msjst.ca',
      'id': 77
    }, {
      'company': 'Sylvain Lacroix, Investisseur Immobilier Professionel',
      'contact': 'Sylvain Lacroix',
      'address': '626 24 Avenue, SW, Suite 207',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0K6',
      'category': 'Immobilier',
      'phone': '403-305-0973',
      'email': 'Sylvain_911@hotmail.com',
      'id': 78
    }, {
      'company': 'Cinthia Mazur',
      'contact': 'Cinthia Mazur',
      'address': '2803, 10410 102 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6J 0E5',
      'category': 'Traduction',
      'phone': '',
      'email': 'cinthia.mazur@telusplanet.net',
      'id': 79
    }, {
      'company': 'Le Franco',
      'contact': 'Hélène Lequitte',
      'address': '8627 91 rue, Bureau 312',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Média',
      'phone': '780-465-6581',
      'email': 'direction@lefranco.ab.ca',
      'id': 80
    }, {
      'company': 'BASE 2A INTERNATIONALE INC.',
      'contact': 'KOUAKOU JEAN-MARIE KONAN',
      'address': '9240 213 ST NW, 206',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5T 4P4',
      'category': 'Services',
      'phone': '438-868-5222',
      'email': 'jeanmariekonan@hotmail.com',
      'id': 81
    }, {
      'company': 'Canadian Moving Services',
      'contact': 'francine drapeau',
      'address': '4516 81 Avenue nw',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6B 2M2',
      'category': 'Démenagement',
      'phone': '780-232-0275',
      'email': 'francine@canadianmovingservices.com',
      'id': 82
    }, {
      'company': 'Heavy Equipment Training Canada',
      'contact': 'Stéphane Leclerc',
      'address': '4908 51 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1E4',
      'category': 'Construction',
      'phone': '587-337-2230',
      'email': 'info@shetc.ca',
      'id': 83
    }, {
      'company': 'The City of Red Deer',
      'contact': 'Michael Regis',
      'address': 'Box 5008',
      'city': 'Red Deer',
      'region': 'Alberta',
      'postal': 'T4N 3T4',
      'category': 'Municipalité',
      'phone': '403-342-8152',
      'email': 'michael.regis@reddeer.ca',
      'id': 84
    }, {
      'company': 'AG Graphic Design & Marketing',
      'contact': 'Anne Giguère',
      'address': '8 Bermondsey Rise NW,',
      'city': 'Calgary',
      'region': 'alberta',
      'postal': 'T3K 1T9',
      'category': 'Graphisme',
      'phone': '',
      'email': 'ag.graphicdesign@outlook.com',
      'id': 85
    }, {
      'company': 'Sikati Enterprises ltd',
      'contact': 'Clément Fogue',
      'address': '',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': '',
      'category': 'Transport',
      'phone': '',
      'email': 'sikatient@gmail.com',
      'id': 86
    }, {
      'company': 'L2L Consulting LTD',
      'contact': 'Joël F. Lavoie',
      'address': '8627 Rue Marie-Anne Gaboury',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Conseil',
      'phone': '',
      'email': 'j.lavoie@telus.net',
      'id': 87
    }, {
      'company': 'Kavita Brow Artist Inc',
      'contact': 'Kavita Rangasamy',
      'address': '15630 87 Avenue,',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5R 5W9',
      'category': 'Conseil',
      'phone': '',
      'email': 'rangasamykavita@gmail.com',
      'id': 88
    }, {
      'company': 'Mario Glass',
      'contact': 'Mario Raymond',
      'address': '17332, 86e Avenue, Edmonton, AB, Canada',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5T 2B5',
      'category': 'Construction',
      'phone': '780-220-4263',
      'email': 'mario@marioglass.ca',
      'id': 89
    }, {
      'company': 'GHB Ventures',
      'contact': 'Guillaume Bédard',
      'address': '702 - 1208 14TH AVENUE SW',
      'city': 'Calgary',
      'region': 'Aberta',
      'postal': 'T3C 0V9',
      'category': 'Conseil',
      'phone': '',
      'email': 'Guillaume@ghbventures.com',
      'id': 90
    }, {
      'company': 'Sunco Communication',
      'contact': 'Cédrick Leblanc',
      'address': '18961 111 Ave NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5S 2X4',
      'category': 'Communication',
      'phone': '',
      'email': 'cedrick@sunco.ca',
      'id': 91
    }, {
      'company': 'The Laughing hour',
      'contact': 'Maude Bombardier',
      'address': '',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': '',
      'category': 'Conseil',
      'phone': '',
      'email': 'maudebombardier@gmil.com',
      'id': 92
    }, {
      'company': 'Alberta\'s Lakeland DMO',
      'contact': 'Marianne Janke',
      'address': '',
      'city': '',
      'region': '',
      'postal': '',
      'category': 'Tourisme',
      'phone': '',
      'email': '',
      'id': 93
    }, {
      'company': 'ÉcoSynergy',
      'contact': 'Amélie Caron',
      'address': 'Po Box 70003 Creekside PO',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T4B 0V9',
      'category': 'Construction',
      'phone': '',
      'email': 'acaron@ecosynergy.ca',
      'id': 94
    }, {
      'company': 'Graphic Design MP',
      'contact': 'Mylène Poulin',
      'address': '',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': '',
      'category': 'Graphisme',
      'phone': '',
      'email': 'graphicdesignmp@hotmail.com',
      'id': 95
    }, {
      'company': 'A5 Energy Consulting Inc.',
      'contact': 'Patricia Auger-Lachance',
      'address': '1017 Township Rd 540,',
      'city': 'Alberta Beach',
      'region': 'Alberta',
      'postal': 'T7Z 0A6',
      'category': 'Conseil',
      'phone': '',
      'email': '',
      'id': 96
    }, {
      'company': 'Creative Element',
      'contact': 'Aurélien Jondeau',
      'address': '830 Centre Ave NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 9C3',
      'category': 'Site internet',
      'phone': '',
      'email': 'aurelien@creative-elements.ca',
      'id': 97
    }, {
      'company': 'BITS Traduction',
      'contact': 'Alain Bertrand',
      'address': '4115 45 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1G2',
      'category': 'Traduction',
      'phone': '780-953-9040',
      'email': 'abits@shW.ca',
      'id': 98
    }, {
      'company': 'Clearcut Assurance',
      'contact': 'Mamadou ( Oury) Barry',
      'address': '16403 111 Ave NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5M 2S2',
      'category': 'Assurance',
      'phone': '780-716-4197',
      'email': 'mamadou@clearcutinsurance.ca',
      'id': 99
    }, {
      'company': 'Advisory Translation Services Inc.',
      'contact': 'Nicole Giguère',
      'address': '43 Valley Crest Rise NW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3B 5Y3',
      'category': 'Traduction',
      'phone': '403-246-6762',
      'email': 'atsinc@telus.net',
      'id': 100
    }, {
      'company': 'Town of Morinville',
      'contact': 'BRAD WHITE',
      'address': '10125-100Ave',
      'city': 'Morinville',
      'region': 'Alberta',
      'postal': 'T8R 1L6',
      'category': 'Municipalité',
      'phone': '780-939-7622',
      'email': 'brad.white@morinville.ca',
      'id': 101
    }, {
      'company': 'Lachance Maple Syrup',
      'contact': 'Daniel Lachance',
      'address': '9338, 94e Rue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3V7',
      'category': 'Restauration',
      'phone': '',
      'email': 'daniel.lachance@live.com',
      'id': 102
    }
  ];

  constructor() { }

  /**
   * Creates a map of categories to a list of company ids in that category.
   * @returns The map.
   */
  getByCategory(): Map<string, number[]> {
    const map = new Map();
    for (const company of this.companies) {
      map.set(company.category, []);
    }
    for (const company of this.companies) {
      map.get(company.category).push(company.id);
    }
    return map;
  }
}
