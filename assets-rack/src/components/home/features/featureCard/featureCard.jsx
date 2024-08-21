import { Row, Col } from 'react-bootstrap';
import FeaturesImg from '../../../../assets/featuresImg.png';
import './featureCard.css';

const FeatureCard = ({ heading }) => {
    return (
        <div className="features-card">
            <Row>
                <Col lg={6}>
                    <div className="left-part">
                        <h3 className="heading">{heading}</h3>
                        <p className="para">
                            Unlimited users at no additional charge. Make your
                            system as broad, or as narrow, as you need. Each
                            user can have their own unique level of access
                            ranging from limited viewing to full administrator.
                            AssetTiger is designed as a convenient solution for
                            everyone in your organization.
                        </p>
                        <p className="para">
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. In auctor
                            egestas dolor et iaculis. Suspendisse et ipsum
                            consectetur, elementum enim et, dignissim risus.
                            Phasellus id diam erat. Pellentesque hendrerit sem
                            sit amet odio sodales, at placerat metus gravida.
                            Duis venenatis quam eget ligula euismod vulputate.
                        </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="img-div">
                        <img src={FeaturesImg} alt="" className="img" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FeatureCard;