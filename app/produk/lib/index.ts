import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { useToast } from '@chakra-ui/react'
import {
  produckFilter,
  ProdukCreateArrayPayload,
  ProdukCreatePayload,
  ProdukCreateResponse,
  ProdukDeleteArrayPayload,
  ProdukDetailResponse,
  ProdukListResponse,
  ProdukUpdatePayload,
  ProdukUpdateResponse,
} from "../interface";
import { usePagination } from "@/hook/usePagination";
import Swal from "sweetalert2";
const useProdukModule = () => {
  const toast = useToast();
  const positions = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ];
  const queryClient = useQueryClient();
  const defaultParams: produckFilter = {
    nama_produk: "",
    harga_produk: undefined,
    jumlah_produk: undefined,
    from_tahun_pembuatan: undefined,
    to_tahun_pembuatan: undefined,
    page: 1,
    pageSize: 10,
  };
  const getProdukList = async (
    params: produckFilter
  ): Promise<ProdukListResponse> => {
    return axiosClient.get("/produk/list", { params }).then((res) => res.data);
  };

  const createProduk = (
    payload: ProdukCreatePayload
  ): Promise<ProdukCreateResponse> => {
    return axiosClient.post(`/produk/create`, payload).then((res) => res.data);
  };

  const useCreateProduk = () => {
    const { isLoading, mutate } = useMutation(
      (payload: ProdukCreatePayload) => createProduk(payload),
      {
        onSuccess: (response) => {
          toast({
            title: response.status,
            description: response.message,
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        },
        onError: (gagal) => {
          console.log("error", gagal);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "ada salah",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      }
    );
    return { mutate, isLoading };
  };

  const updateProduk = (
    payload: ProdukUpdatePayload,
    id: number
  ): Promise<ProdukUpdateResponse> => {
    return axiosClient
      .put(`/produk/update/${id}`, payload)
      .then((res) => res.data);
  };

  const useUpdateProduk = (id: number) => {
    const { isLoading, mutate } = useMutation(
      (payload: ProdukUpdatePayload) => updateProduk(payload, id),
      {
        onSuccess: (response) => {
          toast({
            title: response.status,
            description: response.message,
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        },
        onError: (gagal) => {
          console.log("error", gagal);
          toast({
            title: 'wrong error',
            description: '',
            status: 'error',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          });
        },
      }
    );
    return { mutate, isLoading };
  };

  const useProdukList = () => {
    const {
      params,
      setParams,
      handeFilter,
      handleClear,
      handlePageSize,
      handlePage,
      filterParams,
    } = usePagination(defaultParams);

    const { data, isFetching, isLoading, isError } = useQuery(
      ["/produk/list", [filterParams]],
      () => getProdukList(filterParams),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return {
      data,
      isFetching,
      isLoading,
      isError,
      params,
      setParams,
      handlePageSize,
      handlePage,
      handeFilter,
      handleClear,
    };
  };

  const getDetailProduk = async (id: string): Promise<ProdukDetailResponse> => {
    return axiosClient.get(`/produk/detail/${id}`).then((res) => res.data.data);
  };

  const useDetaiProduk = (id: string) => {
    const { data, isLoading, isFetching } = useQuery(
      ["/user/detail", { id }],
      () => getDetailProduk(id),
      {
        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  const useDeleteProduk = () => {
    const { mutate, isLoading } = useMutation(
      (id: number) => {
        return axiosClient.delete(`/produk/delete/${id}`);
      },
      {
        onSuccess: (response) => {
          toast({
            title: response.status,
            description: 'oke',
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
          
          queryClient.invalidateQueries(["/produk/list"]);
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            Swal.fire({
              position: "top",
              icon: "warning",
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Ada Kesalahan",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        },
      }
    );

    return { mutate, isLoading };
  };

  const useCreateBulkProduk = () => {
    const { mutate, isLoading } = useMutation(
      (payload: ProdukCreateArrayPayload) => {
        return axiosClient.post("/produk/create/bulk", payload);
      },
      {
        onSuccess: (response) => {
          toast({
            title: response.status,
            description: 'oke',
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        },
        onError: (error) => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1000,
          });
        },
      }
    );
    return { mutate, isLoading };
  };

  const useDeleteBulkProduk = () => {
    const { mutate, isLoading } = useMutation(
      (payload: ProdukDeleteArrayPayload) => {
        return axiosClient.post("/produk/delete/bulk", payload);
      },
      {
        onSuccess: (response) => {
          toast({
            title: response.status,
            description: 'oke',
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })

          queryClient.invalidateQueries(["/produk/list"]);
        },
        onError: (error) => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1000,
          });
        },
      }
    );
    return { mutate, isLoading };
  };

  return {
    useCreateProduk,
    useCreateBulkProduk,
    useDeleteBulkProduk,
    useDeleteProduk,
    useDetaiProduk,
    useProdukList,
    useUpdateProduk
  };
};

export default useProdukModule;
