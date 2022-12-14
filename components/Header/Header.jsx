import React, {useEffect, useState} from 'react'


// Components
import Link from 'next/link'
import { getCategories } from '../../services';

//

import Typed from 'react-typed';


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);



    return (
        <div className='container px-10 mx-auto mb-8'>
            <div className='inline-block w-full py-8 border-b border-emerald-400'>
                <div className='block md:float-left'>
                    <Link href='/'>
                        <span className='text-3xl font-light text-white cursor-pointer font-sourceL'>
                            <span className='text-3xl font-light text-emerald-400'>C:\ </span> 
                            <Typed
                    strings={['BATCH FORUM']}
                    typeSpeed={100}
                    styled={'red'}
                />
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='mt-2 ml-4 font-light text-white align-middle cursor-pointer hover:text-emerald-400 font-source md:float-right'>
                                {category.name} <span className='font-bold text-emerald-500'>| </span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;
