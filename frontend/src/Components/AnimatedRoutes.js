import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './search/Search'
import BookNow from './bookNow/bookNow';
import SearhMail from './search/SearchMail';

import Confirm from './ConfirmationPage/confirm';
import PurchasesCard from "./InfoCards/PurchasesCard";

import Home from './Home'
import {AnimatePresence} from 'framer-motion'
import AllMatches from "./InfoCards/AllMatches";
export default function AnimatedRoutes(){
const location = useLocation()
return(
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<Home />}>
    </Route>
    <Route exact path="/browse" element={<AllMatches />}>
    </Route>
    <Route exact path="/match/:id" element={<BookNow />}>
    </Route>
    <Route exact path="/search" element={<Search />}>
    </Route>
    <Route exact path="/findMyTickets" element={<SearhMail />}>
    </Route>
    <Route exact path= "/Confirmed" element={<Confirm />}>
</Route>
<Route exact path= "/Test" element={<PurchasesCard />}>
</Route>

</Routes>
</AnimatePresence>
)

}
