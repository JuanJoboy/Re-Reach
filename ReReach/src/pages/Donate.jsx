import {useState} from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Donate()
{
    const [activeAmount, setActiveAmount] = useState('$35');
    const amounts = ['$35 — 1 hand', '$105 — 3 hands', '$350 — workshop', 'Other'];

    return (
        <section id="donate" className="bg-pal-terra text-white py-5 text-center">
            <Container className="py-4 mx-auto" style={{ maxWidth: '700px' }}>
                <h2 className="display-5 fw-extrabold text-white mb-2">Fund a hand.<br />Change a life.</h2>
                <p className="text-white-50 small mb-4 px-3">Every $35 covers one complete prosthetic hand — printed parts, hardware assembly kit, and fitting. 100% goes directly to materials and programme delivery.</p>

                <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
                    {amounts.map((amt) => (
                        <Button
                            key={amt}
                            onClick={() => setActiveAmount(amt)}
                            variant={activeAmount === amt ? 'light' : 'none'}
                            className={`px-3 py-2 fw-bold small rounded border border-white-50 ${activeAmount === amt ? 'text-pal-terra' : 'text-white'}`}
                            style={{ backgroundColor: activeAmount === amt ? '#fff' : 'rgba(255,255,255,0.15)' }}
                        >
                        {amt}
                        </Button>
                    ))}
                </div>

                <Button variant="light" className="text-pal-terra fw-extrabold px-5 py-3 rounded text-decoration-none fs-5 border-0 shadow-sm">
                    Donate now
                </Button>
            </Container>
        </section>
    );
}