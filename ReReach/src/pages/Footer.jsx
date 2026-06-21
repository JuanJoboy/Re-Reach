import { Container, Row, Col } from 'react-bootstrap';

export default function Footer({ scrollToSection })
{
    return (
        <footer className="bg-pal-green text-white-50 py-5 border-top border-white-10">
            <Container>
                <Row className="g-4 mb-4 text-start">
                    <Col sm={6} md={3}>
                        <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Re:Reach</h5>
                        <p className="small lh-base">A community-powered 3D printed prosthetics programme for Palestine, using e-NABLE open-source designs.</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">For printers</h5>
                        <ul className="list-unstyled small d-flex flex-column gap-1">
                            <li><button onClick={() => scrollToSection('case-matrix')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Download designs</button></li>
                            <li><button onClick={() => scrollToSection('logistics-pipeline')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Shipping guide</button></li>
                            <li><a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">e-NABLE Hub</a></li>
                        </ul>
                    </Col>

                    <Col sm={6} md={3}>
                        <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Other Ways to Help</h5>
                        <ul className="list-unstyled small d-flex flex-column gap-1">
                            <li><button onClick={() => scrollToSection('request-form')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Request a hand</button></li>
                            <li><button onClick={() => scrollToSection('donate')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Donate</button></li>
                        </ul>
                    </Col>

                    <Col sm={6} md={3}>
                        <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Contact</h5>
                        <p className="small m-0">support@reach.org</p>
                    </Col>
                </Row>

                <hr className="border-white-10" />
                <p className="text-center small text-white-50 m-0 pt-2">© 2026 Hands4Gaza. Designs licensed under e-NABLE Creative Commons. Built to give Palestine a helping hand.</p>
            </Container>
        </footer>
    );
}