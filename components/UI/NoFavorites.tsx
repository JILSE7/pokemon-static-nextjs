import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display:'flex', 
        alignItems: 'center', 
        flexDirection: 'column', 
        height: 'calc(100vh - 100px)', 
        justifyContent:'center'
      }}>
        <Text h1>No hay favoritos :c</Text>
        <Image width={80} height={80} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"} alt={"noFavorites"}/>
      </Container>
  )
}

export default NoFavorites