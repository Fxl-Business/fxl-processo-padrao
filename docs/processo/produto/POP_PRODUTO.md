# POP — Produto FXL

## Quando usar este POP

- É um produto com vida própria, não atrelado a um cliente específico
- Pode atender múltiplos usuários ou empresas
- A definição do escopo parte da FXL

| Subtipo | Descrição | Exemplos |
|---|---|---|
| BI de Plataforma | Atrelado aos dados de um software específico de mercado | BI Conta Azul, BI Mobills, BI Otimiza |
| BI de Segmento | Agnóstico de software, construído para um vertical de mercado | BI de Locação (planilha genérica) |
| Sistema | Produto com lógica própria além de visualização | Locação de Imóveis |
| SaaS | Estágio de maturidade de qualquer produto acima | Qualquer produto multi-tenant com assinatura |

---

## Fase 1 — Definição do Produto

A definição parte do conhecimento interno da FXL — não há reunião com cliente externo. A equipe mapeia o produto, público-alvo, fonte de dados e módulos do MVP. Todas as decisões de produto em aberto devem ser sinalizadas como [DECISÃO DE PRODUTO] e resolvidas antes de avançar.

→ Detalhamento completo: docs/processo/fases/fase1_diagnostico.md

**Critério de Avanço:** Todas as [DECISÕES DE PRODUTO] resolvidas. Documento de Definição validado internamente.

---

## Fase 2 — Wireframe Estratégico

O fluxo é idêntico ao BI Personalizado, com uma diferença central: a aprovação é **interna**. A equipe FXL decide quando o wireframe está aprovado para avançar — não depende de cliente externo.

→ Detalhamento completo: docs/processo/fases/fase2_wireframe.md

**Critério de Avanço:** Aprovação interna da equipe FXL.

---

## Fase 3 — Desenvolvimento

O desenvolvimento segue o mesmo fluxo do BI Personalizado. Atenção especial a: testar com dados de múltiplos perfis fictícios, garantir que não há dados hardcoded e construir UI autoexplicativa (sem onboarding personalizado). Para SaaS, considerar isolamento de dados entre tenants desde o início.

→ Detalhamento completo: docs/processo/fases/fase3_desenvolvimento.md

**Critério de Avanço:** Sistema funcional. Testado com múltiplos perfis de dados. Pronto para auditoria.

---

## Fase 4 — Auditoria e Validação

O checklist base é o mesmo. Itens adicionais específicos de Produto: verificar que o sistema funciona com dados de múltiplos perfis sem cruzamento, que não há dados hardcoded e que a UI é autoexplicativa. Para SaaS: verificar isolamento de dados entre tenants.

→ Detalhamento completo: docs/processo/fases/fase4_auditoria.md

**Critério de Avanço:** Zero itens bloqueantes. Validação interna pela equipe FXL.

---

## Fase 5 — Lançamento e Disponibilização

Não há período de checkagem com cliente — o produto é disponibilizado diretamente após auditoria aprovada. O foco é definir processo de onboarding, criar documentação e registrar a versão de lançamento.

→ Detalhamento completo: docs/processo/fases/fase5_entrega.md

**Critério de Avanço:** Produto disponível para uso. Documentação publicada. Versão registrada.

---

## Fase 6 — Tutorial e Documentação

O tutorial é a documentação oficial do produto — genérica para qualquer usuário, não personalizada por cliente. Deve ser autoexplicativa e acessível permanentemente. Pode incluir vídeo de apresentação, mas o foco é a documentação escrita.

→ Detalhamento completo: docs/processo/fases/fase6_tutorial.md

**Critério de Avanço:** Documentação publicada e acessível. Link disponível para usuários.

---

## Ciclo de Evolução do Produto

- Registrar mudanças no histórico do Documento de Definição
- Verificar impacto em outros arquivos do repositório
- Se escalar para SaaS: documentar arquitetura em `docs/build/arquitetura/`
