function arraysAreEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }
  
  function arraysAreEqualIgnoringOrder(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  
    const sortedArray1 = array1.slice().sort();
    const sortedArray2 = array2.slice().sort();
  
    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] !== sortedArray2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    return `${hours}:${minutes}:${seconds}`;
  }

  function calculateGameID(game_name, date, time) {
    if (game_name === "Mega 2 Ball") {
      const startDate = new Date("2023-09-07T00:01:00");
      const currentDate = new Date(`${date}T${time}`);
      const timeDiffInMinutes = Math.floor(
        (currentDate - startDate) / (60 * 1000)
      );
      const id = timeDiffInMinutes / 3;
      return String(id).padStart(6, "0");
    } else {
      const startDate = new Date("2023-09-07T00:02:00");
      const currentDate = new Date(`${date}T${time}`);
      const timeDiffInMinutes = Math.floor(
        (currentDate - startDate) / (60 * 1000)
      );
      const id = timeDiffInMinutes / 3;
      return String(id).padStart(6, "0");
    }
  }

  module.exports = {
    arraysAreEqual,
    arraysAreEqualIgnoringOrder,
    getCurrentTime,
    calculateGameID
  }