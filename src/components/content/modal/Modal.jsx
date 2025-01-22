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
                <button className="modalInfoButton">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        width="24"
                        height="24"
                    >
                        <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                    <p>VER</p>
                </button>
                <div className="modalInfoHeader">
                    <p className="modalTextBold">{product.title}</p>
                    <div className="modalData">
                        <p >{product.runtime}</p>
                        <p className="modalCertification">{product.certification}</p>
                    </div>
                    <div className="modalGenre">                        
                        {product.genres.map((genre,index) =>
                            <p key={genre.id}>{genre.name.toUpperCase()}</p>
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