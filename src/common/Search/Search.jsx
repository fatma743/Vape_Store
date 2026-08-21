import { useDisplayProducts } from '../../zustand/displaySlice';
import { useSearch } from '../../zustand/searchSlice';
import './Search.css'
import { FaSearch } from "react-icons/fa";

export default function Search() {

  const searchValue = useSearch( s => s.searchValue)
  const handleSearchValue = useSearch( s => s.handleSearchValue)
  const productData = useDisplayProducts( s => s.productData)
  

  const menu = productData.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='Search relative mr-16'>

      <div>
         <input
       value={searchValue}
       onChange={(e) => handleSearchValue(e.target.value)}
       className=" block w-full bg-white outline-none text-black  rounded-full py-4 px-14 pr-10 text-xl font-medium capitalize border-none "
      placeholder="Search for"
        />
       <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-(--main-color) rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 cursor-pointer"><FaSearch /></button>
      </div>

      {searchValue.trim() && menu.length > 0 && (
  <div className="absolute top-[110%] left-0 w-full bg-white rounded-2xl shadow-lg overflow-hidden z-50">
    <ul className='max-h-70 overflow-y-auto'>
    {menu.map((val) => (
      <div
      onClick={()=> handleSearchValue(val.title)}
        key={val.id}
        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-black" >
        {val.title}
      </div>
    ))}

    </ul>
  </div>
)}
                      
     </div>
    
  )
}
