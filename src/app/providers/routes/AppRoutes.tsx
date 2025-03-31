import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../../pages/NotFoundPage/NotFound';
import HomePage from '../../../pages/HomePage/HomePage';
import PostsPage from '../../../pages/PostsPage/PostsPage';
import OnePostPage from '../../../pages/OnePostPage/OnePostPage';

function AppRoutes(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<OnePostPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
