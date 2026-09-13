// Generates the SVG assets in ../assets from the same palettes, sprite,
// hill profiles, and donut renderer that prashantyadav.vercel.app uses.
// Run: node scripts/gen-assets.js
const fs = require("fs");
const path = require("path");
const OUT = require("path").join(__dirname, "..", "assets");

// Seeded RNG so the scene is stable between runs.
let seed = 20260913;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

/* ---------------- Banner ---------------- */
const NIGHT = {
  sky: ["#03050a", "#050914", "#080e1d", "#0b1428", "#0f1a33", "#142240"],
  glow: "#1c2d55", disc: "#e6ecf2",
  hills: ["#1b2745", "#121b30", "#0a1020"],
  grass: "#070b14", blade: "#101a2c", cloud: "#3a4d78", star: "#e6ecf2",
  skin: "#d9a97a", cloth: "#2b3a5a", laptop: "#1f2a40",
  screen: ["#3d8ef5", "#e6ecf2", "#2f6fd0"],
};
const DAY = {
  sky: ["#cfe3f7", "#d8e9f9", "#e0eefb", "#e8f2fc", "#eff6fd", "#f4f8fe"],
  glow: "#dbe9f8", disc: "#fff0b8",
  hills: ["#b9cbe3", "#9db4d4", "#7f99bf"],
  grass: "#6f8ab0", blade: "#8aa3c5", cloud: "#ffffff", star: "#ffffff",
  skin: "#d9a97a", cloth: "#2b3a5a", laptop: "#1f2a40",
  screen: ["#1a5fd0", "#ffffff", "#2f6fd0"],
};
const FIGURE = [
  "....hhh....", "....hhh....", ".....h.....", "...bbbbb...", "..bbbbbbb..",
  "..bbbbbbbss", "...bbbbblss", "..bbbbbbbll", ".bbbbbbbbb.",
];
const hillProfile = (s, amp, base, freq) => (x) =>
  base + amp * (0.55 * Math.sin(x * freq + s) + 0.3 * Math.sin(x * freq * 2.3 + s * 1.7) + 0.15 * Math.sin(x * freq * 5.1 + s * 0.4));
const HILLS = [hillProfile(1.3, 0.1, 0.5, 0.035), hillProfile(4.1, 0.08, 0.63, 0.05), hillProfile(7.7, 0.06, 0.76, 0.08)];

const W = 300, H = 72;
const f = (n) => (Math.round(n * 100) / 100).toString();
const rect = (x, y, w, h, fill, extra = "") => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}"${extra}/>`;

// Scene elements that are the same in both themes, seeded once.
seed = 20260913;
const stars = Array.from({ length: Math.floor(W / 4) }, () => ({
  x: Math.floor(rnd() * W), y: Math.floor(rnd() * H * 0.55), phase: rnd() * Math.PI * 2, speed: 0.6 + rnd() * 1.6,
}));
const clouds = Array.from({ length: 5 }, (_, i) => ({
  x: Math.floor((W / 5) * i + rnd() * 20), y: Math.floor(4 + rnd() * (H * 0.24)), w: 14 + Math.floor(rnd() * 14), speed: 1.2 + rnd() * 1.4,
}));

function banner(dark) {
  const p = dark ? NIGHT : DAY;
  const horizon = H * 0.62;
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}" shape-rendering="crispEdges" role="img" aria-label="${dark ? "Night" : "Afternoon"} over the hills, a figure on the grass with a laptop">`);
  out.push(`<defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="0.03" stop-color="#fff"/><stop offset="0.97" stop-color="#fff"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient><mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask></defs>`);
  out.push(`<g mask="url(#m)">`);
  // Sky bands, then the ground colour below the horizon.
  const bands = p.sky.length;
  for (let i = 0; i < bands; i++) {
    const y0 = Math.floor((horizon * i) / bands), y1 = Math.floor((horizon * (i + 1)) / bands);
    out.push(rect(0, y0, W, y1 - y0 + 1, p.sky[i]));
  }
  out.push(rect(0, Math.floor(horizon), W, H - Math.floor(horizon), p.sky[bands - 1]));
  out.push(rect(0, Math.floor(horizon) - 2, W, 3, p.glow));

  // Stars twinkle on their own phase; a shooting star crosses every ten seconds.
  if (dark) {
    for (const s of stars) {
      const dur = f((2 * Math.PI) / s.speed);
      const begin = f(-(s.phase / s.speed));
      out.push(`<rect x="${s.x}" y="${s.y}" width="1" height="1" fill="${p.star}"><animate attributeName="opacity" values="0.35;1;0.35" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/></rect>`);
    }
    const sx = Math.floor(W * 0.3), sy = 6;
    out.push(`<g opacity="0">`);
    for (let i = 0; i < 6; i++) out.push(rect(sx - i * 1.4, sy - i, 1, 1, i < 2 ? p.star : "#93a2c0"));
    out.push(`<animateTransform attributeName="transform" type="translate" values="0 0;42 22;42 22" keyTimes="0;0.07;1" dur="10s" begin="4s" repeatCount="indefinite"/>`);
    out.push(`<animate attributeName="opacity" values="1;0;0" keyTimes="0;0.07;1" calcMode="discrete" dur="10s" begin="4s" repeatCount="indefinite"/>`);
    out.push(`</g>`);
  }

  // The disc: crescent moon at night, sun by day.
  const cx = Math.floor(W * 0.52), cy = Math.floor(H * 0.24), r = Math.max(6, Math.floor(H * 0.12));
  for (let y = -r; y <= r; y++) {
    let run = null;
    const flush = () => { if (run) { out.push(rect(cx + run[0], cy + y, run[1] - run[0] + 1, 1, p.disc)); run = null; } };
    for (let x = -r; x <= r; x++) {
      let on = x * x + y * y <= r * r;
      if (on && dark) { const dx = x - Math.round(r * 0.5), dy = y - Math.round(r * 0.15); if (dx * dx + dy * dy < r * r * 0.72) on = false; }
      if (on) { if (run) run[1] = x; else run = [x, x]; } else flush();
    }
    flush();
  }

  // Clouds drift right and wrap.
  for (const c of clouds) {
    const rows = [[4, c.w - 8], [2, c.w - 4], [1, c.w - 2], [0, c.w], [0, c.w], [2, c.w - 4]];
    const lap = (W + c.w) / c.speed;
    const t1 = (W - c.x) / (W + c.w);
    out.push(`<g opacity="${dark ? 0.95 : 1}">`);
    rows.forEach(([off, len], i) => out.push(rect(off, c.y + i, len, 1, p.cloud)));
    out.push(`<animateTransform attributeName="transform" type="translate" values="${c.x} 0;${W} 0;${-c.w} 0;${c.x} 0" keyTimes="0;${f(t1)};${f(t1 + 0.0005)};1" dur="${f(lap)}s" repeatCount="indefinite"/>`);
    out.push(`</g>`);
  }

  // Hills as stepped paths so there are no seams between columns.
  HILLS.forEach((profile, i) => {
    let d = `M0 ${H}`;
    for (let x = 0; x < W; x++) { const top = Math.floor(H * profile(x)); d += ` V${top} H${x + 1}`; }
    d += ` V${H} Z`;
    out.push(`<path d="${d}" fill="${p.hills[i]}"/>`);
  });

  // Grass with blades.
  const gy = H - 6;
  out.push(rect(0, gy, W, 6, p.grass));
  for (let x = 0; x < W; x += 3) {
    out.push(rect(x, gy - 1, 1, 1, p.blade));
    if (x % 9 === 0) out.push(rect(x, gy - 2, 1, 1, p.blade));
  }

  // The figure, laptop screen flickering between three colours.
  const fx = Math.floor(W * 0.22), fy = gy - FIGURE.length;
  FIGURE.forEach((row, ry) => [...row].forEach((ch, rx) => {
    if (ch === ".") return;
    if (ch === "s") {
      out.push(`<rect x="${fx + rx}" y="${fy + ry}" width="1" height="1" fill="${p.screen[0]}"><animate attributeName="fill" values="${p.screen[0]};${p.screen[1]};${p.screen[0]};${p.screen[2]};${p.screen[0]};${p.screen[0]}" dur="6.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`);
      return;
    }
    const c = ch === "h" ? p.skin : ch === "b" ? p.cloth : p.laptop;
    out.push(rect(fx + rx, fy + ry, 1, 1, c));
  }));
  if (dark) { out.push(rect(fx + 9, fy + 9, 2, 1, p.screen[0], ` opacity="0.25"`)); }

  out.push(`</g></svg>`);
  return out.join("\n");
}

/* ---------------- Donut ---------------- */
const DW = 56, DH = 26, CHARS = ".,-~:;=!*#$@";
function renderFrame(A, B) {
  const chars = new Array(DW * DH).fill(" ");
  const zbuf = new Float32Array(DW * DH);
  const cA = Math.cos(A), sA = Math.sin(A), cB = Math.cos(B), sB = Math.sin(B);
  for (let t = 0; t < 6.283; t += 0.07) {
    const ct = Math.cos(t), st = Math.sin(t);
    for (let p = 0; p < 6.283; p += 0.02) {
      const sp = Math.sin(p), cp = Math.cos(p);
      const h = ct + 2;
      const D = 1 / (sp * h * sA + st * cA + 5);
      const m = sp * h * cA - st * sA;
      const x = Math.floor(DW / 2 + 23 * D * (cp * h * cB - m * sB));
      const y = Math.floor(DH / 2 + 11.5 * D * (cp * h * sB + m * cB));
      const o = x + DW * y;
      const lum = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
      if (y >= 0 && y < DH && x >= 0 && x < DW && D > zbuf[o]) { zbuf[o] = D; chars[o] = CHARS[Math.max(lum, 0)]; }
    }
  }
  const rows = [];
  for (let r = 0; r < DH; r++) rows.push(chars.slice(r * DW, (r + 1) * DW).join(""));
  return rows;
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function donut(color) {
  const N = 140, START_A = 5.6, START_B = 0.2;
  // A turns twice and B once over the loop, so the last frame hands back to the first.
  const dA = (4 * Math.PI) / N, dB = (2 * Math.PI) / N;
  const FS = 11, LH = 12, CW = FS * 0.62;
  const vw = Math.round(DW * CW), vh = DH * LH;
  const step = 1000 / 15; // ms per frame
  const dur = f((N * step) / 1000);
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}" width="${vw}" height="${vh}" role="img" aria-label="A spinning ASCII donut">`);
  out.push(`<style>text{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"DejaVu Sans Mono",monospace;font-size:${FS}px;fill:${color};white-space:pre}</style>`);
  for (let i = 0; i < N; i++) {
    const rows = renderFrame(START_A + dA * i, START_B + dB * i);
    const kt = i === 0 ? `0;${f(1 / N)};1` : `0;${f(i / N)};${f((i + 1) / N)};1`;
    const vals = i === 0 ? `1;0;0` : `0;1;0;0`;
    out.push(`<g opacity="${i === 0 ? 1 : 0}"><animate attributeName="opacity" values="${vals}" keyTimes="${kt}" calcMode="discrete" dur="${dur}s" repeatCount="indefinite"/>`);
    rows.forEach((row, r) => {
      const trimmed = row.replace(/\s+$/, "");
      if (!trimmed) return;
      out.push(`<text x="0" y="${r * LH + FS}" xml:space="preserve">${esc(trimmed)}</text>`);
    });
    out.push(`</g>`);
  }
  out.push(`</svg>`);
  return out.join("\n");
}

/* ---------------- Rule ---------------- */
function rule(border, ink) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 12" width="900" height="12" preserveAspectRatio="none" role="presentation">
<line x1="0" y1="6.5" x2="900" y2="6.5" stroke="${border}" stroke-width="1" stroke-dasharray="4 4"/>
<rect x="0" y="2" width="1" height="9" fill="${ink}"/>
<rect x="899" y="2" width="1" height="9" fill="${ink}"/>
</svg>`;
}

fs.writeFileSync(path.join(OUT, "banner-dark.svg"), banner(true));
fs.writeFileSync(path.join(OUT, "banner-light.svg"), banner(false));
fs.writeFileSync(path.join(OUT, "donut-dark.svg"), donut("#4798f5"));
fs.writeFileSync(path.join(OUT, "donut-light.svg"), donut("#0f5abd"));
fs.writeFileSync(path.join(OUT, "rule-dark.svg"), rule("#3d444d", "#9198a1"));
fs.writeFileSync(path.join(OUT, "rule-light.svg"), rule("#d0d7de", "#59636e"));

// Sanity: the loop closes if frame N equals frame 0.
const N = 140;
const a = renderFrame(5.6, 0.2).join("\n"), b = renderFrame(5.6 + 4 * Math.PI, 0.2 + 2 * Math.PI).join("\n");
console.log("loop closes:", a === b);
for (const fn of fs.readdirSync(OUT)) console.log(fn, (fs.statSync(path.join(OUT, fn)).size / 1024).toFixed(1) + " KB");
