import InfoBlock from '@/components/docs/InfoBlock'
import PageHeader from '@/components/docs/PageHeader'
import PromptBlock from '@/components/docs/PromptBlock'

const PROMPT_SUPABASE = `Olá. Vamos configurar a camada de dados deste projeto.

Leia antes de começar:
- docs/build/arquitetura/supabase.md

Contexto:
- Tipo de projeto: [BI PERSONALIZADO / PRODUTO]
- Tabelas iniciais: [LISTA]

Proponha a estrutura de client, Auth, RLS e migrations iniciais conforme o padrão FXL.`

export default function Supabase() {
  return (
    <div>
      <PageHeader
        badge="Build"
        title="Supabase"
        description="Guia para conexão, autenticação, políticas de acesso e disciplina de migrations no padrão FXL."
        version="1.0"
        date="2026"
      />

      <div className="prose">
        <h2>O mínimo para começar certo</h2>
        <ul>
          <li>Client centralizado em <code>src/lib/supabase.ts</code>.</li>
          <li>Variáveis públicas com prefixo correto e validação logo no bootstrap.</li>
          <li>Auth via Supabase Auth, sem camada paralela desnecessária.</li>
        </ul>

        <h2>Regra que não admite exceção</h2>
        <p>
          Toda tabela precisa de RLS. Se uma migration cria estrutura e deixa a policy para depois, o
          projeto já começou com um furo de segurança.
        </p>

        <h2>Disciplina de migrations</h2>
        <ul>
          <li>Uma migration, uma mudança coesa.</li>
          <li>Nunca editar migration antiga em projeto já rodado.</li>
          <li>Correção sempre entra como nova migration.</li>
        </ul>
      </div>

      <InfoBlock type="warning" className="mb-6">
        <strong>Chave crítica:</strong> a <code>service_role</code> nunca vai para o frontend. Se um
        fluxo precisa dela, isso já sinaliza Edge Function ou backend intermediário.
      </InfoBlock>

      <PromptBlock
        label="Use este prompt ao desenhar a camada inicial do Supabase"
        prompt={PROMPT_SUPABASE}
      />
    </div>
  )
}
