import Footer from "@/components/Footer";
import SideBar from "@/components/Sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Fullscreen,
  Maximize2,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-color"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album"
              />
              <strong>Yeshua</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-2xl mt-10">
            Made for Diego Schell Fernandes
          </h1>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red an more
              </span>
            </a>

            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red an more
              </span>
            </a>

            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red an more
              </span>
            </a>

            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red an more
              </span>
            </a>

            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white">
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red an more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
