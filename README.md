# Namaste React

- Akshay Saini The BEST.

## Talk is cheap - Show me the code

- let's build a food ordering App. And to code let's get rid of previous code and start from scratch again - review commits of what we learned later.

## Laying the Foundation - babel, JSX

```text
let's start from scratch
Some revision info below
create React Element - it's not an html element - Behind the scenes - creates an Object
when we render this element on to the DOM - then it becomes a HTML element
const heading = React.createElement("h1",{id:"heading"},"Hello World from Namaste React!!!")
create Root
const root = ReactDOM.createRoot(document.getElementById("root"));
render h1 tag
root.render(heading);
The above way is s not clean  - syntax is very bad - can we do better on elements - as this is
not developer friendly - to address this facebook developers came up with a new syntax called JSX
JSX - javascript syntax to create react elements
it looks similar to HTML but it's not HTML
Also react is different and JSX is different - JSX is just a syntax sugar for React.createElement
let's create a JSX for h1
const jsxHeading = <h1 id="heading">Hello World from Namaste React!!! using JSX</h1>; - this is not pure js but it is js
jsxHeading is a React Element
jsx is not html inside javascript - it's a html like syntax
From here onwards on we will use JSX to create our React elements not React.createElement.
JSX - transpiled before it reaches to JS Engine on Browser - transpiling is done by parcel
- which is a bundler and it's babel job(Part of parcel) to do transpiling
(JSX - converts into browsers understandable JS code - React.createElement("h1",{id:"heading"},"Hello World from Namaste React!!!"))
- babel is not created by Facebook
- babel is converting jsx to react.createElement
```

- [babel](https://babeljs.io/) a javascript compiler. babel does a lot of transpilation for all types of browser.
  ![alt text](Images/image.png)

- Extensions to Install via VS Code:
  - Prettier
  - Bracket Pair Colorization Toggler
  - Better Comments

- React components

## [Parcel](https://parceljs.org/)

- Created a dev build
- Created a local server
- Also automatically updating the new content on to the browser (HMR - Hot Module Replacement)
- Parcel uses a file watching algorithm written in c++
- Caching - Faster Builds
- Does Image optimization
- Minification of our files - bundle it for production.
- Compress our file - so we can ship smaller versions well.
- Uses consistent hashing.
- Does code splitting
- Does differential bundling (bundles for different browsers .etc - support older browsers)
- Parcel gives beautiful error views - does Diagnostics - Good error handling and suggestions
- Gives a way to host it on https.
- Falling in Love with Parcel - Read ABout it more in docs.
- Tree Shaking - remove unused code for you - it will minification and compression of that part - makes our experience faster.
- Read Docs More - Be curios.
- different build for dev & prod bundles. & faster because it used cache.
- Browsers list - [reference](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) - A powerful tool.
