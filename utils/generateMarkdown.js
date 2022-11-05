// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, installation, usage, contribute, test, license } = data;
  let customReadme = '';
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
    ${data.license}
    ## Contact
    For questions, contact ${data.username} at ${data.email}
`;
}

module.exports = generateMarkdown;
