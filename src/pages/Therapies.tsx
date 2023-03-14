import React from "react";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { SearchBox } from "../components/SearchBox";
import { TagGroup } from "../components/TagGroup";
import { contents } from "../contents/Contents";
import { IPostCardModel } from "../models/ContentModel";
import { Services } from "../services/Services";

interface ITherapiesProps {
  pathName: (path: string) => void;
}

export const Therapies: React.FC<ITherapiesProps> = ({ pathName }) => {
  const [query, setQuery] = React.useState<string>("");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [shownPost, setShownPost] = React.useState<IPostCardModel[]>([]);

  const navigate = useNavigate();

  const uniqueTags: string[] = React.useMemo(
    () => Services.findUniqueTags(),
    []
  );

  const allPosts: IPostCardModel[] = React.useMemo(
    () =>
      contents.map((content) => {
        return {
          lastUpdateDate: content.lastUpdateDate,
          title: content.mainTitle,
          tags: content.tags,
          pathName: content.pathName,
        };
      }),
    []
  );

  React.useEffect(() => {
    let filteredPosts = allPosts;

    if (query.trim()) {
      filteredPosts = filteredPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.join("").toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      filteredPosts = filteredPosts.filter((p) =>
        p.tags.some((x) => selectedTags.includes(x))
      );
    }

    setShownPost(filteredPosts);
  }, [query, selectedTags, allPosts]);

  return (
    <div className="therapies-container">
      <div className="title">Terapi Çeşitleri</div>
      <SearchBox query={setQuery} />
      <TagGroup selectedTags={setSelectedTags} tags={uniqueTags} />
      <div className="post-cards">
        {shownPost.map((post) => {
          return (
            <PostCard
              onClick={() => {
                pathName(post.pathName);
                navigate(post.pathName);
              }}
              lastUpdateDate={post.lastUpdateDate}
              tags={post.tags}
              title={post.title}
              key={post.title}
            />
          );
        })}
      </div>
    </div>
  );
};
