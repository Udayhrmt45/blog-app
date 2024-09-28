import { useEffect, useState } from "react";
import Editor from "../Editor";
import { useParams,Navigate } from "react-router-dom";

export default function EditPost() {
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [deleted,setDelete] = useState(false);

  useEffect(() => {
    fetch('https://mern-myblogapp.onrender.com/post/'+id)
    .then(response => {
       response.json().then(postInfo =>{
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
       }) 
    })
  },[])

  async function updatePost(ev){
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if(files?.[0]){
        data.set("file", files?.[0]);
    }
    const response = await fetch('https://mern-myblogapp.onrender.com/post',{
      method: 'PUT',  
      body: data,
      credentials:'include',
    })
    if(response.ok){
        setRedirect(true);
    }
  }

  async function deletePost(ev){
    ev.preventDefault();
    const response = await fetch(`https://mern-myblogapp.onrender.com/post/${id}`,{
        method:'DELETE',
    })
    if(response.ok){
        setDelete(true);
    }
  }

  if(redirect){
    return <Navigate to={'/post/'+id}/>
  }

  if(deleted){
    return <Navigate to={'/'}/>
  }

  return (
    <form onSubmit={updatePost} enctype="multipart/form-data">
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="Summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <Editor onChange={setContent} value={content}/>
      <button style={{ marginTop: "5px" }}>Update post</button>
      <button style={{ marginTop: "5px" }} onClick={deletePost}>Delete post</button>
    </form>
  );
}