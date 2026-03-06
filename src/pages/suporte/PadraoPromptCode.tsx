import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_TEMPLATE = `# Prompt para Claude Code — [Título descritivo]

Antes de começar, leia os arquivos de contexto dos repositórios relevantes:
- CLAUDE.md (raiz fxl/)
- fxl-processo-padrao/CLAUDE.md (se o escopo tocar este repo)
- fxl-vault/CLAUDE.md (se o escopo tocar este repo)
- [outros arquivos relevantes para o contexto]

## Objetivo desta sessão
[Descreva o resultado esperado]

## Execução
1. [Passo]
2. [Passo]
3. [Passo]

## Verificação em cascata
- [ ] [Arquivos afetados]

## Mensagem de commit sugerida
[escopo]: [o que mudou]`

export default function PadraoPromptCode() {
  return (
    <div>
      <PageHeader
        badge="Suporte"
        title="Padrão de Prompt Code"
        description="Estrutura-base para prompts que serão colados no Claude Code: objetivos claros, arquivos completos, verificação em cascata e commit enxuto."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O que um prompt bom precisa garantir</h2>
        <ul>
          <li>Contexto suficiente para o agente não improvisar a estrutura.</li>
          <li>Instruções completas por arquivo, sem depender de complementos implícitos.</li>
          <li>Verificação dos impactos indiretos antes de encerrar a sessão.</li>
          <li>Mensagem de commit pronta para uso, curta e fiel ao que mudou.</li>
        </ul>

        <h2>Erros que mais desperdiçam tempo</h2>
        <ul>
          <li>Pedir “ajuste essa parte” sem entregar o conteúdo alvo completo.</li>
          <li>Esquecer de listar os arquivos que precisam ser lidos primeiro.</li>
          <li>Descrever o objetivo sem amarrar a ordem de execução.</li>
        </ul>
      </div>

      <PromptBlock
        label="Modelo curto para abrir uma sessão no Claude Code"
        prompt={PROMPT_TEMPLATE}
      />
    </div>
  )
}
