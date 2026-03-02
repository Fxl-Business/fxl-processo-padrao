# Premissas Gerais — Projetos FXL

## Stack Padrão FXL

### Default: React + Vite

| Camada | Tecnologia | Versão mínima |
|---|---|---|
| UI Framework | React | 18+ |
| Linguagem | TypeScript | 5+ (strict mode obrigatório) |
| Estilos | Tailwind CSS | 3+ |
| Componentes | shadcn/ui | última estável |
| Banco de dados | Supabase (PostgreSQL) | — |
| Auth | Supabase Auth | — |
| Deploy | Vercel | — |
| Build tool | Vite | 5+ |

### Exceção: Next.js

Usar Next.js **apenas quando**:
- Projeto precisa de SEO (landing page, blog, marketing)
- SSR é requisito do negócio
- Precisa de API routes complexas no mesmo repositório

Se Next.js for escolhido, documentar justificativa no README do projeto. **Nunca usar "por padrão" ou "porque é mais moderno".**

---

## Estrutura de Pastas Padrão (React + Vite)

```
projeto-fxl/
├── CLAUDE.md
├── README.md
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json                ← strict: true
├── vite.config.ts
├── index.html
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── ui/                  ← shadcn/ui
│   │   ├── layout/              ← Header, Sidebar, Footer
│   │   └── shared/
│   ├── pages/
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── utils.ts
│   ├── hooks/
│   ├── types/
│   └── styles/
│       └── globals.css
├── supabase/
│   └── migrations/
└── docs/
    ├── CHANGELOG.md
    ├── ARCHITECTURE.md
    └── SPRINTS.md
```

---

## Convenções de Código

### Naming
- Componentes: `PascalCase` (ex: `UserCard.tsx`)
- Hooks: `camelCase` com prefixo `use` (ex: `useAuth.ts`)
- Constantes: `UPPER_SNAKE_CASE` (ex: `MAX_UPLOAD_SIZE`)
- Arquivos de páginas: `PascalCase` (ex: `Dashboard.tsx`)

### Imports
- Path aliases obrigatórios: `@/components/...`, `@/hooks/...`, `@/types/...`
- Ordem: React/libs externas → componentes → hooks → types → utils
- Sem imports relativos longos (ex: `../../../components/Button`)

### TypeScript
- `strict: true` obrigatório no `tsconfig.json`
- Nunca usar `any` — usar `unknown` ou tipar corretamente
- Preferir `type` a `interface` para tipos de dados
- Todo retorno de API deve ser tipado explicitamente

### Componentes
- Functional components only — sem class components
- Props sempre tipadas com `type Props = {...}`
- Componente com mais de 150 linhas deve ser dividido
- Skeleton loading obrigatório em componentes que carregam dados

---

## Dependências

### Permitidas sem justificar
- `shadcn/ui` — componentes de UI
- `lucide-react` — ícones
- `recharts` — gráficos
- `date-fns` — manipulação de datas
- `zod` — validação de schema
- `react-router-dom` — roteamento (React + Vite)
- `@tanstack/react-query` — gerenciamento de estado assíncrono

### Proibidas
- `jQuery` — não há caso de uso em React
- Libs sem manutenção ativa (último commit >1 ano)
- Libs que duplicam a stack (ex: `axios` — usar `fetch` nativo ou cliente Supabase)
- CSS-in-JS — usar Tailwind

### Precisam justificativa no README
- Bundle individual >50KB
- State management além do React Query (ex: Zustand, Redux)
- Libs de formulário (ex: React Hook Form — avaliar se Zod basta)
