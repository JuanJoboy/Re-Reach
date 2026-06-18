import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import Amputee from '../assets/Amputee.jpg';

export default function Context()
{
    return (
        <section id="context" className="bg-pal-cream py-5">
        <Container className="py-5">
            {/* 1. Full-Width Impactful Title & Introduction */}
            <Row className="mb-5">
                <Col lg={10}>
                    <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                        The Post-War Reality
                    </h1>
                    <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                        Survival is only the first step.
                    </h2>
                    <p className="lead fw-bold text-ink fs-4 m-0" style={{ lineHeight: '1.5' }}>
                        Now that the war is over, a secondary crisis has emerged. For thousands of Palestinians, immediate survival was just the beginning. True recovery requires extensive surgery, long-term rehabilitation, and access to functional prosthetic devices.
                    </p>
                </Col>
            </Row>

            {/* 2. Horizontal Metrics Matrix Row */}
            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm position-relative overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <span className="counter-num fw-extrabold text-pal-sand m-0">4,000</span>
                                <Badge
                                    bg="danger"
                                    style={{ fontSize: '1rem', borderRadius: '4px', letterSpacing: '0.05em' }}
                                >
                                    GLOBAL HIGH
                                </Badge>
                            </div>

                            <h6 className="fw-bold text-white mb-2">Child Amputees</h6>
                            <p className="text-white-50 small m-0">
                                Gaza has one of the highest numbers of child amputees per capita worldwide, with up to 4,000 children experiencing limb loss.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm">
                        <Card.Body className="p-0">
                            <div className="mb-2">
                                <span className="counter-num fw-extrabold text-white m-0">43,000</span>
                            </div>

                            <h6 className="fw-bold text-white mb-2">Life-Changing Injuries</h6>
                            <p className="text-white-50 small m-0">
                                WHO estimates over 43,000 individuals have suffered trauma requiring long-term assistive devices and reconstructive interventions.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm">
                        <Card.Body className="p-0">
                            <div className="mb-2">
                                <span className="counter-num fw-extrabold text-white m-0">10,000+</span>
                            </div>

                            <h6 className="fw-bold text-white mb-2">Children Affected</h6>
                            <p className="text-white-50 small m-0">
                                Total pediatric patients requiring multi-stage physical rehabilitation and targeted care, while available conventional supplies remain strictly limited.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* 3. Balanced Split Section: Narrative Text & Captioned Media */}
            <Row className="g-5 align-items-start pt-3">
                {/* Left Side: Deep Narrative */}
                <Col lg={6} className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm border border-light">
                        <span className="fs-3 bg-pal-cream p-2 rounded">🩺</span>
                        <div>
                            <h5 className="fw-bold text-pal-green mb-2">Amputation is not a one-time event</h5>
                            <p className="text-muted small m-0" style={{ lineHeight: '1.6' }}>
                                A child's body grows continuously, meaning a single prosthetic device is completely outgrown within months. Pediatric amputees require regular geometric adjustments, complete mechanical socket redesigns, structural repairs, and ongoing physical therapy over many years to prevent permanent skeletal misalignment.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm border border-light">
                        <span className="fs-3 bg-pal-cream p-2 rounded">🛠️</span>
                        <div>
                            <h5 className="fw-bold text-pal-green mb-2">Infrastructure vacuum</h5>
                            <p className="text-muted small m-0" style={{ lineHeight: '1.6' }}>
                                With local specialised medical infrastructure severely degraded, standard commercial prosthetics are impossible to secure or maintain through traditional distribution networks. Distributed open-source manufacturing fills this exact structural gap.
                            </p>
                        </div>
                    </div>
                </Col>

                {/* Right Side: Editorial Image Block */}
                <Col lg={6} className="m-0">
                    <figure className="m-0">
                        <div className="overflow-hidden rounded-3 bg-light shadow-sm mb-3" style={{ width: '100%', aspectRatio: '16 / 10' }}>
                            <Image
                                src={Amputee}
                                alt="Diaa Al-Adini and his sister Aya in Deir Al-Balah"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                        <figcaption className="px-2 d-flex flex-column gap-2 text-muted" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                            <span>
                                <em>Palestinian teenager Diaa Al-Adini, who had his both arms amputated after being wounded in an Israeli strike on August 13 and was transferred from Al-Aqsa hospital due to an Israeli evacuation order, is helped by his sister Aya to drink iced juice on a beach outside a field hospital, in Deir Al-Balah in the central Gaza Strip.</em>
                            </span>
                            <span className="font-monospace text-uppercase fw-bold text-pal-terra tracking-wider">
                                [ REUTERS / 2024 ]
                            </span>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
        </section>
    );
}