import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function DeployVercel() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Deploy — Vercel"
        description="Checklist para configurar previews, produção, variáveis de ambiente e domínios sem quebrar autenticação ou expor ambiente errado."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Fluxo recomendado</h2>
        <ol>
          <li>Conectar o repositório à Vercel com preset Vite.</li>
          <li>Configurar variáveis por ambiente antes do primeiro deploy válido.</li>
          <li>Validar preview build e só depois promover para produção.</li>
        </ol>

        <h2>Ambientes e prefixos</h2>
        <p>
          Em Vite, variáveis públicas precisam começar com <code>VITE_</code>. Um nome errado gera
          erro silencioso: o build passa, mas a aplicação quebra em runtime.
        </p>

        <h2>Domínios e autenticação</h2>
        <ul>
          <li>Domínio de produção precisa existir também nas Redirect URLs do Supabase Auth.</li>
          <li>Preview é útil para validar layout, login e dados sem tocar produção.</li>
          <li>Produção só deve receber dados reais depois da checagem final de segurança.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Checklist rápido:</strong> build local sem erros, headers configurados, variáveis
        separadas por ambiente e layout revisado em mobile antes de publicar.
      </InfoBlock>
    </div>
  )
}
