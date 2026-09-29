export default function Logo({ light = false }: { light?: boolean }) {
  return <img src="/logo.png" alt="NEBO Apartments" className={`logo${light ? " logo-light" : ""}`} height={34} width={Math.round(34 * 2.68)} />;
}
