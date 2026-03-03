import Link from "next/link";

export default function WishPage() {
  return (
    <main className="wish-page">
      <section className="wish-card">
        <h2>Holi Hai!</h2>
        <p>
          Wishing you and your friends a festival filled with joy, laughter,
          bright colors, and unforgettable memories.
        </p>
        <Link href="/" className="back-link">
          Back to Balloons
        </Link>
      </section>
    </main>
  );
}