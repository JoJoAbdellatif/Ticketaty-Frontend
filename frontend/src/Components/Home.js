import React from 'react';
import MainCarousel from '../EssentialComponents/Carousel/carousel';
import ShowCards from './InfoCards/ShowCards';
import {motion} from 'framer-motion'


export default function Home() {
    return(
    <motion.div initial={{width:0}}
    animate={{width:'100%',transition:{duration:'0.2'}}}
    exit={{x:'100%'}}>
        <MainCarousel/>
        <ShowCards/>
      </motion.div>

    );
}