import React from "react";
import "./App.css";
import Card from "@bit/jakeprins.react-milkshake.card";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "Developer",
    },
    {
      img: 34,
      name: "job",
      job: "designer",
    },
    {
      img: 56,
      name: "peter",
      job: "artist",
    },
  ];
  return (
    <section>
      <Person person={people[0]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a eleifend
        velit, et hendrerit libero.
      </Person>
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};
const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const Url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={Url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
      <Card
        image="https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg"
        title="Card"
        text="Default card style"
      />
    </div>
  );
};

export default App;
