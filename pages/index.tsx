import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/navbar';
import MainBanner from '../components/organisms/main-banner';
import TransactionStep from '../components/organisms/transaction-step';
import FeaturedGame from '../components/organisms/featured-game';
import Reached from '../components/organisms/reached';
import Story from '../components/organisms/story';
import Footer from '../components/organisms/footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>
          Gamereq - Get a New
          Experience in Gaming
        </title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu player game dari seluruh dunia melakukan topup" />
        <meta
          property="og:title"
          content="Gamereq - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu player game dari seluruh dunia melakukan topup"
        />
        <meta
          property="og:image"
          content="https://image.kalian"
        />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
