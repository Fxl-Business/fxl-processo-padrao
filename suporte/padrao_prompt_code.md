# Padrão de Prompt — Claude Code

## Quando aplicar

Este padrão define a estrutura obrigatória de todo prompt gerado no Claude Project "FXL — Processo Padrão" para execução no Claude Code.

---

## Estrutura obrigatória

Todo prompt para o Claude Code deve seguir esta estrutura:

```
# Prompt para Claude Code — [Título descritivo]

Olá. Vamos trabalhar na evolução do processo FXL.

Antes de começar, leia os seguintes arquivos do repositório para ter o contexto completo:

- `CLAUDE.md` (regras operacionais)
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

Conforme REGRA 4 do CLAUDE.md, verificar se as alterações impactam:

- [ ] [lista de arquivos verificados]

---

## Mensagem de commit sugerida

```
[escopo]: [o que mudou] — MD e HTML sincronizados
```

---

## Execução

[Passos numerados do que o Claude Code deve fazer]

Ao concluir, informar:
```
✅ [arquivo] atualizado/criado
```
```

---

## Regras do conteúdo

1. **Conteúdo completo, não parcial**
   - Nunca dizer "adicione X aqui". Sempre fornecer o conteúdo completo do arquivo ou da seção.

2. **Caminhos absolutos**
   - Sempre usar o caminho completo do arquivo a partir da raiz do repositório.

3. **Paridade MD ↔ HTML**
   - Se o prompt cria ou altera um `.md`, deve incluir instrução para gerar/atualizar o `.html` correspondente.

4. **Verificação em cascata obrigatória**
   - Sempre incluir a seção de verificação, mesmo que a conclusão seja "não impacta outros arquivos".

5. **Mensagem de commit descritiva**
   - Seguir o padrão: `[escopo]: [o que mudou]`
   - Indicar se MD e HTML estão sincronizados
   - **Máximo de 3 linhas** — ser conciso, não listar cada arquivo alterado

---

## Exemplo de mensagem de commit

Bom (conciso):
```
processo/fases: cria conteúdo completo das 6 fases com seções por tipo — MD e HTML sincronizados
```

Bom (com contexto adicional em até 3 linhas):
```
processo/fases: cria conteúdo completo das 6 fases com seções por tipo — MD e HTML sincronizados
index.html: ativa link para fases
```

Ruim (longo demais):
```
processo/fases: cria conteúdo completo das 6 fases com seções por tipo de projeto — MD e HTML sincronizados

- fase1_diagnostico: formulário comercial + documento de briefing (BI) / documento de definição (Produto)
- fase2_wireframe: blueprint + prompt whimsical
- fase3_desenvolvimento: prompt lovable + regras
... [continua]
```

---

## Regra de entrega obrigatória

**Toda entrega de prompt deve incluir a mensagem de commit destacada no final da resposta.**

Não basta a mensagem estar dentro do arquivo do prompt — ela deve ser apresentada explicitamente ao usuário no momento da entrega, no formato:

```
## Mensagem de commit

[mensagem aqui]
```

Isso garante que o usuário tenha a mensagem pronta para copiar após executar o prompt no Claude Code.

---

## Regra de entrega — Arquivo MD obrigatório

Todo prompt gerado pelo Claude Project "FXL — Processo Padrão" deve ser entregue de duas formas:

1. **Exibido na conversa** — para leitura e revisão imediata
2. **Arquivo `.md` para download** — para colar diretamente no Claude Code sem perda de formatação

### Nomenclatura do arquivo

Padrão: `prompt_[escopo]_[acao].md`

| Exemplo de situação | Nome do arquivo |
|---|---|
| Adicionar sidebar de navegação | `prompt_sidebar_navegacao.md` |
| Criar fase 3 com novo conteúdo | `prompt_fase3_adiciona_conteudo.md` |
| Atualizar padrão HTML de todas as páginas | `prompt_html_standard_update.md` |
| Adicionar novo KPI à biblioteca | `prompt_kpi_adiciona_margem.md` |

### Por que MD e não texto puro

- Garante que blocos de código, tabelas e estrutura de seções chegam íntegros ao Claude Code
- Permite versionamento no repositório se necessário
- Evita perda de formatação em cópias manuais
