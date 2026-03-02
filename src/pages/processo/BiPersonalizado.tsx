import PageHeader from '@/components/docs/PageHeader'
import PhaseCard from '@/components/docs/PhaseCard'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_BI = `Olá. Vamos iniciar um BI Personalizado.

Leia antes de começar:
- docs/processo/bi_personalizado/POP_BI_PERSONALIZADO.md
- docs/processo/fases/fase1_diagnostico.md

Cliente: [NOME]
Segmento: [SEGMENTO]
Status atual: [DIAGNÓSTICO / WIREFRAME / DESENVOLVIMENTO]

Identifique a próxima fase, os critérios de avanço e o que precisa ser validado antes de seguir.`

export default function ProcessoBiPersonalizado() {
  return (
    <div>
      <PageHeader
        badge="POP"
        title="BI Personalizado"
        description="Fluxo usado quando a entrega é feita para um cliente específico, com dados próprios e validações formais ao longo do projeto."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Quando usar</h2>
        <p>
          Escolha este POP quando o projeto nasce da operação de um cliente e não será reutilizado
          como produto padrão. O contexto, os dados e os KPIs vêm do negócio atendido.
        </p>

        <h2>O diferencial deste fluxo</h2>
        <p>
          A aprovação do wireframe e a validação final dependem do cliente. Isso torna o registro de
          Briefing, comentários e confirmações formais parte do próprio escopo operacional.
        </p>

        <h2>Como pensar o escopo</h2>
        <ul>
          <li>Comercial e Operacional costumam exigir Dashboard sob medida.</li>
          <li>Financeiro pode ser resolvido por software especializado, então valide o real valor do customizado.</li>
          <li>KPIs sem coluna de dados confirmada continuam como hipótese, não como promessa.</li>
        </ul>
      </div>

      <div className="grid gap-3">
        <PhaseCard
          number={1}
          title="Diagnóstico Estratégico"
          description="Coleta reunião, sistemas, exemplos de relatório e gera o Briefing."
          href="/processo/fases/fase1"
        />
        <PhaseCard
          number={2}
          title="Wireframe Estratégico"
          description="Transforma o Briefing em Blueprint e busca aprovação formal do cliente."
          href="/processo/fases/fase2"
        />
        <PhaseCard
          number={3}
          title="Desenvolvimento"
          description="Executa o Blueprint aprovado em sprints controladas."
          href="/processo/fases/fase3"
        />
        <PhaseCard
          number={4}
          title="Auditoria"
          description="Confere dados reais, regras do segmento e aderência ao combinado."
          href="/processo/fases/fase4"
        />
        <PhaseCard
          number={5}
          title="Entrega"
          description="Ativa a checkagem assistida de 15 dias com cláusulas registradas."
          href="/processo/fases/fase5"
        />
        <PhaseCard
          number={6}
          title="Tutorial"
          description="Adapta a orientação ao nível de maturidade analítica do cliente."
          href="/processo/fases/fase6"
        />
      </div>

      <div className="mt-8">
        <PromptBlock
          label="Use este prompt ao abrir um novo fluxo de BI Personalizado"
          prompt={PROMPT_BI}
        />
      </div>
    </div>
  )
}
