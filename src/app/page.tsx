export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">Next.js ISR PRA</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-center">
          This is a demo of Incremental Static Regeneration (ISR) with Next.js.
        </p>
        <p className="text-2xl text-center">
          The page is statically generated at build time and then regenerated
          after 24 hours.
        </p>
      </div>
    </main>
  )
}
