import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import {GithubIssue, State} from "../interfaces"

export async function getIssues(state: State, filteredLabels: string[]): Promise<GithubIssue[]> {
  await sleep(500);
  const params = new URLSearchParams();
  if (state !== State.All) params.append("state", state);
  if (filteredLabels.length > 0) params.append("labels", filteredLabels.join())
  const {data} = await githubApi.get<GithubIssue[]>("/issues", {params});
  return data;
}