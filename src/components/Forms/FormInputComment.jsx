import axios from 'axios';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { SimpleAvatarUser } from '..';

function FormInputComment(props) {
  const eventId = props.id;

  const [comment, setComment] = useState();

  function handlerSubmit(e, comment) {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL_API}comment/${eventId}`,
      headers: { Authorization: `${localStorage.getItem('token')}` },
      data: {
        comment: `${comment}`,
      },
    })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: res.data.message,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: error.message || 'Failed Input Comment',
        });
      });
  }

  return (
    <div className='form-input-comment'>
      <SimpleAvatarUser color={'text-black'} />
      <FloatingLabel
        controlId='floatingTextarea2'
        label='Comments'
        className='mt-2 w-100'>
        <Form.Control
          as='textarea'
          placeholder='Comments'
          style={{ height: '100px' }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className='submit-comment d-flex align-items-center rounded-pill mt-3 pe-4'
          type='submit'
          onClick={(e) => handlerSubmit(e, comment)}>
          <svg
            className='me-3'
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M23 13.5C23.0034 14.8199 22.6951 16.1219 22.1 17.3C21.3944 18.7118 20.3098 19.8992 18.9674 20.7293C17.6251 21.5594 16.0782 21.9994 14.5 22C13.1801 22.0035 11.8781 21.6951 10.7 21.1L5 23L6.9 17.3C6.30493 16.1219 5.99656 14.8199 6 13.5C6.00061 11.9218 6.44061 10.3749 7.27072 9.03258C8.10083 7.69028 9.28825 6.6056 10.7 5.90003C11.8781 5.30496 13.1801 4.99659 14.5 5.00003H15C17.0843 5.11502 19.053 5.99479 20.5291 7.47089C22.0052 8.94699 22.885 10.9157 23 13V13.5Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Submit
        </Button>
      </FloatingLabel>
    </div>
  );
}

export default FormInputComment;
