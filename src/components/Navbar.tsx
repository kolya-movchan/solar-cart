import { useAppSelector } from '../redux/hooks'

const Navbar = () => {
  const amount = useAppSelector(store => store.cart.amount)

  return (
    <div className="flex flex-row justify-center mt-2 p-2 text-lg font-medium sticky top-0 bg-white">
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {amount}
        </span>
      </p>

      <div className="fixed top-2/4 right-px h-8 bg-cyan-300 rounded w-8 bg-left flex justify-center items-center opacity-70">
        <a href="/" className='p-1'>
          <img src="video.svg" alt="demo video" className='h-[90%]' />
        </a>
      </div>
    </div>
  )
}

export default Navbar
