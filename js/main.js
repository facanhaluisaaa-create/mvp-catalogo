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
  preencher("[data-cidade]", contato.cidade);
  preencher("[data-ano]", new Date().getFullYear());

  const capa = document.querySelector("[data-foto-capa]");
  if (marca.fotoCapa) capa.src = marca.fotoCapa;
  else capa.parentElement.classList.add("sem-foto");

  document.querySelectorAll("[data-whats-link]").forEach((a) => {
    a.href = linkWhats();
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-insta-link]").forEach((a) => {
    a.href = `https://instagram.com/${contato.instagram}`;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Atalhos para as categorias
  document.querySelector("[data-atalhos]").innerHTML = categorias
    .map((c) => `<a href="#${escapar(c.id)}">${escapar(c.nome)}</a>`)
    .join("");

  // Uma seção por categoria, com os serviços em linhas alternadas
  const foto = (s) =>
    s.foto
      ? `<img src="${escapar(s.foto)}" alt="${escapar(s.nome)}" loading="lazy" />`
      : `<div class="servico__sem-foto">Adicione uma foto</div>`;

  document.querySelector("[data-categorias]").innerHTML = categorias
    .map((c, i) => {
      const itens = servicos.filter((s) => s.categoria === c.id);
      if (!itens.length) return "";
      const numero = String(i + 1).padStart(2, "0");
      return `
        <section id="${escapar(c.id)}" class="secao categoria categoria--${escapar(c.id)}">
          <div class="container">
            <div class="cabecalho revelar">
              <p class="sobretitulo">${numero} · ${escapar(c.nome)}</p>
              <h2>${escapar(c.nome)}</h2>
              ${c.descricao ? `<p class="cabecalho__texto">${escapar(c.descricao)}</p>` : ""}
            </div>
            <div class="servicos">
              ${itens
                .map(
                  (s) => `
                <article class="servico revelar">
                  <div class="servico__foto">${foto(s)}</div>
                  <div class="servico__texto">
                    <h3>${escapar(s.nome)}</h3>
                    <p>${escapar(s.descricao)}</p>
                    ${
                      s.detalhes && s.detalhes.length
                        ? `<ul class="servico__detalhes">${s.detalhes.map((d) => `<li>${escapar(d)}</li>`).join("")}</ul>`
                        : ""
                    }
                    <a class="btn btn--primario" href="${linkWhats(s.nome)}" target="_blank" rel="noopener">Quero orçamento</a>
                  </div>
                </article>`
                )
                .join("")}
            </div>
          </div>
        </section>`;
    })
    .join("");

  // Depoimentos
  document.querySelector("[data-depoimentos]").innerHTML = depoimentos
    .map(
      (d) => `
      <figure class="depoimento revelar">
        <div class="estrelas" aria-label="5 estrelas">★★★★★</div>
        <blockquote>${escapar(d.texto)}</blockquote>
        <figcaption><strong>${escapar(d.nome)}</strong><span>${escapar(d.evento)}</span></figcaption>
      </figure>`
    )
    .join("");

  // Aparecer suavemente ao rolar a página
  const animar = "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (animar) {
    document.documentElement.classList.add("animar");
    const obs = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));
  }
})();
