import '../styles/globals.css'
import '../components/welcome/Welcome.css'
import '../components/banner/Banner.css'
import '../components/navbar/Navbar.css'
import '../components/started/Started.css'
import '../components/create/Create.css'
import '../components/offer/Offer.css'
import '../components/persons/Persons.css'
import '../components/news/News.css'
import '../components/newsletter/Newsletter.css'
import '../components/footer/Footer.css'
import '../components/modal/Modal.css'
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
