import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendID} = useParams();
    const [friend, setFriend]= useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
        console.log(url);
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            {/* <h2>This is detail of a Buddy {params.friendID}</h2> */}
            <h2>This is detail of a Buddy {friendID}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>Address: {friend.address?.city}</h5>
            <h6>Latitude: {friend.address?.geo?.lat}</h6>
        </div>
    );
};

export default FriendDetail;