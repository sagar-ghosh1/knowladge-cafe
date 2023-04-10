import React, { useState, useEffect } from 'react';
import "./blogBody.css"
import Blog from './../blog/Blog';
import ReadingTime from '../reading time/ReadingTime';
import BookMarked from '../book marks/BookMarked';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const BlogBody = () => {
  const [blogs, setBlogs] = useState([])
  const [countReadingTime, setCountReadingTime] = useState(0)
  const [bookmarks, setBookmark] = useState([])

  useEffect(() => {
    fetch('blogData.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  const markAsRead = (readTime) => {
    console.log(readTime)
    setCountReadingTime(countReadingTime + readTime.readingTime);
  }

  const bookmarkClick = (bookmark) => {
    // console.log(bookmark)
    const newBookmark = [...bookmarks, bookmark.title]
    setBookmark(newBookmark)
    toast.success("Book Mark Added", {
      theme: "colored"
    })

    // console.log(bookmark.title)
  }

  return (
    <div className='blog-page'>
      <div className='blogs p-5'>
        {
          blogs.map(blog =>
            <Blog
              blog={blog}
              key={blog.id}
              markAsRead={markAsRead}
              bookmarkLength={bookmarkClick}
            >
            </Blog>)
        }

      </div>
      <div className='side-component p-5'>
        <ReadingTime readingTime={countReadingTime}></ReadingTime>

        <div className='p-5'>
          <BookMarked bookmarkClick={bookmarks}></BookMarked>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;