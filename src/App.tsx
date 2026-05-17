import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home";
import { Network } from "./pages/Network";
import { Ecosystem } from "./pages/Ecosystem";
import { Rewards } from "./pages/Rewards";
import { Help } from "./pages/Help";
import { News } from "./pages/News";
import { Wallet } from "./pages/Wallet";
import { About } from "./pages/About";
import { Join } from "./pages/Join";
import { Commerce } from "./pages/Commerce";
import { NotFound } from "./pages/NotFound";
import { SEO } from "./components/SEO";

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="network" element={<Network />} />
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="help" element={<Help />} />
          <Route path="news" element={<News />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="commerce" element={<Commerce />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
