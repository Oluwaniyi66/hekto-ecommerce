import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";

export const HektoContext = createContext();

const HektoContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [Product, setProduct] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [top, setTop] = useState([]);
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);
  const [executive, setExecutive] = useState([]);
  const [isloading, setisloading] = useState(true);
  const {items, addItem} = useCart();

  const checkAndNotify = (product) => {
    console.log('hdhdhd',product)
    const checkItem = (item)=>{
      return item.id === product.id ;
    };
    const inCart = items.findIndex(checkItem);

    if(inCart>-1){
      toast.warn("product already in cart","warn")
    } else {
      addItem(product);
      toast.success("product has been added to cart","succes")
    }
  };

  //this is a get request and its collecting one argument
  const getProducts = () => {
    fetch("http://localhost:8000/api/all_products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setisloading(false);

        console.log(json);
      });
  };

  const singleProduct = (id) => {
  
    fetch(`http://localhost:8000/api/single_product/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.product);
        setisloading(false);

        console.log('json',json);
      });

  }
  //this is another get request and its collecting one arguement

  const getStatus = () => {
    fetch("http://localhost:8000/api/all_status")
      .then((response) => response.json())
      .then((json) => {
        setFeatured(json.featured);
        setTop(json.top);
        setTrending(json.trending);
        setLatest(json.latest);
        setExecutive(json.executive);
        setisloading(false);

        console.log(json);
      });
  };
  useEffect(() => {
    getProducts(); getStatus();
  }, []);

  const bank = [products, setProducts, isloading, setisloading,featured, setFeatured,top, setTop,
    latest, setLatest,trending, setTrending,executive, setExecutive,Product,setProduct,singleProduct,checkAndNotify];
  return <HektoContext.Provider value={bank}>{children}</HektoContext.Provider>;
};

export default HektoContextProvider;
