const express = require("express");
const db = require("./configs/mognoose");
const router = require("./routes/index");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("./configs/passport-local");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const flashMiddleWare = require("./controllers/flashMiddleWare");
const app = express();
const PORT = 8000;

app.use(express.static("public"));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    name: "userId",
    secret: "blah something",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
    store: new MongoStore({
      mongooseConnection: db,
      autoRemove: "disabled",
    }),
  })
);
app.use(flash());
app.use(flashMiddleWare.setFlash);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUserAuthenticated);
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layout");
app.use("/", router);

app.listen(PORT, () => console.log("server started"));
