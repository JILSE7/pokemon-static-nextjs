import Image from 'next/image';
import { Card, Container, Button, Text} from '@nextui-org/react';
import { PokemonCardProp } from '../../interfaces';

export const PokemonInfo = ({pokemon, isFavorited, onToggleFavorite}:PokemonCardProp) => {
  return (
    <Card>
              <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                <Text h1 transform='capitalize'>{pokemon.name}</Text>
                <Button 
                  color={'gradient'} 
                  ghost={!isFavorited} 
                  onClick={onToggleFavorite}
                  >
                    {isFavorited? 'Borrar de ' : 'Guardar en '}
                    Favoritos
                  </Button>
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
  )
}

