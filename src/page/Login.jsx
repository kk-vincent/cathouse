import React from 'react';
import Nav_lin from '../features/Header/nav';
import Footer_b from '../features/footer';
import Input from '../component/Input';
import Button from '../component/Button';

const Login = () => {
    return (
        <div>

            <Nav_lin />

            <div className='flex w-full m-10'>

                <div className='flex flex-col justify-center items-center w-1/2 h-[60vh]  border-r-2 border-gray-700'>
                    <Input type='text' variant='peimary' name='帳號:' labelname='name' className='mb-5' />
                    <Input type='password' variant='peimary' name='密碼:' labelname='pas' className='mb-10' />
                    <Button children={'開啟專屬預約'} />

                </div>

                <div className='flex flex-col justify-center w-1/2 items-center'>
                    <h1 className='text-[48px] font-black text-[var(--color-border)] tracking-[20px] mb-10'>淬鍊一段純粹時光</h1>
                    <p className='text-[24px] font-black my-5'>
                        與貓共舞，與味覺對話，淬鍊純粹的時光。<br/>
                        註冊專屬權限，預約您的午後寧靜席位。</p>
                    <a href="/Register" className='border-2 border-[var(--color-text)] rounded-full px-8 py-2 text-[24px] hover:bg-[var(--color-text)] hover:text-[var(--color-background)] hover:scale-110'>註冊</a>
                </div>

            </div>


            <Footer_b />

        </div>
    )
}

export default Login;