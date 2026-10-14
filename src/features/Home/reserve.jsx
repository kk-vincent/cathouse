import React from 'react';
import Reservs_t from '../../component/ScrollAnimate/reserve_scr_t';
import Reservs_b from '../../component/ScrollAnimate/reserve_scr_b';
import Reservs_a from '../../component/ScrollAnimate/reserve_scr_a';

const Reserve = () => {
    return (
        <div className='bg-[var(--color-border)] text-center p-30'>
            <h1 className='text-[64px] font-black text-[var(--color-background)] tracking-[20px] mb-30'><Reservs_t>預約您的專屬寧靜</Reservs_t></h1>
            <p className='text-[24px] font-black text-[var(--color-background)] tracking-[10px] mb-50'>
                <Reservs_a>
                    給自己一個下午，與貓共舞，與味覺對話。每日名額有限，<br/>優先開放質感
                    卡友預約。
                </Reservs_a>
            </p>
            <Reservs_b>
                <a href="/Register"
                    className='bg-[var(--color-background)] border-2 border-[var(--color-border)] px-15 py-2 text-[50px] rounded-full just-me-again-down-here-regular hover:bg-[var(--color-border)] hover:border-[var(--color-background)] hover:text-[var(--color-background)]'>
                        Register
                </a>
            </Reservs_b>
        </div>
    )
}

export default Reserve;