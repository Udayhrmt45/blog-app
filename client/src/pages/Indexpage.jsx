import { useEffect, useState } from "react";
import Post from "../post";
import { API_BASE_URL } from "../lib/constant.js";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch(`${API_BASE_URL}/post`).then(response =>{
      response.json().then(posts =>{
        setPosts(posts);
      });
    })
  }, []);
  return (
    <>
        {posts.length > 0 && posts.map(post => (
          <Post {...post}/>
        ))}
    </>
  );
}
