"use client";
import HeaderAndForm from "./Components/HeaderAndForm";
import AllPosts from "./Components/AllPosts";

const Home = () => {
  return (
    <main className="">
      <div>
        <HeaderAndForm label={"Home"} />
      </div>
      <div className="overflow-y-auto scrollbar-hide">
        <AllPosts />
      </div>
    </main>
  )
}

export default Home;
