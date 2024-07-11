import React, { useState } from 'react'
import mango from './fruit 1.png'
import lychee from './fruit 2.png'
import orange from './fruit 3.png'

import mangoCan from './mangoCan.png'
import lycheeCan from './lycheeCan.png'
import orangeCan from './orangeCan.png'

import { motion } from 'framer-motion'

const Main = () => {
    const [changeFruit, setchangeFruit] = useState(0)
    const [image, setimage] = useState(mangoCan)

    const [isAnimating, setisAnimating] = useState(0)

    const fruits = [
        {
            heading: 'MANGO',
            desc: 'Pure Mango Bliss: Crafted from the finest, sun-ripened mangoes, our Mango Juice is bursting with the natural sweetness and succulent goodness of this exotic fruit. Every glass of our juice embodies the essence of a sun-kissed mango orchard, delivering an unparalleled taste experience that will leave you craving for more.'
        },
        {
            heading: 'Lychee',
            desc: "Taste of Tropical Bliss: Our Lychee Juice is a celebration of the unique lychee fruit's natural essence. With a harmonious blend of sweetness and floral undertones, it offers a distinctive flavor that will leave you longing for more. Our expert juicers skillfully extract the purest juices from the juiciest lychees."
        },
        {
            heading: 'ORANGE',
            desc: "Harvesting Nature's Each glass of Orange Juice is a celebration of nature's bountiful harvest. Handpicked from lush orchards, the ripest and juiciest oranges are carefully selected to ensure the finest quality. With each bottle, you experience the essence of sun-drenched groves and the care put into crafting this thirst-quenching masterpiece."
        },
    ]

    const changeImage1 = () => {
        setchangeFruit(0)
        setimage(mangoCan)

        document.body.style.backgroundColor = 'rgb(217, 180, 35)'
        setisAnimating(isAnimating + 1)
    }

    const changeImage2 = () => {
        setchangeFruit(1)
        setimage(lycheeCan)
 
        document.body.style.backgroundColor = 'rgb(185, 38, 66)'
        setisAnimating(isAnimating + 1)
    }

    const changeImage3 = () => {
        setchangeFruit(2)
        setimage(orangeCan)

        document.body.style.backgroundColor = 'rgb(234, 104, 26)'
        setisAnimating(isAnimating + 1)
    }
  return (
    <div className='flex py-0 px-40'>
        <div className='flex flex-col gap-6 box-border'>
            <div>
                <motion.h1 className='text-white text-[100px]'
                key={isAnimating}
                    initial={{
                        x: -40,
                        opacity: 0.2,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      exit={{
                        x: 100,
                        opacity: 0.2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                      }}
                >{ fruits[changeFruit].heading }</motion.h1>
            </div>
            <div className='text-white text-[20px]'>
                <p className='font-sans'>{ fruits[changeFruit].desc }</p>
            </div>
            <div className='flex gap-6'>
                <img className='cursor-pointer' src={mango} alt="mango picture" onClick={ changeImage1 }/>
                <img className='cursor-pointer' src={lychee} alt="lychee picture" onClick={ changeImage2 }/>
                <img className='cursor-pointer' src={orange} alt="orange picture" onClick={ changeImage3 }/>
            </div>
        </div>
        <div>
            <div className='h-[500px] w-[500px]'> 
                <motion.img src={ image } alt="" className='h-full w-full'
                    key={isAnimating}
                    initial={{
                        x: 40
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 120
                    }}
                    
                />
            </div>
        </div>
    </div>
  )
}

export default Main