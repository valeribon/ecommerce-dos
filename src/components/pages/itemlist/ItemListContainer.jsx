import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Estoy en el SHOP</h1>
    </div>
  );
};
