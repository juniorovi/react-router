import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <h1>Welcome to React Routing!</h1>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>Friends</CustomLink>
            <CustomLink to='/posts'>Posts</CustomLink>
            <CustomLink to='/countries'>Countries</CustomLink>
            <CustomLink to='/about'>Abouts</CustomLink>
        </div>
    );
};

export default Header;