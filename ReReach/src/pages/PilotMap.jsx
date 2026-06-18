import { Container, Row, Col, Badge } from 'react-bootstrap';
import { MapPin, Activity } from 'lucide-react';

export default function PilotMap()
{
    return (
        <section id="map" className="py-5 my-4">
            <Container className="bg-white rounded shadow-sm py-5">
                <Row className="align-items-center g-5 px-3">
                    <Col lg={6}>
                        <Badge bg="none" className="bg-pal-green mb-2 text-uppercase">Deployment Base</Badge>

                        <h2 className="fw-bold mb-3">Target Anchor: Deir al-Balah</h2>

                        <p className="text-muted">
                            Deir al-Balah serves as the logical tactical footprint due to lower baseline destruction rates and accessible medical pipelines.
                        </p>
                        <div className="d-flex align-items-start gap-3 mb-4">
                            <MapPin className="text-pal-red shrink-0 mt-1" size={22} />
                            <div>
                                <strong className="d-block text-pal-black">IMC Field Hospital Hub</strong>
                                <span className="text-muted small">68,000-square-foot facility providing primary surgical infrastructure and critical revision management.</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <Activity className="text-pal-green shrink-0 mt-1" size={22} />
                            <div>
                                <strong className="d-block text-pal-black">Regional Mosque Spokes</strong>
                                <span className="text-muted small">Four structural hubs utilized to run community-based screening points, avoiding primary health facility congestion.</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="bg-pal-black border-success border-2 rounded d-flex flex-column justify-content-center align-items-center text-center text-white" style={{ height: '350px' }}>
                            <MapPin size={40} className="text-pal-red mb-2" />
                            <h5 className="fw-bold">Interactive Spatial Matrix</h5>
                            <p className="small text-muted px-4">Tracking active surgical channels and adjacent community points inside Deir al-Balah.</p>
                            <Badge bg="none" className="border border-danger text-pal-red uppercase font-monospace">Coordinates Logged</Badge>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}