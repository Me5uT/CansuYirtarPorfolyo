import React from "react";
import { ServiceIcon } from "../components/ServiceIcon";
import {
  IServicesContents,
  psikoThrepahyDescription,
  servicesContents,
} from "../contents/ServicesContents";
import { ServiceCard } from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";

interface IServicesProps {}

export const Services: React.FC<IServicesProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <br></br>
      <div className="psikoterapi-container">
        <h1 className="psikoterapi-title">Psikoterapi Nedir ?</h1>
        <p className="psikoterapi-description">{psikoThrepahyDescription}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h1 className="psikoterapi-title">Hizmetlerimiz</h1>
      </div>
      <div className="service-cards">
        {servicesContents.map((content: IServicesContents) => {
          return (
            <ServiceCard
              title={content.title}
              imgUrl={content.imgUrl}
              description={content.description}
              onClick={() => {
                navigate(content.imgUrl);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
