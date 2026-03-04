import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function ProcessoProduto() {
  return (
    <div>
      <PageHeader
        badge="POP"
        title="Produto FXL"
        description="Fluxo aplicado quando a FXL define o escopo, controla a priorização e prepara uma entrega reutilizável para múltiplos usuários."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Quando usar</h2>
        <p>
          Produto FXL cobre o que nasce como ativo da empresa. A validação é interna, a interface
          precisa ser autoexplicativa e o sistema deve funcionar para cenários variados, sem depender
          de um único cliente para existir.
        </p>

        <h2>Subtipos mais comuns</h2>
        <table>
          <thead>
            <tr>
              <th>Subtipo</th>
              <th>Aplicação</th>
              <th>Ponto de atenção</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI de Plataforma</td>
              <td>Conectado a um software específico de mercado.</td>
              <td>Validar exportações reais do sistema de origem.</td>
            </tr>
            <tr>
              <td>BI de Segmento</td>
              <td>Resolve um vertical sem depender de uma única ferramenta.</td>
              <td>Padronizar dados de entrada e nomenclatura.</td>
            </tr>
            <tr>
              <td>Sistema</td>
              <td>Vai além do Dashboard e inclui fluxo operacional.</td>
              <td>Definir lógica de negócio desde o MVP.</td>
            </tr>
            <tr>
              <td>SaaS</td>
              <td>Evolução de um produto multi-tenant com cobrança recorrente.</td>
              <td>Isolamento de dados entre tenants desde o início.</td>
            </tr>
          </tbody>
        </table>

        <h2>Ciclo de evolução</h2>
        <ul>
          <li>Definir o MVP e explicitamente registrar o que fica fora dele.</li>
          <li>Resolver cada [DECISÃO DE PRODUTO] antes de avançar ao wireframe.</li>
          <li>Revisar arquitetura e documentação sempre que o produto mudar de patamar.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Atalho mental:</strong> em Produto, a pergunta central não é "o cliente aprovou?",
        mas sim "o sistema está claro, genérico e sustentável para múltiplos contextos?".
      </InfoBlock>

      <InfoBlock type="info" className="mb-6">
        <strong>Referência de execução:</strong> o POP detalhado deste fluxo foi migrado para{' '}
        <code>fxl-third-party-knowledge/docs/process/POP_PRODUTO.md</code>.
        Suba esse arquivo no knowledge do Claude Project do cliente antes de iniciar.
      </InfoBlock>
    </div>
  )
}
