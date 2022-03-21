import React from 'react';
import { CardEvent, CardLoading } from '..';

function SingleRowCardList(props) {
  const events = props.events;
  return (
    <div className='row gx-3 row-card-list d-flex flex-wrap'>
      {events.isLoading ? (
        <>
          <div className='col'>
            <CardLoading />
          </div>
          <div className='col'>
            <CardLoading />
          </div>
          <div className='col'>
            <CardLoading />
          </div>
          <div className='col'>
            <CardLoading />
          </div>
        </>
      ) : (
        events.data &&
        events.data.map((event) => {
          return (
            <div
              className='col'
              key={`Photography-${event.categoryId}-${event.id}`}>
              <CardEvent event={event} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default SingleRowCardList;