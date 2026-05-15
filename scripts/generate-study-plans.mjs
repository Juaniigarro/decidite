import { writeFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";

const outputPath = new URL("../src/data/generatedStudyPlans.ts", import.meta.url);

const uadePlans = [
  ["uade", "uade-economicas", "Contador Público", "https://uade.edu.ar/facultad-de-ciencias-economicas/contador-publico/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Administración de Empresas", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-administracion-de-empresas/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Comercio Internacional", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-comercio-internacional/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Economía", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-economia/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Finanzas", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-finanzas/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Marketing", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-marketing/plan-de-estudios/"],
  ["uade", "uade-economicas", "Licenciatura en Recursos Humanos", "https://www.uade.edu.ar/facultad-de-ciencias-economicas/licenciatura-en-recursos-humanos/plan-de-estudios/"],
  ["uade", "uade-ingenieria", "Ingeniería en Informática", "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/ingenieria-en-informatica/plan-de-estudios/"],
  ["uade", "uade-ingenieria", "Ingeniería Industrial", "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/ingenieria-industrial/plan-de-estudios/"],
  ["uade", "uade-ingenieria", "Licenciatura en Biotecnología", "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-biotecnologia/plan-de-estudios/"],
  ["uade", "uade-ingenieria", "Licenciatura en Ciencias de Datos", "https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-inteligencia-artificial-y-ciencia-de-datos/plan-de-estudios/"],
  ["uade", "uade-comunicacion", "Licenciatura en Publicidad", "https://www.uade.edu.ar/facultad-de-comunicacion/licenciatura-en-publicidad/plan-de-estudios/"],
  ["uade", "uade-comunicacion", "Licenciatura en Comunicación Global", "https://www.uade.edu.ar/facultad-de-comunicacion/licenciatura-en-comunicacion-global/plan-de-estudios/"],
  ["uade", "uade-comunicacion", "Licenciatura en Relaciones Públicas e Institucionales", "https://www.uade.edu.ar/facultad-de-comunicacion/licenciatura-en-relaciones-publicas-y-comunicacion-institucional/plan-de-estudios/"],
  ["uade", "uade-diseno", "Arquitectura", "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/arquitectura/plan-de-estudios/"],
  ["uade", "uade-diseno", "Diseño Gráfico", "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/licenciatura-en-diseno-grafico/plan-de-estudios/"],
  ["uade", "uade-diseno", "Diseño Industrial", "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/licenciatura-en-diseno-industrial/plan-de-estudios/"],
  ["uade", "uade-diseno", "Diseño de Interiores", "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/licenciatura-en-diseno-de-interiores/plan-de-estudios/"],
  ["uade", "uade-diseno", "Licenciatura en Diseño Textil e Indumentaria", "https://www.uade.edu.ar/facultad-de-arquitectura-y-diseno/licenciatura-en-diseno-textil-e-indumentaria/plan-de-estudios/"],
  ["uade", "uade-juridicas", "Abogacía", "https://www.uade.edu.ar/facultad-de-ciencias-juridicas-y-sociales/abogacia/plan-de-estudios/"],
  ["uade", "uade-juridicas", "Licenciatura en Gobierno y Relaciones Internacionales", "https://www.uade.edu.ar/facultad-de-ciencias-juridicas-y-sociales/licenciatura-en-gobierno-y-relaciones-internacionales/plan-de-estudios/"],
  ["uade", "uade-salud", "Licenciatura en Gestión de Servicios de Salud", "https://www.uade.edu.ar/facultad-de-ciencias-de-la-salud/licenciatura-en-gestion-de-servicios-de-salud/plan-de-estudios/"],
  ["uade", "uade-salud", "Licenciatura en Nutrición", "https://www.uade.edu.ar/facultad-de-ciencias-de-la-salud/licenciatura-en-nutricion/plan-de-estudios/"],
  ["uade", "uade-salud", "Licenciatura en Psicología", "https://www.uade.edu.ar/facultad-de-ciencias-de-la-salud/licenciatura-en-psicologia/plan-de-estudios/"]
];

const barceloPlans = [
  ["barcelo", "barcelo-salud", "Medicina", "https://www.barcelo.edu.ar/carreras-medicina-plan_estudios"],
  ["barcelo", "barcelo-salud", "Licenciatura en Kinesiología y Fisiatría", "https://www.barcelo.edu.ar/carreras-licenciatura-en-kinesiologia-y-fisiatria-plan_estudios"],
  ["barcelo", "barcelo-salud", "Licenciatura en Nutrición", "https://www.barcelo.edu.ar/carreras-licenciatura-nutricion-plan_estudios"],
  ["barcelo", "barcelo-salud", "Licenciatura en Psicología", "https://www.barcelo.edu.ar/carreras-licenciatura-en-psicologia-plan_estudios"],
  ["barcelo", "barcelo-salud", "Licenciatura en Enfermería", "https://www.barcelo.edu.ar/carreras-licenciatura-en-enfermeria-distancia-plan_estudios"]
];

const ucemaPlans = [
  ["ucema", "ucema-negocios", "Licenciatura en Administración de Empresas", "https://ucema.edu.ar/grado/licenciatura-en-administracion-de-empresas"],
  ["ucema", "ucema-negocios", "Licenciatura en Marketing", "https://ucema.edu.ar/grado/licenciatura-en-marketing"],
  ["ucema", "ucema-negocios", "Licenciatura en Negocios Digitales", "https://ucema.edu.ar/grado/licenciatura-en-negocios-digitales"],
  ["ucema", "ucema-economia-finanzas", "Licenciatura en Economía", "https://ucema.edu.ar/grado/licenciatura-en-economia"],
  ["ucema", "ucema-economia-finanzas", "Licenciatura en Economía Empresarial", "https://ucema.edu.ar/grado/licenciatura-en-economia-empresarial"],
  ["ucema", "ucema-economia-finanzas", "Licenciatura en Finanzas", "https://ucema.edu.ar/grado/licenciatura-en-finanzas"],
  ["ucema", "ucema-economia-finanzas", "Actuario", "https://ucema.edu.ar/carrera-grado/actuario"],
  ["ucema", "ucema-ingenieria", "Ingeniería en Informática", "https://ucema.edu.ar/grado/ingenieria-en-informatica"],
  ["ucema", "ucema-ingenieria", "Ingeniería en Inteligencia Artificial", "https://ucema.edu.ar/carrera-grado/inia"],
  ["ucema", "ucema-ingenieria", "Licenciatura en Analítica de Negocios", "https://ucema.edu.ar/grado/licenciatura-en-analitica-de-negocios"],
  ["ucema", "ucema-sociales", "Abogacía", "https://ucema.edu.ar/grado/abogacia"],
  ["ucema", "ucema-sociales", "Licenciatura en Ciencias Políticas", "https://ucema.edu.ar/grado/licenciatura-en-ciencias-politicas"],
  ["ucema", "ucema-sociales", "Licenciatura en Relaciones Internacionales", "https://ucema.edu.ar/grado/licenciatura-en-relaciones-internacionales"],
  ["ucema", "ucema-sociales", "Bachelor en Artes Liberales y Ciencias", "https://ucema.edu.ar/carrera-grado/ba"]
];

const itbaPlans = [
  ["itba", "itba-negocios", "Licenciatura en Ciencias del Comportamiento", "https://www.itba.edu.ar/grado/licenciatura-en-ciencias-del-comportamiento/"],
  ["itba", "itba-ingenieria", "Licenciatura en Analítica (Data Science)", "https://www.itba.edu.ar/grado/analitica-empresarial-y-social/"],
  ["itba", "itba-ingenieria", "Ingeniería Civil", "https://www.itba.edu.ar/grado/ingenieria-civil/"],
  ["itba", "itba-ingenieria", "Ingeniería Industrial", "https://www.itba.edu.ar/grado/ingenieria-industrial/"],
  ["itba", "itba-ingenieria", "Ingeniería Mecánica", "https://www.itba.edu.ar/grado/ingenieria-mecanica/"],
  ["itba", "itba-ingenieria", "Ingeniería en Petróleo", "https://www.itba.edu.ar/grado/ingenieria-en-petroleo/"],
  ["itba", "itba-ingenieria", "Ingeniería en Biotecnología", "https://www.itba.edu.ar/grado/ingenieria-en-biotecnologia/"],
  ["itba", "itba-negocios", "Licenciatura en Negocios y Tecnología", "https://www.itba.edu.ar/grado/licenciatura-en-negocios-y-tecnologia/"],
  ["itba", "itba-ingenieria", "Ingeniería Electrónica", "https://www.itba.edu.ar/grado/ingenieria-electronica/"],
  ["itba", "itba-ingenieria", "Ingeniería Informática", "https://www.itba.edu.ar/grado/ingenieria-informatica/"],
  ["itba", "itba-ingenieria", "Ingeniería Naval", "https://www.itba.edu.ar/grado/ingenieria-naval/"],
  ["itba", "itba-ingenieria", "Ingeniería Química", "https://www.itba.edu.ar/grado/ingenieria-quimica/"],
  ["itba", "itba-ingenieria", "Bioingeniería", "https://www.itba.edu.ar/grado/bioingenieria/"]
];

const faduPlans = [
  ["uba", "uba-arquitectura", "Arquitectura", "https://test.fadu.uba.ar/grado/carreras/arquitectura/"],
  ["uba", "uba-arquitectura", "Diseño Gráfico", "https://test.fadu.uba.ar/grado/carreras/diseno-grafico/"],
  ["uba", "uba-arquitectura", "Diseño Industrial", "https://test.fadu.uba.ar/grado/carreras/diseno-industrial/"],
  ["uba", "uba-arquitectura", "Diseño de Imagen y Sonido", "https://test.fadu.uba.ar/grado/carreras/diseno-de-imagen-y-sonido/"],
  ["uba", "uba-arquitectura", "Diseño de Indumentaria", "https://test.fadu.uba.ar/grado/carreras/diseno-de-indumentaria/"],
  ["uba", "uba-arquitectura", "Diseño Textil", "https://test.fadu.uba.ar/grado/carreras/diseno-textil/"],
  ["uba", "uba-arquitectura", "Licenciatura en Planificación y Diseño del Paisaje", "https://test.fadu.uba.ar/grado/carreras/licenciatura-en-planificacion-y-diseno-del-paisaje/"]
];

const fiubaPlans = [
  ["uba", "uba-ingenieria", "Ingeniería Civil", "https://www.fi.uba.ar/grado/carreras/ingenieria-civil/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería en Alimentos", "https://www.fi.uba.ar/grado/carreras/ingenieria-en-alimentos/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería en Energía Eléctrica", "https://www.fi.uba.ar/grado/carreras/ingenieria-electricista/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería Electrónica", "https://www.fi.uba.ar/grado/carreras/ingenieria-electronica/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería en Agrimensura", "https://www.fi.uba.ar/grado/carreras/ingenieria-en-agrimensura/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería en Informática", "https://www.fi.uba.ar/grado/carreras/ingenieria-en-informatica/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería en Petróleo", "https://www.fi.uba.ar/grado/carreras/ingenieria-en-petroleo/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería Industrial", "https://www.fi.uba.ar/grado/carreras/ingenieria-industrial/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería Mecánica", "https://www.fi.uba.ar/grado/carreras/ingenieria-mecanica/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería Naval", "https://www.fi.uba.ar/grado/carreras/ingenieria-naval/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Ingeniería Química", "https://www.fi.uba.ar/grado/carreras/ingenieria-quimica/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Licenciatura en Análisis de Sistemas", "https://www.fi.uba.ar/grado/carreras/lic-en-analisis-de-sistemas/plan-de-estudios"],
  ["uba", "uba-ingenieria", "Bioingeniería", "https://www.fi.uba.ar/grado/carreras/bioingenieria/plan-de-estudios"]
];

const uaiFacultyPages = {
  "uai-arquitectura": "https://uai.edu.ar/facultades/arquitectura/",
  "uai-comunicacion": "https://uai.edu.ar/facultades/ciencias-de-la-comunicación/",
  "uai-educacion": "https://uai.edu.ar/facultades/ciencias-de-la-educación-y-psicopedagogía/",
  "uai-economicas": "https://uai.edu.ar/facultades/ciencias-económicas/",
  "uai-derecho": "https://uai.edu.ar/facultades/derecho-y-ciencias-políticas/",
  "uai-medicina": "https://uai.edu.ar/facultades/medicina-y-ciencias-de-la-salud/",
  "uai-psicologia": "https://uai.edu.ar/facultades/psicología-y-relaciones-humanas/",
  "uai-tecnologia": "https://uai.edu.ar/facultades/tecnología-informática/",
  "uai-turismo": "https://uai.edu.ar/facultades/turismo-y-hospitalidad/"
};

const uaiPlans = [
  ["uai", "uai-arquitectura", "Arquitectura"],
  ["uai", "uai-arquitectura", "Licenciatura en Diseño de Interiores"],
  ["uai", "uai-comunicacion", "Licenciatura en Diseño de Comunicación Visual"],
  ["uai", "uai-comunicacion", "Licenciatura en Periodismo, Gestión y Producción de Contenidos"],
  ["uai", "uai-comunicacion", "Licenciatura en Publicidad"],
  ["uai", "uai-comunicacion", "Licenciatura en Producción y Realización Audiovisual"],
  ["uai", "uai-comunicacion", "Licenciatura en Relaciones Públicas"],
  ["uai", "uai-educacion", "Licenciatura en Ciencias de la Educación"],
  ["uai", "uai-educacion", "Licenciatura en Psicopedagogía"],
  ["uai", "uai-educacion", "Profesorado Universitario en Ciencias de la Educación"],
  ["uai", "uai-educacion", "Profesorado Universitario en Psicopedagogía"],
  ["uai", "uai-economicas", "Contador Público"],
  ["uai", "uai-economicas", "Licenciatura en Administración"],
  ["uai", "uai-economicas", "Licenciatura en Comercialización (Marketing)"],
  ["uai", "uai-economicas", "Licenciatura en Comercio Internacional"],
  ["uai", "uai-economicas", "Licenciatura en Economía"],
  ["uai", "uai-derecho", "Abogacía"],
  ["uai", "uai-derecho", "Licenciatura en Ciencia Política y Gobierno"],
  ["uai", "uai-derecho", "Licenciatura en Relaciones Internacionales"],
  ["uai", "uai-medicina", "Medicina"],
  ["uai", "uai-medicina", "Licenciatura en Enfermería"],
  ["uai", "uai-medicina", "Licenciatura en Kinesiología y Fisiatría"],
  ["uai", "uai-medicina", "Licenciatura en Nutrición"],
  ["uai", "uai-medicina", "Licenciatura en Instrumentación Quirúrgica"],
  ["uai", "uai-medicina", "Licenciatura en Producción de Bioimágenes"],
  ["uai", "uai-psicologia", "Licenciatura en Psicología"],
  ["uai", "uai-psicologia", "Licenciatura en Terapia Ocupacional"],
  ["uai", "uai-tecnologia", "Ingeniería en Sistemas Informáticos"],
  ["uai", "uai-turismo", "Licenciatura en Gastronomía"],
  ["uai", "uai-turismo", "Licenciatura en Hotelería"],
  ["uai", "uai-turismo", "Licenciatura en Turismo"]
];

function planKey(universityId, facultyId, name) {
  return `${universityId}|${facultyId}|${name}`;
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&Aacute;/g, "Á")
    .replace(/&Eacute;/g, "É")
    .replace(/&Iacute;/g, "Í")
    .replace(/&Oacute;/g, "Ó")
    .replace(/&Uacute;/g, "Ú")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&Ntilde;/g, "Ñ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#243;/g, "ó")
    .replace(/&#237;/g, "í")
    .replace(/&#225;/g, "á")
    .replace(/&#233;/g, "é")
    .replace(/&#250;/g, "ú");
}

function cleanText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(value) {
  return cleanText(value)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function absolutizeUrl(href, baseUrl) {
  return new URL(decodeHtml(href), baseUrl).toString();
}

async function fetchHtml(url) {
  const urls = [url];
  if (url.startsWith("https://www.uade.edu.ar/")) {
    urls.push(url.replace("https://www.uade.edu.ar/", "https://uade.edu.ar/"));
  }
  if (url.startsWith("https://uade.edu.ar/")) {
    urls.push(url.replace("https://uade.edu.ar/", "https://www.uade.edu.ar/"));
  }

  let lastError;
  for (const candidateUrl of urls) {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const response = await fetch(candidateUrl);
        if (!response.ok) {
          lastError = new Error(`${response.status} ${response.statusText}`);
        } else {
          return response.text();
        }
      } catch (error) {
        lastError = error;
      }

      await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
    }
  }

  throw lastError;
}

async function parseUadePlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const pattern = /<h2[^>]*>(?<year>[^<]+)<\/h2>|<h5[^>]*>(?<term>[^<]+)<\/h5>|<span class="col s10">(?<subject>[^<]+)<\/span>/g;
  const studyPlan = [];
  let currentYear;
  let currentTerm;

  for (const match of html.matchAll(pattern)) {
    if (match.groups.year) {
      const year = cleanText(match.groups.year);
      if (/quer[eé]s|programa de inter[eé]s|datos personales|datos adicionales/i.test(year)) break;
      currentYear = { year, terms: [] };
      studyPlan.push(currentYear);
      currentTerm = undefined;
    }

    if (match.groups.term && currentYear) {
      const term = cleanText(match.groups.term);
      if (/programa de inter[eé]s|datos personales|datos adicionales/i.test(term)) break;
      currentTerm = { term, subjects: [] };
      currentYear.terms.push(currentTerm);
    }

    if (match.groups.subject && currentYear) {
      const subject = cleanText(match.groups.subject);
      if (!subject || /programa de inter[eé]s|datos personales|datos adicionales/i.test(subject)) continue;
      if (!currentTerm) {
        currentTerm = { term: "Materias", subjects: [] };
        currentYear.terms.push(currentTerm);
      }
      currentTerm.subjects.push(subject);
    }
  }

  const cleanedPlan = studyPlan
    .map((year) => ({ ...year, terms: year.terms.filter((term) => term.subjects.length > 0) }))
    .filter((year) => year.terms.length > 0);

  if (cleanedPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde la página oficial de UADE.",
      studyPlan: cleanedPlan
    }
  };
}

async function parseBarceloPlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const pattern = /<button class="button_panel">(?<year>.*?)<\/button>|<p>(?<subject>.*?)<\/p>/g;
  const studyPlan = [];
  let currentYear;

  for (const match of html.matchAll(pattern)) {
    if (match.groups.year) {
      const year = cleanText(match.groups.year);
      if (/examen final|solicit[aá]/i.test(year)) break;
      currentYear = { year, subjects: [] };
      studyPlan.push(currentYear);
    }

    if (match.groups.subject && currentYear) {
      const subject = cleanText(match.groups.subject);
      if (!subject || /carga horaria|correlatividades|solicit[aá] informaci[oó]n|sede buenos aires|sede la rioja|sede santo tom[eé]/i.test(subject)) {
        continue;
      }
      currentYear.subjects.push(subject);
    }
  }

  const cleanedPlan = studyPlan.filter((year) => year.subjects.length > 0);
  if (cleanedPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde la página oficial de Fundación Barceló.",
      studyPlan: cleanedPlan
    }
  };
}

async function getUaiCareerUrl(entry, facultyHtmlCache) {
  const [, facultyId, name] = entry;
  const facultyUrl = uaiFacultyPages[facultyId];
  if (!facultyUrl) throw new Error(`missing UAI faculty page for ${facultyId}`);

  if (!facultyHtmlCache.has(facultyId)) {
    facultyHtmlCache.set(facultyId, await fetchHtml(facultyUrl));
  }

  const normalizedName = normalizeText(name);
  const html = facultyHtmlCache.get(facultyId);
  const facultyPath = new URL(facultyUrl).pathname.replace(/\/$/, "");
  const links = [...html.matchAll(/<a\b[^>]*href="(?<href>[^"]+)"[^>]*>(?<text>[\s\S]*?)<\/a>/g)]
    .map((match) => ({
      href: match.groups.href,
      url: absolutizeUrl(match.groups.href, facultyUrl),
      text: cleanText(match.groups.text)
    }))
    .filter((link) => {
      const linkPath = new URL(link.url).pathname.replace(/\/$/, "");
      return link.href.includes("/facultades/") && linkPath !== facultyPath && normalizeText(link.text) === normalizedName;
    });

  const careerLink = links.find((link) => !/plandeestudios|formulario|solicitud|preinforme/i.test(link.href)) ?? links[0];
  if (!careerLink) throw new Error("career page not found");

  return careerLink.url.replace(/\/?$/, "/");
}

function parseUaiDetailPlan(html) {
  const tokenPattern =
    /<h1>(?<year>.*?)<\/h1>|<h3>(?<term>.*?)<\/h3>|<div class="row rowcontent"[\s\S]*?<div class="medium-5 small-5 columns">\s*<p>(?<subject>[\s\S]*?)<\/p>/g;
  const years = [];
  let currentYear;
  let currentTerm;

  for (const match of html.matchAll(tokenPattern)) {
    if (match.groups.year) {
      const year = cleanText(match.groups.year);
      currentYear = years.find((item) => item.year === year);
      if (!currentYear) {
        currentYear = { year, terms: [] };
        years.push(currentYear);
      }
      currentTerm = undefined;
    }

    if (match.groups.term && currentYear) {
      const term = cleanText(match.groups.term)
        .replace(/^Materias\s+/i, "")
        .replace(/^del\s+/i, "")
        .replace(/^anuales$/i, "Anuales");
      currentTerm = currentYear.terms.find((item) => item.term === term);
      if (!currentTerm) {
        currentTerm = { term, subjects: [] };
        currentYear.terms.push(currentTerm);
      }
    }

    if (match.groups.subject && currentYear) {
      const subject = cleanText(match.groups.subject);
      if (!subject || /asignatura|código|correlativas|carga/i.test(subject)) continue;
      if (!currentTerm) {
        currentTerm = { term: "Materias", subjects: [] };
        currentYear.terms.push(currentTerm);
      }
      currentTerm.subjects.push(subject);
    }
  }

  return years
    .map((year) => ({ ...year, terms: year.terms.filter((term) => term.subjects.length > 0) }))
    .filter((year) => year.terms.length > 0);
}

function linesToStudyPlanItem(year, lines) {
  const terms = [];
  let currentTerm;
  const subjects = [];

  for (const line of lines) {
    if (/semestre|cuatrimestre/i.test(line)) {
      currentTerm = { term: line, subjects: [] };
      terms.push(currentTerm);
      continue;
    }

    if (currentTerm) {
      currentTerm.subjects.push(line);
    } else {
      subjects.push(line);
    }
  }

  if (terms.length > 0) {
    return {
      year,
      terms: terms
        .map((term) => ({ ...term, subjects: term.subjects.filter(Boolean) }))
        .filter((term) => term.subjects.length > 0)
    };
  }

  return { year, subjects };
}

async function parseUcemaPlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const tokenPattern =
    /<h2[^>]*>(?<cycle>[^<]*Ciclo[^<]*)<\/h2>|<h3 class="faqfield-question">(?<year>.*?)<\/h3><div class="faqfield-answer">(?<answer>[\s\S]*?)<\/div>/g;
  const studyPlan = [];
  let currentCycle;

  for (const match of html.matchAll(tokenPattern)) {
    if (match.groups.cycle) {
      currentCycle = cleanText(match.groups.cycle);
      continue;
    }

    if (!currentCycle || !match.groups.year || !match.groups.answer) continue;

    const year = cleanText(match.groups.year);
    const lines = match.groups.answer
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .split("\n")
      .map((line) => cleanText(line))
      .filter((line) => line && !/título intermedio|seleccionando|doble titulación/i.test(line));

    if (lines.length > 0) {
      studyPlan.push(linesToStudyPlanItem(`${currentCycle} · ${year}`, lines));
    }
  }

  if (studyPlan.length === 0) {
    const fallbackPattern = /<h3 class="faqfield-question">(?<year>.*?)<\/h3><div class="faqfield-answer">(?<answer>[\s\S]*?)<\/div>/g;
    for (const match of html.matchAll(fallbackPattern)) {
      const year = cleanText(match.groups.year);
      if (!/año|semestre|ciclo/i.test(year)) continue;

      const lines = match.groups.answer
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/p>/gi, "\n")
        .split("\n")
        .map((line) => cleanText(line))
        .filter((line) => line && !/perfil|profesores|experiencia internacional/i.test(line));

      if (lines.length > 0) {
        studyPlan.push(linesToStudyPlanItem(year, lines));
      }
    }
  }

  const cleanedPlan = studyPlan.filter((item) => item.subjects?.length || item.terms?.length);
  if (cleanedPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde la página oficial de UCEMA.",
      studyPlan: cleanedPlan
    }
  };
}

function parseItbaPdfText(text) {
  const yearLabels = ["PRIMER AÑO", "SEGUNDO AÑO", "TERCER AÑO", "CUARTO AÑO", "QUINTO AÑO", "SEXTO AÑO"];
  const normalizedText = text
    .replace(/\r/g, "")
    .replace(/\t+/g, " ")
    .replace(/AÑO/g, "AÑO\n")
    .replace(/-- \d+ of \d+ --/g, "\n");

  const matches = [...normalizedText.matchAll(/(PRIMER|SEGUNDO|TERCER|CUARTO|QUINTO|SEXTO)\s+AÑO/g)];
  const studyPlan = [];

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const year = match[0].replace(/\s+/g, " ");
    const nextIndex = matches[index + 1]?.index ?? normalizedText.length;
    const segment = normalizedText
      .slice(match.index + match[0].length, nextIndex)
      .split(/(?:^|\n)ELECTIVAS\b/i)[0]
      .split(/(?:^|\n)OTROS REQUISITOS\b/i)[0]
      .split(/(?:^|\n)\/+\s*I N F O/i)[0];
    const subjects = segment
      .split("\n")
      .map((line) => cleanText(line))
      .filter((line) => {
        if (!line) return false;
        if (yearLabels.includes(line)) return false;
        if (/^(plan de estudios|ciclo básico|ciclo profesional|electivas|bloque|\/+|\*+)$/i.test(line)) return false;
        if (/cuatrimestre/i.test(line)) return false;
        if (/^\d+(\s+\d+)*$/.test(line)) return false;
        if (/^[\d\s/.-]+$/.test(line)) return false;
        if (/^(título|duración|modalidad|resolución|reconocimiento oficial|ministerial|ingreso@)/i.test(line)) return false;
        if (/^página \d+/i.test(line)) return false;
        return true;
      });

    if (subjects.length > 0) {
      studyPlan.push({ year: year.charAt(0) + year.slice(1).toLowerCase(), subjects });
    }
  }

  return studyPlan;
}

async function parseItbaPlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const pdfHref = [...html.matchAll(/href="(?<href>[^"]+\.pdf[^"]*)"/gi)]
    .map((match) => decodeHtml(match.groups.href))
    .find((href) => /plan/i.test(href));

  if (!pdfHref) throw new Error("official PDF not found");

  const pdfUrl = absolutizeUrl(pdfHref, url);
  const parser = new PDFParse({ url: pdfUrl });
  const result = await parser.getText();
  await parser.destroy();

  const studyPlan = parseItbaPdfText(result.text);
  if (studyPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde el PDF oficial enlazado por ITBA.",
      studyPlan
    }
  };
}

async function parseFaduPlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const planStart = html.indexOf("Plan de Estudios");
  if (planStart === -1) throw new Error("plan section not found");

  const planEndCandidates = ["Campo Laboral", "Contacto Dirección", "Facultad de Arquitectura"].map((token) => html.indexOf(token, planStart)).filter((index) => index > planStart);
  const section = html.slice(planStart, planEndCandidates.length ? Math.min(...planEndCandidates) : undefined);
  const tokenPattern =
    /<h3[^>]*>\s*<span>(?<year>.*?)<\/span>\s*<\/h3>|<div class="uncode_text_column nombreMateria"[\s\S]*?<p>(?<subject>[\s\S]*?)<\/p>/g;
  const studyPlan = [];
  let currentYear;

  for (const match of section.matchAll(tokenPattern)) {
    if (match.groups.year) {
      const year = cleanText(match.groups.year);
      if (!/ciclo|nivel/i.test(year)) continue;
      currentYear = { year, subjects: [] };
      studyPlan.push(currentYear);
      continue;
    }

    if (match.groups.subject && currentYear) {
      const subject = cleanText(match.groups.subject);
      if (!subject || /materias|promoción|horas semanales/i.test(subject)) continue;
      currentYear.subjects.push(subject);
    }
  }

  const cleanedPlan = studyPlan.filter((year) => year.subjects.length > 0);
  if (cleanedPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde la página oficial de FADU-UBA.",
      studyPlan: cleanedPlan
    }
  };
}

function parseFiubaPdfText(text) {
  const termPattern = /(PRIMER Y SEGUNDO|TERCER|CUARTO|QUINTO|SEXTO|SÉPTIMO|SEPTIMO|OCTAVO|NOVENO|DÉCIMO|DECIMO|UNDÉCIMO|UNDECIMO|DUODÉCIMO|DUODECIMO|\d+°)\s+CUATRIMESTRE/gi;
  const matches = [...text.matchAll(termPattern)];
  const studyPlan = [];

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const term = cleanText(match[0].replace(/\s+/g, " "));
    const nextIndex = matches[index + 1]?.index ?? text.length;
    const segment = text
      .slice(match.index + match[0].length, nextIndex)
      .split(/ASIGNATURAS ELECTIVAS|ASIGNATURAS OPTATIVAS|NORMAS PARA/i)[0]
      .replace(/\r/g, "");

    const subjects = segment
      .split("\n")
      .map((line) => cleanText(line))
      .map((line) => line.replace(/^\d+(?:\.\d+)?\s+/, ""))
      .map((line) => line.match(/^(.+?)\s+\d+\s+\d+\b/)?.[1]?.trim() ?? "")
      .filter((line) => line && !/^total|^código|^asignaturas|^carga horaria/i.test(line));

    if (subjects.length > 0) {
      studyPlan.push({ year: term.charAt(0) + term.slice(1).toLowerCase(), subjects });
    }
  }

  return studyPlan;
}

async function parseFiubaPlan(entry) {
  const [universityId, facultyId, name, url] = entry;
  const html = await fetchHtml(url);
  const pdfHref = [...html.matchAll(/href="(?<href>[^"]+\.pdf[^"]*)"/gi)]
    .map((match) => decodeHtml(match.groups.href))
    .find((href) => /Plan|plan|RESCD|Actualizacion/i.test(href)) ??
    [...html.matchAll(/href="(?<href>[^"]+\.pdf[^"]*)"/gi)].map((match) => decodeHtml(match.groups.href))[0];

  if (!pdfHref) throw new Error("official PDF not found");

  const pdfUrl = absolutizeUrl(pdfHref, url);
  const parser = new PDFParse({ url: pdfUrl });
  const result = await parser.getText();
  await parser.destroy();

  const studyPlan = parseFiubaPdfText(result.text);
  if (studyPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: url,
      note: "Plan de estudios cargado desde la página oficial de FIUBA.",
      studyPlan
    }
  };
}

async function parseUaiPlan(entry, facultyHtmlCache) {
  const [universityId, facultyId, name] = entry;
  const careerUrl = await getUaiCareerUrl(entry, facultyHtmlCache);
  const planPageUrl = new URL("plandeestudios/", careerUrl).toString();
  const planPageHtml = await fetchHtml(planPageUrl);
  const careerCode =
    planPageHtml.match(/planestudio\?carrera=([^&"]+)/)?.[1] ??
    planPageHtml.match(/SolicitudPreinforme\?c=([A-Z0-9]+)-/)?.[1];
  if (!careerCode) throw new Error("UAI plan code not found");

  const iframeUrl = `https://nbapi.uai.edu.ar/tpl/planestudio?carrera=${encodeURIComponent(careerCode)}&db=`;
  const iframeHtml = await fetchHtml(iframeUrl);
  const planId = iframeHtml.match(/<option value="([^"]+)"/)?.[1];
  if (!planId) throw new Error("UAI plan id not found");

  const detailUrl = `https://nbapi.uai.edu.ar/tpl/planestudiodetalle?carrera=${encodeURIComponent(careerCode)}&plan=${encodeURIComponent(planId)}&db=&anio=2026&etapa=0`;
  const studyPlan = parseUaiDetailPlan(await fetchHtml(detailUrl));
  if (studyPlan.length === 0) throw new Error("no subjects parsed");

  return {
    key: planKey(universityId, facultyId, name),
    value: {
      sourceUrl: planPageUrl,
      note: "Plan de estudios cargado desde la página oficial de UAI.",
      studyPlan
    }
  };
}

async function main() {
  const entries = [];
  const failures = [];
  const uaiFacultyHtmlCache = new Map();

  for (const entry of uadePlans) {
    try {
      entries.push(await parseUadePlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of barceloPlans) {
    try {
      entries.push(await parseBarceloPlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of ucemaPlans) {
    try {
      entries.push(await parseUcemaPlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of itbaPlans) {
    try {
      entries.push(await parseItbaPlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of faduPlans) {
    try {
      entries.push(await parseFaduPlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of fiubaPlans) {
    try {
      entries.push(await parseFiubaPlan(entry));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  for (const entry of uaiPlans) {
    try {
      entries.push(await parseUaiPlan(entry, uaiFacultyHtmlCache));
    } catch (error) {
      failures.push(`${entry[2]}: ${error.message}`);
    }
  }

  const body = entries
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(({ key, value }) => `  ${JSON.stringify(key)}: ${JSON.stringify(value, null, 2).replace(/\n/g, "\n  ")}`)
    .join(",\n");

  const file = `import type { OfficialStudyPlan } from "../types";\n\n// Generated from official university plan pages by scripts/generate-study-plans.mjs.\nexport const generatedStudyPlans: Record<string, OfficialStudyPlan> = {\n${body}\n};\n`;

  await writeFile(outputPath, file, "utf8");

  console.log(`Generated ${entries.length} study plans.`);
  if (failures.length) {
    console.log("Skipped:");
    for (const failure of failures) console.log(`- ${failure}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
