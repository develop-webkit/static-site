const rootEl = document.querySelector("#root");
const listUl = (<ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>);
              
// const reactRoot = ReactDOM.createRoot(rootEl);

reactRoot.render(listUl)

console.log(listUl)
ReactDOM.render(
    listUl, 
    rootEl          
);

