import { useEffect, useState } from "react";
import { mockProducts } from "../data/products";

const useProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);    commented out due to original API not working

  // Mocking API fetch - original API down
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockProducts);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  /* const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fake-coffee-brand-api.vercel.app/api"
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let productData = await response.json();
        setData(productData);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return { data, loading, error }; */
};

export default useProducts;
