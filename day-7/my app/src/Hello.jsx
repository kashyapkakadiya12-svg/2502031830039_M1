// function Hello() {

//     function getname() {
//         return "yahubaba";
//     }

//     function handleclick() {
//         alert("click me");
//     }
// const handleinput= (event) =>{
//     console.clear();
//     console.log("VALUE:",event.target.value);
// }
//     return (
//         <>
//             <h2>Hello {getname()}</h2>

//             <button onClick={handleclick}>
//                 click me
//             </button>

//             <button onClick={() => alert("hy i am inside")}>
//                 click me1
//             </button>
//             <br/>
//             <input type="text" onChange={handleinput}placeholder="typesomething"/>

//         </>
//     );
// }

// export default Hello;
// function hello(){
//     const isloggedin = true;
//     let message;
//     if(isloggedin){
//         return <h2> welcome back , yahubaba </h2>

//     }else{
//         return <h2>pelase log in  to continue</h2>
//     }
//     return<div>(isloggedin ?)<h1>welcomeback yahubaba</h1>:<h2>please log in to continue</h2></div>
// }
// export default hello;
// function Hello(props) {
  function Hello(props) {
  return (
    <h2>Hello {props.name}</h2>
  );
}

export default Hello;