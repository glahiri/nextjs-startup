import "./globals.css";

export const metadata = {
  title: 'Bojo',
  description: 'application created by nextjs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

          {children}

      </body>
    </html>
  );
}
