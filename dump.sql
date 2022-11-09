CREATE TABLE "matches" (
	"id" serial NOT NULL,
	"team1" varchar(50) NOT NULL,
	"team2" varchar(50) NOT NULL,
	"status" BOOLEAN NOT NULL DEFAULT 'TRUE',
	CONSTRAINT "matches_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bets" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"match_id" integer NOT NULL,
	"team1_score" integer NOT NULL,
	"team2_score" integer NOT NULL,
	"status" BOOLEAN,
	"cancelled" BOOLEAN NOT NULL DEFAULT 'FALSE',
	CONSTRAINT "bets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "bets" ADD CONSTRAINT "bets_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "bets" ADD CONSTRAINT "bets_fk1" FOREIGN KEY ("match_id") REFERENCES "matches"("id");





