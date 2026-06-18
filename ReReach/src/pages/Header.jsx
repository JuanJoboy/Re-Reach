import { Container, Button } from 'react-bootstrap';

export default function Header({scrollToSection})
{
    return (
        <header id="hero" className="bg-pal-green text-white text-center hero-gradient position-relative" style={{ minHeight: '100vh', paddingTop: '110px', paddingBottom: '60px' }}>
            <Container className="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                <p className="text-pal-sand text-uppercase tracking-wider font-monospace mb-3 small fw-bold">
                    Open-source · Community-powered · Gaza
                </p>

                <h1 className="display-2 fw-extrabold text-white mb-3 tracking-tight">
                    Every print is<br /><span className="text-pal-sand font-normal italic">a hand restored.</span>
                </h1>

                <p className="text-white-50 mx-auto mb-5 px-2" style={{ maxWidth: '560px', fontSize: '1.1rem' }}>
                    We mobilise 3D printer owners worldwide to manufacture low-cost prosthetic hands for Gaza's amputees — then train local communities to assemble, fit, and maintain them independently.
                </p>

                {/* Core Numerical Counters Matrix Box */}
                <div className="d-flex flex-wrap gap-4 gap-md-5 justify-content-center px-4 py-4 mb-5 border border-white-10 rounded-3 w-100" style={{ maxWidth: '850px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="text-center">
                        <span className="counter-num text-pal-sand fw-extrabold d-block">500</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block" style={{ fontSize: '0.75rem' }}>Parts printed <small className="text-success small"></small></span>
                    </div>

                    <div className="text-center">
                        <span className="counter-num text-white fw-extrabold d-block">200</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block" style={{ fontSize: '0.75rem' }}>Hands Assembled</span>
                    </div>

                    <div className="text-center">
                        <span className="counter-num text-white fw-extrabold d-block">100</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block" style={{ fontSize: '0.75rem' }}>Recipients Fitted</span>
                    </div>

                    <div className="text-center">
                        <span className="counter-num text-white fw-extrabold d-block">140</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block" style={{ fontSize: '0.75rem' }}>Volunteer Printers</span>
                    </div>
                </div>

                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Button onClick={() => scrollToSection('printer')} variant="none" className="bg-pal-terra text-white px-4 py-2 font-weight-bold">
                    I have a 3D printer →
                    </Button>

                    <Button onClick={() => scrollToSection('donate')} variant="outline-light" className="px-4 py-2 font-weight-bold" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
                    Donate $35 — one hand
                    </Button>
                </div>
            </Container>
        </header>
    );
}