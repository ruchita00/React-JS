// import React from "react";
// import ReactDOM from "react-dom";

// // React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "hello react");
// //JSX (transpiled before it reaches the js) - parcel-babel
// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     Namaste React
//   </h1>
// );
// console.log(jsxHeading);

// //React Component
// //Class based component - old way of writing code
// //functional component - new way of writing code

// const Title = () => {
//   return <h1 className="head">Namaste React using jsx</h1>;
// };

// const elem = <span>React Element</span>;

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <Title />
//       <h1 className="heading">Namaste react function component</h1>
//       {elem}
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// console.log();

// header
//   logo
//  nav items
// Body
//  search
//
//resto conatainer
//resto card
//footer
//copyright
//links
//address
//contact



import React from "react";
import ReactDOM from "react-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";



const AppLayout = () => {
  return (
    <div class="app">
      {" "}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
