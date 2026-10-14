import React from 'react';
import '../style/Hero/hero_img_hover.scss'

const Hero_card=({
    CatPics_div1,
    CatPics_div2,
    className='',
    className_div1='',
    className_div2='',
    ...props
})=>{
    return( 
        <div className='h-full w-full card-hover'>
            <div className={`flex h-full w-2/3 justufy-center items-center ${className}`}>
                    <div className='opacity-0 {className_div1}'>
                        {CatPics_div1 .map((CatPic,idx)=>(
                                <div key={idx}>
                                    <img src={CatPic}/>
                                </div>
                            ))}
                    </div>
                    <div className='opacity-0 {className_div2}'>
                        {CatPics_div2 .map((CatPic,idx)=>(
                                <div key={idx}>
                                    <img src={CatPic}/>
                                </div>
                            ))}
                    </div>
            </div>
        </div>
        
    )
}
export default Hero_card