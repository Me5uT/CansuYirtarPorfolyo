import React from "react";
import { Route, Routes } from "react-router-dom";
import { IContentModel } from "../models/ContentModel";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Therapies } from "../pages/Therapies";
import { TherapyDetail } from "../pages/TherapyDetail";
import { Services } from "../services/Services";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = () => {
  const [path, setPath] = React.useState<string>("");
  const [therapy, setTherapy] = React.useState<IContentModel>();

  React.useEffect(() => {
    const content = Services.findTherapyByPath(path);

    setTherapy(content);
  }, [path]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        index
        path="therapies"
        element={<Therapies pathName={setPath} />}
      />
      <Route
        path={`therapies/${path}`}
        element={<TherapyDetail therapy={therapy} />}
      />
      <Route path="about" element={<About />} />
    </Routes>
  );
};
