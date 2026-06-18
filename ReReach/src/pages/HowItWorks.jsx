import { Container, Row, Col } from 'react-bootstrap';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Download & print', desc: 'Download the STL files, print in PETG at the correct size. Quality-check parts against the visual guide.' },
    { num: '02', title: 'Ship to our hub', desc: 'Pack printed parts (no hardware needed) and ship to our Jordan consolidation hub. We cover import — ship as "assistive device parts."' },
    { num: '03', title: 'Quality check', desc: 'Our team inspects all incoming parts, adds hardware kits, and batches sets for entry into Gaza.' },
    { num: '04', title: 'Community assembly', desc: 'Gaza workshops — led by trained local residents — assemble, fit, and adjust devices. ICRC/ALPC provides clinical oversight.' },
    { num: '05', title: 'Fitted & followed up', desc: 'Recipients receive their device. Children are remeasured every 6 months as they grow. Replacements are printed.' },
  ];

  return (
    <section id="how" className="bg-pal-green py-5 text-white">
      <Container className="py-4">
        <p className="text-pal-sand text-uppercase tracking-wider fw-bold small mb-1">Process</p>
        <h2 className="fw-bold mb-4 h1">From your printer to Gaza</h2>
        <Row className="g-3 row-cols-1 row-cols-sm-3 row-cols-md-5">
          {steps.map((s, idx) => (
            <Col key={idx}>
              <div className="step-box p-3 h-100">
                <div className="step-num fw-extrabold line-height-1 mb-1">{s.num}</div>
                <h5 className="text-pal-sand fw-bold small mb-2">{s.title}</h5>
                <p className="text-white-50 small mb-0" style={{ fontSize: '0.82rem' }}>{s.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}