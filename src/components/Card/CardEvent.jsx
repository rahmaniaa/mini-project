import { Link } from 'react-router-dom';
import { dateFormatter } from '../../utility/Time';

function CardEvent(props) {
  const event = props.event;
  return (
    <>
      <Link
        className='card card-event p-0'
        to={`/user/${event.userId}/event/${event.id}`}>
        <img src={event.image} className='card-img-top' alt='card' />
        <div className='card-body'>
          <small className='badge'>{event.category.categoryName}</small>
          <p className='mt-1'>{dateFormatter(event.eventDate)}</p>
          <h5 className='card-title'>{event.title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{`${event.user.firstName} ${event.user.lastName}`}</h6>
        </div>
      </Link>
    </>
  );
}

export default CardEvent;
