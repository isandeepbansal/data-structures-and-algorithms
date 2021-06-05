import ReactMarkdown from "react-markdown";
import PageHeading from "../../components/PageHeading";
import README from "./README.md.js";

const BigO = () => {
  return (
    <>
      <PageHeading>Big O</PageHeading>
      <ReactMarkdown>{README}</ReactMarkdown>
    </>
  );
};

export default BigO;
