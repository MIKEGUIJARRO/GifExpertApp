import React, { useEffect, useState } from 'react';
import { GifItem } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className='pb-16'>
      <h3 className="text-4xl font-bold pb-8">{category}</h3>
      {isLoading ? <h2>Is loading...</h2> : null}
      {<div className='grid grid-cols-3 gap-8'>
        {images.map(({ id, title, url }, index) => {
          return (
            <GifItem key={id} id={id} title={title} url={url} />
          );
        })}
      </div>}
    </div>
  );
};
