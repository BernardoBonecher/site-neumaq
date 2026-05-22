# Site Neumaq

Site institucional one-page para **Neumaq Máquinas e Equipamentos Ltda.** — fabricante de cilindros hidráulicos em Cachoeirinha-RS.

Inspirado em [incocil.com](https://www.incocil.com/pt), construído com HTML + Tailwind CSS (via CDN) + JavaScript vanilla. Sem build, sem dependências.

## Como rodar localmente

```bash
py -m http.server 8765
```

Depois abra http://localhost:8765 no navegador.

## Como editar contatos

No topo do [`script.js`](script.js) há 3 constantes editáveis: `WHATSAPP_NUMERO`, `EMAIL_DESTINO` e `EMAIL_ASSUNTO` / `EMAIL_CORPO`.

## Stack

- HTML semântico + Tailwind CSS via CDN
- Google Fonts: Manrope (display) + Inter (corpo)
- Sem build, sem framework, sem npm — abre direto no navegador
