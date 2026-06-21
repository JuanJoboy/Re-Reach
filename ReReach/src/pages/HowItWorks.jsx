import { Container, Row, Col } from 'react-bootstrap';

export default function HowItWorks()
{
    const steps = [
        { num: '01', title: 'Download & print', desc: 'Download the patient STL file and print in PETG or PLA at the designated scale.' },
        { num: '02', title: 'Ship to our hub', desc: 'Pack the raw plastic parts securely and dispatch them via your local post office to our regional depot.' },
        { num: '03', title: 'Quality check', desc: 'Our team will inspect incoming components and pair them with mechanical hardware kits.' },
        { num: '04', title: 'On-ground assembly', desc: 'Verified components will be taken to local workshops to complete assembly and final patient fittings.' },
        { num: '05', title: 'Fitted & followed up', desc: 'Recipients receive their custom device. With growing children being remeasured every few months for replacement prints.' },
    ];

    return (
        <section id="logistics-pipeline" className="bg-white py-5">
            <Container className="py-4">

                {/* How It Works Section */}
                <div className="mb-5">
                    <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                        Pipeline
                    </h1>
                    <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                        From your printer to Gaza
                    </h2>

                    <Row className="g-3 row-cols-1 row-cols-sm-3 row-cols-md-5">
                        {steps.map((s, idx) => (
                            <Col key={idx}>
                                <div className="bg-pal-green text-white p-3 h-100 rounded-3 shadow-sm">
                                    <div className="fw-extrabold line-height-1 mb-1 fs-3 font-monospace text-pal-sand">{s.num}</div>
                                    <h5 className="text-pal-sand fw-bold small mb-2 text-uppercase tracking-wide">{s.title}</h5>
                                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.82rem' }}>{s.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Shipping Protocols Section */}
                <div id="shipping" className="pt-4">
                    <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                        Shipping your prints
                    </h2>
                    <Row className="g-3 row-cols-1 row-cols-md-3 mb-4">
                        <Col>
                            <div className="bg-pal-cream p-4 h-100 rounded-3 border border-light shadow-sm">
                                <h5 className="fw-bold text-pal-green mb-3 text-uppercase font-monospace tracking-wider">📐 Production</h5>

                                <ul className="list-unstyled d-flex flex-column gap-2 text-black small m-0">
                                    <li>→ Ensure scaling settings match the patient profile identically before slicing.</li>
                                    <li>→ Do not scale down or change proportions manually to save filament volume.</li>
                                </ul>
                            </div>
                        </Col>

                        <Col>
                            <div className="bg-pal-cream p-4 h-100 rounded-3 border border-light shadow-sm">
                                <h5 className="fw-bold text-pal-green mb-3 text-uppercase font-monospace tracking-wider">📦 Component Packing</h5>

                                <ul className="list-unstyled d-flex flex-column gap-2 text-black small m-0">
                                    <li>→ Include all structural plastic parts printed for the specific case.</li>
                                    <li>→ Wrap items securely in bubble wrap to protect structural integrity during transport.</li>
                                    <li>→ Wrap individual components separately to prevent plastic-on-plastic friction scars.</li>
                                </ul>
                            </div>
                        </Col>

                        <Col>
                            <div className="bg-pal-cream p-4 h-100 rounded-3 border border-light shadow-sm">
                                <h5 className="fw-bold text-pal-green mb-3 text-uppercase font-monospace tracking-wider">✈️ Post Office Dispatch</h5>

                                <ul className="list-unstyled d-flex flex-column gap-2 text-black small m-0">
                                    <li>→ Pack the bubble-wrapped components into a sturdy, standard cardboard shipping box.</li>
                                    <li>→ Take the box to any local post office or commercial courier outlet.</li>
                                    <li>→ Declare package contents accurately as: "3D printed plastic toy components - No commercial value."</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    {/* Consolidation Address block */}
                    <div className="bg-pal-cream border border-light p-4 rounded-3 shadow-sm">
                        <h5 className="text-pal-terra fw-bold mb-2 text-uppercase font-monospace tracking-wider">Shipping Address</h5>

                        <address className="m-0 text-black large font-monospace lh-lg" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                            [Shuhada al-Aqsa Hospital, Deir al-Balah, Deir al-Balah Governorate, Gaza Strip, Palestine]<br />
                        </address>
                    </div>
                </div>

            </Container>
        </section>
    );
}