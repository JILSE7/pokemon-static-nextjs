import { Card, Grid, Row, Text } from '@nextui-org/react'
import React from 'react'
import { SmallPokemon } from '../../interfaces'
import { useRouter } from 'next/router';
import Image from 'next/image';

interface IProps extends SmallPokemon{
}


export const PokemonCard = ({id,img,name}:IProps) => {
  
  const router = useRouter();

  const handleClick = () : void => {
      router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={2} >
        <Card hoverable clickable onClick={handleClick}>
          <Card.Body css={{p:1}}>
              {/* <Image src={img} width={'100%'} height={180}/> */}
              <Card.Image src={img} width={'100%'} height={180}/>
              
          </Card.Body>
          <Card.Footer>
              <Row justify='space-between'>
              <Text transform='capitalize'>{name}</Text>
              <Text>{id}</Text>
              </Row>
          </Card.Footer>
        </Card>
    </Grid>
  )
}

