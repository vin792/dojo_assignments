-- 1. countries which speak slovene and % in country who speak slovene
select countries.name, languages.percentage
from languages 
join countries on countries.id = languages.country_id
where languages.language like 'slovene%' 
order by languages.percentage desc;

-- 2. number of cities per country
select countries.name, count(cities.id)
from cities 
join countries on countries.id = cities.country_id
group by cities.country_id
order by 2 desc;

-- 3. all cities in Mexico with population > 500,000
select countries.name, cities.name, cities.population
from cities 
join countries on countries.id = cities.country_id
where countries.name like "mexico%"
and cities.population > 500000
order by cities.population desc;

-- 4. all languages in each country with a % > than 89
select countries.name, languages.language, languages.percentage 
from languages
join countries on countries.id = languages.country_id
where languages.percentage >= .89
order by languages.percentage desc;

-- 5. all countries with surface area < 501 and population > 100000
select countries.name, countries.surface_area, countries.population 
from countries 
where countries.surface_area <= 501
and countries.population > 100000;

-- 6. countries with constitutional monarchy, capital greater than 200, life expectancy > 75
select countries.name, countries.government_form, countries.capital, countries.life_expectancy
from countries 
where countries.government_form like "constitutional%monarchy" 
and countries.capital >= 200
and countries.life_expectancy >= 75

-- 7. all argentina cities inside of buenos aires district, population > 500,000 
select countries.name, cities.name, cities.district, cities.population
from cities 
join countries on countries.id = cities.country_id
where cities.district like "buenos%aires"
and cities.population > 500000
and countries.name like "argentina%"

-- 8. number of countries in each region
select countries.region, count(countries.id)
from countries 
group by countries.region
order by 2 desc
