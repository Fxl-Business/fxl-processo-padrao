# Fase 2 — Wireframe Estratégico

## Objetivo

Definir a arquitetura completa do produto antes de qualquer linha de código. O wireframe é aprovado antes do desenvolvimento — isso evita retrabalho caro.

> ⚠️ Não inicie o desenvolvimento sem aprovação formal do wireframe. Para BI Personalizado, a aprovação precisa ser do cliente. Para Produto, da equipe FXL.

---

## Arquitetura do processo

### Ambientes envolvidos

| Ambiente | Função na Fase 2 |
|---|---|
| Claude Project do Cliente | Fonte do Documento de Briefing (Fase 1) |
| Claude Project "FXL — Wireframe Builder" | Transforma Briefing em Blueprint → gera prompt para Claude Code |
| Claude Code (repositório `fxl-wireframes`) | Gera os arquivos HTML+CSS+JS do wireframe |
| Plataforma de Wireframes (Vercel/Netlify) | Hospeda wireframes para visualização e comentários |

### Fluxo geral

1. Operador copia o Documento de Briefing do Project do Cliente
2. Cola no Project "FXL — Wireframe Builder"
3. Wireframe Builder analisa o Briefing e gera o Blueprint
4. Blueprint sai como prompt pronto para o Claude Code
5. Operador cola o prompt no Claude Code (repositório `fxl-wireframes`)
6. Claude Code gera os arquivos HTML+CSS+JS do wireframe
7. Wireframe é publicado na plataforma
8. Operador convida o cliente por email
9. Cliente navega, comenta por tela ou por elemento
10. Iterações até aprovação formal → Fase 3

---

## Por tipo de projeto

### BI Personalizado

**Contexto:** Blueprint gerado a partir do Documento de Briefing. Cliente aprova visualmente antes do desenvolvimento.

#### Entradas

- Documento de Briefing validado (Fase 1)
- Biblioteca de KPIs (`docs/suporte/biblioteca_kpis.md`)
- Padrões de blocos (`docs/build/wireframe/blocos_disponiveis.md`)

#### Blueprint

Documento textual que descreve cada tela do sistema. Gerado pelo Claude Project "FXL — Wireframe Builder" a partir do Briefing.

**Para cada tela, especificar:**
- Nome da tela
- Objetivo (o que o usuário resolve nesta tela)
- Filtros disponíveis (período, segmento, unidade, etc.)
- Cards de KPI (nome, lógica de cálculo, comparativo)
- Gráficos (tipo, eixos, dados)
- Tabelas (colunas, ordenação padrão)
- Ações disponíveis (exportar, drill-down, etc.)

**Telas obrigatórias:**
- Dashboard principal (visão consolidada)
- Uma tela por módulo contratado
- Tela de Inputs (upload de dados)

#### Prompt — Gerar Blueprint (no Wireframe Builder)

```
Analise o Documento de Briefing abaixo e gere o Blueprint completo.

Para cada tela: nome, objetivo, filtros, cards de KPI, gráficos e tabelas.
Inclua a tela de Inputs com instruções de upload.
Siga os padrões de blocos disponíveis em docs/build/wireframe/blocos_disponiveis.md.

Ao final, gere o Prompt de Wireframe pronto para colar no Claude Code.
O prompt deve instruir o Claude Code a gerar cada tela como HTML+CSS+JS puro,
seguindo o design system FXL e os padrões do repositório fxl-wireframes.

[COLE O DOCUMENTO DE BRIEFING AQUI]
```

#### Processo de revisão

1. Wireframe publicado na plataforma
2. Operador envia convite por email ao cliente
3. Cliente navega tela a tela na plataforma
4. Comentários por tela (observações gerais) e por elemento (ajustes específicos)
5. Equipe FXL analisa comentários e implementa ajustes
6. Novo ciclo de revisão até aprovação formal

#### Saída esperada

- Blueprint textual completo
- Prompt de Wireframe para Claude Code
- Wireframe em HTML+CSS+JS publicado na plataforma
- Comentários do cliente resolvidos
- Aprovação formal do cliente (escrita)

#### Critério de avanço

✅ Cliente visualiza o wireframe na plataforma e dá aprovação formal escrita. Sem aprovação, a Fase 3 não inicia.

---

### Produto FXL

**Contexto:** Idêntico ao BI Personalizado, exceto que a aprovação é interna. Não há cliente externo para validar — a equipe FXL decide quando o wireframe está aprovado.

#### Entradas

- Documento de Definição de Produto validado (Fase 1)
- Biblioteca de KPIs
- Padrões de blocos

#### Prompt — Gerar Blueprint (Produto)

```
Analise o Documento de Definição de Produto abaixo e gere o Blueprint completo.

Para cada tela: nome, objetivo, filtros, cards de KPI, gráficos e tabelas.
Inclua a tela de Inputs (se aplicável).
Considere que este é um produto para múltiplos usuários — a UI deve ser autoexplicativa.

Ao final, gere o Prompt de Wireframe pronto para colar no Claude Code.

[COLE O DOCUMENTO DE DEFINIÇÃO AQUI]
```

#### Saída esperada

- Blueprint textual completo
- Prompt de Wireframe para Claude Code
- Wireframe em HTML+CSS+JS publicado na plataforma
- Aprovação interna da equipe FXL

#### Critério de avanço

✅ Equipe FXL aprova o wireframe internamente. Decisões de UI resolvidas.

---

## Checklist de validação MD ↔ HTML

- [ ] Seções BI Personalizado e Produto claramente separadas
- [ ] Prompts em blocos destacados
- [ ] Critérios de avanço diferenciados (cliente vs interno)
- [ ] Referências aos arquivos de suporte corretas
- [ ] Nenhuma referência ao Whimsical em nenhum lugar
- [ ] Fluxo com ambientes documentado
- [ ] Processo de revisão via plataforma documentado
