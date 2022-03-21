import { Footer, Hero, Navbar } from '../components';
import { useEffect, useState } from 'react';

function Dashboard(props) {
  const [backgroundNav, setBackgroundNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function checkScroll(e) {
    const lastPosition = window.scrollY;
    if (lastPosition > 50) {
      setBackgroundNav(true);
    } else if (backgroundNav === true) {
      setBackgroundNav(false);
    } else {
      setBackgroundNav(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setIsLogin(true) : setIsLogin(false);
  }, [isLogin]);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className='dashboard-layout'>
      <Navbar background={backgroundNav} avatar={isLogin} />
      <Hero />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Dashboard;
