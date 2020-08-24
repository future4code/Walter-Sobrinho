### EXERCICIO 1
#### a.
Remove a coluna salário
#### b.
Mudaria o nome da coluna para "sex" e permitiria um máximo de 6 caracteres pra ela.
#### c.
Retorna a mudança feita no item anterior para que a coluna se chamge "gender" e possa possuir 255 caracteres.
#### d.
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### EXERCICIO 2
#### a.
UPDATE Actor
SET birth_date CURDATE()
WHERE id = 003;
#### b.
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = UPCASE("JULIANA PAES");

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
#### c.
UPDATE Actor
SET name = "Vin" 
SET birth_date = "1000/05/23"
SET salary = 300000
SET gender = female
WHERE id = 005
#### d.
UPDATE Actor
SET name = Kelsier
WHERE id = "mistborn"

A operação foi bem sucedida, mas nenhuma linha foi afetada por ela.
### EXERCICIO 3
#### a.
DELETE FROM Actor WHERE name = "Fernanda Montenegro
#### b.
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

### EXERCICIO 4
#### a.
SELECT MAX(salary) FROM Actors
#### b.
SELECT MIN(salary FROM Actor WHERE gender = "female";
#### c.
SELECT COUNT(*) FROM Actor WHERE gender = "female";
#### d.
SELECT SUM(salary) FROM Actor;

### EXERCICIO 5
#### a.
A query me retorna o resultado da busca: me informa que há duas pessoas de cada sexo na tabela.
#### b.
SELECT id, name FROM Actor ORDER BY name DESC;
#### c.
SELECT (*) FROM Actor ODER BY salary ASC;
#### d.
SELECT name FROM Actor ORDER BY salary DESC LIMIT 3;
#### e.
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### EXERCICIO 6
#### a.
ALTER TABLE Filmes ADD playing_limit_date DATE; 
#### b.
ALTER TABLE Filmes
CHANGE avaliacao avaliacao FLOAT;
#### c.
UPDATE Filmes
SET playing_limit_date = "2021-01-01"
WHERE id = 1;

UPDATE Filmes
SET playing_limit_date = "1989-01-01"
WHERE id = 4;
#### d.
DELETE FROM Filmes WHERE id = 2;
A operação aconteceu, mas nenhuma linha foi afetada.

### EXERCICIO 7
#### a.
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
#### b.
SELECT AVG(avaliacao) FROM Filmes;
#### c.
SELECT COUNT(*) FROM Filmes;
#### d.
SELECT COUNT(*) FROM Filmes WHERE lancamento > CURDATE();
#### e.
SELECT MAX(avaliacao) FROM Filmes;
#### f.
SELECT MIN(avaliacao) FROM Filmes;

### EXERCICIO 8
#### a.
SELECT *, nome FROM Filmes ORDER BY nome ASC;
#### b.
SELECT *, nome FROM Filmes ORDER BY nome ASC LIMIT 5;
#### c.
SELECT nome, lancamento FROM Filmes ORDER BY lancamento DESC LIMIT 3;
#### d.
SELECT *, nome, avaliacao FROM Filmes ORDER BY avaliacao DESC LIMIT 3;