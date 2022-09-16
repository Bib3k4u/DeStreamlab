import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

function Cards() {
  class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        // marginTop:"60px",
        marginBottom:"-10vh",
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
        height: "350px",
        width: "650px",
        
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
                <iframe className="rounded-xl"
                  width="650"
                  height="355"
                  src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>{" "}
              </div>
            <div style={MyCarousel.CARD_STYLE}><iframe className="rounded-xl"
                  width="650"
                  height="355"
                  src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>{" "}
            </div>
            <div style={MyCarousel.CARD_STYLE}><iframe className="rounded-xl"
                  width="650"
                  height="355"
                  src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>{" "}</div>
            <div style={MyCarousel.CARD_STYLE}><iframe className="rounded-xl"
                  width="650"
                  height="355"
                  src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>{" "}</div>
            <div style={MyCarousel.CARD_STYLE}><iframe className="rounded-xl"
                  width="650"
                  height="355"
                  src="https://www.youtube.com/embed/ojlZ8fLEG7g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>{" "}</div>
          </ReactCardCarousel>
        </div>
        </section>



        </>
        
      );
    }
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<MyCarousel />, rootElement);
}

export default Cards;