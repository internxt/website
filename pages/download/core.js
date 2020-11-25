import axios from "axios";

const DownloadCore = () => {
    return (
        <>
            HOLA CORE
        </>
    );
}

export async function getServerSideProps(context) {
    
    const POSTS_URL = 'https://api.github.com/repos/internxt/core-gui/releases/latest'


    const res = await axios.get(POSTS_URL)

    //console.log(res.data)

    console.log(context.req.headers['user-agent'])

    return {
        props: { }
    }
}


export default DownloadCore;