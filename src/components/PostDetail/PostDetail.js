import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postid } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setPost(data))
    }, [postid])
    return (
        <div>
            <h2>This is post detail for: {postid}</h2>
            <h3>Title: {post.title}</h3>
            <h5>Body: {post.body}</h5>
        </div>
    );
};

export default PostDetail;