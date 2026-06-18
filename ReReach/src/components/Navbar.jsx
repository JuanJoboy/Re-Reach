import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function NavbarComponent({ scrollToSection })
{
    return (
        <Navbar expand="md" variant="dark" fixed="top" className="bg-pal-green py-2">
            <Container fluid="md" className="px-3">
                <Navbar.Brand
                    as="button"
                    onClick={() => scrollToSection('hero')}
                    className="border-0 bg-transparent text-white fw-bold fs-5 d-flex align-items-center gap-1"
                >
                    🤝 Hands<span className="text-pal-sand">4Gaza</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4 text-center pt-3 pt-md-0">
                        <Nav.Link as="button" onClick={() => scrollToSection('printer')} className="text-white opacity-75 border-0 bg-transparent small px-0 py-2 py-md-0">I Have a Printer</Nav.Link>
                        <Nav.Link as="button" onClick={() => scrollToSection('designs')} className="text-white opacity-75 border-0 bg-transparent small px-0 py-2 py-md-0">Designs</Nav.Link>
                        <Nav.Link as="button" onClick={() => scrollToSection('impact')} className="text-white opacity-75 border-0 bg-transparent small px-0 py-2 py-md-0">Impact</Nav.Link>
                        <Nav.Link as="button" onClick={() => scrollToSection('request')} className="text-white opacity-75 border-0 bg-transparent small px-0 py-2 py-md-0">Request a Hand</Nav.Link>
                    </Nav>

                    <div className="pt-3 pt-md-0 text-start">
                        <Button
                            onClick={() => scrollToSection('donate')}
                            variant="none"
                            className="bg-pal-terra text-white fw-bold px-3 py-1 small w-100 w-md-auto"
                            style={{ borderRadius: 'var(--radius)' }}
                        >
                            Donate
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}