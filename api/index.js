const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

export default function handler(req, res) {
  try {
    // 1. Configuración de CORS estricta para eliminar la alerta Cross-Domain
    const allowedOrigins = ['https://andre303q.github.io'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      // Valor por defecto seguro si se accede desde el mismo dominio o herramienta de prueba autorizada
      res.setHeader('Access-Control-Allow-Origin', 'https://andre303q.github.io');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Manejo de peticiones preflight (OPTIONS)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    const nonce = crypto.randomBytes(16).toString('base64');
    const filePath = path.join(process.cwd(), 'template.html');
    let html = fs.readFileSync(filePath, 'utf8');

    html = html.replace(/<script\b(?![^>]*\bsrc=)([^>]*)>/gi, `<script nonce="${nonce}" $1>`);
    html = html.replace(/<style\b([^>]*)>/gi, `<style nonce="${nonce}" $1>`);

    // CSP 100% estricto sin unsafe-eval
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}'`,
      `style-src 'self' 'nonce-${nonce}' https://cdnjs.cloudflare.com https://fonts.googleapis.com`,
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
      "img-src 'self' data: blob: https://ghchart.rshah.org",
      "connect-src 'self' blob: data:",
      "worker-src 'self' blob:",
      "media-src 'self' blob:",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests"
    ].join('; ');

    res.setHeader('Content-Security-Policy', csp);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    return res.status(200).send(html);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Error interno');
  }
}
