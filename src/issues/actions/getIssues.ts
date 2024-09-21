import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue} from "../interfaces"

export async function getIssues(): Promise<GithubIssue[]> {
  await sleep(500);
  const {data} = await githubApi.get<GithubIssue[]>("/issues");
  return data;
}