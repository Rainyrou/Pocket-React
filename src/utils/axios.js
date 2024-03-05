import axios from 'axios';
import { Toast } from 'zarm';

const MODE = import.meta.env.MODE;

axios.defaults.baseURL =
  MODE === 'development' ? '/api' : 'http://114.132.167.29:7009';
axios.defaults.withCredentials = true;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['Authorization'] = `${
  localStorage.getItem('token') || null
}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use((res) => {
  if (typeof res.data !== 'object') {
    Toast.show('服务端异常！');
    return Promise.reject(res);
  }
  if (res.data.code !== 200) {
    if (res.data.msg) Toast.show(res.data.msg);
    // 没有登录的用户，默认跳转到 /login
    if (res.data.code === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(res.data);
  }

  return res.data;
});

export default axios;
