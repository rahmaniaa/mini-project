import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleGrowingSpinners } from '..';

function AvatarUserProfile() {
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem('token');
    navigate('/');
  }

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
    <div className='AvatarUserProfile d-flex flex-column align-items-center'>
      {!profile ? (
        <SimpleGrowingSpinners />
      ) : (
        <>
          <img
            className='rounded-circle mb-4'
            src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=612x612&w=0&h=NlD1eNScGYsHBFjAzWrR0JzwkTOvtddTsq-9v5-LryQ='
            alt='avatar creator'
          />

          <div className='avatar-text d-flex flex-column align-items-center mb-5'>
            <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
            <p>{profile.email}</p>
          </div>

          <button
            type='button'
            className='btn btn-sign-out'
            onClick={handleSignOut}>
            <span className='me-3'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11 23H7C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H11'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18 19L23 14L18 9'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M23 14H11'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}

export default AvatarUserProfile;
