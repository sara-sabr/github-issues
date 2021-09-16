import { Octokit } from 'octokit';

const octokit = new Octokit();
// eslint-disable-next-line camelcase
async function listIssues(owner, repo, per_page) {
  const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
    owner,
    repo,
    per_page,
  }).then((value) => {
    if (!value) {
      throw Error('Error loading issues');
    }
    return value;
  });
  return issues;
}
// eslint-disable-next-line camelcase
async function listRepoMilestones(owner, repo, per_page) {
  const repoMilestones = await octokit.paginate(octokit.rest.issues.listMilestones, {
    owner,
    repo,
    per_page,
  });
  return repoMilestones;
}
// eslint-disable-next-line camelcase
async function listRepoLabels(owner, repo, per_page) {
  const repoLabels = await octokit.paginate(octokit.rest.issues.listLabelsForRepo, {
    owner,
    repo,
    per_page,
  });
  return repoLabels;
}

// eslint-disable-next-line camelcase
export function getIssuesList(owner, repo, per_page) {
  const issuesList = [];
  listIssues(owner, repo, per_page).then((response) => {
    response.forEach((value) => {
      issuesList.push(value);
    });
  }).catch((err) => { throw Error(err); });
  if (issuesList) {
    return issuesList;
  }
  return undefined;
}

// eslint-disable-next-line camelcase
export function getMilestonesList(owner, repo, per_page) {
  const milestonesList = [];
  listRepoMilestones(owner, repo, per_page).then((response) => {
    response.forEach((value) => {
      milestonesList.push(value);
    });
  }).catch((err) => { throw Error(err); });
  if (milestonesList) {
    return milestonesList;
  }
  return undefined;
}

// eslint-disable-next-line camelcase
export function getRepoLabelList(owner, repo, per_page) {
  const repoLabelsList = [];
  listRepoLabels(owner, repo, per_page).then((response) => {
    response.forEach((value) => {
      repoLabelsList.push(value);
    });
  }).catch((err) => { throw Error(err); });
  if (repoLabelsList) {
    return repoLabelsList;
  }
  return undefined;
}

// listRepoLabels("sara-sabr", "ITStrategy", 100);
