import React from 'react';

type ItemsOnPageProps = {
  setLimit: (limit: number) => void;
  limit: number;
};
function ItemsOnPage({ setLimit, limit }: ItemsOnPageProps): JSX.Element {
  return (
    <div className="col-md-6 text-end mb-3">
      <div className="input-group" style={{ maxWidth: '220px' }}>
        <span className="input-group-text">Показывать по:</span>
        <select
          className="form-select "
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}
export default ItemsOnPage;
