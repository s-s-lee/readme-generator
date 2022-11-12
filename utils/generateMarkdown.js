// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](${renderLicenseLink(license)})`
  }
  else if (license === "BSD") {
    return `[![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)](${renderLicenseLink(license)})`
  }
  else if (license === "GNU") {
    return `[![License: GNU](https://img.shields.io/badge/license-GNU-red)](${renderLicenseLink(license)})`
  }  
  else if (license === "MIT") {
    return `[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](${renderLicenseLink(license)})`
  }
  else if (license === "") {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }
  else if (license === "BSD") {
    return "https://opensource.org/licenses/BSD-2-Clause"
  }
  else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }  
  else if (license === "MIT") {
    return "https://lbesson.mit-license.org/"
  }
  else if (license === "") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseSection = `
  ## License
  ${renderLicenseBadge(license)}
    `;
    return licenseSection;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const { username, email, title, description, installation, usage, contribute, test, license } = data;
  // let customReadme = '';
  return `# ${data.title}
  ## Description

  ${data.description}
  ## Table of Contents
  * [Installation](##-Installation)
  * [Usage](##-Usage)
  * [License](##-Installation)
  * [Contribute](##-Contribute)
  * [Testing](##-Testing)
  * [Questions](##-Contact)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Testing
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contact
  * GitHub user: ${data.username} 
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
