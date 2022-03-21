import ButtonSearch from './../Button/ButtonSearch';
import search from './../../assets/icons/search-icon.png';

function Search() {
  return (
    <div className='search'>
      <form>
        <img className='search-icon' src={search} alt='search-icon' />
        <input type='text' placeholder='Search events' aria-label='Search' />
        <ButtonSearch className='btn' name='Search' />
      </form>
    </div>
  );
}

export default Search;
