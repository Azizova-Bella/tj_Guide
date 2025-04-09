"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { StaticImageData } from "next/image"

interface Place {
  id: number
  img: StaticImageData
  title: string
  description: string
}

interface PlaceCardProps {
  place: Place
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/travel/${place.id}`)
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 h-[400px]">
        <Image
          src={place.img || "/placeholder.svg"}
          alt={`Place ${place.id}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {place.title}
        </h3>
        <p className="text-gray-200 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {place.description}
        </p>
        <button
          onClick={handleClick}
          className="self-start px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
        >
          Маълумоти бештар
        </button>
      </div>
    </div>
  )
}
