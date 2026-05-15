export type UniversityType = "Pública" | "Privada";

export type Area =
  | "Ciencias Económicas y Negocios"
  | "Ingeniería y Tecnología"
  | "Ciencias Sociales"
  | "Derecho y Política"
  | "Salud y Medicina"
  | "Diseño y Comunicación"
  | "Ciencias Exactas"
  | "Humanidades"
  | "Arquitectura y Urbanismo";

export type Modality = "Presencial" | "Virtual" | "Híbrida";

export interface StudyPlanYear {
  year: string;
  subjects?: string[];
  terms?: Array<{
    term: string;
    subjects: string[];
  }>;
}

export interface OfficialStudyPlan {
  sourceUrl: string;
  note: string;
  studyPlan: StudyPlanYear[];
}

export interface UniversityLocation {
  name: string;
  address: string;
  city: string;
  province: string;
  country: string;
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  universityId: string;
}

export interface University {
  id: string;
  name: string;
  acronym: string;
  type: UniversityType;
  description: string;
  website: string;
  officialProgramsUrl: string;
  logoUrl: string;
  location: UniversityLocation;
  faculties: Faculty[];
}

export interface Career {
  id: string;
  name: string;
  universityId: string;
  facultyId: string;
  degreeTitle: string;
  area: Area;
  durationYears: number;
  modality: Modality;
  description: string;
  objectives: string[];
  idealStudentProfile: string[];
  jobOpportunities: string[];
  studyPlan: StudyPlanYear[];
  studyPlanVerified: boolean;
  studyPlanNote?: string;
  sourcePending: boolean;
  officialSourceUrl: string;
}
