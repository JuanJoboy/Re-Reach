import { Container, Row, Col, ProgressBar, Alert } from 'react-bootstrap';

export default function ImpactTracker() {
  const progressMetrics = [
    { label: 'Parts printed by volunteers', current: 342, target: 500, sub: 'Each hand requires ~14 printed components — EDIT target as programme scales' },
    { label: 'Hands assembled in Gaza', current: 84, target: 200, sub: 'Assembled at Islamic University of Gaza workshop' },
    { label: 'Recipients fitted (adults)', current: 41, target: 100, sub: 'Clinically supervised by ICRC Artificial Limbs & Polio Centre' },
    { label: 'Recipients fitted (children)', current: 62, target: 100, sub: 'Children remeasured & refitted every 6 months as they grow' },
  ];

  return (
    <section id="impact" className="bg-white py-5">
      <Container className="py-4">
        <Row className="g-5 align-items-start">
          <Col lg={7}>
            <p className="text-uppercase tracking-wider fw-bold text-pal-terra small mb-1">Live Impact</p>
            <h2 className="fw-bold text-pal-green mb-3 h1">Where we are</h2>
            <p className="text-muted small mb-4">Updated weekly from our Jordan hub and Gaza workshop coordinators. Numbers reflect verified fitted devices only.</p>

            {progressMetrics.map((metric, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between font-weight-bold small mb-1">
                  <span className="fw-bold text-pal-green">{metric.label}</span>
                  <span className="fw-bold text-pal-terra">{metric.current} / {metric.target}</span>
                </div>
                <ProgressBar
                  now={(metric.current / metric.target) * 100}
                  className="custom-progress mb-1"
                  style={{ height: '10px', borderRadius: '20px', backgroundColor: 'var(--green-light)' }}
                />
                <span className="text-muted d-block" style={{ fontSize: '0.78rem' }}>{metric.sub}</span>
              </div>
            ))}

            <Alert variant="none" className="border-start border-3 border-success" style={{ backgroundColor: 'var(--green-light)', color: 'var(--green)' }}>
              ✏️ <strong>To update:</strong> State logic bindings directly inside tracking matrices or pass verified numbers downstream via remote structural fetch modules.
            </Alert>
          </Col>

          <Col lg={5}>
            <div className="bg-pal-green text-white p-4 rounded-3 d-flex flex-column gap-3">
              <p className="text-pal-sand text-uppercase tracking-wider fw-bold small font-monospace m-0">The scale of need</p>
              <div className="border-bottom border-white-10 pb-2">
                <div className="display-6 fw-bold text-pal-sand font-monospace line-height-1">6,000+</div>
                <small className="text-white-50">Prosthetic devices needed in Gaza</small>
              </div>
              <div className="border-bottom border-white-10 pb-2">
                <div className="display-6 fw-bold text-pal-sand font-monospace line-height-1">#1</div>
                <small className="text-white-50">Gaza has the highest child amputee rate per capita globally (UNICEF, 2025)</small>
              </div>
              <div className="border-bottom border-white-10 pb-2">
                <div className="display-6 fw-bold text-pal-sand font-monospace line-height-1">~180</div>
                <small className="text-white-50">Prostheses fitted per month at ALPC — far below need</small>
              </div>
              <div>
                <div className="display-6 fw-bold text-pal-sand font-monospace line-height-1">$35</div>
                <small className="text-white-50">Cost of one complete e-NABLE hand vs $2,500+ for conventional prosthetics</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}