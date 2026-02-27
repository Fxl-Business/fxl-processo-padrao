# CLAUDE.md — Regras Operacionais do Repositório FXL

## IDENTIDADE

Você está operando no repositório de processo padrão da FXL, empresa de BI para PMEs. Seu papel aqui é manter e evoluir os documentos de processo. Nunca entregue algo genérico — tudo deve refletir a realidade da FXL.

---

## REGRA 1 — PARIDADE OBRIGATÓRIA MD ↔ DOCX

Todo arquivo `.md` possui um arquivo `.docx` correspondente na mesma pasta. Eles são pares obrigatórios.

Antes de concluir qualquer alteração, verifique:

- Se alterou um `.md` → o `.docx` correspondente precisa ser atualizado na mesma sessão
- Se alterou um `.docx` → o `.md` correspondente precisa ser verificado e atualizado se necessário
- Nunca finalize uma sessão com os dois arquivos fora de sincronia

Ao concluir qualquer edição, informe explicitamente:
- ✅ MD atualizado: [nome do arquivo]
- ✅ DOCX atualizado: [nome do arquivo]
- ou ⚠️ DOCX pendente: [nome do arquivo] — motivo: [razão]

---

## REGRA 2 — CASCATA DE ALTERAÇÕES

Uma mudança no processo pode afetar múltiplos arquivos. Antes de executar qualquer alteração, mapeie o impacto:

- Mudança no POP_MASTER → verificar se os POPs específicos precisam ser atualizados
- Mudança em uma Fase → verificar se os POPs que referenciam essa fase precisam de ajuste
- Mudança na Biblioteca de KPIs → verificar se alguma fase ou POP referencia os KPIs alterados
- Mudança na Identidade FXL → verificar se a nomenclatura ou tom precisa ser ajustado em outros arquivos

Informe o mapa de impacto antes de começar a editar.

---

## REGRA 3 — O QUE PERTENCE A CADA ARQUIVO

**Arquivo `.md` (lido pelo Claude como contexto)**
- Objetivo da fase ou processo
- Entradas necessárias para execução
- Instruções de execução (imperativo, direto)
- Saída esperada com formato
- Critério de avanço
- Checklist de validação MD ↔ DOCX

**Arquivo `.docx` (lido por humanos)**
- Objetivo com contexto e raciocínio por trás
- Quem executa e quando
- Passo a passo com exemplos reais
- Erros comuns e como evitar
- Prompts padrão para usar com o Claude
- Seção "Especificação do MD" — descreve o que deve estar no `.md` correspondente
- Histórico de versões

Nunca coloque prompts prontos no `.md`.
Nunca coloque instruções imperativas no `.docx` sem a versão correspondente no `.md`.

---

## REGRA 4 — NOMENCLATURA FXL

Use sempre os termos oficiais:
Dashboard, KPI, Módulo, Briefing, Blueprint, Auditoria, Inputs, Maturidade analítica, BI Personalizado, Produto.

Nunca use: painel, métrica (quando for KPI), relatório visual, plataforma (quando for ferramenta), white-label (substituído por Produto).

---

## REGRA 5 — HISTÓRICO DE VERSÕES

Ao atualizar qualquer arquivo, adicione uma linha na seção "Histórico de Versões" do `.docx`:

| [data] | [versão] | [o que mudou] |

---

## REGRA 6 — SINALIZAÇÕES OBRIGATÓRIAS

Se ao editar um arquivo você identificar:
- Um KPI novo que deveria estar na biblioteca → sinalizar com tag [NOVO KPI]
- Uma melhoria de processo que deveria ir ao POP_MASTER → sinalizar com tag [ATUALIZAR MASTER]
- Uma informação faltando que bloqueia a edição → perguntar antes de continuar

---

## ESTRUTURA DO REPOSITÓRIO

```
CLAUDE.md                  ← este arquivo (regras automáticas)
README.md                  ← índice humano + visão de longo prazo

processo/
  master/                  ← POP_MASTER: visão geral e roteamento
  identidade/              ← identidade e tom da FXL
  bi_personalizado/        ← POP para projetos de cliente específico
  produto/                 ← POP para produtos FXL (plataforma, sistema, SaaS)
  fases/                   ← fases 1 a 6 detalhadas (compartilhadas por todos os POPs)

build/
  wireframe/               ← blocos disponíveis e padrões de wireframe
  design/                  ← design system FXL (a criar)
  arquitetura/             ← auth, banco, infra, lógica (a criar)

suporte/
  biblioteca_kpis.md       ← KPIs por módulo — evolui com cada projeto
  ui_skills.md             ← regras visuais de componentes

pacotes/                   ← arquivos colados nos Claude Projects específicos
  pacote_bi_personalizado.md
  pacote_produto.md
```