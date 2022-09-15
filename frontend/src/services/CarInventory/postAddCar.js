import axios from "axios";

export default async function postAddCar(car) {
  const { data } = await axios.post(`/api/CarInventory/AddCar`, car);
  return data;
}
