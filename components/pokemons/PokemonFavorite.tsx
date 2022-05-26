import { FC, useId } from 'react'
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';



const PokemonFavorite:FC<{favorites: number[]}> = ({favorites}) => {

  const router  = useRouter();
  const idReact = useId();

  const handleClick = (id:number) : void => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid.Container gap={2} direction='row'>
        {
            favorites.map(id => (
                <Grid xs={6} sm={4} md={3} xl={2} key={idReact + id}>
                    <Card hoverable clickable onClick={() => handleClick(id)} >
                        <Card.Image css={{padding:10}} width={"100%"} height={"auto"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}/>
                    </Card>
                </Grid>
            ))
        }
    </Grid.Container>
  )
}

export default PokemonFavorite