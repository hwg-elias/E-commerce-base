# Nest Commerce 💼

"Nest Commerce" is intended to enable the registration of the punch in and punch out of a company. With a simple user registration and login you can add product if with the admin role or buy things that are in your cart. This is a project based in an article named [How to build an ecommerce app with NestJS](https://blog.logrocket.com/how-build-ecommerce-app-nestjs/) and with some ideas and implementation of data and class validation the project came out like this.
It's something small and simple, but it's worth practicing different ideas. (More updates coming soon)

## Technologies 

The project was made with [Typescript](https://www.typescriptlang.org) inside the framework [NestJS](https://nestjs.com) with specific folders for each part of project. The mapping of data and requisitions to database was managed using [Mongoose](https://mongoosejs.com) and the said database was registered in [MongoDB](https://www.mongodb.com). For reasons of organization and aesthetics [Eslint](https://eslint.org) and [Prettier](https://prettier.io).

## Routes 

Route of create user and login with accounts are default at this point, however managed in auth routes. The and product routes are here to create, delete, update or just get it. The cart route is new to link the cart data with an user, that route can keep items and calculate the price of the whole purchase. (More details about how routes work as soon as possible, but at controller files can be reached to get it manualy)

## How to start?

At first, to initialize the project you can use teminal command ```yarn start``` by default, however it does not prevent you from being able to use ```npm``` as well if configured.

The project relies on using secrets and database string connection to configure right is required to change [.env_example]() name to ".env" only and alter the informations inside to yours, then use terminal command ```yarn start:dev``` (Is just an recommendation, feel free to start however you like).

<h2 align='center'>Autor</h2>
<div align='center'>
  Made with ❤️ by <a href="https://github.com/hwg-elias">Gabriel Elias</a>
</div>
