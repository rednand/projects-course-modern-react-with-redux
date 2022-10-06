import React from "react";
import { CommentDetails } from "./components/CommentDetails";
import { ApprovalCard } from "./components/ApprovalCard";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments link cards">
      <ApprovalCard>
        <CommentDetails
          content={"Nice blog post"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          content={"I like subject"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          content={"Nice blog post"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          content={"I like subject"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
