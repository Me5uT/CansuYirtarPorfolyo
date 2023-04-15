import React from "react";
import { Route, Routes } from "react-router-dom";
import { IContentModel } from "../models/ContentModel";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Posts } from "../pages/Posts";
import { TherapyDetail } from "../pages/TherapyDetail";
import { GeneralServices } from "../services/Services";
import { Contact } from "../pages/Contact";
import { Services } from "../pages/Services";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = () => {
  const [postPath, setPostPath] = React.useState<string>("");
  const [servicePath, setServicePath] = React.useState<string>("");

  const [therapy, setTherapy] = React.useState<IContentModel>();

  React.useEffect(() => {
    const content = GeneralServices.findTherapyByPath(postPath);

    setTherapy(content);
  }, [postPath]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route index path="/posts" element={<Posts pathName={setPostPath} />} />

      <Route path={`/posts/${postPath}`} element={<TherapyDetail />} />

      <Route path="/services" element={<Services />} />

      <Route path="/services/:id" element={<TherapyDetail />} />

      {/* <Route path="/services/ergen" element={<ErgenServices />} /> */}

      <Route path="/contact" element={<Contact />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
};
