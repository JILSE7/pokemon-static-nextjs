import { Card, Col, Row, Button, Text} from '@nextui-org/react';
import { PokemonCardProp } from '../../interfaces';


export const PokemonInto = ({pokemon, isFavorited, onToggleFavorite}:PokemonCardProp) => {

 

  return (
    <Card cover css={{  p: 0, height:"350px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={18} weight="bold" transform="uppercase" color="#9E9E9E">
                    #{pokemon.id}
                  </Text>
                  <Text h2 color="white">
                  {pokemon.name}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  /* src={pokemon.sprites.front_shiny} */
                  src={pokemon.sprites.other?.dream_world.front_default ?? '/no-image.png'}
                  height={250}
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
                          Get a good nights sleep.
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      
                        <Button color={'gradient'} ghost={!isFavorited} onClick={onToggleFavorite}>
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            {isFavorited? 'Borrar de ' : 'Guardar en '}
                            Favoritos
                          </Text>

                        </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
  )
}

export default PokemonInto