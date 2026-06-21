import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { HelpCircle } from 'lucide-react';

export default function FAQ()
{
    const faqData = [
        {
            id: "0",
            question: "Why 3D printing?",
            answer: "By distributing production across hundreds of volunteer printers worldwide, prosthetic components can be manufactured at a fraction of traditional costs, allowing more devices to reach more people faster."
        },
        {
            id: "1",
            question: "What open-source designs are used?",
            answer: "The programme utilises e-NABLE open-source mechanical designs, specifically optimized for transradial (below elbow) and partial hand amputations."
        },
        {
            id: "2",
            question: "What types of filament are recommended?",
            answer: "We recommend high-grade PLA or PETG for structural components due to their tensile strength and biological neutrality."
        },
    ];

    return (
        <section id="faq-section" className="bg-cream py-5">
            <Container className="py-5">

                {/* Header Block */}
                <Row className="mb-5">
                    <Col lg={8}>
                        <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                            Information
                        </h1>
                        <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                            Frequently Asked Questions
                        </h2>
                    </Col>
                </Row>

                {/* Accordion Component */}
                <Row>
                    <Col lg={10}>
                        <Accordion defaultActiveKey="0" className="border-0">
                            {faqData.map((item) => (
                                <Accordion.Item
                                    eventKey={item.id}
                                    key={item.id}
                                    className="mb-3 border-0 rounded-3 overflow-hidden shadow-sm"
                                >
                                    <Accordion.Header className="font-monospace fw-bold">
                                        <div className="d-flex align-items-center gap-3 w-100 text-start">
                                            <HelpCircle size={20} className="text-black shrink-0" />
                                            <span className="fs-5 fw-bold text-white">{item.question}</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-pal-green-light text-ink border-top border-light py-4 px-4 fs-6 lh-base">
                                        {item.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>

            </Container>
        </section>
    );
}