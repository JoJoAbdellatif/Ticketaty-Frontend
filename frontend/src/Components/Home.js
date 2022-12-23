import React from 'react';
import MainCarousel from '../EssentialComponents/Carousel/carousel';
import ShowCards from './InfoCards/ShowCards';


export default function Home() {
    return(
    <div>
        <MainCarousel/>
        <ShowCards/>
      </div>

    );
}