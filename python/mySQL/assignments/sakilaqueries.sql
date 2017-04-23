-- 1. all customers inside city_id = 312

select customer.first_name, customer.last_name, customer.email, address.address
from customer 
join address on address.address_id = customer.address_id
join city on city.city_id = address.city_id
where city.city_id = 312;

-- 2. all comedy films

select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
from film 
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where category.name like "%comedy%"

-- 3. all films of actor_id = 5

select actor.actor_id, concat(actor.first_name," ",actor.last_name), film.title, film.description, film.release_year
from film_actor
join film on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where film_actor.actor_id = 5;

-- 4. all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)

select customer.first_name, customer.last_name, customer.email, address.address
from customer 
join address on address.address_id = customer.address_id
where customer.store_id = 1
and address.city_id in (1,42, 312, 459)

-- 5. all the films with a "rating = G" and "special feature = behind the scenes", joined by actor_id = 15

select film.title, film.description, film.release_year, film.rating, film.special_features
from film_actor
join film on film.film_id = film_actor.film_id
where film_actor.actor_id = 15
and film.rating = "G"
and film.special_features like "%behind%the%scenes%";

-- 6. get all the actors that joined in the film_id = 369

select film.film_id, film.title, actor.actor_id, concat(actor.first_name," ", actor.last_name)
from film 
join film_actor on film_actor.film_id = film.film_id
join actor on actor.actor_id = film_actor.actor_id
where film.film_id = 369;

-- 7. all drama films with a rental rate of 2.99

select film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film_category 
join category on category.category_id = film_category.category_id
join film on film.film_id = film_category.film_id
where film.rental_rate = 2.99
and category.name like "drama";

-- 8. all the action films which are joined by SANDRA KILMER

select film.title, film.description, film.release_year, film.rating, film.special_features, category.name, actor.first_name, actor.last_name
from film_category
join film on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id 
join film_actor on film_actor.film_id = film.film_id 
join actor on actor.actor_id = film_actor.actor_id 
where actor.first_name like "sandra"
and actor.last_name like "kilmer"
and category.name like "action"

