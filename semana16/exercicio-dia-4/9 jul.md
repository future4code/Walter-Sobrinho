### EXERCICIO 1
#### a.
É uma forma de identificação externa as informações de uma linha em uma tabela, i. e., é o que a identificará para outras tabelas.
#### b.
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id FLOAT,
FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
#### b.
INSERT INTO Ratings VALUES
(
3,
"Um clássico",
8,
3
);
#### c.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_walter_sobrinho_db`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

O workbench não achou um id na tabela de Filmes que se adequasse ao do comando.
#### d.
ALTER TABLE Filmes DROP COLUMN avaliacao
#### e.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_walter_sobrinho_db`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
Como a tabela "Ratings" possui um item que se relaciona com esse filme, o workbench inibe a ação.

### EXERCICIO 2
#### a.
É uma tabela simplesmente relacional: ela serve para ligar as tabelas Filmes e Actor, e o faz por meio das keys de cada um.
#### b.
INSERT INTO MovieCast
VALUES(
1,
"004"
)
#### c.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_walter_sobrinho_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

A chave externa não existe.
#### d.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_walter_sobrinho_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

A tabela MovieCast depende da key dessa tablea para existir.

### EXERCICIO 3
#### a.
É um operador condicional que impõe a condição sob a qual a query deve unir as duas tabelas.
#### b.
SELECT nome, rate FROM Ratings JOIN Filmes ON Filmes.id = Ratings.movie_id;

### EXERCICIO 4
#### a.
SELECT nome, Filmes.id, rate, comment FROM Filmes LEFT JOIN Ratings ON Filmes.id = Ratings.movie_id;
#### b.
SELECT f.id as ID_Filme, f.nome as Titulo_Filme, mc.actor_id FROM Filmes f RIGHT JOIN MovieCast mc ON mc.movie_id = f.id;
#### c.
SELECT AVG(Ratings.rate) as medium_rate, Filmes.nome FROM Filmes LEFT JOIN Ratings ON Filmes.id = Ratings.movie_id GROUP BY Filmes.id;

### EXERCICIO 5
#### a.
Porque há duas tabelas independentes, que não possuem FOREIGN KEYS que precisamos agrupar.
#### b.
SELECT f.id as ID, f.nome as Titulo, a.id as ID_ator, a.name as Nome_Ator FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
#### c.
Ela não dá resultado porque tem uma vírgula no lugar de um ponto.


