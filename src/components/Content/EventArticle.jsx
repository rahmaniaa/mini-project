import React from 'react';

function EventArticle(props) {
  const event = props.data;

  return (
    <div className='event-article mb-5'>
      <h3 className='article-title'>Details</h3>
      <p className='article-paragraph'>{event.description}</p>
    </div>
  );
}

export default EventArticle;
