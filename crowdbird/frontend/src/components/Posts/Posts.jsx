import React from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { useState, useEffect} from "react"

import { PostsData1 as getPostApi } from '../Data/PostsData2'



const Posts = () => {

  const [backendPosts, setPosts] = useState([]);
  const approvedPosts = backendPosts.filter((backendPost) => backendPost.status==="APPROVED");
  console.log("backendPosts",backendPosts);
  console.log("approvedPosts",approvedPosts);

useEffect(()=> {
  getPostApi().then(data =>{
    setPosts(data);
  });
},[]); 

  return (
    <div className="Posts">
        {approvedPosts.map((post, id)=>{
            return <Post data={post} id={id}/> 
        })}
    </div>
    
  )
}

export default Posts  