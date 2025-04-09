"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

export const places = [
  {
    name: "Помир",
    description: "Кӯҳҳои баланд ва нотакрор",
    image: "/img/place1.png",
    travelTime: "🚘 8 соат",
    price: "🛏 600 сомонӣ шабона",
  },
  {
    name: "Хуҷанд",
    description: "Шаҳри қадим бо таърихи 2500 сола",
    image: "/img/place2.png",
    travelTime: "🚘 5 соат",
    price: "🛏 400 сомонӣ шабона",
  },
  {
    name: "Хоруғ",
    description: "Чашмаи геотермалӣ ва кӯлҳои зебо",
    image: "/img/place3.png",
    travelTime: "🚘 9 соат",
    price: "🛏 533 сомонӣ шабона",
  },
  {
    name: "Қаракӯл",
    description: "Кӯли баландикуҳии нодир",
    image: "/img/place4.png",
    travelTime: "🚘 10 соат",
    price: "🛏 350 сомонӣ шабона",
  },
  {
    name: "Панҷакент",
    description: "Мероси бостоншиносӣ ва табиати нотакрор",
    image: "/img/place5.png",
    travelTime: "🚘 5 соат",
    price: "🛏 450 сомонӣ шабона",
  },
  {
    name: "Мурғоб",
    description: "Кӯлҳо, кӯҳҳо ва табиати ваҳшӣ",
    image: "/img/place6.png",
    travelTime: "🚘 6 соат",
    price: "🛏 500 сомонӣ шабона",
  },
];

const FamousPlaces = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-12">
        Самтҳои машҳури Ҷумҳурии Тоҷикистон
      </h1>

      <div className="max-w-6xl mx-auto mb-20">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl shadow-lg bg-white hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-700 mb-1">
                    {place.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{place.description}</p>
                  <p className="text-sm text-blue-500">{place.travelTime}</p>
                  <p className="text-sm text-green-500">{place.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Эффект карточек внизу страницы */}
      <div className="max-w-md mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
     Чойзои шавковар дар Точикистон
        </h2>
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-[380px]"
        >
          {places.map((place, index) => (
            <SwiperSlide key={`card-${index}`} className="rounded-xl overflow-hidden shadow-xl bg-white">
              <Image
                src={place.image}
                alt={place.name}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-blue-700">{place.name}</h3>
                <p className="text-sm text-gray-500">{place.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FamousPlaces;
