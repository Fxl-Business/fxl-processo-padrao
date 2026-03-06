import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_WIREFRAME = `Olá. Vamos iniciar a Fase 2 — Wireframe Estratégico.

Leia antes de começar:
- docs/processo/fases/fase2_wireframe.md
- docs/processo/fases/fase1_diagnostico.md

Cliente: [NOME]
Slug: [client-slug]

Cole abaixo o Briefing validado e gere:
1. O Blueprint completo (tela a tela)
2. O prompt para o Claude Code gerar os arquivos .tsx no repositório fxl-vault,
   usando os componentes de src/components/wireframe/

[BRIEFING AQUI]`

export default function Fase2() {
  return (
    <div>
      <PageHeader
        badge="Fase 2"
        title="Wireframe Estratégico"
        description="Traduz o Briefing em Blueprint, organiza as telas do produto e busca aprovação antes de qualquer sprint."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O que acontece nesta fase</h2>
        <p>
          Aqui a equipe para de discutir conceitos e passa a desenhar estrutura. O Blueprint vira a
          referência oficial de telas, filtros, KPIs, tabelas e interações. Só depois disso o código
          faz sentido.
        </p>

        <h2>Como o fluxo funciona</h2>
        <ol>
          <li>O Briefing validado entra no Claude Project do cliente.</li>
          <li>O Blueprint textual é montado tela a tela.</li>
          <li>O prompt resultante vai para o Claude Code no repositório <code>fxl-vault</code>.</li>
          <li>Claude Code gera os arquivos <code>.tsx</code> usando componentes do módulo <code>src/components/wireframe/</code>.</li>
          <li>Wireframe é publicado automaticamente via Vercel.</li>
          <li>Cliente navega e usa o overlay de comentários por tela ou bloco.</li>
          <li>A equipe itera até aprovação formal ou interna.</li>
        </ol>

        <h2>O que um bom Blueprint define</h2>
        <ul>
          <li>Objetivo de cada tela.</li>
          <li>Filtros globais e locais.</li>
          <li>Cards de KPI, gráficos, tabelas e ações.</li>
          <li>Tela de Inputs e seu papel no fluxo operacional.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Regra operacional:</strong> sem aprovação do wireframe, não existe Fase 3. Em BI
        Personalizado a aprovação é do cliente; em Produto FXL, da equipe.
      </InfoBlock>

      <InfoBlock type="info" className="mb-6">
        <strong>Módulo de componentes:</strong> o wireframe não usa mais HTML puro. O Claude Code
        importa componentes React de <code>src/components/wireframe/</code> — KPI Card, gráficos,
        tabelas, filtros globais, sidebar e overlay de comentários. Nunca criar componente local
        na pasta do cliente.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao gerar o Blueprint no Claude Project do cliente"
        prompt={PROMPT_WIREFRAME}
      />

      <div className="prose">
        <h2>Erros comuns</h2>
        <ul>
          <li>
            <strong>Pular a tela de Inputs</strong> — ela define como o dado entra no produto.
          </li>
          <li>
            <strong>Confundir comentário visual com mudança de escopo</strong> — nem toda sugestão
            de revisão altera o combinado.
          </li>
          <li>
            <strong>Tratar o wireframe como decoração</strong> — ele é uma peça estratégica, não um
            rascunho cosmético.
          </li>
        </ul>
      </div>
    </div>
  )
}
