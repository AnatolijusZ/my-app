import Letter from "./Letter";

function Field({letters}) {
    console.log(letters);
    return ( <>

      <div className="field">
          {letters.map(l => console.log(l))}
          {letters.map((l, i) => (<Letter key={i} letter={l}></Letter>))}
      </div>
       
    </>);
}
    export default Field;