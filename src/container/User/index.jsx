import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Cell, Button } from 'zarm';
import { get } from '@/utils';
import s from './style.module.less';

const User = () => {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState('');
  const history = useHistory();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { data } = await get('/api/user/get_userinfo');
    setUser(data);
    setAvatar(data.avatar);
  };
  const logout = async () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className={s.user}>
      <div className={s.head}>
        <img
          className={s.avatar}
          style={{ width: 60, height: 60, borderRadius: 8 }}
          src={avatar}
          alt=""
        />
        <div className={s.info}>
          <span>{user.username || '--'}</span>
          <span>
            <img
              style={{ width: 30, height: 30, verticalAlign: '-10px' }}
              src="/geqian.webp"
              alt=""
            />
            <b>{user.signature || '暂无个签'}</b>
          </span>
        </div>
      </div>
      <div className={s.content}>
        <Cell
          hasArrow
          title="用户信息修改"
          onClick={() => history.push('/userinfo')}
          icon={
            <img
              style={{ width: 20, verticalAlign: '-7px' }}
              src="/gxqm.webp"
              alt=""
            />
          }
        />
        <Cell
          hasArrow
          title="重置密码"
          onClick={() => history.push('/account')}
          icon={
            <img
              style={{ width: 20, verticalAlign: '-7px' }}
              src="/zhaq.webp"
              alt=""
            />
          }
        />
        <Cell
          hasArrow
          title="关于我"
          onClick={() => window.open('https://github.com/Rainyrou', '_blank')}
          icon={
            <img
              style={{ width: 20, verticalAlign: '-7px' }}
              src="/lianxi.webp"
              alt=""
            />
          }
        />
      </div>
      <Button className={s.logout} block theme="danger" onClick={logout}>
        退出登录
      </Button>
    </div>
  );
};

export default User;
