
import React,{createContext, useState, useEffect} from 'react';

// create context
export const ProductContext=createContext()

const ProductProvider = ({children})=>{
  // product state
  const[products,setProducts]= useState([])
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  // useEffect(()=>{
  //   const fetchProducts=async()=>{
  //     const response = await fetch('https://fakestoreapi.com/products')
  //     const data = await response.json()
  //     setProducts(data)
      
  //   };
  //   fetchProducts();
  // },[])
  return <ProductContext.Provider value={{products,error,loading}}>{children}</ProductContext.Provider>
}




export default ProductProvider;
