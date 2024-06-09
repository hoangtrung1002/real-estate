import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/constant";
import {
  About,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public";

function App() {
  return (
    <Routes>
      <Route path={PATH.PUBLIC_LAYOUT} element={<PublicLayout />}>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.ABOUT_US} element={<About />} />
        <Route path={PATH.OUR_AGENTS} element={<OurAgents />} />
        <Route path={PATH.PROPERTIES} element={<Properties />} />
        <Route path={PATH.SEARCH} element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
