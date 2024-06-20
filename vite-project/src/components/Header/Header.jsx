import { ContainerH } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ContainerH>
      <Link to="/">Home</Link>
    </ContainerH>
  );
}
