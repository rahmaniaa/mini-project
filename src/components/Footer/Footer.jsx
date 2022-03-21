import {
  Facebook,
  GoldFullLogo,
  Instagram,
  Twitter,
  Youtube,
} from '../../assets';

function Footer() {
  return (
    <footer className='d-flex flex-column'>
      <div className='footer-top container'>
        {/* About */}
        <div className='about'>
          <img src={GoldFullLogo} alt='See Event Logo' height='35' />
          <p>
            SeeEvent is a platform where you can create or find an amazing
            events around the world.
          </p>
          <div className='media-social'>
            <h5>Follow Us on</h5>
            <div className='icons-social-media'>
              <a href='/'>
                <img src={Facebook} alt='Facebook' />
              </a>
              <a href='/'>
                <img src={Instagram} alt='Instagram' />
              </a>
              <a href='/'>
                <img src={Twitter} alt='Twitter' />
              </a>
              <a href='/'>
                <img src={Youtube} alt='Youtube' />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className='footer-list'>
          <h5>Links</h5>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Explore</a>
            </li>
            <li>
              <a href='/'>My Events</a>
            </li>
            <li>
              <a href='/'>Bookmarks</a>
            </li>
          </ul>
        </div>

        {/* Top Categories */}
        <div className='footer-list'>
          <h5>Top Categories</h5>
          <ul>
            <li>
              <a href='/'>Design</a>
            </li>
            <li>
              <a href='/'>Photography</a>
            </li>
            <li>
              <a href='/'>Development</a>
            </li>
            <li>
              <a href='/'>Marketing</a>
            </li>
          </ul>
        </div>

        {/* Contact us */}
        <div className='footer-list'>
          <h5>Contact us</h5>
          <p>
            Indonesia <br />
            Jl. Planet Namek No. 123, Surabaya <br />
            Telp : 083849420146 <br />
            Email : Johndoe@seeevent.com
          </p>
        </div>
      </div>
      <div className='footer-bottom container'>
        <div>
          <p>© 2021 SeeEvent All rights reserved.</p>
        </div>
        <ul className='d-flex list-unstyled'>
          <li>
            <a className='text-decoration-none' href='/'>
              Privacy Policy
            </a>
          </li>
          <li className='mx-4'>
            <a className='text-decoration-none' href='/'>
              Terms of Service
            </a>
          </li>
          <li>
            <a className='text-decoration-none' href='/'>
              Helps
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
