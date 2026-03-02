# Padrão de Prompt — Claude Code

## Quando aplicar

Este padrão define a estrutura obrigatória de todo prompt gerado no Claude Project
"FXL — Processo Padrão" para execução no Claude Code.

---

## Estrutura obrigatória

Todo prompt para o Claude Code deve seguir esta estrutura:

```
# Prompt para Claude Code — [Título descritivo]

Olá. Vamos trabalhar na evolução do processo FXL.

Antes de começar, leia os seguintes arquivos do repositório para ter o contexto completo:

- `CLAUDE.md`
- `README.md`
- [outros arquivos relevantes para o contexto]

---

## Objetivo desta sessão

[Descrição clara do que será feito]

---

## [Seções de conteúdo]

[Para cada arquivo a ser criado/alterado, especificar:]
- Caminho completo do arquivo
- Conteúdo completo (não parcial)
- Se é criação ou alteração

---

## Verificação em cascata

- [ ] [lista de arquivos verificados]

---

## Execução — ordem obrigatória

1. [Passo]
2. [Passo]
3. [Passo]

Ao concluir, informar:
✅ Etapa [N] concluída — [resumo]

---

## Mensagem de commit sugerida

`[escopo]: [o que mudou]`
```

---

## Regras do conteúdo

1. **Conteúdo completo, não parcial**
   - Nunca dizer "adicione X aqui". Sempre fornecer o conteúdo completo do arquivo ou da seção.

2. **Pares obrigatórios**
   - Se o prompt cria ou altera um `.md` em `docs/`, deve incluir a página React correspondente em `src/pages/`.

3. **Verificação em cascata obrigatória**
   - Sempre incluir a seção de verificação, mesmo que a conclusão seja "não impacta outros arquivos".

4. **Mensagem de commit descritiva**
   - Seguir o padrão: `[escopo]: [o que mudou]`
   - Máximo de 3 linhas, sem virar changelog

---

## Regra de entrega obrigatória

Toda entrega de prompt deve incluir:

1. O prompt exibido na conversa
2. Um arquivo `.md` pronto para download
3. A mensagem de commit destacada ao final da resposta

---

## Nomenclatura do arquivo

Padrão: `prompt_[escopo]_[acao].md`

| Exemplo de situação | Nome do arquivo |
|---|---|
| Migrar layout | `prompt_layout_migracao.md` |
| Atualizar fase 3 | `prompt_fase3_atualizacao.md` |
| Incluir novo KPI | `prompt_kpi_novo.md` |
