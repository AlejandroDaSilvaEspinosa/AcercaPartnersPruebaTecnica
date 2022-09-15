import axios from "axios";

export default async function getCarInventory(page = 0, pageSize = 25) {
  const { data } = await axios.get("/api/CarInventory/GetCarInventoryPaged", {
    params: { page, pageSize },
  });
  return data;
}
