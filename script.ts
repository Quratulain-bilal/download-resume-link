 // script.ts

// Function to generate the resume
var generateResume = () => {
  const getInputValue = (id: string): string => {
    const element = document.getElementById(id) as HTMLInputElement;
    return element ? element.value : "";
  };

  const name = getInputValue("name");
  const email = getInputValue("email");
  const phone = getInputValue("phone");
  const address = getInputValue("address");
  const jobTitle = getInputValue("jobTitle");
  const company = getInputValue("company");
  const years = getInputValue("years");
  const school = getInputValue("school");
  const degree = getInputValue("degree");
  const gradYear = getInputValue("gradYear");
  const skills = getInputValue("skills");
  const languages = getInputValue("languages");

  const setDisplayValue = (id: string, value: string) => {
    const displayElement = document.getElementById(id) as HTMLElement;
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
  const fileInputElement = document.getElementById("resumePic") as HTMLInputElement;
  const displayPicElement = document.getElementById("displayPic") as HTMLImageElement;

  if (fileInputElement?.files && fileInputElement.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        displayPicElement.src = e.target.result as string;
        displayPicElement.style.display = "block";
      }
    };
    reader.readAsDataURL(fileInputElement.files[0]);
  }

  // Show the generated resume
  const resumeDisplayElement = document.getElementById("resumeDisplay") as HTMLElement;
  if (resumeDisplayElement) {
    resumeDisplayElement.classList.remove("hidden");
  }
};

// Generate shareable link
var generateShareableLink = () => {
  const resumeData = {
    name: (document.getElementById("displayName") as HTMLElement).innerText,
    email: (document.getElementById("displayEmail") as HTMLElement).innerText,
    phone: (document.getElementById("displayPhone") as HTMLElement).innerText,
    address: (document.getElementById("displayAddress") as HTMLElement).innerText,
    jobTitle: (document.getElementById("displayJobTitle") as HTMLElement).innerText,
    company: (document.getElementById("displayCompany") as HTMLElement).innerText,
    years: (document.getElementById("displayYears") as HTMLElement).innerText,
    school: (document.getElementById("displaySchool") as HTMLElement).innerText,
    degree: (document.getElementById("displayDegree") as HTMLElement).innerText,
    gradYear: (document.getElementById("displayGradYear") as HTMLElement).innerText,
    skills: (document.getElementById("displaySkills") as HTMLElement).innerText,
    languages: (document.getElementById("displayLanguages") as HTMLElement).innerText,
  };

  // Convert resume data to a query string format for the URL
  const queryString = new URLSearchParams(resumeData).toString();
  const shareableLink = `${window.location.href}?${queryString}`;

  const linkElement = document.getElementById("link") as HTMLElement;
  if (linkElement) {
    linkElement.innerText = shareableLink;
  }

  // Display shareable link
  const shareableLinkElement = document.getElementById("shareableLiink") as HTMLElement;
  if (shareableLinkElement) {
    shareableLinkElement.style.display = "block";
  }
};

// Download resume
var downloadResume = () => {
  const resumeDisplayElement = document.getElementById("resumeDisplay") as HTMLElement;
  if (!resumeDisplayElement) return;

  const resumeContent = resumeDisplayElement.innerHTML;
  const blob = new Blob([resumeContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const aElement = document.createElement("a");
  aElement.href = url;
  aElement.download = "resume.html";
  document.body.appendChild(aElement);
  aElement.click();
  document.body.removeChild(aElement);
};

// Event listeners
var addEventListeners = () => {
  const generateResumeButton = document.getElementById("generateResume");
  const shareLinkButton = document.getElementById("shareLink");
  const downloadButton = document.getElementById("downloadBtn");

  generateResumeButton?.addEventListener("click", generateResume);
  shareLinkButton?.addEventListener("click", generateShareableLink);
  downloadButton?.addEventListener("click", downloadResume);
};

// Initialize event listeners
addEventListeners();
