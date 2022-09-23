import React from 'react'
import { getPosts } from '../services';

import { PostCard } from './PostCard';

export default function MainPost({posts}) {
   console.log('here are the ', posts)
//    console.log('here we go',posts.author)


// SYNTAX FOR PRINTING WHAT I WANT 
{/* <h1>{post.node.author.bio}</h1> */}

    return (
        <div style={{height:'100px', background: 'white'}}>
           {posts.splice(0,1).map((post,index) => (
               
           ))}
        </div>
    )
}




export async function getStaticProps() {
    const posts = (await getPosts() || []);
    return {
        props: {posts}
    };
}


