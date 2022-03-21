import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../components';

function Default(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setIsLogin(true) : setIsLogin(false);
  }, [isLogin]);

  return (
    <div className='default-layout'>
      <Navbar background={true} avatar={isLogin} />
      <div className='container my-5 pt-5'>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Default;
