CREATE TABLE posts (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	description text NOT NULL,
	CONSTRAINT posts_pkey PRIMARY KEY (id)
);