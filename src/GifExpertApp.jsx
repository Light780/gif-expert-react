import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = ({ defaultCategories }) => {
  const [categories, setCategories] = useState(defaultCategories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

GifExpertApp.defaultProps = {
  defaultCategories: [],
};
