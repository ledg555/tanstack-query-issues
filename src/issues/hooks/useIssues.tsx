import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";
import { GitHubLabel, State } from "../interfaces";
import { useState } from "react";

interface UseIssuesParams {
  labels: GitHubLabel[],
  state: State,
  filteredLabels: string[],
  page: string
}

type filteredLabelsKeyType = Record<string, boolean>;

export function useIssues({labels, state, filteredLabels, page}: UseIssuesParams) {

  const filteredLabelsKey: filteredLabelsKeyType = {};
  labels.forEach(label => filteredLabelsKey[label.name] = false);
  filteredLabels.forEach( label => filteredLabelsKey[label] = true);

  const issuesQuery = useQuery({
    queryKey: ["issues", {state, filteredLabelsKey, page}],
    queryFn: getIssues,
    staleTime: 1000*60,
  });

  return {issuesQuery,};
}