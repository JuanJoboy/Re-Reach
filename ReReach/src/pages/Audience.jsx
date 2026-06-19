import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Audience({ scrollToSection }) {
  return (
    <section id="printer" className="bg-cream py-5">
      <Container className="py-4">
        <p className="text-uppercase tracking-wider fw-bold text-pal-terra small mb-1">Get Involved</p>
        <h2 className="fw-extrabold text-pal-green mb-4 h1">Three ways to give a hand</h2>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 p-3 border-2" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--green-light)', borderRadius: '10px' }}>
              <Card.Body>
                <div className="fs-2 mb-2">🖨️</div>
                <Card.Title className="fw-bold text-pal-green h4">I have a 3D printer</Card.Title>
                <Card.Text className="text-muted small my-3">
                  Download the print files, print parts in PETG, and ship to our regional hub. One hand takes ~12 hours to print and costs $15–25 in filament.
                </Card.Text>
                <Button onClick={() => scrollToSection('designs')} variant="none" className="bg-pal-green text-white fw-bold px-3 py-2 small">
                  Download print files →
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 p-3 border-2" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--green-light)', borderRadius: '10px' }}>
              <Card.Body>
                <div className="fs-2 mb-2">💛</div>
                <Card.Title className="fw-bold text-pal-green h4">I want to donate</Card.Title>
                <Card.Text className="text-muted small my-3">
                  $35 funds one complete hand — parts, hardware kit, and assembly. $350 covers a full workshop session for 10 community members in Gaza.
                </Card.Text>
                <Button onClick={() => scrollToSection('donate')} variant="none" className="bg-pal-terra text-white fw-bold px-3 py-2 small">
                  Donate now →
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 p-3 border-2" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--green-light)', borderRadius: '10px' }}>
              <Card.Body>
                <div className="fs-2 mb-2">🤲</div>
                <Card.Title className="fw-bold text-pal-green h4">I need a hand</Card.Title>
                <Card.Text className="text-muted small my-3">
                  If you or someone you know in Gaza needs a prosthetic hand, fill out our Arabic-language request form. A volunteer will be in touch within 5 days.
                </Card.Text>
                <Button onClick={() => scrollToSection('request')} variant="none" className="bg-pal-green text-white fw-bold px-3 py-2 small">
                  Request a hand →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}