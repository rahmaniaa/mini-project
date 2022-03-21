import React from 'react';
import { AvatarCommentator } from '..';

function UserComment(props) {
  const data = props.data;
  return (
    <div className='user-comment my-2'>
      <AvatarCommentator data={data} />
      <p className='mt-3'>{data.comment}</p>
    </div>
  );
}

export default UserComment;
