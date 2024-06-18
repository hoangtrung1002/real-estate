import { Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public";
import { PATH } from "./utils/constant";
import { useAppStore } from "./store/useAppStore";
import { Modal } from "./components";

function App() {
  const showModal = useAppStore((state) => state.isShowModal);
  return (
    <>
      {showModal && <Modal />}
      <Routes>
        <Route path={PATH.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ABOUT_US} element={<About />} />
          <Route path={PATH.OUR_AGENTS} element={<OurAgents />} />
          <Route path={PATH.PROPERTIES} element={<Properties />} />
          <Route path={PATH.SEARCH} element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
