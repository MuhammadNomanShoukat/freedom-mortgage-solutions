import React, { useEffect } from "react"

import Banner from "../../components/home/banner/banner.component";
import IconBoxes from "../../components/home/icon-boxes/icon-boxes.component";
import Rates from "../../components/home/rates/rates.component";
import Types from "../../components/home/types/types.component";
import Valuation from "../../components/home/valuation/valuation.componet";
import Blog from "../../components/home/blog/blog.component";
import Calculator from "../../components/home/calculator/calculator.components";


const Home = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <>
            <Banner />
            <IconBoxes />
            <Rates />
            <Types />
            <Valuation />
            <Blog />
            <Calculator />
        </>
    )
}

export default Home;