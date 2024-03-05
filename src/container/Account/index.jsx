import React from 'react';
import { Cell, Input, Button, Toast, NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { createForm } from 'rc-form';
import { post } from '@/utils';
import s from './style.module.less';

const Account = (props) => {
  // Account 通过 createForm 高阶组件包裹之后，可以在 props 中获取到 form 属性
  const { getFieldProps, getFieldError } = props.form;

  const submit = () => {
    // validateFields 获取表单属性元素
    props.form.validateFields(async (error, value) => {
      // error 表单验证全部通过为 false，否则为 true
      if (!error) {
        if (value.newpass !== value.newpass2) {
          Toast.show('新密码输入不一致');
          return;
        }
        await post('/api/user/modify_pass', {
          old_pass: value.oldpass,
          new_pass: value.newpass,
          new_pass2: value.newpass2
        });
        Toast.show('修改成功');
        window.location.href = '/user';
      }
    });
  };

  return (
    <>
      <NavBar
        className={s.navbar}
        left={
          <ArrowLeft
            theme="primary"
            onClick={() => (window.location.href = '/')}
          />
        }
        title="重置密码"
      />
      <div className={s.account}>
        <div className={s.head} />
        <div className={s.form}>
          <Cell className={s.zaCell} title="原密码">
            <Input
              className={s.zaInput}
              clearable
              type="text"
              placeholder="请输入原密码"
              {...getFieldProps('oldpass', { rules: [{ required: true }] })}
            />
          </Cell>
          <Cell className={s.zaCell} title="新密码">
            <Input
              className={s.zaInput}
              clearable
              type="text"
              placeholder="请输入新密码"
              {...getFieldProps('newpass', { rules: [{ required: true }] })}
            />
          </Cell>
          <Cell className={s.zaCell} title="确认密码">
            <Input
              className={s.zaInput}
              clearable
              type="text"
              placeholder="请再次输入密码以确认"
              {...getFieldProps('newpass2', { rules: [{ required: true }] })}
            />
          </Cell>
        </div>
        <Button className={s.btn} block theme="primary" onClick={submit}>
          提交
        </Button>
      </div>
    </>
  );
};

export default createForm()(Account);
