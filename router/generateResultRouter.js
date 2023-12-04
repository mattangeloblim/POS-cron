const cron = require('node-cron');
const axios = require('axios');
const express = require("express");
const router = express.Router();


// Replace the URL with your server URL and port
// const URL = 'http://52.77.237.55/api/mega2/auto/generate-result?game_name=Mega%202%20Ball';
// const URLMEGA3 = 'http://52.77.237.55/api/mega3/auto/generate-result?game_name=Mega 3 Ball';

// // const timeSlots = []
// const timeSlots = [
//     '00:01:00', '00:04:00', '00:07:00', '00:10:00', '00:13:00', '00:16:00', '00:19:00', '00:22:00', '00:25:00', '00:28:00',
//     '00:31:00', '00:34:00', '00:37:00', '00:40:00', '00:43:00', '00:46:00', '00:49:00', '00:52:00', '00:55:00', '00:58:00',
//     '01:01:00', '01:04:00', '01:07:00', '01:10:00', '01:13:00', '01:16:00', '01:19:00', '01:22:00', '01:25:00', '01:28:00',
//     '01:31:00', '01:34:00', '01:37:00', '01:40:00', '01:43:00', '01:46:00', '01:49:00', '01:52:00', '01:55:00', '01:58:00',
//     '02:01:00', '02:04:00', '02:07:00', '02:10:00', '02:13:00', '02:16:00', '02:19:00', '02:22:00', '02:25:00', '02:28:00',
//     '02:31:00', '02:34:00', '02:37:00', '02:40:00', '02:43:00', '02:46:00', '02:49:00', '02:52:00', '02:55:00', '02:58:00',
//     '03:01:00', '03:04:00', '03:07:00', '03:10:00', '03:13:00', '03:16:00', '03:19:00', '03:22:00', '03:25:00', '03:28:00',
//     '03:31:00', '03:34:00', '03:37:00', '03:40:00', '03:43:00', '03:46:00', '03:49:00', '03:52:00', '03:55:00', '03:58:00',
//     '04:01:00', '04:04:00', '04:07:00', '04:10:00', '04:13:00', '04:16:00', '04:19:00', '04:22:00', '04:25:00', '04:28:00',
//     '04:31:00', '04:34:00', '04:37:00', '04:40:00', '04:43:00', '04:46:00', '04:49:00', '04:52:00', '04:55:00', '04:58:00',
//     '05:01:00', '05:04:00', '05:07:00', '05:10:00', '05:13:00', '05:16:00', '05:19:00', '05:22:00', '05:25:00', '05:28:00',
//     '05:31:00', '05:34:00', '05:37:00', '05:40:00', '05:43:00', '05:46:00', '05:49:00', '05:52:00', '05:55:00', '05:58:00',
//     '06:01:00', '06:04:00', '06:07:00', '06:10:00', '06:13:00', '06:16:00', '06:19:00', '06:22:00', '06:25:00', '06:28:00',
//     '06:31:00', '06:34:00', '06:37:00', '06:40:00', '06:43:00', '06:46:00', '06:49:00', '06:52:00', '06:55:00', '06:58:00',
//     '07:01:00', '07:04:00', '07:07:00', '07:10:00', '07:13:00', '07:16:00', '07:19:00', '07:22:00', '07:25:00', '07:28:00',
//     '07:31:00', '07:34:00', '07:37:00', '07:40:00', '07:43:00', '07:46:00', '07:49:00', '07:52:00', '07:55:00', '07:58:00',
//     '08:01:00', '08:04:00', '08:07:00', '08:10:00', '08:13:00', '08:16:00', '08:19:00', '08:22:00', '08:25:00', '08:28:00',
//     '08:31:00', '08:34:00', '08:37:00', '08:40:00', '08:43:00', '08:46:00', '08:49:00', '08:52:00', '08:55:00', '08:58:00',
//     '09:01:00', '09:04:00', '09:07:00', '09:10:00', '09:13:00', '09:16:00', '09:19:00', '09:22:00', '09:25:00', '09:28:00',
//     '09:31:00', '09:34:00', '09:37:00', '09:40:00', '09:43:00', '09:46:00', '09:49:00', '09:52:00', '09:55:00', '09:58:00',
//     '10:01:00', '10:04:00', '10:07:00', '10:10:00', '10:13:00', '10:16:00', '10:19:00', '10:22:00', '10:25:00', '10:28:00',
//     '10:31:00', '10:34:00', '10:37:00', '10:40:00', '10:43:00', '10:46:00', '10:49:00', '10:52:00', '10:55:00', '10:58:00',
//     '11:01:00', '11:04:00', '11:07:00', '11:10:00', '11:13:00', '11:16:00', '11:19:00', '11:22:00', '11:25:00', '11:28:00',
//     '11:31:00', '11:34:00', '11:37:00', '11:40:00', '11:43:00', '11:46:00', '11:49:00', '11:52:00', '11:55:00', '11:58:00',
//     '12:01:00', '12:04:00', '12:07:00', '12:10:00', '12:13:00', '12:16:00', '12:19:00', '12:22:00', '12:25:00', '12:28:00',
//     '12:31:00', '12:34:00', '12:37:00', '12:40:00', '12:43:00', '12:46:00', '12:49:00', '12:52:00', '12:55:00', '12:58:00',
//     '13:01:00', '13:04:00', '13:07:00', '13:10:00', '13:13:00', '13:16:00', '13:19:00', '13:22:00', '13:25:00', '13:28:00',
//     '13:31:00', '13:34:00', '13:37:00', '13:40:00', '13:43:00', '13:46:00', '13:49:00', '13:52:00', '13:55:00', '13:58:00',
//     '14:01:00', '14:04:00', '14:07:00', '14:10:00', '14:13:00', '14:16:00', '14:19:00', '14:22:00', '14:25:00', '14:28:00',
//     '14:31:00', '14:34:00', '14:37:00', '14:40:00', '14:43:00', '14:46:00', '14:49:00', '14:52:00', '14:55:00', '14:58:00',
//     '15:01:00', '15:04:00', '15:07:00', '15:10:00', '15:13:00', '15:16:00', '15:19:00', '15:22:00', '15:25:00', '15:28:00',
//     '15:31:00', '15:34:00', '15:37:00', '15:40:00', '15:43:00', '15:46:00', '15:49:00', '15:52:00', '15:55:00', '15:58:00',
//     '16:01:00', '16:04:00', '16:07:00', '16:10:00', '16:13:00', '16:16:00', '16:19:00', '16:22:00', '16:25:00', '16:28:00',
//     '16:31:00', '16:34:00', '16:37:00', '16:40:00', '16:43:00', '16:46:00', '16:49:00', '16:52:00', '16:55:00', '16:58:00',
//     '17:01:00', '17:04:00', '17:07:00', '17:10:00', '17:13:00', '17:16:00', '17:19:00', '17:22:00', '17:25:00', '17:28:00',
//     '17:31:00', '17:34:00', '17:37:00', '17:40:00', '17:43:00', '17:46:00', '17:49:00', '17:52:00', '17:55:00', '17:58:00',
//     '18:01:00', '18:04:00', '18:07:00', '18:10:00', '18:13:00', '18:16:00', '18:19:00', '18:22:00', '18:25:00', '18:28:00',
//     '18:31:00', '18:34:00', '18:37:00', '18:40:00', '18:43:00', '18:46:00', '18:49:00', '18:52:00', '18:55:00', '18:58:00',
//     '19:01:00', '19:04:00', '19:07:00', '19:10:00', '19:13:00', '19:16:00', '19:19:00', '19:22:00', '19:25:00', '19:28:00',
//     '19:31:00', '19:34:00', '19:37:00', '19:40:00', '19:43:00', '19:46:00', '19:49:00', '19:52:00', '19:55:00', '19:58:00', 
//     '20:01:00', '20:04:00', '20:07:00', '20:10:00', '20:13:00', '20:16:00',
//     '20:19:00', '20:22:00', '20:25:00', '20:28:00', '20:31:00', '20:34:00', '20:37:00', '20:40:00', '20:43:00', '20:46:00',
//     '20:49:00', '20:52:00', '20:55:00', '20:58:00', '21:01:00', '21:04:00', '21:07:00', '21:10:00', '21:13:00', '21:16:00',
//     '21:19:00', '21:22:00', '21:25:00', '21:28:00', '21:31:00', '21:34:00', '21:37:00', '21:40:00', '21:43:00', '21:46:00',
//     '21:49:00', '21:52:00', '21:55:00', '21:58:00', '22:01:00', '22:04:00', '22:07:00', '22:10:00', '22:13:00', '22:16:00',
//     '22:19:00', '22:22:00', '22:25:00', '22:28:00', '22:31:00', '22:34:00', '22:37:00', '22:40:00', '22:43:00', '22:46:00',
//     '22:49:00', '22:52:00', '22:55:00', '22:58:00', '23:01:00', '23:04:00', '23:07:00', '23:10:00', '23:13:00', '23:16:00',
//     '23:19:00', '23:22:00', '23:25:00', '23:28:00', '23:31:00', '23:34:00', '23:37:00', '23:40:00', '23:43:00', '23:46:00',
//     '23:49:00', '23:52:00', '23:55:00', '23:58:00']

//     timeSlots.forEach(time => {
//     const [hour, minute] = time.split(':');
//     cron.schedule(`${minute} ${hour} * * *`, async () => {
//         try {
//             const response = await axios.get(URL);
//             console.log(`Job ran successfully at ${new Date().toISOString()}`);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error running cron job:', error.message);
//         }
//     }, {
//         scheduled: true,
//         timezone: 'Asia/Manila', // Set Asia/Manila timezone
//     });
// });

// const mega3TimeSlots = [];

// for (let hour = 0; hour < 24; hour++) {
//     for (let minute = 2; minute < 60; minute += 3) {
//         const formattedHour = hour.toString().padStart(2, '0');
//         const formattedMinute = minute.toString().padStart(2, '0');
//         const time = `${formattedHour}:${formattedMinute}:00`;
//         mega3TimeSlots.push(time);
//     }
// }

// // console.log(mega3TimeSlots)

// mega3TimeSlots.forEach(time => {
//     const [hour, minute] = time.split(':');
//     cron.schedule(`${minute} ${hour} * * *`, async () => {
//         try {
//             const response = await axios.get(URLMEGA3);
//             console.log(`Job ran successfully at ${new Date().toISOString()}`);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error running cron job:', error.message);
//         }
//     }, {
//         scheduled: true,
//         timezone: 'Asia/Manila', // Set Asia/Manila timezone
//     });
// });


module.exports = router