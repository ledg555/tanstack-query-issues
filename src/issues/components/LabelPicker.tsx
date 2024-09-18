import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const {labelsQuery} = useLabels();

  if (labelsQuery.isLoading) return(
    <div>Loading...</div>
  )

  return (
    <div className="flex flex-wrap gap-2 animate-fadeIn">
      {labelsQuery.data?.map( label => (
        <span key={label.id}
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
        style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
      >
        {label.name}
      </span>
      ))}
    </div>
  );
};
