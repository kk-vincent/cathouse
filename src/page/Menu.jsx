import React from 'react';

import '../style/var.css'
import '../style/Hero/nav_hover.scss'

import Nav_lin from '../features/Header/nav'
import Hero_pic from '../features/Header/Hero'
import Menu_card from '../component/Menu_card'
import Footer_b from '../features/footer'

import orgcat from '../pic/cat/menu/Mask_grou.png'
import cat2 from '../pic/cat/menu/Mask_group_2.png'
import cat3 from '../pic/cat/menu/Mask_group_3.png'

const Menu=()=>{
    return (
        <div>
            <header>
                <Nav_lin />
                <Hero_pic/>
            </header>
            <div>
                <Menu_card cat_pic={orgcat} theme='貓班長｜秩序與節奏的守護者'
                    lines={[
                        '擁有極高的巡檢頻率，確保每一杯咖啡的萃取環境都在其視線範圍內',
                        '個性嚴謹、處變不驚，負責監督店內的靜謐指數。若您發現牠在桌邊駐足，代表您的放鬆數據已達標。']} />
                <Menu_card cat_pic={cat3} theme='風味導師｜靈魂與頻率的調校師'
                    lines={[
                        '擅長感官分析，對莊園豆的香氣極其敏感。比起巡邏，',
                        '牠更喜歡挑選光影最精確的位置進行深度冥想。',
                        '牠的出現能協助您校準內心的頻率，將雜訊過濾，只留下最純粹的咖啡感官體驗。']} />
                <Menu_card cat_pic={cat2} theme='空間評審員｜靜謐角落的深度測量師'
                    lines={[
                        '專精於挖掘店內最隱密的舒適角落，比起與人交際，',
                        '牠更熱衷於測試每個座位的「寧靜斜率」與「光影遮蔽率」。',
                        '若牠在您的腳邊短暫停留後優雅離去，代表您挑選的位置已通過「該城」最高規格的放鬆認證。']} />
            </div>
            <footer>
                <Footer_b/>
            </footer>
        </div>
    )
}

export default Menu;