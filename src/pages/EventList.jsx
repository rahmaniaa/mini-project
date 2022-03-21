import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination, SearchList } from '../components';
import Default from '../layout/Default';
import { scrollToTop } from '../utility/Scroll';

function EvenList() {
  useEffect(() => {
    scrollToTop();
  }, []);

  // const [filter, setFilter] = useState({
  //   category: '',
  //   date: '',
  //   order: '',
  // });

  const [filterByCategory, setFilterByCategory] = useState('');
  console.log(filterByCategory);

  const [filterByDate, setFilterByDate] = useState('');
  console.log(filterByDate);

  const [sortingBy, setSortingBy] = useState('date');
  console.log(sortingBy);

  const [allEvent, setAllEvent] = useState({
    isLoading: true,
    data: false,
    error: false,
  });

  useEffect(() => {
    // GET API for all event
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL_API}events?category=${filterByCategory}&date=${filterByDate}&order=${sortingBy}&limit=8&page=1`
      )
      .then((res) => {
        setAllEvent({
          isLoading: false,
          data: res.data.result,
          error: false,
        });
      })
      .catch((error) => {
        setAllEvent({
          isLoading: false,
          data: false,
          error: error.message,
        });
      });
  }, [filterByCategory, filterByDate, sortingBy]);

  console.log(allEvent);

  // const [events, setEvents] = useState([]);

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   setFilter({ ...filter, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BASE_URL_API}/events`, {
  //       params: {
  //         ...filter,
  //         page: 1,
  //       },
  //     })
  //     .then((res) => {
  //       setEvents(res.data.result);
  //     })
  //     .catch((error) => alert(error.response.data.message));
  // }, [filter]);

  return (
    <Default>
      <div className='container'>
        <div className='list-results'>
          <h5 className='mb-4'>Showing 8 Results for Events</h5>
        </div>
        <>
          <div className='search_filter'>
            <div className='form-floating'>
              <select
                

                className='form-select'
                id='floatingSelect'
                aria-label='Floating label select example'
                value={filterByCategory}
                onChange={(e) => setFilterByCategory(e.target.value)}>
                <option value=''>All Category</option>
                <option value='photography'>Photography</option>
                <option value='design'>Design</option>
                <option value='development'>Development</option>
                <option value='marketing'>Marketing</option>
                <option value='business'>Business</option>
                <option value='lifestyle'>LifeStyle</option>
                <option value='music'>Music</option>
              </select>
              <label htmlFor='floatingSelect'>Filter By Category</label>
            </div>

            <div className='form-floating'>
              <select
               

                className='form-select'
                id='floatingSelect'
                aria-label='Floating label select example'
                value={filterByDate}
                onChange={(e) => setFilterByDate(e.target.value)}>
                <option value=''>All Time</option>
                <option value='today'>Today</option>
                <option value='tomorrow'>Tomorrow</option>
                <option value='week'>This Week</option>
                <option value='month'>This Mounth</option>
                <option value='year'>This Year</option>
              </select>
              <label htmlFor='floatingSelect'>Filter By Date</label>
            </div>

            <div className='form-floating'>
              <select
                
                className='form-select'
                id='floatingSelect'
                aria-label='Floating label select example'
                value={sortingBy}
                onChange={(e) => setSortingBy(e.target.value)}>
                <option value='date'>Date</option>
                <option value='name'>Name</option>
              </select>
              <label htmlFor='floatingSelect'>Sorting By</label>
            </div>
          </div>
        </>
        {/* <Dropdown /> */}
        <SearchList events={allEvent.data} />
        <Pagination />
      </div>
    </Default>
  );
}

export default EvenList;
