const NotificationService = require("../utils/NotificationService");

const sendFirebaseNotification = async (req, res) => {
    try {
        const { title, body, deviceToken } = req.body;

        console.log("FCM Token received:", deviceToken); // 🔍 log for debugging

        if (!deviceToken) {
            return res.status(400).json({
                success: false,
                message: "No device token provided"
            });
        }

        await NotificationService.sendNotification(deviceToken, title, body);

        return res.status(200).json({
            success: true,
            message: "Notification sent successfully"
        });
    } catch (err) {
        console.error("Send Notification Error:", err);
        return res.status(500).json({
            success: false,
            message: "Error Sending Notification",
            error: err.message
        });
    }
};

module.exports=sendFirebaseNotification