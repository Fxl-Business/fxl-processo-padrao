# CLAUDE.md — Regras Operacionais do Repositório FXL

## IDENTIDADE

Você está operando no repositório de processo padrão da FXL, empresa de BI para PMEs.
Seu papel aqui é manter e evoluir os documentos de processo.

A visão de longo prazo da FXL é ter um processo capaz de entender qualquer negócio
e, a partir de perguntas e respostas estruturadas, gerar qualquer produto digital —
dashboard, sistema, landing page, mobile ou automação — de forma progressivamente
automatizada. Toda evolução do processo deve caminhar nessa direção.

---

## ESTRUTURA DO REPOSITÓRIO

```
fxl-processo-padrao/
├── CLAUDE.md
├── README.md
│
├── docs/
│   ├── processo/
│   │   ├── master/          ← POP_MASTER.md — roteamento e visão superior
│   │   ├── identidade/
│   │   └── fases/           ← fase1 a fase6 — resumo de cada fase
│   ├── build/
│   │   └── arquitetura/     ← premissas técnicas de stack e deploy
│   └── suporte/
│       ├── padrao_conversa_project.md
│       ├── padrao_prompt_code.md
│       └── fluxo_dois_repositorios.md
│
└── src/                     ← Aplicação React (para humanos)
    ├── components/
    ├── pages/
    └── lib/
```

---

## RELAÇÃO COM fxl-third-party-knowledge

O repositório `fxl-third-party-knowledge` é a fonte de execução detalhada.
Os seguintes documentos foram migrados para lá e não existem mais aqui:

- POP_BI_PERSONALIZADO.md → fxl-third-party-knowledge/docs/process/
- POP_PRODUTO.md → fxl-third-party-knowledge/docs/process/
- pacote_cliente.md → fxl-third-party-knowledge/docs/process/
- blocos_disponiveis.md → fxl-third-party-knowledge/docs/wireframe/
- biblioteca_kpis.md → fxl-third-party-knowledge/docs/suporte/

Quando uma sessão de Claude Project resultar em prompt para o Claude Code,
o escopo do prompt determina qual repositório é alterado.
Nunca inferir que uma mudança aqui implica mudança automática lá.

---

## CONTEXTO DO DIRETÓRIO PAI

Este repositório vive dentro de `fxl/fxl-processo-padrao/`.
O operador abre o Claude Code a partir de `fxl/` — não de dentro deste repo.
Ao abrir de `fxl/`, o Claude Code carrega em hierarquia:
1. `fxl/CLAUDE.md` — árbitro de escopo e sincronização
2. `fxl/fxl-processo-padrao/CLAUDE.md` — este arquivo
3. `fxl/fxl-third-party-knowledge/CLAUDE.md` — regras do Acervo FXL

Detalhamento completo do fluxo: `docs/suporte/fluxo_dois_repositorios.md`

---

## REGRA 1 — SEPARAÇÃO OBRIGATÓRIA: `/docs/` vs `/src/pages/`

### `/docs/` — Lido pelo Claude como contexto operacional

Contém a fonte da verdade do processo FXL. Escrito para o modelo.

- Objetivo da fase ou documento
- Entradas necessárias para execução
- Instruções de execução (imperativo, direto)
- Saída esperada com formato definido
- Critério de avanço ou conclusão
- Prompts padrão escritos em 3ª pessoa operacional
  - ✅ "Será utilizado o seguinte prompt padrão nas próximas interações:"
  - ❌ "Use este prompt para iniciar uma conversa" ← isso vai na página React

### `/src/pages/` — Lido por humanos na aplicação React

Versão visual e navegável da documentação. Escrito para pessoas.

- Contexto e raciocínio por trás das instruções
- Exemplos reais e erros comuns
- Prompts em blocos destacados com botão de cópia, com orientação direta ao usuário
  - ✅ "Use este prompt ao iniciar uma conversa no Project FXL — Processo Padrão"
  - ❌ "Será utilizado o prompt padrão X" ← isso vai no MD

**Nunca copie texto literalmente entre o MD e a página React. São vozes diferentes.**

---

## REGRA 2 — PARIDADE OBRIGATÓRIA: MD ↔ ROTA REACT

Cada arquivo `.md` em `/docs/` possui uma rota correspondente em `/src/pages/`.
Eles são pares obrigatórios com vozes distintas e devem evoluir juntos.

**Antes de concluir qualquer alteração, verifique:**

- Se criou ou alterou um `.md` em `/docs/` → a página React correspondente deve ser criada/atualizada na mesma sessão
- Se alterou a página React → verifique se o MD precisa de atualização operacional

**Mapeamento de rotas:**

A rota React é derivada do caminho MD:
`docs/[seção]/[subseção]/[arquivo].md` → `/[seção]/[subseção]/[arquivo-em-kebab-case]`

Exemplos:
| Arquivo em `/docs/` | Rota React |
|---|---|
| `docs/processo/master/POP_MASTER.md` | `/processo/master` |
| `docs/processo/fases/fase1_diagnostico.md` | `/processo/fases/fase1` |
| `docs/processo/fases/fase2_wireframe.md` | `/processo/fases/fase2` |
| `docs/build/arquitetura/premissas_gerais.md` | `/build/arquitetura/premissas-gerais` |
| `docs/build/arquitetura/deploy_vercel.md` | `/build/arquitetura/deploy-vercel` |
| `docs/suporte/padrao_prompt_code.md` | `/suporte/padrao-prompt-code` |
| `docs/suporte/fluxo_dois_repositorios.md` | `/suporte/fluxo-dois-repositorios` |

Para o mapeamento completo, consultar `src/App.tsx` (fonte de verdade das rotas).

**Ao concluir qualquer edição, informe explicitamente:**
```
✅ MD atualizado: [caminho]
✅ Página React atualizada: [rota]
```
ou
```
⚠️ Página React pendente: [rota] — motivo: [razão]
```

---

## REGRA 3 — NOMENCLATURA OFICIAL FXL

Sempre usar os termos oficiais:
- **Dashboard** — nunca "painel" ou "tela"
- **KPI** — nunca "métrica" ou "indicador" sem contexto
- **Briefing** — documento de diagnóstico do cliente
- **Blueprint** — documento de wireframe estratégico
- **Auditoria** — fase de validação técnica
- **Inputs** — dados de entrada do processo
- **POP** — Procedimento Operacional Padrão

---

## REGRA 4 — STACK OBRIGATÓRIA

Esta aplicação usa:
- React 18 + TypeScript 5 (strict mode obrigatório)
- Vite 5
- Tailwind CSS 3
- shadcn/ui (última estável)
- react-router-dom v6
- Vercel (deploy)

Nunca adicionar dependências sem documentar justificativa.

---

## REGRA 5 — O QUE NUNCA FAZER

- Nunca editar arquivos dentro de `/src/` para conteúdo operacional — esse conteúdo vai em `/docs/`
- Nunca colocar prompts prontos em linguagem de UI dentro dos MDs
- Nunca duplicar texto literal entre MD e página React
- Nunca criar arquivos `.html` — esta era acabou
- Nunca usar `any` em TypeScript
