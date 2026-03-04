import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import BuildArquiteturaIndex from '@/pages/build/arquitetura/Index'
import ClaudeMdTemplate from '@/pages/build/arquitetura/ClaudeMdTemplate'
import FxlThirdPartyKnowledge from '@/pages/build/arquitetura/FxlThirdPartyKnowledge'
import DeployVercel from '@/pages/build/arquitetura/DeployVercel'
import MasterPrompt from '@/pages/build/arquitetura/MasterPrompt'
import PremissasGerais from '@/pages/build/arquitetura/PremissasGerais'
import Seguranca from '@/pages/build/arquitetura/Seguranca'
import Supabase from '@/pages/build/arquitetura/Supabase'
import Testes from '@/pages/build/arquitetura/Testes'
import ProcessoBiPersonalizado from '@/pages/processo/BiPersonalizado'
import ProcessoMaster from '@/pages/processo/Master'
import ProcessoProduto from '@/pages/processo/Produto'
import Fase1 from '@/pages/processo/fases/Fase1'
import Fase2 from '@/pages/processo/fases/Fase2'
import Fase3 from '@/pages/processo/fases/Fase3'
import Fase4 from '@/pages/processo/fases/Fase4'
import Fase5 from '@/pages/processo/fases/Fase5'
import Fase6 from '@/pages/processo/fases/Fase6'
import BibliotecaKpis from '@/pages/suporte/BibliotecaKpis'
import PadraoPromptCode from '@/pages/suporte/PadraoPromptCode'
import UiSkills from '@/pages/suporte/UiSkills'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="processo/master" element={<ProcessoMaster />} />
          <Route path="processo/bi-personalizado" element={<ProcessoBiPersonalizado />} />
          <Route path="processo/produto" element={<ProcessoProduto />} />
          <Route path="processo/fases/fase1" element={<Fase1 />} />
          <Route path="processo/fases/fase2" element={<Fase2 />} />
          <Route path="processo/fases/fase3" element={<Fase3 />} />
          <Route path="processo/fases/fase4" element={<Fase4 />} />
          <Route path="processo/fases/fase5" element={<Fase5 />} />
          <Route path="processo/fases/fase6" element={<Fase6 />} />

          <Route path="build/arquitetura" element={<BuildArquiteturaIndex />} />
          <Route path="build/arquitetura/premissas-gerais" element={<PremissasGerais />} />
          <Route path="build/arquitetura/supabase" element={<Supabase />} />
          <Route path="build/arquitetura/deploy-vercel" element={<DeployVercel />} />
          <Route path="build/arquitetura/seguranca" element={<Seguranca />} />
          <Route path="build/arquitetura/master-prompt" element={<MasterPrompt />} />
          <Route path="build/arquitetura/testes" element={<Testes />} />
          <Route path="build/arquitetura/claude-md-template" element={<ClaudeMdTemplate />} />
          <Route path="build/arquitetura/fxl-third-party-knowledge" element={<FxlThirdPartyKnowledge />} />

          <Route path="suporte/biblioteca-kpis" element={<BibliotecaKpis />} />
          <Route path="suporte/ui-skills" element={<UiSkills />} />
          <Route path="suporte/padrao-prompt-code" element={<PadraoPromptCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
