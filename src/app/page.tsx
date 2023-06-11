import { Logo } from "@/components/Logo";
import { Github } from "@/components/icons/Github";
import { Google } from "@/components/icons/Google";
import { RocketLaunch } from "@/components/icons/RocketLaunch";



export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen p-5 bg-gray-800">
      <div className={`max-w-[598px] min-w-[40%] h-full flex items-center justify-center relative overflow-hidden bg-[url('../assets/cover.png')] bg-cover bg-bottom bg-no-repeat rounded-md`}>
        <Logo />
      </div>

      <div className="flex flex-col items-center flex-1 gap-10">
        <div className="w-[372px] text-gray-200">
          <h1 className="text-2xl font-bold text-gray-100">Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </div>
        
        <div className="space-y-4 w-[372px]">
          <button className="w-full leading-relaxed flex items-center gap-5 px-6 py-5 bg-gray-600 rounded-[8px] text-gray-200 font-bold">
            <Google />
            Entrar com Google
          </button>
          <button className="w-full leading-relaxed flex items-center gap-5 px-6 py-5 bg-gray-600 rounded-[8px] text-gray-200 font-bold">
            <Github className="" />
            Entrar com GitHub
          </button>
          <button className="w-full leading-relaxed flex items-center gap-5 px-6 py-5 bg-gray-600 rounded-[8px] text-gray-200 font-bold">
            <RocketLaunch />
            Acessar como visitante
          </button>
        </div>
      </div>
    </main>
  )
}
