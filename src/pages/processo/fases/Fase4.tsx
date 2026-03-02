import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_AUDITORIA = `Olá. Vamos executar a Fase 4 — Auditoria.

Leia antes de começar:
- docs/processo/fases/fase4_auditoria.md

Tipo de projeto: [BI PERSONALIZADO / PRODUTO FXL]
Documento base: [BRIEFING OU DEFINIÇÃO]

Gere o checklist de auditoria completo, incluindo checklist base e itens específicos deste contexto.`

export default function Fase4() {
  return (
    <div>
      <PageHeader
        badge="Fase 4"
        title="Auditoria e Validação"
        description="Revisão independente para confirmar que dados, interações, UI e segurança estão corretos antes da entrega."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O papel desta fase</h2>
        <p>
          Auditoria não é um favor ao final do projeto. É a barreira que impede a entrega de um
          Dashboard aparentemente pronto, mas com cálculo errado, filtro quebrado ou regra de negócio
          fora do combinado.
        </p>

        <h2>Checklist base</h2>
        <ul>
          <li>Conferência de KPIs, totais, rankings e subtotais.</li>
          <li>Validação de filtros, drill-down e comportamento da tela de Inputs.</li>
          <li>Revisão visual em desktop e mobile, sem console errors.</li>
          <li>Checagem de completude contra o Blueprint aprovado.</li>
        </ul>

        <h2>Variações por tipo de projeto</h2>
        <ul>
          <li>Em BI Personalizado, a auditoria precisa usar dados reais do cliente.</li>
          <li>Em Produto FXL, o foco adicional é neutralidade de contexto e escalabilidade.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Boa prática:</strong> a Auditoria deve ser conduzida por alguém que não foi a pessoa
        principal do desenvolvimento. Isso reduz cegueira operacional.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao gerar o checklist específico da auditoria"
        prompt={PROMPT_AUDITORIA}
      />
    </div>
  )
}
