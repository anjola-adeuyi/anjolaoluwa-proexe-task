import { User } from "../models/userModel";

const convertTableData = (data: User[]) => {
  for (let i = 0; i < data.length; i++) {
    let key = data[i].id;
    
    data[i].key = key;
  }
  return data;
};

export default convertTableData