import React from "react";
import { ServiceIcon } from "../components/ServiceIcon";
import { servicesContents } from "../contents/ServicesContents";

interface IServicesProps {}

export const Services: React.FC<IServicesProps> = () => {
  return (
    <div className="services-container">
      <h1 className="title">Hizmetlerimiz</h1>

      <div className="service-cards">
        {servicesContents.map((content) => {
          return (
            <div className="service-card">
              <div className="service-card-title">
                <h3>{content.title}</h3>
                {ServiceIcon(content.iconName)}
              </div>
              <p>&nbsp;{content.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
