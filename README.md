# Namaste React

- Akshay Saini The BEST.

## Data is the New Oil

Data management is essential in React development. In this episode, we explore how to handle and manipulate data using state, props, and other powerful React techniques.

- Higher order components
- Pure Functions
- Controlled and uncontrolled components
- filter() function and Building Accordion - great learning this commit needs to be revisited.
- React Dev Tools
- Props Drilling
- React context

## Jo Dikhta Hai, Vo Bikta Hai

Visual appeal is crucial, and in this episode, you'll delve into styling your app. You'll learn about different styling approaches, making your app not just functional but visually appealing.

- SCSS, [SaSS](https://sass-lang.com/) - not recommended for prod apps - companies won't use these.
- in uber they [styled-components](https://styled-components.com/)
- Other libraries or frameworks - [materialUI](https://mui.com/material-ui/), [ChakraUI](https://chakra-ui.com/), bootstrap, [ant design](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/) - we use this in our APP - we install it using framework guides - [parcel](https://tailwindcss.com/docs/installation/framework-guides/parcel)
  - `yarn add -D tailwindcss@3 postcss` - [postcss](https://postcss.org/) is a tool for transforming css with js.
- tailwind.config.js - using [v3](https://v3.tailwindcss.com/docs/guides/parcel) - do `npx tailwindcss init` - Created Tailwind CSS config file: tailwind.config.js - after configuring our app using the guide - now we're to use tailwind.
- `yarn add -D autoprefixer` - we recommend that you use Autoprefixer, which is a PostCSS plugin that automatically adds any necessary vendor prefixes based on the browsers you tell it you need to support
- usage of `className` - we're going to put css using className - tailwind gives us that.
- Coding Tailwind CSS

## Optimizing our App

- Performance matters, and in this episode, you'll explore optimization techniques. Discover how to make your app faster, more efficient, and provide a smoother user experience.
- SRP (Single Responsibility principle)
- Custom Hooks
  - The React docs recommend you to use `use` for building a custom hook - it's a good practice. Reader of the code knows it's a custom hook. and the linter's will throw a lot.keep this in mind.
  - // I want to abstract the data fetching logic - custom hook - useRestaurantMenu
  - How you write the code matters - should be clean and modular - `Now the RestaurantMenu.js looks clean`.
  - when writing code - we can give the responsibility of fetching data to a hook. As it also makes it testable and independent and anytime any url changes or something during fetch we can directly go into that hook and test it without bothering whole other component.
  - Now we have fetching data logic into a hook and displaying logic in the main component.
  - Another example: custom hooks
    - Online Offline Feature - Website should know whether the user is online or offline.(we see this in our online chats when our friend is online or offline -away)
      - Suppose if the internet of user us off - we can show something
        - we use [online event listener](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event).
      - Now we can re-use this hook every where as needed. (in header.js)
- Usage of dev console
  - we can simulate turning off internet from browser- dev console.
    - Go to network tab - beside disabled cache checkbox - we have No throttling -> In it ->Presets - offline
- MakeMyTrip Website
  - Indian site and see the bundling of all their files in the Network tab of that website.
- lazy Loading
  - On demand loading - grocery as separate feature to load when we go to that page only.
  - // import Grocery from "./components/Grocery"; - we don't import it here directly
  - // we will import it using lazy loading - dynamic import
  - // upon on-demand loading - when the user clicks on the grocery link - it will be loaded
  - // this will help in reducing the main bundle size - helps in faster loading of the application
  - In dist folder we have new grocery code bundle.js file.
- Suspense Keyword
  - it is a component from react - we use it to wrap our Grocery component.
  - Lets you display a fallback until its children have finished loading.

## Let's Get Classy

In this episode, we introduce class components, expanding your React toolkit. You'll discover a different approach to creating components and how class components complement your React development skills.

- In `About.js` we will explore old way of creating components - class based one's.
- Topics covered:
  - class based components
  - Super(props)
  - this.state and this.setState
  - Life cycle of class based components
    - constructor
    - render
    - componentDidMount
      - use of this? -> it's important to know when creating components inside components -> once the component is mounted successfully - they then make API call -> why we do that because -> in functional - we make API call inside useEffect() -> bcoz we load our component - then basic details shows up(or shimmer UI - show something to user first) - then make api calls - then render the data - similarly we do the same in class based components -> constructor is called - then render basic data -> then make API call using componentDidMount() -> then render the data.
- lifecycle methods:
  - Parent - constructor
  - About.js:14 Parent - render
  - UserClass.js:7 constructor Abhishek(class)
  - UserClass.js:21 render Abhishek(class)
  - UserClass.js:7 constructor Elon Musk(class)
  - UserClass.js:21 render Elon Musk(class)
  - UserClass.js:16 componentDidMount Abhishek(class)
  - UserClass.js:16 componentDidMount Elon Musk(class)
  - About.js:11 Parent - componentDidMount
- Diagram for [reference](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - React has two phases: Render and commit
    - Render - Constructor then render() once the DOM is loaded then componentDidMount(commit phase) is called.
    - once render phase is done for both parent and child components then commit phase happens. if commit phase starts then DOM manipulation happens - which is a long process for react.
- how to make API call in class based components.
  - we will call [github user Api](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user) will call [usingTHis](https://api.github.com/users/USERNAME)

## Finding the Path

Routing can be mysterious, but we'll unravel the secrets in this episode. You'll gain a deep understanding of routes, paths, and how to navigate to different sections of your app with precision.

- [React Router](https://reactrouter.com/) - course V6.4 -> me v7 - `yarn add react-router-dom`
- When building a `web application` with React, `react-router-dom` is the package to use as it provides all the necessary tools for routing in a browser environment. It implicitly includes react-router as a dependency, so you don't need to install both separately.
- For [browser](https://reactrouter.com/start/data/custom)
  - The browser runtime API that enables [route module](https://reactrouter.com/start/data/custom#client-rendering) APIs (loaders, actions, etc.) is `createBrowserRouter`.
  - To render the router in the browser, use `<RouterProvider>`
- Now we want to keep our header intact and change pages below it accordingly.- we use [outlet](https://reactrouter.com/api/components/Outlet#outlet)
- use [Link which is a wrapper to `<a href>`](https://reactrouter.com/api/components/Link#link) to be able to navigate from the client-side.never ever use anchor tag. navigate to new page without reloading the page.
- Dynamic routing & different pages for different restaurants. - useParams()

## Exploring the World

Navigation is essential, and in this episode, we delve into React routing. You'll learn how to navigate seamlessly within your app, creating a smooth and user-friendly experience.

- In here we will see how we can fetch dynamically data from API & populate our page dynamically.
- Add this [Allow CORS extension](https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf?utm_source=item-share-cb) in chrome.
- [Shimmer UI](https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17) instead of spinner or loading... update
- Adding a search functionality.
- add this chrome extension - [JSON Viewer](https://chromewebstore.google.com/detail/aimiinbnnkboelefkjlenlgimcabobli?utm_source=item-share-cb)
- [Cors Proxy](https://corsproxy.io/) helps you to by-pass cors error. [Refer docs](https://corsproxy.io/docs/getting-started)

## Let's Get Hooked

- Let's clean our app a bit from previous lecture as it contains lot of code in `App.js`(Everything into single file - not good practice to keep large files in our app) & then proceed with `React Hooks`
- **Types of Export/Import**
  - Default:
    - export default Component;
    - import Component from "path";
  - Named:
    - export const NAME;
    - import {NAME} from "path";
    - When you want to export multiple things from a file use `Named` exports
  - Note: Yes, it is possible to use both default and named exports within the same file in a React application, as this is a standard JavaScript module feature.
    - Key points:
      - Default Export: A module can only have one default export. It is often used to export the primary component or value from a file. When importing a default export, you can give it any name you choose and do not use curly braces.
      - Named Exports: A module can have multiple named exports. These are used to export specific variables, functions, or components. When importing named exports, you must use curly braces and import them by their exact names (or use an alias).

```js
// MyComponents.js
export const AnotherComponent = () => {
  return <div>Another Component</div>;
};

const MyComponent = () => {
  return <div>Hello World</div>;
};

export default MyComponent;

// App.js
import MyComponent, { AnotherComponent } from './MyComponents';

function App() {
  return (
    <div>
      <MyComponent />
      <AnotherComponent />
    </div>
  );
}

export default App;

```

- React Hooks:

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
