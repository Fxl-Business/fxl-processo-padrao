# Acervo FXL (fxl-vault) — Arquitetura e Convenções

## Objetivo

Repositório central da FXL — concentra knowledge base de clientes, wireframes
navegáveis e documentação detalhada de processo (POPs, biblioteca de KPIs,
blocos de wireframe). Substitui a fragmentação anterior em que cada projeto
vivia em repositórios separados ou como arquivos estáticos em Claude Projects.

---

## Por que este repositório existe

- Centraliza knowledge de clientes sem poluir o GitHub com um repo por cliente
- Permite melhoria contínua do knowledge de cada cliente via Claude Code
- Hospeda wireframes navegáveis junto ao contexto que os originou
- Permite que o Claude Project do cliente leia tanto o knowledge quanto o wireframe,
  possibilitando comparar o estado atual com o branding e evoluir sem retrabalho

---

## Estrutura obrigatória

```
fxl-vault/
├── CLAUDE.md
├── README.md
│
├── src/
│   ├── components/
│   │   └── wireframe/               ← módulo oficial de componentes de wireframe
│   │       ├── KpiCard.tsx          ← valor, rótulo, variação
│   │       ├── BarLineChart.tsx     ← gráfico de barras/linha com dados fictícios
│   │       ├── DataTable.tsx        ← tabela com colunas configuráveis
│   │       ├── InputsScreen.tsx     ← tela de upload de dados
│   │       ├── WireframeSidebar.tsx ← menu lateral de navegação entre telas
│   │       ├── GlobalFilters.tsx    ← filtros de período, segmento, etc.
│   │       └── CommentOverlay.tsx   ← overlay flutuante de comentários por tela/bloco
│   └── pages/
│       ├── Home.tsx                 ← lista todos os clientes cadastrados
│       └── clients/
│           └── [ClientSlug]/
│               ├── Index.tsx        ← visão geral do cliente (docs + acesso ao wireframe)
│               └── Wireframe.tsx    ← viewer com CommentOverlay
│
└── clients/
    └── [client-slug]/               ← slug em kebab-case, ex: tatu-do-bem
        ├── CLAUDE.md                ← regras específicas deste cliente para o Claude Code
        ├── docs/
        │   ├── briefing.md          ← briefing original + histórico de decisões
        │   ├── blueprint.md         ← Blueprint textual completo das telas
        │   ├── branding.md          ← cores, tipografia, identidade visual
        │   └── changelog.md         ← log de evoluções e comentários de revisão resolvidos
        └── wireframe/
            ├── index.tsx            ← entrada do wireframe do cliente (importa as telas)
            └── screens/
                └── [NomeDaTela].tsx ← uma tela por arquivo, monta com componentes do módulo
```

---

## Módulo de componentes (`src/components/wireframe/`)

Componentes React pré-montados com Tailwind. Nenhum componente deste módulo
contém dados reais — todos usam dados fictícios por padrão, configuráveis via props.

O Claude Code, ao gerar o wireframe de um cliente, importa estes componentes
e passa os dados fictícios adequados ao contexto do cliente (ex: nomes de KPIs
que fazem sentido para o segmento, colunas que refletem a operação descrita no briefing).

### Convenção de uso

```tsx
// Exemplo de tela gerada pelo Claude Code para um cliente
import KpiCard from '@/components/wireframe/KpiCard'
import BarLineChart from '@/components/wireframe/BarLineChart'
import GlobalFilters from '@/components/wireframe/GlobalFilters'

export default function DashboardComercial() {
  return (
    <div>
      <GlobalFilters filters={['periodo', 'vendedor']} />
      <KpiCard label="Faturamento" value="R$ 248.000" variation="+12%" />
      <BarLineChart title="Vendas por mês" type="bar" />
    </div>
  )
}
```

---

## Pasta docs/ — Knowledge de execução (adicionado 2026-03-04)

A pasta `docs/` na raiz do repositório concentra o knowledge de execução que
antes estava distribuído em `fxl-processo-padrao`. Isso permite que o Claude
Project de cada cliente precise de apenas UM repositório como fonte.

Estrutura:
- docs/process/ — POPs detalhados (BI Personalizado, Produto, pacote de cliente)
- docs/wireframe/ — Blocos disponíveis para composição de Blueprint
- docs/suporte/ — Biblioteca de KPIs por módulo

O Claude Project do cliente deve subir arquivos desta pasta conforme a tarefa.
Ver docs/process/pacote_cliente.md para o guia completo.

---

## Ideia de evolução futura (não implementar ainda)

No futuro, o Claude Code poderia gerar apenas um arquivo de definições por tela
(ex: `screen-definition.json`) descrevendo quais componentes usar, com quais dados
e em qual layout — e um engine React faria a montagem automaticamente a partir
dessas definições. Isso eliminaria a necessidade de gerar código TSX por tela.
Registrado aqui para avaliação futura.

---

## Como evoluir o knowledge de um cliente

O Claude Project do cliente tem como output padrão um prompt para o Claude Code
atualizar a subpasta `clients/[client-slug]/` deste repositório.

O prompt deve sempre especificar:
- Nome e slug do cliente
- Quais arquivos serão criados ou alterados
- Conteúdo completo de cada arquivo (nunca parcial)
- Mensagem de commit no padrão: `[client-slug]: [o que mudou]`

---

## Regras do Claude Code neste repositório

- Nunca alterar a subpasta de um cliente ao executar prompt de outro
- Nunca criar arquivos `.html` — esta arquitetura usa React
- Nunca criar telas fora de `clients/[client-slug]/wireframe/screens/`
- Nunca adicionar dependências sem justificativa documentada no CLAUDE.md
- Sempre usar os componentes de `src/components/wireframe/` — nunca reinventar localmente

---

## Deploy

Conectar na Vercel com framework preset Vite.
O app React serve como portal central de clientes e viewer de wireframes.

Domínio padrão: `acervo.fxlbi.com.br`
(Nome anterior: third-party.fxlbi.com.br — atualizar DNS na Vercel)
