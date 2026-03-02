import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

export default function UiSkills() {
  return (
    <div>
      <PageHeader
        badge="Suporte"
        title="UI Skills"
        description="Orientação para usar skills e atalhos de execução quando a tarefa é repetitiva, visual ou depende de padrões que valem a pena reaproveitar."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Quando vale usar uma skill</h2>
        <ul>
          <li>Quando a atividade se repete com baixa variação entre projetos.</li>
          <li>Quando existe risco de esquecer passos operacionais importantes.</li>
          <li>Quando o time quer padronizar a forma de instalar, auditar ou expandir um recurso.</li>
        </ul>

        <h2>O que observar antes de usar</h2>
        <ul>
          <li>Se a skill realmente reduz trabalho manual, não só adiciona uma camada extra.</li>
          <li>Se a instrução ainda bate com a stack atual do repositório.</li>
          <li>Se o resultado produzido continua compatível com as regras do CLAUDE.md.</li>
        </ul>
      </div>

      <InfoBlock type="info" className="mb-6">
        <strong>Regra prática:</strong> skill boa automatiza um padrão estável. Se a tarefa ainda
        está mudando toda semana, documente primeiro; automatize depois.
      </InfoBlock>
    </div>
  )
}
