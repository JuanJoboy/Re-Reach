import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function Designs() {
  return (
    <section id="designs" className="bg-pal-cream py-5">
      <Container className="py-4">
        <p className="text-uppercase tracking-wider fw-bold text-pal-terra small mb-1">Print Files</p>
        <h2 className="fw-bold text-pal-green mb-2 h1">Download the designs</h2>
        <p className="text-muted mb-4" style={{ maxWidth: '600px' }}>
          All designs are open-source from the e-NABLE community. Print in PETG for heat resistance. Each page links to the STL files, assembly manual, and sizing guide.
        </p>

        <Row className="g-3 mb-5">
          <Col sm={6} md={3}>
            <Card className="h-100 border-1 bg-white">
              <div className="text-center py-4 fs-1 bg-light">✋</div>
              <Card.Body className="p-3">
                <Badge bg="none" style={{ backgroundColor: 'var(--green-light)', color: 'var(--green)' }} className="mb-2 uppercase">⭐ Recommended</Badge>
                <h5 className="fw-bold text-pal-green">Phoenix v3</h5>
                <p className="text-muted card-text small">Current e-NABLE recommended design. Wrist-powered, comprehensive illustrated assembly manual.</p>
                <div className="d-flex gap-2 mt-3">
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">STL files</a>
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm rounded-pill px-2 py-0 fw-bold small">Assembly guide</a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="h-100 border-1 bg-white">
              <div className="text-center py-4 fs-1 bg-light">🖐️</div>
              <Card.Body className="p-3">
                <Badge bg="none" style={{ backgroundColor: '#FEF3E2', color: '#B45309' }} className="mb-2 uppercase">👦 Children</Badge>
                <h5 className="fw-bold text-pal-green">Unlimbited Phoenix</h5>
                <p className="text-muted card-text small">Designed for children with shorter residual limbs. Adjustable sizing system accommodates growth.</p>
                <div className="d-flex gap-2 mt-3">
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">STL files</a>
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm rounded-pill px-2 py-0 fw-bold small">Sizing guide</a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="h-100 border-1 bg-white">
              <div className="text-center py-4 fs-1 bg-light">🦾</div>
              <Card.Body className="p-3">
                <Badge bg="none" style={{ backgroundColor: '#EEF2FF', color: '#3730A3' }} className="mb-2 uppercase">💪 Elbow-powered</Badge>
                <h5 className="fw-bold text-pal-green">Kinetic Hand</h5>
                <p className="text-muted card-text small">For users without functional wrist movement. Uses elbow motion instead. 99-page manual.</p>
                <div className="d-flex gap-2 mt-3">
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">STL files</a>
                  <a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm rounded-pill px-2 py-0 fw-bold small">Assembly manual</a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="h-100 border-1 bg-white border-dashed opacity-75" style={{ borderStyle: 'dashed' }}>
              <div className="text-center py-4 fs-1 bg-transparent text-muted">＋</div>
              <Card.Body className="p-3 text-center">
                <Badge bg="secondary" className="mb-2">Coming soon</Badge>
                <h5 className="text-muted fw-bold">Add design here</h5>
                <p className="text-muted small">Duplicate this configuration card to expand verified designs.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filament Spec Container Box */}
        <div className="bg-pal-green text-white p-4 rounded-3 shadow-sm">
          <Row className="g-3 row-cols-2 row-cols-md-4 text-start">
            <Col>
              <span className="text-pal-sand text-uppercase fw-bold font-monospace d-block" style={{ fontSize: '0.75rem' }}>Recommended filament</span>
              <strong className="d-block fs-5 my-1">PETG — any brand</strong>
              <small className="text-white-50 d-block" style={{ fontSize: '0.8rem' }}>Higher heat resistance than PLA — critical for Gaza's climate</small>
            </Col>
            <Col>
              <span className="text-pal-sand text-uppercase fw-bold font-monospace d-block" style={{ fontSize: '0.75rem' }}>Preferred colours</span>
              <strong className="d-block fs-5 my-1">Skin tones / Brights</strong>
              <small className="text-white-50 d-block" style={{ fontSize: '0.8rem' }}>Light Tan, Desert Tan, Chocolate Rose, Coffee Bean — or child's choice</small>
            </Col>
            <Col>
              <span className="text-pal-sand text-uppercase fw-bold font-monospace d-block" style={{ fontSize: '0.75rem' }}>Cost per hand</span>
              <strong className="d-block fs-5 my-1">$15–25 filament</strong>
              <small className="text-white-50 d-block" style={{ fontSize: '0.8rem' }}>Hardware kit (~$30) sourced separately and shipped consolidated</small>
            </Col>
            <Col>
              <span className="text-pal-sand text-uppercase fw-bold font-monospace d-block" style={{ fontSize: '0.75rem' }}>Print time</span>
              <strong className="d-block fs-5 my-1">~12 hours</strong>
              <small className="text-white-50 d-block" style={{ fontSize: '0.8rem' }}>All structural parts; print overnight, ship parts only (no hardware)</small>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}