import { readonly } from "svelte/store";

export const load = () => {
  let fields = [
    { name: "no_spj", label: "No SPJ", type: "text" },
    { name: "sopir", label: "Sopir", type: "select" },
    { name: "tujuan", label: "Tujuan", type: "text" },
    { name: "keperluan", label: "Keperluan", type: "text" },
    { name: "tanggal_berangkat", label: "Tanggal Berangkat", type: "date" },
    { name: "jam_berangkat", label: "Jam Berangkat", type: "time" },
    { name: "tanggal_kembali", label: "Tanggal Kembali", type: "date" },
    { name: "jam_kembali", label: "Jam Kembali", type: "time" },
    { name: "km_awal", label: "KM Awal", type: "number" },
    { name: "km_akhir", label: "KM akhir", type: "number" },
    {
      name: "km_pemakaian",
      label: "KM Pemakaian",
      type: "number",
      readonly: true,
    },
  ];
  return {
    fields,
  };
};

// step: "3600"
