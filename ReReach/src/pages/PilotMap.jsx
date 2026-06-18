import { MapPin, Activity } from 'lucide-react';

export default function PilotMap() {
  return (
    <section id="map" className="py-5 container bg-white rounded my-4 shadow-sm">
      <div className="row align-items-center g-5 px-3">
        <div className="col-lg-6">
          <span className="badge bg-pal-green mb-2 text-uppercase">Deployment Base</span>
          <h2 className="fw-bold mb-3">Target Anchor: Deir al-Balah</h2>
          <p className="text-muted">
            Deir al-Balah serves as the logical tactical footprint due to lower baseline destruction rates and accessible medical pipelines.
          </p>
          <div className="d-flex align-items-start gap-3 mb-4">
            <MapPin className="text-pal-red flex-shrink-0 mt-1" size={22} />
            <div>
              <strong className="d-block text-pal-black">IMC Field Hospital Hub</strong>
              <span className="text-muted small">68,000-square-foot facility providing primary surgical infrastructure and critical revision management.</span>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <Activity className="text-pal-green flex-shrink-0 mt-1" size={22} />
            <div>
              <strong className="d-block text-pal-black">Regional Mosque Spokes</strong>
              <span className="text-muted small">Four structural hubs utilized to run community-based screening points, avoiding primary health facility congestion.</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-pal-black border border-success border-2 rounded d-flex flex-column justify-content-center align-items-center text-center text-white" style={{ height: '350px' }}>
            <MapPin size={40} className="text-pal-red mb-2" />
            <h5 className="fw-bold">Interactive Spatial Matrix</h5>
            <p className="small text-muted px-4">Tracking active surgical channels and adjacent community points inside Deir al-Balah.</p>
            <span className="badge border border-danger text-pal-red uppercase font-monospace">Coordinates Logged</span>
          </div>
        </div>
      </div>
    </section>
  );
}