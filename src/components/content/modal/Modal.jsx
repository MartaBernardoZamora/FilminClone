import React, { useEffect, useState } from 'react';
import './Modal.css'
import ReactPlayer from 'react-player/youtube'


function Modal(props) {
    const { onMouseLeave, isModalVisible } = props;
    function handleUnstarted() {
        document.querySelector('.divVideo').style.display = 'none';
        document.querySelector('.divImage').style.display = 'block';
    };
    function toggleVideo(){
        document.querySelector('.divVideo').style.display = 'block';
        document.querySelector('.divImage').style.display = 'none';
    }
    return (
        <>
        {isModalVisible && (
            <article className="modal" onMouseLeave={onMouseLeave}>
                <div className="divImage">
                    <img src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`} alt="" />
                    <div className="prettyerDiv"></div>
                </div>
                <div className="divVideo">
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${props.videoKey}`}
                        onBufferEnd={toggleVideo}
                        onError={handleUnstarted}
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
                                    playlist:props.key,
                                    start:5,
                                }
                            }
                        }}
                        style={{ pointerEvents: "none" }}
                    />                    
                    <div className="prettyerDiv"></div>
                </div>
            <div className="modalInfo">
                    <div className="modalInfoVotes">
                        <div className="containerRating">
                            <p className="modalTextBold">{props.voteRating}</p>
                        </div>
                        <div className="containerVotes">
                            <p className="modalTextBold">{props.vote_count} votos</p>
                            <p>{props.nomRating}</p>
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
                        <p className="modalTextBold">{props.title}</p>
                        <div className="modalData">
                            <p >{props.time}</p>
                            {props.certification && (<p className="modalCertification">{props.certification}</p>)}
                        </div>
                        <div className="modalGenre">                        
                            {props.genres.slice(0,3).map((genre,index) =>
                                <p key={genre.id}>{genre.name.toUpperCase()}</p>
                            )}
                        </div>
                    </div>
                    <div className="modalInfoContent">
                        <p>{props.overview}</p>
                    </div>
                </div>
            </article>
        )}
        </>
    )
}
export default Modal