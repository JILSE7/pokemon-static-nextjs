import { Link } from '@nextui-org/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';


const CustomLink = ({children, href}: {children:ReactNode, href?:string}) => {
  return (
    <NextLink href={href ?? '/'}>
        <Link>
            {children}
        </Link>
    </NextLink>
  )
}

export default CustomLink