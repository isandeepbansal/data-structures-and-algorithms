import React, { useEffect, useState } from "react";
import README from "./README.md";
import ReactMarkdown from "react-markdown";
import PageHeading from "../../components/PageHeading";

const BigO = () => {
  const [markDown, setMarkDown] = useState("");

  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((text) => setMarkDown(text));
  }, []);

  return (
    <>
      <PageHeading>Big O</PageHeading>
      <ReactMarkdown>{markDown}</ReactMarkdown>
    </>
  );
};

export default BigO;
