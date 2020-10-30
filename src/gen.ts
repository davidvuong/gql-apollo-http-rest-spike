import { v4 } from 'uuid';
import faker from 'faker';
import { format } from 'date-fns';
import { sample, times } from 'lodash';

export const genUID = (): string => BigInt(parseInt(`0${v4().replace(/-/g, '')}`, 16)).toString();
export const genAlphaNumeric = (): string => faker.random.alphaNumeric();
export const genName = (): string => faker.name.findName();
export const genDateDICOM = (): string => format(faker.date.between('1992', '2020'), 'yyyyLLdd');
export const genTimeDICOM = (): number => Math.random() * 1;
export const genDateISO = (): string => new Date().toISOString();
export const genSex = (): string => sample(['M', 'F', 'O'])!;
export const genAccessionNumber = (): string => `ACC_${Math.random() * 10}`;
export const genNumber = (min: number = 1, max: number = 100): number => faker.random.number({ min, max });
export const genDescription = (): string => faker.lorem.sentences(2);
export const genAgeDICOM = (): string => `${faker.random.number({ min: 1, max: 120 })}`.padStart(3, '0') + 'Y';
export const genSize = (): number => faker.random.number({ min: 59, max: 272 });
export const genWeight = (): number => faker.random.number({ min: 2.5, max: 442, precision: 0.001 });
export const genCompanyName = (): string => faker.company.companyName();
export const genAddress = (): string =>
  `${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.country()}`;
export const genVersion = (): string => `v${genNumber() + Math.random()}`;

// @see: http://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_8.2.html#sect_8.2
export const genPhotometricInterpretation = (): string =>
  sample(['MONOCHROME1', 'MONOCHROME2', 'YBR_FULL_422', 'RGB'])!;

// @see: https://hitinfrastructure.com/news/best-in-klas-ranks-top-imaging-system-vendors-of-2020#:~:text=Sectra%20also%20topped%20the%20list,were%20six%20ranked%20VNA%20solutions.
export const genManufacturer = (): string =>
  sample(['Sectra', 'Intelerad', 'Change Healthcare', 'Fujifilm', 'Agfa Healthcare', 'Philips', 'GE Healthcare'])!;

export const genPatientPosition = (): string =>
  sample([
    'HFP',
    'HFS',
    'HFDR',
    'HFDL',
    'FFDR',
    'FFDL',
    'FFP',
    'FFS',
    'LFP',
    'LFS',
    'RFP',
    'RFS',
    'AFDR',
    'AFDL',
    'PFDR',
    'PFDL',
  ])!;

// @see: https://en.wikipedia.org/wiki/List_of_contemporary_ethnic_groups
export const genEthnicGroup = (): string =>
  sample([
    'Abazins',
    'Abkhazians',
    'Acehnese',
    'Acholi',
    'Adjoukrou',
    'Afar',
    'Afemai',
    'Afrikaners',
    'Agaw',
    'Ahom',
    'Aimaq',
    'Aja',
    'Akan',
    'Akha',
    'Albanians',
    'Alur',
    'Ambonese',
    'Ambundu',
    'Amhara',
    'Amis',
    'Anaang',
    'Anuak',
    'Apache',
    'Arabs',
    'Argobba',
    'Armenians',
    'Aromanians',
    'Assyrians',
    'Atayal',
    'Atoni',
    'Atyap',
    'Austrians',
    'Avars',
    'Awadhis',
    'Aymara',
    'Azerbaijanis',
    'Bahnar',
    'Bai',
    'Bakossi',
    'Balanta',
    'Balinese',
    'Balkars',
    'Balochs',
    'Balti',
    'Bamars',
    'Bambara',
    'Bamileke',
    'Bamum',
    'Banda',
    'Banjarese',
    'Bari',
    'Bariba',
    'Bashkirs',
    'Basques',
    'Bassa',
    'Basurians',
    'Batak',
    'Beja',
    'Belarusians',
    'Bemba',
    'Bembe',
    'Bengalis',
    'Berbers',
    'Berom',
    'Berta',
    'Betawis',
    'Beti',
    'Bhils',
    'Bhojpuris',
    'Bhumij',
    'Bicolanos',
    'Bidayuh',
    'Bilala',
    'Bishnupriya',
    'Bissa',
    'Blaan',
    'Boa',
    'Bodo',
    'Bosniaks',
    'Bouyei',
    'Bozo',
    'Brahuis',
    'Bretons',
    'Bru',
    'Budu',
    'Buduma',
    'Buginese',
    'Bulgarians',
    'Burusho',
    'Butonese',
    'Bwa',
    'Catalans',
    'Chakmas',
    'Chamorro',
    'Chams',
    'Chechens',
    'Cherokee',
    'Chewa',
    'Choctaw',
    'Chokwe',
    'Chukchi',
    'Chutiya',
    'Chuukese',
    'Chuvash',
    'Circassians',
    'Copts',
    'Cornish',
    'Corsicans',
    'Cree',
    'Croats',
    'Cuyunon',
    'Czechs',
    'Dagaaba',
    'Dagombas',
    'Damara',
    'Danes',
    'Dargins',
    'Dinka',
    'Dogon',
    'Dogra',
    'Dubla',
    'Dutch',
    'Dyula',
    'Ebira',
    'Edo',
    'Efik',
    'Ekoi',
    'Emberá',
    'English',
    'Esan',
    'Estonians',
    'Evenks',
    'Ewe',
    'Fang',
    'Fijians',
    'Finns',
    'Flemings',
    'Fon',
    'French',
    'Frisians',
    'Friulians',
    'Fula',
    'Fur',
    'Ga-Adangbe',
    'Gagauz',
    'Galicians',
    'Ganda',
    'Garifuna',
    'Garos',
    'Gayonese',
    'Gbagyi',
    'Gbaya',
    'Gedeo',
    'Gelao',
    'Georgians',
    'Germans',
    'Gibraltarians',
    'Gilaks',
    'Gola',
    'Gonds',
    'Gorontaloans',
    'Greeks',
    'Guan',
    'Guaraní',
    'Gujarati',
    'Gujjar / Gurjar',
    'Gumuz',
    'Gurage',
    'Gurma',
    'Gurunsi',
    'Hadiya',
    'Hainanese',
    'Han Chinese',
    'Hani',
    'Harari',
    'Hausa',
    'Hawaiians',
    'Hazaras',
    'Herero',
    'Hinduism',
    'Hmong',
    'Huli',
    'Hungarians',
    'Hutu',
    'Iban',
    'Ibanag',
    'Ibibio',
    'Icelanders',
    'Idoma',
    'Igbo',
    'Igede',
    'Igorot',
    'Ijaw',
    'Ilocano',
    'Ingush',
    'Inuit',
    'Iranun',
    'Irish',
    'Iroquois',
    'Isan',
    'Isoko',
    'Italians',
    'Itawes',
    'Japanese',
    'Jarai',
    'Javanese',
    'Jews',
    'Jingpo',
    'Jola',
    'Jukun',
    'Kadazan-Dusun',
    'Kalanga',
    'Kalenjin',
    'Kalinago',
    'Kamba',
    'Kanaks',
    'Kannadigas',
    'Kanuri',
    'Kapampangans',
    'Kapsiki',
    'Karachays',
    'Karakalpaks',
    'Karbi',
    'Karen',
    'Kashmiris',
    'Kashubians',
    'Kazakhs',
    'Khas',
    'Khmer',
    'Khonds',
    'Khorasani Turks',
    'Kikuyu',
    'Kilba',
    'Kirati',
    'Kissi',
    'Kofyar',
    'Komi',
    'Kongo',
    'Konjo',
    'Konkani',
    'Konso',
    'Koreans',
    'Kpelle',
    'Kposo',
    'Kru',
    'Kumyks',
    'Kunama',
    'Kurds',
    'Kurukh',
    'Kuteb',
    'Kyrgyz',
    'Laks',
    'Lamaholot',
    'Lampungs',
    'Lao',
    'Latvians',
    'Laz',
    'Lega',
    'Lezgins',
    'Li',
    'Limba',
    'Lisu',
    'Lithuanians',
    'Luba',
    'Luhya',
    'Luo',
    'Lurs',
    'Luxembourgers',
    'Maasai',
    'Macedonians',
    'Madi',
    'Madurese',
    'Mafa',
    'Magahi',
    'Magars',
    'Maguindanao',
    'Maithils',
    'Makassarese',
    'Makonde',
    'Makua',
    'Malagasy',
    'Malayali',
    'Malays',
    'Maldivians',
    'Maltese',
    'Mambila',
    'Manchu',
    'Mandarese',
    'Mandinka',
    'Manggarai',
    'Manjak',
    'Manx',
    'Mapuche',
    'Maranao',
    'Marathi',
    'Mari',
    'Masa',
    'Masalit',
    'Maya',
    'Mazahua',
    'Mazandarani',
    'Mazatec',
    'Mbaka',
    'Mehri',
    'Meitei',
    'Melanau',
    'Mende',
    'Mien',
    'Mijikenda',
    'Minahasan',
    'Minangkabau',
    'Mising',
    'Miskito',
    'Mixe',
    'Mixtec',
    'Miꞌkmaq',
    'Mon',
    'Mongo',
    'Mongols',
    'Mongondow',
    'Montenegrins',
    'Mordvins',
    'Mossi',
    'Mumuye',
    'Munanese',
    'Mundas',
    'Murut',
    'Muscogee',
    'Musgum',
    'Mwera',
    'Māori',
    'Naga',
    'Nagpuri',
    'Nahuas',
    'Nama',
    'Nauruans',
    'Navajo',
    'Newar',
    'Ngaju',
    'Ngalop',
    'Ngbandi',
    'Nias',
    'Nogais',
    'Norwegians',
    'Nubians',
    'Nuer',
    'Nuristanis',
    'Nyishi',
    'Nùng',
    'Occitans',
    'Odia',
    'Ogoni',
    'Ojibwe',
    'Oromo',
    'Ossetians',
    'Ot Danum',
    'Otomi',
    'Ovambo',
    'Ovimbundu',
    'Pa O',
    'Pamiris',
    'Pangasinese',
    'Papel',
    'Pare',
    'Pashayi',
    'Pashtuns',
    'Pedi',
    'Pende',
    'Persians',
    'Pitcairn Islanders',
    'Poles',
    'Portuguese',
    'Punjabis',
    'Purépecha',
    'Qashqai',
    'Qiang',
    'Quechua',
    'Rade',
    'Rajasthanis',
    'Rajbongshi',
    'Rakhine',
    'Rejangese',
    'Rohingyas',
    'Roma',
    'Romanians',
    'Russians',
    'Rusyns',
    'Ryukyuans',
    'Saho',
    'Salar',
    'Sama-Bajau',
    'Sambal',
    'Samoans',
    'Sangirese',
    'Santal',
    'Sara',
    'Sardinians',
    'Sasak',
    'Savu',
    'Scots',
    'Senufo',
    'Serbs',
    'Serer',
    'Shan',
    'Sharchops',
    'Sherbro',
    'Shilluk',
    'Shona',
    'Sibe',
    'Sidama',
    'Siddi',
    'Sika',
    'Silesians',
    "Silt'e",
    'Sindhis',
    'Sinhalese',
    'Sioux',
    'Slovaks',
    'Slovenes',
    'Soga',
    'Somalis',
    'Songhai',
    'Soninke',
    'Sotho',
    'Spaniards',
    'Sui',
    'Sukuma',
    'Sumba',
    'Sumbawa',
    'Sundanese',
    'Surma',
    'Susu',
    'Swahili',
    'Swazi',
    'Swedes',
    'Sámi',
    'Tabasaran',
    'Tagalogs',
    'Tahitians',
    'Tajiks',
    'Talysh',
    'Tama',
    'Tamils',
    'Tarok',
    'Tatars',
    'Tausūg',
    'Tboli',
    'Telugu',
    'Temne',
    'Thais',
    'Tibetans',
    'Tigrayans',
    'Tigre',
    'Tiv',
    'Tiwa',
    'Tlapanec',
    'Tokelauan people',
    'Toraja',
    'Toubou',
    'Toucouleur',
    'Tripuri',
    'Tsonga',
    'Tswana',
    'Tujia',
    'Tupuri',
    'Turkana',
    'Turkmens',
    'Turks',
    'Tutsi',
    'Tuvans',
    'Udmurts',
    'Ukrainians',
    'Urhobos',
    'Uyghurs',
    'Uzbeks',
    'Venda',
    'Vietnamese',
    'Visayans',
    'Wa',
    'Walloons',
    'Waxiang',
    'Welayta',
    'Welsh',
    'Wolof',
    'Xhosa',
    'Yakan',
    'Yakuts',
    'Yakö',
    'Yao',
    'Yi',
    'Yoruba',
    'Zaghawa',
    'Zande',
    'Zapotecs',
    'Zhuang',
    'Zomi',
    'Zulu',
  ])!;

// @see: https://www.careerprofiles.info/top-100-careers.html
export const genOccupation = (): string =>
  sample([
    'Accountant',
    'Administrative Assistant',
    'Architect',
    'Art Director',
    'Auto Mechanic',
    'Bookkeeping, Accounting, & Audit Clerk',
    'Brickmason & Blockmason',
    'Bus Driver',
    'Business Operations Manager',
    'Carpenter',
    'Cashier',
    'Cement Mason & Concrete Finisher',
    'Child & Family Social Worker',
    'Civil Engineer',
    'Clinical Laboratory Technician',
    'Clinical Social Worker',
    'Compliance Officer',
    'Computer Programmer',
    'Computer Systems Administrator',
    'Computer Systems Analyst',
    'Construction Manager',
    'Construction Worker',
    'Cost Estimator',
    'Customer Service Representative',
    'Database Administrator',
    'Delivery Truck Driver',
    'Dental Assistant',
    'Dental Hygienist',
    'Dentist',
    'Diagnostic Medical Sonographer',
    'Electrician',
    'Elementary School Teacher',
    'Epidemiologist',
    'Executive Assistant',
    'Fabricator',
    'Financial Advisor',
    'Financial Analyst',
    'Financial Manager',
    'Glazier',
    'HR Specialist',
    'Hairdresser',
    'High School Teacher',
    'Home Health Aide',
    'IT Manager',
    'Insurance Agent',
    'Interpreter & Translator',
    'Janitor',
    'Landscaper & Groundskeeper',
    'Lawyer',
    'Loan Officer',
    'Logistician',
    'Maid & Housekeeper',
    'Maintenance & Repair Worker',
    'Management Analyst',
    'Market Research Analyst',
    'Marketing Manager',
    'Marriage & Family Therapist',
    'Massage Therapist',
    'Mechanical Engineer',
    'Medical Assistant',
    'Medical Secretary',
    'Meeting, Convention & Event Planner',
    'Mental Health Counselor',
    'Middle School Teacher',
    'Nursing Aide',
    'Occupational Therapist',
    'Painter',
    'Paralegal',
    'Paramedic',
    'Patrol Officer',
    'Personal Care Aide',
    'Pharmacist',
    'Pharmacy Technician',
    'Physical Therapist',
    'Physical Therapist Assistant',
    'Physician',
    'Plumber',
    'Preschool Teacher',
    'Public Relations Specialist',
    'Radiologic Technologist',
    'Real Estate Agent',
    'Receptionist',
    'Recreation & Fitness Worker',
    'Registered Nurse',
    'Respiratory Therapist',
    'Restaurant Cook',
    'Sales Manager',
    'Sales Representative',
    'School Counselor',
    'School Psychologist',
    'Security Guard',
    'Software Developer',
    'Speech-Language Pathologist',
    'Sports Coach',
    'Substance Abuse Counselor',
    'Teacher Assistant',
    'Telemarketer',
    'Veterinarian',
    'Veterinary Technologist & Technician',
    'Web Developer',
  ])!;

// @see: https://wiki.cancerimagingarchive.net/display/Public/DICOM+Modality+Abbreviations
export const genModality = (): string =>
  sample([
    'CR',
    'CT',
    'MR',
    'NM',
    'US',
    'OT',
    'BI',
    'DG',
    'ES',
    'LS',
    'PT',
    'RG',
    'TG',
    'XA',
    'RF',
    'RTIMAGE',
    'RTDOSE',
    'RTSTRUCT',
    'RTPLAN',
    'RTRECORD',
    'HC',
    'DX',
    'MG',
    'IO',
    'PX',
    'GM',
    'SM',
    'XC',
    'PR',
    'AU',
    'ECG',
    'EPS',
    'HD',
    'SR',
    'IVUS',
    'OP',
    'SMR',
    'AR',
    'KER',
    'VA',
    'SRF',
    'OCT',
    'LEN',
    'OPV',
    'OPM',
    'OAM',
    'RESP',
    'KO',
    'SEG',
    'REG',
    'OPT',
    'BDUS',
    'BMD',
    'DOC',
    'FID',
    'PLAN',
    'IOL',
    'IVOCT',
  ])!;

// @see: http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html#chapter_L
export const genBodyPartExamined = (): string =>
  sample([
    'ABDOMEN',
    'ABDOMENPELVIS',
    'ABDOMINALAORTA',
    'ACJOINT',
    'ADRENAL',
    'AMNIOTICFLUID',
    'ANKLE',
    'ANTECUBITALV',
    'ANTCARDIACV',
    'ANTCOMMA',
    'ANTSPINALA',
    'ANTTIBIALA',
    'ANUSRECTUMSIGMD',
    'AORTA',
    'AORTICARCH',
    'APPENDIX',
    'ASCAORTA',
    'ASCENDINGCOLON',
    'AXILLA',
    'AXILLARYA',
    'AXILLARYV',
    'AZYGOSVEIN',
    'BACK',
    'BASILARA',
    'BILEDUCT',
    'BLADDER',
    'BLADDERURETHRA',
    'BRACHIALA',
    'BRACHIALV',
    'BRAIN',
    'BREAST',
    'BRONCHUS',
    'BUTTOCK',
    'CALCANEUS',
    'CALF',
    'CAROTID',
    'BULB',
    'CELIACA',
    'CEPHALICV',
    'CEREBELLUM',
    'CEREBRALA',
    'CEREBHEMISPHERE',
    'CSPINE',
    'CTSPINE',
    'CERVIX',
    'CHEEK',
    'CHEST',
    'CHESTABDPELVIS',
    'CHESTABDOMEN',
    'CHOROIDPLEXUS',
    'CIRCLEOFWILLIS',
    'CLAVICLE',
    'COCCYX',
    'COLON',
    'COMMONBILEDUCT',
    'COMILIACA',
    'CORNEA',
    'CORONARYARTERY',
    'CORONARYSINUS',
    'DESCAORTA',
    'DESCENDINGCOLON',
    'DUODENUM',
    'EAR',
    'ELBOW',
    'ENDOARTERIAL',
    'ENDOCARDIAC',
    'ENDOESOPHAGEAL',
    'ENDOMETRIUM',
    'ENDONASAL',
    'ENDONASOPHARYNYX',
    'ENDORECTAL',
    'ENDORENAL',
    'ENDOURETERIC',
    'ENDOURETHRAL',
    'ENDOVAGINAL',
    'ENDOVASCULAR',
    'ENDOVENOUS',
    'ENDOVESICAL',
    'WHOLEBODY',
    'EPIDIDYMIS',
    'EPIGASTRIC',
    'ESOPHAGUS',
    'EXTILIACA',
    'EXTILIACV',
    'EXTJUGV',
    'EXTREMITY',
    'EYE',
    'EYELID',
    'FACE',
    'FACIALA',
    'FEMORALA',
    'FEMORALV',
    'FEMUR',
    'FETALARM',
    'FETALDIGIT',
    'FETALHEART',
    'FETALLEG',
    'FETALPOLE',
    'FIBULA',
    'FINGER',
    'FLANK',
    'FONTANEL',
    'FOOT',
    'FOREARM',
    '4THVENTRICLE',
    'GALLBLADDER',
    'GASTRICV',
    'GENICULARA',
    'GESTSAC',
    'GLUTEAL',
    'HAND',
    'HEAD',
    'HEADNECK',
    'HEART',
    'HEPATICA',
    'HEPATICV',
    'HIP',
    'HUMERUS',
    'HYPOGASTRIC',
    'HYPOPHARYNX',
    'ILEUM',
    'ILIACA',
    'ILIACV',
    'ILIUM',
    'INFMESA',
    'INFVENACAVA',
    'INGUINAL',
    'INNOMINATEA',
    'INNOMINATEV',
    'INTILIACA',
    'INTJUGULARV',
    'INTMAMMARYA',
    'INTRACRANIAL',
    'JAW',
    'JEJUNUM',
    'JOINT',
    'KIDNEY',
    'KNEE',
    'LACRIMALA',
    'LARGEINTESTINE',
    'LARYNX',
    'LATVENTRICLE',
    'LATRIUM',
    'LFEMORALA',
    'LHEPATICV',
    'LHYPOCHONDRIAC',
    'LINGUINAL',
    'LLQ',
    'LLUMBAR',
    'LPORTALV',
    'LPULMONARYA',
    'LUQ',
    'LVENTRICLE',
    'LINGUALA',
    'LIVER',
    'LEG',
    'LUMBARA',
    'LUMBAR',
    'LSPINE',
    'LSSPINE',
    'LUMEN',
    'LUNG',
    'JAW',
    'MASTOID',
    'MAXILLA',
    'MEDIASTINUM',
    'MESENTRICA',
    'MESENTRICV',
    'MCA',
    'MIDHEPATICV',
    'MORISONSPOUCH',
    'MOUTH',
    'NASOPHARYNX',
    'NECK',
    'NECKCHESTABDPELV',
    'NECKCHESTABDOMEN',
    'NECKCHEST',
    'NOSE',
    'OCCPITALA',
    'OCCIPTALV',
    'OPHTHALMICA',
    'OPTICCANAL',
    'ORBIT',
    'OVARY',
    'PANCREAS',
    'PANCREATICDUCT',
    'PARASTERNAL',
    'PARATHYROID',
    'PAROTID',
    'PATELLA',
    'PELVIS',
    'PENILEA',
    'PENIS',
    'PERINEUM',
    'PERONEALA',
    'PHARYNX',
    'PHARYNXLARYNX',
    'PLACENTA',
    'POPLITEALA',
    'POPLITEALFOSSA',
    'POPLITEALV',
    'PORTALV',
    'POSCOMMA',
    'POSTIBIALA',
    'PROFFEMA',
    'PROFFEMV',
    'PROSTATE',
    'PULMONARYA',
    'PULMONARYV',
    'RADIALA',
    'RADIUS',
    'RADIUSULNA',
    'CULDESAC',
    'RECTUM',
    'RENALA',
    'RENALV',
    'RETROPERITONEUM',
    'RIB',
    'RATRIUM',
    'RFEMORALA',
    'RHEPATICV',
    'RHYPOCHONDRIAC',
    'RINGUINAL',
    'RLQ',
    'RLUMBAR',
    'RPORTALV',
    'RPULMONARYA',
    'RUQ',
    'RVENTRICLE',
    'SIJOINT',
    'SSPINE',
    'SFJ',
    'SAPHENOUSV',
    'SCALP',
    'SCAPULA',
    'SCLERA',
    'SCROTUM',
    'SELLA',
    'SEMVESICLE',
    'SESAMOID',
    'SHOULDER',
    'SIGMOID',
    'SKULL',
    'SMALLINTESTINE',
    'SPINALCORD',
    'SPINE',
    'SPLEEN',
    'SPLENICA',
    'SPLENICV',
    'SCJOINT',
    'STERNUM',
    'STOMACH',
    'SUBCLAVIANA',
    'SUBCLAVIANV',
    'SUBCOSTAL',
    'SUBMANDIBULAR',
    'LSUPPULMONARYV',
    'SMA',
    'RSUPPULMONARYV',
    'SUPTHYROIDA',
    'SVC',
    'SUPRACLAVICULAR',
    'SUPRAPUBIC',
    'TMJ',
    'TESTIS',
    'THALAMUS',
    'THIGH',
    '3RDVENTRICLE',
    'THORACICAORTA',
    'TSPINE',
    'TLSPINE',
    'THORAX',
    'THUMB',
    'THYMUS',
    'THYROID',
    'TIBIA',
    'TIBIAFIBULA',
    'TOE',
    'TONGUE',
    'TRACHEA',
    'TRACHEABRONCHUS',
    'TRANSVERSECOLON',
    'ULNA',
    'ULNARA',
    'UMBILICALA',
    'UMBILICAL',
    'UMBILICALV',
    'ARM',
    'UPRURINARYTRACT',
    'URETER',
    'URETHRA',
    'UTERUS',
    'VAGINA',
    'VEIN',
    'VERTEBRALA',
    'VULVA',
    'WRIST',
    'ZYGOMA',
  ])!;

export const genOption = <A>(f: () => A): A | undefined => (Math.random() > 0.5 ? f() : undefined);
export const genListOf = <A>(f: () => A, c: number): A[] => times(c, f);

export const genPatient = () => ({
  patientID: genUID(),
  patientName: genOption(genName),
  patientBirthDate: genOption(genDateDICOM),
  patientBirthTime: genOption(genTimeDICOM),
  patientSex: genOption(genSex),
  ethnicGroup: genOption(genEthnicGroup),
  createdAt: genDateISO(),
});

export const genStudy = () => ({
  studyInstanceUID: genUID(),
  accessionNumber: genOption(genAccessionNumber),
  studyDescription: genOption(genDescription),
  patientAge: genOption(genAgeDICOM),
  patientSize: genOption(genSize),
  patientWeight: genOption(genWeight),
  occupation: genOption(genOccupation),
  studyDate: genOption(genDateDICOM),
  studyTime: genOption(genTimeDICOM),
  createdAt: genDateISO(),
});

export const genSeries = () => ({
  seriesInstanceUID: genUID(),
  modality: genOption(genModality),
  seriesNumber: genOption(() => `${genNumber()}`),
  seriesDate: genOption(genDateDICOM),
  seriesTime: genOption(genTimeDICOM),
  seriesDescription: genOption(genDescription),
  bodyPartExamined: genOption(genBodyPartExamined),
  patientPosition: genOption(genPatientPosition),
  performedProcedureStepStartDate: genOption(genDateDICOM),
  performedProcedureStepStartTime: genOption(genTimeDICOM),
  createdAt: genDateISO(),
});

export const genEquipment = () => ({
  id: genUID(),
  manufacturer: genOption(genManufacturer),
  manufacturerModelName: genOption(() => `model_${genAlphaNumeric}`),
  institutionName: genOption(genCompanyName),
  institutionAddress: genOption(genAddress),
  institutionDepartmentName: genOption(() => `department_${genAlphaNumeric()}`),
  stationName: genOption(() => `station_${genAlphaNumeric()}`),
  softwareVersions: genOption(() => genListOf(genVersion, 2)),
  createdAt: genDateISO(),
});

export const genFrameOfReference = () => ({
  frameOfReferenceUID: genUID(),
  positionReferenceIndicator: genOption(genAlphaNumeric),
  createdAt: genDateISO(),
});

export const genImage = () => ({
  sopInstanceUID: genUID(),
  sopClassUID: genUID(),
  imageType: genOption(() => genListOf(genAlphaNumeric, 3)),
  samplesPerPixel: genOption(() => genNumber(1, 4)),
  photometricInterpretation: genPhotometricInterpretation(),
  rows: genNumber(1024, 4096),
  columns: genNumber(1024, 4096),
  bitsAllocated: genNumber(8, 16),
  bitsStored: genNumber(8, 16),
  highBit: genNumber(8, 16),
  instanceNumber: genOption(() => `${genNumber()}`),
  contentDate: genOption(genDateDICOM),
  contentTime: genOption(genTimeDICOM),
  numberOfFrames: genOption(() => genNumber(1, 120)),
  createdAt: genDateISO(),
});