import _ from 'lodash';
import { Octokit } from 'octokit';

const octokit = new Octokit

export default async function listIssues(owner, repo, per_page) {
  const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
    owner: owner,
    repo: repo,
    per_page: per_page,
  });
  issues.forEach(issue => {
    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(issue);
    // element.innerHTML = issue;
    document.body.appendChild(element)
  })
  console.log(JSON.stringify(issues[0]))
}

export default async function listRepoMilestones(owner, repo, per_page) {
  const issues = await octokit.paginate(octokit.rest.issues.listMilestones, {
    owner: owner,
    repo: repo,
    per_page: per_page,
  });
  issues.forEach(issue => {
    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(issue);
    // element.innerHTML = issue;
    document.body.appendChild(element)
  })
  console.log(JSON.stringify(issues[0]))
}

export default async function listRepoLabels(owner, repo, per_page) {
  const issues = await octokit.paginate(octokit.rest.issues.listLabelsForRepo, {
    owner: owner,
    repo: repo,
    per_page: per_page,
  });
  issues.forEach(issue => {
    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(issue);
    // element.innerHTML = issue;
    document.body.appendChild(element)
  })
  console.log(JSON.stringify(issues[0]))
}

// listRepoLabels("sara-sabr", "ITStrategy", 100);
