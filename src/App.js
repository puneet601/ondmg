import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import SearchBar from './components/SearchBar'
const App = () =>{
  const [keyword, setKeyword] = useState('')
  const [list, setList] = useState([])
  const [search, setSearch] = useState('all')
  const [byf, setBy] = useState('popularity')
  const [time, setTime] = useState('alltime')
  const [url,setUrl]=useState('')
  const [defaultlist, setDefaultList] = useState([
    {
      "by" : "dhouston",
      "descendants" : 71,
      "id" : 8863,
      "kids" : [ 9224, 8917, 8952, 8958, 8884, 8887, 8869, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
      "score" : 104,
      "time" : 1175714200,
      "title" : "My YC app: Dropbox - Throw away your USB drive",
      "type" : "story",
      "url" : "http://www.getdropbox.com/u/2/screencast.html"
    },
    {
      "by" : "BrandonM",
      "id" : 9224,
      "kids" : [ 9272 ],
      "parent" : 8863,
      "text" : "I have a few qualms with this app:<p>1. For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.  From Windows or Mac, this FTP account could be accessed through built-in software.<p>2. It doesn't actually replace a USB drive.  Most people I know e-mail files to themselves or host them somewhere online to be able to perform presentations, but they still carry a USB drive in case there are connectivity problems.  This does not solve the connectivity issue.<p>3. It does not seem very \"viral\" or income-generating.  I know this is premature at this point, but without charging users for the service, is it reasonable to expect to make money off of this?",
      "time" : 1175786214,
      "type" : "comment"
    },
    {
      "by" : "brett",
      "id" : 8917,
      "parent" : 8863,
      "text" : "This is genius. It's is problem everyone is having, and everyone knew it (<a href=\"http://www.aaronsw.com/weblog/lazybackup\">http://www.aaronsw.com/weblog/lazybackup</a> ). If it really works as well as it looks in that demo then they nailed it. I'm both envious and inspired. I'll be surprised if YC does not fund them. ",
      "time" : 1175723293,
      "type" : "comment"
    },
    {
      "by" : "nickb",
      "id" : 8952,
      "kids" : [ 9153 ],
      "parent" : 8863,
      "text" : "The only problem is that you have to install something. See, it's not the same as USB drive. Most corporate laptops are locked and you can't install anything on them. That's gonna be the problem. Also, another point where your USB comparison fails is that USB works in places where you don't have internet access. <p>My suggestion is to drop the \"Throw away your USB drive\" tag line and use something else... it will just muddy your vision.<p>Kudos for launching it!!! Launching/shipping is extremely hard and you pulled it off! Super!",
      "time" : 1175727286,
      "type" : "comment"
    },
    {
      "by" : "jganetsk",
      "id" : 8958,
      "kids" : [ 9132, 8969 ],
      "parent" : 8863,
      "text" : "How are you going to scale up your storage to meet the demands of the users? Are you doing something clever, like Google Filesystem? This is not an easy problem, if you aren't prepared for it in advance. If 10,000 users sign up tomorrow... you might be very very hosed, as opposed to very very happy.",
      "time" : 1175727738,
      "type" : "comment"
    },
    {
      "by" : "andreyf",
      "id" : 121168,
      "kids" : [ 121216, 121242 ],
      "parent" : 121003,
      "text" : "Why not just scale the weight given to a vote based on the voter's karma? Or would this encourage group think?",
      "time" : 1203670226,
      "type" : "comment"
    },
    {
      "by" : "justin",
      "id" : 192327,
      "score" : 6,
      "text" : "Justin.tv is the biggest live video site online. We serve hundreds of thousands of video streams a day, and have supported up to 50k live concurrent viewers. Our site is growing every week, and we just added a 10 gbps line to our colo. Our unique visitors are up 900% since January.<p>There are a lot of pieces that fit together to make Justin.tv work: our video cluster, IRC server, our web app, and our monitoring and search services, to name a few. A lot of our website is dependent on Flash, and we're looking for talented Flash Engineers who know AS2 and AS3 very well who want to be leaders in the development of our Flash.<p>Responsibilities<p><pre><code>    * Contribute to product design and implementation discussions\n    * Implement projects from the idea phase to production\n    * Test and iterate code before and after production release \n</code></pre>\nQualifications<p><pre><code>    * You should know AS2, AS3, and maybe a little be of Flex.\n    * Experience building web applications.\n    * A strong desire to work on website with passionate users and ideas for how to improve it.\n    * Experience hacking video streams, python, Twisted or rails all a plus.\n</code></pre>\nWhile we're growing rapidly, Justin.tv is still a small, technology focused company, built by hackers for hackers. Seven of our ten person team are engineers or designers. We believe in rapid development, and push out new code releases every week. We're based in a beautiful office in the SOMA district of SF, one block from the caltrain station. If you want a fun job hacking on code that will touch a lot of people, JTV is for you.<p>Note: You must be physically present in SF to work for JTV. Completing the technical problem at <a href=\"http://www.justin.tv/problems/bml\" rel=\"nofollow\">http://www.justin.tv/problems/bml</a> will go a long way with us. Cheers!",
      "time" : 1210981217,
      "title" : "Justin.tv is looking for a Lead Flash Engineer!",
      "type" : "job",
      "url" : ""
    },
    {
      "by" : "tel",
      "descendants" : 16,
      "id" : 121003,
      "kids" : [ 121016, 121109, 121168 ],
      "score" : 25,
      "text" : "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
      "time" : 1203647620,
      "title" : "Ask HN: The Arc Effect",
      "type" : "story"
    },
    {
      "by" : "pg",
      "descendants" : 54,
      "id" : 126809,
      "kids" : [ 126822, 126823, 126917, 126993, 126824, 126934, 127411, 126888, 127681, 126818, 126816, 126854, 127095, 126861, 127313, 127299, 126859, 126852, 126882, 126832, 127072, 127217, 126889, 126875, 127535 ],
      "parts" : [ 126810, 126811, 126812 ],
      "score" : 47,
      "time" : 1204403652,
      "title" : "Poll: What would happen if News.YC had explicit support for polls?",
      "type" : "poll"
    },
    {
      "by" : "pg",
      "id" : 160705,
      "poll" : 160704,
      "score" : 335,
      "text" : "Yes, ban them; I'm tired of seeing Valleywag stories on News.YC.",
      "time" : 1207886576,
      "type" : "pollopt"
    },
    {
      "by" : "tel",
      "descendants" : 16,
      "id" : 121003,
      "kids" : [ 121016, 121109, 121168 ],
      "score" : 25,
      "text" : "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
      "time" : 1203647620,
      "title" : "Ask HN: The Arc Effect",
      "type" : "story"
    },
    {
      "by" : "pg",
      "id" : 126811,
      "poll" : 126809,
      "score" : 49,
      "text" : "Users would create fewer polls, because the main reason they do it now is to get karma from people voting up the poll choices.",
      "time" : 1204403652,
      "type" : "pollopt"
    },
    {
      "by" : "zaidf",
      "id" : 8869,
      "kids" : [ 8949 ],
      "parent" : 8863,
      "text" : "This has great potential!<p>Only suggestion I would have is go slower on the demo. I know you lost me very early into it switching between windows.<p>If you are looking for a wider audience than those who already know the context of dropbox, make a video where you lay out the case for use of dropbox using simple examples from user point of view(think a college student) and then in the demo show just the basic features. I got the feeling you tried to show too many features too quickly.<p>In general, I have realized it is much better to launch with something that does a few things REALLY well rather than a lot of things with little focus. When you launch with whole lot of features people assume you are competing with the big companies. When you launch small and do it well, it is easier to attract a user-base and THEN keep feeding it more advance features in form of updates.<p>Good luck! Looks slick from the UI.\n",
      "time" : 1175715380,
      "type" : "comment"
    },
    {
      "by" : "dhouston",
      "descendants" : 71,
      "id" : 8863,
      "kids" : [ 9224, 8917, 8952, 8958, 8884, 8887, 8869, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
      "score" : 104,
      "time" : 1175714200,
      "title" : "My YC app: Dropbox - Throw away your USB drive",
      "type" : "story",
      "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }
  ])
  const updateInput = async (input) => {
    console.log(input)
    const filtered = defaultlist.filter(item => {      
      try{if (item.type === "story") {
        if (item.title.toLowerCase().includes(input.toLowerCase()) || item.url.toLowerCase().includes(input.toLowerCase()) || item.by.toLowerCase().includes(input.toLowerCase()))
        return item
      }
      else if (item.type === "comment") {
        if (item.text.toLowerCase().includes(input.toLowerCase()) || item.by.toLowerCase().includes(input.toLowerCase()))
        return item
      }
      }
      catch (err)
      {
        window.alert(err);
      }
    })
    console.log(filtered);
    setList(filtered);
   
     setKeyword(input);
     
    console.log(list);
  }
return(
  <div>
    <SearchBar value={keyword} onChange={updateInput} />
    Search:<select value={search} onChange={(e) => setSearch(e.target.value)} >
      <option id="all" value="all">All</option>
      <option id="stories" value="stories">Stories</option>
      <option id="comments" value="comments">comments</option>
    </select>
    by:<select value={byf} onChange={(e) => setBy(e.target.value)}>
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
    <Display list={list} />
  </div>

);
}
export default App
