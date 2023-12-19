"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { useFormik, Form, FormikProvider } from "formik";
import Link from "next/link";
import { ProdukUpdatePayload } from "../../interface";
import useProdukModule from "../../lib";
import { ProdukCreateSchema, kategori, option } from "../../tambah/page";

const UpdateUser = ({ params }: { params: { id: string } }) => {
  const { useDetaiProduk, useUpdateProduk } = useProdukModule();
  const { mutate, isLoading } = useUpdateProduk(+params.id);
  const { data, isFetching } = useDetaiProduk(params.id);
  const formik = useFormik<ProdukUpdatePayload>({
    initialValues: {
      nama_produk: data?.nama_produk || "",
      kategori_produk: data?.kategori_produk || undefined,
      harga_produk: data?.harga_produk || 0,
      jumlah_produk: data?.jumlah_produk || 0,
      deskripsi_produk: data?.deskripsi_produk || "",
      tahun_pembuatan: data?.tahun_pembuatan || 2010,
      id: data?.id || 0,
    },
    validationSchema: ProdukCreateSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          window.location.href = `/produk/${data?.id}/detail`;
        },
      });
    },
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
    touched
  } = formik;

  if (isFetching) {
    return (
      <>
        <div className="bg-white/20 backdrop-blur-xl flex-col w-full h-screen flex justify-center items-center">
          <picture>
            <img src="/loading.png" alt="" className="w-72 h-72" />
          </picture>
          <span className="font-bold text-xl">Tunggu dulu ya....</span>
        </div>
      </>
    );
  }
  return (
    <section className="flex items-center absolute justify-center w-full h-full">
      <section className="w-1/3">
        <h2 className="text-xl font-bold text-gray-500">Update User</h2>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
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
              <Button
                width="lg1"
                title="Update"
                isLoading={isLoading}
                isDisabled={isLoading}
                colorSchema="dark"
              />
              <Link href={"/user"}>
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

export default UpdateUser;

