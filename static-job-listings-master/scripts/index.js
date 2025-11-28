const container = document.getElementById("container");
const endPoint = "data.json";

const info = (endPoint, container) => {
  fetch(endPoint)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element, index) => {
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
        role.textContent = element.role;

        sectionJobSkills.appendChild(role);

        const level = document.createElement("button");
        level.textContent = element.level;

        sectionJobSkills.appendChild(level);

        element.languages.forEach((language) => {
          const languageUsed = document.createElement("button");
          languageUsed.textContent = language;

          sectionJobSkills.appendChild(languageUsed);
        });

        element.tools.forEach((tool) => {
          const toolsUsed = document.createElement("button");
          toolsUsed.textContent = tool;

          sectionJobSkills.appendChild(toolsUsed);
        });

        divCard.appendChild(cardHeader);
        divCard.appendChild(sectionJobSkills);
        container.appendChild(divCard);
      });
    });
};

info(endPoint, container);
