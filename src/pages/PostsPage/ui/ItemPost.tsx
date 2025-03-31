import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { TypePost } from '../../../entities/post/types/postType';

type PropsType = {
  post: TypePost;
};

function ItemPost({ post }: PropsType): JSX.Element {
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <Link to={`/posts/${post.id}`} className="btn btn-primary">
          Просмотреть
        </Link>
      </div>
    </div>
  );
}
export default memo(ItemPost);

