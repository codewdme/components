import React from "react";
import PageNav from "./PageNav";
import FilterSection from "./FilterSection";
import Cars from "./Cars";

function Collection() {
  const results = [1, 2, 3, 4, 5];
  return (
    <div className="bg-white px-16">
      <PageNav />
      <FilterSection results={results} />
      <Cars />
    </div>
  );
}

export default Collection;
