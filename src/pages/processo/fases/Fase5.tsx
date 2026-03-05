import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_ENTREGA = `Olá. Vamos executar a Fase 5 — Entrega.

Leia antes de começar:
- docs/processo/fases/fase5_entrega.md

Tipo de projeto: [BI PERSONALIZADO / PRODUTO FXL]
URL do sistema: [URL]

Liste o checklist final de entrega, as cláusulas obrigatórias e o formato de acompanhamento após a liberação.`

export default function Fase5() {
  return (
    <div>
      <PageHeader
        badge="Fase 5"
        title="Entrega e Validação"
        description="Formaliza a liberação do sistema, registra responsabilidades e define o modelo de acompanhamento após o handoff."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Como a fase muda por tipo de projeto</h2>
        <p>
          Em BI Personalizado, a entrega inicia uma checkagem assistida de 15 dias com o cliente.
          Em Produto FXL, não existe período de checkagem — o produto é disponibilizado diretamente
          após auditoria, com foco em documentação e registro de versão.
        </p>

        <h2>O que precisa estar claro no handoff</h2>
        <ul>
          <li>Quem responde por dados, ajustes e mudanças de escopo.</li>
          <li>Qual é o canal oficial para pedir correções.</li>
          <li>Qual é o prazo esperado de resposta e o que configura item bloqueante.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Critério de Avanço:</strong> ou existe validação formal do cliente, ou o período de
        checkagem encerrou sem pendências bloqueantes. Em Produto, a versão precisa estar publicada.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao preparar a entrega final"
        prompt={PROMPT_ENTREGA}
      />

      <div className="prose">
        <h2>Cláusulas que não podem faltar em BI Personalizado</h2>
        <ul>
          <li>A veracidade dos dados continua sendo responsabilidade do cliente.</li>
          <li>Ajustes fora da janela ou fora do escopo podem virar aditivo.</li>
          <li>O Dashboard não substitui a contabilidade oficial.</li>
        </ul>
      </div>
    </div>
  )
}
