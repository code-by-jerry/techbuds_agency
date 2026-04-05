export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Navbar</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}