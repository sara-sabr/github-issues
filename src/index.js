import { lab } from 'd3';
import _ from 'lodash';
//Get manually created list of issues, labels and milestones
import issues from "~/repoIssues.json"
import labels from "~/repoLabels.json"
import milestones from "~/repoMilestones.json"

const myIssues = issues

function isInitiative(labelName, prefix) {
  let isValid = false;
  if (typeof labelName === "string" || labelName !== '') {
    isValid = true;
  } else {
    return 0
  }

  if (isValid === true) {
    let prefixIndex = labelName.indexOf(prefix)
  } else {
    return 0
  }

}

function findInitiativesIDsFromLabels() {
  let initiativesIDs = [];
  if (Array.isArray(labels)) {
    console.log("this is an array")
    labels.forEach(label => {
      if (label.name.includes("initiative:")) {
        console.log("name: " + label.name)
        if (isInitiative(label.name, "initiative:") !== 0){
          initiativesIDs.push(label.id)
        }
      }
    })
  }
  console.log(initiativesIDs)
}
// function component() {

//   let counter = 0;
//   for ( element in issues){
//     const element = document.createElement('div');
//     element.innerHTML = _.join(element);
//   }

//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Magic', 'waiting', "to", "happen"], ' ');

//   return element;
// }

let thisIssue = issues[0]
let thisLabel = labels[0]
let thisMilestone = milestones[0]
// console.log(thisIssue)
// console.log(thisLabel)
// console.log(thisMilestone)
findInitiativesIDsFromLabels()
// document.body.appendChild(component());
