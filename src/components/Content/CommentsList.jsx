import React from 'react';
import { UserComment } from '..';

function CommentsList(props) {
  const comments = props.data;

  return (
    <div className='event-comment mb-5'>
      <h4 className='mb-4'>Comments</h4>
      {comments &&
        comments.map((comment, idx) => {
          return (
            <UserComment
              key={`${comment.userId}-${comment.user.createdAt}-${idx}`}
              data={comment}
            />
          );
        })}
    </div>
  );
}

export default CommentsList;
