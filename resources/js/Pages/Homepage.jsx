import { Link, Head } from '@inertiajs/react';
import React from 'react';

export default function Homepage(props) {
    return (
        // <div className='flex justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl'>
        <div className='bg-neutral-800 text-white text-2xl'>
            <Head title={props.title} />
            <div>
                <h1 className='p-5'>{props.description}</h1>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className='p-4 m-2 bg-white text-black'>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                            <p>{data.author}</p>
                            <br></br>
                        </div>
                    )
                }): <p>belum ada berita yang tersedia</p>}
            </div>
        </div>
    )
}