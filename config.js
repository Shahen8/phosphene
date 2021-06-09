

config = {
  PORT: process.env.PORT || 8080,
  DB_URI:
    "mongodb+srv://user:i6%23.aBCiHGcz5bu@cluster0.r2ag6.mongodb.net/Phosphene?retryWrites=true&w=majority", //Production
  DB_OPTIONS: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  STATIC_FILES: "/phosphene_client/build",
};

module.exports = config
