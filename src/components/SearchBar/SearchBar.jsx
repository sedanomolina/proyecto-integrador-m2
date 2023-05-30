import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('')


   const handleChange = event => setId(event.target.value);
   const showCharacter = () => onSearch(id)

   return (
      <div className={styles.container__search} >

         <input
            className={styles.input__search}
            placeholder="Enter id"
            type='search'
            onChange={handleChange}
         />

         <button
            className={styles.button__search}
            onClick={showCharacter}>Search</button>

      </div>
   );
};

