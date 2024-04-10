import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"head", className:"mumbai"}, "welcome To Hello world REACTJS");
// console.log("print",heading);
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

// react element - jsx

// const jsxHeading = <h1 id="heading">welcome to reactJS by jsx</h1>
// console.log("jsxHeading",jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

const Title = () => (<h1 id="heading">welcome to reactJS by jsx</h1>)


// Functional Component
//component composition
const number = 12345;
const HeadingComponent = () =>{

    return(
    <div id="container">
        <Title />
        {Title()}
        <Title></Title>
        {number}
        <h1 className="heading">namaste react by react compnent</h1>
    </div>
    )
}
console.log("HeadingComponent", HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)