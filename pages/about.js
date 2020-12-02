import Feed from 'rss-to-json'
import Container1 from '../components/about-us/Container1'
import Container2 from '../components/about-us/Container2'
import Container3 from '../components/about-us/Container3'
import Container4 from '../components/about-us/Container4'
import Container5 from '../components/about-us/Container5'
import Container6 from '../components/about-us/Container6'
import Container7 from '../components/about-us/Container7'
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout'
import TopBar from '../components/layout/TopBar';
import React from 'react';
import { useRouter } from 'next/router'

const AboutUs = ( props ) => {
    const router = useRouter()
    
    return ( 
        <Layout segmentName='about' title='Internxt – About us.' description="Meet Internxt&#039;s Team. Fran Villalba Segarra, Founder and CEO at Internxt. Be limitless.">
            <TopBar />
            <Container1 id='1'/>
            <Container2 id='2'/>
            <Container3 id='3'/>
            <Container4 id='4'/>
            <Container5 id='5'/>
            <Container6 id='6'/>
            <Container7 id='7' articles={props} />
            <Footer />
        </Layout>
     );
}

export async function getStaticProps(ctx) {
    const POSTS_URL = 'https://medium.com/feed/Internxt'

    const rss = await Feed.load(POSTS_URL)
    const data = rss.items
    let images = []
    
    const regex = /<img src="(.*)" width=/

    data.forEach(elem => {
        if(elem.description) {
            const image = elem.description.match(regex)[1]
            images.push(image)
        }
    })

    const lang = ctx.locale
    const descriptions = require(`../assets/lang/en/about-us-descriptions.json`)

    return {
        props: { data: JSON.parse(JSON.stringify(data)), images, descriptions }
    }
}

export default AboutUs;