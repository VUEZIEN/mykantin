"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { useFormik, Form, FormikProvider } from "formik";
import * as yup from "yup";
import Link from "next/link";
import useProdukModule from "../lib";
import { KategoriProduk, ProdukCreatePayload } from "../interface";
import useProfile from "@/hook/useImage";

export const ProdukCreateSchema = yup.object().shape({
  nama_produk: yup
    .string()
    .nullable()
    .default("")
    .required("isi nama Produk")
    .min(5, "Minimal 5 huruf")
    .max(225, "Maximal 225 huruf"),
  kategori_produk: yup
    .string()
    .nullable()
    .default(undefined)
    .required("Pilih Kategori Produk"),
  image: yup
    .string()
    .nullable()
    .default("")
    .required("Pilih image Produk"),
  harga_produk: yup
    .number()
    .nullable()
    .min(10000, "Minimal 10 ")
    .default(10000)
    .required("isi harga Produk"),
  jumlah_produk: yup
    .number()
    .nullable()
    .default(10)
    .min(10, "Minimal 10 ")
    .required("isi jumlah Produk"),
  deskripsi_produk: yup
    .string()
    .nullable()
    .default("")
    .required("isi deskripsi Produk"),
  tahun_pembuatan: yup
    .number()
    .nullable()
    .default(undefined)
    .required("isi Tahun Produk di buat"),
});
export const option = [
  {
    value: 2010,
    label: "2010",
  },
  {
    value: 2011,
    label: "2011",
  },
  {
    value: 2012,
    label: "2012",
  },
  {
    value: 2013,
    label: "2013",
  },
  {
    value: 2014,
    label: "2014",
  },
  {
    value: 2015,
    label: "2015",
  },
  {
    value: 2016,
    label: "2016",
  },
  {
    value: 2017,
    label: "2017",
  },
  {
    value: 2018,
    label: "2018",
  },
  {
    value: 2019,
    label: "2019",
  },
  {
    value: 2020,
    label: "2020",
  },
  {
    value: 2021,
    label: "2021",
  },
  {
    value: 2022,
    label: "2022",
  },
  {
    value: 2023,
    label: "2023",
  },
];

export const kategori = [
  {
    value: "handphone",
    label: "handphone",
  },
  {
    value: "laptop",
    label: "laptop",
  },
  {
    value: "mobil",
    label: "mobil",
  },
  {
    value: "motor",
    label: "motor",
  },
];

const CreateProduk = () => {
  const { selectedImage, handleImageUpload } = useProfile();
  const { useCreateProduk } = useProdukModule();
  const { mutate, isLoading } = useCreateProduk();
  const formik = useFormik<ProdukCreatePayload>({
    initialValues: ProdukCreateSchema.getDefault(),
    validationSchema: ProdukCreateSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
          window.location.href = "/produk";
        },
      });
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
    touched,
  } = formik;

  return (
    <section className="flex items-center justify-center w-full h-screen absolute top-[5vh]">
      <section className="w-1/3">
        <h2 className="text-xl font-bold text-gray-500">Tambah Produck</h2>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
          <section>
              <Label htmlFor="image" title="Nama Produk" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                placeholder="image produk"
                id="image"
                name="image"
                type="file"
                accept="image/*"
                isError={!!errors.image && !!touched.image}
                messageError={errors.image}
              />
            </section>
            <section>
              <Label htmlFor="nama_produk" title="Nama Produk" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nama_produk}
                placeholder="nama produk"
                id="nama_produk"
                name="nama_produk"
                isError={!!errors.nama_produk && !!touched.nama_produk}
                messageError={errors.nama_produk}
              />
            </section>
            <section>
              <Label htmlFor="kategori_produk" title="kategori produk" />
              <Select
                value={values.kategori_produk}
                onBlur={handleBlur}
                id="kategori_produk"
                name="kategori_produk"
                options={kategori}
                isError={!!errors.kategori_produk}
                messageError={errors.kategori_produk}
                onChange={handleChange}
              />
            </section>
            <section>
              <Label htmlFor="harga_produk" title="harga produk" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.harga_produk}
                placeholder="harga produk"
                id="harga_produk"
                name="harga_produk"
                type="number"
                isError={!!errors.harga_produk}
                messageError={errors.harga_produk}
              />
            </section>
            <section>
              <Label htmlFor="jumlah_produk" title="jumlah produk" />
              <InputText
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jumlah_produk}
                placeholder="jumlah produk"
                id="jumlah_produk"
                name="jumlah_produk"
                type="number"
                isError={!!errors.jumlah_produk}
                messageError={errors.jumlah_produk}
              />
            </section>
            <section>
              <Label htmlFor="deskripsi_produk" title="deskripsi produk" />
              <InputText
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={values.deskripsi_produk}
                placeholder="deskripsi produk"
                id="deskripsi_produk"
                name="deskripsi_produk"
                isError={!!errors.deskripsi_produk}
                messageError={errors.deskripsi_produk}
              />
            </section>
            <section>
              <Label htmlFor="tahun_pembuatan" title="tahun pembuatan" />
              <Select
                value={values.tahun_pembuatan}
                onBlur={handleBlur}
                id="tahun_pembuatan"
                name="tahun_pembuatan"
                options={option}
                isError={!!errors.tahun_pembuatan}
                messageError={errors.tahun_pembuatan}
                onChange={handleChange}
              />
            </section>
            <section className="flex gap-3 flex-col">
              <Button width="lg1" title="Simpan" colorSchema="dark" />
              <Link href={"/produk"}>
                <Button
                  width="lg1"
                  type="button"
                  title="Cancel"
                  colorSchema="red"
                />
              </Link>
            </section>
          </Form>
        </FormikProvider>
      </section>
    </section>
  );
};

export default CreateProduk;
