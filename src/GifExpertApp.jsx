import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories((prevValues) => {
      return [newCategory, ...prevValues];
    });
  };

  return (
    <div className="p-16 space-y-4">
      <h1 className="text-5xl font-bold">Gif Export App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </div>
  );
};
