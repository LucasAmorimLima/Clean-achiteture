export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/cleancode?retryWrites=true&w=majority',
  port: process.env.PORT || 3333,
  jwtSecret: process.env.JWT_SECRET || 'JWT_SECRET'
}
