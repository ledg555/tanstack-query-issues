import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import { GitHubLabel } from "../interfaces";

export async function getLabels(): Promise<GitHubLabel[]> {
  await sleep(200);
  const { data } = await githubApi.get<GitHubLabel[]>("/labels");
  return data;
}
