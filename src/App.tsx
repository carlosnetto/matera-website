import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Stablecoin from './pages/Stablecoin'
import DigitalTwin from './pages/DigitalTwin'
import QrCodeSolutions from './pages/QrCodeSolutions'
import WalletAsAService from './pages/WalletAsAService'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { WhitepaperList, WhitepaperDetail } from './pages/Whitepapers'
import { PodcastList, PodcastEpisode } from './pages/Podcasts'
import { BlogList, BlogArticle } from './pages/Blog'
import { PressList, PressArticle } from './pages/Press'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/en/contact-us" element={<ContactUs />} />
            <Route path="/en/stablecoin" element={<Stablecoin />} />
            <Route path="/en/solutions/digital-twin" element={<DigitalTwin />} />
            <Route path="/en/solutions/digital-twin-stablecoins" element={<Stablecoin />} />
            <Route path="/en/solutions/qr-code-solutions" element={<QrCodeSolutions />} />
            <Route path="/en/solutions/wallet-as-a-service" element={<WalletAsAService />} />
            <Route path="/en/about-us" element={<AboutUs />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/en/whitepapers" element={<WhitepaperList />} />
            <Route path="/en/whitepapers/:slug" element={<WhitepaperDetail />} />
            <Route path="/en/podcasts" element={<PodcastList />} />
            <Route path="/en/podcasts/:slug" element={<PodcastEpisode />} />
            <Route path="/en/blog" element={<BlogList />} />
            <Route path="/en/blog/:slug" element={<BlogArticle />} />
            <Route path="/en/press" element={<PressList />} />
            <Route path="/en/press/:slug" element={<PressArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
