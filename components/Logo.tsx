// Swap /public/logo.svg for the real NEBO logo (keep the filename, or update `src`).
export default function Logo({ light = false }: { light?: boolean }) {
  return <img src="/logo.svg" alt="NEBO Apartments" className={`logo${light ? " logo-light" : ""}`} height={34} />;
}
