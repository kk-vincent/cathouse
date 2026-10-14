import '../style/var.css'
import Nav_lin from '../features/Header/nav'
import Hero_pic from '../features/Header/Hero'
import Menu_card from '../component/Menu_card'
import Footer from '../features/footer'

import Hero_bk_img from '../features/Home/hero'

import '../style/Hero/nav_hover.scss'

import co1 from '../pic/homebody/co1.png'
import co2 from '../pic/homebody/co2.png'
import ca from '../pic/homebody/ca.png'

import Footer_b from '../features/footer'
import ScrollAnimate_L from '../component/ScrollAnimate/ScrollAnimate_L'
import ScrollAnimate_R from '../component/ScrollAnimate/ScrollAnimate_R'
import Reserve from '../features/Home/reserve'

import '../style/Hero/FontStyle.css'

import '../style/table.scss'


const Home = () => {
    return (
        <div>
            <header>
                <Nav_lin />
                <Hero_bk_img />

            </header>

            <div className='flex w-full justify-center'>
                <table className='text-left '>
                    <tbody>
                        <tr>
                            <th className='px-8 py-2 text-[64px] text-[var(--color-border)]'>
                                <ScrollAnimate_L>
                                    每一杯咖啡，<br />
                                    都是與貓的藝術對話
                                </ScrollAnimate_L>
                            </th>
                            <th className='px-8 py-2'></th>
                        </tr>
                        <tr>
                            <th className='px-8 py-2'></th>
                            <th className='px-8 py-2 text-[24px]'>
                                <ScrollAnimate_R>
                                    在城市的喧囂邊緣，我們建造了一座安靜的城。<br />
                                    嚴選全球頂級莊園豆，由專業烘焙師精確校準風味，<br />
                                    讓每一滴萃取，都伴隨著貓咪溫潤的呼吸與陪伴。
                                </ScrollAnimate_R>
                            </th>
                        </tr>
                        <tr>
                            <th className='px-8 py-2 text-[24px]'>
                                <h1 className='text-[48px] text-[var(--color-border)] mb-5'><ScrollAnimate_L>
                                    極致品味｜Single Origin
                                </ScrollAnimate_L>
                                </h1>
                                <ScrollAnimate_L>
                                    嚴選單一產區，封存土地芳香。<br />
                                    我們如同挑選精密零件般嚴格，僅選用高品質莊園豆，<br />
                                    確保每一口風味都純粹無瑕，如同貓咪的好奇心般清澈。
                                </ScrollAnimate_L>
                            </th>
                            <th className='px-8 py-2'>
                                <ScrollAnimate_R><img src={co1} /></ScrollAnimate_R>
                            </th>
                        </tr>
                        <tr>
                            <th className='px-8 py-2'>
                                <ScrollAnimate_L><img src={co2} /></ScrollAnimate_L>
                            </th>
                            <th className='px-8 py-2 text-[24px]'>
                                <h1 className='text-[48px] text-[var(--color-border)] mb-5'><ScrollAnimate_R>匠心工藝｜Master Craft</ScrollAnimate_R>
                                </h1>
                                <ScrollAnimate_R>
                                    指尖的溫度，勾勒生活的細膩詮釋。<br />
                                    每一道拉花、每一次攪拌，都是咖啡師對生活的致敬。<br />
                                    在這裡，匠心不只是技術，更是對貓與空間的無聲溫柔。
                                </ScrollAnimate_R>
                            </th>
                        </tr>
                        <tr>
                            <th className='px-8 py-2 text-[24px]'>
                                <h1 className='text-[48px] text-[var(--color-border)] mb-5'><ScrollAnimate_L>
                                    悠閒時光｜Quiet Moment
                                </ScrollAnimate_L>
                                </h1>
                                <ScrollAnimate_L>
                                    在復古旋律中，找回靈魂的靜謐午後。<br />
                                    貓咪在陽光下伸著懶腰，頻率與復古黑膠同步。<br />
                                    這座「城」不趕時間，只專注於你與貓咪的共處瞬間。
                                </ScrollAnimate_L>
                            </th>
                            <th className='px-8 py-2'>
                                <ScrollAnimate_R><img src={ca} /></ScrollAnimate_R>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Reserve />
            <Footer_b />
        </div>
    )
}

export default Home;