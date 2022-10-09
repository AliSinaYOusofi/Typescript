// dummy function with a should be either a number or a string with default values for a , b
function Navbar(a: string | number = "0", b: string | number = "1", optional? : number | string | number[]): NextPage {
  return (
    <div>
      <ul>
        <li> Next-1 </li>
        <li> Next-1 </li>
        <li> Next-1 </li>
        <li> Next-1 </li>
        <li> {a} </li>
        <li> {b} </li>
      </ul>
    </div>
  );
}

function resetLengthTyped(...a : number [] | string [] | boolean []) {
    return a[0].length;
}

function overLoading(a : string, b : string) : string;
function overLoading(a : number, b : number) : number;
function overLoading(a : number, b: number, c?:number) : number;
function overLoading(a: number, b: number, c?: number, ...rest: number[]) : number {
    return c ? a + b + c : a + b;
}