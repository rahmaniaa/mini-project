function CardLoading(props) {
  return (
    <>
      <div className='card card-event loading p-0' to={'/event'}>
        <img
          src='https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png'
          className='card-img-top'
          alt='card'
        />
        <div className='card-body placeholder-glow'>
          <small className='placeholder col-3'></small>
          <p className='mt-1 placeholder-glow'>
            <span className='placeholder col-2'></span>{' '}
            <span className='placeholder col-2'></span>{' '}
            <span className='placeholder col-6'></span>
          </p>
          <h5 className='card-title placeholder-glow'>
            <span className='placeholder col-2'></span>{' '}
            <span className='placeholder col-5'></span>{' '}
            <span className='placeholder col-4'></span>{' '}
            <span className='placeholder col-5'></span>
          </h5>
          <h6 className='card-subtitle mb-2 text-muted placeholder-glow'>
            <span className='placeholder col-1'></span>{' '}
            <span className='placeholder col-3'></span>{' '}
            <span className='placeholder col-'></span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default CardLoading;
