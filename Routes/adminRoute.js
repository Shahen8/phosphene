import adminBro from "admin-bro";
import adminBroExpress from "@admin-bro/express";
import mongoose from "mongoose";
import adminBroMongoose from "admin-bro-mongoose";

adminBro.registerAdapter(adminBroMongoose);

const adminApp = new adminBro({
  databases: [mongoose],
  rootPath: "/admin",
  branding: {
    companyName: "Phosphene",
  },
});

const adminRouter = adminBroExpress.buildAuthenticatedRouter(adminApp, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "phosphene-admin-page-user-name",
  cookiePassword:
    process.env.ADMIN_COOKIE_PASSWORD || "phosphene-admin-page-password",
  authenticate: async (userName, password) => {
    let adminData = await mongoose.connection.db.collection("admin").findOne();
    const ADMIN = {
      adminUNAME: process.env.ADMIN_COOKIE_NAME || adminData.adminUNAME,
      adminPASS: process.env.ADMIN_COOKIE_PASSWORD || adminData.userPASS,
    };
    console.log();
    if (userName === ADMIN.adminUNAME && password === ADMIN.adminPASS) {
      return ADMIN;
    }
    return null;
  },
});
export default adminRouter;
