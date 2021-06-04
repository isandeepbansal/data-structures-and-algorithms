import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import PageHeading from "../../components/PageHeading";
import styles from "./Home.module.css";

const Home = () => {
  const TABLE_OF_CONTENT = [
    { id: "toc1", to: "/", title: "Big O", subTopics: [] },
    { id: "toc2", to: "/recursion", title: "Recursion", subTopics: [] },
    {
      id: "toc3",
      to: "/",
      title: "Sorting Algorithms",
      subTopics: [
        { id: "sa1", to: "/", title: "Bubble sort" },
        { id: "sa2", to: "/", title: "Merge sort" },
      ],
    },
  ];

  return (
    <div className="row">
      <PageHeading>Table of content</PageHeading>
      {TABLE_OF_CONTENT.map((item) => {
        return (
          <div className="col-sm-12 col-md-4" key={item.id}>
            <Link to={item.to}>
              <Card title={item.title}>
                {item.subTopics.length > 0 && (
                  <div className={styles.subTopics}>
                    {item.subTopics.map((topic) => {
                      return (
                        <div className={styles.subTopic} key={topic.id}>
                          {topic.title}
                        </div>
                      );
                    })}
                  </div>
                )}
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
