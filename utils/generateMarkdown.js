// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'APACHE 2.0'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license == 'GPL 3.0'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (license == 'BSD 3.0'){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }else if (license == 'Boost'){
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }else{
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return `https://opensource.org/licenses/MIT`
  } else if (license == 'APACHE 2.0'){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == 'GPL 3.0'){
    return `https://www.gnu.org/licenses/gpl-3.0`
  }else if (license == 'BSD 3.0'){
    return `https://opensource.org/licenses/BSD-3-Clause`
  }else if (license == 'Boost'){
    return `https://www.boost.org/LICENSE_1_0.txt`
  }else{
    return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT'){
    return `## Liscence
    
This projected is licensed under MIT.`
  } else if (license == 'APACHE 2.0'){
    return `## Liscence
    
This projected is licensed under APACHE 2.0.`
  } else if (license == 'GPL 3.0'){
    return `## Liscence
    
This projected is licensed under GPL 3.0.`
  }else if (license == 'BSD 3.0'){
    return `## Liscence
    
This projected is licensed under BSD 3.0.`
  }else if (license == 'Boost'){
    return `## Liscence
    
This projected is licensed under Boost.`
  }else{
    return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ## Table of Content
  - [Installation](#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)
  - [License] (#license)

  ## Installation

  ## Usage

  ## Contributing

  ## Tests

  ##Questions

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
