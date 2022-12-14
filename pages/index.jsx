import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Footer} from '../components';
import { getPosts } from '../services';
import Head from 'next/head'
import React, {useEffect} from 'react';
import MainPost from '../components/MainPost';
import AOS from 'aos';
import { Box } from '@chakra-ui/react';


export default function Home({ posts} ) {

// console.log(posts)
  useEffect(() => {
    AOS.init({})
  }, [])



  return (
    <>
    <Head>
    <title>Batchforum - Tech Discussions & Resources</title>
    <meta name='description' content='Batchforum - Tech discussions, topics, resources and blogs.'/>
    <meta property='og:title' content='Tech discussions, topics, resources and blogs'/>  
    <link rel="shortcut icon" href="/favicon.ico" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet"/>
    </Head>
    <div className="container px-10 mx-auto mb-8">
      {/* <FeaturedPosts /> //! featured posts go here  */}
 <MainPost posts={posts}/>
      <div className="grid grid-rows-2 gap-2 lg:grid-cols-2 lg:flex ">
        
       <Box display='grid' sx={styles.postContainer}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node}/>
          ))}
        </Box>
        {/* <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div> */}
      </div> 
      <Footer/>
    </div>
  </>
  );
}

const styles = {
  postContainer: {
   

    
    
  }
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

//