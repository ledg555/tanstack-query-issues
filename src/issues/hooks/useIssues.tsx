import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";
import { State } from "../interfaces";

interface UseIssuesParams {
  state: State,
}

export function useIssues({state}: UseIssuesParams) {
  const issuesQuery = useQuery({
    queryKey: ["issues", {state}],
    queryFn: () => getIssues(state),
    staleTime: 1000*60,
  });

  return {issuesQuery,};
}