
import { getProductById } from "./TmbServices";

export async function getModalData(){
    try {
        const data=await getProductById("movie", 436270, "videos,release_dates");//436270, 782, 278
        /*console.log(data);*/
        const {
            title,
            overview,
            vote_count,
            vote_average,
            genres,
        } = data;
        const product = {
            title,
            overview,
            vote_count,
            vote_average,
            genres,
        };
        product.key= data.videos.results[0].key;
        const prueba = data.release_dates.results.filter(iso => iso.iso_3166_1 == "ES");
        
        const certification = prueba[0].release_dates[0].certification == "TP"
            ? prueba[0].release_dates[0].certification
            : `${prueba[0].release_dates[0].certification}+`;
        product.certification=certification;
        const minutes = () => {
            const hours = Math.floor(data.runtime / 60);
            const restMinutes = data.runtime % 60; 
            return `${hours}h ${restMinutes}min`;
        }
        product.runtime=minutes();
        const voteRating= product.vote_average.toFixed(1);
        const nomRating=
                voteRating < 5 ? "Poco recomendable" :
                voteRating >=5 && voteRating <7 ? "Buena":
                voteRating >=7 && voteRating <9 ? "Genial":
                "Excelente";
        product.voteRating=voteRating;
        product.nomRating=nomRating;
        return product;
    } catch (error) {
        console.error('Error getData:', error);
        throw error;
        
    }
}