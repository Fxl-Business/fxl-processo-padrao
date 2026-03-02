import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const MASTER_PROMPT_SNIPPET = `# Master Prompt — [Nome do Projeto] — Sprint [N]

## Contexto do projeto
[Descrição breve do que é o projeto e do problema que resolve]

## Premissas técnicas
- docs/build/arquitetura/premissas_gerais.md
- docs/build/arquitetura/supabase.md
- docs/build/arquitetura/deploy_vercel.md
- docs/build/arquitetura/seguranca.md
- docs/build/arquitetura/testes.md

## Sprint atual
- Objetivo
- Escopo fechado
- Schema necessário
- Dados de teste
- Critério de aceite verificável`

export default function MasterPrompt() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Master Prompt"
        description="Template que transforma o Blueprint em briefing de sprint: escopo fechado, critérios claros e autonomia disciplinada para o Claude Code."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Como pensar este documento</h2>
        <p>
          O Master Prompt não é um pedido genérico. Ele substitui a conversa informal por um briefing
          de sprint: objetivo, escopo, dados, schema, critério de aceite e regras de execução.
        </p>

        <h2>O que não pode faltar</h2>
        <ul>
          <li>Contexto do projeto em linguagem curta e objetiva.</li>
          <li>Escopo fechado por sprint, sem “aproveitar” para encaixar extras.</li>
          <li>Critérios de aceite verificáveis, não subjetivos.</li>
          <li>Referências técnicas obrigatórias que moldam a implementação.</li>
        </ul>
      </div>

      <PromptBlock
        label="Estrutura-base de um Master Prompt de sprint"
        prompt={MASTER_PROMPT_SNIPPET}
      />
    </div>
  )
}
