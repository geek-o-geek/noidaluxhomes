export default function Overview() {
  return (
    <section id="overview">
      <div className="card">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <span className="badge bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
              Premium 3 BHK
            </span>
            <h2 className="mt-3 text-2xl font-bold">
              1980 Sq Ft Luxury Apartment Highlights
            </h2>
            <p className="muted mt-2 text-[var(--muted)]">
              Spacious, park-facing home in a low-density luxury project with world-class amenities.
            </p>
          </div>

          <div className="text-right">
            <div className="font-bold text-[var(--primary)]">RERA: UPRERAPRJ155408</div>
            <div className="text-sm text-[var(--muted)] mt-1">
              Verify all details before purchase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
