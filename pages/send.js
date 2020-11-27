import TopBar from '../components/layout/TopBar';

const Send = () => {

    const container = {
      backgroundImage: "url(/images/1440/Send/background.png)",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh"
    };

    return ( 
      <>
        <TopBar />
        <div style={container}>
        </div>
      </>
     );
}
 
export default Send;