const projects = [
  { name: "PracticeCode1", path: "./PracticeCode1/index.html" },
  { name: "PracticeCode2", path: "./PracticeCode2/index.html" },
  { name: "PracticeCode3", path: "./PracticeCode3/index.html" },
  { name: "PracticeCode4", path: "./PracticeCode4/index.html" },
];

const grid = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");

function renderProjects(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="card">
        <h3>No project found</h3>
        <p>Try a different project name.</p>
      </div>
    `;
    return;
  }

  list.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const folderNumber = index + 1;

    card.innerHTML = `
      <div class="card-top">
        <span class="badge">Project ${folderNumber}</span>
        <span class="folder">📁</span>
      </div>

      <h3>${project.name}</h3>
      <p>Open the dedicated practice folder and continue building inside it.</p>

      <a class="open-btn" href="${project.path}">Open Project</a>
    `;

    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase().trim();

  const filtered = projects.filter((item) =>
    item.name.toLowerCase().includes(value),
  );

  renderProjects(filtered);
});

renderProjects(projects);
