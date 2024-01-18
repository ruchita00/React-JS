// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

const heading = React.createElement("h1", { id: "heading" }, "hello react");
// heading.innerHTML = "hello react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>i am h1 tag</h2>
  </div>
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>i am h1 tag</h2>
  </div>
</div>; */

const parent = React.createElement("parent", { id: "parent" }, [
  React.createElement(
    "child",
    { id: "child" },
    React.createElement("h1", {}, "i am h1 tag")
  ),
  React.createElement("child2", { id: "child2" }, [
    React.createElement("h1", {}, "i am h2 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

root.render(parent);
