// Get manually created list of issues, labels and milestones
// import issues from '~/repoIssues.json';
// import labels from '~/repoLabels.json';
// import milestones from '~/repoMilestones.json';
import { getIssuesList, getMilestonesList } from './getRepoData';

// Set org, repo and number per page
const config = {
  org: 'sara-sabr',
  repo: 'ITStrategy',
  per_page: 100,
};

const issues = getIssuesList(config.org, config.repo, config.per_page);
const milestones = getMilestonesList(config.org, config.repo, config.per_page);
// eslint-disable-next-line no-console
console.log(issues);
// eslint-disable-next-line no-console
console.log(milestones);

// function isInitiative(labelName, prefix) {
//   let isValid = false;
//   if (typeof labelName === 'string' || labelName !== '') {
//     isValid = true;
//   } else {
//     return 0;
//   }

//   if (isValid === true) {
//     const prefixIndex = labelName.indexOf(prefix);
//   } else {
//     return 0;
//   }
//   return isValid;
// }

// function findInitiativesIDsFromLabels() {
//   const initiativesIDs = [];
//   if (Array.isArray(labels)) {
//     console.log('this is an array');
//     labels.forEach((label) => {
//       if (label.name.includes('initiative:')) {
//         console.log(`name: ${label.name}`);
//         if (isInitiative(label.name, 'initiative:') !== 0) {
//           initiativesIDs.push(label.id);
//         }
//       }
//     });
//   }
//   console.log(initiativesIDs);
// }
