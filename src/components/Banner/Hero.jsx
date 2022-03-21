import { Search } from '..';

function Hero() {
  return (
    <div className='hero'>
      <div className='container d-flex align-items-center justify-content-center h-100 flex-column flex-lg-row'>
        <div className='title w-75'>
          <h1>
            <span>Create</span> or <span>Find</span> interesting{' '}
            <span>Events</span> around The world
          </h1>
        </div>
        <div className='input-search w-100'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Hero;
