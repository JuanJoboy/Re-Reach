import { Container, Row, Col, Card } from 'react-bootstrap';
import O from '../assets/O.jpeg';
import K from '../assets/K.jpg';
import P2 from '../assets/P2.jpg';
import P3 from '../assets/P3.jpg';
import U from '../assets/U.jpg';

export default function Designs()
{
    return (
        <section id="designs" className="bg-pal-green-light py-5">
            <Container className="py-4">
                <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                    Available Designs
                </h2>

                <Row className="g-3 mb-5">
                    <Col sm={6} md={4}>
                        <Card className="h-100 border bg-white overflow-hidden">
                            <Card.Img
                                variant="top"
                                src={P3}
                                alt="Phoenix v3"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <Card.Body className="p-3">
                                <h5 className="fw-bold text-pal-green">Phoenix v3</h5>
                                <p className="text-muted card-text small">This is a wrist-powered device. To use this design, the user must have a functional wrist and enough palm to push against the device to force the fingers closed when wrist is bent. This is a remix of the excellent Phoenix Hand v2 and Unlimbited Phoenix Hand.</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/208/e-nable-phoenix-hand-v3" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">Catalog Information</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100 border bg-white overflow-hidden">
                            <Card.Img
                                variant="top"
                                src={P2}
                                alt="Phoenix v2"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <Card.Body className="p-3">
                                <h5 className="fw-bold text-pal-green">Phoenix v2</h5>
                                <p className="text-muted card-text small">This is a wrist-powered device. To use this design, the user must have a functional wrist and enough palm to push against the device to force the fingers closed when wrist is bent.</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/31/phoenix-v2-hand" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">Catalog Information</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100 border bg-white overflow-hidden">
                            <Card.Img
                                variant="top"
                                src={O}
                                alt="Osprey Hand"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <Card.Body className="p-3">
                                <h5 className="fw-bold text-pal-green">Osprey Hand</h5>
                                <p className="text-muted card-text small">This is a wrist-powered device. To use this design, the user must have a functional wrist and enough palm to push against the device to force the fingers closed when wrist is bent.</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/33/osprey-hand" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">Catalog Information</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100 border bg-white overflow-hidden">
                            <Card.Img
                                variant="top"
                                src={K}
                                alt="Kinetic Hand"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <Card.Body className="p-3">
                                <h5 className="fw-bold text-pal-green">Kinetic Hand</h5>
                                <p className="text-muted card-text small">This is a wrist-powered device. To use this design, the user must have a functional wrist and enough palm to push against the device to force the fingers closed when the wrist is bent.</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/295/kinetic-hand" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">Catalog Information</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100 border bg-white overflow-hidden">
                            <Card.Img
                                variant="top"
                                src={U}
                                alt="Unlimbited Arm v2.1"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <Card.Body className="p-3">
                                <h5 className="fw-bold text-pal-green">Unlimbited Arm v2.1</h5>
                                <p className="text-muted card-text small">This is an elbow-driven device. To use this design, users must have a functional elbow that bends to force the fingers closed on the hand.</p>
                                <div className="d-flex gap-2 mt-3">
                                    <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/35/unlimbited-arm-v21" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-2 py-0 fw-bold small">Catalog Information</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}