import React from 'react'

const BlogItem = ({id , author,title, content}:{id:number, author: string, title:string, content:string}) => {

  return (
    <div className='bg-theme-pink flex flex-col justify-center border-none rounded-md m-3 p-3 shadow-sm shadow-zinc-800 text-white'>
        <div className='text-2xl text-theme-darkpurple'>{title}</div>
        <div className='text-base'>{author}</div>
        <div className='text-xl text-theme-noir'>{content}</div>
    </div>
  )
}

export default BlogItem;