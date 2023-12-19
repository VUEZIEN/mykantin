import { BaseResponsePagination } from "@/lib/axiosClient";

export enum KategoriProduk {
  Handphone = "handphone",
  Laptop = "laptop",
  Mobil = "mobil",
  Motor = "motor",
}

interface Produk {
  id: number;
  nama_produk: string;
  kategori_produk: KategoriProduk | undefined;
  harga_produk: number;
  jumlah_produk: number;
  image: string;
  deskripsi_produk: string;
  tahun_pembuatan: number | undefined;
  created_at: string;
  updated_at: string;
}

export interface ProdukListResponse extends BaseResponsePagination {
  data: Produk[];
}

export interface produckFilter extends Partial<Produk> {
  from_tahun_pembuatan?: any;
  to_tahun_pembuatan?: any;
  max_harga_produk?: any;
  min_harga_produk?: any;
  page: number;
  pageSize: number;
}

export interface ProdukCreatePayload
  extends Pick<
    Produk,
    | "nama_produk"
    | "image"
    | "kategori_produk"
    | "harga_produk"
    | "jumlah_produk"
    | "deskripsi_produk"
    | "tahun_pembuatan"
  > {}

export interface ProdukCreateResponse {
  status: string;
  message: string;
  data?: Produk;
}

export interface ProdukDetailResponse extends Produk {}
export interface ProdukUpdateResponse extends ProdukCreateResponse {}
export interface ProdukUpdatePayload
  extends Pick<
    Produk,
    | "id"
    | "nama_produk"
    | "kategori_produk"
    | "harga_produk"
    | "jumlah_produk"
    | "deskripsi_produk"
    | "tahun_pembuatan"
  > {}

export interface ProdukCreateArrayPayload {
  data: ProdukCreatePayload[];
}

export interface ProdukDeleteArrayPayload {
  delete: number[];
}
