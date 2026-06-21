import { Container, Button } from 'react-bootstrap';

export default function Header({scrollToSection})
{
    return (
        <header id="hero" className="bg-pal-green text-white text-center hero-gradient position-relative d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '40px' }}>
            <Container className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '1200px' }}>
                <p className="text-pal-sand text-uppercase tracking-wider font-monospace mb-3 fw-bold" style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                    Open-source · Community-powered · Gaza
                </p>

                <h1 className="fw-extrabold text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', fontWeight: '900', lineHeight: '1.1' }}>
                    Every print is<br /><span className="text-pal-sand font-normal italic">a hand restored.</span>
                </h1>

                <p className="text-white-50 mx-auto mb-5 px-2" style={{ maxWidth: '800px', fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)', lineHeight: '1.5' }}>
                    We mobilise 3D printer owners worldwide to manufacture low-cost prosthetic hands for Gaza's amputees, then train local communities to assemble, fit, and maintain them independently.
                </p>

                {/* Core Numerical Counters Matrix Box */}
                <div className="d-flex flex-wrap gap-4 gap-md-5 justify-content-around px-4 py-4 mb-5 border border-white-10 rounded-3 w-100" style={{ maxWidth: '1100px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="text-center px-2">
                        <span className="counter-num text-pal-sand fw-extrabold d-block" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', lineHeight: '1' }}>500</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block mt-2" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', fontWeight: '700' }}>Parts printed</span>
                    </div>

                    <div className="text-center px-2">
                        <span className="counter-num text-white fw-extrabold d-block" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', lineHeight: '1' }}>200</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block mt-2" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', fontWeight: '700' }}>Hands Assembled</span>
                    </div>

                    <div className="text-center px-2">
                        <span className="counter-num text-white fw-extrabold d-block" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', lineHeight: '1' }}>100</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block mt-2" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', fontWeight: '700' }}>Recipients Fitted</span>
                    </div>

                    <div className="text-center px-2">
                        <span className="counter-num text-white fw-extrabold d-block" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', lineHeight: '1' }}>140</span>
                        <span className="text-white-50 text-uppercase tracking-wider d-block mt-2" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', fontWeight: '700' }}>Volunteer Printers</span>
                    </div>
                </div>

                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Button onClick={() => scrollToSection('case-matrix')} variant="none" className="bg-pal-terra text-white px-5 py-3 font-weight-bold shadow-sm" style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', borderRadius: 'var(--radius)' }}>
                    I have a 3D printer →
                    </Button>

                    <Button onClick={() => scrollToSection('donate')} variant="none" className="bg-pal-green-mid text-white px-5 py-3 font-weight-bold shadow-sm" style={{ borderColor: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', borderRadius: 'var(--radius)' }}>
                    Donate $35 — one hand
                    </Button>
                </div>
            </Container>
        </header>
    );
}