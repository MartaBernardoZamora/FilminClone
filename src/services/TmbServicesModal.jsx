
import { getProductById } from "./TmbServices";

export async function getModalData(){
    try {
        //const data=await getProductById("tv", 79744, "videos,release_dates");//436270, 782, 278
        const data=await getProductById("tv", 79744, "videos,content_ratings");//436270, 782, 278
        console.log(data);
        const {
            name,
            overview,
            genres,
            number_of_seasons,
            episode_run_time,
            vote_count,
            vote_average,

        }=data;
        const product = {
            name,
            overview,
            genres,
            number_of_seasons,
            episode_run_time,
            vote_count,
            vote_average,

        };
        product.key= data.videos.results[0].key;
        const age = data.content_ratings.results.filter(iso => iso.iso_3166_1 == "ES");
        console.log(age[0].rating);
        /*const certification = age[0].content_ratings[0].certification == "TP"
            ? age[0].content_ratings[0].certification
            : `${age[0].release_dates[0].certification}+`;
        product.certification=certification;

        //const age = data.release_dates.results.filter(iso => iso.iso_3166_1 == "ES");
        //console.log(age);

        /*const age = data.release_dates.results.filter(iso => iso.iso_3166_1 == "ES");
        const certification = age[0].release_dates[0].certification == "TP"
            ? age[0].release_dates[0].certification
            : `${age[0].release_dates[0].certification}+`;
        product.certification=certification;
        const voteRating= data.vote_average.toFixed(1);
        const nomRating=
                voteRating < 5 ? "Poco recomendable" :
                voteRating >=5 && voteRating <7 ? "Buena":
                voteRating >=7 && voteRating <9 ? "Genial":
                "Excelente";
        product.voteRating=voteRating;
        product.nomRating=nomRating;
        /*const {
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
        const age = data.release_dates.results.filter(iso => iso.iso_3166_1 == "ES");
        
        const certification = age[0].release_dates[0].certification == "TP"
            ? age[0].release_dates[0].certification
            : `${age[0].release_dates[0].certification}+`;
        product.certification=certification;
        const minutes = () => {
            const hours = Math.floor(data.runtime / 60);
            const restMinutes = data.runtime % 60; 
            return `${hours}h ${restMinutes}min`;
        }
        product.runtime=minutes();
        const voteRating= data.vote_average.toFixed(1);
        const nomRating=
                voteRating < 5 ? "Poco recomendable" :
                voteRating >=5 && voteRating <7 ? "Buena":
                voteRating >=7 && voteRating <9 ? "Genial":
                "Excelente";
        product.voteRating=voteRating;
        product.nomRating=nomRating;*/
        //console.log(product);
        return product;
    } catch (error) {
        console.error('Error getData:', error);
        throw error;
        
    }
}