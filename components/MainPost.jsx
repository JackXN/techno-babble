import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

export default function MainPost({ posts }) {
    return (
        <>
        <Box sx={styles.container}>
        {posts.slice(0, 1).map((post, index) => (
            <Link href={`/post/${post.node.slug}`}>
            <Box sx={styles.mainContainer} key={index}>
            <Box sx={styles.imageContainer}></Box>
            <Box sx={styles.contentContainer}>
            <Text as="h1">{post.node.title}</Text>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-2 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            </svg>
            <span
            className="align-middle"
            style={{
                fontFamily: 'Catamaran',
                fontSize: '14px',
                color: '#F4F4F5',
            }}
            >
            {moment(post.node.createdAt).format('MMM DD, YYYY')}
            </span>
            <Text as="p" sx={styles.description} padding='10px'>
            {post.node.excerpt}
            </Text>
            </Box>
            </Box>
            </Link>
            ))}
            </Box>
            </>
            )
        }




        // ! Styles
        
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
                textAlign: 'center',
                backgroundColor: '#26272B',
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
                fontWeight: '900',
                mt: ['30px'],
                
                p: {
                    fontFamily: 'Catamaran',
                    fontSize: ['20px'],
                },
                
                h1: {
                    color: '#F4F4F5',
                },
            },
            description: {
                color: '#F4F4F5',
            },
        }
        