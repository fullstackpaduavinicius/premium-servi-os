import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AreasAtuacao from './pages/AreasAtuacao'
import SobreNos from './pages/SobreNos'
import Noticias from './pages/Noticias'
import Clientes from './pages/Clientes'
import Ouvidoria from './pages/Ouvidoria'
import TrabalheConosco from './pages/TrabalheConosco'
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="areas-atuacao" element={<AreasAtuacao />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="ouvidoria" element={<Ouvidoria />} />
        <Route path="trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App