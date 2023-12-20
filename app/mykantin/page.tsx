/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Aside } from "./components/aside";
import { Head } from "./components/header";
import useKategoriModule from "./lib";
import DishDetailModal from "./components/popup";
import { DishiListResponse } from "./interface";

const MyKantin = () => {
  const { useKategoriList, useDishList } = useKategoriModule();
  const { data: kategoriData } = useKategoriList();
  const { data: dishData } = useDishList();
  const [selectedItems, setSelectedItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(true);
  const [selectedDish, setSelectedDish] = useState<DishiListResponse | null>(null);
  useEffect(() => {}, [kategoriData, dishData]);
  const filteredDishes = dishData.filter((dishItem) => {
    if (selectedCategory === "masakan") {
      return (
        !dishItem.name.toLowerCase().startsWith("juz") &&
        !dishItem.name.toLowerCase().startsWith("pizza")
      );
    } else if (selectedCategory) {
      return dishItem.name
        .toLowerCase()
        .includes(selectedCategory.toLowerCase());
    } else {
      return true;
    }
  });

  const openModal = (dishItem: DishiListResponse) => {
    setSelectedDish(dishItem);
    setModalVisible(true);
  };

  return (
    <>
      <Head />
      <main className="flex justify-between">
        <section className="pl-10 pt-20">
          <div className="min-w-[950px] justify-center bg-[#FFF7ED] rounded-2xl flex items-center">
            <img
              src="https://i.ibb.co/pJHC819/undraw-breakfast-psiw-1.png"
              className="w-[350px] scale-75"
              alt="undraw-breakfast-psiw-1"
            />
            <span className="text-primary-orange">
              <h1 className="text-5xl font-semibold">Promo Hari Ini</h1>
              <h2 className="text-2xl font-medium">
                Perut kenyang, hati senang
              </h2>
            </span>
          </div>
          <div className="flex space-x-2 pt-6  justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-orange"></div>
            <div className="w-2 h-2 rounded-full bg-[#C4C4C442]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C4C4C442]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C4C4C442]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C4C4C442]"></div>
          </div>
          <div className="">
            <span className="flex items-center justify-between">
              <div className="text-3xl font-bold py-10">Kategori</div>
              <button className="bg-primary-orange rounded-full px-3 h-10 text-white font-medium">
                Lebih Lengkap
              </button>
            </span>
            <section className="flex gap-3 justify-between">
              <button
                className="relative"
                onClick={() => setSelectedCategory(null)}
              >
                <img
                  src="https://i.ibb.co/2Zs2VqF/Rectangle-4.png"
                  alt=""
                  draggable={false}
                  className="object-cover w-[220px] transition-all brightness-75 hover:brightness-50 h-[112px] rounded-2xl -z-10"
                />
                <h1 className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center  text-white font-bold text-2xl">
                  Semua
                </h1>
              </button>
              {kategoriData.map((kategoriItem, index) => (
                <button
                  className="relative"
                  key={index}
                  onClick={() => setSelectedCategory(kategoriItem.name)}
                >
                  <img
                    src={kategoriItem.img}
                    alt={kategoriItem.name}
                    draggable={false}
                    className="object-cover w-[220px] brightness-75 transition-all hover:brightness-50 h-[112px] rounded-2xl -z-10"
                  />
                  <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center  text-white font-bold text-2xl">
                    {kategoriItem.name}
                  </div>
                </button>
              ))}
            </section>
          </div>
          {selectedDish && <DishDetailModal dishItem={selectedDish}  onClose={() => setSelectedDish(null)}  />}
          <div className="text-3xl font-bold py-10">Populer</div>
          <section className="grid grid-cols-3 gap-4">
            {filteredDishes.map((dishItem, index) => (
              <div
                key={index}
                onClick={() => openModal(dishItem)} 
                className="flex flex-col cursor-pointer"
              >
                <div
                 className="relative px-sd">
                  <img
                    src={dishItem.image}
                    alt={dishItem.name}
                    draggable={false}
                    className="object-cover w-full h-[103px] rounded-2xl -z-10"
                  />
                  <h1 className="text-base font-semibold rounded-full px-2 w-auto  h-auto bg-[#FFFFFFEB] absolute bottom-2 left-2">
                    {dishItem.waktu}
                  </h1>
                </div>
                <span>
                  <h1 className="font-semibold">{dishItem.name}</h1>
                  <div className="flex space-x-8">
                    <span className="flex items-center font-medium gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="19"
                        viewBox="0 0 30 29"
                        fill="none"
                      >
                        <path
                          d="M15 20.085L9.36 23.49L10.845 17.07L5.865 12.75L12.435 12.195L15 6.135L17.565 12.195L24.135 12.75L19.155 17.07L20.64 23.49L15 20.085ZM30 10.86L19.215 9.945L15 0L10.785 9.945L0 10.86L8.175 17.955L5.73 28.5L15 22.905L24.27 28.5L21.81 17.955L30 10.86Z"
                          fill="#414141"
                        />
                      </svg>
                      {dishItem.rating}
                    </span>
                    <h3 className="font-semibold">Rp.{dishItem.harga}</h3>
                  </div>
                </span>
              </div>
            ))}
          </section>
        </section>
        <Aside />
      </main>
    </>
  );
};

export default MyKantin;
