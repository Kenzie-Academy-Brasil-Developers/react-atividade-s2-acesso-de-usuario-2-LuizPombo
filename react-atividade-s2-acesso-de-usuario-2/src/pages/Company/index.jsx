import { useParams, Link } from "react-router-dom";
import { members } from "../../components/users/users";

const Company = () => {
  const { id } = useParams();
  const company = members.find((member) => member.id === id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {company.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
