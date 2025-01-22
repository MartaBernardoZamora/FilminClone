import React, { useEffect, useState } from 'react';
import './Modal.css'
import {getProductById } from '../../../services/TmbServices';
import ReactPlayer from 'react-player/youtube'
import { getModalData } from '../../../services/TmbServicesModal';


function Modal() {
    const [product, setProduct]=useState();
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data=await getModalData();
                return setProduct(data); 
            } catch (error) {
                console.error('Error getProductById:', error);
                throw error;
            }
        }
        fetchProduct();
    }, []);
    if (!product) return;

    
    console.log(product);
    

    return (
        <article className="modal">
            <div className="divVideo">
                <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${product.key}`}
                    muted
                    width="100%"
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                loop: 1,
                                rel: 0,
                                showinfo: 0,
                                modestbranding: 1,
                                playlist:product.key,
                            }
                        }
                    }}
                    style={{ pointerEvents: "none" }} 
                />
            </div>
            <div className="modalInfo">
                <div className="modalInfoVotes">
                    <div className="containerRating">
                        <p className="modalTextBold">{product.voteRating}</p>
                    </div>
                    <div className="containerVotes">
                        <p className="modalTextBold">{product.vote_count} votos</p>
                        <p>{product.nomRating}</p>
                    </div>
                </div>
                <button className="modalInfoButton">VER</button>
                <div className="modalInfoHeader">
                    <p className="modalTextBold">{product.title}</p>
                    <div className="modalData">
                        <p >{product.runtime}</p>
                        <p>{product.certification}</p>
                    </div>
                    <div className="modalGenre">                        
                        {product.genres.map((genre,index) =>
                            <p key={genre.id}>{genre.name}</p>
                        )}
                    </div>
                </div>
                <div className="modalInfoContent">
                    <p>{product.overview}</p>
                </div>
            </div>
        </article>
    )
}
export default Modal