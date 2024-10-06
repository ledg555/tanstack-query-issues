import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { State } from "../interfaces";
import { useLabels } from "../hooks/useLabels";
import Pagination from "../components/Pagination";

export const ListView = () => {
  const { labelsQuery } = useLabels();
  const [filteredLabels, setFilteredLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>(State.All);
  const [page, setPage] = useState("1");
  const { issuesQuery } = useIssues({
    labels: labelsQuery.data ?? [],
    state,
    filteredLabels,
    page
  });

  function handleToggleLabel(labelName: string) {
    if (filteredLabels.includes(labelName)) {
      setFilteredLabels(filteredLabels.filter((l) => l !== labelName));
    } else {
      setFilteredLabels([...filteredLabels, labelName]);
    }
  }

  const issues = issuesQuery.data?.issues ?? [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isFetching ? (
          <p>Loading...</p>
        ) : (
          <>
            <IssueList issues={issues} onStateChange={setState} state={state} />
            <Pagination page={page} links={issuesQuery.data?.paginationLinks} setPage={setPage}/>
          </>
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          labelsQuery={labelsQuery}
          filteredLabels={filteredLabels}
          handleToggleLabel={handleToggleLabel}
        />
      </div>
    </div>
  );
};
