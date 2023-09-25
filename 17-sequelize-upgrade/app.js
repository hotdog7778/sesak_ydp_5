const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes');
const { sequelize } = require('./models');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Swagger 정의 옵션 설정
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // 또는 '2.0' 사용 가능
    info: {
      title: 'API 문서',
      version: '1.0.0',
      description: 'API 문서를 위한 Swagger',
    },
  },
  // API 파일 경로 설정 (자신의 애플리케이션 경로에 맞게 설정)
  apis: ['./routes/*.js'], // 예시: './routes/*.js'
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection succeeded!');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
