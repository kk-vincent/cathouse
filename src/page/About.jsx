import React from 'react';

import Nav_lin from '../features/Header/nav';
import Footer_b from '../features/footer';
import About_menu from '../component/about_menu';

import pic1 from '../pic/about/pic1.png'
import pic2 from '../pic/about/pic2.png'

const About = () => {
    return (
        <div>
            <Nav_lin />

            <div className='felx justify-center text-center w-full '>
                <h1 className='text-[50px] font-[900] text-[var(--color-border)]'>午茶時光精選</h1>


                <div className='flex w-full justify-center items-center'>
                    <div>
                        <About_menu
                            theme='手作甜點 · Desserts'
                            lines={[
                                '肉球馬卡龍 (3入)...................................$220',
                                '粉嫩肉球造型，含覆盆子、大溪地香草、伯爵茶三種口味。',
                                '威士忌提拉米蘇.....................................$260', '大人味的成熟慶典，浸潤於愛爾蘭威士忌中的手指餅乾。']} />

                        <About_menu
                            theme='精品咖啡 · Coffee'
                            lines={[
                                '喵癒藝伎 Geisha Signature.....................$280',
                                '精選巴拿馬藝伎豆，帶有清新柑橘與茉莉花香，口感乾淨優雅。',
                                '海鹽焦糖拿鐵............................................$180', '濃郁 Espresso 結合絲滑海鹽奶泡，甜鹹適中。', '琥珀冷萃 Amber Cold Brew....................$200', '低溫慢萃 12 小時，展現溫潤可可及醇厚木質調性。']} />

                        <img src={pic1} className='w-full px-10 py-8' />
                    </div>
                    <div>
                        <About_menu
                            theme='天然茗茶 · Tea'
                            lines={[
                                '皇家大吉嶺 Darjeeling..............$280',
                                '來自查姆邦莊園，帶有迷人的麝香葡萄尾韻。',
                                '京都小山園抹茶..........................$180', 
                                '現刷濃厚抹茶，結合微甜萬丹紅豆，苦甜交織。']} />

                        <img src={pic2} className='w-full px-10 py-10' />

                        <About_menu
                            theme='貓主子餐點 · Pet Items'
                            lines={[
                                '挪威鮭魚慕斯...........................$150',
                                '頂級低溫烹調生食級鮭魚，補充毛孩亮麗毛質。',
                                '舒芙蕾鮮雞丁...........................$120', 
                                '土雞胸肉特製，口感蓬鬆如雲朵，適合分享。']} />

                    </div>
                </div>
            </div>


            <Footer_b />
        </div>
    )
}

export default About;