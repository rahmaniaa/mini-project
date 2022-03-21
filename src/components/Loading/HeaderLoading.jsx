import React from 'react';

function HeaderLoading() {
  return (
    <>
      <div className='card card-header'>
        <div className='card-body article-body'>
          <h2 className='card-title placeholder-glow'>
            <span className='placeholder col-12'></span>
          </h2>
          <p className='card-text d-flex align-items-center placeholder-glow'>
            <span className='placeholder col-4'></span>
            <span className='placeholder col-2 ms-3'>Business</span>
          </p>
        </div>
        <img
          src='https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png'
          className='card-img-bottom header-img'
          alt='Placeholder'
        />
      </div>
    </>
  );
}

export default HeaderLoading;
