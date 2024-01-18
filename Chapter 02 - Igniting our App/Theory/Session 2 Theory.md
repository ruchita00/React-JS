npm init 
package.json is configuration for npm

webpack, parcel,vite those are bundlers, it package your app properly and shift to production

create-react-app is using webpack and babel behind the seen.

parcel is come as node package
npm install -D parcel

npm is package manager
pacel is beats 

npm is statndard repo for all the packages

What is caret and tilde is?
if we have out this caret in our app suppose if we have put this caret parcel will automatically upgrade this version, it will installed minior versiona automatically
if we have tilde it will installed major version automatically

What is package.lock.json?
it is configuration of npm it keeps track of version of package and (keep record of it) install in our version.

package.lock.json is keep a track of all the exact version 

webpack, parcel, vite is budlers
it is budle our app it shift to production

create react app behind the seen using webpack, babel 

parcel:
2 type of dependencies
dev dependency - it is generally required for developement phase.
normal dependency - it is used for prouduction

# Node module:
it contains all the code that we fetch from npm
it is basically db 
it fetch all the code of all the dependency in our system
our need parcel
parcel as project have its own dependency those dependency have there own dependecncy
size of node module is huge

question:should i put this node module to git 
ans: no, you should put inside gitignore

should ip put my package.json and package.lock.json on git
yes , because all the depedency required for project to run is inside this files 
if you have packagejson and package.lock.json you can recreate all your node modules

what is transitive dependency?
parcel as project has own dependency and those dependency can have there own dependency  this is transitive dependency.
thats why parcel installed alot of libraries

How npm know parcel have dependency?
Every depedency has own package.json and it has its own dependencies


Now BUILDING OUR APP USING PARCEL
to use this command for building app using parcel - npx parcel index.html
just like we have npm  similarly we have npx
npm - just calling command (installed package)
npx - executing package

now installed after that we no need cdn
npm i react
npm i react-dom 

<!-- <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.development.js"
      ></script>
      <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      ></script> -->
      <!-- injecting react to our project  -->
      <!-- <script>
        const heading = React.createElement("h1", {}, "Hello world from React");

        const root = ReactDOM.createRoot(document.getElementById("root")); //this is how we create root inside react
        root.render(heading);

        // createElement takes 3 arg what tage u want to create, 3rd place whatever we need to put inside element
        // after that we need to create root to perform every dom mainpulation
      </script> -->
    </div>

    <!-- <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World from JS";
      const root = document.getElementById("root");
      root.appendChild(heading);
    </script> -->



<!-- document ,innerhtml is having superpower which broswer give us -->

<!-- cdn is a place where react library hosted  -->



# Parcel
- Dev Build
- Local server (host your app to local)
- HMR (Hot Module replacement) (Automatically refreshing page when you save this file)
- Caching - Faster Builds
- File Watching Algorithm -written on C++
- Image Optimization
- if we create a production build it will (Minification)
- Budling
- Compress the file
- code splitting 
- differential bundling - support older browsers
- Tree shaking - remove unused code for u
- Error Handling
- HTTPS
- Diagostic
- Different dev and prod bundles

//prod build
npx parcel build index.html
before running this command in package.json remove main:app.js line

//make compatiable for older broswer
include this inside package.json
"browserslist":[
    "Last 2 Chrome version",
    "Last 2 Firefox version"
  ]