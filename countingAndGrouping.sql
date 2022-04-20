/*  SQL  */
SELECT race, COUNT(*)
FROM demographics
GROUP BY race
ORDER BY race
