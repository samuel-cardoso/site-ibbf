import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="pt">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-lg mb-8">
            Página não encontrada. / Page not found.
          </p>
          <a href="/pt" className="underline text-primary">
            Voltar para o início / Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
