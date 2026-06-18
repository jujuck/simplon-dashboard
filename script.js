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

// ====== GÉNÉRATION DU DOM (existant) ======
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

// ====== UTILITAIRE ======
function escapeHtml(str = "") {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

// ====== ESPACE RECRUTEMENT (localStorage) ======
const STORAGE_KEYS = {
  prestataires: "wcs_dashboard_prestataires",
  todos: "wcs_dashboard_todos",
  questions: "wcs_dashboard_questions",
  dossiers: "wcs_dashboard_dossiers",
};

function getPrestataires() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.prestataires)) || [];
  } catch {
    return [];
  }
}

function savePrestataires(list) {
  localStorage.setItem(STORAGE_KEYS.prestataires, JSON.stringify(list));
}

function renderPrestataires() {
  const container = document.getElementById("liste-prestataires");
  const list = getPrestataires();

  if (list.length === 0) {
    container.innerHTML = `<div class="list-empty">Aucun prestataire en liste d'attente</div>`;
    return;
  }

  container.innerHTML = list
    .map(
      (p) => `
        <div class="prestataire-item" data-id="${p.id}">
          <div class="prestataire-info">
            <span class="name">${escapeHtml(p.nom)} ${escapeHtml(p.prenom)}</span>
            <span class="meta">📧 ${escapeHtml(p.email)}${p.tel ? " · 📞 " + escapeHtml(p.tel) : ""}</span>
            <span class="meta">🎓 ${escapeHtml(p.cursus)}</span>
          </div>
          <div class="item-actions">
            <button class="btn-delete" data-action="delete-prestataire" data-id="${p.id}" type="button">✕ Retirer</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function addPrestataire(data) {
  const list = getPrestataires();
  list.push({ id: generateId(), ...data });
  savePrestataires(list);
  renderPrestataires();
}

function deletePrestataire(id) {
  const list = getPrestataires().filter((p) => p.id !== id);
  savePrestataires(list);
  renderPrestataires();
}

// ====== TO DO LISTE (localStorage) ======
function getTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.todos)) || [];
  } catch {
    return [];
  }
}

function saveTodos(list) {
  localStorage.setItem(STORAGE_KEYS.todos, JSON.stringify(list));
}

const STATUS_LABELS = {
  "a-faire": "À faire",
  "en-cours": "En cours",
  termine: "Terminé",
};

function renderTodos() {
  const container = document.getElementById("liste-todos");
  const list = getTodos();

  if (list.length === 0) {
    container.innerHTML = `<div class="list-empty">Aucune tâche pour le moment</div>`;
    return;
  }

  // Tri : tâches actives avant les terminées, puis par priorité (haute > moyenne > basse)
  const priorityOrder = { haute: 0, moyenne: 1, basse: 2 };
  const sorted = [...list].sort((a, b) => {
    if ((a.statut === "termine") !== (b.statut === "termine")) {
      return a.statut === "termine" ? 1 : -1;
    }
    return priorityOrder[a.priorite] - priorityOrder[b.priorite];
  });

  container.innerHTML = sorted
    .map(
      (t) => `
        <div class="todo-item status-${t.statut}" data-id="${t.id}">
          <div class="todo-main">
            <div class="todo-title">
              <span class="priority-badge priority-${t.priorite}">${t.priorite}</span>
              ${escapeHtml(t.nom)}
            </div>
            ${t.description ? `<div class="todo-desc">${escapeHtml(t.description)}</div>` : ""}
            ${t.url ? `<a href="${escapeHtml(t.url)}" target="_blank" class="todo-link">🔗 Lien associé</a>` : ""}
          </div>
          <div class="item-actions">
            <select class="status-select" data-action="change-status" data-id="${t.id}">
              ${Object.entries(STATUS_LABELS)
                .map(
                  ([value, label]) =>
                    `<option value="${value}" ${t.statut === value ? "selected" : ""}>${label}</option>`,
                )
                .join("")}
            </select>
            <button class="btn-delete" data-action="delete-todo" data-id="${t.id}" type="button">✕</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function addTodo(data) {
  const list = getTodos();
  list.push({ id: generateId(), statut: "a-faire", ...data });
  saveTodos(list);
  renderTodos();
}

function deleteTodo(id) {
  const list = getTodos().filter((t) => t.id !== id);
  saveTodos(list);
  renderTodos();
}

function updateTodoStatus(id, statut) {
  const list = getTodos();
  const todo = list.find((t) => t.id === id);
  if (todo) {
    todo.statut = statut;
    saveTodos(list);
    renderTodos();
  }
}

function formatDateFr(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

// ====== QUESTIONS À L'ÉQUIPE (localStorage) ======
function getQuestions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.questions)) || [];
  } catch {
    return [];
  }
}

function saveQuestions(list) {
  localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(list));
}

function renderQuestions() {
  const container = document.getElementById("liste-questions");
  const list = getQuestions();

  if (list.length === 0) {
    container.innerHTML = `<div class="list-empty">Aucune question en attente</div>`;
    return;
  }

  const priorityOrder = { haute: 0, moyenne: 1, basse: 2 };
  const sorted = [...list].sort(
    (a, b) => priorityOrder[a.priorite] - priorityOrder[b.priorite],
  );

  container.innerHTML = sorted
    .map(
      (q) => `
        <div class="todo-item" data-id="${q.id}">
          <div class="todo-main">
            <div class="todo-title">
              <span class="priority-badge priority-${q.priorite}">${q.priorite}</span>
              ${escapeHtml(q.question)}
            </div>
            ${q.piste ? `<div class="todo-desc">💡 ${escapeHtml(q.piste)}</div>` : ""}
            ${q.lien ? `<a href="${escapeHtml(q.lien)}" target="_blank" class="todo-link">🔗 Lien associé</a>` : ""}
          </div>
          <div class="item-actions">
            <button class="btn-delete" data-action="delete-question" data-id="${q.id}" type="button">✕</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function addQuestion(data) {
  const list = getQuestions();
  list.push({ id: generateId(), ...data });
  saveQuestions(list);
  renderQuestions();
}

function deleteQuestion(id) {
  const list = getQuestions().filter((q) => q.id !== id);
  saveQuestions(list);
  renderQuestions();
}

// ====== DOSSIERS EN COURS (localStorage) ======
function getDossiers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.dossiers)) || [];
  } catch {
    return [];
  }
}

function saveDossiers(list) {
  localStorage.setItem(STORAGE_KEYS.dossiers, JSON.stringify(list));
}

function renderDossiers() {
  const container = document.getElementById("liste-dossiers");
  const list = getDossiers();

  if (list.length === 0) {
    container.innerHTML = `<div class="list-empty">Aucun dossier en cours</div>`;
    return;
  }

  const priorityOrder = { haute: 0, moyenne: 1, basse: 2 };
  const sorted = [...list].sort((a, b) => {
    const diff = priorityOrder[a.priorite] - priorityOrder[b.priorite];
    if (diff !== 0) return diff;
    return (a.date || "").localeCompare(b.date || "");
  });

  container.innerHTML = sorted
    .map(
      (d) => `
        <div class="todo-item" data-id="${d.id}">
          <div class="todo-main">
            <div class="todo-title">
              <span class="priority-badge priority-${d.priorite}">${d.priorite}</span>
              ${escapeHtml(d.intitule)}
            </div>
            <div class="todo-desc">
              ${d.date ? `📅 ${formatDateFr(d.date)}` : ""}${d.collaborateur ? ` · 🧑 ${escapeHtml(d.collaborateur)}` : ""}
            </div>
            ${d.url ? `<a href="${escapeHtml(d.url)}" target="_blank" class="todo-link">🔗 Lien associé</a>` : ""}
          </div>
          <div class="item-actions">
            <button class="btn-delete" data-action="delete-dossier" data-id="${d.id}" type="button">✕</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function addDossier(data) {
  const list = getDossiers();
  list.push({ id: generateId(), ...data });
  saveDossiers(list);
  renderDossiers();
}

function deleteDossier(id) {
  const list = getDossiers().filter((d) => d.id !== id);
  saveDossiers(list);
  renderDossiers();
}

// ====== MODALES ======
function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "";
}

function attachModalListeners() {
  document
    .getElementById("open-recrutement")
    .addEventListener("click", () => openModal("modal-recrutement"));
  document
    .getElementById("open-todo")
    .addEventListener("click", () => openModal("modal-todo"));
  document
    .getElementById("open-questions")
    .addEventListener("click", () => openModal("modal-questions"));
  document
    .getElementById("open-dossiers")
    .addEventListener("click", () => openModal("modal-dossiers"));

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".modal-overlay.active")
        .forEach((overlay) => closeModal(overlay.id));
    }
  });

  document
    .getElementById("form-prestataire")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      addPrestataire({
        nom: document.getElementById("p-nom").value.trim(),
        prenom: document.getElementById("p-prenom").value.trim(),
        email: document.getElementById("p-email").value.trim(),
        tel: document.getElementById("p-tel").value.trim(),
        cursus: document.getElementById("p-cursus").value.trim(),
      });
      e.target.reset();
    });

  document.getElementById("form-todo").addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo({
      nom: document.getElementById("t-nom").value.trim(),
      description: document.getElementById("t-desc").value.trim(),
      priorite: document.getElementById("t-priorite").value,
      url: document.getElementById("t-url").value.trim(),
    });
    e.target.reset();
  });

  document.getElementById("form-question").addEventListener("submit", (e) => {
    e.preventDefault();
    addQuestion({
      priorite: document.getElementById("q-priorite").value,
      question: document.getElementById("q-question").value.trim(),
      piste: document.getElementById("q-piste").value.trim(),
      lien: document.getElementById("q-lien").value.trim(),
    });
    e.target.reset();
  });

  document.getElementById("form-dossier").addEventListener("submit", (e) => {
    e.preventDefault();
    addDossier({
      priorite: document.getElementById("d-priorite").value,
      date: document.getElementById("d-date").value,
      intitule: document.getElementById("d-intitule").value.trim(),
      collaborateur: document.getElementById("d-collaborateur").value.trim(),
      url: document.getElementById("d-url").value.trim(),
    });
    e.target.reset();
  });

  // Délégation d'événements pour suppression / changement de statut
  document
    .getElementById("liste-prestataires")
    .addEventListener("click", (e) => {
      const btn = e.target.closest('[data-action="delete-prestataire"]');
      if (btn) deletePrestataire(btn.dataset.id);
    });

  document.getElementById("liste-todos").addEventListener("click", (e) => {
    const btn = e.target.closest('[data-action="delete-todo"]');
    if (btn) deleteTodo(btn.dataset.id);
  });

  document.getElementById("liste-todos").addEventListener("change", (e) => {
    if (e.target.dataset.action === "change-status") {
      updateTodoStatus(e.target.dataset.id, e.target.value);
    }
  });

  document.getElementById("liste-questions").addEventListener("click", (e) => {
    const btn = e.target.closest('[data-action="delete-question"]');
    if (btn) deleteQuestion(btn.dataset.id);
  });

  document.getElementById("liste-dossiers").addEventListener("click", (e) => {
    const btn = e.target.closest('[data-action="delete-dossier"]');
    if (btn) deleteDossier(btn.dataset.id);
  });
}

// ====== INITIALISATION ======
document.addEventListener("DOMContentLoaded", function () {
  renderToolsAndResources();
  renderPromos();
  updateDateTime();
  setInterval(updateDateTime, 1000);

  renderPrestataires();
  renderTodos();
  renderQuestions();
  renderDossiers();
  attachModalListeners();
});
