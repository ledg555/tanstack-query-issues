import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";

export function useIssues() {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000*60,
  });

  return {issuesQuery,};
}