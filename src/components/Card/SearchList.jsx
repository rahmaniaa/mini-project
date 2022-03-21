import React from 'react';
import { CardEvent, CardLoading } from '..';

function SearchList(props) {
  const events = props.events;
  console.log(events);
  return (
    <div className='row g-2 mt-2 mb-4 row row-cols-2 row-cols-lg-4 g-2 g-lg-3'>
      {!events ? (
        <>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
          <div className='col-3'>
            <CardLoading />
          </div>
        </>
      ) : (
        events &&
        events.map((event) => {
          return (
            <div className='col' key={`${event.categoryId}-${event.id}`}>
              <CardEvent event={event} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default SearchList;
