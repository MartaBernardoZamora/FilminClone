
import { getProductById } from "./TmbServices";

export async function getModalData(productType, productId){
    try {
        const data=await getProductById(productType, productId, "videos,release_dates,content_ratings,season/1");
        const {
            overview,
            genres,
            vote_count,
            backdrop_path,
            poster_path,
        }=data;
        const product = {
            overview,
            genres,
            vote_count,
            backdrop_path,
            poster_path,
        };
        product.title=data.name||data.title;
        product.videoKey= data.videos.results[0]?.key;
        let certification;
        if(data.content_ratings){
            const age = data.content_ratings.results.find(iso => iso.iso_3166_1 == "ES");
            age && (certification = age.rating);
        }else{
            const age = data.release_dates.results.find(iso => iso.iso_3166_1 == "ES");
            age && (certification = age.release_dates[0].certification);
        }
        certification && (product.certification=certification == "TP" ? certification : `${certification}+`);

        product.voteRating= data.vote_average.toFixed(1);
        product.nomRating=
            product.voteRating < 5 ? "Poco recomendable" :
            product.voteRating >=5 && product.voteRating <7 ? "Buena":
            product.voteRating >=7 && product.voteRating <9 ? "Genial":
            "Excelente";
        const minutes = () => {
            const timmer=data.runtime || data["season/1"].episodes[0].runtime;
            const hours = Math.floor(timmer / 60);
            const restMinutes = timmer % 60; 
            return hours ? `${hours}h ${restMinutes}min` : `${restMinutes}min`;
        }
        const seasons= data.number_of_seasons == 1 ? `${data.number_of_seasons} temporada`: `${data.number_of_seasons} temporadas`;
        product.time= data.runtime ? `${minutes()}` : `${seasons} · ${minutes()}/ep.`;
        
        return product;

    } catch (error) {
        console.error('Error getData:', error);
        throw error;
        
    }
}