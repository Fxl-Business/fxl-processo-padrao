import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_DIAGNOSTICO = `Olá. Vamos iniciar a Fase 1 — Diagnóstico Estratégico.

Leia antes de começar:
- docs/processo/fases/fase1_diagnostico.md

Cliente: [NOME DO CLIENTE]
Segmento: [SEGMENTO]
Sistemas utilizados: [SISTEMAS]

Inicie o preenchimento do Briefing com as perguntas padrão.`

export default function Fase1() {
  return (
    <div>
      <PageHeader
        badge="Fase 1"
        title="Diagnóstico Estratégico"
        description="Reunião com o cliente para coleta de contexto, sistemas e KPIs. Gera o Briefing que orienta todo o projeto."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O que acontece nesta fase</h2>
        <p>
          O Diagnóstico é o ponto de partida de todo BI Personalizado. Em Produto FXL, a mesma fase
          vira uma definição interna de escopo. Em ambos os casos, a lógica é idêntica: nenhuma
          decisão de wireframe deve ser tomada antes de o contexto estar sólido.
        </p>

        <h2>Entradas necessárias</h2>
        <ul>
          <li>Reunião agendada com o decisor ou uma sessão interna de definição.</li>
          <li>Template de Briefing ou Documento de Definição pronto para ser preenchido.</li>
          <li>Exemplos de relatórios, exportações ou estrutura de Inputs disponível para análise.</li>
        </ul>

        <h2>Saída esperada</h2>
        <ul>
          <li>Briefing validado com sistemas, dados e regras de negócio mapeados.</li>
          <li>KPIs prioritários organizados por módulo, já com gaps identificados.</li>
          <li>Lista objetiva de pendências que impedem o avanço para o Blueprint.</li>
        </ul>

        <h2>Como conduzir bem</h2>
        <ul>
          <li>Pergunte sobre o processo atual antes de discutir a solução desejada.</li>
          <li>Confirme colunas reais de dados para cada KPI crítico.</li>
          <li>Separe hipóteses, desejos e dados já confirmados.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Critério de Avanço:</strong> o Documento de Briefing está validado, os campos
        obrigatórios foram preenchidos e não existe decisão bloqueante em aberto.
      </InfoBlock>

      <div className="prose">
        <h2>Como iniciar esta fase no Claude</h2>
        <p>
          Abra o Project do cliente específico, não o repositório de processo. O prompt abaixo serve
          como ponto de partida para a entrevista e para o preenchimento estruturado.
        </p>
      </div>

      <PromptBlock
        label="Use este prompt ao iniciar o Diagnóstico no Project do cliente"
        prompt={PROMPT_DIAGNOSTICO}
      />

      <div className="prose">
        <h2>Erros comuns</h2>
        <ul>
          <li>
            <strong>Avançar sem validar o Briefing</strong> — um Blueprint bonito não corrige dados
            mal mapeados.
          </li>
          <li>
            <strong>Registrar só o desejo do cliente</strong> — o processo precisa refletir a
            operação real de hoje.
          </li>
          <li>
            <strong>Assumir integração sem confirmar acesso</strong> — exportação, API e permissão
            precisam ser verificadas cedo.
          </li>
        </ul>
      </div>
    </div>
  )
}
