# MVP – Catálogo de Recreação, Spa Day Infantil e Oficinas Criativas

Site estático (HTML + CSS + JS puro), sem instalação. Basta abrir o `index.html` no navegador.

## O que tem
- Capa com foto grande, chamada e botões de orçamento
- Catálogo separado por categoria (Recreação, Spa Day Infantil, Oficinas Criativas), com atalhos no topo
- Cada serviço em destaque (foto de um lado, texto do outro), com detalhes e botão **"Quero orçamento"**, que abre o WhatsApp com o nome do serviço já escrito
- Depoimentos (no celular, deslizam para o lado)
- Contato com WhatsApp e Instagram + botão flutuante do WhatsApp

## Como personalizar
Tudo fica em **`js/config.js`**:
- `marca`: nome, slogan e descrição
- `contato.whatsapp`: número só com dígitos (ex.: `5511999999999`)
- `contato.instagram`: usuário sem o `@`
- `servicos`: adicionar, remover ou editar serviços
- `depoimentos`: feedbacks das clientes

### Fotos
As fotos atuais são **apenas exemplos** (Unsplash, uso gratuito). Para trocar, coloque a foto real na
pasta `img/` e informe o caminho no serviço, por exemplo `foto: "img/spa-day.jpg"`.
A foto da capa fica em `marca.fotoCapa`. Prefira fotos na horizontal, com cerca de 1200px de largura.

## Estrutura
```
index.html
css/style.css
js/config.js   ← conteúdo editável
js/main.js     ← montagem da página
img/           ← fotos dos serviços
```
