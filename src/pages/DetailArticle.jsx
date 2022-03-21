import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AvatarEventCreator,
  EventArticle,
  CommentsList,
  HeaderArticle,
  FormInputComment,
  HeaderLoading,
  LoadingContents,
  SimpleGrowingSpinners,
} from '../components';
import Default from '../layout/Default';
import { scrollToTop } from '../utility/Scroll';

function DetailArticle() {
  const [dataEvent, setDataEvent] = useState({
    isLoading: true,
    data: false,
    error: false,
  });

  const [dataComment, setDataComment] = useState({
    isLoading: true,
    data: false,
    error: false,
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  const params = useParams();

  useEffect(() => {
    // Get API Detail Event
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}events/${params.eventId}`)
      .then((res) => {
        setDataEvent({
          isLoading: false,
          data: res.data.result,
          error: false,
        });
      })
      .catch((error) => {
        setDataEvent({
          isLoading: false,
          data: false,
          error: error.res.message,
        });
      });

    // Get API Event Comments
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}comment/${params.eventId}`)
      .then((res) => {
        setDataComment({
          isLoading: false,
          data: res.data.results,
          error: false,
        });
      })
      .catch((error) => {
        setDataComment({
          isLoading: false,
          data: false,
          error: error.message,
        });
      });
  }, [params.eventId]);

  return (
    <Default>
      <div className='article-container'>
        <div className='article-wrapper'>
          {dataEvent.isLoading ? (
            <HeaderLoading />
          ) : (
            dataEvent.data && <HeaderArticle data={dataEvent.data} />
          )}

          <div className='article-bottom-wrapper px-3 d-flex w-100 m-3'>
            <div className='content col-8'>
              {dataEvent.isLoading ? (
                <LoadingContents />
              ) : (
                dataEvent.data && (
                  <>
                    <EventArticle data={dataEvent.data} />
                    <CommentsList data={dataComment.data} />
                    {localStorage.getItem('token') && (
                      <FormInputComment id={params.eventId} />
                    )}
                  </>
                )
              )}
            </div>

            <div className='side-bar col-4'>
              {dataEvent.isLoading ? (
                <SimpleGrowingSpinners />
              ) : (
                dataEvent.data && (
                  <AvatarEventCreator data={dataEvent.data.user} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default DetailArticle;
