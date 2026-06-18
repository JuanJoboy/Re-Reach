import { Container, Row, Col } from 'react-bootstrap';

export default function Footer({scrollToSection})
{
    return (
        <footer className="bg-pal-green text-white-50 py-5 border-top border-white-10">
            <Container>
                <Row className="g-4 mb-4 text-start">
                    <Col sm={6} md={3}>
                    <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Hands4Gaza</h5>
                    <p className="small lh-base">A community-powered 3D printed prosthetics programme for Gaza, using e-NABLE open-source designs.</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">For printers</h5>
                    <ul className="list-unstyled small d-flex flex-column gap-1">
                        <li><button onClick={() => scrollToSection('designs')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Download designs</button></li>
                        <li><button onClick={() => scrollToSection('shipping')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Shipping guide</button></li>
                        <li><a href="https://enablingthefuture.org" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">e-NABLE Hub</a></li>
                    </ul>
                    </Col>

                    <Col sm={6} md={3}>
                    <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Resources</h5>
                    <ul className="list-unstyled small d-flex flex-column gap-1">
                        <li><button onClick={() => scrollToSection('impact')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Impact tracker</button></li>
                        <li><button onClick={() => scrollToSection('request')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Request a hand</button></li>
                        <li><button onClick={() => scrollToSection('donate')} className="btn btn-link text-white-50 text-decoration-none p-0 small text-start border-0 bg-transparent">Donate</button></li>
                    </ul>
                    </Col>

                    <Col sm={6} md={3}>
                    <h5 className="text-pal-sand small text-uppercase fw-bold mb-3">Contact</h5>
                    <p className="small m-0">hello@hands4gaza.org</p>
                    </Col>
                </Row>

                <hr className="border-white-10" />
                <p className="text-center small text-white-50 m-0 pt-2">© 2026 Hands4Gaza. Designs licensed under e-NABLE Creative Commons. Built to give the world a helping hand.</p>
            </Container>
        </footer>
    )
}
