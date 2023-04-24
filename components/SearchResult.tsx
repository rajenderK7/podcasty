import Link from "next/link";
import React from "react";

export interface SearchResultProps {
  title: string;
  _slug: string;
  clear: any;
}

const SearchResult = ({ title, _slug, clear }: SearchResultProps) => {
  return (
    <div className="p-1 border-b border-black">
      <Link href={`/podcasts/${_slug}`} onClick={() => clear()}>
        {title}
      </Link>
    </div>
  );
};

export default SearchResult;
