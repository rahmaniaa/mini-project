import moment from 'moment';

function AvatarCommentator(props) {
  const data = props.data;
  return (
    <div className='avatar-commentator d-flex align-items-center'>
      <img
        className='avatar-image me-4'
        src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=612x612&w=0&h=NlD1eNScGYsHBFjAzWrR0JzwkTOvtddTsq-9v5-LryQ='
        alt='avatar user'
      />

      <div className='avatar-text'>
        <h4>{`${data.user.firstName} ${data.user.lastName}`}</h4>
        <p>{moment(data.user.createdAt).startOf('minutes').fromNow()}</p>
      </div>
    </div>
  );
}

export default AvatarCommentator;
