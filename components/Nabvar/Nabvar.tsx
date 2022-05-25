import { Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import CustomLink from '../link/CustomLink';

export const Nabvar = () => {

    const { theme } = useTheme();

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', 
                      width: '100%', backgroundColor: theme?.colors.blue400.value,
                      height: '50px', alignItems: 'center', padding:'10px 10px', borderBottom:'1px solid blue' }}>


            <div style={{display:'flex', alignItems:'center'}}>
                <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} alt='icon-App' width={70} height={70}/>

                <CustomLink>
                    <Text color='white' h2 >P</Text>
                    <Text color='white' h3 >okémon</Text>
                </CustomLink>
            </div>
            
            <CustomLink href='/favorites'>
                <Text color='white'>Favorites</Text>
            </CustomLink>
            
        

        </nav>
    )
}

