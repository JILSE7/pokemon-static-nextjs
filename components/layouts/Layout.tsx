import Head from 'next/head';
import React, { FC, ReactNode } from 'react'
import { Nabvar } from '../index';


interface IPropsLayout {
    children: ReactNode,
    title? : string
}

export const Layout:FC<IPropsLayout> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title ?? 'Pokemon App'}</title>
            <meta name='author' content='Said Mandujano'/>
            <meta name='description' content={`Informacion sobre ${title} XXXXX`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
        </Head>
        <Nabvar/>
        <main style={{padding:"0px 20px"}}>
            {
                children
            }
        </main>
        
    </>
  )
}

