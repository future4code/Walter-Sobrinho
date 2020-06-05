import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { useForm } from "./functions";
import Mary from "./icons/mary.svg";
import Fire from "./icons/fire.svg";
import axios from "axios";

function App() {
  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-walter-andrade";

  const { form, onChange, resetForm } = useForm({
    dia: "",
    text: [],
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    updateTasks();
  }, [tasks]);

  const formActivity = (e) => {
    const { value, name } = e.target;
    onChange(name, value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const body = {
      dia: form.dia,
      texto: form.text,
    };
    await axios.post(baseUrl, body).catch((err) => {
      window.alert("Ocorreu um erro durante a criação da sua tarefa");
    });

    resetForm();
  };

  const updateTasks = () => {
    const response = axios
      .get(baseUrl)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });

    return response.data;
  };

  const deleteTask = (id) => {
    axios.delete(`${baseUrl}/${id}`);
  };
  return (
    <div className="App">
      <header>
        <h1>
          <img src={Mary} alt="cannabis icon" height="50px" /> stoned -- but
          never unmindful
        </h1>
        <p>oh, wait, I forgot the uppercase</p>
      </header>
      <div className="form-container">
        <form onSubmit={formSubmit}>
          <textarea
            name="text"
            placeholder="digite uma nova tarefa, mas não esqueça de reservar as 16:20h"
            value={form.name}
            onChange={formActivity}
            maxlengt="240"
            required
          />
          <select
            name="dia"
            onChange={formActivity}
            data-testid="select-days"
            required
          >
            <option value="">Selecione</option>
            <option value="segunda-feira">segunda-feira</option>
            <option value="terça-feira">terça-feira</option>
            <option value="quarta-feira">quarta-feira</option>
            <option value="quinta-feira">quinta-feira</option>
            <option value="sexta-feira">sexta-feira</option>
            <option value="sábado">sábado</option>
            <option value="domingo">domingo</option>
          </select>
          <button type="submit">Pronto!</button>
        </form>
      </div>
      <main>
        <section className="day" data-testid="div-segunda">
          <h2>segunda-feira</h2>
          {tasks
            .filter((task) => task.dia === "segunda-feira")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day">
          <h2>terça-feira</h2>
          {tasks
            .filter((task) => task.dia === "terça-feira")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day" data-testid="div-quarta">
          <h2>quarta-feira</h2>
          {tasks
            .filter((task) => task.dia === "quarta-feira")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day">
          <h2>quinta-feira</h2>
          {tasks
            .filter((task) => task.dia === "quinta-feira")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day">
          <h2>sexta-feira</h2>
          {tasks
            .filter((task) => task.dia === "sexta-feira")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day">
          <h2>sábado</h2>
          {tasks
            .filter((task) => task.dia === "sábado")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
        <section className="day">
          <h2>domingo</h2>
          {tasks
            .filter((task) => task.dia === "domingo")
            .map((diaFiltrado) => (
              <div className="task-container" key={diaFiltrado.id}>
                <li>{diaFiltrado.texto}</li>
                <button onClick={() => deleteTask(diaFiltrado.id)}>
                  <img src={Fire} alt="delete activity" height="30px" />
                </button>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
