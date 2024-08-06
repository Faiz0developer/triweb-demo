import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type TInputProps={
  onChange:(val:any)=> void;
  title:string;
  onCLick:any; 
  value:string; 
  placeholder:string;
}

const Input = ({ onChange, title, onCLick, value, placeholder }: TInputProps) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={value}
        className="px-3 py-2 rounded mr-2 focus:outline-none focus:border focus:border-[#0c66e4]"
        placeholder={placeholder}
      />
      <button
        className="bg-[#0c66e4] rounded text-white px-3 py-1.5"
        onClick={onCLick}
      >
        {title}
      </button>
    </div>
  );
};

export default function Home() {
  const [register, setRegister] = useState("");
  const [resolve, setResolve] = useState("");
  const [transfer, setTransfer] = useState("");

  const registerSubmitHandler = (_e: any) => {
    console.log(register);
    setRegister("");
  };
  const resolveSubmitHandler = (_e: any) => {
    console.log(resolve);
    setResolve("");
  };
  const transferSubmitHandler = () => {
    console.log(transfer);
    setTransfer("");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-10 p-24 mt-10 ${inter.className}`}
    >
      <h1 className="text-2xl">Nameservice</h1>
      <div className="flex flex-col gap-10">
      <Input
        title="Register"
        value={register}
        placeholder="Enter Name"
        onChange={(e: any) => setRegister(e.target.value)}
        onCLick={registerSubmitHandler}
      />
      <Input
        title="Resolve"
        value={resolve}
        placeholder="Enter Name"
        onChange={(e: any) => setResolve(e.target.value)}
        onCLick={resolveSubmitHandler}
      />
      <Input
        title="Transfer"
        value={transfer}
        placeholder="Enter Name"
        onChange={(e: any) => setTransfer(e.target.value)}
        onCLick={transferSubmitHandler}
      />
      </div>
      
    </main>
  );
}
