"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

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
  bloodtype: z.string().min(1, { message: "Gruppo sanguigno è obbligatorio" }),
  birthday: z.date({ message: "La data di nascita è obbligatoria" }),
  sex: z.enum(["maschio", "femmina"], { message: "Genere è obbligatorio" }),
  img: z.instanceof(File, { message: "L'immagine è obbligatoria" }),
});

type Inputs = z.infer<typeof schema>;

const PersoneForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const metodo = type === "create" ? "Crea" : "Aggiorna";
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">{metodo} una persona</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Informazioni personali
        <div className="flex justify-between flex-wrap gap-4">
          <InputField
            label="First Name"
            name="firstname"
            defaultValue={data?.firstname}
            register={register}
            error={errors.firstname}
          />
          <InputField
            label="Last name"
            name="lastname"
            defaultValue={data?.lastname}
            register={register}
            error={errors.lastname}
          />
          <InputField
            label="Phone"
            name="phone"
            defaultValue={data?.phone}
            register={register}
            error={errors.phone}
          />
          <InputField
            label="Address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors.address}
          />
          <InputField
            label="Blood Type"
            name="bloodtype"
            defaultValue={data?.bloodtype}
            register={register}
            error={errors.bloodtype}
          />
          <InputField
            label="Birthday"
            name="birthday"
            defaultValue={data?.birthday}
            register={register}
            error={errors.birthday}
            type="date"
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Genere</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="male">Maschio</option>
              <option value="female">Femmina</option>
            </select>
            {errors.sex?.message && (
              <p className="text-red-500 text-xs">
                {errors.sex.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
            <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
              <Image src="/upload.png" alt="" width={28} height={28}/>
              <span>Upload a photo</span>
            </label>
            <input type="file" id="img" {...register("img")} className="hidden"/>
            {errors.img?.message && (
              <p className="text-red-500 text-xs">
                {errors.img.message.toString()}
              </p>
            )}
          </div>
        </div>
      </span>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Aggiungi" : "Aggiorna"}
      </button>
    </form>
  );
};

export default PersoneForm;
