import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import { MapPin, ShieldCheck, Activity, Award, CheckCircle } from 'lucide-react';
import MapImage from '../assets/Map.png';
import HospitalImage from '../assets/IMC.png';

export default function PilotMap() {
  return (
    <section id="pilot-location" className="bg-white py-5">
      <Container className="py-5">

        {/* 1. Impactful Section Header */}
        <Row className="mb-5">
          <Col lg={10}>
            <p className="text-uppercase tracking-widest fw-black text-pal-terra small mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
              Strategic Implementation
            </p>
            <h2 className="display-3 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
              Location: Deir al-Balah
            </h2>
            <p className="lead fw-bold text-ink fs-4 m-0" style={{ lineHeight: '1.5' }}>
              Deir al-Balah serves as the ideal starting point due to its smaller population and lower level of destruction compared to major hubs like Gaza City. It provides a manageable environment to establish, monitor, and refine operations six months post-war before broader expansion.
            </p>
          </Col>
        </Row>

        {/* 2. Double Media Column Grid with References */}
        <Row className="g-4 mb-5">
          {/* Image Block 1: Geographic Map */}
          <Col md={6}>
            <figure className="m-0">
              <div className="overflow-hidden rounded-3 bg-light shadow-sm mb-2" style={{ width: '100%', aspectRatio: '16 / 10' }}>
                <Image
                  src={MapImage}
                  alt="Geographic map highlighting Deir al-Balah pilot zone"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <figcaption className="px-2 d-flex flex-column gap-1 text-muted" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                <span><em>Satellite and logistical mapping of Deir al-Balah distribution networks.</em></span>
                <span className="font-monospace text-uppercase fw-bold text-pal-terra tracking-wider" style={{ fontSize: '0.65rem' }}>
                  [ Operational Blueprint / 2026 ]
                </span>
              </figcaption>
            </figure>
          </Col>

          {/* Image Block 2: Field Hospital */}
          <Col md={6}>
            <figure className="m-0">
              <div className="overflow-hidden rounded-3 bg-light shadow-sm mb-2" style={{ width: '100%', aspectRatio: '16 / 10' }}>
                <Image
                  src={HospitalImage}
                  alt="International Medical Corps IMC field hospital in Deir al-Balah"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <figcaption className="px-2 d-flex flex-column gap-1 text-muted" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                <span><em>The 68,000-square-foot IMC field hospital infrastructure in central Gaza.</em></span>
                <span className="font-monospace text-uppercase fw-bold text-pal-terra tracking-wider" style={{ fontSize: '0.65rem' }}>
                  [ International Medical Corps / 2026 ]
                </span>
              </figcaption>
            </figure>
          </Col>
        </Row>

        {/* 3. Medical Anchor Metrics - Large Eye-Catching Stats */}
        <Row className="g-4 mb-5">
          <Col md={12}>
            <div className="bg-pal-green text-white p-4 rounded-3 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Activity className="text-pal-sand" size={24} />
                <h4 className="fw-bold m-0 text-white text-uppercase tracking-wider" style={{ fontSize: '1rem' }}>
                  Reliable Medical Anchor: IMC Field Hospital
                </h4>
              </div>
              <Row className="g-3 row-cols-2 row-cols-md-4 text-start">
                <Col className="border-end border-white-10">
                  <span className="counter-num text-pal-sand fw-extrabold d-block line-height-1">68k</span>
                  <small className="text-white-50 d-block">Square-foot footprint containing 26 modular units & 17 tents</small>
                </Col>
                <Col className="border-end border-white-10">
                  <span className="counter-num text-white fw-extrabold d-block line-height-1">160+</span>
                  <small className="text-white-50 d-block">Trained medical health workers on deployment</small>
                </Col>
                <Col className="border-end border-white-10">
                  <span className="counter-num text-white fw-extrabold d-block line-height-1">160</span>
                  <small className="text-white-50 d-block">Patient beds ready for rehabilitation cases</small>
                </Col>
                <Col>
                  <span className="counter-num text-pal-sand fw-extrabold d-block line-height-1">4</span>
                  <small className="text-white-50 d-block">Active operating theatres with restored surgical capacity</small>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* 4. Strategic Validation Blocks */}
        <Row className="g-4 align-items-start">

          {/* Validation Block 1: Ground Feasibility */}
          <Col lg={6}>
            <Card className="h-100 border-0 bg-pal-cream p-4 rounded-3 shadow-sm">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <ShieldCheck className="text-pal-terra" size={24} />
                  <h4 className="fw-bold m-0 text-pal-green h5">Validated Ground Logistics</h4>
                </div>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                  Validated by Georgia Tacey, Gaza Response Director at Save the Children, who notes that Deir al-Balah is a highly realistic point of establishment due to the presence of multiple Ministry of Health (MoH) and NGO-run health facilities that families already know how to access.
                </p>
                <blockquote className="border-start border-pal-terra border-3 ps-3 text-italic text-ink small m-0">
                  "Deir al-Balah is a realistic point of establishment... All families know where these facilities are and how to access them"
                  <footer className="blockquote-footer mt-1 font-monospace text-uppercase" style={{ fontSize: '0.65rem' }}>G. Tacey, June 16, 2026</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Validation Block 2: Interim Use Approach */}
          <Col lg={6}>
            <Card className="h-100 border-0 bg-pal-cream p-4 rounded-3 shadow-sm">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Award className="text-pal-terra" size={24} />
                  <h4 className="fw-bold m-0 text-pal-green h5">Practical Interim-Use Philosophy</h4>
                </div>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                  While open-source e-NABLE devices have limited grip and cannot carry heavy loads, waiting indefinitely for high-end commercial alternatives risks devastating developmental milestones for growing pediatric patients.
                </p>
                <blockquote className="border-start border-pal-terra border-3 ps-3 text-italic text-ink small m-0">
                  "Even if a prosthetic only lasts 12 months due to substandard materials, 12 months of a child being able to move independently is 12 months of life and greater safety..."
                  <footer className="blockquote-footer mt-1 font-monospace text-uppercase" style={{ fontSize: '0.65rem' }}>G. Tacey, June 16, 2026</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Target Box Full-Width */}
          <Col md={12} className="mt-4">
            <div className="d-flex align-items-center justify-content-between p-3 rounded-3 border border-2 text-pal-green" style={{ backgroundColor: 'var(--green-light)', borderColor: 'var(--green-mid)' }}>
              <div className="d-flex align-items-center gap-3">
                <CheckCircle size={28} className="text-pal-green flex-shrink-0" />
                <div className="small text-start">
                  <strong className="d-block text-uppercase tracking-wider" style={{ fontSize: '0.8rem' }}>Target Benchmarks & Expansion Plan</strong>
                  <span className="text-muted">Aiming to fit at least 50% of the target amputees in Deir al-Balah within two years, providing the critical proof of concept required to roll out across the rest of Gaza and the West Bank.</span>
                </div>
              </div>
              <Badge bg="none" className="bg-pal-green text-white font-monospace p-2 d-none d-sm-inline-block" style={{ borderRadius: '4px' }}>
                TARGET: 50% FITTED
              </Badge>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}