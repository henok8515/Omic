import "./App.css";
import Left_Nav from "./pages/Left_Nav";
import Header from "./pages/Header";
import Left_Content from "./pages/Left_Content";
import Main from "./pages/Main";
function App() {
  return (
    <div className=" overflow-hidden  flex flex-col  justify-center items-center  h-screen w-screen  ">
      <div className="flex h-full w-full rounded-md  bo">
        <Left_Nav />
        <div className="w-full">
          <Header />
          <div className="w-full flex h-full">
            <Left_Content />
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
