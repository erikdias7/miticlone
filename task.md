### Passos para Configuração do Prisma

#### Alterar o Schema
1. Abra o arquivo `prisma/schema.prisma`.
2. Adicione os modelos de `Product`, `Preference` e `Payment` conforme os exemplos de JSON abaixo.

#### Modelos a Adicionar no Schema

1. **Product** (necessário fazer seed)
    ```json
    model Product {
      id    String @id
      name  String
      price String
    }
    ```

2. **Preference** (não precisa fazer seed)
    ```json
    model Preference {
      payment           Payment  // Referência para Payment
      status            String
      externalReference String
      merchantOrderId   String
      product           Product  // Referência para Product
    }
    ```

3. **Payment** (não precisa fazer seed)
    ```json
    model Payment {
      id            Int    @id
      liveMode      Boolean
      type          String
      dateCreated   DateTime
      userId        Int
      apiVersion    String
      action        String
      data          Json
    }
    ```

#### Seed dos Dados
1. Pesquisar como fazer seed do Prisma.
2. Criar um seed dos produtos: `individual`, `familia`, etc.
3. Exemplo de seed de produto:
    ```json
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    async function main() {
      await prisma.product.createMany({
        data: [
          { id: '1', name: 'Individual', price: '100.00' },
          { id: '2', name: 'Familia', price: '200.00' },
          // Outros produtos...
        ],
      });
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

#### Instalação da Extensão do Prisma no VSCode
1. Abra o VSCode.
2. Vá até a aba de extensões (`Ctrl+Shift+X`).
3. Procure por "Prisma" e instale a extensão.

#### Executar o Prisma Client
1. Para habilitar o IntelliSense, execute:
    ```sh
    npx prisma generate
    ```

#### Refletir o Schema no Banco de Dados MySQL
1. Para atualizar o banco de dados com o schema do Prisma, execute:
    ```sh
    npx prisma db push
    ```

#### Abrir o Prisma Studio
1. Para abrir o Prisma Studio e visualizar os dados do banco de dados, execute:
    ```sh
    npx prisma studio
    ```

### Objetivo
- Conseguir acessar o Prisma Studio e adicionar `Payment`, `Preference` e `Product`.
- Ver o seed dos produtos no Prisma Studio com os produtos atuais (`individual`, `familia`, etc).

### Extra
- Conseguir ver o seed dos produtos no Prisma Studio com os 3 produtos atuais.

#### Assistir ao Tutorial do Prisma
- Assista ao tutorial do Prisma para mais informações:
  [Tutorial do Prisma](https://www.youtube.com/watch?v=QXxy8Uv1LnQ&t=1219s&ab_channel=ByteGrad)
