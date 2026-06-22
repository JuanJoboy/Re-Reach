import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import Header from '../components/Title'
import { Stethoscope, Wrench, Shield, AlertTriangle, Activity } from 'lucide-react';
import Amputee from '../assets/Amputee.jpg';

export default function Context()
{
    return (
        <section id="context" className="bg-pal-cream py-5">
            <Container className="py-5">

                {/* 1. Full-Width Impactful Title & Introduction */}
                <Header heading="The Post-War Reality" subheading="Survival is only the first step." text="Despite the war being over, a secondary crisis is still present. For thousands of Palestinians, immediate survival was just the beginning. True recovery requires extensive surgery, long-term rehabilitation, and access to functional prosthetic devices." />

                {/* 2. Horizontal Metrics Matrix Row */}
                <Row className="g-4 mb-5">
                    <Col md={4}>
                        <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm position-relative overflow-hidden">
                            <Card.Body className="p-0 d-flex flex-column justify-content-between h-100">
                                <div>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <span className="counter-num fw-extrabold text-pal-sand m-0">4,000</span>
                                        <Badge
                                            bg="none"
                                            className="bg-pal-terra text-white font-monospace d-flex align-items-center gap-1 border-white-10"
                                            style={{ fontSize: '0.75rem', borderRadius: '4px', letterSpacing: '0.05em', padding: '0.5rem 0.75rem' }}
                                        >
                                            <AlertTriangle size={12} /> GLOBAL HIGH
                                        </Badge>
                                    </div>
                                    <h6 className="fw-bold text-white mb-2 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>Child Amputees</h6>
                                    <p className="text-white-50 small m-0" style={{ lineHeight: '1.5' }}>
                                        Gaza has one of the highest numbers of child amputees per capita worldwide, with up to 4,000 children experiencing limb loss.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm">
                            <Card.Body className="p-0">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span className="counter-num fw-extrabold text-white m-0">43,000</span>
                                    <Activity className="text-pal-sand opacity-50" size={24} />
                                </div>
                                <h6 className="fw-bold text-white mb-2 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>Life-Changing Injuries</h6>
                                <p className="text-white-50 small m-0" style={{ lineHeight: '1.5' }}>
                                    WHO estimates over 43,000 individuals have suffered trauma requiring long-term assistive devices and reconstructive interventions.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 border-0 bg-pal-green text-white p-4 rounded-3 shadow-sm">
                            <Card.Body className="p-0">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span className="counter-num fw-extrabold text-white m-0">10,000+</span>
                                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ceb594' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E" alt="Users Icon" className="opacity-50" style={{ width: '24px', height: '24px' }} />
                                </div>
                                <h6 className="fw-bold text-white mb-2 text-uppercase tracking-wider" style={{ fontSize: '0.85rem' }}>Children Affected</h6>
                                <p className="text-white-50 small m-0" style={{ lineHeight: '1.5' }}>
                                    Thousands of children continue to require prosthetic fitting, replacement components, repairs, and physical rehabilitation.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                {/* 3. Balanced Split Section: Narrative Text & Captioned Media */}
                <Row className="g-5 align-items-stretch pt-3">
                    {/* Left Side: Deep Narrative */}
                    <Col lg={6} className="d-flex flex-column gap-4 justify-content-between">
                        <div
                            className="d-flex align-items-start gap-3 p-4 bg-white rounded-3 shadow-sm h-100"
                            style={{ border: 'none', borderLeft: '4px solid var(--green)' }}
                        >
                            <div className="p-2 rounded bg-pal-cream text-pal-green shrink-0">
                                <Stethoscope size={24} />
                            </div>
                            <div>
                                <h5 className="fw-bold text-pal-green mb-2">Amputation is not a one-time event</h5>
                                <p className="text-muted small m-0" style={{ lineHeight: '1.6' }}>
                                    A child's body grows continuously, meaning a single prosthetic device can be outgrown within a year. Amputees require regular adjustments, mechanical redesigns, repairs, and ongoing physical therapy over many years to prevent permanent skeletal misalignment.
                                </p>
                            </div>
                        </div>

                        <div
                            className="d-flex align-items-start gap-3 p-4 bg-white rounded-3 shadow-sm h-100"
                            style={{ border: 'none', borderLeft: '4px solid var(--green)' }}
                        >
                            <div className="p-2 rounded bg-pal-cream text-pal-green shrink-0">
                                <Wrench size={24} />
                            </div>
                            <div>
                                <h5 className="fw-bold text-pal-green mb-2">Infrastructure vacuum</h5>
                                <p className="text-muted small m-0" style={{ lineHeight: '1.6' }}>
                                    With local specialised medical infrastructure severely degraded, standard commercial prosthetics are difficult to secure or maintain through traditional means. This Distributed open-source manufacturing fills this structural gap.
                                </p>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-3 shadow-sm p-4 d-flex gap-3 align-items-start h-100"
                            style={{ border: 'none', borderLeft: '4px solid var(--terra)' }}
                        >
                            <div className="p-2 rounded bg-pal-cream text-pal-terra shrink-0">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h5 className="fw-bold text-pal-terra mb-2">Why Access Matters</h5>
                                <p className="mb-2 fst-italic text-ink small" style={{ lineHeight: '1.7', fontWeight: '500' }}>
                                    “Even if a prosthetic only lasts 12 months, 12 months of a child being able to move independently is 12 months of life and greater safety & security.”
                                </p>
                                <small className="text-pal-terra fw-bold text-uppercase tracking-wider font-monospace d-block" style={{ fontSize: '0.7rem' }}>
                                    Georgia Tacey, Gaza Response Director at Save the Children
                                </small>
                            </div>
                        </div>
                    </Col>

                    {/* Right Side: Editorial Image Block aligned with Left Container height */}
                    <Col lg={6} className="d-flex flex-column">
                        <figure className="m-0 d-flex flex-column h-100">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm mb-3 grow" style={{ width: '100%', minHeight: '350px' }}>
                                <Image
                                    src={Amputee}
                                    alt="Diaa Al-Adini and his sister Aya in Deir Al-Balah"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <figcaption className="px-2 d-flex flex-column gap-1 text-muted mt-auto" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                                <span>
                                    <em>Palestinian teenager Diaa Al-Adini, who had his both arms amputated after being wounded in an Israeli strike on August 13 and was transferred from Al-Aqsa hospital due to an Israeli evacuation order, is helped by his sister Aya to drink iced juice on a beach outside a field hospital, in Deir Al-Balah in the central Gaza Strip.</em>
                                </span>
                                <span className="font-monospace text-uppercase fw-bold text-pal-terra tracking-wider mt-1" style={{ fontSize: '0.65rem' }}>
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