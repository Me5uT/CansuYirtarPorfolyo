import React from "react";
import { PostServices } from "../services/Services";

interface IPostCardProps {
  onClick: () => void;
  title: string;
  tags: string[];
  lastUpdateDate: Date;
}

export const PostCard: React.FC<IPostCardProps> = ({
  onClick,
  tags,
  title,
  lastUpdateDate,
}) => {
  return (
    <article className="post-card">
      <span className="post-card-inner" onClick={onClick}>
        <span className="post-card-info">
          <div>{`${PostServices.dateFormatByLocale(lastUpdateDate)}`}</div>
        </span>
        <span className="h4 post-card-title">{title}</span>

        {
          <span className="post-card-info post-card-tags">{`${tags
            .map((tag) => `#${tag}`)
            .join(", ")}	`}</span>
        }
      </span>
    </article>
  );
};
