"use client";
import Image from "next/image";
import useProduckModule from "./lib";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { Pagination } from "@/components/Pagination";
import { Drawer } from "@/components/Drawer";
import { useDisclosure } from "@/hook/useDisclosure";
import Filter from "./module/filter";
import { DeleteButton, EditButton } from "@/components/ButtonAction";
import { useConfirmDelete } from "@/hook/useConfirmDelete";
import { useConfirmDeleteBulk } from "@/hook/useConfirmBulkDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFilter,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import 'animate.css';
import Loading from "@/components/loading";
import useProfile from "@/hook/useImage";
const Produck = () => {
  const { useProdukList, useDeleteProduk, useDeleteBulkProduk } =
    useProduckModule();
  const {
    onClose: onclose1,
    isOpen: isOpen1,
    onOpen: onOpen1,
  } = useDisclosure();
  const {
    onClose: onclose2,
    isOpen: isOpen2,
    onOpen: onOpen2,
    handlemodal: handlemodal2,
  } = useDisclosure();
  const route = useRouter();
  const { mutate, isLoading } = useDeleteProduk();
  const { mutate: mutateDeleteBulk, isLoading: isLoadingDeleteBulk } =
    useDeleteBulkProduk();
  const handleDelete = useConfirmDelete({
    onSubmit: (id) => {
      mutate(id);
    },
  });

  const {
    data,
    handeFilter,
    params,
    isFetching,
    handleClear,
    handlePage,
    setParams,
    handlePageSize,
  } = useProdukList();
  const { selectedImage, handleImageUpload } = useProfile();
  const { handleDeleteBulk, deletePayload, setDeletePayload, checked } =
    useConfirmDeleteBulk({
      data: data,
      onSubmit: (payload) => {
        mutateDeleteBulk(
          { delete: payload },
          {
            onSuccess: () => {
              setDeletePayload([]);
            },
          }
        );
      },
    });

  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  if (isFetching) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <section className="">
      <Drawer
        isOpen={isOpen1}
        onClear={handleClear}
        onSubmit={handeFilter}
        onClose={onclose1}
        title="Filter"
      >
        <Filter params={params} setParams={setParams} />
      </Drawer>
      <div className="px-4 sticky top-0 z-20 flex justify-between items-center  bg-white/70 backdrop-blur-md py-2">
        <div className="flex items-center gap-6">
          <button
            onClick={handlemodal2}
            className="p-2 inline-flex justify-center items-center z-10 gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs "
          >
            {isOpen2 ? (
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className=" flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>
          {isOpen2 ? (
            <div className="space-x-4 animate-slide-in">
              <Button
                font={<FontAwesomeIcon icon={faPlus} />}
                colorSchema="dark"
                variant="outline"
                width="icon"
                onClick={() => {
                  route.push("/produk/tambah");
                }}
              />
              <Button
                width="icon"
                onClick={() => {
                  handleDeleteBulk(deletePayload);
                }}
                isLoading={isLoadingDeleteBulk}
                colorSchema="dark"
                variant="outline"
                isDisabled={deletePayload.length === 0}
                font={<FontAwesomeIcon icon={faTrashCan} />}
              />
              <Button
                font={<FontAwesomeIcon icon={faFilter} />}
                colorSchema="dark"
                variant="outline"
                width="icon"
                onClick={onOpen1}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <input
            checked={checked.isAllCheced}
            onChange={() => {
              if (checked.isAllCheced) {
                setDeletePayload([]);
              } else {
                setDeletePayload((state) => {
                  if (!data) {
                    return [];
                  }

                  const selected: number[] = Array.from(
                    new Set([...state, ...data?.data?.map((n) => Number(n.id))])
                  );

                  return [...selected];
                });
              }
            }}
            type="checkbox"
            className="accent-black w-5 h-5 rounded disabled:opacity-50 focus:ring-offset-blue-500"
          />
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-col-3 grid-col-1 mt-4 sm:grid-col-2 lg:grid-cols-5  p-5 justify-items-center gap-7">
          {data?.data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                route.push(`produk/${item.id}/detail`);
              }}
              className="relative cursor-pointer flex items-start w-full justify-center flex-col border bg-white  rounded-md p-5"
            >
              <picture className="mx-auto">
                <img
                  src={item.image}
                  alt=""
                  className="w-[194px] h-[257px] object-contain"
                  draggable={false}
                />
              </picture>
              <span className="space-y-1 w-full mt-2">
                <h1 className="text-xl font-semibold">{item.nama_produk}</h1>
                <p className="text-sm font-regular">{item.deskripsi_produk}</p>
                <h2 className="text-lg font-medium">
                  {formatCurrency(item.harga_produk)}
                </h2>
                <span className="flex justify-between w-full">
                  <h2> Stock: {item.jumlah_produk}</h2>
                  <h2>{item.tahun_pembuatan}</h2>
                </span>
              </span>
              {/* <div className="absolute -top-2 -right-2">
                <input
                  checked={deletePayload.includes(item.id || 0)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDeletePayload((state) => [...state, item.id || 0]);
                    } else {
                      const filtered = deletePayload.filter(
                        (n) => n !== item.id
                      );
                      setDeletePayload(filtered);
                    }
                  }}
                  type="checkbox"
                  className="accent-slate-950 w-4 h-4"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        <Pagination
          page={params.page}
          pageSize={params.pageSize}
          handlePageSize={handlePageSize}
          handlePage={handlePage}
          pagination={data?.pagination}
        />
      </div>
    </section>
  );
};

export default Produck;
