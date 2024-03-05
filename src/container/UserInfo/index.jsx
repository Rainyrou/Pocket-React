import React, { useEffect, useState } from 'react';
import { Button, FilePicker, Input, Toast, NavBar } from 'zarm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { get, post, imgUrlTrans } from '@/utils';
import { baseUrl } from '@/config';
import s from './style.module.less';
import { ArrowLeft } from '@zarm-design/icons';

const UserInfo = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState('');
  const [signature, setSignature] = useState('');
  const token = localStorage.getItem('token');

  const getUserInfo = async () => {
    const { data } = await get('/api/user/get_userinfo');
    setUser(data);
    console.log(data);
    setAvatar(data.avatar);
    setSignature(data.signature);
  };

  useEffect(() => {
    getUserInfo(); // 初始化请求
  }, []);

  // 编辑用户信息方法
  const save = async () => {
    const { data } = await post('/api/user/edit_userinfo', {
      signature,
      avatar
    });
    Toast.show('修改成功');
    history.goBack();
  };

  const handleSelect = (file) => {
    let formData = new FormData();
    // 生成 form-data 数据类型
    formData.append('file', file.file);
    // 通过 axios 设置  'Content-Type': 'multipart/form-data' 进行文件上传
    axios({
      method: 'post',
      url: `${baseUrl}/upload`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    }).then((res) => {
      console.log(res);
      setAvatar(imgUrlTrans('/api' + res.data));
    });
  };

  return (
    <div className={s.userinfo}>
      <NavBar
        className={s.navbar}
        left={<ArrowLeft theme="primary" onClick={() => history.push('/')} />}
        title="用户信息"
      />
      <div className={s.item}>
        <div className={s.title}>头像</div>
        <div className={s.avatar}>
          <img className={s.avatarUrl} src={avatar} alt="" />
          <div className={s.desc}>
            <span>支持 jpg、png、jpeg 格式大小 200KB 以内的图片</span>
            <FilePicker
              className={s.filePicker}
              onChange={handleSelect}
              accept="image/*"
            >
              <Button className={s.upload} theme="primary" size="xs">
                点击上传
              </Button>
            </FilePicker>
          </div>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.title}>个性签名</div>
        <div className={s.signature}>
          <Input
            clearable
            type="text"
            value={signature}
            placeholder="请输入个性签名"
            onChange={(value) => setSignature(value)}
          />
        </div>
      </div>
      <Button className={s.btn} onClick={save} block theme="primary">
        保存
      </Button>
    </div>
  );
};

export default UserInfo;
