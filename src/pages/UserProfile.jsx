import React from 'react';
import { AvatarUserProfile } from '../components';
import Default from '../layout/Default';
import { scrollToTop } from '../utility/Scroll';

function UserProfile() {
  scrollToTop();

  return (
    <>
      <Default>
        <AvatarUserProfile />
      </Default>
    </>
  );
}

export default UserProfile;
