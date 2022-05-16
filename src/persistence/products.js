import {getFirestore, collection, getDocs, query, where, doc, getDoc, updateDoc} from "firebase/firestore"

const ProductsHockey = () => {

    const firestore = getFirestore();
    const dbProducts = collection(firestore, "articulos")

    const getProducts = async (categoryName) => {
        let products;
        if (categoryName !== undefined) {
            products = await query(dbProducts, where("categoryId", "==", categoryName));
        } else {
            products = await dbProducts
        }
        let snapshot = await getDocs(products);
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    }

    const getProductById = async (id) => {
        let reference = doc(dbProducts, id);
        let snapshot = await getDoc(reference);
        if (snapshot.exists()) {
            return {id: snapshot.id, ...snapshot.data()}
        }
    }

    const updateStock = async (products) => {
        for (const product of products) {
            let productSnapshot = await getProductById(product.id);
            let qty = productSnapshot.stock - product.quantity;
            const reference = await doc(dbProducts, product.id);
            await updateDoc(reference, {stock: qty})
        }
    }

    return {
        getProducts, getProductById, updateStock
    }

}

export {ProductsHockey}
