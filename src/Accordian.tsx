import "./Accordian.css";

export type Data = {
  id: string;
  question: string;
  answer: string;
  isToggled: boolean;
};

type AccordianProp = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const Accordian: React.FC<AccordianProp> = ({ data, setData }) => {
  const handleToggle = (card: Data) => {
    setData((prev: Data[]) => {
      return prev.map((item: Data) => {
        return item.id === card.id
          ? { ...item, isToggled: !item.isToggled }
          : item;
      });
    });
  };

  return (
    <div className="Accordian ">
      <div className="Accordian__box">
        <h2>Accordian</h2>
      </div>
      <div className="Accordian__cards">
        {data.map((eachCard) => {
          return (
            <div className="Accordian__box" key={eachCard.id}>
              <div className="Accordian__cards__question">
                <h3>{eachCard.question}</h3>
                <button onClick={() => handleToggle(eachCard)}>
                  {eachCard.isToggled ? "-" : "+"}
                </button>
              </div>
              <p style={{ display: eachCard.isToggled ? "block" : "none" }}>
                {eachCard.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
