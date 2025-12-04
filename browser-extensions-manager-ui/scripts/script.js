const sectionExtensions = document.getElementById("section-extensions");
const endPoint = "data.json";

const info = (endPoint, sectionExtensions) => {
    fetch(endPoint)
    .then((res) => res.json())
    .then((res) => {
        res.forEach((element) => {
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

            const toggleSwitch = document.createElement("label");
            toggleSwitch.className = "switch";

            const inputCheckBox = document.createElement("input");
            inputCheckBox.className = "checkbox";
            inputCheckBox.type = "checkbox";

            const slider = document.createElement("span");
            slider.className = "slider";

            divToggleRemove.appendChild(buttonRemove);

            toggleSwitch.appendChild(inputCheckBox);
            toggleSwitch.appendChild(slider);

            divToggleRemove.appendChild(toggleSwitch);

            divExtension.appendChild(divExtensionInfo);
            divExtension.appendChild(divToggleRemove);

            sectionExtensions.appendChild(divExtension);
        });
    });
};

info(endPoint, sectionExtensions);