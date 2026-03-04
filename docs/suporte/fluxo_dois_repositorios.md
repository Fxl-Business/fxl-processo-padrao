# Fluxo de Dois Repositórios — Padrão Operacional

## Objetivo

Documentar como o operador trabalha com os dois repositórios FXL simultaneamente,
a partir do diretório pai `fxl/`, garantindo que o Claude Code possa alterar ambos
sem perda de contexto e sem risco de escopo cruzado.

---

## Estrutura local obrigatória

```
fxl/                              ← diretório pai (não é um repositório Git)
├── CLAUDE.md                     ← árbitro de escopo entre os dois repos
├── fxl-processo-padrao/          ← repositório Git: visão superior do processo
└── fxl-third-party-knowledge/    ← repositório Git: execução, clientes, wireframes
```

Cada subpasta é um repositório Git independente com seu próprio remote no GitHub.
O diretório pai `fxl/` não é versionado — existe apenas para organizar o ambiente local
e hospedar o `CLAUDE.md` árbitro.

---

## Como abrir o Claude Code

Sempre abrir o Claude Code a partir da pasta `fxl/` — nunca de dentro de um repo filho.

```bash
cd ~/projetos/fxl
claude   # ou abrir pelo VS Code com "Open Folder" na pasta fxl/
```

Abrindo de `fxl/`, o Claude Code enxerga:
- `fxl/CLAUDE.md` — regras de escopo e sincronização (carregado como contexto pai)
- `fxl/fxl-processo-padrao/CLAUDE.md` — regras operacionais do processo
- `fxl/fxl-third-party-knowledge/CLAUDE.md` — regras de execução e clientes

Os três CLAUDE.md ficam ativos simultaneamente, em hierarquia. O pai define o relacionamento;
os filhos definem as regras de cada repositório.

---

## Fluxo padrão de uma sessão

### Sessão de evolução do processo (fxl-processo-padrao)

1. Abrir o Claude Project "FXL — Processo Padrão"
2. Discutir e gerar o prompt estruturado
3. Abrir Claude Code a partir de `fxl/`
4. Colar o prompt — ele altera apenas `fxl-processo-padrao/`
5. Verificar se a tabela de sincronização do `fxl/CLAUDE.md` indica revisão em cascata
6. Commit: `process: [o que mudou]` dentro de `fxl-processo-padrao/`
7. Push

### Sessão de cliente (fxl-third-party-knowledge)

1. Abrir o Claude Project do cliente
2. Discutir e gerar o prompt estruturado
3. Abrir Claude Code a partir de `fxl/`
4. Colar o prompt — ele altera apenas `fxl-third-party-knowledge/clients/[client-slug]/`
5. Commit: `[client-slug]: [o que mudou]` dentro de `fxl-third-party-knowledge/`
6. Push

### Sessão que toca os dois repos

Ocorre quando a tabela de sincronização do `fxl/CLAUDE.md` indica revisão cruzada.

1. Executar as alterações de um repo por vez (nunca simultâneo)
2. Fazer commit do primeiro repo antes de iniciar o segundo
3. Dois commits separados, mensagens distintas

---

## Por que não usar git submodules

Git submodules adicionam complexidade de setup e sincronização para todos os operadores
futuros. A convenção de pasta local `fxl/` resolve o mesmo problema sem overhead:
o Claude Code lê os CLAUDE.md em hierarquia de diretório nativamente, sem configuração.

---

## Regra de sincronização (resumo)

Ver tabela completa em `fxl/CLAUDE.md`.

Regra geral: se a mudança não está na tabela de sincronização, alterar APENAS o repo
especificado no prompt. Nunca inferir necessidade de atualização cruzada.

---

## Critério de conclusão

O fluxo está correto quando:
- Claude Code foi aberto a partir de `fxl/`
- O prompt especifica explicitamente qual repo e quais arquivos alterar
- O commit foi feito no repo correto com a mensagem no padrão
- Nenhuma alteração cruzada ocorreu sem instrução explícita
