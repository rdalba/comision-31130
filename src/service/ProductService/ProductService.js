const ProductService = () => {
    
    //Los atributos del API deben coincidir con el Item.js
    //const url = "https://mocki.io/v1/fdd3e176-2f65-4afe-9fd8-3afe07206a66";
    //const url = "https://mocki.io/v1/0a1656f9-5aa9-4b10-a79f-6aab9825d2af";
    //const url = "https://mocki.io/v1/f523d0b8-eea7-42a1-9467-57781bb01334";
    const url = "https://mocki.io/v1/7bd0f7c1-43d5-4232-a276-268278fde9d3";
    return {
        get: async () => await fetchData(url),
    }

}

async function fetchData(req) {
    const response = await fetch(req)
    const pepe = await response.json()
    console.log (pepe)
    return pepe
    
}

export {ProductService}