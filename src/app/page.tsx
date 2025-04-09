'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import place1 from "../../public/img/place1.png"
import place2 from "../../public/img/place2.png"
import place3 from "../../public/img/place3.png"
import place4 from "../../public/img/place4.png"
import place5 from "../../public/img/place5.png"
import place6 from "../../public/img/place6.png"
import place7 from "../../public/img/place7.png"
import place8 from "../../public/img/place8.png"
import place9 from "../../public/img/place9.png"
import place10 from "../../public/img/place10.png"
import person1 from "../../public/img/person1.png"
import person2 from "../../public/img/person2.png"
import person3 from "../../public/img/person3.png"
import person4 from "../../public/img/person4.png"
import person5 from "../../public/img/person5.png"

import PlaceCard from "../../components/place-card";

export default function Home() {
  const places = [
    { 
      id: 9, 
      img: place1,
      title: "Боғи Рудакӣ",
      description: "Боғи марказии пойтахт бо ҳавзи шиноварӣ ва фурудгоҳи кӯдакона"
    },
    { 
      id: 8, 
      img: place8,
      title: "Кӯҳҳои Ҳисор",
      description: "Минтақаи кӯҳии зебо барои пикник ва сайёҳӣ"
    },
    { 
      id: 10, 
      img: place9,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 7, 
      img: place3,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 1, 
      img: place4,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 2, 
      img: place5,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 3, 
      img: place6,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 4, 
      img: place7,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 5, 
      img: place2,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    }, 
    { 
      id: 6, 
      img: place10,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    },
    { 
      id: 1, 
      img: place4,
      title: "Нақши миллии Тоҷикистон",
      description: "Қаторкӯҳҳои баланд ва дарёҳои зеборо нигоҳ медорад"
    },  
    { 
      id: 9, 
      img: place1,
      title: "Боғи Рудакӣ",
      description: "Боғи марказии пойтахт бо ҳавзи шиноварӣ ва фурудгоҳи кӯдакона"
    },
  ];
  const personalities = [
    {
      id: 1,
      name: "Мунзифа Ғафарова",
      description: "100 — солагии таваллуди нахустин зан-доктори илмҳои фалсафии Осиеи Марказӣ Мунзифа Каҳаровна Ғафарова моҳи октябр дар донишгоҳи давлатии педагогии Тоҷикистон ба номи А. С.Айнӣ. Дар рафти конфронси илмию амалӣ бахшида ба ин сана ҳамкорону шогирдони яке аз аввалин олимони зани тоҷик, дар замони худ роҳбари муваффақи худ буд.",
      image:person1,
      type: "normal"
    },
    {
      id: 2,
      name: "Муҳаммадбек Маҳмадбеков",
      description: "Маҳмадбек 1 октябри соли 1999 дар Иркутск таваллуд шудааст. Вай дар синни 4-солагӣ ба татами пайваст. Соли 2016 дар Ижевск ӯ бори аввал қаҳрамони кишвар дар байни наврасон дар вазни то 60 кг шуд.соли оянда ӯ бори дигар дар мусобиқаи ватании кишвар баромад кард, ки дар он дар категорияи вазни нав (то 66 кг) пирӯз шуд.",
      image: person2,
      type: "normal"
    },
    {
      id: 3,
      name: "Худойназар Ҷабборов",
      description: "Сокини Ноҳияи Қабодиен дар хонаи худ осорхонаи ҳунарҳои халқиро таъсис дод, ки ҳам дар байни сайеҳони дохилӣ ва ҳам дар байни сайеҳони хориҷӣ маъруфият пайдо кард. Худойназар Ҷабборов, сокини 54-солаи ҷамоати 'Эшмурод Ниезов', қисми зиеди ҳаети худро ба санъати ҳунармандӣ бахшидааст.",
      image:person3,
      type: "normal"
    },
    {
      id: 4,
      name: "Абдурозиқ",
      description: "Писари махсуси тоҷик дар асл ҷавон аст. Абдурозиқ 21 сол дорад ва дар деҳаи кӯҳии Оддии Гиждарва дар қаламрави Вилояти Суғди Тоҷикистон дар наздикии шаҳри Қадимаи Панҷакент таваллуд шудааст. Ҳоло ӯ дар давлатҳои хориҷа мебошад, ин ҷавон блогери машҳури ҷавҳон мебошад, ки айни замон ӯ дар шабакаҳои интернетӣ 2 миллион обуначӣ дорад.",
      image:person4,
      type: "normal"
    },
    {
      id: 5,
      name: "Аимма Толибова",
      description: "Аимма Толибова суратгир ва асосгузори студияи аксбардории 'JOY' дар маркази Душанбе. Духтари 27-сола аз студияи оддии аксбардорӣ дар хона оғоз кард. Соли 2020 ман касби худро ҳамчун суратгир оғоз кардам ва аввалин студияи ман дар хонаи ман буд. Ман барои он як ҳуҷраи калон ҷудо кардам ва онро барои минтақаҳои гуногуни аксбардорӣ муҷаҳҳаз кардам.",
      image: person5,
      type: "large"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
          Ҳаррӯза, дар шаҳри Душанбе ба куҷо рафтан мумкин аст?
        </h1>
        <p className="text-xl text-gray-600">
          Ҷойҳои ҷолиби пойтахтро бо мо шинос шавед
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
      <div className="bg-[rgba(165,113,250,0.1)]">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-16 bg-[#a046854b] text-darkblue">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Шахсиятҳои шинохт дар <br className="hidden md:block" />
          Тоҷикистон
        </h1>
      </div>

      {/* Personalities Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {personalities.map((person) => (
          <div 
            key={person.id} 
            className={`flex flex-col ${person.type === 'large' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16 last:mb-0`}
          >
            <div className={`relative ${person.type === 'large' ? 'md:w-1/2 h-96' : 'md:w-2/5 h-80'} w-full rounded-xl overflow-hidden shadow-lg`}>
              <Image
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>

            <div className={`${person.type === 'large' ? 'md:w-1/2' : 'md:w-3/5'} w-full`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-4">
                {person.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
