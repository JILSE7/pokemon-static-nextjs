import { pokeApi } from "../api";
import { PokeAPIGetById } from "../interfaces";

export const getPokemonInfo = async(dinamicQuery:string) => {

    try {
        const {data} = await pokeApi.get<PokeAPIGetById>(`/pokemon/${dinamicQuery}`);
        const {name, id, sprites} = data;
        
        return {
            id,
            name,
            sprites
        }
            
        
    } catch (error) {
        return null;
    }



}