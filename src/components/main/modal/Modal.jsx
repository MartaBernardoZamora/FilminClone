import './Modal.css'

function Modal() {
    const product= {
        title: "Cadena perpetua",
        rating: 8.7,
        votes: 27.503,
        duration: "2h 23min",
        pegi:12,
        genres: ["drama", "crimen"],
        overview: "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos."
    }
    const nomRating=
        product.rating < 5 ? "Poco recomendable" :
        product.rating >=5 && product.rating <7 ? "Buena":
        product.rating >=7 && product.rating <9 ? "Genial":
        "Excelente";
    return (
        <article className="modal">
            <video autoPlay muted>
                <source src="/src/assets/video/trailerPrueba.mp4" type="video/mp4" />
            </video>
            <div className="modalInfo">
                <div className="modalInfoVotes">
                    <div className="containerRating">
                        <p className="modalTextBold">{product.rating}</p>
                    </div>
                    <div className="containerVotes">
                        <p className="modalTextBold">{product.votes} votos</p>
                        <p>{nomRating}</p>
                    </div>
                </div>
                <button className="modalInfoButton">VER</button>
                <div className="modalInfoHeader">
                    <p className="modalTextBold">{product.title}</p>
                    <div className="modalData">
                        <p >{product.duration}</p>
                        <p>{product.pegi}</p>
                    </div>
                    <div className="modalGenre">                        
                        {product.genres.map((genre,index) =>
                            <p key={index}>{genre.toLocaleUpperCase()}</p>
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