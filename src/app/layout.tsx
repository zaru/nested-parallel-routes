import "./globals.css";

export default function RootLayout({
  children,
  modal,
  drawer,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
        {drawer}
      </body>
    </html>
  );
}
