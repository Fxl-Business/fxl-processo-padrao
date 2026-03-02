import { Link } from 'react-router-dom'
import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'

const docs = [
  {
    title: 'Premissas Gerais',
    href: '/build/arquitetura/premissas-gerais',
    when: 'Sempre, antes de abrir o primeiro sprint.',
  },
  {
    title: 'Supabase',
    href: '/build/arquitetura/supabase',
    when: 'Ao configurar banco, autenticação, RLS ou migrations.',
  },
  {
    title: 'Deploy Vercel',
    href: '/build/arquitetura/deploy-vercel',
    when: 'Quando o projeto já precisa de preview ou produção.',
  },
  {
    title: 'Segurança',
    href: '/build/arquitetura/seguranca',
    when: 'Antes de concluir sprint e antes de deploy.',
  },
  {
    title: 'Master Prompt',
    href: '/build/arquitetura/master-prompt',
    when: 'Ao transformar escopo em briefing executável para Claude Code.',
  },
  {
    title: 'Testes',
    href: '/build/arquitetura/testes',
    when: 'Durante o desenvolvimento e na validação de cada sprint.',
  },
  {
    title: 'CLAUDE.md Template',
    href: '/build/arquitetura/claude-md-template',
    when: 'Ao criar um novo repositório de projeto.',
  },
]

export default function BuildArquiteturaIndex() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Arquitetura — Índice"
        description="Ponto de entrada da base técnica FXL. Use esta seção como checklist de leitura obrigatória para qualquer projeto que entra em Fase 3."
        version="1.0"
        date="2026"
      />

      <InfoBlock type="info" className="mb-6">
        <strong>Ordem recomendada:</strong> leia premissas, configure ambiente, só então escreva o
        Master Prompt da sprint. Pular essa sequência costuma gerar retrabalho estrutural.
      </InfoBlock>

      <div className="grid gap-4">
        {docs.map((doc) => (
          <Link
            key={doc.href}
            to={doc.href}
            className="rounded-xl border border-border bg-white/90 p-5 transition-colors hover:border-fxl-navy/40"
          >
            <h2 className="mb-2 text-base font-semibold text-fxl-navy">{doc.title}</h2>
            <p className="text-sm text-muted-foreground">{doc.when}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
