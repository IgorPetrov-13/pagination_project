import React from 'react';
import { Link } from 'react-router-dom';

function ErrorMessage({ message }: { message: string }): JSX.Element {
  return (
    <div className="container py-5 text-center">
      <div className="alert alert-warning">Произошла ошибка</div>
      <p>{message}</p>
      <Link to="/posts" className="btn btn-primary">
        Вернуться к списку постов
      </Link>
    </div>
  );
}
export default ErrorMessage;
