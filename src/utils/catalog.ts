import { careers, universities } from "../data/academicData";
import type { Career, Faculty, University } from "../types";

export function getUniversityById(id?: string): University | undefined {
  return universities.find((university) => university.id === id);
}

export function getCareerById(id?: string): Career | undefined {
  return careers.find((career) => career.id === id);
}

export function getFacultyById(universityId: string, facultyId: string): Faculty | undefined {
  return getUniversityById(universityId)?.faculties.find((faculty) => faculty.id === facultyId);
}

export function getCareersByUniversity(universityId: string): Career[] {
  return careers.filter((career) => career.universityId === universityId);
}

export function getCareersByFaculty(facultyId: string): Career[] {
  return careers.filter((career) => career.facultyId === facultyId);
}

export function getUniversityCareerCount(universityId: string): number {
  return getCareersByUniversity(universityId).length;
}

export function getCareerMeta(career: Career) {
  const university = getUniversityById(career.universityId);
  const faculty = getFacultyById(career.universityId, career.facultyId);

  return {
    university,
    faculty
  };
}
