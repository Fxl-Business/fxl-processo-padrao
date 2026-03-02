import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function Testes() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Testes"
        description="O que validar, quando validar e o que caracteriza sprint realmente concluída no padrão FXL."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Princípio central</h2>
        <p>
          Teste não é cerimônia final. Cada feature entrega comportamento, então cada feature pede
          verificação. Sprint sem teste é sprint aberta, mesmo que a interface já esteja bonita.
        </p>

        <h2>Quatro frentes mínimas</h2>
        <ul>
          <li>Funcionalidade: o fluxo principal e os erros previstos funcionam.</li>
          <li>Integração: a jornada completa fecha sem quebra entre telas e dados.</li>
          <li>Segurança: auth, RLS e validação resistem ao cenário básico de abuso.</li>
          <li>Responsividade: o layout continua útil em 375px e em desktop largo.</li>
        </ul>

        <h2>Antes de marcar uma sprint como pronta</h2>
        <ul>
          <li>Todos os critérios de aceite precisam estar cobertos.</li>
          <li>Nenhum teste obrigatório pode estar falhando.</li>
          <li>Itens não testados precisam ser explicitamente declarados.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Saída esperada:</strong> ao fechar uma sprint, o report deve separar claramente o
        que passou, o que falhou e o que ainda não foi testado.
      </InfoBlock>
    </div>
  )
}
