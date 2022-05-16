const ProductService = () => {
  //Los atributos del API deben coincidir con el Item.js
  const url = "https://mocki.io/v1/7bd0f7c1-43d5-4232-a276-268278fde9d3";
  return {
    get: async () => await fetchData(url),
  };
};

async function fetchData(req) {
  const response = await fetch(req);
  const pepe = await response.json();
}

export { ProductService };
