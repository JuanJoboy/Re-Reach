export default function Stats() {
  return (
    <section id="impact" className="bg-pal-black text-white py-5 text-center my-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="display-5 fw-bold text-pal-red">1,000+</div>
            <small className="text-uppercase text-muted fw-bold font-monospace">Target Cases</small>
          </div>
          <div className="col-6 col-md-3">
            <div className="display-5 fw-bold text-white">50%</div>
            <small className="text-uppercase text-muted fw-bold font-monospace">Pilot Target</small>
          </div>
          <div className="col-6 col-md-3">
            <div className="display-5 fw-bold text-pal-green">$30–$150</div>
            <small className="text-uppercase text-muted fw-bold font-monospace">Unit Material Cost</small>
          </div>
          <div className="col-6 col-md-3">
            <div className="display-5 fw-bold text-white">6 Months</div>
            <small className="text-uppercase text-muted fw-bold font-monospace">Sizing Cycle</small>
          </div>
        </div>
      </div>
    </section>
  );
}