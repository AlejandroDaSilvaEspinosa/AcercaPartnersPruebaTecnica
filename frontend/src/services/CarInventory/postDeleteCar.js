import axios from "axios";

export default async function postDeleteCar(id) {
  const { data } = await axios.delete(`api/CarInventory/DeleteCar?id=${id}`, {
    data: { id },
  });
  return data;
}
