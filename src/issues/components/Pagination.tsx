import React from "react";
import { HeaderLinks } from "../../helpers/parseLinkHeader";

interface Props {
  page: string,
  links?: HeaderLinks,
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Pagination({page, links, setPage}: Props) {
  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      <button
        className={`p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all w-20 ${links?.first ? "" : "invisible"}`}
        onClick={() => (links ? setPage(links.first) : setPage("1"))}
      >
        First
      </button>
      <button
        className={`p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all w-20 ${links?.prev ? "" : "invisible"}`}
        onClick={() => (links ? setPage(links.prev) : setPage("1"))}
      >
        Previous
      </button>
      <span className="">
        {page} / {links ? (links.last || page) : "0"}
      </span>
      <button
        className={`p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all w-20 ${links?.next ? "" : "invisible"}`}
        onClick={() => (links ? setPage(links.next) : setPage("1"))}
      >
        Next
      </button>
      <button
        className={`p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all w-20 ${links?.last ? "" : "invisible"}`}
        onClick={() => (links ? setPage(links.last) : setPage("1"))}
      >
        Last
      </button>
    </div>
  );
}