import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(): JSX.Element {
  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-3">
        <h1 className="display-5 mb-3">Добро пожаловать в Pagination!</h1>
        <p className="lead text-muted">
          Удобный инструмент для вывода пользовательских карточек с возможностью пагинации
        </p>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-auto">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/posts" className="btn btn-primary btn-lg px-4">
              Открыть посты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
