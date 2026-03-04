import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_NOVO_CLIENTE = `Olá. Vamos iniciar o knowledge base de um novo cliente.

Leia antes de começar:
- CLAUDE.md
- src/components/wireframe/ (estrutura dos componentes disponíveis)

Cliente: [NOME DO CLIENTE]
Slug: [client-slug]
Projeto: [DESCRIÇÃO]

Crie a estrutura inicial em clients/[client-slug]/ com:
- CLAUDE.md do cliente
- docs/briefing.md (a partir do briefing abaixo)
- docs/branding.md (a partir das referências visuais abaixo)
- docs/blueprint.md (vazio — preenchido na Fase 2)
- docs/changelog.md (entrada inicial)

[COLE O BRIEFING E REFERÊNCIAS DE BRANDING AQUI]`

const PROMPT_NOVA_TELA = `Olá. Vamos adicionar uma nova tela ao wireframe do cliente [NOME].

Leia antes de começar:
- CLAUDE.md
- clients/[client-slug]/CLAUDE.md
- clients/[client-slug]/docs/blueprint.md
- clients/[client-slug]/docs/branding.md
- src/components/wireframe/ (componentes disponíveis)

Crie o arquivo clients/[client-slug]/wireframe/screens/[NomeDaTela].tsx
importando os componentes do módulo wireframe.
Use dados fictícios coerentes com o segmento do cliente.

Tela a criar: [DESCRIÇÃO DA TELA CONFORME BLUEPRINT]`

export default function FxlThirdPartyKnowledge() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Acervo FXL"
        description="Repositório central da FXL: knowledge base de clientes, wireframes navegáveis e documentação detalhada de processo. Um repositório, tudo no lugar."
        version="2.0"
        date="2026"
      />

      <div className="prose">
        <h2>Por que centralizar aqui</h2>
        <p>
          Antes desta arquitetura, cada cliente vivia em repositórios separados ou em arquivos
          estáticos dentro de Claude Projects — sem possibilidade de atualização contínua. Agora,
          o Claude Project do cliente lê diretamente a subpasta correspondente e gera prompts
          para o Claude Code evoluir o knowledge e o wireframe sem retrabalho.
        </p>

        <h2>O módulo de componentes de wireframe</h2>
        <p>
          Todos os componentes visuais ficam em <code>src/components/wireframe/</code>. O Claude
          Code não reinventa componentes por projeto — ele importa os existentes e passa os dados
          fictícios adequados ao contexto do cliente. Isso garante consistência visual entre
          projetos e reduz drasticamente o que precisa ser gerado por tela.
        </p>

        <h2>O que o Claude Project do cliente lê</h2>
        <p>
          O conhecimento mínimo recomendado para uma sessão de wireframe inclui o{' '}
          <code>blueprint.md</code> (o que deve ser construído), o <code>branding.md</code> (como
          deve parecer) e os componentes disponíveis no módulo (o que pode ser reutilizado). Com
          esses três, o Claude já consegue gerar telas coerentes e validar se o wireframe existente
          está alinhado com a identidade do cliente.
        </p>

        <h2>Comentários no wireframe</h2>
        <p>
          O viewer inclui um <code>CommentOverlay</code> ativado por botão, visível por tela e por
          bloco. Comentários são registrados no <code>changelog.md</code> do cliente até que uma
          implementação persistente seja definida.
        </p>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Regra de escopo:</strong> o Claude Code nunca altera a subpasta de um cliente ao
        executar um prompt de outro. O slug do cliente deve estar explícito em todo prompt enviado
        ao Claude Code neste repositório.
      </InfoBlock>

      <InfoBlock type="info" className="mb-6">
        <strong>Evolução futura registrada:</strong> no futuro, o Claude Code poderá gerar apenas
        um arquivo de definições por tela (componentes + dados + layout), e um engine React fará a
        montagem automaticamente. Não implementar ainda — ideia registrada em{' '}
        <code>docs/build/arquitetura/fxl_third_party_knowledge.md</code>.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt para iniciar o knowledge base de um novo cliente"
        prompt={PROMPT_NOVO_CLIENTE}
      />

      <PromptBlock
        label="Use este prompt para gerar uma nova tela de wireframe"
        prompt={PROMPT_NOVA_TELA}
      />
    </div>
  )
}
