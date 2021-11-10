import { useParams, Link } from "react-router-dom";
import { members } from "../../components/users/users";

const Costumer = () => {
  const { id } = useParams();
  const person = members.find((member) => member.id === id);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {person.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Costumer;
