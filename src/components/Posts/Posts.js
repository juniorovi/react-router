import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>This is post page: {posts.length}</h1>
            {
                posts.map(post=><Link
                    key={post.id}
                    to={`/posts/${post.id}`}
                    >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;