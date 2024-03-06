import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import {
  HomeIndustry,
  HomeService,
} from "../serviceComponents/ServiceComponents.js";
import Services from "../../servicesData.js";
export default function section() {
  return (
    <div className="section" id="services">
      <div className="container rows">
        <Tabs defaultActiveKey="services" className="tab">
          <Tab className="tablinks" eventKey="services" title="Services">
            <div className="container rows">
              <div className="tabcontent" id="London">
                <div className="row">
                  {Services.services.map((service) => (
                    <HomeService key={service.id} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab className="tablinks" eventKey="technology" title="Technology">
            <div className="container rows">
              <div className="tabcontent" id="London">
                <div className="row">
                  {Services.technology.map((technology) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-6"
                      key={technology.id}
                    >
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img src={technology.image} alt={technology.title} />
                        </div>
                        <div className="sectionWords">
                          <h4>{technology.title}</h4>
                          <ul>
                            {technology.techs.map((oneTech) => (
                              <li key={oneTech.id}>{oneTech.name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab className="tablinks" eventKey="industry" title="Industry">
            <div className="container rows">
              <div className="tabcontent" id="London">
                <div className="row">
                  {Services.Industry.map((industry) => (
                    <HomeIndustry key={industry.id} industry={industry} />
                  ))}
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
