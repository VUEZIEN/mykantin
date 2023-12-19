import Label from "@/components/Label";
import InputText from "@/components/InputText";
import { produckFilter } from "../interface";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Select from "@/components/Select";
import { kategori, option } from "../tambah/page";

type FilterProps = {
  params: produckFilter;
  setParams: Dispatch<SetStateAction<any>>;
};
const Filter: React.FC<FilterProps> = ({ params, setParams }) => {
  let [eror, setError] = useState<any>();

  const handleChange = (e: ChangeEvent<any>) => {
    setParams((params: produckFilter) => {
      return {
        ...params,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section>
      <section className="space-y-3 pt-5">
        <section>
          <Label title="Nama Produk" htmlFor="nama_produk" />
          <InputText
            onChange={handleChange}
            name="nama_produk"
            id="nama_produk"
            value={params.nama_produk}
          />
        </section>
        <section>
          <Label title="Jumlah produk" htmlFor="jumlah_produk" />
          <InputText
            onChange={handleChange}
            name="jumlah_produk"
            id="jumlah_produk"
            value={params.jumlah_produk}
          />
        </section>
        <section>
          <Label title="kategori" htmlFor="kategori_produk" />
          <Select
            onChange={handleChange}
            options={kategori}
            value={params.kategori_produk}
            name="kategori_produk"
            id="kategori_produk"
          />
        </section>

        <div className="flex justify-between gap-4">
          <section>
            <Label title="max harga" htmlFor="max_harga_produk" />
            <InputText
              onChange={handleChange}
              value={params.max_harga_produk}
              name="max_harga_produk"
              placeholder="Rp.99999999"
              id="max_harga_produk"
            />
          </section>
          <section>
            <Label title="min harga" htmlFor="min_harga_produk" />
            <InputText
              onChange={handleChange}
              value={params.min_harga_produk}
              name="min_harga_produk"
              placeholder="Rp.10.000"
              id="min_harga_produk"
            />
          </section>
        </div>

        <div className="flex justify-between ">
          <section>
            <Label title="from tahun" htmlFor="from_tahun_pembuatan" />
            <Select
              onChange={handleChange}
              value={params.from_tahun_pembuatan}
              name="from_tahun_pembuatan"
              options={option}
              id="from_tahun_pembuatan"
            />
          </section>
          <section>
            <Label title="to tahun" htmlFor="to_tahun_pembuatan" />
            <Select
              onChange={handleChange}
              value={params.to_tahun_pembuatan}
              name="to_tahun_pembuatan"
              options={option}
              id="to_tahun_pembuatan"
            />
          </section>
        </div>
        {eror && <p className="text-red-500 font-light text-xs">{eror}</p>}
      </section>
    </section>
  );
};

export default Filter;
