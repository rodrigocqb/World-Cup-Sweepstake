--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bets (
    id integer NOT NULL,
    user_id integer NOT NULL,
    match_id integer NOT NULL,
    team1_score integer NOT NULL,
    team2_score integer NOT NULL,
    status boolean,
    cancelled boolean DEFAULT false NOT NULL
);


--
-- Name: bets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bets_id_seq OWNED BY public.bets.id;


--
-- Name: matches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matches (
    id integer NOT NULL,
    team1 character varying(50) NOT NULL,
    team2 character varying(50) NOT NULL,
    status boolean DEFAULT true NOT NULL
);


--
-- Name: matches_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.matches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: matches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.matches_id_seq OWNED BY public.matches.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets ALTER COLUMN id SET DEFAULT nextval('public.bets_id_seq'::regclass);


--
-- Name: matches id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches ALTER COLUMN id SET DEFAULT nextval('public.matches_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: bets; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.bets VALUES (2, 4, 1, 1, 2, NULL, true);
INSERT INTO public.bets VALUES (1, 1, 1, 1, 2, true, false);
INSERT INTO public.bets VALUES (5, 4, 1, 2, 2, true, false);
INSERT INTO public.bets VALUES (6, 4, 1, 2, 2, true, false);
INSERT INTO public.bets VALUES (7, 4, 4, 1, 1, NULL, false);
INSERT INTO public.bets VALUES (8, 3, 4, 1, 1, NULL, false);
INSERT INTO public.bets VALUES (9, 1, 4, 1, 2, NULL, false);
INSERT INTO public.bets VALUES (10, 4, 5, 1, 1, true, false);
INSERT INTO public.bets VALUES (11, 3, 5, 1, 1, true, false);
INSERT INTO public.bets VALUES (12, 1, 5, 1, 2, true, false);
INSERT INTO public.bets VALUES (3, 4, 2, 1, 1, false, false);


--
-- Data for Name: matches; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.matches VALUES (3, 'England', 'Iran', true);
INSERT INTO public.matches VALUES (1, 'Qatar', 'Ecuador', false);
INSERT INTO public.matches VALUES (4, 'USA', 'Wales', false);
INSERT INTO public.matches VALUES (5, 'Argentina', 'Saudi Arabia', false);
INSERT INTO public.matches VALUES (2, 'Senegal', 'Netherlands', false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Gersin');
INSERT INTO public.users VALUES (3, 'Rodrigo');
INSERT INTO public.users VALUES (4, 'Gersada');
INSERT INTO public.users VALUES (5, 'Gersadones');


--
-- Name: bets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.bets_id_seq', 12, true);


--
-- Name: matches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.matches_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: bets bets_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_pk PRIMARY KEY (id);


--
-- Name: matches matches_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pk PRIMARY KEY (id);


--
-- Name: users users_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: bets bets_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: bets bets_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_fk1 FOREIGN KEY (match_id) REFERENCES public.matches(id);


--
-- PostgreSQL database dump complete
--

