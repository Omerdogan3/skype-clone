import { contacts } from "../static-data";

export default (state = {contacts}, action) => {
  console.log(contacts);
  return state;
};