import axios from "axios";

export default async function postUpdateCar(car) {
  const { data } = await axios.put(`/api/CarInventory/UpdateCar`, car);
  return data;
}
