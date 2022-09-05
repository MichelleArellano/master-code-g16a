import React from 'react';

const Item = ({title, url, id}) => {
  return (
  <div className="card">
    <img src={url} alt={title}/>
    <p>{title}</p>
  </div>
  );
}

export default Item