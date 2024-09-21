import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue} from "../interfaces"

export async function getIssue(issueNumber: number): Promise<GithubIssue> {
  await sleep(2000);
  const {data} = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);
  return data;
}