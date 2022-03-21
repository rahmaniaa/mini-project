function Pagination() {
  return (
    <div className='pagination'>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' href='/' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'></span>
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              ...
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/'>
              10
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='/' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
