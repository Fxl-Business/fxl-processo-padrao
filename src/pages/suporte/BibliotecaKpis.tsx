import PageHeader from '@/components/docs/PageHeader'

export default function BibliotecaKpis() {
  return (
    <div>
      <PageHeader
        badge="Suporte"
        title="Biblioteca de KPIs"
        description="Referência de KPIs por módulo para acelerar Briefings, evitar lacunas óbvias e padronizar nomenclatura nas discussões com clientes e na construção do Blueprint."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Como usar esta biblioteca</h2>
        <p>
          A biblioteca não define o escopo sozinha. Ela serve como repertório para sugerir KPIs
          relevantes, comparar pedidos do cliente com boas práticas e detectar quando um KPI pedido
          não tem dado suficiente para existir.
        </p>

        <h2>Referência rápida por módulo</h2>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>KPIs frequentes</th>
              <th>Pergunta que ajudam a responder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comercial</td>
              <td>Faturamento, ticket médio, conversão, vendas por vendedor.</td>
              <td>Onde estamos vendendo bem e onde o funil está vazando?</td>
            </tr>
            <tr>
              <td>Operacional</td>
              <td>Lead time, volume por etapa, SLA, produtividade por equipe.</td>
              <td>Onde a operação atrasa e qual etapa concentra gargalo?</td>
            </tr>
            <tr>
              <td>Financeiro</td>
              <td>Receita, despesa, margem, inadimplência, fluxo de caixa.</td>
              <td>O caixa sustenta a operação e qual linha corrói margem?</td>
            </tr>
            <tr>
              <td>Inputs</td>
              <td>Volume importado, taxa de erro, tempo até atualização.</td>
              <td>O dado está entrando com consistência suficiente?</td>
            </tr>
          </tbody>
        </table>

        <h2>Erros comuns</h2>
        <ul>
          <li>Tratar “indicador bonito” como KPI sem impacto de decisão.</li>
          <li>Prometer KPI antes de validar a coluna que o sustenta.</li>
          <li>Duplicar o mesmo KPI com nomes diferentes em módulos distintos.</li>
        </ul>
      </div>
    </div>
  )
}
