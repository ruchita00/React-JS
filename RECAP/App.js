const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//the most costly operation is dom node needs to manipulate

//{} this object is the place you can give attribute to your tag

//third thing is children we are passing inside

//props are attribute + children which will go inside h1 tag

// React.createElement is just an object

//when we do root root.render the job of root.render is to take the heading object create that h1 tag which browser understand and put that inside the root

//heading is nothing but creating element this element is nothing but normal js object

{
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
}

//nested react structure
// ReactElements(Object)=html(browser understand )

//if u have more than 1 children u can convert into an array

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am and h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am and h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
]);

//this code looks ugly so this is why jsx comes into picture
root.render(parent);
//root.render does it is just putting parent inside root tag

//akshay is here repleace that parent

//what is the root is matter only inside root part consider inside react

//recap
//how we can write small program using html
//how we can write small program using js
//how we can bring react inside code using cdn link
//we wrote some piece of script
//inside app we create element
//react element element is object
//create root is responsible to create a root inside root
//then root.render render() is powerful it is helping us put that object into our page
//create element is object which converted into html then broswer will understand what is html and print on the page
//createElement api takes 3 argment() name of tag, attributes, children
//first children can be normal react element
//if u have multiple children u can pass inside array
//inside html when we do root.render it is getting replaced it up
//if there is something on the top or the bottom of the page u can still used react using root
//react is just library
