import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/getIssue";

export function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000*60,
  });

  return {issueQuery,};
}