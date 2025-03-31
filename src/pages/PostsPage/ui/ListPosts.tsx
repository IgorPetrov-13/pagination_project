import React, { useEffect, useState } from 'react';

import ItemPost from './ItemPost';
import PageLoader from '../../../widgets/PageLoader/PageLoader';
import ErrorMessage from '../../../widgets/error/ErrorMessage';
import Pagination from '../../../shared/ui/Pagination/Pagination';
import ItemsOnPage from '../../../shared/ui/ItemsOnPage/ItemsOnPage';
import type { TypePosts } from '../../../entities/post/types/postType';

import PostApi from '../../../entities/post/api/postApi';

function ListPosts(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginatedPosts, setPaginatedPosts] = useState<TypePosts | []>([]);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(3);

  const [totalPages, setTotalPages] = useState<number>(0);

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  useEffect(() => {
    void PostApi.getPaginatedPosts(page, limit)
      .then((data) => {
        setPaginatedPosts(data.data);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((err) => {
        console.log(err);
        setError('Не удалось загрузить посты');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, limit]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="container">
      <ItemsOnPage setLimit={setLimit} limit={limit} />

      {paginatedPosts.map((post) => (
        <ItemPost key={post.id} post={post} />
      ))}

      <div className="d-flex justify-content-center">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
export default ListPosts;
