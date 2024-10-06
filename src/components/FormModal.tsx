"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
// CARICA TUTTO SEMPRE
// import SediForm from "./form/SediForm";
// import PersoneForm from "./form/PersoneForm";

// LAZY LOADING AL POSTO DI CARICARE TUTTO SUBITO
const SediForm = dynamic(()=>import("./form/SediForm"), {
  loading:()=><h1>Loading...</h1>
})
const PersoneForm = dynamic(()=>import("./form/PersoneForm"), {
  loading:()=><h1>Loading...</h1>
})


const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <SediForm type={type} data={data} />,
  student: (type, data) => <PersoneForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table: "teacher" | "student";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-orange-500"
      : type === "update"
      ? "bg-orange-500"
      : "bg-orange-100";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          I dati saranno cancellati. Sei sicuro di voler eliminare questo{" "}
          {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Elimina
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      //   "create or update form"
      // AGGIUNTO TEST PER SEDIFORM
      forms[table](type, data)
    ) : (
      "Form non trovato!"
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          {/* CONTROLLARE PROBLEMA ALTEZZA MOBILE NN SI VEDE IL TASTO */}
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
