import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { IContentModel } from "../models/ContentModel";
import { GeneralServices } from "../services/Services";

interface ITherapyDetailProps {
  therapy?: IContentModel;
}

export const TherapyDetail: React.FC<ITherapyDetailProps> = ({ therapy }) => {
  const postLink = window.location.href;

  const shareOnTwitter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postLink
    )}`;
    window.open(shareUrl, "_blank", "width=550,height=450");
  };

  return (
    <div className="post-container">
      <h1 className="title">{therapy?.mainTitle}</h1>
      <p className="post-meta">
        <span>{therapy?.tags.map((t) => `#${t}`).join(", ")}</span>
      </p>
      <hr className="post-header-divider" />

      <article className="prose"> &nbsp;{therapy?.description}</article>

      <hr />
      <p className="twitter-share-container">
        Postu Twitter'da Paylaşmak için{" "}
        <a className="twitter-share-link" href={`#`} onClick={shareOnTwitter}>
          <TwitterIcon className="twitter-share-icon" />
          Tıklayın.
        </a>
      </p>
    </div>
  );
};
