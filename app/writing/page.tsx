export default async function Writing() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow relative">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/backgrounds/FR3.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-[#4B827D] tracking-tight">
            in progress...
          </h1>
        </div>
      </main>
    </div>
  )
}
