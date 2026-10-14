import React from 'react'
import '../style/Hero/Hero_pic_L.scss'


const Hero_pic_card_L=({
    CatPics,
    className='',
    ...props
})=>{
    return(
        <div className={`flex h-full items-center ${className}`} {...props}>
            {CatPics.map((CatPic,idx)=>(
                <div key={idx} className='h-full  w-auto img-box '>
                    <img src={CatPic} className='h-full  w-auto card' alt={`cat-${idx}`} />
                </div>
            ))}
        </div>

        
    )
}


export default Hero_pic_card_L