const catalog = [
  {
    title: "Core",
    price: 1200.0,
    category: "Kite",
    image: "public/images/core-xr7-kite.jpeg",
  },
  {
    title: "Reedin",
    price: 935.0,
    category: "Kite",
    image: "public/images/reedin.jpeg",
  },
  {
    title: "North",
    price: 1035.0,
    category: "Kite",
    image: "public/images/carve.png",
  },
  {
    title: "Slingshot",
    price: 1015.0,
    category: "Kite",
    image: "public/images/slingshot.jpeg",
  },
  {
    title: "Liquid Force",
    price: 550.0,
    category: "Kite",
    image: "public/images/LF.jpeg",
  },
  {
    title: "Ozone",
    price: 987.0,
    category: "Kite",
    image: "public/images/ozone.jpeg",
  },
  {
    title: "Ocean Rodeo",
    price: 935.0,
    category: "Kite",
    image: "public/images/oceanRodeo.jpeg",
  },
];

// crete the service:
class DataService {
  getCatalog() {
    // TO DO: get the catalog from server
    return catalog;
  }
}
export default DataService;
