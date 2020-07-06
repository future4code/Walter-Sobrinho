### EXERCICIO 1

#### a)
VARCHAR: tipifica o elemento como string.
(255): define a quantidade máxima de caracteres que a string pode ter.
NOT:  altera o elemento seguinte, negando ele.
NULL: tipifica um elemento como vazio.
DATE: tipifica o elemento como de data, no formado YYYY/MM/DD.
PRIMARY KEY: define esse elemento como elemento primário de identificação.

#### b)
SHOW DATABASES: informa que há duas bases de dados disponíveis: information_schema e julian_walter_sobrinho_db

SHOW TABLES: informa que há uma tabela criada, de nome Actor.

#### c)
Aparece um erro de sintaxe incorreta.

### EXERCÍCIO 2

##### a)
ocorre um erro, porque alguns valores dispostos no INSERT não foram passados aqui.

#### b)
ocorre o mesmo erro do exercício anterior.

##### c)
"O numero de valores da coluna não está correto"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#### d)
"O campo 'name' não possui um valor padrão"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

##### e) 
"Valor de data incorreto"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

#### f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Chico Anysio",
  100,
  "1931-04-12", 
  "male"
);

### EXERCICIO 3

#### a)
SELECT * from Actor WHERE gender = "female"

#### b)
SELECT salary from Actor WHERE name = "Tony Ramos"

#### c)
SELECT * from Actor WHERE gender = "invalid"
A busca foi um sucesso, mas não retornou nada, porque nenhum ator foi registrado com esse gênero.

#### d)
SELECT name, id, salary from Actor WHERE salary > 500

#### e)
O erro indica que não existe uma coluna "nome"

SELECT id, name from Actor WHERE id = "002"

### EXERCICIO 4

#### a)
Executa uma busca por todos os nomes que começam com A ou J e simultaneamente possuem um salário maios que 300 mil.

#### b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

#### c)

SELECT * FROM Actor
WHERE (name LIKE "%G%"OR "%g%") AND salary > 350000

#### e)
SELECT * FROM Actor
WHERE ((name LIKE "%G%"OR "%g%") OR (name LIKE "%a%"OR "%A%")) AND salary BETWEEN 350000 AND 900000

### EXERCICIO 5
#### a)
CREATE TABLE Filmes (
id FLOAT PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
sinopse VARCHAR (255) NOT NULL,
lancamento DATE NOT NULL,
avaliacao FLOAT NOT NULL
);

#### b)
INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
001,
"Se Eu Fosse Você",
"Claudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
);

#### c)
INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
10
);

#### d)
INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"ona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

#### e)
INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
VALUES(
004,
"O Padre e a Moça",
"Num garimpo, um jovem padre e uma moça se apaixonam. O amor duplamente proibido (pela religião do padre e pelo comprometimento da moça) poderá vingar?",
"1966-03-28",
10
);

### EXERCICIO 6
#### a)
SELECT id, nome, avaliacao FROM Filmes WHERE id = x;

#### b)
SELECT * FROM Filmes WHERE nome = "x"

#### c)
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7

### EXERCICIO 7
#### a)
SELECT * FROM Filmes WHERE nome = "%vida%"
#### b)
SELECT * FROM Filmes WHERE nome LIKE "%a%" OR sinopse LIKE "%a%";
#### c) 
SELECT * FROM Filmes WHERE lancamento < "2020-07-06";
#### d)
SELECT * FROM Filmes WHERE (nome LIKE "%a%" OR sinopse LIKE "%a%") AND avaliacao > 7



