import Youtube from './YouTubeLogo'
export default function NavBar() {
  return (
    <nav className='col-start-1 col-end-3 grid grid-cols-3'>
      <div className='flex flex-row items-center gap-1 pl-4'>
        <Youtube height='1.8rem' width='3rem' />
        <span>YouTube</span>
      </div>
      <div className='flex justify-center items-center rounded-2xl border-solid border border-[#282828] bg-transparent h-9'>
        <input type='text' placeholder='Search' className='w-full p-[0.5rem_1rem] rounded-2xl border-none bg-transparent placeholder-white focus:none'/>
        <button className='h-full p-[0.5rem_1rem] rounded-2xl border-none bg-transparent text-[#ffffff] cursor-pointer'>
        <span className='text-white'><img src="/public/search.svg" alt="search" className='w-6 h-6' /></span>  
        </button>
      </div>
      <div className='flex justify-end'>
        <img
          src='https://api.dicebear.com/8.x/adventurer/svg?seed=Beto'
          alt='user'
          className='w-12 h-12 rounded-full cursor-pointer'
        ></img>
      </div>
    </nav>
  )
}
