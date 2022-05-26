import { PokeAPIGetById } from "./pokeApiGetById";

export interface PokemonCardProp {
    isFavorited?:boolean,
    pokemon:PokeAPIGetById,
    onToggleFavorite?: () => void
}
  