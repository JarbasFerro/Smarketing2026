export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  safelist: [{ pattern: /(bg|text|border|ring)-\[var\(--.*\)\]/ }],
  plugins: [],
}
