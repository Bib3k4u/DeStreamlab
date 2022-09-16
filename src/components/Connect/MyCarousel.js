import React, { Component } from "react";
// import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        // marginTop:"-1vh",
        marginBottom: "-10vh",
        height: "80vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
      };
    }

    static get CARD_STYLE() {
      return {
        height: "450px",
        width: "900px",

        textAlign: "center",
        background: "#52C0F5",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box",
      };
    }

    render() {
      return (
        <>
         

          

          <section className="home-section">
            <div style={MyCarousel.CONTAINER_STYLE}>
              <ReactCardCarousel
                spread={"wide"}
                autoplay={true}
                autoplay_speed={3000}
              >
                <div style={MyCarousel.CARD_STYLE}>
                  <iframe
                    className="rounded-xl"
                    width="900"
                    height="450"
                    src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div style={MyCarousel.CARD_STYLE}>
                  <iframe
                    className="rounded-xl"
                    width="900"
                    height="450"
                    src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div style={MyCarousel.CARD_STYLE}>
                  <iframe
                    className="rounded-xl"
                    width="900"
                    height="450"
                    src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div style={MyCarousel.CARD_STYLE}>
                  <iframe
                    className="rounded-xl"
                    width="900"
                    height="450"
                    src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div style={MyCarousel.CARD_STYLE}>
                  <iframe
                    className="rounded-xl"
                    width="900"
                    height="450"
                    src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
              </ReactCardCarousel>
            </div>

            <div>
              <div className="make">
                <hr id="first" />
                <hr id="second" />
              </div>
              <h3 id="heading">Live Channels</h3>
            </div>

            <div>
              <div className="  holder mx-auto  grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-6">
                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>

                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>

                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>
                {/* each */}
                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>
                {/* each */}
                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>
                {/* each */}
                <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                    alt
                  />
                  <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                  <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">
                      105 Watching
                    </span>
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
                      className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                    >
                      Pubg Mobile Custom
                    </a>
                    <a
                      href="https://www.youtube.com/user/sam14319"
                      target="_new"
                      className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                    >
                      @dynamo_gaming
                    </a>
                    <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                      lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem
                      ipsum bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum
                      bekhum bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum
                      bukhum lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      lorem ipsum bekhum bukhum
                    </span>
                  </div>
                </div>
                {/* each */}
              </div>
            </div>

            {/* categories starts here...   */}

            <div>
              <div className="make">
                <hr id="first" />
                <hr id="second" />
              </div>
              <h3 id="heading">Categories We think You'll Like...</h3>
            </div>

            <div>
              <div className="holder mx-auto  w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                <div className="each-2 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                  <i>
                    <img
                      className="w-full h-full"
                      src="https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg"
                      alt
                    />
                  </i>
                </div>

                <div className="each-2 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                  <i>
                    <img
                      className="w-full h-full"
                      src="https://wallpaperaccess.com/full/6163537.jpg"
                      alt
                    />
                  </i>
                </div>

                <div className="each-2 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                  <i>
                    <img
                      className="w-full h-full"
                      src="https://picfiles.alphacoders.com/145/thumb-145318.jpg"
                      alt
                    />
                  </i>
                </div>

                <div className="each-2 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                  <i>
                    <img
                      className="w-full h-full"
                      src="https://m.media-amazon.com/images/M/MV5BOTlhMTdiY2YtOTI3My00Y2M5LWI5YWQtYzgyYzgzMzhlMzExXkEyXkFqcGdeQXVyMzM2MzI5MzU@._V1_FMjpg_UX1000_.jpg"
                      alt
                    />
                  </i>
                </div>

                <div className="each-2 mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                  <i>
                    <img
                      className="w-full h-full"
                      src="https://i.pinimg.com/736x/46/4e/4f/464e4f16cf97af5a72af9b951b164f30.jpg"
                      alt
                    />
                  </i>
                </div>
              </div>
            </div>

            <div
              className="menuitems justify-evenly"
              style={{ color: "rgb(108,93,211)" }}
            >
              <a href="#" className="btn btn-primary buttons">
                Games
              </a>
              <a href="#" className="btn btn-primary buttons">
                IRL
              </a>
              <a href="#" className="btn btn-primary buttons">
                Esports
              </a>
              <a href="#" className="btn btn-primary buttons">
                Music
              </a>
              <a href="#" className="btn btn-primary buttons">
                Creative
              </a>
            </div>

            <div>
              <div className="make">
                <hr id="first" />
                <hr id="second" />
              </div>
              <h3 id="heading">More Videos</h3>
            </div>

            <div>
              <div>
                <div className="  holder mx-auto  grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-6">
                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>

                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>

                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>
                  {/* each */}
                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>
                  {/* each */}
                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>
                  {/* each */}
                  <div className="each rounded-xl mb-10 m-2 shadow-lg border-gray-800  bg-gray-600 relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
                      alt
                    />
                    <div className="badge absolute top-0 right-21 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                      Live
                    </div>
                    <div className="info-box text-lg flex p-1 font-semibold text-black bg-gray-300">
                      <span className="mr-1 p-1 px-2 font-bold">
                        105 Watching
                      </span>
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
                        className="text-white text-2xl title font-bold block cursor-pointer hover:underline"
                      >
                        Pubg Mobile Custom
                      </a>
                      <a
                        href="https://www.youtube.com/user/sam14319"
                        target="_new"
                        className="badge bg-indigo-200 text-black rounded px-1 text-3xl font-bold cursor-pointer"
                      >
                        @dynamo_gaming
                      </a>
                      <span className="description text-lg text-white block py-2 border-gray-400 mb-2">
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                        lorem ipsum bekhum bukhum lorem ipsum bekhum bukhum
                      </span>
                    </div>
                  </div>
                  {/* each */}
                </div>
              </div>
            </div>

            <div className="footer">
              <p>
                Join Destreamlabs! Discover the best live streams anywhere.{" "}
                <a href="#" id="cardbutton2" className="btn btn-primary">
                  Login/Signup
                </a>{" "}
              </p>
            </div>
          </section>
        </>
      );
    }
  }

  export default MyCarousel;