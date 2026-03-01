# Fase 3 — Desenvolvimento

## Objetivo

Transformar o wireframe aprovado em sistema funcional. O desenvolvimento segue o Blueprint — sem desvios de escopo.

---

## Por tipo de projeto

### BI Personalizado

**Fluxo:**
1. Claude gera o Prompt de Desenvolvimento a partir do Blueprint
2. Operador cola o prompt no Lovable
3. Lovable gera a aplicação
4. Operador ajusta e refina
5. Sistema funcional → Fase 4

#### Entradas

- Blueprint aprovado (Fase 2)
- Wireframe visual (referência)
- Design system FXL (`build/design/design_system.md`)
- Dados reais ou amostra do cliente

#### Prompt — Gerar Prompt de Desenvolvimento

```
O wireframe foi aprovado. Com base no Blueprint e no Documento de Briefing, gere o Prompt de Desenvolvimento completo para o Lovable.

Incluir:
- Contexto do projeto
- Estrutura de navegação
- Especificação de cada tela (componentes, dados, interações)
- Regras de UI do design system FXL
- Tela de Inputs (upload, validação, feedback)
- Regras de tratamento de dados

[COLE O BLUEPRINT AQUI]
```

#### Regras de desenvolvimento

- Seguir design system FXL
- Skeleton loading obrigatório em todas as telas
- Filtro de período com mês atual como padrão
- Responsivo: desktop prioritário, mobile funcional
- Sem dependências externas desnecessárias

#### Saída esperada

- Prompt de Desenvolvimento completo
- Aplicação funcional no Lovable
- Dados de teste carregados

#### Critério de avanço

✅ Sistema funcional com todas as telas do Blueprint implementadas. Pronto para auditoria.

---

### Produto FXL

**Fluxo:** Idêntico ao BI Personalizado.

#### Considerações adicionais para Produto

- Testar com dados de múltiplos perfis fictícios
- Garantir que não há dados hardcoded de um contexto específico
- UI autoexplicativa (usuário não terá onboarding personalizado)
- Se SaaS: considerar isolamento de dados entre tenants desde o início

#### Critério de avanço

✅ Sistema funcional. Testado com múltiplos perfis de dados. Pronto para auditoria.

---

## Checklist de validação MD ↔ HTML

- [ ] Regras de desenvolvimento listadas
- [ ] Prompt de desenvolvimento completo
- [ ] Considerações específicas para Produto destacadas
