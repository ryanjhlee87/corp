import Link from "next/link";

const PerformancePage = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
      <h1>Performance Page</h1>
    </div>
  );
};

export default PerformancePage;
