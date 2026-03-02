# FXL — Processo Padrão

## Visão de Longo Prazo

Hoje entregamos dashboards e sistemas para PMEs.

O objetivo de longo prazo é ter um processo capaz de entender qualquer negócio e, a partir de perguntas e respostas estruturadas, gerar qualquer produto digital — dashboard, sistema, landing page, mobile ou automação — de forma progressivamente automatizada.

A pasta `/build` é onde esse processo técnico vive e evolui. Cada projeto concluído deve contribuir com algo para ela.

---

## Como este repositório funciona

Este repositório é a **fonte da verdade** do processo FXL. Ele é mantido por dois agentes:

- **Claude Project "FXL — Processo Padrão"** — onde melhorias são discutidas e prompts de alteração são gerados
- **Claude Code** — onde as alterações são executadas diretamente nos arquivos

O fluxo de trabalho é:

```
1. Você percebe uma melhoria ou evolução necessária
2. Abre o Claude Project "FXL — Processo Padrão" e discute
3. Claude gera o prompt estruturado com todas as mudanças
4. Você cola o prompt no Claude Code (dentro desta pasta)
5. Claude Code executa — modifica MD + HTML de todos os arquivos afetados
6. Você revisa e faz o commit com mensagem descritiva
7. Google Drive sincroniza automaticamente
```

> Uma alteração no processo geral pode refletir em múltiplos arquivos simultaneamente. O `CLAUDE.md` garante que o Claude Code saiba quais arquivos verificar em cascata.

---

## Formato dos arquivos

Cada documento existe em dois formatos que devem estar sempre sincronizados:

| Formato | Para quem | Como abrir |
|---|---|---|
| `.md` | Claude (contexto operacional) | VSCode, qualquer editor |
| `.html` | Humanos (leitura formatada) | Abrir direto no browser |

O padrão visual dos HTMLs está em `build/HTML_STANDARD_FXL.md`.

---

## Tipos de Projeto FXL

| Tipo | Descrição | Exemplos |
|---|---|---|
| **BI Personalizado** | Construído para um cliente específico com dados únicos | BI Tatu do Bem, BI [Cliente] |
| **Produto** | Construído pela FXL — pode atender múltiplos clientes. Inclui BI de Plataforma, Sistema e SaaS | BI Conta Azul, Locação de Imóveis |

---

## Estrutura do Repositório

> **Repositório relacionado:** `fxl-wireframes` — contém o código da plataforma de wireframes e os wireframes gerados por cliente. Wireframes são gerados via Claude Code a partir de Blueprints produzidos no Project "FXL — Wireframe Builder".

```
fxl-processo-padrao/
│
├── CLAUDE.md                        ← regras automáticas do Claude Code
├── README.md                        ← este arquivo
│
├── processo/                        ← o como trabalhamos
│   ├── master/                      ← visão geral + roteamento por tipo
│   ├── identidade/                  ← quem somos, como falamos
│   ├── bi_personalizado/            ← POP para projetos de cliente
│   ├── produto/                     ← POP para produtos FXL
│   └── fases/                       ← detalhamento de cada fase (compartilhado)
│
├── build/                           ← o como construímos — camada técnica
│   ├── HTML_STANDARD_FXL.md        ← padrão obrigatório para HTMLs
│   ├── wireframe/                   ← blocos disponíveis, padrões de UX
│   ├── design/                      ← design system FXL (a criar)
│   └── arquitetura/                 ← premissas técnicas, stack, deploy, segurança, master prompt
│
├── suporte/                         ← referências compartilhadas
│   ├── biblioteca_kpis.md
│   └── ui_skills.md
│
└── pacotes/                         ← colados nos Claude Projects específicos
    ├── pacote_bi_personalizado.md
    └── pacote_produto.md
```

---

## Convenções de Commit

```
[escopo]: [o que mudou] — MD e HTML sincronizados
[escopo]: [o que mudou] — HTML pendente: [motivo]
```

Exemplos:
```
processo/master: adiciona seção de visão de longo prazo — MD e HTML sincronizados
processo/fases: atualiza critério de avanço da fase 2 — MD e HTML sincronizados
suporte/biblioteca_kpis: adiciona KPI de margem por vendedor
```

---

*FXL — Documento de Uso Interno | Repositório: fxl-processo-padrao*
