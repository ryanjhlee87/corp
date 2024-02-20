import Link from "next/link";

const ScalePage = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
      </div>
      <h1>Scale Page</h1>
    </div>
  );
};

export default ScalePage;
