# Portfolio — bentos-next

## O que não dá pra derivar do código

### Bootstrap
Carregado client-side via `src/components/ui/bootstrapForBrowser.tsx` — propositalmente.
Não mover para import global no layout.

### i18n
Sem biblioteca externa. Toggle PT/EN feito com objetos de tradução inline por página.
`LanguageContext` está em `src/app/layout.js`.

### Arquivos
- Componentes em `.js`, não `.tsx` (exceto bootstrapForBrowser)
- Sem testes automatizados
- Sem banco de dados — portfólio estático + API de contato (Resend)

### Deploy
Vercel. Branch `main` → produção.
