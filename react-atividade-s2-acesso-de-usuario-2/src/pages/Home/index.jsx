import { Link } from "react-router-dom";
const Home = ({ members }) => {
  return (
    <div className="names">
      {members.map((member, id) => {
        if (member.type === "pj") {
          return (
            <Link key={id} to={`/company/${member.id}`}>
              {member.name}
            </Link>
          );
        } else {
          return (
            <Link key={id} to={`/costumer/${member.id}`}>
              {member.name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Home;
