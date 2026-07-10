import './SearchBar.css'

function SearchBar({search,setSearch,onSearch}){
    return(
        <div className="search-container">
            <input 
                type="text" 
                placeholder="search by Employee ID, Name, Email or Department" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}
export default SearchBar;