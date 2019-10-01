Criar os Models e Migrations e depois atualizar o banco de dados

```
yarn sequelize model:create --name user --attributes name:string,email:string,password_hash:string
yarn sequelize model:create --name venda --attributes user_id:integer,produto_id:integer
yarn sequelize model:create --name produto --attributes name:string,valor:integer
yarn sequelize db:migrate
```
