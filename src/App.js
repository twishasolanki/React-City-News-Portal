import './App.css';
import Header from './Component/Header'
import Main from './Component/Main'
import Rajkot from './Component/Rajkot';
import Entertinment from './Component/Entertinment';
import Business from './Component/Business';
import Word from './Component/Word';
import Zodiac from './Component/Zodiac';
import Sports from './Component/Sports';
import Lifestyle from './Component/Lifestyle';
import Video from './Component/Video';  
import Search  from './Component/Search';
import Jamnagar from './Component/Jamnagar';
import Ahemdabad from './Component/Ahemdabad';
import Surat  from './Component/Surat';
import Mygujrat from './Component/Mygujrat';
import Dharmadarshan from './Component/Dharmadarshan';
import Corona from './Component/Corona';
import Bhavnagar from './Component/Bhavnagar';
import Automobile from './Component/Automobile';
import Login from './Component/Login';
import Register from './Component/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Entertinment from './Component/Entertinment';
// import Word from './Component/Word';
// import Business from './Component/Business';
// import Zodic from './Component/Zodic';
// import Sports from './Component/Sports';
// import Lifestyle from './Component/Lifestyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/rajkot' element={<Rajkot />} />
          <Route path='/entertinment' element={<Entertinment />} />
          <Route path='/Word' element={<Word />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/Zodiac' element={<Zodiac />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Lifestyle' element={<Lifestyle />} />
          <Route path='/Video' element={<Video/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Jamnagar' element={<Jamnagar/>}/>
          <Route path='/Ahemdabad' element={<Ahemdabad/>}/>
          <Route path='/Surat' element={<Surat/>}/>
          <Route path='/Mygujrat' element={<Mygujrat/>}/>
          <Route path='/Dharmadarshan' element={<Dharmadarshan/>}/>
          <Route path='/Corona' element={<Corona/>}/>
          <Route path='/Bhavnagar' element={<Bhavnagar/>}/>
          <Route path='/Automobile' element={<Automobile/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>

        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Main heading1="Migrants can go home; more curbs to be eased after May 4" subheading="Standard Workers Can Move Inter State Via Road " subheading1="Orange, Green area to see 'Considerable Relstion'" heading2=" Sample pending for tests in city up 7 times in 1 mth"
          heading3="Uddhav dials Modi" heading03="for help" heading4="Fbd curbss stop even covid-19 govt lab staffer" heading5="Arogya setu 'OK' must for centeral govt staffer" heading6="Mom newbors die as 5 hosps refuse to attend" heading7="Fresh Univ Session " heading8= " From Sept Pending " heading9="exams in july: UGC" heading10="A 3500 km Drive from" heading11="camel to take body to kind" heading12=" A 3500 km Drive from" heading13="camel to take body to kin" heading14="32 deaths in 1 day a record for maha; Delhi gets 125 new cases" heading15="Bhopal gas victims covid toll rises to 12" heading16="Irrfan, mighty heart & wrrior for great cinema, finds peace" heading17=" A 3500 km Drive from " heading18="camel to take body to kin"
          des=""/>} />
        </Routes> 
      </BrowserRouter>

    </>

  );
}

export default App;
