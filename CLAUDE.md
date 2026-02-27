# CLAUDE.md — Regras Operacionais do Repositório FXL

## IDENTIDADE
Você está operando no repositório de processo padrão da FXL,
empresa de BI para PMEs. Seu papel aqui é manter e evoluir
os documentos de processo — nunca entregar algo genérico.

---

## REGRA 1 — PARIDADE OBRIGATÓRIA MD ↔ DOCX

Todo arquivo .md possui um arquivo .docx correspondente
na mesma pasta. Eles são pares obrigatórios.

Antes de concluir qualquer alteração, verifique:

- Se alterou um .md → o .docx correspondente precisa
  ser atualizado na mesma sessão
- Se alterou um .docx → o .md correspondente precisa
  ser verificado e atualizado se necessário
- Nunca finalize uma sessão com os dois arquivos
  fora de sincronia

Ao concluir qualquer edição, informe explicitamente:
✅ MD atualizado: [nome do arquivo]
✅ DOCX atualizado: [nome do arquivo]
ou
⚠️ DOCX pendente: [nome do arquivo] — motivo: [razão]

---

## REGRA 2 — O QUE PERTENCE A CADA ARQUIVO

**Arquivo .md (lido pelo Claude como contexto)**
- Objetivo da fase
- Entradas necessárias
- Instruções de execução (imperativo, direto)
- Saída esperada com formato
- Critério de avanço
- Checklist de validação MD↔DOCX

**Arquivo .docx (lido por humanos)**
- Objetivo da fase com contexto e raciocínio
- Quem executa e quando
- Passo a passo com exemplos reais
- Erros comuns e como evitar
- Prompts padrão para usar com o Claude
- Seção "Especificação do MD" — descreve o que
  deve estar no arquivo .md correspondente
- Histórico de versões

Nunca coloque prompts prontos no .md.
Nunca coloque instruções imperativas no .docx
sem a versão correspondente no .md.

---

## REGRA 3 — NOMENCLATURA FXL

Use sempre os termos oficiais:
Dashboard, KPI, Módulo, Briefing, Blueprint,
Auditoria, Inputs, Maturidade analítica.

Nunca use: painel, métrica (quando for KPI),
relatório visual, plataforma, ferramenta.

---

## REGRA 4 — HISTÓRICO DE VERSÕES

Ao atualizar qualquer arquivo, adicione uma linha
na seção "Histórico de Versões" do .docx:
| [data] | [versão] | [o que mudou] |

---

## REGRA 5 — SINALIZAÇÕES OBRIGATÓRIAS

Se ao editar um arquivo você identificar:
- Um KPI novo que deveria estar na biblioteca → sinalizar
- Uma melhoria de processo que deveria ir ao POP → sinalizar  
- Uma informação faltando que bloqueia a edição → perguntar
  antes de continuar

---

## ESTRUTURA DO REPOSITÓRIO
```
CLAUDE.md              ← este arquivo (regras automáticas)
README.md              ← índice humano
00_identidade/         ← identidade e tom da FXL
01_fase1_diagnostico/  ← diagnóstico estratégico
02_fase2_wireframe/    ← wireframe e blueprint
03_fase3_desenvolvimento/ ← prompt para Lovable
04_fase4_auditoria/    ← checklist de auditoria
05_fase5_entrega/      ← protocolo de entrega
06_fase6_tutorial/     ← roteiro de tutorial
biblioteca_kpis.md     ← KPIs por módulo (evolui com projetos)
pacotes/               ← pacotes de instruções para Projects
```