import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const CLAUDE_MD_TEMPLATE = `# CLAUDE.md — [Nome do Projeto]

## Identidade
- Nome
- Tipo
- Descrição
- Cliente/Contexto

## Knowledge técnico FXL
- docs/build/arquitetura/premissas_gerais.md
- docs/build/arquitetura/supabase.md
- docs/build/arquitetura/deploy_vercel.md
- docs/build/arquitetura/seguranca.md
- docs/build/arquitetura/testes.md

## Sprints
- Sprint 1 | Setup + Auth | Status
- Sprint 2 | [Escopo] | Status`

export default function ClaudeMdTemplate() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="CLAUDE.md — Template"
        description="Base para iniciar um novo repositório de projeto FXL com contexto técnico, sprints e regras específicas já organizadas."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Quando usar</h2>
        <p>
          No momento em que o repositório do projeto nasce. Esse template evita que cada projeto
          recomece do zero e garante que o Claude Code leia a mesma base técnica em toda sprint.
        </p>

        <h2>O que preencher com cuidado</h2>
        <ul>
          <li>Tipo do projeto e contexto real de negócio.</li>
          <li>Stack adotada e justificativa se houver exceção.</li>
          <li>Sprints previstas e regras específicas que mudam comportamento técnico.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Ponto crítico:</strong> o caminho das referências precisa ser válido no ambiente do
        operador. Template incompleto aqui contamina todas as sprints seguintes.
      </InfoBlock>

      <PromptBlock label="Estrutura resumida do template" prompt={CLAUDE_MD_TEMPLATE} />
    </div>
  )
}
