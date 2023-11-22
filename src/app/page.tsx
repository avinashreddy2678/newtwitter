import HeaderAndForm from "./Components/HeaderAndForm";
import AllPosts from "./Components/AllPosts";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeaderAndForm label={"Home"} />
      </div>
      <div className="overflow-y-auto scrollbar-hide">
        <AllPosts />
      </div>
    </main>
  );
}
