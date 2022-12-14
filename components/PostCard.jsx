import React from 'react';

// COmponents
import Link from 'next/link';

import {Box} from '@chakra-ui/react';



import moment from 'moment';

const PostCard = ({post}) => {
    // console.log(post.author) 
    // console.log(post)
    return (
        // CARD CONTAINER
        // <div className='pb-12 m-10 mb-8 bg-gray-800 rounded-lg shadow-lg lg:p-8 ' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'>
            
            <div className='p-10 pb-12 m-10 mb-8 bg-gray-100' style={{backgroundColor: '#26272B'}}>
        {/* CARD */}
        <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg'
        />
        </div>
        
        <h1  className='mb-8 font-semibold text-center text-white transition duration-100 cursor-pointer hover:text-emerald-400' style={{color: '#F4F4F5', fontSize: '45px', fontFamily: 'inter ,sans-serif'}}>
        <Link href={`/post/${post.slug}`}  >
        {post.title}
        </Link>
        </h1>
        <div className='items-center justify-center block w-full mb-8 text-center lg:flex'>
        <div className='font-medium text-gray-500'>
        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle" style={{ fontFamily: 'Catamaran',
                fontSize: '14px',
                color: '#F4F4F5',}}>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
        </div>
        <p style={{fontFamily: 'Catamaran', fontWeight: '900', color: 'white'}}className='px-4 mb-8 font-normal text-center text-gray-500 lg:p-2'>{post.excerpt}</p>
        <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
        <span className='inline-block px-8 py-2 text-lg font-medium text-white transition duration-500 transform rounded-full cursor-pointer bg-emerald-400 hover:-translate-y-1'>
        Continue Reading
        </span>
        </Link>
        </div>
        </div>
        )
    }
    
    export default PostCard
    