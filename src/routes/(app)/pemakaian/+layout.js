import { readonly } from "svelte/store";

export const load = () => {
  let fields = [
    {
      name: "no_spj",
      label: "No SPJ",
      type: "text",
      placeholder: "Isi jika ada!",
    },
    { name: "sopir", label: "Sopir", type: "select" },
    {
      name: "tujuan",
      label: "Tujuan",
      type: "text",
      placeholder: "Tempat tujuan",
    },
    {
      name: "keperluan",
      label: "Keperluan",
      type: "text",
      placeholder: "Contoh : Dinas antar...",
    },
    { name: "tanggal_berangkat", label: "Tanggal Berangkat", type: "date" },
    { name: "jam_berangkat", label: "Jam Berangkat", type: "time" },
    { name: "tanggal_kembali", label: "Tanggal Kembali", type: "date" },
    { name: "jam_kembali", label: "Jam Kembali", type: "time" },
    { name: "km_awal", label: "KM Awal", type: "number", placeholder: 0 },
    { name: "km_akhir", label: "KM akhir", type: "number", placeholder: 0 },
    {
      name: "km_pemakaian",
      label: "KM Pemakaian",
      type: "number",
      readonly: true,
      placeholder: 0,
      min: 1,
    },
  ];

  let listSopir = [
    ["Santoso", "1"],
    ["Askep", "2"],
    ["Lain", "3"],
  ];
  return {
    fields,
    listSopir,
  };
};

// step: "3600"
