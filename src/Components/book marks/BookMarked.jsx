import React from 'react';
import "./bookmarked.css"

const BookMarked = ({ bookmarkClick }) => {

    // console.log(bookmarkClick)

    return (
        <div>
            <h2 className='md:text-[22px] font-semibold '>Bookmarked Blogs : {bookmarkClick.length}</h2>
            <div className='md:p-4'>
                {
                    bookmarkClick?.length > 0 && bookmarkClick?.map(data => <h2 className='text-[15px] font-semibold py-5'>{data}</h2>)
                }
            </div>
        </div>
    );
};

export default BookMarked;