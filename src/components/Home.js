
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import MyCarousel from "./MyCarousel";

function Home() {
  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
  }
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  //  closeBtn.addEventListener("click", ()=>{
  //    sidebar.classList.toggle("open");
  //    menuBtnChange();//calling the function(optional)
  //  });

  const open = () => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");
    sidebar.classList.toggle("open");
    menuBtnChange();
  };

  return (
    <>
      <Topnav />
      <Sidenav/>
      <MyCarousel/>
    </>
  );
}

export default Home;
