import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_ABERTURA_PROCESS = `Olá. Vamos trabalhar na evolução do processo FXL.

Antes de começar, leia:
- fxl/CLAUDE.md (árbitro de escopo entre repos)
- fxl/fxl-processo-padrao/CLAUDE.md (regras operacionais)
- fxl/fxl-processo-padrao/docs/processo/master/POP_MASTER.md

Este prompt altera APENAS fxl-processo-padrao/.
Meu objetivo nesta sessão: [tarefa]`

const PROMPT_ABERTURA_CLIENTE = `Olá. Vamos trabalhar no projeto [NOME DO CLIENTE].

Antes de começar, leia:
- fxl/CLAUDE.md (árbitro de escopo entre repos)
- fxl/fxl-vault/CLAUDE.md (regras do Acervo FXL)
- fxl/fxl-vault/clients/[client-slug]/CLAUDE.md

Slug do cliente: [client-slug]
Este prompt altera APENAS fxl-vault/clients/[client-slug]/.
Meu objetivo nesta sessão: [tarefa]`

export default function FluxoDoisRepositorios() {
  return (
    <div>
      <PageHeader
        badge="Suporte"
        title="Fluxo de Dois Repositórios"
        description="Como trabalhar com fxl-processo-padrao e fxl-vault (Acervo FXL) simultaneamente a partir do diretório pai fxl/, usando o Claude Code sem risco de escopo cruzado."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Estrutura local</h2>
        <p>
          O operador trabalha a partir de um diretório pai <code>fxl/</code> que contém os dois
          repositórios como subpastas. Esse diretório não é um repositório Git — ele existe apenas
          para organizar o ambiente local e hospedar o <code>CLAUDE.md</code> árbitro.
        </p>

        <pre>{`fxl/
├── CLAUDE.md                     ← árbitro de escopo
├── fxl-processo-padrao/          ← visão superior do processo
└── fxl-vault/    ← Acervo FXL: execução e clientes`}</pre>

        <h2>Regra fundamental</h2>
        <p>
          Sempre abrir o Claude Code a partir de <code>fxl/</code>. Nunca de dentro de um repo
          filho. Abrindo do pai, o Claude Code carrega os três CLAUDE.md em hierarquia — o pai
          define o relacionamento, os filhos definem as regras de cada repositório.
        </p>

        <h2>Quando uma sessão toca os dois repos</h2>
        <p>
          Verificar a tabela de sincronização em <code>fxl/CLAUDE.md</code>. Se a mudança está
          mapeada na tabela, executar os dois repos em sequência — nunca simultâneo. Dois commits
          separados, um por repositório.
        </p>

        <h2>Por que não usar git submodules</h2>
        <p>
          Submodules adicionam complexidade de setup para todos os operadores futuros. A convenção
          de pasta local resolve o mesmo problema sem overhead — o Claude Code lê CLAUDE.md em
          hierarquia de diretório nativamente, sem nenhuma configuração adicional.
        </p>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Regra de escopo:</strong> se a mudança não está na tabela de sincronização do{' '}
        <code>fxl/CLAUDE.md</code>, alterar APENAS o repositório especificado no prompt.
        Nunca inferir necessidade de atualização cruzada.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao iniciar uma sessão de processo (fxl-processo-padrao)"
        prompt={PROMPT_ABERTURA_PROCESS}
      />

      <PromptBlock
        label="Use este prompt ao iniciar uma sessão de cliente (fxl-vault)"
        prompt={PROMPT_ABERTURA_CLIENTE}
      />
    </div>
  )
}
