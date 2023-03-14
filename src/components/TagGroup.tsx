import React, { useState } from "react";

interface ITagGroupProps {
  selectedTags: (tag: string[]) => void;
  tags: string[];
}

export const TagGroup: React.FC<ITagGroupProps> = ({ selectedTags, tags }) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [handleSelect, setHandleSelect] = useState<boolean[]>(
    Array(tags.length).fill(false)
  );

  const toggleTagToFilter = (tag: string, index: number) => {
    const posOfTag = activeTags.indexOf(tag);
    const newActiveTags = [...activeTags];

    if (posOfTag >= 0) {
      newActiveTags.splice(posOfTag, 1);
      setHandleSelect((handleSelect) => [
        ...handleSelect.slice(0, index),
        false,
        ...handleSelect.slice(index + 1),
      ]);
    } else {
      newActiveTags.push(tag);
      setHandleSelect((handleSelect) => [
        ...handleSelect.slice(0, index),
        true,
        ...handleSelect.slice(index + 1),
      ]);
    }
    setActiveTags(newActiveTags);
    selectedTags(newActiveTags);
  };

  return (
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>
          <button
            className={handleSelect[index] ? "selected" : ""}
            onClick={() => toggleTagToFilter(tag, index)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
};
