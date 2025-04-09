import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6">Саҳифа ёфт нашуд</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Мутаассифона, саҳифае, ки шумо кофтуков доред, вуҷуд надорад ё кӯчонида шудааст.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 transition-colors"
      >
        Бозгашт ба саҳифаи асосӣ
      </Link>
    </div>
  )
}
