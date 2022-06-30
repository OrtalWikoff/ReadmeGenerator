//generate the markdown:
function markdown(data) {
    return `
# Project Title: 
${data.title}
${data.getLicense}
# Description:
${data.description}
# Table of Contents: 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Contact Information](#-Contact-Information)
    
# Installation:
${data.installation}
# Usage: 
${data.usage}
# License: 
${data.license}
# Contributing 
${data.contributing}
# Tests:
${data.tests}
# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}
`;
}

//export the markdown function 
module.exports = markdown;