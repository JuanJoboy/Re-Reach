import { Container } from 'react-bootstrap';

export default function Affiliates()
{
    return (
        <section className="bg-pal-cream py-5 text-center">
            <Container>
                <p className="text-uppercase tracking-wider fw-bold text-pal-terra small mb-1">Partners & Affiliations</p>
                <h2 className="fw-bold text-pal-green mb-4 h4">Working with</h2>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {['e-NABLE Community', 'ICRC / ALPC Gaza', 'PCRF', '3DP4ME', 'Islamic University of Gaza'].map((p) => (
                        <span key={p} className="bg-white border text-pal-green font-weight-bold px-3 py-2 small rounded shadow-sm">{p}</span>
                    ))}
                </div>
            </Container>
        </section>
    )
}