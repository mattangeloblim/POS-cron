const express = require("express");
const router = express.Router();
const getDB = require("../connection/mysqlDB");
const cron = require("node-cron");

// Function to update the status of time slots for date today
const updateStatus = () => {
  const db = getDB();
  const currentTime = new Date();
  console.log(currentTime);
  currentTime.setSeconds(currentTime.getSeconds() + 360);

  const adjustedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: false,
  });
  console.log(adjustedTime);

  db.query("SELECT * FROM Time_slots", (err, results) => {
    if (err) {
      console.error("Error retrieving time slots:", err);
      return;
    }

    for (const timeSlot of results) {
      if (timeSlot.available_time <= adjustedTime) {
        // Time slot has passed; set status to 0
        db.query("UPDATE Time_slots SET status = 0 WHERE id = ?", [
          timeSlot.id,
        ]);
      } else {
        // Time slot is still in the future; set status to 1
        db.query("UPDATE Time_slots SET status = 1 WHERE id = ?", [
          timeSlot.id,
        ]);
      }
    }

    console.log("Status updated successfully");
  });
};

cron.schedule("1 * * * * *", () => {
  updateStatus();
  console.log("Schedule Refresh");
});

module.exports = router;
