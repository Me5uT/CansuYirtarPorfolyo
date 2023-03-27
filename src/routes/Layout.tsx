import React from "react";
import { Route, Routes } from "react-router-dom";
import { IContentModel } from "../models/ContentModel";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Posts } from "../pages/Posts";
import { TherapyDetail } from "../pages/PostDetail";
import { PostServices } from "../services/Services";
import { Contact } from "../pages/Contact";
import { Services } from "../pages/Services";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = () => {
  const [path, setPath] = React.useState<string>("");
  const [therapy, setTherapy] = React.useState<IContentModel>();

  React.useEffect(() => {
    const content = PostServices.findTherapyByPath(path);

    setTherapy(content);
  }, [path]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index path="posts" element={<Posts pathName={setPath} />} />
      <Route
        path={`posts/${path}`}
        element={<TherapyDetail therapy={therapy} />}
      />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};
