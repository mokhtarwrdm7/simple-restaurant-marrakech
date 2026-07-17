"use client";

// Root safety net (production only). If any client throw ever tears down the
// React tree, guests still see a branded page + a real Call/WhatsApp escape,
// never a blank "Application error". Guards against throw-prone browser APIs
// (Safari Web Storage) taking the whole site down.
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5E9D6",
          color: "#241A12",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 460 }}>
          <p style={{ color: "#9E4326", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: 12, fontWeight: 700 }}>
            Simple · Marrakech
          </p>
          <h1 style={{ fontSize: 32, margin: "12px 0 8px", fontWeight: 800, letterSpacing: "-0.02em" }}>Un instant.</h1>
          <p style={{ fontSize: 15, opacity: 0.8, lineHeight: 1.6 }}>
            Une erreur est survenue. Réessayez, ou contactez-nous directement — on
            vous répond tout de suite. / Something went wrong. Please retry or reach us directly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
            <button
              onClick={() => reset()}
              style={{ background: "#EDB01E", color: "#241A12", border: 0, borderRadius: 999, padding: "11px 22px", fontWeight: 800, cursor: "pointer" }}
            >
              Réessayer / Retry
            </button>
            <a href="tel:+212693966816" style={{ background: "transparent", color: "#241A12", border: "1.5px solid rgba(36,26,18,0.25)", borderRadius: 999, padding: "11px 22px", fontWeight: 700, textDecoration: "none" }}>
              Appeler / Call
            </a>
            <a href="https://wa.me/212693966816" style={{ background: "transparent", color: "#241A12", border: "1.5px solid rgba(36,26,18,0.25)", borderRadius: 999, padding: "11px 22px", fontWeight: 700, textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
