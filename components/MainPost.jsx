import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';






export default function MainPost({posts}) {
    //    console.log('here are the ', posts)
    //    console.log('here we go',posts.author)
    
    
    return (
        <>
        <Box sx={styles.container}>
        {posts.slice(0,1).map((post,index) => (
            //    MAIN CARD DISPLAY HERE
            <Box sx={styles.mainContainer} key={index}>
            <Box sx={styles.imageContainer}>
            {/* <Image src={post.node.featuredImage.url} alt={post.title} height='100%' width='100%'/>  */}
            </Box>
            <Box sx={styles.contentContainer}>
            <Text as='h1'>{post.node.title}</Text>
            </Box>
            </Box>
            ))}
            </Box>
            </>
            )
        }
        
        const styles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
            },
            mainContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pb: ['100px'],
                mb: '200px',
            
                
            },
            imageContainer: {
                height: ['500px'],
                width: '100%',
                content: '" "',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: './UnixImage.png',
                
            },
            contentContainer: {
                fontSize: '50px',
                color: 'white',
                fontFamily: 'inter, sans-serif',
                fontWeight: '900'
                
                
            }
        }



       
        
        
        // export async function getStaticProps() {
        //     const posts = (await getPosts() || []);
        //     return {
        //         props: {posts}
        //     };
        // }
        
        
        