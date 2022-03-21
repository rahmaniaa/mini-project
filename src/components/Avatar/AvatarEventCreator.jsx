function AvatarEventCreator(props) {
  const creator = props.data;

  return (
    <div className='AvatarEventCreator d-flex align-items-center justify-content-end'>
      <img
        className='avatar-image me-4'
        src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=612x612&w=0&h=NlD1eNScGYsHBFjAzWrR0JzwkTOvtddTsq-9v5-LryQ='
        alt='avatar creator'
      />

      <div className='avatar-text'>
        <p>Created by</p>
        <h4>{`${creator.firstName} ${creator.lastName}`}</h4>
      </div>
    </div>
  );
}

export default AvatarEventCreator;
