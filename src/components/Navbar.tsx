import { useAppSelector } from '../redux/hooks'

const Navbar = () => {
  const amount = useAppSelector(store => store.cart.amount)

  return (
    <div className="flex flex-row justify-center mt-2 p-2 text-lg font-medium sticky top-0 bg-white z-[2]">
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {amount}
        </span>
      </p>

      <div className="fixed top-2/4 right-px h-8 bg-cyan-300 rounded w-8 bg-left flex justify-center items-center opacity-70 hover:opacity-100">
        <a
          href="https://www.loom.com/share/4e3948b5ba674fcea4060ff6511a85cf?sid=f713fa86-be68-41ea-87d1-dd48dcd06bff"
          className="p-1"
          target="_blank"
        >
          <img src="video.svg" alt="demo video" className="h-[90%]" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
