import React from 'react';
import { Link } from 'react-navi';

const Header = ({text}) => {     
    return <Link href="/"><h1>{text}</h1></Link>

}

export default Header 
