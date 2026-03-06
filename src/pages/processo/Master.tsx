import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_MASTER = `Olá. Vamos avaliar uma mudança no processo FXL.

Leia antes de sugerir qualquer alteração:
- docs/processo/master/POP_MASTER.md
- docs/processo/fases/ (todas as fases resumidas)

Se a mudança afetar execução detalhada, consulte também em fxl-vault:
- docs/process/POP_BI_PERSONALIZADO.md
- docs/process/POP_PRODUTO.md

Explique qual tipo de projeto é afetado, quais fases sofrem impacto e quais pares MD + rota precisam evoluir juntos.`

export default function ProcessoMaster() {
  return (
    <div>
      <PageHeader
        badge="Processo"
        title="Visão Geral do Processo FXL"
        description="Documento de roteamento. Ele decide qual POP entra em cena, como as fases se encadeiam e como melhorias viram padrão."
        version="2.0"
        date="2026"
      />

      <div className="prose">
        <h2>Para que serve esta visão geral</h2>
        <p>
          O Master existe para evitar decisões improvisadas. Antes de discutir uma fase isolada,
          valide aqui se o projeto é um BI Personalizado ou um Produto FXL e qual é a consequência
          dessa escolha sobre aprovação, auditoria e tutorial.
        </p>

        <h2>Tipos de projeto</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Quando usar</th>
              <th>Diferença central</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI Personalizado</td>
              <td>Cliente específico, dados próprios, contexto único.</td>
              <td>O Briefing nasce do cliente e o wireframe precisa de aprovação formal externa.</td>
            </tr>
            <tr>
              <td>Produto FXL</td>
              <td>Ativo da FXL com uso repetível e direção de produto interna.</td>
              <td>Escopo, prioridade e aprovação são definidos pela equipe FXL.</td>
            </tr>
          </tbody>
        </table>

        <h2>Regra de ouro</h2>
        <p>
          Não trate uma melhoria local como se fosse isolada. Mudanças de linguagem, nomenclatura,
          stack ou critério de avanço quase sempre afetam mais de um documento e mais de uma rota.
        </p>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Não misture vozes:</strong> o MD em <code>docs/processo/master/POP_MASTER.md</code>
        precisa ser operacional. Esta rota existe para explicar o raciocínio, os impactos e o uso
        prático no dia a dia.
      </InfoBlock>

      <div className="prose">
        <h2>Como evoluir o processo sem gerar retrabalho</h2>
        <ul>
          <li>Defina primeiro a premissa que mudou: estratégia, nomenclatura, etapa ou stack.</li>
          <li>Atualize o documento operacional em /docs com a regra objetiva.</li>
          <li>Atualize a rota humana com contexto, exemplos e instruções de uso.</li>
          <li>Revise fases, suporte e pacotes se a mudança alterar o fluxo de execução.</li>
        </ul>

        <h2>Quando consultar este documento</h2>
        <ul>
          <li>Ao criar um novo POP ou ajustar o posicionamento entre BI e Produto.</li>
          <li>Quando uma fase parece correta isoladamente, mas conflita com outra.</li>
          <li>Ao introduzir uma regra que afeta vários documentos em cascata.</li>
        </ul>
      </div>

      <PromptBlock
        label="Use este prompt ao discutir mudanças estruturais do processo"
        prompt={PROMPT_MASTER}
      />
    </div>
  )
}
