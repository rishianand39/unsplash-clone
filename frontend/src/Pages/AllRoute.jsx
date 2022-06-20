import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import Currentevents from "./Currentevents";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Wallpapers from "./Wallpapers"
import Threedrenders from "./Threedrenders"
import Textures from "./Textures"
import Experimental from "./Experimental"
import Architecture from "./Architecture"
import Nature from "./Nature"
import Bussiness from "./Bussiness"
import Fashion from "./Fashion"
import Film from "./Film"
import Food from "./Food"
import Health from "./Health"
import People from "./People"
import Interiors from "./Interiors"
import Street from "./Street"
import Travel from "./Travel"
import Animals from "./Animals"
import Spiritual from "./Spiritual"
import NotFound from "./NotFound"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category" >
        <Route index element={<CategoryPage />}/>
        <Route path="currentevents" element={<Currentevents />}/>
        <Route path="editorial" element={<Fashion />}/>
        <Route path="wallpapers" element={<Wallpapers />}/>
        <Route path="3drenders" element={<Threedrenders />}/>
        <Route path="textures" element={<Textures />}/>
        <Route path="experimental" element={<Experimental />}/>
        <Route path="architecture" element={<Architecture />}/>
        <Route path="nature" element={<Nature />}/>
        <Route path="bussiness" element={<Bussiness />}/>
        <Route path="fashion" element={<Fashion />}/>
        <Route path="film" element={<Film />}/>
        <Route path="food" element={<Food />} />
        <Route path="health" element={<Health />} />
        <Route path="people" element={<People />} />
        <Route path="interiors" element={<Interiors />} />
        <Route path="street" element={<Street />} />
        <Route path="travel" element={<Travel />} />
        <Route path="animals" element={<Animals />} />
        <Route path="spiritual" element={<Spiritual />} />
        <Route path="*" element={<NotFound />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
