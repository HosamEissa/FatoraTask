# Fatora Task

This is a task for Fatora company

The task is a simple CRUD opeation for a given Schema and making an endpoint to apply a certain query


used modules :
<br>
1-"nodemon":"2.0.4"
<br>
2-"express": "^4.17.1"
<br>
3-"mysql2": "^2.1.0"
<br>
4-"sequelize": "^6.3.4"<br>
5-"sequelize-cli"

node version  is v12.16.1


examples for the end points calling :<br>
Get :localhost:3000/api/categories ----> get all categories<br>
Post :localhost:3000/api/categories ----> create Category  //needs body<br>
Get :localhost:3000/api/categories/1 ----> get category whose id = 1 <br>
Put :localhost:3000/api/categories/1 ----> update category whose id = 1 //needs body<br>
Del :localhost:3000/api/categories/1 ----> delete category whose id = 1<br>


Get :localhost:3000/api/products ----> get all products <br>
Post :localhost:3000/api/products ----> create Product  //needs body<br>
Get :localhost:3000/api/products/1 ----> get Product whose id = 1 <br>
Put :localhost:3000/api/products/1 ----> update Product whose id = 1 //needs body<br>
Del :localhost:3000/api/products/1 ----> delete Product whose id = 1<br>


Get :localhost:3000/api/providers ----> get all providers<br>
Post :localhost:3000/api/providers ----> create Provider  //needs body<br>
Post :localhost:3000/api/providers/addProduct/3 ----> add record in ProductProvider table whos providerId = 3   //needs body<br>
Get :localhost:3000/api/providers/1 ----> get Provider whose id = 1 <br>
Put :localhost:3000/api/providers/1 ----> update Provider whose id = 1 //needs body<br>
Del :localhost:3000/api/providers/1 ----> delete Provider whose id = 1<br>

//Task EndPoints
Get : localhost:3000/api/tasks/categoryProducts/1----> get Products for Category whose id = 1<br>
Get : localhost:3000/api/tasks/categoryProducts/1?limit=2&page=2---->(Pagging applied) get Products for Category whose id = 1 gets only 2 products in the second page<br>
Put : localhost:3000/api/tasks/featureproduct/1 ----> Change Product whose id =1 feature state //needs body<br>


To run the database migration and seeds using sequelize-cli<br>
1 - sequelize db:migrate<br>
2 - sequelize db:seed:all
