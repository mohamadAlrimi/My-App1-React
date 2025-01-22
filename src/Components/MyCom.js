 export default function MyCom() {
    let x ="muhammed elrimi here ";
    // const elmStyle = {
    //     backgroundColor : "green",
    //     fontSize: "20px",
    //     cursor: " pointer"
    // }
    return (
      <>
        <h1 style={{
        backgroundColor : "green",
        fontSize: "20px",
        
    }}> {x} hello muhammed click on the button pleas</h1>
        <img
          src="https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-114337435-1500x1000.jpg"
          alt="logo"
        ></img>
        <br />
        <button style={{
        backgroundColor : "green",
        fontSize: "20px",
        cursor: " pointer"
    } } onClick={sayHello}>click me here </button>
        <br />
        <button>write anything </button>
      </>
    );
  }
  function sayHello(){
    
       alert("hello")
   
  }