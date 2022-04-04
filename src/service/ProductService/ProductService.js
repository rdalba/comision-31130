const ProductService = () => {
    
    //Los atributos del API deben coincidir con el Item.js
    const url = "https://mocki.io/v1/fdd3e176-2f65-4afe-9fd8-3afe07206a66";

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