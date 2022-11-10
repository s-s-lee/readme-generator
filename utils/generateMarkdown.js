// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)"
  }
  else if (license === "Creative Commons") {
    return "[![licensebuttons by-nd](https://licensebuttons.net/l/by-nd/3.0/88x31.png)](https://creativecommons.org/licenses/by-nd/4.0)"
  }
  else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if (license === "MIT") {
    return "[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://lbesson.mit-license.org/)"
  }
  else if (license === "Open Data Commons") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
  }
  else if (license === "Other") {
    return "[![License: Other](https://img.shields.io/badge/license-Other-lightgrey.svg)]";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const { username, email, title, description, installation, usage, contribute, test, license } = data;
  // let customReadme = '';
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.installation}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribute
  ${data.contribute}
  ## Testing
  ${data.test}
  ##License
  License used: ${renderLicenseBadge(data)} ${data.license}
  ## Contact
  For questions, contact ${data.username} at ${data.email}
`;
}

module.exports = generateMarkdown;
