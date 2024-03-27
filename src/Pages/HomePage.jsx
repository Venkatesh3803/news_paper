import React, { useEffect, useState } from 'react'
import Navber from '../Components/Navber'
import Hero from '../Components/Hero'
import LatestNew from '../Components/LatestNew'
import Banner from '../Components/Banner'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import { RequestMethod } from '../../RequestMethods'
import NewsList from '../Components/NewsList'


const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        RequestMethod("/post", "get").then((res) => {
            setData(res)
        })
    }, [])

    return (
        <div>
            <Navber />
            <Hero data={data}/>
            <LatestNew />
            <Banner />
            <NewsList name="Entertainment" data={data} />
            <NewsList name="Political" data={data} />
            <NewsList name="Sports" data={data} />
            <NewsList name="Health" data={data} />
            <NewsList name="Busniess" data={data} />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage
