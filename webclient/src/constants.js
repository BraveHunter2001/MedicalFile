export const BACK_URL = "http://localhost:5220/";

export const getSuggestUrl = (promt, role) =>
  `api/suggests/users/?query=${promt}&role=${role}`;

export const GET_PATIENTS = "api/users/patients";
export const GET_DOCTORS = "api/users/doctors";

export const MODEL_MODE = {
  Edit: 0,
  View: 1,
};

export const ROLE = {
  Patient: 1,
  Doctor: 2,
};
