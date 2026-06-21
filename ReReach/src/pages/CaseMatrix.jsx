import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { User, Palette, NotebookTextIcon, Download, Cpu, Clock, Info, Truck, RefreshCw, CreditCard, Upload } from 'lucide-react';

export default function CaseMatrix()
{
    const patients = [
        {
            id: 1,
            name: "Ahmad Al-Masri",
            age: 8,
            amputationType: "Transradial (Below Elbow)",
            color: "Desert Tan (Skin Tone matching)",
            stlUrl: "https://storage.hands4gaza.org/stl/ahmad-masri-phoenix-v3-115.zip",
            productionSpecs: {
                deviceModel: "Phoenix Hand v3",
                scalingFactor: "115%",
                materialTarget: "PETG / PLA",
                estPrintTime: "14h 45m"
            },
            notes: "Wants a small crescent moon emblem engraved on the forearm shell.",
            priority: "High - Growth Phase"
        },
        {
            id: 2,
            name: "Fatima Mansour",
            age: 14,
            amputationType: "Wrist Disarticulation",
            color: "Emerald Green & White accents",
            stlUrl: "https://storage.hands4gaza.org/stl/fatima-sour-kinetic-130.zip",
            productionSpecs: {
                deviceModel: "Kinetic Hand",
                scalingFactor: "130%",
                materialTarget: "PETG / PLA",
                estPrintTime: "18h 20m"
            },
            notes: "N/A",
            priority: "Active Case"
        },
        {
            id: 3,
            name: "Youssef Khoury",
            age: 6,
            amputationType: "Transradial (Below Elbow)",
            color: "Bright Sky Blue",
            stlUrl: "https://storage.hands4gaza.org/stl/youssef-khoury-phoenix-v3-105.zip",
            productionSpecs: {
                deviceModel: "Phoenix Hand v3",
                scalingFactor: "105%",
                materialTarget: "PETG / PLA",
                estPrintTime: "12h 10m"
            },
            notes: "Child explicitly requested a custom star pattern engraving on the outer cuff.",
            priority: "High - Growth Phase"
        },
        {
            id: 4,
            name: "Nour Darwish",
            age: 10,
            amputationType: "Transradial (Below Elbow)",
            color: "Pure White & Red accents",
            stlUrl: "https://storage.hands4gaza.org/stl/nour-darwish-unlimbited-2.1-120.zip",
            productionSpecs: {
                deviceModel: "Unlimbited Arm v2.1",
                scalingFactor: "120%",
                materialTarget: "PETG / PLA",
                estPrintTime: "22h 05m"
            },
            notes: "Requested a custom geometric pattern lining the forearm casing.",
            priority: "Active Case"
        },
        {
            id: 5,
            name: "Ziad Haddad",
            age: 11,
            amputationType: "Wrist Disarticulation",
            color: "Matte Charcoal Grey",
            stlUrl: "https://storage.hands4gaza.org/stl/ziad-haddad-phoenix-v3-122.zip",
            productionSpecs: {
                deviceModel: "Phoenix Hand v3",
                scalingFactor: "122%",
                materialTarget: "PETG / PLA",
                estPrintTime: "16h 15m"
            },
            notes: "N/A",
            priority: "Active Case"
        },
        {
            id: 6,
            name: "Amal Tazi",
            age: 5,
            amputationType: "Transradial (Below Elbow)",
            color: "Vibrant Sunflower Yellow",
            stlUrl: "https://storage.hands4gaza.org/stl/amal-tazi-phoenix-v3-100.zip",
            productionSpecs: {
                deviceModel: "Phoenix Hand v3",
                scalingFactor: "100%",
                materialTarget: "PETG / PLA",
                estPrintTime: "11h 30m"
            },
            notes: "N/A",
            priority: "High - Growth Phase"
        }
    ];

    return (
        <section id="case-matrix" className="bg-pal-cream py-5">
            <Container className="py-5">

                {/* Header Block */}
                <Row className="mb-4">
                    <Col lg={9}>
                        <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                            Patient Registry
                        </h1>
                        <p className="lead fw-bold text-ink fs-5 m-0" style={{ lineHeight: '1.5' }}>
                            All active cases requiring remote fabrication. Download pre-scaled STL packages verified by the remote design desk.
                        </p>
                    </Col>
                </Row>

                {/* Scrollable Container Window */}
                <div
                    className="pe-2 mb-5"
                    style={{
                        maxHeight: '780px',
                        overflowY: 'auto',
                        scrollbarWidth: 'thin',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <Row className="g-4">
                        {patients.map((patient) => {
                            return (
                                <Col key={patient.id} md={4}>
                                    <Card className="h-100 border-0 bg-white shadow-sm overflow-hidden rounded-3">

                                        {/* Top Square Image Container Space */}
                                        <div
                                            className="bg-light position-relative d-flex align-items-center justify-content-center border-bottom"
                                            style={{ width: '100%', aspectRatio: '1 / 1' }}
                                        >
                                            <div className="text-center text-muted opacity-50">
                                                <User size={64} strokeWidth={1} />
                                                <span className="d-block small font-monospace mt-2">{patient.name}</span>
                                            </div>
                                        </div>

                                        {/* Lower Informational Data Block */}
                                        <Card.Body className="p-4 d-flex flex-column gap-3">

                                            {/* Name and Age Group */}
                                            <div className="border-bottom border-light pb-2">
                                                <h4
                                                    className="fw-black text-pal-green m-0 mb-1"
                                                    style={{ fontWeight: '800' }}
                                                >
                                                    {patient.name}
                                                </h4>

                                                <span
                                                    className="badge bg-pal-green text-pal-sand font-monospace fw-bold px-2 py-1"
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    Age: {patient.age} years
                                                </span>
                                            </div>

                                            {/* Machine Production Blueprint Metrics */}
                                            <div className="text-start">
                                                <div className="d-flex align-items-center gap-2 mb-2 text-pal-green fw-bold small text-uppercase font-monospace tracking-wider">
                                                    <Cpu size={16} />
                                                    <span>Prosthesis</span>
                                                </div>

                                                <ul className="list-unstyled font-monospace text-muted small m-0 ps-1 d-flex flex-column gap-1">
                                                    <li>
                                                        <span className="text-ink fw-bold">Model:</span> {patient.productionSpecs.deviceModel}
                                                    </li>
                                                    <li>
                                                        <span className="text-ink fw-bold">Scale:</span> {patient.productionSpecs.scalingFactor}
                                                    </li>
                                                    <li>
                                                        <span className="text-ink fw-bold">Filament:</span> {patient.productionSpecs.materialTarget}
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Estimated Print Time Section */}
                                            <div className="text-start">
                                                <div className="d-flex align-items-center gap-2 mb-1 text-pal-green fw-bold small text-uppercase font-monospace tracking-wider">
                                                    <Clock size={16} />
                                                    <span>Est. Print Time</span>
                                                </div>

                                                <p className="text-muted small m-0 ps-1 font-monospace fw-bold text-ink">
                                                    {patient.productionSpecs.estPrintTime}
                                                </p>
                                            </div>

                                            {/* Colour Choice */}
                                            <div className="text-start">
                                                <div className="d-flex align-items-center gap-2 mb-1 text-pal-green fw-bold small text-uppercase font-monospace tracking-wider">
                                                    <Palette size={16} />
                                                    <span>Colour</span>
                                                </div>

                                                <p className="text-muted small m-0 ps-1 fw-medium">
                                                    {patient.color}
                                                </p>
                                            </div>

                                            {/* Additional Notes & Engravings */}
                                            <div className="text-start bg-pal-cream p-3 rounded-3 border border-light">
                                                <div className="d-flex align-items-center gap-2 mb-1 text-pal-terra fw-bold small text-uppercase font-monospace tracking-wider">
                                                    <NotebookTextIcon size={14} />
                                                    <span>Notes</span>
                                                </div>

                                                <p className="text-ink small m-0 lh-base style-italic">
                                                    "{patient.notes}"
                                                </p>
                                            </div>

                                            {/* Action Button: Download Scale Verified STL Assets */}
                                            <a
                                                href={patient.stlUrl}
                                                className="btn bg-pal-terra w-100 d-flex align-items-center justify-content-center gap-2 mt-auto py-2 text-uppercase font-monospace tracking-wider fw-bold text-white shadow-sm"
                                                style={{ fontSize: '0.85rem' }}
                                            >
                                                <Download size={16} />
                                                Download Pre-Scaled STLs
                                            </a>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>

                {/* Material Supply & Reimbursement Program Notice */}
                <Row className="mb-5">
                    <Col md={12}>
                        <Card className="border-0 bg-white p-4 rounded-3 shadow-sm">
                            <Card.Body className="p-0">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <Info className="text-pal-terra" size={24} />
                                    <h4 className="fw-bold m-0 text-pal-green h5">Filament Supply & Reimbursement Program</h4>
                                </div>
                                <Row className="g-4">
                                    <Col md={6} className="d-flex gap-3 align-items-start">
                                        <Truck className="text-pal-green mt-1 shrink-0" size={20} />
                                        <div>
                                            <strong className="d-block text-ink small text-uppercase font-monospace tracking-wider">1. Material Provision</strong>
                                            <span className="text-muted small">
                                                If you lack printing materials to get the device ready, submit your delivery details via our dispatch form below. We will ship the filament and required packs directly to your address.
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={6} className="d-flex gap-3 align-items-start">
                                        <RefreshCw className="text-pal-green mt-1 shrink-0" size={20} />
                                        <div>
                                            <strong className="d-block text-ink small text-uppercase font-monospace tracking-wider">2. Cost Reimbursement</strong>
                                            <span className="text-muted small">
                                                If you purchased from us, you are eligible for a full refund. Log your receipt, and when the arm has reached the city, a member from our team will contact you regarding your refund.
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Material Order Form Area */}
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto">
                        <Card className="border-0 bg-white p-4 p-md-5 rounded-3 shadow-sm">
                            <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                                <Truck className="text-pal-terra" size={24} />
                                <h3 className="fw-black text-uppercase m-0 text-pal-green font-monospace h4" style={{ fontWeight: '800' }}>Order Assembly Kits & Filament | $35</h3>
                            </div>

                            <Form>
                                <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">Contact Information</h5>
                                <Row className="g-3 mb-4">
                                    <Col md={6}>
                                        <Form.Group controlId="orderName">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="John Doe" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="orderEmail">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="john@example.com" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="orderPhone">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="+1 (555) 000-0000" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">Shipping Address</h5>
                                <Form.Group controlId="orderAddress" className="mb-4">
                                    <Form.Label className="small font-monospace text-ink fw-bold">Street Address, City, State</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="123 Main Street&#10;Melbourne, VIC&#10;Australia" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                </Form.Group>

                                <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">Payment Information</h5>
                                <Card className="bg-pal-green-light border border-light p-3 mb-4 rounded-2">
                                    <Row className="g-3">
                                        <Col md={12}>
                                            <Form.Group controlId="cardNum">
                                                <Form.Label className="small font-monospace text-ink fw-bold d-flex align-items-center gap-2">
                                                    <CreditCard size={14} /> Card Number
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="0000 0000 0000 0000" className="rounded-2 border-white font-monospace" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} { ...{ xs: 6 } }>
                                            <Form.Group controlId="cardExpiry">
                                                <Form.Label className="small font-monospace text-ink fw-bold">Expiry Date</Form.Label>
                                                <Form.Control type="text" placeholder="MM/YY" className="rounded-2 border-white font-monospace" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} { ...{ xs: 6 } }>
                                            <Form.Group controlId="cardCvc">
                                                <Form.Label className="small font-monospace text-ink fw-bold">CVC</Form.Label>
                                                <Form.Control type="text" placeholder="123" className="rounded-2 border-white font-monospace" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card>

                                <Button type="submit" className="btn bg-pal-terra border-0 w-100 text-uppercase font-monospace tracking-wider fw-bold text-white py-3 shadow-sm rounded-2">
                                    Purchase Materials & Hardware
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>

                {/* Receipt Upload & Reimbursement Area */}
                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card className="border-0 bg-white p-4 p-md-5 rounded-3 shadow-sm">
                            <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                                <RefreshCw className="text-pal-green" size={24} />
                                <h3 className="fw-black text-uppercase m-0 text-pal-green font-monospace h4" style={{ fontWeight: '800' }}>Submit Receipt for Reimbursement</h3>
                            </div>

                            <Form>
                                <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">Volunteer Identification</h5>
                                <Row className="g-3 mb-4">
                                    <Col md={4}>
                                        <Form.Group controlId="refundName">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="John Doe" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="refundEmail">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="john@example.com" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="refundPhone">
                                            <Form.Label className="small font-monospace text-ink fw-bold">Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="+1 (555) 000-0000" className="rounded-2 border-light bg-pal-green-light font-monospace" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h5 className="text-uppercase font-monospace text-muted small fw-bold mb-3 tracking-wider">Proof of Purchase</h5>
                                <Form.Group controlId="refundFile" className="mb-4">
                                    <Form.Label className="small font-monospace text-ink fw-bold">Upload Material / Shipping Invoice</Form.Label>
                                    <div className="border-dashed border-2 border-light bg-pal-green-light rounded-3 p-4 text-center position-relative">
                                        <input type="file" className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer" style={{ cursor: 'pointer' }} />
                                        <Upload className="text-muted mb-2 mx-auto" size={32} />
                                        <span className="d-block small font-monospace text-muted">Click or drag receipt image / PDF here</span>
                                    </div>
                                </Form.Group>

                                <Button type="submit" className="btn bg-pal-terra border-0 w-100 text-uppercase font-monospace tracking-wider fw-bold text-white py-3 shadow-sm rounded-2">
                                    Submit Claim for Processing
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </section>
    );
}