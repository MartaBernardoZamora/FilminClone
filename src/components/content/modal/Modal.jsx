import './Modal.css'
import {getEJEMPLOPelicula } from '../../../services/TmbServices';

const product=await getEJEMPLOPelicula("movie", 278);


console.log(product);
function Modal() {
    
    const voteRating= product.vote_average.toFixed(1);
    const nomRating=
        voteRating < 5 ? "Poco recomendable" :
        voteRating >=5 && voteRating <7 ? "Buena":
        voteRating >=7 && voteRating <9 ? "Genial":
        "Excelente";
    return (
        <article className="modal">
            <video autoPlay muted>
                <source src="/src/assets/video/trailerPrueba.mp4" type="video/mp4" />
            </video>
            <div className="modalInfo">
                <div className="modalInfoVotes">
                    <div className="containerRating">
                        <p className="modalTextBold">{voteRating}</p>
                    </div>
                    <div className="containerVotes">
                        <p className="modalTextBold">{product.vote_count} votos</p>
                        <p>{nomRating}</p>
                    </div>
                </div>
                <button className="modalInfoButton">VER</button>
                <div className="modalInfoHeader">
                    <p className="modalTextBold">{product.title}</p>
                    <div className="modalData">
                        <p >product.duration</p>
                        <p>product.pegi</p>
                    </div>
                    <div className="modalGenre">                        
                        {product.genre_ids.map((genre,index) =>
                            <p key={index}>{genre}</p>
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