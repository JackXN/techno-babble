import React from 'react'
import { getPosts } from '../services';

import { PostCard } from './PostCard';

import { Box, StylesProvider, Text } from '@chakra-ui/react';
import { syntaxError } from 'graphql';



export default function MainPost({posts}) {
//    console.log('here are the ', posts)
//    console.log('here we go',posts.author)


// SYNTAX FOR PRINTING WHAT I WANT 
{/* <h1>{post.node.author.bio}</h1> */}

    return (
        <div style={{height:'100px', background: 'white'}}>
           {posts.splice(0,1).map((post,index) => (
            //    MAIN CARD DISPLAY HERE
            <Box sx={styles.mainContainer}>
                <Box sx={styles.imageContainer}>
                    <img src={post.node.featuredImage.url} alt={post.title}/> 
                </Box>
            </Box>
           ))}
        </div>
    )
}

const styles = {
    mainContainer: {
        display: 'flex',
    },
    imageContainer: {
height: '50px',
width: '50px',
    },
}


export async function getStaticProps() {
    const posts = (await getPosts() || []);
    return {
        props: {posts}
    };
}


