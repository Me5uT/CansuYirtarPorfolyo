import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { IContentModel } from "../models/ContentModel";
import { Services } from "../services/Services";

interface ITherapyDetailProps {
  therapy?: IContentModel;
}

export const TherapyDetail: React.FC<ITherapyDetailProps> = ({ therapy }) => {
  return (
    <div>
      <h1 className="title">{therapy?.mainTitle}</h1>
      <p className="post-meta">
        <span>
          <time>
            {Services.dateFormatByLocale(therapy?.lastUpdateDate || new Date())}
          </time>
        </span>
        <span>•</span>
        <span>{therapy?.tags.map((t) => `#${t}`).join(", ")}</span>
      </p>
      <hr className="post-header-divider" />

      <article className="prose">{therapy?.description}</article>
      {therapy?.subContent?.map((content) => {
        return (
          <div>
            <h3>{content.title}</h3>
            <article className="prose">{content?.description}</article>
          </div>
        );
      })}
      <hr />
      <p className="twitter-share-container">
        Liked this post? Share it on{" "}
        <a
          target="_blank"
          href="{encodedShareUrl}"
          data-dnt="true"
          className="twitter-share-link"
          rel="noopener noreferrer nofollow"
        >
          <TwitterIcon className="twitter-share-icon" /> Twitter
        </a>
      </p>
    </div>
  );
};
