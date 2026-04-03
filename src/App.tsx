import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './shared/components/ScrollToTop'
import NaLayout from './na/NaLayout'
import Home from './na/pages/Home'
import ContactUs from './na/pages/ContactUs'
import Stablecoin from './na/pages/Stablecoin'
import DigitalTwin from './na/pages/DigitalTwin'
import QrCodeSolutions from './na/pages/QrCodeSolutions'
import WalletAsAService from './na/pages/WalletAsAService'
import AboutUs from './na/pages/AboutUs'
import PrivacyPolicy from './na/pages/PrivacyPolicy'
import { WhitepaperList, WhitepaperDetail } from './na/pages/Whitepapers'
import { PodcastList, PodcastEpisode } from './na/pages/Podcasts'
import { BlogList, BlogArticle } from './na/pages/Blog'
import { PressList, PressArticle } from './na/pages/Press'

// BR market
import BrLayout from './br/BrLayout'
import BrHome from './br/pages/Home'
import { BrBlogList, BrBlogArticle } from './br/pages/Blog'
import { BrCasesList, BrCaseDetail } from './br/pages/Cases'
import Solucoes from './br/pages/Solucoes'
import CoreBanking from './br/pages/solucoes/CoreBanking'
import Pagamentos from './br/pages/solucoes/Pagamentos'
import CashManagement from './br/pages/solucoes/CashManagement'
import Credito from './br/pages/solucoes/Credito'
import GestaoDeRiscos from './br/pages/solucoes/GestaoDeRiscos'
import RegTech from './br/pages/solucoes/RegTech'
import Insights from './br/pages/solucoes/Insights'
import BrDigitalTwin from './br/pages/solucoes/DigitalTwin'
import TesourariaAvancada from './br/pages/solucoes/TesourariaAvancada'
import SobreNos from './br/pages/SobreNos'
import FaleConosco from './br/pages/FaleConosco'
import Carreiras from './br/pages/Carreiras'
import Esg from './br/pages/Esg'
import BrPoliticaDePrivacidade from './br/pages/PoliticaDePrivacidade'
import RelatorioTransparencia from './br/pages/RelatorioTransparencia'
import Tendencias2026 from './br/pages/Tendencias2026'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* NA market — /en (English), future: /es, /fr */}
        <Route element={<NaLayout />}>
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
        </Route>

        {/* BR market — /br (Portuguese) */}
        <Route element={<BrLayout />}>
          <Route path="/br" element={<BrHome />} />
          <Route path="/br/blog" element={<BrBlogList />} />
          <Route path="/br/blog/:slug" element={<BrBlogArticle />} />
          <Route path="/br/cases" element={<BrCasesList />} />
          <Route path="/br/cases/:slug" element={<BrCaseDetail />} />
          <Route path="/br/solucoes" element={<Solucoes />} />
          <Route path="/br/solucoes/core-banking" element={<CoreBanking />} />
          <Route path="/br/solucoes/pagamentos" element={<Pagamentos />} />
          <Route path="/br/solucoes/cash-management" element={<CashManagement />} />
          <Route path="/br/solucoes/credito" element={<Credito />} />
          <Route path="/br/solucoes/gestao-de-riscos" element={<GestaoDeRiscos />} />
          <Route path="/br/solucoes/reg-tech" element={<RegTech />} />
          <Route path="/br/solucoes/insights" element={<Insights />} />
          <Route path="/br/solucoes/matera-digital-twin" element={<BrDigitalTwin />} />
          <Route path="/br/solucoes/tesouraria-avancada" element={<TesourariaAvancada />} />
          <Route path="/br/sobre-nos" element={<SobreNos />} />
          <Route path="/br/fale-conosco" element={<FaleConosco />} />
          <Route path="/br/carreiras" element={<Carreiras />} />
          <Route path="/br/esg" element={<Esg />} />
          <Route path="/br/politica-de-privacidade" element={<BrPoliticaDePrivacidade />} />
          <Route path="/br/relatorio-de-transparencia-e-igualdade-salarial" element={<RelatorioTransparencia />} />
          <Route path="/br/tendencias-mercado-financeiro-2026" element={<Tendencias2026 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
