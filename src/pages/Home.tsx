import { Link } from 'react-router-dom'
import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PhaseCard from '@/components/docs/PhaseCard'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_INICIO = `Olá. Vamos trabalhar na evolução do processo FXL.

Antes de começar, leia os seguintes arquivos do repositório para ter o contexto completo da sessão:

- CLAUDE.md (regras operacionais)
- README.md (visão geral do repositório)
- docs/processo/master/POP_MASTER.md (visão geral do processo atual)

---

⚠️ REGRA INVIOLÁVEL ANTES DE QUALQUER AÇÃO

Os arquivos em /docs/ são a fonte da verdade operacional do processo FXL.
Eles SÓ devem ser alterados quando o objetivo da sessão for explicitamente
atualizar o conteúdo do processo.

Se a tarefa envolver estrutura, layout, navegação ou componentes visuais,
as alterações acontecem EXCLUSIVAMENTE em /src/pages/ e /src/components/.

Nunca inferir que uma mudança em /src/ implica mudança em /docs/.

---

Meu objetivo nesta conversa é: [tarefa]

Ao final da nossa discussão, quero receber um prompt estruturado e completo
para colar no Claude Code, que irá executar todas as alterações necessárias
no repositório — especificando exatamente quais arquivos serão tocados e por quê.`

export default function Home() {
  return (
    <div>
      <PageHeader
        badge="Início"
        title="FXL — Processo Padrão"
        description="Centro operacional do processo FXL. Os MDs em /docs instruem o Claude; as rotas em /src/pages ajudam a equipe a navegar e executar com clareza."
        version="2.0"
        date="2026"
      />

      <PromptBlock
        label="Use este prompt ao abrir o Project FXL — Processo Padrão"
        prompt={PROMPT_INICIO}
      />

      <InfoBlock type="info" className="mb-6">
        <strong>Regra de ouro:</strong> sempre pense em pares. Se um documento operacional em
        <code> /docs/ </code> muda, a rota humana equivalente deve evoluir na mesma sessão.
      </InfoBlock>

      <div className="prose">
        <h2>Como navegar</h2>
        <p>
          A navegação lateral segue a divisão real do repositório. Processo cobre o fluxo de
          trabalho, Build concentra as premissas técnicas e Suporte reúne referências recorrentes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          to="/processo/master"
          className="rounded-xl border border-border bg-white/90 p-5 transition-colors hover:border-fxl-navy/40"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-fxl-navy">
            Processo
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">Roteamento do trabalho</h3>
          <p className="text-sm text-muted-foreground">
            Decide qual POP usar, qual fase vem na sequência e como o processo deve evoluir.
          </p>
        </Link>
        <Link
          to="/build/arquitetura"
          className="rounded-xl border border-border bg-white/90 p-5 transition-colors hover:border-fxl-navy/40"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-fxl-navy">
            Build
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">Base técnica padrão</h3>
          <p className="text-sm text-muted-foreground">
            Consulta obrigatória para qualquer sprint em Claude Code: stack, banco, segurança e
            deploy.
          </p>
        </Link>
        <Link
          to="/suporte/biblioteca-kpis"
          className="rounded-xl border border-border bg-white/90 p-5 transition-colors hover:border-fxl-navy/40"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-fxl-navy">
            Suporte
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">Bibliotecas e padrões</h3>
          <p className="text-sm text-muted-foreground">
            Reúne repertório para KPIs, skills e prompts prontos para acelerar a execução.
          </p>
        </Link>
      </div>

      <div className="prose">
        <h2>Sequência padrão para BI Personalizado</h2>
        <p>
          O fluxo abaixo é a espinha dorsal mais recorrente. Em Produto FXL, as etapas se mantêm,
          mas a origem das decisões muda: mais validação interna e menos dependência de cliente.
        </p>
      </div>

      <div className="grid gap-3">
        <PhaseCard
          number={1}
          title="Diagnóstico"
          description="Mapeia contexto, sistemas, dados e KPIs para formar o Briefing."
          href="/processo/fases/fase1"
        />
        <PhaseCard
          number={2}
          title="Wireframe"
          description="Transforma o Briefing em Blueprint e valida o fluxo antes do código."
          href="/processo/fases/fase2"
        />
        <PhaseCard
          number={3}
          title="Desenvolvimento"
          description="Executa sprints com stack padrão e referências obrigatórias de build."
          href="/processo/fases/fase3"
        />
        <PhaseCard
          number={4}
          title="Auditoria"
          description="Revisa dados, interações, segurança e aderência ao Blueprint."
          href="/processo/fases/fase4"
        />
        <PhaseCard
          number={5}
          title="Entrega"
          description="Formaliza o handoff, define checkagem assistida ou lançamento."
          href="/processo/fases/fase5"
        />
        <PhaseCard
          number={6}
          title="Tutorial"
          description="Converte o sistema em adoção real com material compatível com o usuário."
          href="/processo/fases/fase6"
        />
      </div>
    </div>
  )
}
