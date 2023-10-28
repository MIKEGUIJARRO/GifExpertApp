import React from 'react'
import PropTypes from 'prop-types';

export const GifItem = ({ id, title, url }) => {
    return (
        <div className='rounded-2xl bg-white shadow-lg overflow-hidden'>
            <img src={url} alt={title} className='w-full' />
            <div className='p-4'>
                <p className='font-bold'>{title}</p>
            </div>
        </div>
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}