import { HomeIcon, Library, Search } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 font-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 font-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 font-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
        <div className="bg-zinc-800 rounded ">
          <h2 className="mx-4 pt-2 text-md font-bold">
            Crie sua primeira playlist
          </h2>
          <p className="text-sm mx-4">é fácil, vamos te ajudar.</p>
          <button className="bg-white text-zinc-900 m-4 p-3 rounded-full">
            Criar uma playlist
          </button>
        </div>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My PlayList
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
      </nav>
    </aside>
  );
}
