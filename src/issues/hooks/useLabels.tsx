import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/getLabels";

export function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 10,
    // placeholderData: [
    // {
    //   id: 127893911,
    //   node_id: "MDU6TGFiZWwxMjc4OTM5MTE=",
    //   url: "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
    //   name: "Component: DOM",
    //   color: "fef2c0",
    //   default: false,
    // },
    // {
    //   id: 710400704,
    //   node_id: "MDU6TGFiZWw3MTA0MDA3MDQ=",
    //   url: "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer",
    //   name: "Component: Test Renderer",
    //   color: "006b75",
    //   default: false,
    // },
    // ],
    // initialData: [
    //   {
    //     id: 127893911,
    //     node_id: "MDU6TGFiZWwxMjc4OTM5MTE=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
    //     name: "Component: DOM",
    //     color: "fef2c0",
    //     default: false,
    //   },
    //   {
    //     id: 710400704,
    //     node_id: "MDU6TGFiZWw3MTA0MDA3MDQ=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer",
    //     name: "Component: Test Renderer",
    //     color: "006b75",
    //     default: false,
    //   },
    // ],
  });
  return { labelsQuery };
}
