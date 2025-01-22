
import { getProductById } from "./TmbServices";

export async function getModalData(){
    try {
        const data=await getProductById("tv", 79744, "videos,release_dates,content_ratings");//436270, 782, 278
        console.log(data);
        const {
            overview,
            genres,
            number_of_seasons,
            vote_count,
        }=data;
        const product = {
            overview,
            genres,
            number_of_seasons,
            vote_count,
        };
        product.title=data.name||data.title;
        product.key= data.videos.results[0].key;
        let certification;
        /*if(data.content_ratings){
            const age = data.content_ratings.results.filter(iso => iso.iso_3166_1 == "ES");
            certification = age[0].rating == "TP"
                ? age[0].rating
                : `${age[0].rating}+`;
        }else{
            const age = data.release_dates.results.filter(iso => iso.iso_3166_1 == "ES");        
            certification = age[0].release_dates[0].certification == "TP"
                ? age[0].release_dates[0].certification
                : `${age[0].release_dates[0].certification}+`;
        }*/
        const age = data.content_ratings||release_dates.results.filter(iso => iso.iso_3166_1 == "ES");
        product.certification=certification;
        product.voteRating= data.vote_average.toFixed(1);
        const nomRating=
            product.voteRating < 5 ? "Poco recomendable" :
            product.voteRating >=5 && product.voteRating <7 ? "Buena":
            product.voteRating >=7 && product.voteRating <9 ? "Genial":
                "Excelente";
        product.nomRating=nomRating;

        //runtime and episode_run_time
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
        const minutes = () => {
            const hours = Math.floor(data.runtime / 60);
            const restMinutes = data.runtime % 60; 
            return `${hours}h ${restMinutes}min`;
        }
        product.runtime=minutes();*/
        console.log(product);
        return product;
    } catch (error) {
        console.error('Error getData:', error);
        throw error;
        
    }
}