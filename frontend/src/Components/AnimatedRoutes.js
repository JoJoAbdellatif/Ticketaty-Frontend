import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCards from './InfoCards/ShowCards';
import Search from './search/Search'
import BookNow from './bookNow/bookNow';
import MainCarousel from '../EssentialComponents/Carousel/carousel';
import {AnimatePresence} from 'framer-motion'
export default function AnimatedRoutes(){
const location = useLocation()
return(
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<MainCarousel />}>
    </Route>
    <Route exact path="/browse" element={<ShowCards />}>
    </Route>
    <Route exact path="/match/:id" element={<BookNow />}>
    </Route>
    <Route exact path="/search" element={<Search />}>
    </Route>
</Routes>
</AnimatePresence>
)

}
