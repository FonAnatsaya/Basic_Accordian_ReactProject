import "./Accordian.css";

type Data = {
  id: string;
  question: string;
  answer: string;
};

type AccordianProp = {
  data: Data[];
};

const Accordian: React.FC<AccordianProp> = ({ data }) => {
  return (
    <div className="Accordian ">
      <div className="Accordian__box">
        <h2>Accordian</h2>
      </div>
      <div className="Accordian__cards">
        {data.map((each) => {
          return (
            <div className="Accordian__box" key={each.id}>
              <div className="Accordian__cards__question">
                <h3>{each.question}</h3>
                <button>+</button>
              </div>
              <p>{each.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
