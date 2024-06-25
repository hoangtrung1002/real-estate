import { Route, Routes } from "react-router-dom";
import { Modal } from "./components";
import { Toaster } from "./components/ui/toaster";
import {
  About,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public";
import { useAppStore } from "./store/useAppStore";
import { PATH } from "./utils/constant";
import { useUserStore } from "./store/useUserStore";
import { useEffect } from "react";

function App() {
  const showModal = useAppStore((state) => state.isShowModal);
  const { getUserCurrent, token } = useUserStore();

  useEffect(() => {
    getUserCurrent();
  }, [token]);

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
      <Toaster />
    </>
  );
}

export default App;
