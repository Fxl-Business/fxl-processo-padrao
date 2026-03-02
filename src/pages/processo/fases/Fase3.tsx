import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_DESENVOLVIMENTO = `Olá. Vamos executar a Fase 3 — Desenvolvimento.

Leia antes de começar:
- docs/processo/fases/fase3_desenvolvimento.md
- docs/build/arquitetura/premissas_gerais.md
- docs/build/arquitetura/master_prompt.md

Blueprint aprovado: [RESUMO]
Sprint atual: [NOME]

Monte o Master Prompt da sprint com escopo fechado, critérios de aceite e referências obrigatórias.`

export default function Fase3() {
  return (
    <div>
      <PageHeader
        badge="Fase 3"
        title="Desenvolvimento"
        description="Transforma o Blueprint aprovado em sistema funcional, com sprints fechadas e revisão técnica contínua."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>Caminho padrão</h2>
        <p>
          O caminho oficial é Claude Code. Lovable ainda existe apenas como exceção para projetos já
          iniciados lá. Para novas entregas, o padrão é repositório próprio, `CLAUDE.md` do projeto,
          sprints planejadas e Master Prompt por etapa.
        </p>

        <h2>Referências obrigatórias</h2>
        <ul>
          <li>Premissas gerais para stack, estrutura e convenções.</li>
          <li>Supabase para auth, RLS e migrations.</li>
          <li>Deploy Vercel, Segurança e Testes antes de cada conclusão relevante.</li>
          <li>Template de Master Prompt e template de CLAUDE.md do projeto.</li>
        </ul>

        <h2>O que não pode sair do trilho</h2>
        <ul>
          <li>Escopo da sprint deve ser fechado e verificável.</li>
          <li>TypeScript segue strict mode, sem `any`.</li>
          <li>Cada sprint termina com teste, checklist de segurança e documentação.</li>
        </ul>
      </div>

      <InfoBlock type="success" className="mb-6">
        <strong>Critério de Avanço:</strong> todas as telas do Blueprint existem, o checklist de
        segurança foi executado e o sistema já está pronto para Auditoria.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao abrir uma sprint de desenvolvimento"
        prompt={PROMPT_DESENVOLVIMENTO}
      />
    </div>
  )
}
