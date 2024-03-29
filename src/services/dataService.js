import axios from "axios";

const catalog = [
  {
    title: "Core",
    price: 1200.0,
    category: "Kite",
    image: "core-xr7-kite.jpeg",
  },
  {
    title: "Reedin",
    price: 935.0,
    category: "Kite",
    image: "reedin.jpeg",
  },
  {
    title: "North",
    price: 1035.0,
    category: "Kite",
    image: "carve.png",
  },
  {
    title: "Slingshot",
    price: 1015.0,
    category: "Kite",
    image: "slingshot.jpeg",
  },
  {
    title: "Liquid Force",
    price: 550.0,
    category: "Kite",
    image: "LF.jpeg",
  },
  {
    title: "Ozone",
    price: 987.0,
    category: "Kite",
    image: "ozone.jpeg",
  },
  {
    title: "Ocean Rodeo",
    price: 935.0,
    category: "Kite",
    image: "oceanRodeo.jpeg",
  },
];

// create the service:
class DataService {
  async getCatalog() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
  }
}
export default DataService;
