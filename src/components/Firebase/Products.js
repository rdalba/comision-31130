import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"

const ProductsDao = () => {

    const firestore = getFirestore();
    const dbarticulos = collection(firestore, "articulos")

    const getProducts = async (categoryName) => {
        let products;
        if (categoryName !== undefined) {
            products = await query(dbarticulos, where("categoryId", "==", categoryName));
        } else {
            products = await dbarticulos
        }
        let snapshot = await getDocs(products);
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    }

    const getProductById = async (id) => {
        let reference = doc(dbarticulos, id);
        let snapshot = await getDoc(reference);
        if (snapshot.exists()) {
            return {id: snapshot.id, ...snapshot.data()}
        }
    }

    return {
        getProducts, getProductById
    }

}

export {ProductsDao}
