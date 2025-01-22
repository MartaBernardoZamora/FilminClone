
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { getModalData } from '../../../services/TmbServicesModal';
import Modal from '../modal/Modal';
import './ProductCard.css'
function ProductCard() {
    const [product, setProduct] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    function toggleModal() {
        setIsModalVisible(!isModalVisible);
    };
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getModalData();
                return setProduct(data);
            } catch (error) {
                console.error('Error getProductById:', error);
                throw error;
            }
        }
        fetchProduct();
    }, []);
    if (!product) return;
    return (
        <div className='carrouselCard'>
            <div className="verticalCard"
                onMouseEnter={toggleModal}
            >
                <img src={`https://image.tmdb.org/t/p/original${product.poster_path}`} alt="" />
            </div>
            {isModalVisible && (
                <Modal {...product} isModalVisible={isModalVisible} />
            )}
        </div>

    )
}


export default ProductCard
