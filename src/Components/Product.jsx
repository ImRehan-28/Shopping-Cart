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
    <div className='w-[20%] m-2 flex flex-col items-center justify-between rounded-2xl shadowapply hover:scale-107 transition duration-200 ease-in mb-2'>

      <div className='font-semibold text-lg text-left truncate  inline-block overflow-hidden whitespace-nowrap mt-3'>
        <p>{post.title.substring(0, 15)}...</p> </div>

      <div className='px-auto w-[70%] text-[10px] mt-4'>
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        {/* <span onClick={readmorehandler}>{readmore?'Show less':'read more'}</span> */}
      </div>

      <div className='mt-3'><img src={post.image} className='h-[150px] w-[150px] object-contain' /></div>

      <div className='flex w-[85%] justify-between mt-7 mb-4'>
        <div className='text-[13px] text-green-700 font-medium'><p>${post.price}</p></div>

        {
          cart.some((p) => p.id === post.id) ?
            (<button onClick={removeFromCart} className='border-2 text-gray-700 rounded-full text-[12px] font-semibold p-1 px-3 uppercase
              hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>REMOVE ITEM</button>) :
            (<button onClick={addToCart} className='border-2 text-gray-700 rounded-full text-[12px] font-semibold p-1 px-3 uppercase
              hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>ADD TO CART</button>)
        }
      </div>


    </div>
  )
}

export default Product