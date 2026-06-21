import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { User, Camera, Palette, Upload } from 'lucide-react';

export default function RequestForm()
{
    return (
        <section id="request-form" className="bg-white py-5">
            <Container className="py-5">

                {/* Header Block */}
                <div className="mb-5">
                    <h1 className="display-1 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                        Application / تقديم الطلب
                    </h1>
                    <h2 className="display-3 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                        Request a Hand / طلب طرف اصطناعي
                    </h2>
                </div>

                {/* Main Operational Form */}
                <Form onSubmit={(e) => e.preventDefault()} className="bg-pal-cream p-4 p-md-5 rounded-3 shadow-sm">

                    {/* Section 1: Personal Profile */}
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-2 mb-4 text-pal-green fw-black text-uppercase font-monospace tracking-wider border-bottom border-light pb-3 fs-4">
                            <User size={24} strokeWidth={2.5} />
                            <span>1. Recipient Profile / بيانات المستفيد</span>
                        </div>

                        <Row className="g-3">
                            <Form.Group as={Col} sm={8}>
                                <Form.Label className="small fw-black text-ink fs-6">Full Name / الاسم الكامل</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First, middle, and family name"
                                    className="bg-white border-light rounded-2 py-2 small"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} sm={4}>
                                <Form.Label className="small fw-black text-ink fs-6">Age / العمر</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Years"
                                    className="bg-white border-light rounded-2 py-2 small"
                                    required
                                />
                            </Form.Group>
                        </Row>
                    </div>

                    {/* Section 2: Amputation Diagnostics */}
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-2 mb-4 text-pal-green fw-black text-uppercase font-monospace tracking-wider border-bottom border-light pb-3 fs-4">
                            <Camera size={24} strokeWidth={2.5} />
                            <span>2. Clinical Diagnostics / التشخيص السريري</span>
                        </div>

                        <Row className="g-3">
                            <Form.Group as={Col} sm={6}>
                                <Form.Label className="small fw-black text-ink fs-6">Amputation Level / مستوى البتر</Form.Label>
                                <Form.Select className="bg-white border-light rounded-2 py-2 small" required>
                                    <option value="">Select Level / اختر المستوى</option>
                                    <option>Transradial / عبر عظم الكعبرة (تحت المرفق)</option>
                                    <option>Wrist Disarticulation / بتر من مفصل الرسغ</option>
                                    <option>Transhumeral / عبر عظم العضد (فوق المرفق)</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} sm={6}>
                                <Form.Label className="small fw-black text-ink fs-6">Affected Side / الجانب المصاب</Form.Label>
                                <Form.Select className="bg-white border-light rounded-2 py-2 small" required>
                                    <option value="">Select Side / اختر الجانب</option>
                                    <option>Left Arm / الطرف الأيسر</option>
                                    <option>Right Arm / الطرف الأيمن</option>
                                    <option>Bilateral / كلا الطرفين</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </div>

                    {/* Section 3: Standard Sizing Photographs - Mandatory for Blender Scaling */}
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-2 mb-3 text-pal-green fw-black text-uppercase font-monospace tracking-wider border-bottom border-light pb-3 fs-4">
                            <Camera size={24} strokeWidth={2.5} />
                            <span>3. Standardized Sizing Photos / صور القياس المعيارية</span>
                        </div>
                        <p className="text-muted small mb-4 font-monospace fw-bold">
                            All photos must be taken outdoors or in high light, exactly 2 metres away, facing a wall-mounted ruler aligned at patient nose height. <strong>Discrepancies exceeding 2-3 mm render the final print unusable.</strong>
                        </p>

                        <Row className="g-3">
                            {[
                                { id: 'p1', label: 'Photo 1: Arms Extended Flat Against Wall / الذراعان ممدودتان بشكل مسطح على الحائط' },
                                { id: 'p2', label: 'Photo 2: Affected Wrist Horizontal & Flat / الرسغ المصاب بوضعية أفقية ومسطحة' },
                                { id: 'p3', label: 'Photo 3: Affected Wrist Fully Flexed / الرسغ المصاب في أقصى انحناء للداخل' },
                                { id: 'p4', label: 'Photo 4: Affected Wrist Fully Extended / الرسغ المصاب في أقصى انحناء للخارج' }
                            ].map((photo, idx) => (
                                <Col md={6} key={photo.id}>
                                    <Form.Group>
                                        <Form.Label className="small fw-black text-ink font-monospace" style={{ fontSize: '0.85rem' }}>
                                            {idx + 1}. {photo.label}
                                        </Form.Label>
                                        <div className="border bg-white p-3 text-center rounded-2 position-relative">
                                            <Upload size={20} className="text-muted mb-1 mx-auto d-block" />
                                            <span className="d-block text-muted font-monospace" style={{ fontSize: '0.7rem' }}>Select Photo Asset / اختر ملف الصورة</span>
                                            <Form.Control
                                                type="file"
                                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                                                style={{ cursor: 'pointer' }}
                                                required
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Section 4: Aesthetics & Finishes */}
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-2 mb-4 text-pal-green fw-black text-uppercase font-monospace tracking-wider border-bottom border-light pb-3 fs-4">
                            <Palette size={24} strokeWidth={2.5} />
                            <span>4. Customisation / التخصيص والمظهر</span>
                        </div>

                        <Row className="g-3">
                            <Form.Group as={Col} sm={6}>
                                <Form.Label className="small fw-black text-ink fs-6">Desired Filament Colour / لون خيط الطباعة المطلوب</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Skin Tone, Blue, Desert Tan"
                                    className="bg-white border-light rounded-2 py-2 small"
                                />
                            </Form.Group>

                            <Form.Group as={Col} sm={6}>
                                <Form.Label className="small fw-black text-ink fs-6">Additional Notes / ملاحظات ونقوش إضافية</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Crescent Moon, Star Pattern"
                                    className="bg-white border-light rounded-2 py-2 small"
                                />
                            </Form.Group>
                        </Row>
                    </div>

                    {/* Form Action Submissions */}
                    <Button variant="none" type="submit" className="w-100 bg-pal-terra text-white fw-black py-3 rounded-2 shadow-sm text-uppercase font-monospace tracking-wide fs-5">
                        Submit Application / إرسال الطلب للمطابقة الرقمية
                    </Button>

                </Form>
            </Container>
        </section>
    );
}