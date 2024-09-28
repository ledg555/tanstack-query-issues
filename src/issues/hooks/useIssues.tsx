import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";
import { State } from "../interfaces";

interface UseIssuesParams {
  state: State,
  filteredLabels: string[]
}

export function useIssues({state, filteredLabels}: UseIssuesParams) {
  const issuesQuery = useQuery({
    queryKey: ["issues", {state, filteredLabels}],
    queryFn: () => getIssues(state, filteredLabels),
    staleTime: 1000*60,
  });

  return {issuesQuery,};
}