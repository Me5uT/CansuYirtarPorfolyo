import React from "react";
import { useParams } from "react-router-dom";
import {
  IServicesContents,
  servicesContents,
} from "../contents/ServicesContents";

interface ITherapyDetailProps {}

export const TherapyDetail: React.FC<ITherapyDetailProps> = () => {
  const [serviceContent, setServiceContent] = React.useState<
    IServicesContents | undefined
  >(undefined);

  let { id } = useParams();

  React.useLayoutEffect(() => {
    const sc = servicesContents.find(
      (content: IServicesContents) => content.imgUrl === id
    );

    setServiceContent(sc);
  }, []);

  return (
    <div className="service-content-container">
      <br></br>
      <div>
        <h1>{serviceContent !== undefined ? serviceContent.title : ""}</h1>
        <p>{serviceContent !== undefined ? serviceContent.description : ""}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};
