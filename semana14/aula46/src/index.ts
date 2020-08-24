import moment from "moment";

moment.locale("pt-br");

type event = {
  nome: string;
  descricao: string;
  inicio: moment.Moment;
  fim: moment.Moment;
};

const dateEvent1: moment.Moment = moment(
  "24 de Junho de 2020 22:00",
  "DD [de] MMMM [de] YYYY HH:mm"
);

const dateEvent2: moment.Moment = moment(
  "26 de Junho de 2020 24:00",
  "DD [de] MMMM [de] YYYY HH:mm"
);

const dateEvent3 = moment(
  "30 de Junho de 2020 às 14:00",
  "DD [de] MMMM [de] YYYY HH:mm"
);

const dateEvent4 = moment(
  "30 de Junho de 2020 às 17:00",
  "DD [de] MMMM [de] YYYY HH:mm"
);

const events: event[] = [
  {
    nome: "live at royal albert hall",
    descricao: "preciso ouvir o disco novo do snarky puppy",
    inicio: dateEvent1,
    fim: dateEvent2,
  },
  {
    nome: "mistborn",
    descricao: "terminar a 3a parte do livro",
    inicio: dateEvent3,
    fim: dateEvent4,
  },
];

function eventDetails(events: event[]): void {
  events.forEach((item: event) => {
    const duracao = item.fim.diff(item.inicio, "hours");
    console.log(duracao);
  });
}

function newEvent(
  nome: string,
  descricao: string,
  inicio: moment.Moment,
  fim: moment.Moment
): any {
  if (nome === "" || descricao === "" || !inicio || !fim) {
    console.log("Evento inválido");
    return;
  }

  const checkDay = inicio.diff(moment(), "days");
  const checkFinish = fim.diff(moment(), "days");

  if (checkDay < 0 || checkFinish < 0) {
    console.log("Datas inválidas");
  }

  const newEvent = {
    nome: nome,
    descricao: descricao,
    inicio: inicio,
    fim: fim,
  };

  events.push(newEvent);

  console.log(events);
  return events;
}

newEvent(
  "acampar",
  "passar oito dias no Sete Passagens",
  moment("20 de setembro de 2020", "DD [de] MMMM [de] YYYY"),
  moment("28 de setembro de 2020", "DD [de] MMMM [de] YYYY")
);

newEvent(
  "criar porco",
  "comprar um casal de porcos pra começar a criação",
  moment("01 de janeiro de 2025", "DD [de] MMMM [de] YYYY"),
  moment("01 de janeiro de 2030", "DD [de] MMMM [de] YYYY")
);

newEvent(
  "andar a cavalo",
  "botar o pangaré pra se exercitar um pouco",
  moment("30 de setembro de 2020", "DD [de] MMMM [de] YYYY"),
  moment("30 de outubro de 2020", "DD [de] MMMM [de] YYYY")
);
