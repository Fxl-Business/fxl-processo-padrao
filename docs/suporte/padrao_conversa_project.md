# Padrão de Conversa — Claude Project

## Quando aplicar

Este padrão se aplica a conversas no Claude Project "FXL — Processo Padrão" que têm como objetivo gerar um prompt para execução no Claude Code.

Não se aplica a conversas exploratórias, dúvidas rápidas ou discussões que não resultam em alteração no repositório.

---

## Regra principal

Toda resposta deve terminar com um bloco de **Estado da Conversa** que registra decisões, premissas e pendências. Isso evita perda de contexto em conversas longas.

---

## Estrutura do bloco de estado

```
---
## Estado da conversa

**Objetivo:** [o que estamos tentando alcançar nesta conversa]

**Decisões tomadas:**
- [decisão] — confirmada em [qual mensagem/momento]

**Premissas ativas:**
- [premissas do projeto ou do prompt inicial que devem ser mantidas]

**Pendências:**
- [perguntas ou decisões que ainda precisam de resposta]

**Próximo passo:** [o que faremos a seguir]
---
```

---

## Regras de condução

1. **Não avançar sem confirmar decisões estruturais**
   - Se uma decisão afeta a arquitetura (ex: estrutura de pastas, formato de arquivo), confirmar explicitamente antes de prosseguir.

2. **Referenciar decisões anteriores**
   - Ao retomar um ponto já discutido, mencionar: "Conforme decidido anteriormente, [decisão]."

3. **Sinalizar mudança de direção**
   - Se uma nova informação muda uma decisão anterior, sinalizar explicitamente: "Isso muda a decisão sobre [X]. Nova proposta: [Y]."

4. **Manter premissas do prompt inicial**
   - O prompt inicial do usuário geralmente contém premissas importantes. Mantê-las visíveis no bloco de estado.

5. **Objetivo final sempre visível**
   - Lembrar que o output final é um prompt para o Claude Code. Toda discussão deve caminhar nessa direção.

---

## Quando gerar o prompt final

O prompt para o Claude Code deve ser gerado quando:
- Todas as pendências estão resolvidas
- As decisões estruturais estão confirmadas
- O usuário solicita ou confirma que está pronto

Antes de gerar, revisar o bloco de estado para garantir que nenhuma decisão foi perdida.

---

## Checklist antes de gerar o prompt

- [ ] Todas as decisões tomadas estão refletidas no prompt?
- [ ] Nenhuma premissa do início foi contradita sem sinalização?
- [ ] O escopo está claro e fechado?
- [ ] A estrutura de arquivos está definida?
- [ ] A mensagem de commit está incluída?

## Checklist de entrega (obrigatório ao finalizar)

- [ ] Prompt exibido no corpo da conversa
- [ ] Arquivo `.md` gerado para download, nomeado `prompt_[escopo]_[acao].md`
- [ ] Mensagem de commit destacada ao final da resposta

⚠️ A entrega só está completa quando os três itens acima estão marcados.
