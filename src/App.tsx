import './App.css';
import 'animate.css';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { useEffect } from 'react';
import cookie from 'react-cookies';

function App() {
  useEffect(() => {
    // 如果是pc端，提示用手机浏览
    if (window.innerWidth > 500) {
      alert('请使用手机浏览，以保证浏览效果');
    }
    try {
      if (!cookie.load('userInfo')) {
        window.location.replace('#/login');
      }
    } catch (err) {
      console.log(err);
    }

  }, [])

  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
