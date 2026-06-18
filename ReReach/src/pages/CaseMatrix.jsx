import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function CaseMatrix({ cases, onClaim }) {
  return (
    <section id="cases" className="my-4">
      <Container className="bg-white py-5 border-top shadow-sm rounded">
        <div className="text-center mb-5">
          <Badge bg="none" className="border border-danger text-pal-red mb-2 text-uppercase px-3 py-2 fw-bold">Live Allocations</Badge>
          <h2 className="fw-bold">Pending Pediatric Profiles</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Select profiles to evaluate parameters. Claiming routes instructions directly to centralized assembly channels.
          </p>
        </div>

        <Row className="g-4 px-2">
          {cases.map((child) => (
            <Col key={child.id} md={4}>
              <Card className={`h-100 border-${child.status === 'Claimed' ? 'light bg-light' : 'success'} shadow-sm position-relative overflow-hidden`}>
                {child.status === 'Claimed' && (
                  <div className="bg-pal-black text-pal-green text-center py-1 position-absolute w-100 top-0 start-0 small fw-bold border-bottom border-success" style={{ zIndex: 1 }}>
                    <CheckCircle size={14} className="me-1 inline" /> Linked to Printer Network
                  </div>
                )}
                <Card.Body className="pt-5 p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold mb-0 text-pal-black">{child.name}</h4>
                    <Badge bg="none" className="bg-pal-red px-2 py-1">Age {child.age}</Badge>
                  </div>
                  <hr className="my-2" />
                  <ul className="list-unstyled small text-muted my-3 d-flex flex-column gap-2">
                    <li><strong>Device Profile:</strong> {child.device}</li>
                    <li><strong>Scaling Parameter:</strong> {child.scale}</li>
                    <li><strong>Color Allocation:</strong> {child.color}</li>
                  </ul>
                  <Button
                    onClick={() => onClaim(child.id)}
                    disabled={child.status === 'Claimed'}
                    variant={child.status === 'Claimed' ? 'secondary' : 'success'}
                    className={`w-100 fw-bold d-flex align-items-center justify-content-center gap-2 border-0 ${child.status !== 'Claimed' && 'bg-pal-green'}`}
                  >
                    {child.status === 'Claimed' ? 'Assigned' : 'Claim Profile & Fetch STL'} <ChevronRight size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}