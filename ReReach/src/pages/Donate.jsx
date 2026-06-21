import { useState } from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';
import { CreditCard, Heart } from 'lucide-react';

export default function Donate()
{
    const [activeAmount, setActiveAmount] = useState('$35 — 1 hand');
    const amounts = ['$35 — 1 hand', '$105 — 3 hands', '$350 — workshop'];

    return (
        <section id="donate" className="bg-pal-terra text-white py-5">
            <Container className="py-5 mx-auto" style={{ maxWidth: '650px' }}>

                {/* Header Section */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-black text-white text-uppercase tracking-wide mb-3" style={{ fontWeight: '900' }}>
                        Fund a hand.<br />Change a life.
                    </h2>
                    <p className="text-white-50 font-monospace small mx-auto m-0" style={{ maxWidth: '500px', lineHeight: '1.6' }}>
                        Every $35 covers one complete prosthetic hand - printed parts, hardware assembly kit, and fitting. 100% goes directly to materials and programme delivery.
                    </p>
                </div>

                {/* Main Donation Card */}
                <Card className="border-0 bg-white p-4 p-md-5 rounded-3 shadow-lg text-dark">

                    {/* Tier Selection */}
                    <div className="text-center mb-4">
                        <label className="d-block text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">
                            Select Donation Amount
                        </label>
                        <div className="d-flex flex-column gap-2">
                            {amounts.map((amt) => (
                                <Button
                                    key={amt}
                                    onClick={() => setActiveAmount(amt)}
                                    className={`w-100 py-3 fw-bold font-monospace border rounded-2 transition-all shadow-sm ${
                                        activeAmount === amt
                                            ? 'bg-pal-green border-pal-green text-white'
                                            : 'bg-pal-green-light border-light text-black'
                                    }`}
                                    style={{ fontSize: '0.95rem' }}
                                >
                                    {amt}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <hr className="my-4 opacity-10" />

                    {/* Donor & Payment Form */}
                    <Form>
                        <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">
                            Donor Information
                        </h5>
                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <Form.Group controlId="donorName">
                                    <Form.Label className="small font-monospace text-ink fw-bold">Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="John Doe" className="rounded-2 border-light bg-pal-green-light font-monospace" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="donorEmail">
                                    <Form.Label className="small font-monospace text-ink fw-bold">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="john@example.com" className="rounded-2 border-light bg-pal-green-light font-monospace" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">
                            Payment Details
                        </h5>
                        <Card className="bg-pal-green-light border border-light p-3 mb-4 rounded-2">
                            <Row className="g-3">
                                <Col md={12}>
                                    <Form.Group controlId="donorCardNum">
                                        <Form.Label className="small font-monospace text-ink fw-bold d-flex align-items-center gap-2">
                                            <CreditCard size={14} /> Card Number
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="0000 0000 0000 0000" className="rounded-2 border-white font-monospace" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6} { ...{ xs: 6 } }>
                                    <Form.Group controlId="donorCardExpiry">
                                        <Form.Label className="small font-monospace text-ink fw-bold">Expiry Date</Form.Label>
                                        <Form.Control type="text" placeholder="MM/YY" className="rounded-2 border-white font-monospace" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6} { ...{ xs: 6 } }>
                                    <Form.Group controlId="donorCardCvc">
                                        <Form.Label className="small font-monospace text-ink fw-bold">CVC</Form.Label>
                                        <Form.Control type="text" placeholder="123" className="rounded-2 border-white font-monospace" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card>

                        {/* Submit Button */}
                        <Button type="submit" className="btn bg-pal-terra border-0 w-100 d-flex align-items-center justify-content-center gap-2 text-uppercase font-monospace tracking-wider fw-bold text-white py-3 shadow-sm rounded-2">
                            <Heart size={16} fill="currentColor" />
                            Process Donation
                        </Button>
                    </Form>
                </Card>
            </Container>
        </section>
    );
}