import { setFetchData } from "./reducer";

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const responce = await fetch("https://randomuser.me/api/?results=10");
      const json = await responce.json();
      setTimeout(() => {
        dispatch(setFetchData(json));
      }, 500);
    } catch (e) {
      console.log(e.message);
    }
  };
};
