import { UseQueryResult } from "@tanstack/react-query";
import { GitHubLabel } from "../interfaces";

interface LabelPickerProps {
  labelsQuery: UseQueryResult<GitHubLabel[], Error>;
  filteredLabels: string[];
  handleToggleLabel: (label: string) => void;
}

export const LabelPicker = ({labelsQuery, filteredLabels, handleToggleLabel}: LabelPickerProps) => {

  if (labelsQuery.isLoading) return(
    <div>Loading...</div>
  )


  return (
    <div className="flex flex-wrap gap-2 animate-fadeIn">
      {labelsQuery.data?.map( label => (
        <span key={label.id}
        className={`px-2 py-1 rounded-full text-xs font-semibold ${filteredLabels.includes(label.name) && "bg-slate-600 shadow-sm shadow-white"} hover:bg-slate-800 cursor-pointer animate-fadeIn text-slate-100`}
        style={{ border: `1px solid #${label.color}` }}
        onClick={() => handleToggleLabel(label.name)}
      >
        {label.name}
      </span>
      ))}
    </div>
  );
};
