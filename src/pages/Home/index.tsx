import AddButton from "../../components/AddButton";
import SideBar from "../../containers/SideBar";
import ToDos from "../../containers/ToDos";

const Home = () => {
  return (
    <>
      <SideBar />
      <ToDos />
      <AddButton />
    </>
  );
};

export default Home;
