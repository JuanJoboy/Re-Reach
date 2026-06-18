import { Container, Row, Col } from 'react-bootstrap';

export default function Shipping() {
  return (
    <section id="shipping" className="bg-pal-cream py-5">
      <Container className="py-4">
        <p className="text-uppercase tracking-wider fw-bold text-pal-terra small mb-1">Volunteer Printers</p>
        <h2 className="fw-bold text-pal-green mb-4 h1">Shipping your prints</h2>

        <Row className="g-3 row-cols-1 row-cols-md-3 mb-4">
          <Col>
            <div className="bg-white p-4 h-100 rounded border border-light shadow-sm">
              <h5 className="fw-bold text-pal-green small mb-3">📦 What to include</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 text-muted small m-0">
                <li>→ All printed structural parts for the design</li>
                <li>→ A printed quality-check sheet</li>
                <li>→ Your name/username for contribution registry</li>
                <li>→ Do NOT include hardware (screws, Velcro, elastic)</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="bg-white p-4 h-100 rounded border border-light shadow-sm">
              <h5 className="fw-bold text-pal-green small mb-3">✈️ Shipping tips</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 text-muted small m-0">
                <li>→ Declare contents as: "Assistive device parts — no commercial value"</li>
                <li>→ Use a padded envelope or small box (~200g per hand)</li>
                <li>→ Standard tracked shipping works fine — no express needed</li>
                <li>→ Keep your tracking number and send it to confirm receipt</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="bg-white p-4 h-100 rounded border border-light shadow-sm">
              <h5 className="fw-bold text-pal-green small mb-3">📐 Size guide</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 text-muted small m-0">
                <li>→ Gaza's need skews toward child sizes (XS–M) — please prioritise</li>
                <li>→ Each STL file is labelled with palm length in cm</li>
                <li>→ When in doubt, print size M child (15cm palm)</li>
                <li>→ Print multiple sizes if you have spare filament</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="bg-pal-green text-white p-4 rounded-3 shadow-sm">
          <h5 className="text-pal-sand fw-bold small mb-2">📬 Ship to: Regional Consolidation Hub</h5>
          <address className="m-0 text-white-50 small font-monospace lh-lg">
            <strong>[Organisation Name]</strong><br />
            [Street Address]<br />
            [City, Country — Jordan or Egypt]<br />
            [Postal Code]<br />
            Attn: Hands4Gaza Prosthetics Programme
          </address>
          <p className="text-pal-sand font-italic small mt-2 mb-0" style={{ fontSize: '0.75rem' }}>
            ✏️ EDIT: Replace with your actual hub address once established.
          </p>
        </div>
      </Container>
    </section>
  );
}