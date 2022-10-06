import { faker } from "@faker-js/faker";

export const CommentDetails = ({ content, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.fullName()}
        </a>
        <div className="metadata">
          <span className="date">{new Date().toUTCString()}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};
