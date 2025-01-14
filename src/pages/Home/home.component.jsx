import React from "react"
import Banner from "../../components/home/banner/banner.component";
import IconBoxes from "../../components/home/icon-boxes/icon-boxes.component";
import Rates from "../../components/home/rates/rates.component";
import Types from "../../components/home/types/types.component";
import Valuation from "../../components/home/valuation/valuation.componet";
import Blog from "../../components/home/blog/blog.component";


const Home = () => {
    return (
        <>
            <Banner />
            <IconBoxes />
            <Rates />
            <Types />
            <Valuation />
            <Blog />
        </>
    )
}

export default Home;