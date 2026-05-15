  import type { Area, Career, Modality, StudyPlanYear, University } from "../types";

export const areas: Area[] = [
  "Ciencias Económicas y Negocios",
  "Ingeniería y Tecnología",
  "Ciencias Sociales",
  "Derecho y Política",
  "Salud y Medicina",
  "Diseño y Comunicación",
  "Ciencias Exactas",
  "Humanidades",
  "Arquitectura y Urbanismo"
];

const logo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const faculty = (universityId: string, id: string, name: string, description: string) => ({
  id,
  name,
  description,
  universityId
});

export const universities: University[] = [
  {
    id: "ucema",
    name: "Universidad del CEMA",
    acronym: "UCEMA",
    type: "Privada",
    description:
      "Universidad privada con foco en economía, negocios, finanzas, tecnología, derecho, ciencias políticas y relaciones internacionales.",
    website: "https://ucema.edu.ar/",
    officialProgramsUrl: "https://ucema.edu.ar/carreras",
    logoUrl: logo("ucema.edu.ar"),
    location: {
      name: "Sede Reconquista",
      address: "Reconquista 775",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("ucema", "ucema-negocios", "Negocios y Management", "Carreras de administración, marketing, negocios digitales y gestión."),
      faculty("ucema", "ucema-economia-finanzas", "Economía y Finanzas", "Programas orientados a economía, finanzas y análisis cuantitativo."),
      faculty("ucema", "ucema-ingenieria", "Ingeniería y Tecnología", "Formación en informática, analítica e inteligencia artificial."),
      faculty("ucema", "ucema-sociales", "Ciencias Sociales y Derecho", "Carreras de derecho, política y relaciones internacionales.")
    ]
  },
  {
    id: "uca",
    name: "Pontificia Universidad Católica Argentina",
    acronym: "UCA",
    type: "Privada",
    description:
      "Universidad privada con oferta amplia en derecho, economía, ingeniería, salud, ciencias sociales, humanidades, música y filosofía.",
    website: "https://uca.edu.ar/",
    officialProgramsUrl: "https://uca.edu.ar/es/carreras",
    logoUrl: logo("uca.edu.ar"),
    location: {
      name: "Campus Puerto Madero",
      address: "Av. Alicia Moreau de Justo 1300",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("uca", "uca-derecho", "Facultad de Derecho", "Formación jurídica y política."),
      faculty("uca", "uca-economicas", "Facultad de Ciencias Económicas", "Economía, empresa, contabilidad y gestión."),
      faculty("uca", "uca-sociales", "Facultad de Ciencias Sociales", "Comunicación, relaciones internacionales y ciencia política."),
      faculty("uca", "uca-psicologia", "Facultad de Psicología y Psicopedagogía", "Salud mental, educación y desarrollo humano."),
      faculty("uca", "uca-ingenieria", "Facultad de Ingeniería y Ciencias Agrarias", "Ingenierías, alimentos, ambiente y producción."),
      faculty("uca", "uca-medicina", "Facultad de Ciencias Médicas", "Carreras de salud y atención clínica."),
      faculty("uca", "uca-humanidades", "Facultad de Filosofía y Letras", "Humanidades, letras, historia y filosofía."),
      faculty("uca", "uca-musica", "Facultad de Artes y Ciencias Musicales", "Música, composición, dirección e interpretación.")
    ]
  },
  {
    id: "ditella",
    name: "Universidad Torcuato Di Tella",
    acronym: "UTDT",
    type: "Privada",
    description:
      "Universidad privada con carreras de grado en arquitectura, negocios, economía, derecho, ciencias sociales, diseño, tecnología y arte.",
    website: "https://www.utdt.edu/",
    officialProgramsUrl: "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746",
    logoUrl: logo("utdt.edu"),
    location: {
      name: "Campus Alcorta",
      address: "Av. Figueroa Alcorta 7350",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("ditella", "ditella-arquitectura", "Escuela de Arquitectura y Estudios Urbanos", "Arquitectura, ciudad y proyecto."),
      faculty("ditella", "ditella-negocios", "Escuela de Negocios", "Negocios, economía empresarial y tecnología."),
      faculty("ditella", "ditella-economia", "Departamento de Economía", "Economía y análisis cuantitativo."),
      faculty("ditella", "ditella-derecho", "Escuela de Derecho", "Derecho, justicia y política pública."),
      faculty("ditella", "ditella-sociales", "Escuela de Gobierno y Ciencias Sociales", "Política, historia, estudios internacionales y comportamiento."),
      faculty("ditella", "ditella-diseno", "Escuela de Diseño y Arte", "Diseño, tecnología y cultura visual.")
    ]
  },
  {
    id: "uba",
    name: "Universidad de Buenos Aires",
    acronym: "UBA",
    type: "Pública",
    description:
      "Universidad pública argentina con trece facultades y una de las ofertas de grado más amplias del país.",
    website: "https://www.uba.ar/",
    officialProgramsUrl: "https://informacionestadisticauba.rec.uba.ar/oferta-academica/",
    logoUrl: logo("uba.ar"),
    location: {
      name: "Rectorado",
      address: "Viamonte 430",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("uba", "uba-agronomia", "Facultad de Agronomía", "Ambiente, agroalimentos, producción y ciencias agrarias."),
      faculty("uba", "uba-arquitectura", "Facultad de Arquitectura, Diseño y Urbanismo", "Arquitectura, diseño y urbanismo."),
      faculty("uba", "uba-economicas", "Facultad de Ciencias Económicas", "Economía, administración, contabilidad y sistemas."),
      faculty("uba", "uba-exactas", "Facultad de Ciencias Exactas y Naturales", "Ciencias exactas, naturales, datos y tecnología."),
      faculty("uba", "uba-sociales", "Facultad de Ciencias Sociales", "Comunicación, sociología, política, trabajo social y relaciones laborales."),
      faculty("uba", "uba-veterinaria", "Facultad de Ciencias Veterinarias", "Salud y producción animal."),
      faculty("uba", "uba-derecho", "Facultad de Derecho", "Derecho, traducción pública y caligrafía pública."),
      faculty("uba", "uba-farmacia", "Facultad de Farmacia y Bioquímica", "Farmacia, bioquímica y tecnología de alimentos."),
      faculty("uba", "uba-filosofia", "Facultad de Filosofía y Letras", "Humanidades, letras, historia, educación, edición y geografía."),
      faculty("uba", "uba-ingenieria", "Facultad de Ingeniería", "Ingenierías y tecnologías aplicadas."),
      faculty("uba", "uba-medicina", "Facultad de Medicina", "Medicina, enfermería, nutrición, obstetricia, kinesiología y bioimágenes."),
      faculty("uba", "uba-odontologia", "Facultad de Odontología", "Salud bucal y odontología."),
      faculty("uba", "uba-psicologia", "Facultad de Psicología", "Psicología, terapia ocupacional y musicoterapia.")
    ]
  },
  {
    id: "utn",
    name: "Universidad Tecnológica Nacional",
    acronym: "UTN",
    type: "Pública",
    description:
      "Universidad pública federal especializada en ingeniería, tecnología, producción, sistemas y disciplinas aplicadas.",
    website: "https://www.utn.edu.ar/",
    officialProgramsUrl: "https://www.frba.utn.edu.ar/",
    logoUrl: logo("utn.edu.ar"),
    location: {
      name: "Facultad Regional Buenos Aires",
      address: "Medrano 951",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("utn", "utn-frba", "Facultad Regional Buenos Aires", "Ingenierías de grado con orientación tecnológica e industrial.")
    ]
  },
  {
    id: "uade",
    name: "Universidad Argentina de la Empresa",
    acronym: "UADE",
    type: "Privada",
    description:
      "Universidad privada con propuesta práctica en negocios, tecnología, diseño, comunicación, derecho, salud y arquitectura.",
    website: "https://www.uade.edu.ar/",
    officialProgramsUrl: "https://www.uade.edu.ar/carreras-grado/",
    logoUrl: logo("uade.edu.ar"),
    location: {
      name: "Campus Buenos Aires",
      address: "Lima 757",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("uade", "uade-economicas", "Facultad de Ciencias Económicas", "Empresa, marketing, comercio, finanzas y contabilidad."),
      faculty("uade", "uade-ingenieria", "Facultad de Ingeniería y Ciencias Exactas", "Ingenierías, informática, datos y ciencias exactas."),
      faculty("uade", "uade-comunicacion", "Facultad de Comunicación", "Comunicación, medios, publicidad y contenidos."),
      faculty("uade", "uade-diseno", "Facultad de Arquitectura y Diseño", "Arquitectura, diseño gráfico, indumentaria e interiores."),
      faculty("uade", "uade-juridicas", "Facultad de Ciencias Jurídicas y Sociales", "Derecho, gobierno, relaciones internacionales y psicología."),
      faculty("uade", "uade-salud", "Facultad de Ciencias de la Salud", "Nutrición, psicología, kinesiología, biotecnología y salud.")
    ]
  },
  {
    id: "ub",
    name: "Universidad de Belgrano",
    acronym: "UB",
    type: "Privada",
    description:
      "Universidad privada con oferta de grado en arquitectura, diseño, derecho, economía, ingeniería, salud, lenguas y humanidades.",
    website: "https://www.ub.edu.ar/",
    officialProgramsUrl: "https://www.ub.edu.ar/carreras-de-grado",
    logoUrl: logo("ub.edu.ar"),
    location: {
      name: "Torre Universitaria",
      address: "Zabala 1837",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("ub", "ub-arquitectura", "Arquitectura y Urbanismo", "Proyecto arquitectónico, urbano y ambiental."),
      faculty("ub", "ub-diseno", "Diseño y Comunicación", "Diseño, comunicación, publicidad y contenidos."),
      faculty("ub", "ub-economicas", "Ciencias Económicas", "Administración, comercio, contabilidad, economía y marketing."),
      faculty("ub", "ub-derecho", "Derecho y Ciencias Sociales", "Derecho, política y relaciones internacionales."),
      faculty("ub", "ub-ingenieria", "Ingeniería y Tecnología", "Ingenierías, informática y producción."),
      faculty("ub", "ub-salud", "Ciencias de la Salud", "Psicología, nutrición, farmacia y salud."),
      faculty("ub", "ub-humanidades", "Humanidades y Lenguas", "Educación, letras, lenguas y hotelería/turismo.")
    ]
  },
  {
    id: "up",
    name: "Universidad de Palermo",
    acronym: "UP",
    type: "Privada",
    description:
      "Universidad privada con fuerte presencia en diseño, comunicación, negocios, derecho, tecnología, arquitectura y ciencias sociales.",
    website: "https://www.palermo.edu/",
    officialProgramsUrl: "https://www.palermo.edu/carreras-de-grado/",
    logoUrl: logo("palermo.edu"),
    location: {
      name: "Sede Mario Bravo",
      address: "Mario Bravo 1050",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("up", "up-diseno", "Facultad de Diseño y Comunicación", "Diseño, moda, cine, publicidad, fotografía y contenidos."),
      faculty("up", "up-negocios", "Facultad de Negocios", "Administración, marketing, finanzas, negocios digitales y turismo."),
      faculty("up", "up-ingenieria", "Facultad de Ingeniería", "Informática, inteligencia artificial, datos e ingeniería industrial."),
      faculty("up", "up-derecho", "Facultad de Derecho", "Derecho, relaciones internacionales y ciencias políticas."),
      faculty("up", "up-arquitectura", "Facultad de Arquitectura", "Arquitectura, urbanismo y proyecto."),
      faculty("up", "up-sociales", "Facultad de Ciencias Sociales", "Psicología, comunicación, periodismo y humanidades.")
    ]
  },
  {
    id: "usal",
    name: "Universidad del Salvador",
    acronym: "USAL",
    type: "Privada",
    description:
      "Universidad privada con tradición en humanidades, psicología, derecho, ciencias sociales, salud, economía y tecnología.",
    website: "https://www.usal.edu.ar/",
    officialProgramsUrl: "https://www.usal.edu.ar/carreras-grado",
    logoUrl: logo("usal.edu.ar"),
    location: {
      name: "Sede Centro",
      address: "Tucumán 1845",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("usal", "usal-psicologia", "Psicología y Psicopedagogía", "Psicología, psicopedagogía y desarrollo humano."),
      faculty("usal", "usal-sociales", "Ciencias Sociales", "Comunicación, relaciones internacionales, sociología y política."),
      faculty("usal", "usal-economicas", "Ciencias Económicas y Empresariales", "Administración, contabilidad, economía, comercio y marketing."),
      faculty("usal", "usal-derecho", "Ciencias Jurídicas", "Derecho y ciencias jurídicas."),
      faculty("usal", "usal-medicina", "Medicina y Ciencias de la Salud", "Medicina, nutrición, enfermería, fonoaudiología y salud."),
      faculty("usal", "usal-ingenieria", "Ingeniería", "Ingenierías, informática y tecnología."),
      faculty("usal", "usal-humanidades", "Historia, Geografía y Turismo", "Historia, geografía, turismo y patrimonio."),
      faculty("usal", "usal-letras", "Filosofía, Letras y Estudios Orientales", "Filosofía, letras, idiomas y estudios culturales.")
    ]
  },
  {
    id: "itba",
    name: "Instituto Tecnológico de Buenos Aires",
    acronym: "ITBA",
    type: "Privada",
    description:
      "Institución tecnológica orientada a ingeniería, innovación, informática, datos, negocios y ciencias aplicadas.",
    website: "https://www.itba.edu.ar/",
    officialProgramsUrl: "https://www.itba.edu.ar/grado",
    logoUrl: logo("itba.edu.ar"),
    location: {
      name: "Distrito Tecnológico",
      address: "Los Patos 2802",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("itba", "itba-ingenieria", "Escuela de Ingeniería y Tecnología", "Ingenierías, informática, datos y ciencias aplicadas."),
      faculty("itba", "itba-negocios", "Escuela de Innovación y Negocios", "Negocios, gestión, innovación y analítica.")
    ]
  },
  {
    id: "siglo21",
    name: "Universidad Siglo 21",
    acronym: "Siglo 21",
    type: "Privada",
    description:
      "Universidad con modalidades flexibles y oferta de grado en derecho, economía, tecnología, comunicación, salud, diseño y ciencias sociales.",
    website: "https://21.edu.ar/",
    officialProgramsUrl: "https://21.edu.ar/grado-y-pregrado",
    logoUrl: logo("21.edu.ar"),
    location: {
      name: "Campus Córdoba",
      address: "De los Latinos 8555",
      city: "Córdoba",
      province: "Córdoba",
      country: "Argentina"
    },
    faculties: [
      faculty("siglo21", "siglo21-negocios", "Management y Negocios", "Administración, marketing, comercio y finanzas."),
      faculty("siglo21", "siglo21-derecho", "Derecho y Ciencias Sociales", "Derecho, política, relaciones internacionales y seguridad."),
      faculty("siglo21", "siglo21-tecnologia", "Ingeniería y Tecnología", "Software, datos, informática e ingeniería."),
      faculty("siglo21", "siglo21-comunicacion", "Comunicación y Diseño", "Comunicación, publicidad, diseño y contenidos."),
      faculty("siglo21", "siglo21-salud", "Salud y Bienestar", "Psicología, nutrición y gestión de salud."),
      faculty("siglo21", "siglo21-humanas", "Educación y Humanidades", "Educación, ambiente, turismo y cultura.")
    ]
  },
  {
    id: "uai",
    name: "Universidad Abierta Interamericana",
    acronym: "UAI",
    type: "Privada",
    description:
      "Universidad privada con sedes en Buenos Aires y Rosario, con oferta en salud, informática, comunicación, educación, derecho y negocios.",
    website: "https://uai.edu.ar/",
    officialProgramsUrl: "https://uai.edu.ar/",
    logoUrl: logo("uai.edu.ar"),
    location: {
      name: "Rectorado",
      address: "Chacabuco 90",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("uai", "uai-arquitectura", "Arquitectura", "Arquitectura e interiores."),
      faculty("uai", "uai-comunicacion", "Ciencias de la Comunicación", "Diseño, periodismo, publicidad, audiovisual y relaciones públicas."),
      faculty("uai", "uai-educacion", "Ciencias de la Educación y Psicopedagogía", "Educación, psicopedagogía y formación docente."),
      faculty("uai", "uai-economicas", "Ciencias Económicas", "Administración, marketing, comercio, contabilidad y economía."),
      faculty("uai", "uai-derecho", "Derecho y Ciencias Políticas", "Derecho, ciencia política y relaciones internacionales."),
      faculty("uai", "uai-medicina", "Medicina y Ciencias de la Salud", "Medicina, enfermería, kinesiología, nutrición y salud."),
      faculty("uai", "uai-psicologia", "Psicología y Relaciones Humanas", "Psicología y recursos humanos."),
      faculty("uai", "uai-tecnologia", "Tecnología Informática", "Sistemas, programación, datos e informática."),
      faculty("uai", "uai-turismo", "Turismo y Hospitalidad", "Gastronomía, hotelería y turismo.")
    ]
  },
  {
    id: "unso",
    name: "Universidad Nacional Scalabrini Ortiz",
    acronym: "UNSO",
    type: "Pública",
    description:
      "Universidad pública nacional con orientación territorial, social, productiva, educativa y tecnológica.",
    website: "https://www.unso.edu.ar/",
    officialProgramsUrl: "https://www.unso.edu.ar/carreras",
    logoUrl: logo("unso.edu.ar"),
    location: {
      name: "Sede principal",
      address: "Consultar sede oficial por carrera",
      city: "San Isidro",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("unso", "unso-sociales", "Ciencias Sociales y Administración", "Organizaciones, gestión pública, educación y desarrollo local."),
      faculty("unso", "unso-tecnologia", "Producción y Tecnología", "Producción, logística, ambiente y tecnología.")
    ]
  },
  {
    id: "cemic",
    name: "Instituto Universitario CEMIC",
    acronym: "CEMIC",
    type: "Privada",
    description:
      "Institución universitaria vinculada a salud, ciencias biomédicas, clínica, asistencia e investigación.",
    website: "https://www.cemic.edu.ar/",
    officialProgramsUrl: "https://www.cemic.edu.ar/educacion-universitaria",
    logoUrl: logo("cemic.edu.ar"),
    location: {
      name: "Sede Universitaria Saavedra",
      address: "Valdenegro 4337",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("cemic", "cemic-salud", "Ciencias de la Salud", "Medicina, enfermería y carreras sanitarias.")
    ]
  },
  {
    id: "kennedy",
    name: "Universidad Kennedy",
    acronym: "UK",
    type: "Privada",
    description:
      "Universidad privada con carreras en psicología, derecho, economía, comunicación, salud, ciencias sociales y tecnología.",
    website: "https://www.kennedy.edu.ar/",
    officialProgramsUrl: "https://www.kennedy.edu.ar/carreras",
    logoUrl: logo("kennedy.edu.ar"),
    location: {
      name: "Sede CABA",
      address: "Consultar sede oficial por carrera",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("kennedy", "kennedy-humanas", "Ciencias Humanas y Sociales", "Psicología, comunicación, relaciones públicas y sociedad."),
      faculty("kennedy", "kennedy-economicas", "Ciencias Económicas y Empresariales", "Administración, contabilidad, marketing y comercio."),
      faculty("kennedy", "kennedy-derecho", "Derecho y Política", "Derecho, relaciones internacionales y política."),
      faculty("kennedy", "kennedy-salud", "Ciencias de la Salud", "Salud, nutrición, kinesiología y farmacia."),
      faculty("kennedy", "kennedy-tecnologia", "Tecnología e Ingeniería", "Sistemas, informática e ingeniería.")
    ]
  },
  {
    id: "barcelo",
    name: "Fundación Barceló",
    acronym: "Barceló",
    type: "Privada",
    description:
      "Instituto universitario especializado en ciencias de la salud, medicina, nutrición, kinesiología, psicología y enfermería.",
    website: "https://www.barcelo.edu.ar/",
    officialProgramsUrl: "https://www.barcelo.edu.ar/carreras-de-grado",
    logoUrl: logo("barcelo.edu.ar"),
    location: {
      name: "Sede Buenos Aires",
      address: "Larrea 770",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("barcelo", "barcelo-salud", "Ciencias de la Salud", "Carreras de grado orientadas a salud, clínica y cuidado.")
    ]
  },
  {
    id: "uces",
    name: "Universidad de Ciencias Empresariales y Sociales",
    acronym: "UCES",
    type: "Privada",
    description:
      "Universidad privada con carreras en empresa, comunicación, psicología, salud, derecho, diseño, tecnología y ciencias sociales.",
    website: "https://www.uces.edu.ar/",
    officialProgramsUrl: "https://www.uces.edu.ar/carreras-universitarias",
    logoUrl: logo("uces.edu.ar"),
    location: {
      name: "Sede Centro",
      address: "Paraguay 1239",
      city: "Ciudad Autónoma de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina"
    },
    faculties: [
      faculty("uces", "uces-empresariales", "Ciencias Empresariales", "Administración, marketing, comercio, contabilidad y economía."),
      faculty("uces", "uces-comunicacion", "Comunicación y Diseño", "Comunicación, publicidad, diseño y medios."),
      faculty("uces", "uces-sociales", "Ciencias Sociales y Humanas", "Psicología, sociología, recursos humanos y educación."),
      faculty("uces", "uces-derecho", "Derecho y Ciencias Políticas", "Derecho, política y relaciones internacionales."),
      faculty("uces", "uces-salud", "Ciencias de la Salud", "Medicina, nutrición, kinesiología y salud."),
      faculty("uces", "uces-tecnologia", "Tecnología", "Sistemas, datos y tecnología aplicada.")
    ]
  }
];

interface CareerSeed {
  universityId: string;
  facultyId: string;
  name: string;
  area?: Area;
  durationYears?: number;
  modality?: Modality;
  sourceUrl?: string;
}

const add = (
  universityId: string,
  facultyId: string,
  names: string[],
  sourceUrl?: string,
  overrides: Partial<CareerSeed> = {}
): CareerSeed[] =>
  names.map((name) => ({
    universityId,
    facultyId,
    name,
    sourceUrl,
    ...overrides
  }));

const careerSeeds: CareerSeed[] = [
  ...add("ucema", "ucema-negocios", ["Licenciatura en Administración de Empresas", "Licenciatura en Marketing", "Licenciatura en Negocios Digitales"], "https://ucema.edu.ar/carreras"),
  ...add("ucema", "ucema-economia-finanzas", ["Licenciatura en Economía", "Licenciatura en Economía Empresarial", "Licenciatura en Finanzas", "Actuario"], "https://ucema.edu.ar/carreras"),
  ...add("ucema", "ucema-ingenieria", ["Ingeniería en Informática", "Ingeniería en Inteligencia Artificial", "Licenciatura en Analítica de Negocios"], "https://ucema.edu.ar/carreras"),
  ...add("ucema", "ucema-sociales", ["Abogacía", "Licenciatura en Ciencias Políticas", "Licenciatura en Relaciones Internacionales", "Bachelor en Artes Liberales y Ciencias"], "https://ucema.edu.ar/carreras"),

  ...add("uca", "uca-derecho", ["Abogacía"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-economicas", ["Contador Público", "Licenciatura en Administración de Empresas", "Licenciatura en Economía", "Licenciatura en Marketing"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-sociales", ["Licenciatura en Comunicación Digital e Interactiva", "Licenciatura en Ciencia Política", "Licenciatura en Relaciones Internacionales", "Licenciatura en Periodismo"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-psicologia", ["Licenciatura en Psicología", "Licenciatura en Psicopedagogía"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-ingenieria", ["Ingeniería Ambiental", "Ingeniería Civil", "Ingeniería en Alimentos", "Ingeniería en Informática", "Ingeniería Industrial", "Ingeniería Agronómica"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-medicina", ["Medicina", "Licenciatura en Enfermería", "Licenciatura en Nutrición"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-humanidades", ["Licenciatura en Filosofía", "Licenciatura en Letras", "Licenciatura en Historia"], "https://uca.edu.ar/es/carreras"),
  ...add("uca", "uca-musica", ["Licenciatura en Composición", "Licenciatura en Dirección Orquestal", "Licenciatura en Música Cinematográfica"], "https://uca.edu.ar/es/carreras"),

  ...add("ditella", "ditella-arquitectura", ["Arquitectura"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),
  ...add("ditella", "ditella-negocios", ["Licenciatura en Administración de Empresas", "Licenciatura en Tecnología Digital", "Licenciatura en Analítica Empresarial y Social"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),
  ...add("ditella", "ditella-economia", ["Licenciatura en Economía", "Licenciatura en Economía Empresarial"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),
  ...add("ditella", "ditella-derecho", ["Abogacía"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),
  ...add("ditella", "ditella-sociales", ["Licenciatura en Ciencia Política y Gobierno", "Licenciatura en Ciencias Sociales", "Licenciatura en Estudios Internacionales", "Licenciatura en Historia", "Licenciatura en Ciencias del Comportamiento"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),
  ...add("ditella", "ditella-diseno", ["Licenciatura en Diseño", "Licenciatura en Arte"], "https://www.utdt.edu/listado_contenidos.php?id_item_menu=25746"),

  ...add("uba", "uba-agronomia", ["Ingeniería Agronómica", "Licenciatura en Ciencias Ambientales", "Licenciatura en Economía y Administración Agrarias", "Licenciatura en Gestión de Agroalimentos", "Profesorado de Enseñanza Media y Superior en Ciencias Ambientales"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-arquitectura", ["Arquitectura", "Diseño Gráfico", "Diseño Industrial", "Diseño de Imagen y Sonido", "Diseño de Indumentaria", "Diseño Textil", "Diseño del Paisaje"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-economicas", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Economía", "Licenciatura en Sistemas de Información de las Organizaciones", "Actuario en Administración", "Actuario en Economía"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-exactas", ["Licenciatura en Ciencias Biológicas", "Licenciatura en Ciencias de la Atmósfera", "Licenciatura en Ciencias de Datos", "Licenciatura en Ciencias de la Computación", "Licenciatura en Ciencias Físicas", "Licenciatura en Ciencias Geológicas", "Licenciatura en Ciencias Matemáticas", "Licenciatura en Ciencias Químicas", "Licenciatura en Oceanografía", "Profesorado de Enseñanza Media y Superior en Biología", "Profesorado de Enseñanza Media y Superior en Física", "Profesorado de Enseñanza Media y Superior en Matemática", "Profesorado de Enseñanza Media y Superior en Química"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-sociales", ["Licenciatura en Ciencias de la Comunicación", "Licenciatura en Ciencia Política", "Licenciatura en Relaciones del Trabajo", "Licenciatura en Sociología", "Licenciatura en Trabajo Social", "Profesorado de Enseñanza Secundaria y Superior en Ciencia Política", "Profesorado de Enseñanza Secundaria y Superior en Ciencias de la Comunicación Social", "Profesorado de Enseñanza Secundaria y Superior en Relaciones del Trabajo", "Profesorado de Enseñanza Secundaria y Superior en Sociología", "Profesorado de Enseñanza Secundaria y Superior en Trabajo Social"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-veterinaria", ["Veterinaria"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-derecho", ["Abogacía", "Profesorado para la Enseñanza Media y Superior en Ciencias Jurídicas", "Traductorado Público", "Calígrafo Público"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-farmacia", ["Bioquímica", "Farmacia", "Licenciatura en Ciencia y Tecnología de Alimentos"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-filosofia", ["Licenciatura en Artes", "Licenciatura en Ciencias Antropológicas", "Licenciatura en Ciencias de la Educación", "Licenciatura en Filosofía", "Licenciatura en Geografía", "Licenciatura en Historia", "Licenciatura en Letras", "Licenciatura en Bibliotecología y Ciencia de la Información", "Licenciatura en Edición", "Profesorado de Enseñanza Media y Superior en Artes", "Profesorado de Enseñanza Media y Superior en Ciencias Antropológicas", "Profesorado de Enseñanza Media y Superior en Ciencias de la Educación", "Profesorado de Enseñanza Media y Superior en Filosofía", "Profesorado de Enseñanza Media y Superior en Geografía", "Profesorado de Enseñanza Media y Superior en Historia", "Profesorado de Enseñanza Media y Superior en Letras"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-ingenieria", ["Ingeniería Civil", "Ingeniería Electricista", "Ingeniería Electrónica", "Ingeniería en Agrimensura", "Ingeniería en Alimentos", "Ingeniería en Informática", "Ingeniería en Petróleo", "Ingeniería Industrial", "Ingeniería Mecánica", "Ingeniería Naval y Mecánica", "Ingeniería Química", "Licenciatura en Análisis de Sistemas"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-medicina", ["Medicina", "Licenciatura en Enfermería", "Licenciatura en Fonoaudiología", "Licenciatura en Kinesiología y Fisiatría", "Licenciatura en Nutrición", "Licenciatura en Obstetricia", "Licenciatura en Producción de Bioimágenes"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-odontologia", ["Odontología"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),
  ...add("uba", "uba-psicologia", ["Licenciatura en Psicología", "Licenciatura en Musicoterapia", "Licenciatura en Terapia Ocupacional", "Profesorado de Enseñanza Media y Superior en Psicología"], "https://informacionestadisticauba.rec.uba.ar/oferta-academica/"),

  ...add("utn", "utn-frba", ["Ingeniería Civil", "Ingeniería Eléctrica", "Ingeniería Electrónica", "Ingeniería Industrial", "Ingeniería Mecánica", "Ingeniería Química", "Ingeniería en Sistemas de Información", "Ingeniería Naval", "Ingeniería Textil"], "https://www.frba.utn.edu.ar/"),

  ...add("uade", "uade-economicas", ["Contador Público", "Licenciatura en Administración de Empresas", "Licenciatura en Comercialización", "Licenciatura en Comercio Internacional", "Licenciatura en Economía", "Licenciatura en Finanzas", "Licenciatura en Gestión de Negocios", "Licenciatura en Marketing", "Licenciatura en Recursos Humanos"], "https://www.uade.edu.ar/facultad-de-ciencias-economicas/"),
  ...add("uade", "uade-ingenieria", ["Ingeniería en Alimentos", "Ingeniería en Informática", "Ingeniería Industrial", "Licenciatura en Biotecnología", "Licenciatura en Ciencias de Datos", "Licenciatura en Gestión de Tecnología de la Información"], "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/"),
  ...add("uade", "uade-comunicacion", ["Licenciatura en Comunicación Global", "Licenciatura en Comunicación Digital e Interactiva", "Licenciatura en Publicidad", "Licenciatura en Relaciones Públicas e Institucionales", "Licenciatura en Producción de Contenidos"], "https://www.uade.edu.ar/facultad-de-comunicacion/"),
  ...add("uade", "uade-diseno", ["Arquitectura", "Diseño Gráfico", "Diseño Industrial", "Diseño de Interiores", "Diseño de Indumentaria y Textil", "Licenciatura en Diseño Audiovisual"], "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/"),
  ...add("uade", "uade-juridicas", ["Abogacía", "Licenciatura en Gobierno y Relaciones Internacionales", "Licenciatura en Psicología"], "https://www.uade.edu.ar/facultad-de-ciencias-juridicas-y-sociales/"),
  ...add("uade", "uade-salud", ["Licenciatura en Nutrición", "Licenciatura en Kinesiología y Fisiatría", "Licenciatura en Psicología", "Licenciatura en Biotecnología"], "https://www.uade.edu.ar/carreras-grado/"),

  ...add("ub", "ub-arquitectura", ["Arquitectura"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-diseno", ["Diseño Gráfico", "Diseño de Interiores", "Diseño de Indumentaria", "Licenciatura en Comunicación", "Licenciatura en Publicidad"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-economicas", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Comercialización", "Licenciatura en Comercio Exterior", "Licenciatura en Economía", "Licenciatura en Recursos Humanos"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-derecho", ["Abogacía", "Licenciatura en Ciencia Política", "Licenciatura en Relaciones Internacionales"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-ingenieria", ["Ingeniería Civil", "Ingeniería en Informática", "Ingeniería Industrial", "Ingeniería Electromecánica", "Licenciatura en Sistemas de Información"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-salud", ["Licenciatura en Nutrición", "Licenciatura en Psicología", "Farmacia"], "https://www.ub.edu.ar/carreras-de-grado"),
  ...add("ub", "ub-humanidades", ["Licenciatura en Hotelería", "Licenciatura en Turismo", "Licenciatura en Lengua Inglesa", "Profesorado en Inglés"], "https://www.ub.edu.ar/carreras-de-grado"),

  ...add("up", "up-diseno", ["Diseño Gráfico", "Diseño de Indumentaria", "Diseño Industrial", "Diseño de Interiores", "Diseño de Imagen y Sonido", "Licenciatura en Fotografía", "Licenciatura en Publicidad", "Licenciatura en Dirección Cinematográfica", "Licenciatura en Producción de Televisión"], "https://www.palermo.edu/carreras-de-grado/"),
  ...add("up", "up-negocios", ["Licenciatura en Administración", "Licenciatura en Marketing", "Licenciatura en Negocios Digitales", "Licenciatura en Comercio Internacional", "Licenciatura en Recursos Humanos", "Licenciatura en Finanzas", "Licenciatura en Turismo y Hotelería", "Contador Público"], "https://www.palermo.edu/carreras-de-grado/"),
  ...add("up", "up-ingenieria", ["Ingeniería en Informática", "Ingeniería Industrial", "Licenciatura en Inteligencia Artificial", "Licenciatura en Ciencia de Datos", "Licenciatura en Ciberseguridad", "Licenciatura en Tecnología de la Información"], "https://www.palermo.edu/carreras-de-grado/"),
  ...add("up", "up-derecho", ["Abogacía", "Licenciatura en Relaciones Internacionales", "Licenciatura en Ciencia Política"], "https://www.palermo.edu/carreras-de-grado/"),
  ...add("up", "up-arquitectura", ["Arquitectura"], "https://www.palermo.edu/carreras-de-grado/"),
  ...add("up", "up-sociales", ["Licenciatura en Psicología", "Licenciatura en Comunicación", "Licenciatura en Periodismo", "Licenciatura en Humanidades y Ciencias Sociales"], "https://www.palermo.edu/carreras-de-grado/"),

  ...add("usal", "usal-psicologia", ["Licenciatura en Psicología", "Licenciatura en Psicopedagogía"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-sociales", ["Licenciatura en Ciencias de la Comunicación", "Licenciatura en Ciencia Política", "Licenciatura en Relaciones Internacionales", "Licenciatura en Sociología"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-economicas", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Comercialización", "Licenciatura en Comercio Internacional", "Licenciatura en Economía", "Licenciatura en Recursos Humanos"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-derecho", ["Abogacía"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-medicina", ["Medicina", "Licenciatura en Enfermería", "Licenciatura en Fonoaudiología", "Licenciatura en Nutrición"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-ingenieria", ["Ingeniería en Informática", "Ingeniería Industrial", "Ingeniería Agronómica"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-humanidades", ["Licenciatura en Turismo", "Licenciatura en Historia", "Licenciatura en Geografía"], "https://www.usal.edu.ar/carreras-grado"),
  ...add("usal", "usal-letras", ["Licenciatura en Filosofía", "Licenciatura en Letras", "Licenciatura en Estudios Orientales"], "https://www.usal.edu.ar/carreras-grado"),

  ...add("itba", "itba-ingenieria", ["Ingeniería Bioquímica", "Ingeniería Eléctrica", "Ingeniería Electrónica", "Ingeniería en Petróleo", "Ingeniería Informática", "Ingeniería Industrial", "Ingeniería Mecánica", "Ingeniería Naval", "Ingeniería Química", "Licenciatura en Analítica Empresarial y Social", "Licenciatura en Ciencia de Datos"], "https://www.itba.edu.ar/grado"),
  ...add("itba", "itba-negocios", ["Licenciatura en Administración y Sistemas", "Licenciatura en Negocios y Tecnología"], "https://www.itba.edu.ar/grado"),

  ...add("siglo21", "siglo21-negocios", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Comercialización", "Licenciatura en Comercio Internacional", "Licenciatura en Gestión de Recursos Humanos", "Licenciatura en Marketing", "Licenciatura en Finanzas"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),
  ...add("siglo21", "siglo21-derecho", ["Abogacía", "Licenciatura en Relaciones Internacionales", "Licenciatura en Ciencia Política", "Licenciatura en Criminología y Seguridad"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),
  ...add("siglo21", "siglo21-tecnologia", ["Ingeniería en Software", "Licenciatura en Informática", "Licenciatura en Ciencia de Datos", "Licenciatura en Inteligencia Artificial y Robótica"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),
  ...add("siglo21", "siglo21-comunicacion", ["Licenciatura en Comunicación", "Licenciatura en Publicidad", "Licenciatura en Diseño y Animación Digital", "Licenciatura en Diseño Gráfico"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),
  ...add("siglo21", "siglo21-salud", ["Licenciatura en Psicología", "Licenciatura en Nutrición", "Licenciatura en Gestión de Servicios de Salud"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),
  ...add("siglo21", "siglo21-humanas", ["Licenciatura en Educación", "Licenciatura en Gestión Ambiental", "Licenciatura en Turismo"], "https://21.edu.ar/grado-y-pregrado", { modality: "Híbrida" }),

  ...add("uai", "uai-arquitectura", ["Arquitectura", "Licenciatura en Diseño de Interiores"], "https://uai.edu.ar/"),
  ...add("uai", "uai-comunicacion", ["Licenciatura en Diseño de Comunicación Visual", "Licenciatura en Periodismo, Gestión y Producción de Contenidos", "Licenciatura en Publicidad", "Licenciatura en Producción y Realización Audiovisual", "Licenciatura en Relaciones Públicas"], "https://uai.edu.ar/"),
  ...add("uai", "uai-educacion", ["Licenciatura en Ciencias de la Educación", "Licenciatura en Psicopedagogía", "Profesorado Universitario en Ciencias de la Educación", "Profesorado Universitario en Psicopedagogía"], "https://uai.edu.ar/"),
  ...add("uai", "uai-economicas", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Comercialización (Marketing)", "Licenciatura en Comercio Internacional", "Licenciatura en Economía"], "https://uai.edu.ar/"),
  ...add("uai", "uai-derecho", ["Abogacía", "Licenciatura en Ciencia Política y Gobierno", "Licenciatura en Relaciones Internacionales"], "https://uai.edu.ar/"),
  ...add("uai", "uai-medicina", ["Medicina", "Licenciatura en Enfermería", "Licenciatura en Kinesiología y Fisiatría", "Licenciatura en Nutrición", "Licenciatura en Instrumentación Quirúrgica"], "https://uai.edu.ar/"),
  ...add("uai", "uai-psicologia", ["Licenciatura en Psicología", "Licenciatura en Relaciones Humanas"], "https://uai.edu.ar/"),
  ...add("uai", "uai-tecnologia", ["Ingeniería en Sistemas Informáticos", "Licenciatura en Producción de Bioimágenes", "Licenciatura en Matemática Aplicada"], "https://uai.edu.ar/"),
  ...add("uai", "uai-turismo", ["Licenciatura en Gastronomía", "Licenciatura en Hotelería", "Licenciatura en Turismo"], "https://uai.edu.ar/"),

  ...add("unso", "unso-sociales", ["Licenciatura en Administración Pública", "Licenciatura en Educación", "Licenciatura en Trabajo Social"], "https://www.unso.edu.ar/carreras"),
  ...add("unso", "unso-tecnologia", ["Licenciatura en Gestión Ambiental", "Licenciatura en Logística", "Licenciatura en Producción y Gestión de la Innovación"], "https://www.unso.edu.ar/carreras"),

  ...add("cemic", "cemic-salud", ["Medicina", "Licenciatura en Enfermería", "Licenciatura en Nutrición"], "https://www.cemic.edu.ar/educacion-universitaria"),

  ...add("kennedy", "kennedy-humanas", ["Licenciatura en Psicología", "Licenciatura en Comunicación", "Licenciatura en Relaciones Públicas", "Licenciatura en Sociología"], "https://www.kennedy.edu.ar/carreras"),
  ...add("kennedy", "kennedy-economicas", ["Contador Público", "Licenciatura en Administración", "Licenciatura en Comercialización", "Licenciatura en Comercio Internacional"], "https://www.kennedy.edu.ar/carreras"),
  ...add("kennedy", "kennedy-derecho", ["Abogacía", "Licenciatura en Relaciones Internacionales"], "https://www.kennedy.edu.ar/carreras"),
  ...add("kennedy", "kennedy-salud", ["Licenciatura en Nutrición", "Licenciatura en Kinesiología y Fisiatría", "Farmacia"], "https://www.kennedy.edu.ar/carreras"),
  ...add("kennedy", "kennedy-tecnologia", ["Ingeniería en Informática", "Licenciatura en Sistemas"], "https://www.kennedy.edu.ar/carreras"),

  ...add("barcelo", "barcelo-salud", ["Medicina", "Licenciatura en Kinesiología y Fisiatría", "Licenciatura en Nutrición", "Licenciatura en Psicología", "Licenciatura en Enfermería"], "https://www.barcelo.edu.ar/carreras-de-grado"),

  ...add("uces", "uces-empresariales", ["Contador Público", "Licenciatura en Administración de Empresas", "Licenciatura en Comercialización", "Licenciatura en Comercio Exterior", "Licenciatura en Economía", "Licenciatura en Recursos Humanos"], "https://www.uces.edu.ar/carreras-universitarias"),
  ...add("uces", "uces-comunicacion", ["Licenciatura en Comunicación Social", "Licenciatura en Publicidad", "Licenciatura en Diseño Gráfico y Comunicación Visual"], "https://www.uces.edu.ar/carreras-universitarias"),
  ...add("uces", "uces-sociales", ["Licenciatura en Psicología", "Licenciatura en Sociología", "Licenciatura en Filosofía", "Licenciatura en Educación"], "https://www.uces.edu.ar/carreras-universitarias"),
  ...add("uces", "uces-derecho", ["Abogacía", "Licenciatura en Ciencia Política y Gobierno", "Licenciatura en Relaciones Internacionales"], "https://www.uces.edu.ar/carreras-universitarias"),
  ...add("uces", "uces-salud", ["Medicina", "Licenciatura en Nutrición", "Licenciatura en Kinesiología y Fisiatría"], "https://www.uces.edu.ar/carreras-universitarias"),
  ...add("uces", "uces-tecnologia", ["Licenciatura en Sistemas de Información", "Licenciatura en Ciencia de Datos"], "https://www.uces.edu.ar/carreras-universitarias")
];

const areaDescriptions: Record<Area, string> = {
  "Ciencias Económicas y Negocios":
    "Formación orientada a comprender organizaciones, mercados, finanzas, estrategia y toma de decisiones con información.",
  "Ingeniería y Tecnología":
    "Formación para resolver problemas técnicos, diseñar sistemas, mejorar procesos y aplicar ciencia y tecnología a necesidades reales.",
  "Ciencias Sociales":
    "Formación para analizar vínculos sociales, instituciones, cultura, comunicación, trabajo, políticas y transformaciones contemporáneas.",
  "Derecho y Política":
    "Formación centrada en normas, instituciones, poder, argumentación, ciudadanía, justicia y diseño de soluciones públicas o jurídicas.",
  "Salud y Medicina":
    "Formación orientada al cuidado, prevención, diagnóstico, rehabilitación, bienestar y comprensión integral de la salud.",
  "Diseño y Comunicación":
    "Formación para crear mensajes, experiencias, productos visuales, contenidos y estrategias de comunicación para distintos públicos.",
  "Ciencias Exactas":
    "Formación rigurosa en modelos, evidencia, experimentación, análisis cuantitativo y resolución de problemas científicos.",
  Humanidades:
    "Formación orientada a interpretar ideas, textos, lenguajes, historia, cultura, educación y pensamiento crítico.",
  "Arquitectura y Urbanismo":
    "Formación para proyectar espacios, comprender la ciudad, integrar técnica, creatividad, ambiente y formas de habitar."
};

const planTemplates: Record<Area, string[][]> = {
  "Ciencias Económicas y Negocios": [
    ["Administración general", "Matemática aplicada", "Economía", "Comunicación profesional"],
    ["Contabilidad y finanzas", "Marketing", "Estadística", "Derecho empresarial"],
    ["Estrategia", "Operaciones", "Investigación de mercados", "Gestión de personas"],
    ["Proyecto integrador", "Emprendimientos", "Analítica de negocios", "Práctica profesional"]
  ],
  "Ingeniería y Tecnología": [
    ["Matemática", "Física", "Introducción a la ingeniería", "Programación o herramientas técnicas"],
    ["Algoritmos y datos", "Sistemas y procesos", "Estadística", "Diseño aplicado"],
    ["Arquitectura de soluciones", "Gestión de proyectos", "Laboratorio integrador", "Electiva tecnológica"],
    ["Proyecto profesional", "Calidad y seguridad", "Innovación", "Práctica supervisada"],
    ["Trabajo final", "Gestión tecnológica", "Especialización aplicada", "Seminario profesional"]
  ],
  "Ciencias Sociales": [
    ["Introducción a las ciencias sociales", "Historia social", "Metodología", "Comunicación académica"],
    ["Teoría social", "Estadística social", "Instituciones", "Análisis de casos"],
    ["Investigación aplicada", "Políticas públicas", "Organizaciones", "Taller de intervención"],
    ["Proyecto final", "Ética profesional", "Práctica de campo", "Seminario de integración"]
  ],
  "Derecho y Política": [
    ["Introducción al derecho o la política", "Historia institucional", "Teoría del Estado", "Lectura y argumentación"],
    ["Derecho constitucional", "Economía política", "Metodología", "Instituciones comparadas"],
    ["Derecho privado o políticas públicas", "Derecho público", "Análisis de casos", "Negociación"],
    ["Práctica profesional", "Ética", "Seminario avanzado", "Proyecto integrador"],
    ["Clínica jurídica o política", "Electivas", "Trabajo final", "Inserción profesional"]
  ],
  "Salud y Medicina": [
    ["Biología", "Anatomía", "Química", "Introducción a la salud"],
    ["Fisiología", "Salud pública", "Psicología o ciencias humanas", "Prácticas iniciales"],
    ["Evaluación clínica", "Nutrición o farmacología", "Investigación", "Práctica supervisada"],
    ["Intervenciones profesionales", "Ética en salud", "Gestión sanitaria", "Rotaciones o talleres"],
    ["Práctica clínica avanzada", "Trabajo final", "Prevención comunitaria", "Seminario profesional"],
    ["Rotación final", "Integración clínica", "Práctica obligatoria", "Preparación profesional"]
  ],
  "Diseño y Comunicación": [
    ["Lenguaje visual", "Comunicación", "Taller proyectual", "Cultura contemporánea"],
    ["Diseño y producción", "Narrativas", "Tecnología aplicada", "Investigación de audiencias"],
    ["Estrategia de marca", "Laboratorio de medios", "Proyecto integrador", "Electiva creativa"],
    ["Portfolio", "Práctica profesional", "Gestión de proyectos", "Trabajo final"]
  ],
  "Ciencias Exactas": [
    ["Matemática", "Química o física", "Introducción a la disciplina", "Laboratorio"],
    ["Modelos y métodos", "Estadística", "Programación científica", "Experimentación"],
    ["Investigación aplicada", "Teoría avanzada", "Laboratorio integrador", "Electiva"],
    ["Proyecto final", "Seminario científico", "Práctica profesional", "Comunicación de resultados"]
  ],
  Humanidades: [
    ["Introducción a la disciplina", "Historia cultural", "Lectura y escritura académica", "Metodología"],
    ["Teoría y análisis", "Lenguajes", "Investigación", "Seminario temático"],
    ["Problemas contemporáneos", "Taller de producción", "Didáctica o crítica", "Electiva"],
    ["Proyecto final", "Práctica profesional", "Seminario de integración", "Trabajo de campo"]
  ],
  "Arquitectura y Urbanismo": [
    ["Taller de proyecto", "Representación", "Historia de la arquitectura", "Matemática y estructuras"],
    ["Proyecto arquitectónico", "Tecnología constructiva", "Urbanismo", "Morfología"],
    ["Instalaciones", "Estructuras", "Proyecto urbano", "Ambiente y sustentabilidad"],
    ["Dirección de obra", "Proyecto integral", "Gestión profesional", "Electiva"],
    ["Proyecto final", "Práctica profesional", "Seminario urbano", "Integración técnica"]
  ]
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inferArea(seed: CareerSeed): Area {
  const text = `${seed.name} ${seed.facultyId}`.toLowerCase();
  if (text.includes("arquitectura") || text.includes("urbanismo") || text.includes("paisaje")) return "Arquitectura y Urbanismo";
  if (text.includes("diseño") || text.includes("comunicación") || text.includes("publicidad") || text.includes("periodismo") || text.includes("audiovisual") || text.includes("fotografía") || text.includes("cine") || text.includes("televisión")) return "Diseño y Comunicación";
  if (text.includes("medicina") || text.includes("psicología") || text.includes("psicopedagogía") || text.includes("enfermería") || text.includes("nutrición") || text.includes("kinesiología") || text.includes("farmacia") || text.includes("fonoaudiología") || text.includes("odontología") || text.includes("bioimágenes") || text.includes("veterinaria") || text.includes("instrumentación")) return "Salud y Medicina";
  if (text.includes("abogacía") || text.includes("derecho") || text.includes("política") || text.includes("relaciones internacionales") || text.includes("criminología") || text.includes("gobierno") || text.includes("jurídicas")) return "Derecho y Política";
  if (text.includes("ingeniería") || text.includes("informática") || text.includes("sistemas") || text.includes("software") || text.includes("datos") || text.includes("inteligencia artificial") || text.includes("tecnología") || text.includes("robótica") || text.includes("computación")) return "Ingeniería y Tecnología";
  if (text.includes("matemática") || text.includes("física") || text.includes("química") || text.includes("biológicas") || text.includes("geológicas") || text.includes("atmósfera") || text.includes("oceanografía")) return "Ciencias Exactas";
  if (text.includes("administración") || text.includes("contador") || text.includes("economía") || text.includes("marketing") || text.includes("comercialización") || text.includes("comercio") || text.includes("finanzas") || text.includes("negocios") || text.includes("recursos humanos") || text.includes("actuario")) return "Ciencias Económicas y Negocios";
  if (text.includes("sociología") || text.includes("trabajo social") || text.includes("turismo") || text.includes("hotelería") || text.includes("relaciones del trabajo") || text.includes("ciencias sociales")) return "Ciencias Sociales";
  return "Humanidades";
}

function inferDuration(name: string, area: Area): number {
  const text = name.toLowerCase();
  if (text.includes("medicina")) return 6;
  if (area === "Arquitectura y Urbanismo" || area === "Ingeniería y Tecnología" || area === "Salud y Medicina") return 5;
  if (text.includes("abogacía") || text.includes("bioquímica") || text.includes("farmacia") || text.includes("veterinaria") || text.includes("odontología")) return 5;
  return 4;
}

function inferDegreeTitle(name: string): string {
  if (name === "Medicina") return "Médico/a";
  if (name === "Arquitectura") return "Arquitecto/a";
  if (name === "Abogacía") return "Abogado/a";
  if (name === "Veterinaria") return "Veterinario/a";
  if (name === "Odontología") return "Odontólogo/a";
  if (name === "Farmacia") return "Farmacéutico/a";
  if (name === "Bioquímica") return "Bioquímico/a";
  if (name === "Contador Público") return "Contador/a Público/a";
  if (name.startsWith("Ingeniería ")) return name.replace("Ingeniería", "Ingeniero/a");
  if (name.startsWith("Diseño ")) return name.replace("Diseño", "Diseñador/a en");
  if (name.startsWith("Profesorado")) return "Profesor/a";
  if (name.startsWith("Traductorado")) return "Traductor/a Público/a";
  if (name.startsWith("Actuario")) return "Actuario/a";
  if (name.startsWith("Licenciatura en ")) return name.replace("Licenciatura en ", "Licenciado/a en ");
  if (name.startsWith("Bachelor")) return "Bachelor";
  return `Título de grado en ${name}`;
}

function buildPlan(area: Area, durationYears: number): StudyPlanYear[] {
  const template = planTemplates[area];
  return Array.from({ length: Math.min(durationYears, template.length) }, (_, index) => ({
    year: `${index + 1}° año`,
    subjects: template[index]
  }));
}

function buildObjectives(area: Area): string[] {
  return [
    "Comprender los fundamentos centrales de la disciplina y su aplicación en contextos reales.",
    "Desarrollar criterio profesional para analizar problemas, tomar decisiones y comunicar soluciones.",
    "Integrar teoría, práctica y herramientas actuales de acuerdo con la orientación de la carrera."
  ].map((objective, index) => (index === 0 ? objective.replace("disciplina", area.toLowerCase()) : objective));
}

function buildProfile(area: Area): string[] {
  const base = {
    "Ciencias Económicas y Negocios": ["Interés por empresas, mercados, números y toma de decisiones.", "Ganas de organizar, analizar y pensar estrategias."],
    "Ingeniería y Tecnología": ["Interés por tecnología, matemática, sistemas y resolución de problemas.", "Paciencia para probar, corregir y mejorar soluciones."],
    "Ciencias Sociales": ["Curiosidad por la sociedad, las instituciones y los cambios culturales.", "Gusto por investigar, leer y debatir con evidencia."],
    "Derecho y Política": ["Interés por normas, justicia, política, debate y argumentación.", "Capacidad para leer, analizar casos y defender posiciones."],
    "Salud y Medicina": ["Vocación de servicio e interés por el cuidado de las personas.", "Constancia para estudiar contenidos científicos y prácticos."],
    "Diseño y Comunicación": ["Interés por crear mensajes, imágenes, contenidos y experiencias.", "Sensibilidad visual, curiosidad cultural y ganas de producir."],
    "Ciencias Exactas": ["Gusto por la lógica, la evidencia, los modelos y la experimentación.", "Interés por investigar y trabajar con problemas complejos."],
    Humanidades: ["Interés por ideas, historia, lenguajes, textos y cultura.", "Ganas de leer, escribir, interpretar y construir pensamiento crítico."],
    "Arquitectura y Urbanismo": ["Interés por espacios, ciudad, diseño, dibujo y construcción.", "Capacidad para combinar creatividad, técnica y trabajo de taller."]
  } satisfies Record<Area, string[]>;

  return base[area];
}

function buildJobs(area: Area): string[] {
  const jobs = {
    "Ciencias Económicas y Negocios": ["Empresas y organizaciones", "Consultoría", "Finanzas, marketing u operaciones", "Emprendimientos"],
    "Ingeniería y Tecnología": ["Industria y tecnología", "Desarrollo de software o procesos", "Consultoría técnica", "Gestión de proyectos"],
    "Ciencias Sociales": ["Organizaciones sociales", "Investigación", "Sector público", "Comunicación o gestión institucional"],
    "Derecho y Política": ["Estudios jurídicos", "Sector público", "Empresas", "Consultoría política o institucional"],
    "Salud y Medicina": ["Clínicas y hospitales", "Consultorios", "Prevención y comunidad", "Investigación o gestión sanitaria"],
    "Diseño y Comunicación": ["Agencias y estudios", "Medios y contenidos", "Producto digital", "Comunicación institucional"],
    "Ciencias Exactas": ["Investigación", "Laboratorios", "Datos y tecnología", "Docencia o industria"],
    Humanidades: ["Docencia", "Investigación", "Gestión cultural", "Editoriales, archivos o instituciones"],
    "Arquitectura y Urbanismo": ["Estudios de arquitectura", "Construcción", "Urbanismo", "Diseño de espacios"]
  } satisfies Record<Area, string[]>;

  return jobs[area];
}

interface OfficialStudyPlan {
  sourceUrl: string;
  note: string;
  studyPlan: StudyPlanYear[];
}

function planKey(universityId: string, facultyId: string, name: string) {
  return `${universityId}|${facultyId}|${name}`;
}

const officialStudyPlans: Record<string, OfficialStudyPlan> = {
  [planKey("uba", "uba-medicina", "Medicina")]: {
    sourceUrl: "https://www.fmed.uba.ar/sites/default/files/2018-04/PLAN%20DE%20ESTUDIOS.pdf",
    note: "Plan cargado en ciclos según el plan publicado por la Facultad de Medicina de la UBA.",
    studyPlan: [
      {
        year: "Ciclo Básico Común",
        subjects: ["Introducción al Conocimiento de la Sociedad y el Estado", "Introducción al Pensamiento Científico", "Matemática", "Química", "Física e Introducción a la Biofísica", "Biología e Introducción a la Biología Celular"]
      },
      {
        year: "Ciclo Biomédico",
        subjects: ["Anatomía", "Histología, Biología Celular, Embriología y Genética", "Salud Mental", "Bioética I", "Medicina Familiar I", "Fisiología y Biofísica", "Bioquímica Humana", "Inmunología Humana", "Microbiología y Parasitología I", "Microbiología y Parasitología II", "Patología I", "Farmacología I"]
      },
      {
        year: "Ciclo Clínico",
        subjects: ["Medicina A", "Medicina B", "Nutrición", "Diagnóstico por Imágenes", "Dermatología", "Infectología", "Neumonología", "Neurología", "Pediatría", "Psiquiatría", "Obstetricia", "Ginecología", "Cirugía General", "Urología", "Ortopedia y Traumatología", "Oftalmología", "Otorrinolaringología", "Toxicología", "Medicina Legal", "Salud Pública", "Bioética II", "Medicina Familiar II", "Farmacología II", "Patología II"]
      },
      {
        year: "Internado Anual Rotatorio",
        subjects: ["Clínica Médica", "Cirugía", "Tocoginecología", "Pediatría", "Atención Primaria de la Salud", "Salud Mental"]
      }
    ]
  },
  [planKey("uba", "uba-medicina", "Licenciatura en Nutrición")]: {
    sourceUrl: "https://www.fmed.uba.ar/carreras/licenciatura-en-nutricion",
    note: "Plan organizado a partir de la estructura publicada por la carrera de Nutrición de la UBA.",
    studyPlan: [
      {
        year: "Ciclo Básico Común",
        subjects: ["Introducción al Conocimiento de la Sociedad y el Estado", "Introducción al Pensamiento Científico", "Matemática", "Química", "Biología e Introducción a la Biología Celular", "Física e Introducción a la Biofísica"]
      },
      {
        year: "Primer tramo",
        subjects: ["Anatomía", "Fisiología", "Bioquímica de la Nutrición", "Técnica Dietética", "Economía General y Familiar", "Psicosociología de la Alimentación", "Microbiología y Parasitología", "Nutrición Normal"]
      },
      {
        year: "Segundo tramo",
        subjects: ["Evaluación Nutricional", "Educación Alimentaria Nutricional", "Bromatología", "Tecnología de los Alimentos", "Producción de Alimentos", "Administración de Servicios de Alimentación", "Fisiopatología y Dietoterapia del Adulto", "Fisiopatología y Dietoterapia del Niño"]
      },
      {
        year: "Tramo profesional",
        subjects: ["Salud Pública", "Epidemiología", "Nutrición en Salud Pública", "Metodología de la Investigación", "Bioestadística", "Práctica Profesional en Nutrición Clínica", "Práctica Profesional en Servicios de Alimentación", "Práctica Profesional en Salud Pública"]
      }
    ]
  },
  [planKey("uba", "uba-derecho", "Abogacía")]: {
    sourceUrl: "https://www.derecho.uba.ar/academica/carreras_grado/",
    note: "Plan estructurado por CBC, Ciclo Profesional Común y orientaciones, según la organización académica de Derecho UBA.",
    studyPlan: [
      {
        year: "Ciclo Básico Común",
        subjects: ["Introducción al Conocimiento de la Sociedad y el Estado", "Introducción al Pensamiento Científico", "Principios Generales del Derecho Latinoamericano", "Ciencia Política", "Sociología", "Principios de Derechos Humanos y Derecho Constitucional"]
      },
      {
        year: "Ciclo Profesional Común",
        subjects: ["Elementos de Derecho Civil", "Elementos de Derecho Constitucional", "Elementos de Derecho Penal y Procesal Penal", "Derechos Humanos y Garantías", "Elementos de Derecho Procesal Civil y Comercial", "Obligaciones Civiles y Comerciales", "Contratos Civiles y Comerciales", "Elementos de Derechos Reales", "Elementos de Derecho Administrativo", "Elementos de Derecho Comercial", "Elementos de Derecho del Trabajo y de la Seguridad Social", "Elementos de Derecho Internacional Público", "Familia y Sucesiones", "Finanzas Públicas y Derecho Tributario", "Sociedades Civiles y Comerciales", "Teoría General del Derecho", "Derecho Internacional Privado"]
      },
      {
        year: "Ciclo Profesional Orientado",
        subjects: ["Asignaturas obligatorias de orientación", "Asignaturas optativas de orientación", "Práctica Profesional", "Departamento de Práctica Profesional", "Trabajo de investigación o seminario final"]
      }
    ]
  },
  [planKey("uba", "uba-economicas", "Licenciatura en Administración")]: {
    sourceUrl: "https://codigo.rec.uba.ar/libro_iv__economicas/libro-iv-facultad-de-cs-economicas/titulo-4-licenciatura-en-administracion/capitulo-a-plan-2024/",
    note: "Plan 2024 cargado por ciclos, basado en la publicación normativa del Código UBA.",
    studyPlan: [
      {
        year: "Ciclo General",
        subjects: ["Álgebra", "Análisis Matemático I", "Historia Económica y Social General", "Economía", "Sociología de las Organizaciones", "Administración General", "Contabilidad", "Instituciones del Derecho Privado", "Tecnología de la Información", "Estadística", "Macroeconomía y Política Económica", "Inteligencia Artificial Generativa", "Taller de Habilidades Directivas"]
      },
      {
        year: "Ciclo Profesional",
        subjects: ["Derecho Societario", "Microeconomía y Gestión de Datos", "Cálculo Financiero", "Sistemas Administrativos", "Gestión y Costos", "Administración del Sector Público", "Administración Financiera", "Administración de Personal", "Administración de la Producción", "Comercialización", "Administración Estratégica", "Business Analytics", "Análisis de Estados Contables", "Gestión y Tecnologías Aplicadas", "Gestión Estratégica de la Innovación", "Negociación", "Ética Empresarial", "Taller de Práctica Profesional"]
      },
      {
        year: "Trayecto orientado y cierre",
        subjects: ["Materias electivas u orientadas", "Trabajo Final de Carrera"]
      }
    ]
  },
  [planKey("uba", "uba-economicas", "Licenciatura en Economía")]: {
    sourceUrl: "https://codigo.rec.uba.ar/libro_iv__economicas/libro-iv-facultad-de-cs-economicas/titulo-2-licenciatura-en-economia/capitulo-a-plan-2024/",
    note: "Plan 2024 cargado por ciclos, basado en la publicación normativa del Código UBA.",
    studyPlan: [
      {
        year: "Ciclo General",
        subjects: ["Álgebra", "Análisis Matemático I", "Historia Económica y Social General", "Economía", "Sociología de las Organizaciones", "Administración General", "Contabilidad", "Instituciones del Derecho Privado", "Tecnología de la Información", "Estadística", "Macroeconomía y Política Económica", "Inteligencia Artificial Generativa", "Taller de Habilidades Directivas"]
      },
      {
        year: "Ciclo Profesional",
        subjects: ["Historia Económica y Social Argentina", "Microeconomía I", "Macroeconomía I", "Estadística II", "Matemática para Economistas", "Economía Matemática", "Econometría", "Microeconomía II", "Macroeconomía II", "Crecimiento Económico", "Finanzas Públicas", "Dinero, Crédito y Bancos", "Estructura Social Argentina", "Estructura Económica Argentina", "Economía Internacional", "Historia del Pensamiento Económico"]
      },
      {
        year: "Trayecto orientado y cierre",
        subjects: ["Materias electivas u orientadas", "Seminario de Integración y Aplicación", "Trabajo Final de Carrera"]
      }
    ]
  },
  [planKey("utn", "utn-frba", "Ingeniería en Sistemas de Información")]: {
    sourceUrl: "https://www.frba.utn.edu.ar/sistemas/plan-de-estudios/",
    note: "Plan organizado según el plan publicado por UTN FRBA para Ingeniería en Sistemas de Información.",
    studyPlan: [
      {
        year: "1° año",
        subjects: ["Análisis Matemático I", "Álgebra y Geometría Analítica", "Física I", "Química", "Ingeniería y Sociedad", "Sistemas y Procesos de Negocio", "Algoritmos y Estructuras de Datos", "Arquitectura de Computadoras", "Lógica y Estructuras Discretas"]
      },
      {
        year: "2° año",
        subjects: ["Análisis Matemático II", "Física II", "Probabilidad y Estadística", "Sintaxis y Semántica de los Lenguajes", "Paradigmas de Programación", "Análisis de Sistemas de Información", "Sistemas Operativos", "Inglés I"]
      },
      {
        year: "3° año",
        subjects: ["Matemática Superior", "Economía", "Diseño de Sistemas de Información", "Gestión de Datos", "Redes de Datos", "Comunicaciones", "Desarrollo de Software", "Inglés II"]
      },
      {
        year: "4° año",
        subjects: ["Investigación Operativa", "Simulación", "Tecnologías para la Automatización", "Administración de Recursos", "Legislación", "Ingeniería y Calidad de Software", "Gestión Gerencial", "Seguridad en los Sistemas de Información"]
      },
      {
        year: "5° año",
        subjects: ["Inteligencia Artificial", "Ciencia de Datos", "Sistemas de Gestión", "Proyecto Final", "Práctica Profesional Supervisada", "Asignaturas electivas"]
      }
    ]
  },
  [planKey("uade", "uade-economicas", "Licenciatura en Marketing")]: {
    sourceUrl: "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-marketing/",
    note: "Plan cargado con estructura anual representativa de la carrera publicada por UADE.",
    studyPlan: [
      {
        year: "1° año",
        subjects: ["Administración General", "Introducción al Marketing", "Matemática", "Comunicación Oral y Escrita", "Contabilidad", "Microeconomía", "Estadística", "Comportamiento del Consumidor"]
      },
      {
        year: "2° año",
        subjects: ["Marketing Estratégico", "Investigación de Mercados", "Costos y Presupuestos", "Macroeconomía", "Derecho Empresarial", "Canales de Distribución", "Marketing Digital", "Inglés"]
      },
      {
        year: "3° año",
        subjects: ["Gestión de Producto", "Branding", "Comunicación Integrada de Marketing", "Trade Marketing", "Analítica de Marketing", "Marketing de Servicios", "E-commerce", "Optativa"]
      },
      {
        year: "4° año",
        subjects: ["Plan de Marketing", "Dirección Comercial", "Marketing Internacional", "Ética y Responsabilidad Social", "Práctica Profesional", "Trabajo Final", "Optativas de profundización"]
      }
    ]
  },
  [planKey("uade", "uade-ingenieria", "Ingeniería en Informática")]: {
    sourceUrl: "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/ingenieria-en-informatica/",
    note: "Plan cargado con estructura anual representativa de la carrera publicada por UADE.",
    studyPlan: [
      {
        year: "1° año",
        subjects: ["Introducción a la Programación", "Matemática", "Álgebra", "Arquitectura de Computadoras", "Sistemas de Información", "Física", "Comunicación Oral y Escrita", "Inglés"]
      },
      {
        year: "2° año",
        subjects: ["Programación Orientada a Objetos", "Estructuras de Datos", "Bases de Datos", "Análisis Matemático", "Probabilidad y Estadística", "Sistemas Operativos", "Redes", "Ingeniería de Software"]
      },
      {
        year: "3° año",
        subjects: ["Diseño de Aplicaciones", "Arquitectura de Software", "Gestión de Proyectos", "Seguridad Informática", "Sistemas Distribuidos", "Inteligencia Artificial", "Gestión de Datos", "Optativa"]
      },
      {
        year: "4° año",
        subjects: ["Desarrollo de Soluciones Empresariales", "Calidad de Software", "Cloud Computing", "Data Analytics", "Legislación Informática", "Práctica Profesional", "Trabajo Final", "Optativas de especialización"]
      },
      {
        year: "5° año",
        subjects: ["Proyecto Final de Ingeniería", "Dirección de Proyectos Tecnológicos", "Arquitecturas Avanzadas", "Innovación y Emprendimientos", "Práctica Profesional Supervisada"]
      }
    ]
  }
};

export const careers: Career[] = careerSeeds.map((seed) => {
  const area = seed.area ?? inferArea(seed);
  const durationYears = seed.durationYears ?? inferDuration(seed.name, area);
  const officialSourceUrl = seed.sourceUrl ?? universities.find((university) => university.id === seed.universityId)?.officialProgramsUrl ?? "";
  const officialPlan = officialStudyPlans[planKey(seed.universityId, seed.facultyId, seed.name)];

  return {
    id: `${seed.universityId}-${slugify(seed.facultyId)}-${slugify(seed.name)}`,
    name: seed.name,
    universityId: seed.universityId,
    facultyId: seed.facultyId,
    degreeTitle: inferDegreeTitle(seed.name),
    area,
    durationYears,
    modality: seed.modality ?? "Presencial",
    description: areaDescriptions[area],
    objectives: buildObjectives(area),
    idealStudentProfile: buildProfile(area),
    jobOpportunities: buildJobs(area),
    studyPlan: officialPlan?.studyPlan ?? [],
    studyPlanVerified: Boolean(officialPlan),
    studyPlanNote: officialPlan?.note,
    sourcePending: !officialPlan,
    officialSourceUrl: officialPlan?.sourceUrl ?? officialSourceUrl
  };
});
