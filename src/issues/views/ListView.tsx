import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';
import {State} from "../interfaces";

export const ListView = () => {
  const [state, setState] = useState<State>(State.All)
  const [filteredLabels, setFilteredLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues({state, filteredLabels});

  function handleToggleLabel(labelName: string) {
    if (filteredLabels.includes(labelName)) {
      setFilteredLabels(filteredLabels.filter((l) => l !== labelName));
    } else {
      setFilteredLabels([...filteredLabels, labelName]);
    }
  }

  const issues = issuesQuery.data ?? [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isFetching
        ? <p>Loading...</p>
        : <IssueList issues={issues} onStateChange={setState} state={state}/>}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker filteredLabels={filteredLabels} handleToggleLabel={handleToggleLabel}/>
      </div>
    </div>
  );
};
