import { useId } from 'react';
import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next'

import { Layout, PokemonCard } from '../components';
import { pokeApi } from '../api';
import { PokeAPIResponse, SmallPokemon } from '../interfaces';



interface IProps {
  pokemons: SmallPokemon[];
}

const Home: NextPage<IProps> = ({pokemons}) => {

  const idReact = useId()
    
  return (
    <Layout title='Listado de pókemons'>
      
        <Grid.Container gap={2} justify='center'>
          {
            pokemons.map(({id,img,name}) => (<PokemonCard id={id} key={idReact+id} img={img} name={name}/>))
          }
        </Grid.Container >

    </Layout>
   
   
  )
}

//crtl + i //coment function
//getStaticProps solo se pueden usar en pages, no en componentes
export const getStaticProps: GetStaticProps = async (ctx) => {
  
      const {data} = await pokeApi.get<PokeAPIResponse>('/pokemon?limit=151');

      const pokemons = data.results.map(({name,url},i) => ({name, url, id:i+1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`}));

      //console.log(pokemons);

  return {
    props: {
      pokemons
    }
  }
}
export default Home
