export const BACK_URL = "http://localhost:5220/";

export const getSuggestUrl = (promt) => `api/test/suggests?query=${promt}`;

export const MODEL_MODE = {
  Edit: 0,
  View: 1,
};
