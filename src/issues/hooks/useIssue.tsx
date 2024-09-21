import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/getIssue";
import { getComments } from "../actions/getComments";

export function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000*60,
  });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () => getComments(issueNumber),
    staleTime: 1000*60,
  });

  return {issueQuery, commentsQuery,};
}