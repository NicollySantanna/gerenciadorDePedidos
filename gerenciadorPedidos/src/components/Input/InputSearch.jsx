import React from 'react'
import { FaSearch } from "react-icons/fa";
import './inputSearch.css'

const InputSearch = () => {

  return (
   <>
    <form>
        <div className='containerInput'>
            <div className="iconSearch">
                <a href=""><FaSearch/></a>
            </div>
            <input type="text" placeholder='Buscar...'  id='inputSearch'/>
          </div>
    </form>


   </>
  )
}

export default InputSearch
