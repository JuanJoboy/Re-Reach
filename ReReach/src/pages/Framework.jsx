import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Layers, ExternalLink, Shield } from 'lucide-react';

export default function Framework() {
  return (
    <section id="mission" className="py-5 my-4">
      <Container className="bg-white rounded shadow-sm py-5">
        <div className="text-center mb-5">
          <Badge bg="none" className="bg-pal-red mb-2 text-uppercase px-3 py-2">Operational Track</Badge>
          <h2 className="display-6 fw-bold">Our Agile Framework</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Deploying decentralized, community-driven mechanics to bypass traditional import constraints.
          </p>
        </div>
        <Row className="g-4 px-3">
          <Col md={4}>
            <Card className="h-100 border-0 bg-light p-4">
              <Card.Body className="p-0">
                <Layers className="text-pal-green mb-3" size={36} />
                <Card.Title className="fw-bold h4">1. Digital Sizing</Card.Title>
                <Card.Text className="text-muted small">
                  Clinicians in Deir al-Balah map residual limbs against standardized scaling metrics via basic smartphone imaging pipelines.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 bg-light p-4">
              <Card.Body className="p-0">
                <ExternalLink className="text-pal-red mb-3" size={36} />
                <Card.Title className="fw-bold h4">2. Global Fabrication</Card.Title>
                <Card.Text className="text-muted small">
                  International volunteers receive localized design files via e-NABLE, printing models in durable, thermal-resistant PETG filament.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 bg-light p-4">
              <Card.Body className="p-0">
                <Shield className="text-pal-green mb-3" size={36} />
                <Card.Title className="fw-bold h4">3. Mosque-Based PT</Card.Title>
                <Card.Text className="text-muted small">
                  Assembled kits arrive for fitment. Local physiotherapists run targeted structural workouts out of neighborhood mosque spaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}