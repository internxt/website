import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopBar from '../components/layout/TopBar'

const Home = () => {
  return (
    <>
      <TopBar />
      <span>Esto sera el drive</span>
    </>
  )
}

export default Home;