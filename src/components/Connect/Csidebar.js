import React from 'react'

function Csidebar() {
  function menuBtnChange() {
    if(sidebar.classList.contains("open")){
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
      closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
   }
   let sidebar = document.querySelector(".sidebar");
   let closeBtn = document.querySelector("#btn");
   let searchBtn = document.querySelector(".bx-search");
 
  //  closeBtn.addEventListener("click", ()=>{
  //    sidebar.classList.toggle("open");
  //    menuBtnChange();//calling the function(optional)
  //  });


   const open =()=>{
    let sidebar = document.querySelector(".sidebar");
   let closeBtn = document.querySelector("#btn");
   let searchBtn = document.querySelector(".bx-search");
   sidebar.classList.toggle("open");
     menuBtnChange();
   }
  return (
   <>



   
   <div className="sidebar">
  <div className="logo-details">
    <div className="logo_name">Dahboard</div>
    <button onClick={open}><i className="bx bx-menu" id="btn" /></button>  
  </div>
  <ul className="nav-list rounded-full">
    <li>
      <a href="#">
        <span className="material-symbols-outlined " style={{marginLeft: 10}}>
          trending_up
        </span>
        <span className="links_name">Trending</span>
      </a>
      <span className="tooltip">Trending</span>
    </li>
    <li>
      <a href="#">
        <span className="material-symbols-outlined" style={{marginLeft: 10}}>
          videocam
        </span>
        <span className="links_name">Recommended Channels</span>
      </a>
      <span className="tooltip">Recommended Channels</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo " src="https://i.pinimg.com/736x/4b/f3/1c/4bf31c2d5b4429d571d8bf72f5c822bd.jpg" alt />
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo" src="https://i.pinimg.com/736x/4b/f3/1c/4bf31c2d5b4429d571d8bf72f5c822bd.jpg" alt />
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi_off
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo" src="https://i.pinimg.com/736x/4b/f3/1c/4bf31c2d5b4429d571d8bf72f5c822bd.jpg"/>
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo" src="https://i.pinimg.com/736x/4b/f3/1c/4bf31c2d5b4429d571d8bf72f5c822bd.jpg" alt />
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi_off
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo" src="https://i.pinimg.com/736x/4b/f3/1c/4bf31c2d5b4429d571d8bf72f5c822bd.jpg" alt />
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>
    <li>
      <a href="#">
        <span> <img className="sidelogo" src="https://toppng.com/uploads/preview/free-gaming-logo-11562900303nvorjmidfn.png" alt />
        </span>
        <span className="links_name" style={{color: 'rgb(155, 138, 138)'}}>Carry
          <span className="material-symbols-outlined" style={{marginLeft : 35, fontSize: 18}}>
            wifi_off
          </span>
        </span>
      </a>
      <span className="tooltip">Carry</span>
    </li>   
  </ul>
</div>

   
   
   
   </>
  )
}


export default Csidebar;