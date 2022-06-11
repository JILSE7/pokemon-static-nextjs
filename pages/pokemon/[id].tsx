import { useEffect, useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { Grid } from '@nextui-org/react';

import { Layout, PokemonInto, PokemonInfo } from '../../components'
import { pokeApi } from '../../api';
import { PokeAPIGetById } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

import confetti from 'canvas-confetti';
import { PokeAPIResponse } from '../../interfaces/pokeApi';



interface IProps {
  pokemon:PokeAPIGetById
}

const PokemonPage:NextPage<IProps> = ({pokemon}) => {

  const [isFavorited, setisFavorited] = useState<boolean>(typeof window === "undefined" && localFavorites.verifyFavorites(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setisFavorited(!isFavorited);

    if(isFavorited) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin:{
        x: 1,
        y:0
      }
    })

  };


/*   useEffect(() => {
    setisFavorited(() => localFavorites.verifyFavorites(pokemon.id));
  }, [pokemon.id]) */

  return (
    <Layout title={`${pokemon.name}`}>
        <Grid.Container css={{marginTop:'5px'}} gap={2} >
          <Grid  xs={12} sm={ 6 }>
            <PokemonInto isFavorited={isFavorited} onToggleFavorite={onToggleFavorite} pokemon={pokemon}/>
          </Grid>
          <Grid xs={12} sm={ 6 }>
            <PokemonInfo isFavorited={isFavorited} onToggleFavorite={onToggleFavorite} pokemon={pokemon}/>
          </Grid>
        </Grid.Container>
    
    </Layout>
  )
}



// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  

  const pokemon151 = [...Array(151)].map((_,i) => ({params:{id:`${i + 1}`}}));
  

  return {
    paths: pokemon151,
    fallback: 'blocking'
  }
}
//fallback: false - manda al 404 si la pagina no fue previamente renderizada
//fallback: 'blocking' - permite entrar a la pagina aunque la pagina no haya sido previamente renderizada

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {id} = params as {id:string}
  
  const pokemon = await getPokemonInfo(id);
  
  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false //la redireccion a otra pagina ya no existe para que los boot de google la encuentren
      }
    }
  }
  
  
  return {
    props: {
     pokemon:pokemon
    },//seconds for Incremental Static Regeneration
    revalidate: 86400
  }
}


export default PokemonPage;




