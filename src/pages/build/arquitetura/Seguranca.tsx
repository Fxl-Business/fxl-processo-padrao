import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function Seguranca() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Segurança"
        description="Checklist anti AI-slop para reduzir os erros típicos de código gerado rápido: segredo exposto, RLS ausente, input sem validação e deploy permissivo."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Por que este documento importa</h2>
        <p>
          Ferramentas de geração aceleram entrega, mas também escondem riscos triviais. Este guia
          existe para evitar que um projeto pareça funcional e ainda assim esteja inseguro.
        </p>

        <h2>Regras absolutas</h2>
        <ul>
          <li>Segredos não entram no código-fonte.</li>
          <li>RLS em toda tabela, sempre testado com isolamento real.</li>
          <li>Input validado no servidor quando o risco ultrapassa a UI.</li>
          <li>CORS e headers com configuração específica, não permissiva.</li>
        </ul>

        <h2>Erros clássicos de vibe coding</h2>
        <ul>
          <li>Usar `any` para passar build e perder rastreabilidade de bugs.</li>
          <li>Deixar logs com dados sensíveis para “facilitar debug”.</li>
          <li>Abrir CORS com `*` e postergar a correção para depois.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Teste mínimo obrigatório:</strong> valide que um usuário A não enxerga os dados do
        usuário B antes de considerar qualquer sprint concluída.
      </InfoBlock>
    </div>
  )
}
