# Fase 2 — Wireframe Estratégico

## Objetivo

Definir a arquitetura completa do produto antes de qualquer linha de código. O wireframe é aprovado antes do desenvolvimento — isso evita retrabalho caro.

---

## Por tipo de projeto

### BI Personalizado

**Contexto:** Blueprint gerado a partir do Documento de Briefing. Cliente aprova visualmente antes do desenvolvimento.

**Fluxo:**
1. Claude gera o Blueprint textual a partir do briefing
2. Operador usa o Blueprint como prompt no Whimsical AI
3. Whimsical gera o wireframe visual
4. Cliente visualiza e aprova formalmente
5. Critério de avanço atingido → Fase 3

#### Entradas

- Documento de Briefing validado (Fase 1)
- Biblioteca de KPIs (`suporte/biblioteca_kpis.md`)
- Padrões de blocos (`build/wireframe/blocos_disponiveis.md`)

#### Blueprint

Documento textual que descreve cada tela do sistema.

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

#### Prompt — Gerar Blueprint

```
Com base no Documento de Briefing validado, gere o Blueprint completo.

Para cada tela: nome, objetivo, filtros, cards de KPI, gráficos e tabelas.
Inclua a tela de Inputs com instruções de upload.
Siga os padrões de blocos disponíveis em build/wireframe/blocos_disponiveis.md.
Ao final, gere o Prompt Whimsical pronto para uso.

[COLE O DOCUMENTO DE BRIEFING AQUI]
```

#### Prompt Whimsical

Gerado automaticamente pelo Claude ao final do Blueprint. Formato otimizado para o Whimsical AI gerar o wireframe visual.

#### Saída esperada

- Blueprint textual completo
- Prompt Whimsical pronto
- Wireframe visual no Whimsical
- Aprovação formal do cliente (escrita)

#### Critério de avanço

✅ Cliente visualiza o wireframe no Whimsical e dá aprovação formal escrita. Sem aprovação, a Fase 3 não inicia.

---

### Produto FXL

**Contexto:** Idêntico ao BI Personalizado, exceto que a aprovação é interna.

**Fluxo:**
1. Claude gera o Blueprint a partir do Documento de Definição
2. Operador gera wireframe no Whimsical
3. Equipe FXL revisa e aprova internamente
4. Critério de avanço atingido → Fase 3

#### Entradas

- Documento de Definição de Produto validado (Fase 1)
- Biblioteca de KPIs
- Padrões de blocos

#### Prompt — Gerar Blueprint (Produto)

```
Com base no Documento de Definição de Produto, gere o Blueprint completo.

Para cada tela: nome, objetivo, filtros, cards de KPI, gráficos e tabelas.
Inclua a tela de Inputs (se aplicável).
Considere que este é um produto para múltiplos usuários — a UI deve ser autoexplicativa.
Ao final, gere o Prompt Whimsical.

[COLE O DOCUMENTO DE DEFINIÇÃO AQUI]
```

#### Saída esperada

- Blueprint textual completo
- Wireframe visual no Whimsical
- Aprovação interna da equipe FXL

#### Critério de avanço

✅ Equipe FXL aprova o wireframe internamente. Decisões de UI resolvidas.

---

## Checklist de validação MD ↔ HTML

- [ ] Seções BI Personalizado e Produto claramente separadas
- [ ] Prompts em blocos destacados
- [ ] Critérios de avanço diferenciados (cliente vs interno)
- [ ] Referências aos arquivos de suporte corretas
