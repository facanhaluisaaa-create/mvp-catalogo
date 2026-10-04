(function () {
  const { marca, contato, categorias, servicos, depoimentos } = CONFIG;

  const linkWhats = (servico) => {
    const texto = servico
      ? CONFIG.mensagemWhatsapp.replace("{servico}", servico)
      : "Olá! Vi o catálogo e gostaria de mais informações.";
    return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`;
  };

  const escapar = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const preencher = (seletor, valor) =>
    document.querySelectorAll(seletor).forEach((el) => (el.textContent = valor));

  // Textos da marca e contatos
  preencher("[data-marca-nome]", marca.nome);
  preencher("[data-marca-slogan]", marca.slogan);
  preencher("[data-marca-descricao]", marca.descricao);
  preencher("[data-insta-user]", "@" + contato.instagram);
  preencher("[data-cidade]", "📍 " + contato.cidade);
  preencher("[data-ano]", new Date().getFullYear());

  document.querySelectorAll("[data-whats-link]").forEach((a) => {
    a.href = linkWhats();
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-insta-link]").forEach((a) => {
    a.href = `https://instagram.com/${contato.instagram}`;
  });

  // Filtros
  const filtrosEl = document.querySelector("[data-filtros]");
  const grade = document.querySelector("[data-servicos]");
  const nomeCategoria = Object.fromEntries(categorias.map((c) => [c.id, c]));

  const botoes = [{ id: "todos", nome: "Todos", emoji: "✨" }, ...categorias];
  filtrosEl.innerHTML = botoes
    .map(
      (c, i) =>
        `<button class="filtro${i === 0 ? " ativo" : ""}" data-cat="${c.id}" role="tab">${c.emoji} ${escapar(c.nome)}</button>`
    )
    .join("");

  filtrosEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro");
    if (!btn) return;
    filtrosEl.querySelectorAll(".filtro").forEach((b) => b.classList.toggle("ativo", b === btn));
    renderServicos(btn.dataset.cat);
  });

  // Cards de serviços
  function renderServicos(filtro = "todos") {
    const lista = filtro === "todos" ? servicos : servicos.filter((s) => s.categoria === filtro);
    grade.innerHTML = lista
      .map((s) => {
        const cat = nomeCategoria[s.categoria] || { nome: "", emoji: "✨" };
        const foto = s.foto
          ? `<img src="${escapar(s.foto)}" alt="${escapar(s.nome)}" loading="lazy" />`
          : `<div class="card__placeholder"><span>${cat.emoji}</span><small>foto em breve</small></div>`;
        const detalhes = (s.detalhes || []).map((d) => `<li>${escapar(d)}</li>`).join("");
        return `
          <article class="card card--${escapar(s.categoria)}">
            <div class="card__foto">${foto}<span class="card__cat">${escapar(cat.nome)}</span></div>
            <div class="card__corpo">
              <h3>${escapar(s.nome)}</h3>
              <p>${escapar(s.descricao)}</p>
              ${detalhes ? `<ul class="card__detalhes">${detalhes}</ul>` : ""}
              <a class="btn btn--whats btn--bloco" href="${linkWhats(s.nome)}" target="_blank" rel="noopener">Quero orçamento</a>
            </div>
          </article>`;
      })
      .join("");
  }
  renderServicos();

  // Depoimentos
  document.querySelector("[data-depoimentos]").innerHTML = depoimentos
    .map(
      (d) => `
      <figure class="depoimento">
        <div class="estrelas" aria-label="5 estrelas">★★★★★</div>
        <blockquote>“${escapar(d.texto)}”</blockquote>
        <figcaption><strong>${escapar(d.nome)}</strong><span>${escapar(d.evento)}</span></figcaption>
      </figure>`
    )
    .join("");
})();
