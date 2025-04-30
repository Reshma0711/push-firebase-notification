const admin = require("./firebase");

class NotificationService {
  static async sendNotification(deviceToken, title, body) {
    const message = {
      notification: {
        title,
        body,
      },
      token: deviceToken,
    };
    try {
      const response = await admin.messaging().send(message);
      return response;
    } catch (err) {
      console.error("Error Message:", err.message);
      throw new Error(err.message);
    }
  }
}
module.exports = NotificationService;
