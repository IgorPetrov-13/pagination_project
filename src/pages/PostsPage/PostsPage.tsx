import React from 'react';
import ListPosts from './ui/ListPosts';

function PostsPage(): JSX.Element {
  return (
    <div className="container mt-3">
      <h1 className="display-6 mb-4">Полученные посты</h1>
      <ListPosts />
    </div>
  );
}
export default PostsPage;
