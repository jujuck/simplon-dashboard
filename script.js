// ====== DONNÉES JSON ======
const dashboardData = {
  toolsAndResources: [
    {
      title: "Communication interne",
      description: "Outil et ressources liées à WCS",
      links: [
        {
          name: "Gmail",
          url: "https://mail.google.com/mail/u/0/#inbox",
        },
        {
          name: "G Calendar",
          url: "https://calendar.google.com/calendar?authuser=0",
        },
        {
          name: "Drive formation",
          url: "https://drive.google.com/drive/folders/16cPwCJTwq9JmW_sMp1ML2JOIw_fNSpGJ?usp=drive_link",
        },
        { name: "Discord", url: "https://discord.com/channels/@me" },
        { name: "Slack", url: "https://app.slack.com/client/T6SG2QGG2/dms" },
      ],
    },
    {
      title: "Ressources",
      description: "Ressources",
      links: [
        {
          name: "Github Organisation Simplon",
          url: "https://github.com/settings/organizations",
        },
        { name: "Github WCS", url: "https://github.com/WildCodeSchool" },
        {
          name: "Ressources et vous",
          url: "https://sites.google.com/simplon.co/ressourcesetvous/accueil?authuser=0",
        },
        {
          name: "Atelier pédago",
          url: "https://sites.google.com/simplon.co/offre-de-formations-simplon/accueil?pli=1&authuser=1",
        },
        {
          name: "Simplon Line",
          url: "https://simplonline.co/login?redirect=%2F",
        },
        {
          name: "Tableau de bord simplifions",
          url: "https://lookerstudio.google.com/u/0/reporting/5b17308b-61e7-4a1c-a47d-5d1720605fe2/page/p_1497r7j9ud",
        },
      ],
    },
    {
      title: "Outils",
      description: "Outils de gestion",
      links: [
        {
          name: "Lucca",
          url: "https://simplon2co.ilucca.net/timmi-absences/leave-request",
        },

        { name: "Claude", url: "https://claude.ai/new" },
        {
          name: "Bitwarden",
          url: "https://vault.bitwarden.com/#/login",
        },
        {
          name: "One Login",
          url: "https://simplon.onelogin.com/login2/",
        },
        {
          name: "Odoo",
          url: "https://simplon.odoo.com/web/login#cids=1&action=menu",
        },
      ],
    },
    {
      title: "Parcours",
      description: "Aide au suivi des parcours",
      links: [
        { name: "TIP", url: "./TIP" },
        { name: "TSSR", url: "./TSSR" },
        { name: "AIS", url: "./AIS" },
        { name: "CDA", url: "./CDA" },
        { name: "DATA ING", url: "./DE" },
      ],
    },
    {
      title: "Recrutement",
      description: "Process de recrutement et suivi du vivier",
      links: [
        {
          name: "Formulaire besoins de recrutement",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfITXHmnw31WqeLmmcd4Z2YI0YbTGONq6ZtHU8hoNkyN6MspA/viewform",
        },
        {
          name: "Suivi Ticketing RH",
          url: "https://docs.google.com/spreadsheets/d/1EDjxPT_zb3Bstn3eT0TPdMYsGInjEyCFrwDhbejEZ08/edit?gid=1285447619#gid=1285447619",
        },
        {
          name: "Formulaire des nouveauax arrivants",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfM1j4wJx3Z0XqEDVnLumcdb6yK7NpYnpmIX2NbqdebxhyAPA/viewform",
        },
        {
          name: "Process recrutement",
          url: "https://drive.google.com/file/d/12EOsLgpdfi507RnT7h7eS92bbCZxXdQh/view?ts=6989a5f2",
        },
        {
          name: "Vivier National",
          url: "https://docs.google.com/spreadsheets/d/1kNkk1tKOEMpCojkXMAfKTNvec547hsnmIDuS-TrDBJ4/edit?gid=236023154#gid=236023154",
        },
      ],
    },
  ],
  promos: [
    // TAI P3
    {
      name: "TAI P3 / Abdelilah - Arnaud",
      emoji: "📚",
      active: false,
      links: [
        {
          name: "Drive partagé apprenant",
          url: "https://drive.google.com/drive/folders/0APCz1L7-UDlSUk9PVA",
        },
        {
          name: "Drive partagé formateur",
          url: "https://drive.google.com/drive/folders/1h9vLi_DhsHOOl0WnVnQkVdv29zkwXzvA?usp=drive_link",
        },
        {
          name: "Suivi de présence formateur",
          url: "https://docs.google.com/spreadsheets/d/1BvSxz00EPr_BuHfZW9CuGtncLEUmuICO/edit?gid=1836361141#gid=1836361141",
        },
        {
          name: "Synchro pedago",
          url: "https://docs.google.com/document/d/1PSo739rI1ysq_D8qz6Tdrr41Ca6ScncW6Nnm-e2rCIw/edit?tab=t.0",
        },
        {
          name: "NA Suivi pédago studio",
          url: "",
        },
        {
          name: "Suivi tuteur",
          url: "https://docs.google.com/document/d/1tyTd-sNE50sWc77JMOjeP7pwdjcumqGdoqlU6xZIwBo/edit?tab=t.3b7nr8of4uon#heading=h.ohc1z0nxh9uh",
        },
        {
          name: "Synchro CDP - météo",
          url: "https://docs.google.com/document/d/1tyTd-sNE50sWc77JMOjeP7pwdjcumqGdoqlU6xZIwBo/edit?tab=t.0",
        },
      ],
    },
    {
      name: "Ressources partagées",
      emoji: "🔥",
      active: true,
      links: [
        {
          name: "Planning des rentrées",
          url: "https://docs.google.com/spreadsheets/d/1n_s_HE_F6rzIYZqXmxkKPj0DvV38QJJjSfWH92X4kj0/edit?gid=1889710442#gid=1889710442",
        },
        {
          name: "OLD Tableau de placement",
          url: "https://docs.google.com/spreadsheets/d/1TlSzbH5TtaGSbjLdjxK1KP0zKnoHjb-CXeCBsZ9gJFY/edit?gid=966022037#gid=966022037",
        },
        {
          name: "Pedago Parcours infra",
          url: "https://drive.google.com/drive/folders/0AGOHaDL1McfhUk9PVA",
        },
      ],
    },
    {
      name: " Suivi studio Pédago",
      emoji: "🎯",
      active: false,
      links: [
        {
          name: "Fichier F2F inscription",
          url: "https://docs.google.com/spreadsheets/d/1N8Q988KGNTAC6j6imX1fN6Dg2lsv14qHU0mdjooComM/edit?gid=817305296#gid=817305296",
        },
        {
          name: "Synchro CDP - météo",
          url: "https://docs.google.com/spreadsheets/d/1N8Q988KGNTAC6j6imX1fN6Dg2lsv14qHU0mdjooComM/edit?gid=0#gid=0",
        },
        {
          name: "Dossier REX de formation",
          url: "https://drive.google.com/drive/folders/13ZA4As0ybZs4iOXzcxI6zrKAJZsqKbTR",
        },
      ],
    },
    {
      name: "Montage formation",
      emoji: "🏆",
      active: false,
      links: [
        {
          name: "Template BF Distanciel",
          url: "https://docs.google.com/spreadsheets/d/1YF6hFX67H7Ej7Dpw6ddVq_kXfG5HDjvveZlD0ekhOO0/edit?gid=0#gid=0",
        },
        {
          name: "Rentrées 2026 Simplon x WCS",
          url: "https://docs.google.com/spreadsheets/d/1n_s_HE_F6rzIYZqXmxkKPj0DvV38QJJjSfWH92X4kj0/edit?gid=521527096#gid=521527096",
        },
        {
          name: "Calendrier de Bootcamp 2026",
          url: "https://docs.google.com/spreadsheets/d/1AtUs0HvBI5tYMy8Ael4yejk3oGyJmA-g98n3fbpVHGo/edit?pli=1&gid=150977751#gid=150977751",
        },
        {
          name: "Suivi des TMJ",
          url: "https://docs.google.com/spreadsheets/d/15G4ZnJvnQHxmkNk2IC7VvenIggGPJz9qC3OFLjgThSQ/edit?gid=0#gid=0",
        },
        {
          name: "Vivier distanciel",
          url: "https://docs.google.com/spreadsheets/d/1Gv2ShplKrs9YA2dV5Xx-DCkJmoWMapZ91yn6cnZXRXA/edit?gid=1092550030#gid=1092550030",
        },
        {
          name: "Drive recrutement CV et entretien",
          url: "https://drive.google.com/drive/folders/10uAGRUMIVHjKGl35GK4KF4bWvJHTGckl",
        },
      ],
    },
    {
      name: "Synchro Pédago",
      emoji: "🏆",
      active: false,
      links: [
        {
          name: "Synchro Pédago Dev",
          url: "https://docs.google.com/document/d/173OGFpBpT_QErP-IMkLK5erh-JsHFob_UxBIeA59RoU/edit?tab=t.0",
        },
        {
          name: "Synchro Pédago Infra",
          url: "https://docs.google.com/document/d/1PSo739rI1ysq_D8qz6Tdrr41Ca6ScncW6Nnm-e2rCIw/edit?tab=t.0",
        },
      ],
    },
  ],
};

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

    let linksHTML = promo.links.reduce((tot, link) => {
      if (link.url) {
        tot += `<a href="${link.url}" target="_blank" class="promo-link">${link.name}</a>`;
      }
      return tot;
    }, "");

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
