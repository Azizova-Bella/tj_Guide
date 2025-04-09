import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import place1 from "../../../../public/img/place1.png"
import place2 from "../../../../public/img/place2.png"
import place10 from "../../../../public/img/place10.png"

// Define the places data
const places = [
  {
    id: 9,
    img: place1,
    title: "Боғи Рудакӣ",
    description: "Боғи марказии пойтахт бо ҳавзи шиноварӣ ва фурудгоҳи кӯдакона",
    fullDescription:
      "Боғи Рудакӣ яке аз боғҳои марказӣ ва машҳури шаҳри Душанбе мебошад. Ин боғ дар маркази шаҳр ҷойгир шуда, дорои ҳавзи шиноварӣ, фурудгоҳи кӯдакона ва дигар имкониятҳои фароғатӣ мебошад. Боғи Рудакӣ макони дӯстдоштаи сокинони шаҳр ва сайёҳон барои сайру гашт ва истироҳат мебошад.",
    location: "Маркази шаҳри Душанбе",
    openingHours: "Ҳамарӯза аз соати 6:00 то 23:00",
    entryFee: "Ройгон",
  },
  {
    id: 8,
    img: place10,
    title: "Кӯҳҳои Ҳисор",
    description: "Минтақаи кӯҳии зебо барои пикник ва сайёҳӣ",
    fullDescription:
      "Кӯҳҳои Ҳисор яке аз минтақаҳои зеботарини кӯҳии Тоҷикистон мебошанд. Ин минтақа барои пикник, сайёҳӣ ва кӯҳнавардӣ хеле мувофиқ аст. Манзараҳои зебои табиат, ҳавои тоза ва имкониятҳои фароғатӣ сайёҳонро ба худ ҷалб мекунанд.",
    location: "Ноҳияи Ҳисор, 30 км аз шаҳри Душанбе",
    openingHours: "Дастрасии озод",
    entryFee: "Ройгон",
  },
  {
    id: 10,
    img: place2,
    title: "Нақши миллии Тоҷикистон",
    description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад",
    fullDescription:
      "Нақши миллии Тоҷикистон қаторкӯҳҳои баланд ва дарёҳои зеборо дар бар мегирад. Ин минтақа бо табиати нотакрори худ машҳур аст ва барои сайёҳон ҷойи ҷолиб мебошад.",
    location: "Саросари Тоҷикистон",
    openingHours: "Дастрасии озод",
    entryFee: "Ройгон",
  },
  // Add other places with similar detailed information
]

export default function TravelDetailPage({ params }: { params: { id: string } }) {
  // Add validation to ensure params.id is a valid number
  const placeId = Number.parseInt(params.id)

  // Check if placeId is a valid number
  if (isNaN(placeId)) {
    console.log("Invalid ID format:", params.id)
    notFound()
  }

  console.log("Looking for place with ID:", placeId)
  console.log(
    "Available place IDs:",
    places.map((p) => p.id),
  )

  const place = places.find((p) => p.id === placeId)

  if (!place) {
    console.log("Place not found with ID:", placeId)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-indigo-700 hover:text-indigo-900 mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Бозгашт ба саҳифаи асосӣ
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96 w-full">
            <Image src={place.img || "/placeholder.svg"} alt={place.title} fill className="object-cover" priority />
          </div>

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">{place.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">Ҷойгиршавӣ</h3>
                <p>{place.location}</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">Соатҳои кор</h3>
                <p>{place.openingHours}</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">Нархи вуруд</h3>
                <p>{place.entryFee}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Дар бораи {place.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{place.fullDescription}</p>

              <p className="text-gray-700 text-lg leading-relaxed">{place.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
