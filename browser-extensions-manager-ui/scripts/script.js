const sectionExtensions = document.getElementById("section-extensions");
const endPoint = "data.json";

let extensionsData = [];
let filter = "All";

const renderExtensions = () => {
  sectionExtensions.innerHTML = "";

  extensionsData.forEach((element) => {
    if (
      filter === "All" ||
      (filter === "Active" && element.active) ||
      (filter === "Inactive" && !element.active)
    ) {
      const divExtension = document.createElement("div");
      divExtension.className = "div-extension";

      const divExtensionInfo = document.createElement("div");
      divExtensionInfo.className = "extension-info";

      const extensionImage = document.createElement("img");
      extensionImage.src = element.logo;
      extensionImage.alt = element.name;

      divExtensionInfo.appendChild(extensionImage);

      const divExtesionInfoText = document.createElement("div");
      divExtesionInfoText.className = "extension-info-text";

      const extensionName = document.createElement("h1");
      extensionName.textContent = element.name;

      const extensionDescription = document.createElement("p");
      extensionDescription.textContent = element.description;

      divExtesionInfoText.appendChild(extensionName);
      divExtesionInfoText.appendChild(extensionDescription);

      divExtensionInfo.appendChild(divExtesionInfoText);

      const divToggleRemove = document.createElement("div");
      divToggleRemove.classList = "toggle-remove-wrapper";

      const buttonRemove = document.createElement("button");
      buttonRemove.className = "button-remove";
      buttonRemove.textContent = "remove";

      // Function remove

      const toggleSwitch = document.createElement("label");
      toggleSwitch.className = "switch";

      const inputCheckBox = document.createElement("input");
      inputCheckBox.className = "checkbox";
      inputCheckBox.type = "checkbox";

      const slider = document.createElement("span");
      slider.className = "slider";

      inputCheckBox.addEventListener("change", (e) => {
        element.active = e.target.checked;
        setTimeout(() => {
            renderExtensions();
        }, 500);
      });

      divToggleRemove.appendChild(buttonRemove);

      toggleSwitch.appendChild(inputCheckBox);
      toggleSwitch.appendChild(slider);

      divToggleRemove.appendChild(toggleSwitch);

      divExtension.appendChild(divExtensionInfo);
      divExtension.appendChild(divToggleRemove);

      sectionExtensions.appendChild(divExtension);
    }
  });
};

fetch(endPoint)
  .then((res) => res.json())
  .then((res) => {
    extensionsData = res.map((ext) => ({ ...ext, active: false }));

    renderExtensions()

    listButtons.forEach((liButton) => {
      liButton.addEventListener("click", (evt) => {
        listButtons.forEach((btn) => btn.classList.remove("active"));
        evt.target.classList.add("active");

        filter = evt.target.textContent;
        renderExtensions();
      });
    });
  });

const changeThemeBtn = document.getElementById("change-theme");
const logoImage = document.getElementById("logo");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    logoImage.src = "assets/images/logo.svg";
    changeThemeBtn.src = "assets/images/icon-moon.svg";
  } else {
    document.body.classList.remove("light");
    logoImage.src = "assets/images/dark-logo.svg";
    changeThemeBtn.src = "assets/images/icon-sun.svg";
  }
}

// Carregar tema salvo no localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

changeThemeBtn.addEventListener("click", (evt) => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});