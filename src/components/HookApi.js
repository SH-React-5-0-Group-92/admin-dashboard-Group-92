import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HookApi() {
  const [post, setPost]=useState([])
  const [id, setId]=useState(1)
  const [idFromButtonClick, setIdFromButtonClick]=useState('')

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res =>{
      setPost(res.data)
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [idFromButtonClick])
  const handleClick =()=>{
    setIdFromButtonClick(id)
  }

  return (
    <div>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <button type='button' onClick={handleClick}>Fetch post</button>
      {/* <div>{post.title}</div> */}
      <ul>
      {post.map(post=>(
          <div>
          <li key={post.id}>{post.title}</li>
          <h1>{post.body}</h1>
          </div>
      ))}
      </ul>
    </div>
  )
}

export default HookApi