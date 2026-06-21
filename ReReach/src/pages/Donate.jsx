import { useState } from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';
import { CreditCard, Heart, CheckCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function Donate()
{
    const [activeAmount, setActiveAmount] = useState('$35 — 1 Hand');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const amounts = ['$35 — 1 Hand', '$105 — 3 Hands', '$350 — Workshop'];

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Generate unique transaction reference (Format: DON-YYYYMMDD-RANDOM)
        const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const randomId = Math.floor(1000 + Math.random() * 9000);
        const transactionRef = `DON-${dateStr}-${randomId}`;

        // 2. Initialise jsPDF
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // 3. Render PDF Structural Typography
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(22);
        doc.setTextColor(45, 74, 30); // Theme Brand colour (--green)
        doc.text('RE:REACH', 20, 20);

        doc.setFontSize(12);
        doc.setTextColor(200, 80, 42); // Theme Accent colour (--terra)
        doc.text('OFFICIAL DONATION RECEIPT', 20, 28);

        // Decorative separating metric bar
        doc.setDrawColor(200, 80, 42);
        doc.setLineWidth(0.5);
        doc.line(20, 32, 190, 32);

        // Transaction Details Layout
        doc.setFont('Helvetica', 'normal');
        doc.setTextColor(26, 26, 26);
        doc.setFontSize(10);
        doc.text(`Date: ${new Date().toLocaleDateString('en-AU')}`, 20, 42);
        doc.text(`Donor Name: ${donorName}`, 20, 48);
        doc.text(`Email Address: ${donorEmail}`, 20, 54);
        doc.text(`Contribution: ${activeAmount}`, 20, 60);

        // Appreciation Note
        doc.setFont('Helvetica', 'oblique');
        doc.text('Thank you for providing a life-altering helping hand.', 20, 70);

        // Base layout metadata signatures
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(92, 92, 92);
        doc.text('This document serves as formal proof of a donation.', 20, 255);

        // Unique Identifier Footer Tag
        doc.setDrawColor(232, 240, 225);
        doc.line(20, 265, 190, 265);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(200, 80, 42);
        doc.text(`TRANSACTION REF: ${transactionRef}`, 20, 274);

        // 4. Trigger localized download thread stream layout
        doc.save(`Donation_Receipt_${transactionRef}.pdf`);

        setIsSubmitted(true);
    };

    return (
        <section id="donate" className="bg-pal-terra text-white py-5">
            <Container className="py-5 mx-auto" style={{ maxWidth: '650px' }}>

                {/* Header Section */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-black text-white text-uppercase tracking-wide mb-3" style={{ fontWeight: '900' }}>
                        Fund a hand.<br />Change a life.
                    </h2>
                    <p className="text-white-50 font-monospace medium mx-auto m-0" style={{ maxWidth: '500px', lineHeight: '1.6' }}>
                        Every $35 covers one complete prosthetic hand - printed parts, hardware assembly kit, and fitting. 100% goes directly to materials and programme delivery.
                    </p>
                </div>

                {/* Main Donation Card */}
                <Card className="border-0 bg-white p-4 p-md-5 rounded-3 shadow-lg text-dark">
                    {!isSubmitted ? (
                        <Form onSubmit={handleSubmit}>
                            {/* Tier Selection */}
                            <div className="text-center mb-4">
                                <label className="d-block text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">
                                    Select Donation Amount
                                </label>
                                <div className="d-flex flex-column gap-2">
                                    {amounts.map((amt) => (
                                        <Button
                                            key={amt}
                                            type="button"
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
                            <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">
                                Donor Information
                            </h5>
                            <Row className="g-3 mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="donorName">
                                        <Form.Label className="small font-monospace text-ink fw-bold">Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="John Doe" className="rounded-2 border-light bg-pal-green-light font-monospace" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="donorEmail">
                                        <Form.Label className="small font-monospace text-ink fw-bold">Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="john@example.com" className="rounded-2 border-light bg-pal-green-light font-monospace" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} required />
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
                    ) : (
                        /* Success View Container Block */
                        <div className="text-center py-4">
                            <CheckCircle size={64} className="text-pal-green mb-3" />
                            <h4 className="fw-black text-uppercase text-pal-green font-monospace mb-2" style={{ fontWeight: '800' }}>
                                Donation Successful
                            </h4>
                            <p className="text-muted small font-monospace mb-4">
                                Thank you for your support. The children of Palestine thank you. Your receipt has been downloaded.
                            </p>
                            <Button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setDonorName('');
                                    setDonorEmail('');
                                }}
                                className="btn bg-pal-terra border-0 text-uppercase font-monospace tracking-wider fw-bold text-white px-4 py-2 rounded-2 shadow-sm"
                                style={{ fontSize: '0.85rem' }}
                            >
                                Make Another Donation
                            </Button>
                        </div>
                    )}
                </Card>
            </Container>
        </section>
    );
}