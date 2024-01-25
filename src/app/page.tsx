import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col rounded-lg overflow-hidden">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='flex flex-col gap-4 mt-8'>
            <a href="" className='flex gap-3 items-center text-sm font-semibold text-zinc-400 hover:text-zinc-50 '>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex gap-3 items-center text-sm font-semibold text-zinc-400 hover:text-zinc-50 '>
              <Search />
              Search
            </a>
            <a href="" className='flex gap-3 items-center text-sm font-semibold text-zinc-400 hover:text-zinc-50 '>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-900 flex flex-col gap-3'>
            <a className='text-zinc-400 hover:text-zinc-100 text-sm' href="">HYPERPOP</a>
            <a className='text-zinc-400 hover:text-zinc-100 text-sm' href="">R&B and Chills</a>
            <a className='text-zinc-400 hover:text-zinc-100 text-sm' href="">Just Jazz</a>
            <a className='text-zinc-400 hover:text-zinc-100 text-sm' href="">Waking Up</a>
            <a className='text-zinc-400 hover:text-zinc-100 text-sm' href="">Levitating</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-zinc-900">
          <div className='flex items-center gap-4'>
            <button className='bg-black/40 rounded-full p-1 pr-1.5 pl-0.5'>
              <ChevronLeft />
            </button>
            <button className='bg-black/40 rounded-full p-1 pr-0.5 pl-1.5'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-3 mt-5'>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Folklore</strong>
              <button className='flex w-12 h-12 justify-center pl-1  items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play size={24} fill='bg-black' />
              </button>
            </a>
          </div>
          
          <h1 className='font-semibold text-3xl mt-10'>Made for You</h1>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 absolute bottom-0 left-0 w-screen">
        footer
      </footer>
    </div>
  );
}
