import React from 'react'
import Newpost from './components/newpost';
import PostView from './components/post_view';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/new/posts" element={<Newpost/>}/>
      <Route path="/posts/all" element={<PostView/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
