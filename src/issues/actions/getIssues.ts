import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue} from "../interfaces"

export async function getIssues(): Promise<GithubIssue[]> {
  await sleep(5000);
  const {data} = await githubApi.get<GithubIssue[]>("/issues");
  return data;
}