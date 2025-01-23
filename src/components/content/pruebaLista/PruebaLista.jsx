import React, { useEffect, useState } from 'react';
import { getProductsByList } from '../../../services/TmbServices';
import ProductCard from '../productCard/ProductCard';


function PruebaLista() {
    const [products, setProducts] = useState();
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductsByList("movie", "popular");
                return setProducts(data);
            } catch (error) {
                console.error('Error getProductById:', error);
                throw error;
            }
        }
        fetchProduct();
    }, []);    
    if (!products) return;

    const getCards= products.results.map(product =>
        <ProductCard key={product.id} id={product.id} type={"movie"} />
    );
  return (
    <>
        {getCards}
    </>
  )
}

export default PruebaLista