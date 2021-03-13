DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  price integer NOT NULL,
  img varchar(2000),
  PRIMARY KEY (ID)  
  );
CREATE TABLE forms (
  user_id int NOT NULL AUTO_INCREMENT,
  firstname varchar(15) NOT NULL,
  lastname varchar(15) NOT NULL,
  email varchar(20) NOT NULL,
  password varchar(35) NOT NULL,

  PRIMARY KEY (user_id)
);
INSERT INTO items (name, price , img ) VALUES ('Lenovo', 2200, 'https://images-na.ssl-images-amazon.com/images/I/71STJx7tHpL._AC_SL1500_.jpg');
INSERT INTO items (name, price , img ) VALUES ('Mackbook', 2999, 'https://rentyourmac.com/wp-content/uploads/2018/11/macbook-pro-13-retina-a.jpg');
INSERT INTO items (name, price , img ) VALUES ('Oldcar', 7000, 'https://ccnwordpress.blob.core.windows.net/journal/2017/11/32chryslimpdwphaeton.jpg');
INSERT INTO items (name, price , img ) VALUES ('scooter', 3450, 'https://i.pinimg.com/originals/7a/fc/a8/7afca84abdfc233b03a447b36fdaf207.jpg');
INSERT INTO items (name, price , img ) VALUES ('Electric Scooter', 999, 'https://www.funbikes.co.uk/upload/temp/53edb2be-37fc-4109-b027-379b3df04f46_pad_600x600.jpg');
INSERT INTO items (name, price , img ) VALUES ('Pixa Cage', 23, 'https://static.zoomalia.com/prod_img/33381/it_6945487315b1286f907165907aa8fc966191481124852.jpg');
INSERT INTO items (name, price , img ) VALUES ('Iphone 12', 1299, 'https://www.phonefinity.net/wp-content/uploads/iphone-12-black.jpg');
INSERT INTO items (name, price , img ) VALUES ('Galaxy S20', 1100, 'https://images-na.ssl-images-amazon.com/images/I/71Nq1XZzu2L._AC_SX569_.jpg');
INSERT INTO items (name, price , img ) VALUES ('washing machine', 450, 'https://www.fridgeandwashercity.com.au/media/catalog/product/cache/4/thumbnail/640x480/9df78eab33525d08d6e5fb8d27136e95/w/a/washer_wv91409b_01_med.jpg');
INSERT INTO items (name, price , img ) VALUES ('LG washing machine', 530, 'https://images-na.ssl-images-amazon.com/images/I/81wrCLgvmuL._SY741_.jpg');
INSERT INTO items (name, price , img ) VALUES ('Smart TV SAMSUNG', 1050, 'https://img.global.news.samsung.com/global/wp-content/uploads/2019/01/Samsung-TV_iTunes-Movies-and-TV-shows_main.jpg');
INSERT INTO items (name, price , img ) VALUES ('TV', 600, 'https://img.freepik.com/vecteurs-libre/fond-ecran-du-modele-television_1412-18.jpg?size=338&ext=jpg');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
