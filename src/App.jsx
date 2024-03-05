import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, useLocation } from 'react-router-dom';
import routes from './router';

import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';

function App() {
  const location = useLocation();
  const { pathname } = location; // 获取当前路径
  const needNav = ['/', '/data', '/user']; // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false); // 是否展示 Nav

  useEffect(() => {
    setShowNav(needNav.includes(pathname));
  }, [pathname]);

  return (
    <>
      <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </ConfigProvider>
      <NavBar showNav={showNav} pathname={pathname}></NavBar>
    </>
  );
}

export default App;
