import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/Cartslice'
const Product = ({ post }) => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const [readmore,setreadmore]=useState(false)

  // const desc =readmore?post.description : `${post.description.substring(0,53)}...`

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from Cart")

  }

  // function readmorehandler() {
  //       setreadmore(!readmore)
  //   }

  return (
    <div className="w-full flex flex-col items-center justify-between rounded-2xl shadowapply hover:scale-105 transition duration-200 ease-in p-4">

      <div className="font-semibold text-sm sm:text-base md:text-lg text-center mt-2 truncate w-full">
        <p>{post.title.substring(0, 15)}...</p> </div>

      <div className="text-xs sm:text-sm text-gray-600 mt-3 text-center px-2">
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        {/* <span onClick={readmorehandler}>{readmore?'Show less':'read more'}</span> */}
      </div>

      <div className="mt-3 flex justify-center">
        <img src={post.image} className="h-[120px] sm:h-[150px] md:h-[180px] w-auto object-contain" /></div>

      <div className="flex w-full justify-between items-center mt-5">
        <div className="text-sm sm:text-base text-green-700 font-medium"><p>${post.price}</p></div>

        {
          cart.some((p) => p.id === post.id) ?
            (<button onClick={removeFromCart} className="border-2 text-gray-700 rounded-full text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 uppercase
        hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer">REMOVE ITEM</button>) :
            (<button onClick={addToCart} className="border-2 text-gray-700 rounded-full text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 uppercase
        hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer">ADD TO CART</button>)
        }
      </div>


    </div>
  )
}

export default Product