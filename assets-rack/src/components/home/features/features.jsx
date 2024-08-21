import FeatureCard from "./featureCard/featureCard";
import { Container, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import "./features.css";

const Features = () => {
    const [key, setKey] = useState("unlimitedU");
    return (
        <section className="features">
            <Container>
                <div className="features-parent">
                    <h2 className="heading">Features</h2>
                    <p className="para">
                        Vivamus eget aliquam dui. Integer eu arcu vel arcu
                        suscipit ultrices quis non mauris.
                    </p>

                    <div className="bottom-part">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="unlimitedU" title="Unlimited User">
                                <FeatureCard heading={"Unlimited User"} />
                            </Tab>
                            <Tab
                                eventKey="customReports"
                                title="Unlimited Custom Reports"
                            >
                                <FeatureCard
                                    heading={"Unlimited Custom Reports"}
                                />
                            </Tab>
                            <Tab eventKey="cloudBased" title="Cloud-based">
                                <FeatureCard heading={"Cloud-based"} />
                            </Tab>
                            <Tab
                                eventKey="emailAlerts"
                                title="Configurable Email Alerts"
                            >
                                <FeatureCard
                                    heading={"Configurable Email Alerts"}
                                />
                            </Tab>
                            <Tab eventKey="barcode" title="Barcode Scanning">
                                <FeatureCard heading={"Barcode Scanning"} />
                            </Tab>
                            <Tab
                                eventKey="maintenance"
                                title="Maintenance Scheduling"
                            >
                                <FeatureCard
                                    heading={"Maintenance Scheduling"}
                                />
                            </Tab>
                            <Tab
                                eventKey="checinout"
                                title="Check-in & check-out Features"
                            >
                                <FeatureCard
                                    heading={"Check-in & check-out Features"}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;
