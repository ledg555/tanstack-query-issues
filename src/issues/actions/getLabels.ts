import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import { GitHubLabel } from "../interfaces";

export async function getLabels(): Promise<GitHubLabel[]> {
  await sleep(4000);

  const { data } = await githubApi.get<GitHubLabel[]>("/labels");

  console.log(data);
  return data;
}
