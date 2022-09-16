import React , {useState} from 'react'

 function Following() {
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

<nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <img src="Logo.png" alt="" />
                 
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div id="searchbox1" className="input-group mb-4">
              <input
                id="input1"
                type="search"
                placeholder="Search here..."
                aria-describedby="button-addon5"
                className="form-control"
              />
              <div className="input-group-append">
                <button id="button-addon5" type="submit" className="btn">
                  {" "}
                  <i className="fa fa-search"> </i>{" "}
                </button>

                <div className="group">
                <a href=''>Following</a>
                <a  href=''>Browse</a>
                </div>
              </div>
            </div>
            <div class="dropdown mr-16 rounded-3xl">
  <div class=" rounded-3xl btn btn-secondary dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span class="material-symbols-outlined">
account_circle
</span>
  </div>
  <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
          </div>
        </nav>

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


<section className="home-section">
<div className="body text-white">
<div className="heading">
    <h1>FOllowing</h1>
</div>
<div className="sub_navbar mt-4 text-[26px] " >
    <ul className='list-none'>
        <button><li className='float-left text-blue-700  underline underline-offset-1'>Overview</li></button>
      <button>   <li className='float-left'>Live</li>
</button>
        <button><li className='float-left'>Videos</li></button>
        <button><li className='float-left'>Hosts</li></button>

        <button><li className='float-left'>Categories</li></button>
       <button> <li className='float-left'>Channels</li></button>
    </ul>
</div>

<div className="su_heading mt-20" >
    <p className='text-[28px]'>Recommended Channels</p>
</div>
</div>


{/* cards start form here */}
<div>
          <div className="holder mx-auto  grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-6">

          <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom 
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum
                </span>
              </div>
            </div>

            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>

            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800 bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
          </div>
        </div>


        <div>
          <div className="holder mx-auto  grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-6">

          <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom 
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum
                </span>
              </div>
            </div>

            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>

            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800 bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
            <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-red-200 relative">
              <img
                className="w-full rounded-t-xl"
                src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                alt
              />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                10:53
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  Pubg Mobile Custom Room (Unlimited)
                </a>
                <a
                  href="https://www.youtube.com/user/sam14319"
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  @dynamo_gaming
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
                </span>
              </div>
            </div>
            {/* each */}
          </div>
        </div>
        
      </section>



</>
  )
};
export default Following;
