import Blogs from "./_components/Blogs";
import NavBar from "./_components/NavBar";
import SearchBox from "./_components/SearchBox";

export default function Home() {
  return (
    <>
      <NavBar/>
      <SearchBox/>
      <Blogs/>
    </>
  );
}
