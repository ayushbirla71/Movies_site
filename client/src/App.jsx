import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about us/About";
import Footer from "./components/footer/Footer";
import MobileHeader from "./components/header/MobileHeader";
import SearchPage from "./pages/search/SearchPage";
import MoviesList from "./pages/movies/MoviesList";
import ViewPage from "./pages/ViewPages/ViewPage";
import ScrollToTop from './components/reUseComponents/pathScroll/ScrollToTop';
import MovieDetails from "./pages/movieDetails/MovieDetails";
import MyPage from "./pages/myPage/MyPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Header />
        <MobileHeader />
        <div className="h-full sm:pl-24 pt-12 sm:pt-1 px-1">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/viewAll" element={<ViewPage />} />
            <Route path="/movieInfo/:id" element={<MovieDetails />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
