import { Row } from 'react-bootstrap';

export default function Header({heading, subheading, text})
{
    return (
        <Row className="mb-5">
            <h1 className="display-3 text-uppercase tracking-widest fw-black text-pal-terra mb-2" style={{ letterSpacing: '0.15em', fontWeight: '900' }}>
                {heading}
            </h1>
            <h2 className="display-4 fw-black text-pal-green mb-4" style={{ fontWeight: '900', letterSpacing: '-0.03em' }}>
                {subheading}
            </h2>
            <p className="lead fw-bold text-ink fs-4 m-0" style={{ lineHeight: '1.5' }}>
                {text}
            </p>
        </Row>
    );
}