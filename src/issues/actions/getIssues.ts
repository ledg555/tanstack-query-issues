import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue, State} from "../interfaces"

export async function getIssues(state: State): Promise<GithubIssue[]> {
  await sleep(500);
  const params = new URLSearchParams();
  if (state !== State.All) params.append("state", state)
  const {data} = await githubApi.get<GithubIssue[]>("/issues", {params});
  return data;
}