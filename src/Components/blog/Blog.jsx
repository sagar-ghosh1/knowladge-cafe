import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import './blog.css'

const Blog = (props) => {
  // console.log(props.blog)
  const { authorName, authorImage, coverImage, publishedDate, readingTime, title } = props.blog
  const markAsRead = props.markAsRead
  const bookmarkLength = props.bookmarkLength

  return (
    <div className='single-blog'>
      <div className='mb-5'>
        <img src={coverImage} className='w-[800px] h-full rounded' alt="" srcset="" />
      </div>
      <div className='blog-inner-content md:px-2 px-1'>
        <img src={authorImage} className='rounded-full w-[40px] h-[40px]' alt="" srcset="" />
        <div>
          <h2 className='font-bold'>{authorName}</h2>
          <h4>{publishedDate}</h4>
        </div>
        <div>
          <ToastContainer></ToastContainer>
          <h4 className='text-right'>
            {readingTime} min read
            <span className='md:pl-3 pl-3 cursor-pointer' onClick={() => bookmarkLength(props.blog)}>
              <FontAwesomeIcon icon={faBookBookmark} />
            </span>
          </h4>
        </div>
      </div>
      <div className='mt-5 ml-2'>
        <h1 className='font-bold md:text-3xl text-2xl'>{title}</h1>
        <div className='flex gap-5'>
          <p className="text-gray-500 pt-5">#Programming</p>
          <p className="text-gray-500 pt-5">#Blogs</p>
          <p className="text-gray-500 pt-5">#eCommerce</p>
        </div>
        <p onClick={() => markAsRead(props.blog)} className='underline text-blue-600 cursor-pointer mt-5'>Mark As Read</p>
      </div>
    </div>
  );
};

export default Blog;