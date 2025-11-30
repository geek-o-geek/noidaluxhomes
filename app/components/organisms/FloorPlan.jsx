export default function FloorPlan() {
  return (
    <section id="floorPlan" className="mt-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
          Floor Plan
        </h3>

        <img
          className="rounded-lg cursor-pointer"
          src="/brochure_images/page_11.jpg"
          alt="Floor Plan 1980 sq ft"
        />

        <p className="text-[var(--muted)] text-sm mt-3">
          Saleable: 1980 sq ft (Type A shown). For precise area breakup refer to brochure.
        </p>
      </div>
    </section>
  );
}
