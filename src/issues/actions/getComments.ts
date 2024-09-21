import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssueComment} from "../interfaces"

export async function getComments(issueNumber: number): Promise<GithubIssueComment[]> {
  await sleep(1000);
  const {data} = await githubApi.get<GithubIssueComment[]>(`/issues/${issueNumber}/comments`);
  return data;
}