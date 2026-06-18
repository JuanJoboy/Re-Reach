import { Layers, ExternalLink, Shield } from 'lucide-react';

export default function Framework() {
  return (
    <section id="mission" className="py-5 container bg-white rounded my-4 shadow-sm">
      <div className="text-center mb-5">
        <span className="badge bg-pal-red mb-2 text-uppercase px-3 py-2">Operational Track</span>
        <h2 className="display-6 fw-bold">Our Agile Framework</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>Deploying decentralized, community-driven mechanics to bypass traditional import constraints.</p>
      </div>
      <div className="row g-4 px-3">
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light p-4">
            <Layers className="text-pal-green mb-3" size={36} />
            <h4 className="fw-bold">1. Digital Sizing</h4>
            <p className="text-muted small">Clinicians in Deir al-Balah map residual limbs against standardized scaling metrics via basic smartphone imaging pipelines.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light p-4">
            <ExternalLink className="text-pal-red mb-3" size={36} />
            <h4 className="fw-bold">2. Global Fabrication</h4>
            <p className="text-muted small">International volunteers receive localized design files via e-NABLE, printing models in durable, thermal-resistant PETG filament.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light p-4">
            <Shield className="text-pal-green mb-3" size={36} />
            <h4 className="fw-bold">3. Mosque-Based PT</h4>
            <p className="text-muted small">Assembled kits arrive for fitment. Local physiotherapists run targeted structural workouts out of neighborhood mosque spaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}