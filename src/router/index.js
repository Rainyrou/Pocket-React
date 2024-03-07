import React from 'react';

const Home = React.lazy(() => import('../container/Home'));
const Data = React.lazy(() => import('../container/Data'));
const User = React.lazy(() => import('../container/User'));
const Login = React.lazy(() => import('../container/Login'));
const Detail = React.lazy(() => import('../container/Detail'));
const UserInfo = React.lazy(() => import('../container/UserInfo'));
const Account = React.lazy(() => import('@/container/Account'));

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/account',
    component: Account
  }
];
export default routes;
