import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../component/styles/product.css';
import Cards from './Cards';

 export default function Products({handleClick}){

 const [post,setPost] = useState([])
    
useEffect(() => {

axios.get("http://localhost:4600/posts")
  .then(res => setPost(res.data))
})




  return (
     <section>
        {post.map((item) => (
         <Cards  key ={item.id} item={item}  handleClick={handleClick}/>
        ) )}
     </section>
    )
}

