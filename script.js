var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if ((skills === null || skills === void 0 ? void 0 : skills.style.display) === "none") {
        skills.style.display = "block";
    }
    else {
        skills === null || skills === void 0 ? void 0 : skills.style.display = "none";
    }
});
