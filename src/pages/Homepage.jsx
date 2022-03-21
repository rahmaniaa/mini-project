import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardSwiper, SingleRowCardList } from '../components';
import Dashboard from '../layout/Dashboard';
import { scrollToTop } from '../utility/Scroll';

function Homepage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [eventStartingSoon, setEventStartingSoon] = useState({
    isLoading: true,
    data: false,
    error: false,
  });

  const [photographyEvents, setPhotographyEvents] = useState({
    isLoading: true,
    data: false,
    error: false,
  });

  useEffect(() => {
    // GET API for event starting soon
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}events?date=today`)
      .then((res) => {
        setEventStartingSoon({
          isLoading: false,
          data: res.data.result,
          error: false,
        });
      })
      .catch((error) => {
        setEventStartingSoon({
          isLoading: false,
          data: false,
          error: error.message,
        });
      });

    // GET API for Photography Event
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}events?category=music&limit=4`)
      .then((res) => {
        setPhotographyEvents({
          isLoading: false,
          data: res.data.result,
          error: false,
        });
      })
      .catch((error) => {
        setPhotographyEvents({
          isLoading: false,
          data: false,
          error: error.message,
        });
      });
  }, []);

  return (
    <Dashboard>
      <div className='container homepage'>
        <div className='list'>
          <h2>Attend an event starting soon</h2>
          <CardSwiper events={eventStartingSoon} />
        </div>
        <div className='list'>
          <div className='list-title mb-4'>
            <h2>Music Events</h2>
            <Link to='events'>More events</Link>
          </div>
          <SingleRowCardList events={photographyEvents} />
        </div>
      </div>
    </Dashboard>
  );
}

export default Homepage;
