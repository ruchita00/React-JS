# part3 

This command put inside script in package.json
   "start":"parcel index.html",
    "build":"parcel build index.html"

after adding this command u can use npm start and build project you run npm run build

No need to used npx parcel index.html

# part2 

React.createElement is created a object.
when we render on this on dom then it becomes a html element that we see on the webpage

# part3

JSX:
JSX is js syntax which is easiar to create react element
react is different 
jsx is different
jsx is not part react
jsx is not html inside js
jsx is different than html

jsx is html like syntaxn it look like xml, html

we used to write a markup inside html and logic is written inside logic so react is try to merge html js.
jsx is convention merge html js together

whatever the code we have return till now it transpile(converted to the code that browser can understand) and transpiling is done by parcel and parcel give transpiling responsibility to babel before it goto js engine 
js received the code which browser can understand 

parcel is manager 
babel is js complier or transpiler 
babel basically takes ur jsx and convert it into code that browser will understand


if you have to given attribute in jsx you have to use camelcase
//explore various attribute and tags

if your jsx in single it is valid syntax
if your writing jsx multiple line then you have to wrapped inside () or mandatory to used this ()

babel transpils it into react.createElement

# part4

//React Component
//Class based component - old way of writing code
//functional component - new way of writing code

Function Component:

function component is a normal js function which return some jsx
function which return jsx code
js function which element react elemet

const HeadingComponent=()=>{
    return <h1>Namaste react function component</h1>

}

what is component composition?
composing 2 component into each other

put component inside component

# part5

inside jsx you can write any piece of js code inside{}

jsx take care of injection attacks
its prevent cross side scrpting