import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import Logo from '../assets/Logo.png';

export default function NavbarComponent({ scrollToSection })
{
    return (
        <Navbar expand="lg" fixed="top" className="bg-pal-terra-dark shadow-lg py-2">
            <Container fluid="lg">
                <Navbar.Brand as="button" onClick={() => scrollToSection('hero')} className="border-0 bg-transparent d-flex align-items-center gap-4 p-0">
                    <span className="fw-bold text-pal-cream" style={{fontSize: '1.5rem',letterSpacing: '0.05em'}}>Re:Reach</span>
                    <Image src={Logo} alt="Re:Reach Logo" width={42} height={42} className="rounded-circle"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-nav" />

                <Navbar.Collapse id="main-nav">
                    {/* Center Navigation */}
                    <Nav className="mx-auto align-items-center gap-lg-4 gap-xl-5">
                        <Nav.Link as="button" onClick={() => scrollToSection('hero')} className="border-0 bg-transparent text-white fw-medium">
                            Our Mission
                        </Nav.Link>

                        <Nav.Link as="button" onClick={() => scrollToSection('case-matrix')} className="border-0 bg-transparent text-white fw-medium">
                            Active Cases
                        </Nav.Link>

                        <Nav.Link as="button" onClick={() => scrollToSection('logistics-pipeline')} className="border-0 bg-transparent text-white fw-medium">
                            Shipping
                        </Nav.Link>

                        <Nav.Link as="button" onClick={() => scrollToSection('request-form')} className="border-0 bg-transparent text-white fw-medium">
                            Request a Hand
                        </Nav.Link>
                    </Nav>

                    {/* Donate Button */}
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => scrollToSection('donate')} className="bg-pal-green-mid text-white fw-bold px-3 py-1 small w-100 w-md-auto border-0">
                            Donate
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}