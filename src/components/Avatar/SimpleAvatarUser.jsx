import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrowingSpinners } from '..';

function SimpleAvatarUser(props) {
  const color = props.color;

  const [profile, setProfile] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}profile`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setProfile(res.data.result.user);
      })
      .catch((error) => {
        setProfile(error.res.message);
      });
  }, []);

  return (
    <Link
      to={'/user'}
      className='simple-avatar-user d-flex align-items-center text-white'>
      {!profile ? (
        <SimpleGrowingSpinners />
      ) : (
        <>
          <img
            className='avatar-image rounded-circle me-2'
            src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=612x612&w=0&h=NlD1eNScGYsHBFjAzWrR0JzwkTOvtddTsq-9v5-LryQ='
            alt='avatar user'
          />

          <div className={`avatar-text ${color}`}>
            <h6>{`${profile.firstName} ${profile.lastName}`}</h6>
          </div>
        </>
      )}
    </Link>
  );
}

export default SimpleAvatarUser;
