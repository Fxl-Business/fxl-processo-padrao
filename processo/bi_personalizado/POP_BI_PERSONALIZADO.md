# POP — BI Personalizado

## Quando usar este POP

- É para um cliente específico com dados únicos
- Não será reutilizado diretamente para outros clientes
- Parte de uma reunião de diagnóstico com o cliente

*Exemplos: BI Tatu do Bem, BI Mercadão, BI [qualquer empresa com operação própria]*

> ⚠️ Se for um produto FXL com vida própria, usar **POP_PRODUTO**.

| Módulo | Descrição |
|---|---|
| Financeiro | Normalmente resolvido com software White Label (ex: Conta Azul). FXL raramente constrói dashboard financeiro customizado. |
| Comercial | Dashboard exclusivo. KPIs de vendas, funil, ticket médio, performance por vendedor, produto e região. |
| Operacional | Dashboard exclusivo. Alta variação entre clientes — requer diagnóstico mais profundo na Fase 1. |

---

## Fase 1 — Diagnóstico Estratégico

O diagnóstico parte de uma reunião presencial ou remota com o cliente. O operador preenche o Briefing com dados do negócio, sistemas utilizados e KPIs declarados. A diferença central aqui é que todo o contexto vem do cliente — não há conhecimento prévio da FXL sobre aquele negócio específico.

→ Detalhamento completo: processo/fases/fase1_diagnostico.md

**Critério de Avanço:** Operador valida o Documento de Briefing. Nenhuma fase subsequente começa sem briefing validado.

---

## Fase 2 — Wireframe Estratégico

O Blueprint é gerado a partir do briefing pelo Claude Project "FXL — Wireframe Builder". O Claude Code gera o wireframe em HTML+CSS+JS, publicado na plataforma de wireframes para revisão. O diferencial do BI Personalizado é que o cliente precisa dar **aprovação formal escrita** antes do desenvolvimento iniciar — sem essa aprovação, a Fase 3 não começa.

→ Detalhamento completo: processo/fases/fase2_wireframe.md

**Critério de Avanço:** Cliente visualiza o wireframe na plataforma e dá aprovação formal escrita.

---

## Fase 3 — Desenvolvimento

O desenvolvimento segue o Blueprint aprovado pelo cliente. O caminho padrão é Claude Code — ver `processo/fases/fase3_desenvolvimento.md` para o fluxo completo com referências à pasta `build/arquitetura/`.

→ Detalhamento completo: processo/fases/fase3_desenvolvimento.md

**Critério de Avanço:** Sistema funcional com todas as telas do Blueprint implementadas. Checklist de segurança aprovado. Pronto para auditoria.

---

## Fase 4 — Auditoria e Validação

A auditoria usa o checklist base + itens específicos dos KPIs do cliente e do segmento. O checklist personalizado é gerado pelo Claude a partir do briefing do projeto.

→ Detalhamento completo: processo/fases/fase4_auditoria.md

**Critério de Avanço:** Zero itens bloqueantes. Melhorias menores podem ser registradas, mas não bloqueiam a entrega.

---

## Fase 5 — Entrega + Validação Assistida

O sistema é entregue com status **"Em fase de checkagem assistida"**. O cliente tem **15 dias** para validar, testar e solicitar ajustes dentro do escopo contratado. As cláusulas contratuais obrigatórias devem ser comunicadas por escrito no momento da entrega.

→ Detalhamento completo: processo/fases/fase5_entrega.md

**Critério de Avanço:** Cliente valida formalmente OU período de 15 dias encerrado sem pendências bloqueantes.

---

## Fase 6 — Tutorial e Mentoria

O tutorial é personalizado com base no briefing e na maturidade analítica declarada pelo cliente. Inclui vídeo tutorial de 10–15 minutos e documento de orientação escrita. A linguagem e o ritmo são adaptados ao perfil do cliente.

→ Detalhamento completo: processo/fases/fase6_tutorial.md

**Critério de Avanço:** Vídeo tutorial gravado e enviado ao cliente. Documento de orientação entregue.
