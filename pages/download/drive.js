
const DownloadCore = () => {
    return (
        <>
            HOLA DRIVE
        </>
    );
}

export async function getStaticProps() {
    const POSTS_URL = 'https://api.github.com/repos/internxt/drive-desktop/releases/latest'

    return {
        props: { }
    }
}

export default DownloadCore;