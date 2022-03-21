import { NavLink } from 'react-router-dom';
import { SimpleAvatarUser } from '..';
import { MonochromeFullLogo } from '../../assets';

function Navbar(props) {
  const avatar = props.avatar;
  const background = props.background;

  return (
    <>
      <nav
        className='navbar fixed-top'
        style={{ backgroundColor: background && '#214457' }}>
        <div className='container d-flex align-items-center'>
          <NavLink className='navbar-brand' to='/'>
            <img src={MonochromeFullLogo} alt='SeeEvent Logo' height='26' />
          </NavLink>

          {!avatar ? (
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link sign-up' to='/signup'>
                  Sign Up
                </NavLink>
              </li>
              <li className='nav-item sign-in'>
                <NavLink className='nav-link' to='/login'>
                  Sign In
                </NavLink>
              </li>
            </ul>
          ) : (
            <SimpleAvatarUser color={'text-white'} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
