import Link from "next/link";

export default function FinalPage() {
  return (
    <main className="final-page">
      <section className="final-card">
        <h2>Happy Holi, My Friends!</h2>
        <p>
          May your life stay as bright as these colors, your heart as light as
          laughter, and your days full of love, peace, and celebration.
        </p>
        <Link href="/" className="back-link">
          Play Again
        </Link>
      </section>
    </main>
  );
}