update test_people
set name = $1, hobby = $2, image = $3
where id = $4;
select * from test_people;