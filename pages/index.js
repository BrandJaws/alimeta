import Head from 'next/head'
import Welcome from '../components/welcome/Welcome'
import Banner from '../components/banner/Banner'
import Started from '../components/started/Started'
import Create from '../components/create/Create'
import Offer from '../components/offer/Offer'
import What from '../components/what/what'
import Persons from '../components/persons/Persons'
import News from '../components/news/News'
import Newsletter from '../components/newsletter/Newsletter'
import { useEffect } from 'react'

export default function Home() {

  // if (typeof window !== "undefined") {
  //   AOS.init();
  // }
  useEffect(() => {
    if (typeof window !== 'undefined') {

      // Spalsh Gone

      setTimeout(function () {
        var body = document.body;
        body.classList.add("SplashGone");
      }, 6000);

      // Navbar Loaded

      setTimeout(function () {
        var body = document.body;
        body.classList.add("NavLoad");
      }, 6500);



      // When the user scrolls the page, execute myFunction
      window.onscroll = function () { myFunction() };

      // Get the header
      var header = document.getElementById("navbar");

      // Get the offset position of the navbar
      var sticky = header?.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      myFunction(sticky, header);
    }
  }, [])

  function myFunction(sticky, header) {
    if (typeof window !== 'undefined' && window.pageYOffset > sticky) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  }

  return (
    <>
      <Head>
        <title>ANIMETA</title>
        <meta name="image" content="https://animeta.ai/og-image.png" />
        <meta property="og:image" content="https://animeta.ai/og-image.png"></meta>
        <meta property="og:title" content="ANIMETA" />
        <meta property="og:description" content="Animeta is a Singapore based Creator Tech company focused on creating & nurturing digital creators by helping them grow their communities & maximize their earnings across multiple social media platforms & customized brand solutions through the proprietary Animeta™ AI-based Self-service Creator Tech platform." />
        <meta name="title" content="ANIMETA" />
        <meta name="description" content="Animeta is a Singapore based Creator Tech company focused on creating & nurturing digital creators by helping them grow their communities & maximize their earnings across multiple social media platforms & customized brand solutions through the proprietary Animeta™ AI-based Self-service Creator Tech platform." />
        <link rel="icon" href="/favicon.ico" />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js' async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js" async></script>
        {/* <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script> */}
      </Head>
      <Welcome />
      <section className='HeroScreen'>
        <Banner />
      </section>
      <Started />
      <Create />
      <Offer />
      <What />
      <Persons />
      <News />
      <Newsletter />
      {/* <Modal /> */}
    </>
  )
}
