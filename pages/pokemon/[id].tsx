import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Card, Col, Row, Button, Text, Grid, Container } from '@nextui-org/react';

import { Layout } from '../../components'
import { PokeAPIGetById } from '../../interfaces';
import { pokeApi } from '../../api';
import Image from 'next/image';

interface IProps {
  pokemon:PokeAPIGetById
}

const PokemonPage:NextPage<IProps> = ({pokemon}) => {

  console.log();

/*     const {query} = useRouter();
    console.log(query.id); */
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg
  return (
    <Layout title='Algun pokemon'>
        <Grid.Container css={{marginTop:'5px'}} gap={2}>
          <Grid xs={12} sm={4} >
            <Card hoverable >
              <Card.Body>
                <Card.Image src={pokemon.sprites.other?.dream_world.front_default ?? '/no-image.png'} 
                            alt={`image ${pokemon.name}`}
                            width={'100%'}
                            height={200}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={ 8 }>
            <Card>
              <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                <Text h1 transform='capitalize'>{pokemon.name}</Text>
                <Button color={'gradient'} ghost>Guardar en favoritos</Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container display='flex' direction='row' justify='space-around' css={{width:'100%', border:'1px solid white'}}>
                  <Image 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.back_default} 
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.front_shiny} 
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.back_shiny} 
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
    
    </Layout>
  )
}



// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  //let pokemonsArr = Array.from(Array(151));
  //pokemonsArr.map((_,i) => ({params:{id: (i+1).toString()}}))

  const pokemon151 = [...Array(151)].map((_,i) => ({params:{id:`${i + 1}`}}));
  

  return {
    paths: pokemon151,
    fallback: false
  }
}
//fallback: false - manda al 404 si la pagina no fue previamente renderizada
//fallback: 'blocking' - permite entrar a la pagina aunque la pagina no haya sido previamente renderizada

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {id} = params as {id:string}
  
  const {data} = await pokeApi.get<PokeAPIGetById>(`/pokemon/${id}`);
  
  return {
    props: {
     pokemon:data
    }
  }
}


export default PokemonPage;




{/* <Card cover css={{ w: "50%", p: 0 }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          Your checklist for better sleep
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={pokemon.sprites.front_shiny}
        height={250}
        width={250}
        alt="Relaxing app background"
        
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#0f1114",
        borderTop: "$borderWeights$light solid $gray700",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src={pokemon.sprites.front_default}
                css={{ background: "black" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>

              </Text>
              <Text color="#d1d1d1" size={12}>
                Get a good night's sleep.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Get App
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
    </Card> */}