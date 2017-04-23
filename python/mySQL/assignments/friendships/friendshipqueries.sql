-- Insert users into users table
INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES ("Chris", "Baker", NOW(), NOW());
INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES ("Diana", "Smith", NOW(), NOW());
INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES ("James", "Johnson", NOW(), NOW());
INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES ("Jessica", "Davidson", NOW(), NOW());

-- Insert user relationships into friendships table
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (1, 4, NOW(), NOW());
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (1, 3, NOW(), NOW());
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (1, 2, NOW(), NOW());
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (4, 1, NOW(), NOW());
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (3, 1, NOW(), NOW());
INSERT INTO friendships (user_id, friend_id, created_at, updated_at) VALUES (2, 1, NOW(), NOW());

-- Friendships between users
select users.first_name, users.last_name, users2.first_name as friend_first_name, users2.last_name as friend_last_name
from users
left join friendships on friendships.user_id = users.id
left join users as users2 on users2.id = friendships.friend_id
order by users2.last_name desc