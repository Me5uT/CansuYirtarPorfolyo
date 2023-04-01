import React from "react";
import { GeneralServices } from "../services/Services";

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
  const [tagNames, setTagNames] = React.useState<string>("");

  React.useEffect(() => {
    const tag = GeneralServices.generateHashtags(tags);
    setTagNames(tag);
  }, []);

  return (
    <article className="post-card">
      <span className="post-card-inner" onClick={onClick}>
        <span className="post-card-info">
          <div>{`${GeneralServices.dateFormatByLocale(lastUpdateDate)}`}</div>
        </span>
        <span className="h4 post-card-title">{title}</span>

        {<span className="post-card-info post-card-tags">{`${tagNames}`}</span>}
      </span>
    </article>
  );
};
