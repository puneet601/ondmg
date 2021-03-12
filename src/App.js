import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
const App = () =>{
  const [keyword, setKeyword] = useState('')
  const [list, setList] = useState([])
  const [defaultlist, setDefaultList] = useState([])
  const [search, setSearch] = useState('All')
  const [by, setBy] = useState('Popularity')
  const [time,setTime]=useState('All Time')
  const fetchData = async (url) => {
    return await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => response.json())
      .then(data => {
        console.log(data)
         setDefaultList(data)
       }).catch(err => console.log(err));}

  const updateInput = async (input) => {
    //  const filtered = countryListDefault.filter(country => {
    //   return country.name.toLowerCase().includes(input.toLowerCase())
    //  })
    //  setInput(input);
    //  setCountryList(filtered);
    console.log(input);
    console.log(search);
    console.log(by);
    console.log(time);
    // if (search === "stories")
    // {
    //    fetchData(``)
    //   }
    fetchData();
    console.log(defaultlist);

  }
return(
  <div>
    <SearchBar value={keyword} onChange={updateInput} />
    Search:<select value={search} onChange={(e) => setSearch(e.target.value)} >
      <option id="all" value="all">All</option>
      <option id="stories" value="stories">Stories</option>
      <option id="comments" value="comments">comments</option>
    </select>
    by:<select value={by} onChange={(e) => setBy(e.target.value)}>
      <option id="popularity" value="popularity">Popularity</option>
      <option id="date" value="date">Date</option>
    </select>
    for:<select value={time} onChange={(e) => setTime(e.target.value)}>
      <option id="alltime" value="alltime">All Time</option>
      <option id="day">Last 24h</option>
      <option id="week">Past Week</option>
      <option id="month">Past Month</option>
      <option id="year">Past Year</option>
      <option id="custom">Custom Range</option>
    </select>
  </div>

);
}
export default App
