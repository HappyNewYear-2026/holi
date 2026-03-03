import "./globals.css";

export const metadata = {
  title: "Holi Wishes",
  description: "Colorful Holi wish website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}