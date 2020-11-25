import axios from "axios";

const DownloadCore = () => {
    return (
        <>
            HOLA CORE
        </>
    );
}

export async function getServerSideProps(context) {
    const userAgent = require('useragent')
    
    const POSTS_URL = 'https://api.github.com/repos/internxt/core-gui/releases/latest'


    const res = await axios.get(POSTS_URL)

    //console.log(res.data)

    const ua = userAgent.parse(context.req.headers['user-agent'])

    console.log(ua)
    console.log(ua.os)

    return {
        props: { }
    }
}


export default DownloadCore;