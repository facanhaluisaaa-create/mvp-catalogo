// ============================================================
//  CONFIGURAÇÃO DO CATÁLOGO
//  Edite apenas este arquivo para trocar textos, contatos,
//  serviços, fotos e depoimentos.
// ============================================================

const CONFIG = {
  marca: {
    nome: "Brincar & Encantar",
    slogan: "Recreação, Spa Day Infantil e Oficinas Criativas",
    // Foto grande da capa
    fotoCapa: "img/capa.jpg",
    descricao:
      "Levamos diversão, cuidado e criatividade para festas, eventos e momentos especiais. Cada experiência é pensada com carinho para que as crianças brinquem, criem e se sintam únicas.",
  },

  contato: {
    // Somente números, com DDI + DDD. Ex.: 5511999999999
    whatsapp: "5500000000000",
    // Usuário do Instagram, sem o @
    instagram: "seuinstagram",
    cidade: "Sua cidade - UF",
  },

  // Mensagem padrão do WhatsApp. {servico} é trocado pelo nome do serviço.
  mensagemWhatsapp: "Olá! Vi o catálogo e gostaria de um orçamento para: {servico}",

  categorias: [
    {
      id: "recreacao",
      nome: "Recreação",
      descricao: "Brincadeiras que movimentam, unem e fazem a festa acontecer.",
    },
    {
      id: "spa",
      nome: "Spa Day Infantil",
      descricao: "Momentos de cuidado e autoestima, com muito carinho e diversão.",
    },
    {
      id: "oficinas",
      nome: "Oficinas Criativas",
      descricao: "Mãos na massa para criar, experimentar e levar a arte para casa.",
    },
  ],

  // foto: caminho da imagem dentro da pasta img/ (ex.: "img/spa-day.jpg").
  // As fotos atuais são apenas exemplos (Unsplash) — troque pelas fotos reais.
  servicos: [
    {
      categoria: "recreacao",
      nome: "Recreação para Festas",
      descricao:
        "Brincadeiras dirigidas, gincanas, dança e jogos cooperativos com recreadores animados.",
      detalhes: ["A partir de 2h", "1 recreador a cada 10 crianças", "De 3 a 12 anos"],
      foto: "img/recreacao-festas.jpg",
    },
    {
      categoria: "recreacao",
      nome: "Brincadeiras Clássicas",
      descricao:
        "Pula-corda, amarelinha, corrida do saco e outras brincadeiras que atravessam gerações.",
      detalhes: ["Ideal para áreas externas", "Materiais inclusos"],
      foto: "img/brincadeiras-classicas.jpg",
    },
    {
      categoria: "spa",
      nome: "Spa Day Infantil",
      descricao:
        "Um dia de princesa (ou príncipe!) com máscara facial de frutas, pintura de unhas, penteados e roupões.",
      detalhes: ["Produtos infantis e seguros", "Kit roupão e tiara", "De 4 a 12 anos"],
      foto: "img/spa-day.jpg",
    },
    {
      categoria: "spa",
      nome: "Festa do Pijama Spa",
      descricao:
        "Cabaninhas, skincare divertido, escalda-pés e muita conversa para uma noite inesquecível.",
      detalhes: ["Montagem de cabanas", "Decoração temática"],
      foto: "img/festa-pijama.jpg",
    },
    {
      categoria: "oficinas",
      nome: "Oficina de Slime",
      descricao:
        "As crianças criam o próprio slime com cores, glitter e aromas — e levam para casa.",
      detalhes: ["Materiais atóxicos", "Cada criança leva sua criação"],
      foto: "img/oficina-slime.jpg",
    },
    {
      categoria: "oficinas",
      nome: "Pintura e Artes",
      descricao:
        "Pintura em tela, ecobag ou caneca. Uma lembrancinha feita pelas próprias mãos.",
      detalhes: ["Avental incluso", "Tema personalizável"],
      foto: "img/pintura-artes.jpg",
    },
  ],

  depoimentos: [
    {
      nome: "Mariana S.",
      evento: "Aniversário de 6 anos",
      texto:
        "As crianças não pararam um minuto! A equipe é super atenciosa e a festa foi um sucesso.",
    },
    {
      nome: "Juliana R.",
      evento: "Spa Day Infantil",
      texto:
        "Minha filha amou se sentir uma princesa. Tudo muito caprichado e com produtos de qualidade.",
    },
    {
      nome: "Fernanda L.",
      evento: "Oficina de Slime",
      texto:
        "Experiência incrível! Os pequenos voltaram para casa felizes e com a lembrancinha que fizeram.",
    },
  ],
};
