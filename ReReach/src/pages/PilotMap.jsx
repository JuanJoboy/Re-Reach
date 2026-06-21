import { Container, Row, Col, Image } from 'react-bootstrap';
import { TrendingUp, MapPin } from 'lucide-react';
import MapImage from '../assets/Map.png';
import HospitalImage from '../assets/IMC.png';

export default function PilotMap()
{
    return (
        <section id="pilot-location" className="bg-white py-5">
            <Container className="py-5">

                {/* 1. Impactful Section Header */}
                <Row className="mb-5">
                    <Col lg={10}>
                        <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                            Implementation
                        </h1>
                        <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                            Location: Deir al-Balah
                        </h2>
                        <p className="lead fw-bold text-ink fs-4 m-0" style={{ lineHeight: '1.5' }}>
                            Deir al-Balah serves as the ideal starting point due to its smaller population and lower level of destruction compared to major hubs like Gaza City. It provides a manageable environment to establish, monitor, and refine operations before broader expansion.
                        </p>
                    </Col>
                </Row>

                {/* 2. Tactical Regional Context - Why Deir al-Balah & Infrastructure Integration */}
                <Row className="g-4 mb-5">
                    <Col lg={6}>
                        <div
                            className="p-4 bg-pal-cream h-100 rounded-3"
                            style={{ borderLeft: '4px solid var(--green)' }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <MapPin className="text-pal-green" size={24} />
                                <h4 className="fw-bold m-0 text-pal-green h5">Mosque Workshops</h4>
                            </div>
                            <p className="text-ink small mb-3" style={{ lineHeight: '1.6' }}>
                                With most infrastructure damaged or destroyed, local mosques serve as trusted community spaces for hands-on recovery. We use these accessible venues to train families and local volunteers on how to assemble, fit, and maintain the 3D-printed prosthetic parts safely.
                            </p>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div
                            className="p-4 bg-pal-cream h-100 rounded-3"
                            style={{ borderLeft: '4px solid var(--terra)' }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <TrendingUp className="text-pal-terra" size={24} />
                                <h4 className="fw-bold m-0 text-pal-terra h5">Scaling Across Palestine</h4>
                            </div>
                            <p className="text-ink small mb-2 fw-bold" style={{ lineHeight: '1.6' }}>
                                Fitting half the amputee population in Deir al-Balah is our first major target.
                            </p>
                            <p className="text-ink small m-0" style={{ lineHeight: '1.6', opacity: 0.8 }}>
                                Once this is achieved, we will be able to acquire the extra funding we need to increase the production and distribution of 3D-printed devices across the rest of Gaza and the West Bank.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* 3. Double Media Column Grid with References */}
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
                                <span><em>Satellite mapping of Deir al-Balah distribution networks.</em></span>
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

            </Container>
        </section>
    );
}