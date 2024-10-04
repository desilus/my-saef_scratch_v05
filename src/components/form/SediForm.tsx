"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username deve avere almeno 3 caratteri" })
    .max(20, { message: "Username non può avere più di 20 caratteri" }),
  email: z.string().email({ message: "Indirizzo email non valido" }),
  password: z
    .string()
    .min(8, { message: "La password deve contenere almeno 8 caratteri" }),
  firstname: z.string().min(1, { message: "Il nome è obbligatorio" }),
  lastname: z.string().min(1, { message: "Il cognome è obbligatorio" }),
  phone: z.string().min(1, { message: "Il telefono è obbligatorio" }),
  address: z.string().min(1, { message: "L'indirizzo è obbligatorio" }),
  birthday: z.date({ message: "La data di nascita è obbligatoria" }),
  sex: z.enum(["maschio", "femmina"], { message: "Genere è obbligatorio" }),
  img: z.instanceof(File, { message: "L'immagine è obbligatoria" }),
});

const SediForm = ({
  type,
  data,
}: {
  type: "create" | "update;";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Crea una nuova sede</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication information
      </span>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Username</label>
        <input
          type="text"
          {...register("username")}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        />
        {errors.username?.message && (
          <p className="text-red-500 text-xs">
            {errors.username?.message.toString()}
          </p>
        )}
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Informazioni personali
      </span>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Aggiungi" : "Aggiorna"}
      </button>
    </form>
  );
};

export default SediForm;
