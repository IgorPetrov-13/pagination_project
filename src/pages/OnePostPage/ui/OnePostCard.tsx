import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { TypePost } from '../../../entities/post/types/postType';
import PostApi from '../../../entities/post/api/postApi';
import PageLoader from '../../../widgets/PageLoader/PageLoader';
import ErrorMessage from '../../../widgets/error/ErrorMessage';

function OnePostCard(): JSX.Element {
  const { postId } = useParams();
  const postIdNumber = Number(postId);

  const [post, setPost] = useState<TypePost>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    void PostApi.getOnePost(postIdNumber)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Не удалось загрузить пост');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postIdNumber]);

  if (Number.isNaN(postIdNumber)) {
    return <ErrorMessage message="Некорректный ID поста" />;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!post) {
    return <ErrorMessage message="Пост не найден" />;
  }

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-header bg-light">
          <h3 className="card-title ">{post.title}</h3>
        </div>
        <div className="card-body">
          <p className="card-text fs-5" style={{ whiteSpace: 'pre-line' }}>
            {post.body}
          </p>
        </div>
        <div className="card-footer bg-transparent d-flex justify-content-between">
          <Link to="/posts" className="btn btn-outline-secondary">
            ← Назад к списку
          </Link>
          <div>
            <span className="text-muted me-3">Post ID: {post.id}</span>
            <span className="text-muted">User ID: {post.userId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePostCard;
