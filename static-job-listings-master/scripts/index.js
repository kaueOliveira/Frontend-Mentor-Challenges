const container = document.getElementById("container");
const endPoint = "data.json";

let filters = [];
let allJobs = [];

const info = (endPoint) => {
  fetch(endPoint)
    .then((res) => res.json())
    .then((res) => {
      allJobs = res;

      renderDivs();
    });
};

info(endPoint, container);

function renderDivs() {
  container.innerHTML = "";

  const jobsToRender =
    filters.length === 0
      ? allJobs
      : allJobs.filter((job) => {
          const skills = [job.role, job.level, ...job.languages, ...job.tools];
          return filters.every((f) => skills.includes(f));
        });

  jobsToRender.forEach((element, index) => {
    const divCard = document.createElement("div");
    divCard.className = "card";

    const logo = document.createElement("img");
    logo.src = element.logo;
    logo.alt = element.company;

    divCard.appendChild(logo);

    const cardHeader = document.createElement("header");
    cardHeader.className = "card-header";

    const divCompanyName = document.createElement("div");
    divCompanyName.className = "div-company-name";

    const companyName = document.createElement("h1");
    companyName.textContent = element.company;

    divCompanyName.appendChild(companyName);

    if (element.new) {
      const spanNew = document.createElement("span");
      spanNew.className = "span-new";
      spanNew.textContent = "NEW!";
      divCompanyName.appendChild(spanNew);
    }

    if (element.featured) {
      const spanFeatured = document.createElement("span");
      spanFeatured.className = "span-featured";
      spanFeatured.textContent = "FEATURED";
      divCompanyName.appendChild(spanFeatured);
    }

    if (element.new && element.featured) {
      divCard.style.boxSizing = "border-box";
      divCard.style.borderLeftWidth = "5px";
      divCard.style.borderLeftStyle = "solid";
      divCard.style.borderLeftColor = "hsl(180, 29%, 50%)";
    }

    cardHeader.appendChild(divCompanyName);

    const position = document.createElement("h2");
    position.textContent = element.position;

    cardHeader.appendChild(position);

    const jobDetails = document.createElement("div");
    jobDetails.className = "div-job-details";

    const date = document.createElement("p");
    date.textContent = element.postedAt;

    const contract = document.createElement("p");
    contract.textContent = element.contract;

    const location = document.createElement("p");
    location.textContent = element.location;

    const createDot = () => {
      const dot = document.createElement("span");
      dot.className = "dot";
      return dot;
    };

    jobDetails.appendChild(date);
    jobDetails.appendChild(createDot());
    jobDetails.appendChild(contract);
    jobDetails.appendChild(createDot());
    jobDetails.appendChild(location);

    cardHeader.appendChild(jobDetails);

    const sectionJobSkills = document.createElement("section");

    const role = document.createElement("button");
    role.className = "button";
    role.textContent = element.role;

    sectionJobSkills.appendChild(role);

    const level = document.createElement("button");
    level.className = "button";
    level.textContent = element.level;

    sectionJobSkills.appendChild(level);

    element.languages.forEach((language) => {
      const languageUsed = document.createElement("button");
      languageUsed.className = "button";
      languageUsed.textContent = language;

      sectionJobSkills.appendChild(languageUsed);
    });

    element.tools.forEach((tool) => {
      const toolsUsed = document.createElement("button");
      toolsUsed.className = "button";
      toolsUsed.textContent = tool;

      sectionJobSkills.appendChild(toolsUsed);
    });

    divCard.appendChild(cardHeader);
    divCard.appendChild(sectionJobSkills);
    container.appendChild(divCard);
  });

  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.onclick = (evt) => {
      const value = evt.target.textContent;

      if (!filters.includes(value)) {
        filters.push(value);
      } else {
        filters = filters.filter((f) => f !== value);
      }

      renderDivs();
      divWithFilters();
    };
  });
}

function divWithFilters() {
  let divFilters = document.getElementById("div-with-filters");

  if (divFilters) {
    divFilters.innerHTML = "";
  } else {
    divFilters = document.createElement("div");
    divFilters.id = "div-with-filters";
    divFilters.className = "animation-enter";
    document.body.appendChild(divFilters);
  }

  filters.forEach((f) => {
    const buttonRemove = document.createElement("img");
    buttonRemove.src = "images/icon-remove.svg";

    const chosenFilter = document.createElement("button");
    chosenFilter.className = "button";
    chosenFilter.innerHTML = f;

    chosenFilter.appendChild(buttonRemove);

    divFilters.appendChild(chosenFilter);

    chosenFilter.addEventListener("click", () => {
      filters = filters.filter((item) => item !== f);

      renderDivs();
      divWithFilters();
    });
  });

  if (divFilters.childNodes.length === 0) {
    divFilters.className = "animation-exit";
    document.body.classList.add("block-input");
    divFilters.addEventListener("animationend", ()=> {
      document.body.classList.remove("block-input");
      divFilters.remove();
    })
  }
}

//Adicionar Animation