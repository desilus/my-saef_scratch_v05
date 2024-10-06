import EventCalendar from "@/components/EventCalendar";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePersonaPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-orange-500 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
                <Image src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">John Saef Smith</h1>
                <FormModal table="student" type="update" data={{
                  id: 1,
                  username :"deanguerrero",
                  email: "deanguerrero@gmail.com",
                  password: "password",
                }
                
              }/>
              </div>
                <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/blood.png" alt="" width={14} height={14}/>
                        <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/date.png" alt="" width={14} height={14}/>
                        <span>Gennaio 2024</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/mail.png" alt="" width={14} height={14}/>
                        <span>johnsaefsmith@test.com</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/phone.png" alt="" width={14} height={14}/>
                        <span>0373123456</span>
                    </div>
                </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400">Attendance</span>
                </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400">Class</span>
                </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400">Lessons</span>
                </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">2</h1>
                    <span className="text-sm text-gray-400">Branches</span>
                </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="">WIP</div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-orange-100">Corsi</Link>
            <Link href="/" className="p-3 rounded-md bg-orange-100">Nomine</Link>
        </div>
      </div>
      <EventCalendar/>
      </div>
    </div>
  );
};

export default SinglePersonaPage;
