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
                placeholder="Search for a song or artist"
                onChange={(e) => setData({ ...data, query: e.target.value })}
                value={data.query}
            />
            {/* <input
                type="submit"
                onClick={(f) => setData({ ...data, query: "all" })}
                value={data.query}
            /> */}
            <input type="submit" value="Browse All" onClick={() => setData({...data, query: "*"})}></input>
            <br />
            {data.results.body ? <Songs songs={data.results.body.songs} /> :  <Songs/>}
         </div>
    );
}
 
