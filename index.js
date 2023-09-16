// react writing with js only
// const heading = document.createElement("h2");
// heading.textContent = "hellow world";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log("javaScript element : ",heading);

//react with js updated version
// const heading = React.createElement("h1",{className:"head",id:"reactHead",children:"helloworld!"});
// ReactDOM.createRoot(document.getElementById("root")).render(heading);


// react with jsx= javascript xml (html) here the browser will not understand the jsx directly we need to convert it to js via BABEL
// const jsxheading =<React.Fragment> 
//                     <h1>hello world jsx</h1>
//                     <p>write a code:</p>
//                         </React.Fragment>
// ReactDOM.createRoot(document.getElementById("root")).render(jsxheading);

// USING div we will have multiple wrapper different div using react.fragment we can wrapp all the things in one div that is parent div
// we can also leave empty which ic also a fragment <> </> and for mul line we need to write under parent 
// we can have only one parent and mul childern

//exercise
// const practice = <React.Fragment>
//     <h1>About React</h1>
//     <li>it uses vDOM</li>
//     <li> it uses both html and js whic is jsx </li>
//     <li>developer friendly</li>
// </React.Fragment>
// ReactDOM.createRoot(document.getElementById("root")).render(practice);

