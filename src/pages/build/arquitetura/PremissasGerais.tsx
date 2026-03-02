import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function PremissasGerais() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Premissas Gerais"
        description="Resumo operacional da stack padrão FXL, da estrutura de pastas e das convenções que evitam divergência entre projetos."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Stack padrão</h2>
        <table>
          <thead>
            <tr>
              <th>Camada</th>
              <th>Padrão FXL</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>React + Vite + TypeScript</td>
              <td>Strict mode é obrigatório.</td>
            </tr>
            <tr>
              <td>UI</td>
              <td>Tailwind + shadcn/ui</td>
              <td>Sem CSS-in-JS por padrão.</td>
            </tr>
            <tr>
              <td>Dados</td>
              <td>Supabase</td>
              <td>Inclui Auth e políticas RLS.</td>
            </tr>
            <tr>
              <td>Deploy</td>
              <td>Vercel</td>
              <td>Preview e produção no mesmo fluxo.</td>
            </tr>
          </tbody>
        </table>

        <h2>Estrutura de pastas esperada</h2>
        <p>
          A FXL quer projetos previsíveis. Isso significa layout consistente de <code>src/</code>,
          docs internas para decisões de sprint e aliases como <code>@/components</code> para evitar
          caminhos frágeis.
        </p>

        <h2>Convenções que merecem atenção</h2>
        <ul>
          <li>Componentes em PascalCase; hooks em camelCase com prefixo use.</li>
          <li>Sem imports relativos longos quando um alias resolve melhor.</li>
          <li>Componente grande demais deve ser dividido antes de virar débito estrutural.</li>
          <li>Skeleton loading é parte do padrão, não refinamento opcional.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Exceção real:</strong> Next.js entra apenas quando SEO, SSR ou API routes do mesmo
        repositório são requisito explícito. Não por preferência estética.
      </InfoBlock>
    </div>
  )
}
