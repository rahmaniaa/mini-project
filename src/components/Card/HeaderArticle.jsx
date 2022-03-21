import { dateFormatter } from '../../utility/Time';

function HeaderArticle(props) {
  const event = props.data;
  return (
    <>
      <div className='card card-header'>
        <div className='card-body article-body'>
          <h2 className='card-title'>{event.title}</h2>
          <p className='card-text d-flex align-items-center'>
            <span className='me-2'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21 6H7C5.89543 6 5 6.89543 5 8V22C5 23.1046 5.89543 24 7 24H21C22.1046 24 23 23.1046 23 22V8C23 6.89543 22.1046 6 21 6Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18 4V8'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 4V8'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 12H23'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            {dateFormatter(event.eventDate)}
            <span className='badge badge-category ms-3'>
              {event.category.categoryName}
            </span>
          </p>
        </div>
        <img
          src={event.image}
          className='card-img-bottom header-img'
          alt='Placeholder'
        />
      </div>
    </>
  );
}

export default HeaderArticle;
