var organizationNames = [];
function grabOrganizationName() {
  var organizationElement = document.querySelector('.organizationName');

  if (organizationElement) {
    var organizationName = organizationElement.textContent.trim();
    organizationNames.push(organizationName);
    console.log('Request Accepted', organizationNames);
  } else {
    console.log('Element with class "organizationName" not found.');
  }
}
function grabOrganizationName1() {
    var organizationElement = document.querySelector('.organizationName1');
  
    if (organizationElement) {
      var organizationName = organizationElement.textContent.trim();
      organizationNames.push(organizationName);
      console.log('Request Accepted', organizationNames);
    } else {
      console.log('Element with class "organizationName" not found.');
    }
  }
  function grabOrganizationName2() {
    var organizationElement = document.querySelector('.organizationName2');
  
    if (organizationElement) {
      var organizationName = organizationElement.textContent.trim();
      organizationNames.push(organizationName);
      console.log('Request Accepted', organizationNames);
    } else {
      console.log('Element with class "organizationName" not found.');
    }
  }
  function grabOrganizationName3() {
    var organizationElement = document.querySelector('.organizationName3');
  
    if (organizationElement) {
      var organizationName = organizationElement.textContent.trim();
      organizationNames.push(organizationName);
      console.log('Request Accepted', organizationNames);
    } else {
      console.log('Element with class "organizationName" not found.');
    }
  }
var grabButton = document.querySelector('.button2'); 
var grabButton1 = document.querySelector('.button21'); 
var grabButton2= document.querySelector('.button22'); 
var grabButton3 = document.querySelector('.button23'); 
grabButton.addEventListener('click', grabOrganizationName);
grabButton1.addEventListener('click', grabOrganizationName1);
grabButton2.addEventListener('click', grabOrganizationName2);
grabButton3.addEventListener('click', grabOrganizationName3);
