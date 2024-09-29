import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";
import { GitHubLabel, State } from "../interfaces";

interface UseIssuesParams {
  labels: GitHubLabel[],
  state: State,
  filteredLabels: string[]
}

type filteredLabelsKeyType = Record<string, boolean>;

export function useIssues({labels, state, filteredLabels}: UseIssuesParams) {
  
  const filteredLabelsKey: filteredLabelsKeyType = {};
  labels.forEach(label => filteredLabelsKey[label.name] = false);
  filteredLabels.forEach( label => filteredLabelsKey[label] = true);

  const issuesQuery = useQuery({
    queryKey: ["issues", {state, filteredLabelsKey}],
    queryFn: () => getIssues(state, filteredLabels),
    staleTime: 1000*60,
  });

  return {issuesQuery,};
}