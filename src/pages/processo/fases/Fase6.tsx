import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_TUTORIAL = `Olá. Vamos executar a Fase 6 — Tutorial e Documentação.

Leia antes de começar:
- docs/processo/fases/fase6_tutorial.md

Tipo de projeto: [BI PERSONALIZADO / PRODUTO FXL]
Maturidade analítica: [BAIXA / MÉDIA / ALTA]

Monte o roteiro do tutorial com linguagem compatível com o usuário final e destaque os pontos críticos de adoção.`

export default function Fase6() {
  return (
    <div>
      <PageHeader
        badge="Fase 6"
        title="Tutorial e Documentação"
        description="Converte entrega técnica em adoção real. O formato muda conforme o tipo de projeto e o nível de maturidade do público."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O que muda entre BI e Produto</h2>
        <p>
          BI Personalizado pede material adaptado ao cliente, normalmente com vídeo curto e
          orientação escrita. Produto FXL precisa de documentação persistente e autoexplicativa para
          qualquer usuário, sem depender de uma sessão individual.
        </p>

        <h2>Como adaptar por maturidade</h2>
        <ul>
          <li>Baixa: explique conceitos, ritmo mais lento, mais contexto visual.</li>
          <li>Média: mostre interpretação e o que fazer com cada KPI.</li>
          <li>Alta: vá direto para filtros, drill-down e leitura avançada.</li>
        </ul>

        <h2>O que um bom material cobre</h2>
        <ul>
          <li>Acesso e login.</li>
          <li>Navegação geral e lógica das seções.</li>
          <li>Tela de Inputs e erros comuns.</li>
          <li>Como ler variações importantes nos KPIs.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Critério de Avanço:</strong> o material foi publicado ou enviado, e o usuário final
        consegue consultar a orientação sem depender de explicações improvisadas.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao preparar o tutorial final"
        prompt={PROMPT_TUTORIAL}
      />
    </div>
  )
}
