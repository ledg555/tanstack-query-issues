import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import { GithubIssue, State } from "../interfaces";
import { QueryFunctionContext } from "@tanstack/react-query";
import { parseLinkHeader, HeaderLinks } from "../../helpers/parseLinkHeader";

interface QueryKeyContext {
  state: State;
  filteredLabelsKey: Record<string, boolean>;
  page: string;
}

interface AxiosData {
  issues: GithubIssue[];
  paginationLinks: HeaderLinks;
}

export async function getIssues({
  queryKey,
}: QueryFunctionContext<[string, QueryKeyContext]>): Promise<AxiosData> {
  const [_key, { state, filteredLabelsKey, page }] = queryKey;
  const filteredLabels = Object.entries(filteredLabelsKey)
    .filter((entry) => entry[1])
    .map((entry) => entry[0]);

  await sleep(500);
  const params = new URLSearchParams();
  params.append("state", state);
  if (filteredLabels.length > 0) params.append("labels", filteredLabels.join());
  params.append("per_page", "4");
  params.append("page", page);
  const { data, headers } = await githubApi.get<GithubIssue[]>(`/${_key}`, {
    params,
  });
  return { issues: data, paginationLinks: parseLinkHeader(headers.link) };
}
