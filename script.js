// ====== DONNÉES JSON ======
const dashboardData = {
  toolsAndResources: [
    {
      title: "Plateforme Pédagogique",
      description: "Accès aux ressources d'apprentissage et matériels",
      links: [
        { name: "Plateforme LMS", url: "https://example.com" },
        { name: "Vidéos tutoriels", url: "https://example.com" },
        { name: "Documentation", url: "https://example.com" },
      ],
    },
    {
      title: "Collaboration",
      description: "Outils de travail en équipe et communication",
      links: [
        { name: "Slack Workspace", url: "https://example.com" },
        { name: "Github Classroom", url: "https://example.com" },
        { name: "Google Drive", url: "https://example.com" },
      ],
    },
    {
      title: "Design & Création",
      description: "Outils de conception et prototypage",
      links: [
        { name: "Figma Workspace", url: "https://example.com" },
        { name: "Canva Pro", url: "https://example.com" },
        { name: "Adobe Suite", url: "https://example.com" },
      ],
    },
  ],
  promos: [
    {
      name: "Promo 2024 - En cours",
      emoji: "🎯",
      active: true,
      links: [
        { name: "Planning semaine", url: "https://example.com" },
        { name: "Projets en cours", url: "https://example.com" },
        { name: "Ressources 2024", url: "https://example.com" },
        { name: "Slack du groupe", url: "https://example.com" },
        { name: "Drive partagé", url: "https://example.com" },
      ],
    },
    {
      name: "Promo 2023 - Archives",
      emoji: "📚",
      active: false,
      links: [
        { name: "Projets finalisés", url: "https://example.com" },
        { name: "Portfolios", url: "https://example.com" },
        { name: "Archive Slack", url: "https://example.com" },
        { name: "Galerie des projets", url: "https://example.com" },
        { name: "Certificats", url: "https://example.com" },
      ],
    },
    {
      name: "Promo 2022 - Alumni",
      emoji: "🏆",
      active: false,
      links: [
        { name: "Témoignages", url: "https://example.com" },
        { name: "Offres d'emploi", url: "https://example.com" },
        { name: "Partenaires recrutement", url: "https://example.com" },
        { name: "Réseautage", url: "https://example.com" },
        { name: "Événements alumni", url: "https://example.com" },
      ],
    },
    {
      name: "Promo 2021 - Historique",
      emoji: "🎬",
      active: false,
      links: [
        { name: "Archives complètes", url: "https://example.com" },
        { name: "Documentations", url: "https://example.com" },
        { name: "Vidéos finales", url: "https://example.com" },
        { name: "Débriefing", url: "https://example.com" },
      ],
    },
    {
      name: "Divers & Extras",
      emoji: "🔥",
      active: false,
      links: [
        { name: "Ressources extérieures", url: "https://example.com" },
        { name: "Outils gratuits", url: "https://example.com" },
        { name: "Templates utiles", url: "https://example.com" },
        { name: "Communauté", url: "https://example.com" },
        { name: "FAQ & Support", url: "https://example.com" },
      ],
    },
  ],
};

console.log("Hello World");

// ====== GÉNÉRATION DU DOM ======
function renderToolsAndResources() {
  const container = document.querySelector(".tools-grid");
  container.innerHTML = "";

  dashboardData.toolsAndResources.forEach((tool, index) => {
    const toolBlock = document.createElement("div");
    toolBlock.className = "tool-block";
    toolBlock.style.animationDelay = `${0.1 + index * 0.1}s`;

    let linksHTML = tool.links
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" class="tool-link">${link.name}</a>`,
      )
      .join("");

    toolBlock.innerHTML = `
                    <div class="tool-title">${tool.title}</div>
                    <div class="tool-description">${tool.description}</div>
                    <div class="tool-links">${linksHTML}</div>
                `;

    container.appendChild(toolBlock);
  });
}

function renderPromos() {
  const container = document.querySelector(".accordion");
  container.innerHTML = "";

  dashboardData.promos.forEach((promo, index) => {
    const item = document.createElement("div");
    item.className = `accordion-item ${promo.active ? "active" : ""}`;
    item.style.animationDelay = `${0.1 + index * 0.1}s`;

    let linksHTML = promo.links
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" class="promo-link">${link.name}</a>`,
      )
      .join("");

    item.innerHTML = `
                    <div class="accordion-header">
                        <span>${promo.emoji} ${promo.name}</span>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        <div class="promo-links">${linksHTML}</div>
                    </div>
                `;

    container.appendChild(item);
  });

  attachAccordionListeners();
}

function attachAccordionListeners() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const isActive = item.classList.contains("active");

      // Fermer tous les autres
      document.querySelectorAll(".accordion-item").forEach((el) => {
        el.classList.remove("active");
      });

      // Toggle le courant
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Mise à jour date/heure
function updateDateTime() {
  const now = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const dateStr = now.toLocaleDateString("fr-FR", options);

  const timeStr = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("date").textContent = dateStr;
  document.getElementById("time").textContent = timeStr;
}

// ====== INITIALISATION ======
document.addEventListener("DOMContentLoaded", function () {
  renderToolsAndResources();
  renderPromos();
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
