 CREATE TABLE "cakes" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL UNIQUE,
	"price" numeric NOT NULL,
	"image" varchar NOT NULL UNIQUE,
	"description" TEXT
);


CREATE TABLE "clients" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"address" varchar NOT NULL,
	"phone" varchar NOT NULL
);


CREATE TABLE "orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" timestamp NOT NULL,
	"totalPrice" numeric NOT NULL
);