
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { getModalData } from '../../../services/TmbServicesModal';
import Modal from '../modal/Modal';
import './ProductCard.css'


function ProductCard(props) {
    const [product, setProduct] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getModalData(props.type, props.id);
                return setProduct(data);
            } catch (error) {
                console.error('Error getProductById:', error);
                throw error;
            }
        }
        fetchProduct();
    }, []);    
    function toggleModal() {
        setIsModalVisible(!isModalVisible);
    };

    if (!product) return;
    return (
        <div className='carrouselCard'>
            <div className="verticalCard"
                onMouseEnter={toggleModal}
            >
                <img src={`https://image.tmdb.org/t/p/original${product.poster_path}`} alt="" />
                {props.type == "tv" && (<p className="isSerie">SERIE</p>)}
                <Modal 
                    {...product} 
                    isModalVisible={isModalVisible}
                    onMouseLeave={toggleModal} />
            </div>
        </div>

    )
}


export default ProductCard