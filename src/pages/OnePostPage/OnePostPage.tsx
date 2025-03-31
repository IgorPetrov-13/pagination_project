import React from 'react';
import OnePostCard from './ui/OnePostCard';

function OnePostPage(): JSX.Element {
  return (
    <div className="container mt-3">
      <h1 className="display-6 mb-4">Подробная информация</h1>
  
      <OnePostCard />
    </div>
  );
}
export default OnePostPage;
