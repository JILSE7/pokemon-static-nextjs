import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { PokeAPIGetById, PokeAPIResponse } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

import { Layout, PokemonInto } from '../../components'


interface IProps {
    pokemon:PokeAPIGetById
  }

const NamePage:NextPage<IProps> = ({pokemon}) => {
  return (
    <Layout>
        <Grid.Container xl={12} css={{height:'calc(100vh - 100px)', marginTop:20}} >
            <PokemonInto pokemon={pokemon}/>
        </Grid.Container>
    </Layout>
  )
}



  export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
    const {data} = await pokeApi.get<PokeAPIResponse>('/pokemon?limit=151');
    const pokemons151 = data.results.map(pokemon => ({params:{name:`${pokemon.name}`}}));
    
    return {
      paths: pokemons151,
      fallback: 'blocking'
    }
  }


export const getStaticProps:GetStaticProps = async({params}) => {
    const {name:pokeName} = params as {name:string};
    const pokemon = await getPokemonInfo(pokeName);

    return {
        props: {
         pokemon
        }
      }
}

export default NamePage;


