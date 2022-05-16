import {addDoc, collection, getDocs, getFirestore, Timestamp,} from "firebase/firestore";

const OrdersHockey = () => {
  const firestore = getFirestore();
  const dbOrders = collection(firestore, "orders");

  const getOrders = async () => {
    let snapshot = await getDocs(dbOrders);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const saveOrder = async (buyer, items, total) => {
    const order = {
      buyer: buyer,
      items: items,
      date: Timestamp.fromDate(new Date()),
      total: total,
    };
    return await addDoc(dbOrders, order);
  };

  return {
    getOrders,
    saveOrder
  }
}

export {OrdersHockey}
