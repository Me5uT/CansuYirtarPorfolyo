import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const Home: React.FC = () => {
  return (
    <div>
      <h1 className="title">Cansu Yırtar</h1>
      <p className="subtitle h4">
        Hi there! I write about all things developer. Posts in my{" "}
        <a className="post-link header-links" href="/post/">
          <span data-content="Terapi Çeşitleri" aria-hidden="true"></span>Terapi
          Çeşitleri
        </a>{" "}
        are in various stages of done-ness. I upload in-depth tutorials and tech
        related videos on{" "}
        <a
          className="yt-link header-links"
          href="https://www.youtube.com/c/jonathanyeong"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <span data-content="Youtube" aria-hidden="true"></span>Youtube
        </a>
        .
      </p>

      <main>
        <h2 className="h3">Picked from the post</h2>
        <div className="post-cards">{/* <PostCard {post} /> */}</div>
        <p className="more-posts-container">
          <a href="/post/" className="more-posts-link">
            <span>More from the post</span>{" "}
            <ArrowForwardIcon className="homepage-arrow" />
          </a>
        </p>
      </main>
    </div>
  );
};
