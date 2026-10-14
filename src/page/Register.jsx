import React from 'react';
import Nav_lin from '../features/Header/nav';
import Footer_b from '../features/footer';

import Input from '../component/Input';
import Button from '../component/Button';

const Register = () => {
    return (
        <div>
            <Nav_lin />
            <div className='flex flex-col justify-center items-center w-full my-10'>
                <h1 className='text-[50px] font-black tracking-[40px] mb-10 text-[var(--color-border)]'>註冊</h1>
                <Input type='text' variant='peimary' name='姓名:' labelname='user' className='mb-5' />
                <Input type='text' variant='peimary' name='帳號:' labelname='name' className='mb-5' />
                <Input type='password' variant='peimary' name='密碼:' labelname='pas' className='mb-5' />
                <Input type='email' variant='peimary' name='信箱:' labelname='email' className='mb-10' />
                <Button children={'註冊'} />
            </div>
            <Footer_b />
        </div>
    )
}

export default Register