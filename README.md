# FXL — Processo Padrão

Documentação viva do processo FXL, construída com Vite + React e hospedada na Vercel.

## Visão de Longo Prazo

Ter um processo capaz de entender qualquer negócio e, a partir de perguntas e respostas
estruturadas, gerar qualquer produto digital de forma progressivamente automatizada.

---

## Estrutura

| Pasta | Para quem | O que contém |
|---|---|---|
| `/docs/` | Claude | Arquivos `.md` operacionais — fonte da verdade do processo |
| `/src/` | Humanos | Aplicação React — versão visual e navegável |
| `/pacotes/` | Claude Projects | Contexto compactado para Projects específicos |

### Regra fundamental

Os arquivos em `/docs/` e as páginas em `/src/pages/` **não são cópias um do outro**.
São peças complementares com vozes diferentes:

- **`/docs/`** — linguagem operacional para o modelo ("Será utilizado o prompt X")
- **`/src/pages/`** — linguagem orientada ao usuário ("Use este prompt para iniciar")

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Deploy

Conectar o repositório na Vercel com framework preset **Vite**. Deploy automático via push na `main`.

---

## Como este repositório é mantido

```
1. Você percebe uma melhoria ou evolução necessária
2. Abre o Claude Project "FXL — Processo Padrão" e discute
3. Claude gera o prompt estruturado com todas as mudanças
4. Você cola o prompt no Claude Code (dentro desta pasta)
5. Claude Code executa — modifica /docs/ e /src/pages/ dos arquivos afetados
6. Você revisa e faz o commit com mensagem descritiva
7. Vercel publica automaticamente
```

---

*FXL — Documento de Uso Interno*
