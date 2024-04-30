import React from 'react'

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 sm:px-20 px-10 py-8 border-t bg-gradient-to-b from-white to-violet-200 grid-rows-5">
      <div className="flex flex-col items-start justify-start gap-y-2 col-span-2">
        <div className="flex items-center text-[#B91708] space-x-1">

          <h2 className="text-xl font-extrabold">LOGO</h2>
        </div>
        <p className="text-sm mt-7">
          Reach us Monday {"-"}
          <br /> Friday from 9 am to 6 pm
        </p>
        <p className="text-sm">+1 001 234 5678</p>
        <button className="bg-[#FEE801] px-8 py-2 mt-4 rounded-full text-black">
          CALL US
        </button>
      </div>
      <div className="">
        <h2 className="font-bold">COMPANY</h2>
        <div className="flex flex-col gap-y-3 mt-12">
          <a href={"#"}>About us</a>
          <a href={"#"}>Contact</a>
          <a href={"#"}>Agency</a>
        </div>
      </div>
      <div className="">
        <h2 className="font-bold">Services</h2>
        <div className="flex flex-col gap-y-3 mt-12">
          <a href={"#"}>Animated videos </a>
          <a href={"#"}>Website design</a>
          <a href={"#"}>Illustration</a>
          <a href={"#"}>Social Media</a>
          <a href={"#"}>Brochure </a>
          <a href={"#"}>Logo </a>
        </div>
      </div>
      <div className="">
        <h2 className="font-bold">Connect with us</h2>
        <div className="mt-12 flex gap-x-4">
          <aedin size={35} />
        </div>
      </div>
    </div>
  )
}

export default App