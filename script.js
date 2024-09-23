// script.ts
// Function to generate the resume
var generateResume = function () {
    var getInputValue = function (id) {
        var element = document.getElementById(id);
        return element ? element.value : "";
    };
    var name = getInputValue("name");
    var email = getInputValue("email");
    var phone = getInputValue("phone");
    var address = getInputValue("address");
    var jobTitle = getInputValue("jobTitle");
    var company = getInputValue("company");
    var years = getInputValue("years");
    var school = getInputValue("school");
    var degree = getInputValue("degree");
    var gradYear = getInputValue("gradYear");
    var skills = getInputValue("skills");
    var languages = getInputValue("languages");
    var setDisplayValue = function (id, value) {
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.innerText = value;
        }
    };
    // Set display values
    setDisplayValue("displayName", name);
    setDisplayValue("displayEmail", email);
    setDisplayValue("displayPhone", phone);
    setDisplayValue("displayAddress", address);
    setDisplayValue("displayJobTitle", jobTitle);
    setDisplayValue("displayCompany", company);
    setDisplayValue("displayYears", years);
    setDisplayValue("displaySchool", school);
    setDisplayValue("displayDegree", degree);
    setDisplayValue("displayGradYear", gradYear);
    setDisplayValue("displaySkills", skills);
    setDisplayValue("displayLanguages", languages);
    // Handle picture upload
    var fileInputElement = document.getElementById("resumePic");
    var displayPicElement = document.getElementById("displayPic");
    if ((fileInputElement === null || fileInputElement === void 0 ? void 0 : fileInputElement.files) && fileInputElement.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                displayPicElement.src = e.target.result;
                displayPicElement.style.display = "block";
            }
        };
        reader.readAsDataURL(fileInputElement.files[0]);
    }
    // Show the generated resume
    var resumeDisplayElement = document.getElementById("resumeDisplay");
    if (resumeDisplayElement) {
        resumeDisplayElement.classList.remove("hidden");
    }
};
// Generate shareable link
var generateShareableLink = function () {
    var resumeData = {
        name: document.getElementById("displayName").innerText,
        email: document.getElementById("displayEmail").innerText,
        phone: document.getElementById("displayPhone").innerText,
        address: document.getElementById("displayAddress").innerText,
        jobTitle: document.getElementById("displayJobTitle").innerText,
        company: document.getElementById("displayCompany").innerText,
        years: document.getElementById("displayYears").innerText,
        school: document.getElementById("displaySchool").innerText,
        degree: document.getElementById("displayDegree").innerText,
        gradYear: document.getElementById("displayGradYear").innerText,
        skills: document.getElementById("displaySkills").innerText,
        languages: document.getElementById("displayLanguages").innerText,
    };
    // Convert resume data to a query string format for the URL
    var queryString = new URLSearchParams(resumeData).toString();
    var shareableLink = "".concat(window.location.href, "?").concat(queryString);
    var linkElement = document.getElementById("link");
    if (linkElement) {
        linkElement.innerText = shareableLink;
    }
    // Display shareable link
    var shareableLinkElement = document.getElementById("shareableLiink");
    if (shareableLinkElement) {
        shareableLinkElement.style.display = "block";
    }
};
// Download resume
var downloadResume = function () {
    var resumeDisplayElement = document.getElementById("resumeDisplay");
    if (!resumeDisplayElement)
        return;
    var resumeContent = resumeDisplayElement.innerHTML;
    var blob = new Blob([resumeContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var aElement = document.createElement("a");
    aElement.href = url;
    aElement.download = "resume.html";
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
// Event listeners
var addEventListeners = function () {
    var generateResumeButton = document.getElementById("generateResume");
    var shareLinkButton = document.getElementById("shareLink");
    var downloadButton = document.getElementById("downloadBtn");
    generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener("click", generateResume);
    shareLinkButton === null || shareLinkButton === void 0 ? void 0 : shareLinkButton.addEventListener("click", generateShareableLink);
    downloadButton === null || downloadButton === void 0 ? void 0 : downloadButton.addEventListener("click", downloadResume);
};
// Initialize event listeners
addEventListeners();
