import React from 'react';
import useFetch from "../../hooks/useFetch";
import Songs from "../songs/Songs";
import './searchbar.css'

export default function SearchBar() {
    const { data, setData } = useFetch();
    // console.log("dataaa ", data);

    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder="Search for a song"
                onChange={(e) => setData({ ...data, slug: e.target.value })}
                value={data.slug}
            />
            {/* <input
                type="submit"
                onClick={(f) => setData({ ...data, slug: "all" })}
                value={data.slug}
            /> */}
            <input type="submit" value="Browse All" onClick={() => setData({...data, slug: "all"})}></input>
            <br />
            {data.results.products ? <Songs songs={data.results.products} /> :  <Songs/>}
         </div>
    );
}
 
