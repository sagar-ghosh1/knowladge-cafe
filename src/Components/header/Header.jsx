import React from 'react';

const Header = () => {
    return (
        <div className='nav-div p-5'>
            <nav className='navbar w-full max-w-[1200px] m-auto flex justify-between'>
                <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
                <img src="https://api.lorem.space/image/face?w=40&amp;amp;amp;amp;h=40" className='rounded-full' alt="" srcset="" />
            </nav>
        </div>
    );
};

export default Header;