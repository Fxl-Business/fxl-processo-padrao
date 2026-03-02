# CLAUDE.md — Regras Operacionais do Repositório FXL

## IDENTIDADE

Você está operando no repositório de processo padrão da FXL, empresa de BI para PMEs.
Seu papel aqui é manter e evoluir os documentos de processo.

A visão de longo prazo da FXL é ter um processo capaz de entender qualquer negócio
e, a partir de perguntas e respostas estruturadas, gerar qualquer produto digital —
dashboard, sistema, landing page, mobile ou automação — de forma progressivamente
automatizada. Toda evolução do processo deve caminhar nessa direção.

---

## REGRA 1 — PARIDADE OBRIGATÓRIA MD ↔ HTML

Todo arquivo `.md` possui um arquivo `.html` correspondente na mesma pasta.
Eles são pares obrigatórios e devem estar sempre sincronizados.

**Antes de concluir qualquer alteração, verifique:**

- Se alterou um `.md` → o `.html` correspondente deve ser regerado na mesma sessão
- Se alterou um `.html` → não faça isso. O `.html` é sempre gerado a partir do `.md`, nunca editado diretamente
- Uma mudança em arquivo de processo pode afetar múltiplos arquivos em cascata — verifique sempre

**Ao concluir qualquer edição, informe explicitamente:**
```
✅ MD atualizado: [caminho do arquivo]
✅ HTML regerado: [caminho do arquivo]
```
ou
```
⚠️ HTML pendente: [caminho do arquivo] — motivo: [razão]
```

---

## REGRA 2 — O QUE PERTENCE A CADA ARQUIVO

**Arquivo `.md` — lido pelo Claude como contexto**
- Objetivo da fase ou documento
- Entradas necessárias para execução
- Instruções de execução (imperativo, direto)
- Saída esperada com formato definido
- Critério de avanço ou conclusão
- Checklist de validação MD↔HTML

**Arquivo `.html` — lido por humanos no browser**
- Versão visual e navegável do conteúdo do `.md`
- Contexto e raciocínio por trás das instruções
- Exemplos reais e erros comuns
- Prompts padrão para usar com o Claude (em blocos destacados)
- Seção "Especificação do MD" — descreve o que deve estar no `.md` correspondente
- Histórico de versões

**Nunca coloque prompts prontos no `.md`.**
**Nunca edite o `.html` diretamente — ele é sempre gerado a partir do `.md`.**

---

## REGRA 3 — PADRÃO HTML FXL

Todo arquivo `.html` gerado deve seguir rigorosamente este padrão:

### Estrutura obrigatória
- Arquivo único autocontido — CSS e JS inline, sem dependências externas
- Navegação no topo: link para `../../index.html` e link para o `.md` equivalente no GitHub
- Sumário clicável com âncoras no início do conteúdo
- Rodapé com versão, data e link para o repositório
- **Sidebar de seção (quando aplicável):** páginas que fazem parte de uma seção
  com múltiplos documentos devem incluir sidebar lateral com links para todos
  os documentos da seção. O item ativo recebe fundo `#1B3A5C` e texto `#FFFFFF`.
  Largura: 240px. Fundo: `#F0F4F8`. Posicionamento: sticky ao topo da área de conteúdo.
  Em mobile (<768px): oculta com `display: none`.
  Seções que atualmente requerem sidebar: `build/arquitetura/` e `processo/fases/`.

### Visual
- Fundo da página: `#F8F9FA`
- Fundo do conteúdo: `#FFFFFF`
- Texto principal: `#1A1A2E`
- Fonte: `Inter, system-ui, sans-serif` (sem Google Fonts — autocontido)
- Cor primária FXL: `#1B3A5C`
- Largura máxima do conteúdo: `860px` centralizado com padding lateral
- H1: `28px`, bold, cor `#1B3A5C`
- H2: `20px`, bold, cor `#1B3A5C`
- H3: `16px`, bold, cor `#1A1A2E`

### Componentes visuais padronizados

**Tabelas**
- Header: fundo `#1B3A5C`, texto `#FFFFFF`, bold
- Linhas alternadas: `#F5F5F5` e `#FFFFFF`
- Borda: `1px solid #E0E0E0`
- Width: 100%

**Blocos de prompt (prompts para usar com Claude)**
- Fundo: `#F0F4F8`
- Borda esquerda: `4px solid #1B3A5C`
- Prefixo: label "💬 Prompt" em bold antes do bloco
- Fonte: monospace

**Critério de avanço**
- Fundo: `#E8F5E9`
- Borda esquerda: `4px solid #2E8B57`
- Prefixo: `✅ Critério de Avanço`
- Texto bold verde `#2E8B57`

**Avisos e pendências**
- Fundo: `#FFF8E1`
- Borda esquerda: `4px solid #F59E0B`
- Prefixo: `⚠️`

**Sumário**
- Fundo: `#F0F4F8`
- Borda: `1px solid #D0D8E4`
- Links internos âncora, sem sublinhado, cor `#1B3A5C`

**Navegação (topo)**
- Barra fina `#1B3A5C` com links brancos: `← Índice Geral` e `Ver MD no GitHub`

**Rodapé**
- Fundo `#1B3A5C`, texto `#FFFFFF`
- Versão | Data | Link para o repositório

---

## REGRA 4 — CASCATA DE MUDANÇAS

Quando uma alteração no processo geral for solicitada, verifique obrigatoriamente:

1. `processo/master/POP_MASTER.md` + `POP_MASTER.html` — impacta o roteamento geral?
2. `processo/fases/` — impacta alguma fase específica?
3. `processo/bi_personalizado/` ou `processo/produto/` — impacta algum POP específico?
4. `pacotes/` — impacta os pacotes colados nos Claude Projects?
5. `suporte/` — impacta biblioteca de KPIs ou padrões de build?
6. `index.html` — precisa refletir alguma mudança estrutural?

Informe quais arquivos foram verificados e quais foram alterados.

---

## REGRA 5 — NOMENCLATURA FXL

| Usar | Evitar |
|---|---|
| Dashboard | Painel, relatório visual, tela |
| KPI | Métrica (quando for indicador-chave), número |
| Módulo | Área, seção, bloco |
| Briefing | Levantamento, formulário inicial |
| Blueprint | Rascunho, esboço |
| Auditoria | Teste, revisão |
| Inputs | Uploads, importação de dados |
| BI Personalizado | Dashboard de cliente, projeto customizado |
| Produto | White-label, SaaS (como categoria geral) |

---

## REGRA 6 — HISTÓRICO DE VERSÕES

Ao atualizar qualquer arquivo, adicione uma linha na seção "Histórico de Versões" do `.html`:

```
| [data] | [versão] | [o que mudou] | [responsável] |
```

---

## REGRA 7 — SINALIZAÇÕES OBRIGATÓRIAS

Se ao editar um arquivo você identificar:

- Um KPI novo relevante → sinalizar para adicionar à `suporte/biblioteca_kpis.md`
- Uma melhoria de processo → sinalizar para incorporar ao POP correspondente
- Um padrão de build recorrente → sinalizar para incorporar à pasta `build/`
- Uma informação faltando que bloqueia a edição → perguntar antes de continuar

---

## REGRA 8 — ENTREGA DE PROMPT

**Ao finalizar:**
- Sempre entregue um prompt completo e pronto para o Claude Code
- O prompt deve especificar: quais arquivos alterar, o que muda em cada um, e o que verificar em cascata
- **O prompt final deve ser entregue como arquivo `.md` para download**, além de exibido na conversa
- O arquivo deve ser nomeado com padrão descritivo: `prompt_[escopo]_[acao].md`
  - Exemplo: `prompt_sidebar_navegacao.md`, `prompt_fase3_adiciona_sprint.md`
- Inclua a mensagem de commit sugerida no final do prompt

---

## ESTRUTURA DO REPOSITÓRIO

```
CLAUDE.md                          ← este arquivo (regras automáticas)
README.md                          ← índice técnico + visão de longo prazo
index.html                         ← índice navegável para humanos (GitHub Pages)

processo/
  master/                          ← POP_MASTER — visão geral e roteamento
  identidade/                      ← identidade e tom FXL
  bi_personalizado/                ← POP para projetos de cliente específico
  produto/                         ← POP para produtos FXL (plataforma, sistema, SaaS)
  fases/                           ← detalhamento de cada fase (compartilhado por todos)

build/
  wireframe/                       ← blocos disponíveis, padrões de UX
  design/                          ← design system FXL (a criar)
  arquitetura/                     ← auth, banco, infra, lógica (a criar)

suporte/
  biblioteca_kpis.md               ← KPIs por módulo, evolui com cada projeto

pacotes/
  pacote_bi_personalizado.md       ← colado em Projects de cliente
  pacote_produto.md                ← colado em Projects de produto
```

## COMO PUBLICAR (GitHub Pages)

Este repositório é publicado via GitHub Pages.
URL base: `https://[org].github.io/fxl-processo-padrao/`
Cada HTML é acessível pelo caminho correspondente.
O `index.html` na raiz é a página inicial pública.