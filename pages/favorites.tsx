import React from 'react'
import { Layout } from '../components'

import {NoFavorites} from '../components';
import { useState, useEffect } from 'react';
import localStorage from '../utils/localStorage';
import PokemonFavorite from '../components/pokemons/PokemonFavorite';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);


  useEffect(() => {
    setFavoritePokemons(localStorage.getPokemonLS());
  }, [])

  console.log(favoritePokemons);
  


  return (
    <Layout>
      {
        favoritePokemons.length === 0 ?
                                        (<NoFavorites/>)
                                      :
                                        (<PokemonFavorite favorites={favoritePokemons}/>)  


      }
    </Layout>
  )
}

export default Favorites