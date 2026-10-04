# MVP – Catálogo de Recreação, Spa Day Infantil e Oficinas Criativas

Site estático (HTML + CSS + JS puro), sem instalação. Basta abrir o `index.html` no navegador.

## O que tem
- Capa com chamada e botão de orçamento
- Catálogo com filtro por categoria (Recreação, Spa Day Infantil, Oficinas Criativas)
- Cards com foto, descrição, detalhes e botão **"Quero orçamento"**, que abre o WhatsApp com o nome do serviço já escrito
- Depoimentos (feedbacks)
- Contato com WhatsApp e Instagram + botão flutuante do WhatsApp

## Como personalizar
Tudo fica em **`js/config.js`**:
- `marca`: nome, slogan e descrição
- `contato.whatsapp`: número só com dígitos (ex.: `5511999999999`)
- `contato.instagram`: usuário sem o `@`
- `servicos`: adicionar, remover ou editar serviços
- `depoimentos`: feedbacks das clientes

### Fotos
Coloque as fotos na pasta `img/` e informe o caminho no serviço, por exemplo:
`foto: "img/spa-day.jpg"`. Enquanto estiver vazio, aparece uma ilustração provisória.

## Estrutura
```
index.html
css/style.css
js/config.js   ← conteúdo editável
js/main.js     ← montagem da página
img/           ← fotos dos serviços
```
