import { Link } from "react-router-dom";

export default function Index(){
  return (
    <>
      <h2>1주차 강의</h2>
      <ul>        
        <li>
          <Link to="useState">useState</Link>
        </li>
        <li>
          <Link to="useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="useRef">useRef</Link>
        </li>
      </ul>
    </>
  )
}