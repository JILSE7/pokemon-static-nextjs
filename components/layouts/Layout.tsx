import React, { FC, ReactNode } from 'react'
import Head from 'next/head';
import { Nabvar } from '../index';


interface IPropsLayout {
    children: ReactNode,
    title? : string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<IPropsLayout> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title ?? 'Pokemon App'}</title>
            <meta name='author' content='Said Mandujano'/>
            <meta name='description' content={`Informacion sobre ${title} XXXXX`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
            
            <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
            <meta property="og:url" content={`${origin}/img/banner.png`} />
            <meta property="og:image" content="" />
            <meta property="og:description" content={`Este es la pagina de ${title}`} />
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

