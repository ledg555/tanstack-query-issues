import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue} from "../interfaces"

export async function getIssue(issueNumber: number): Promise<GithubIssue> {
  const {data} = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);
  return data;
}