export const BACK_URL = "http://localhost:5220/";

export const getSuggestUrl = (promt, role) =>
  `api/suggests/users/?query=${promt}&role=${role}`;

export const GET_PATIENTS = "api/users/patients";
export const GET_DOCTORS = "api/users/doctors";
export const GET_DISEASE = "api/diseases";

export const MODEL_MODE = {
  Add: 0,
  Edit: 1,
  View: 2,
};

export const ROLE = {
  Patient: 1,
  Doctor: 2,
};
