function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textAreaElement = JSON.parse((document.getElementsByTagName('textarea')[0].value));
      let objOfWorkers = {};
      for (let el of textAreaElement) {
         let [nameOfRestaurant, ...rest] = el.split(' - ');
         if (!objOfWorkers.hasOwnProperty(nameOfRestaurant)) {
            objOfWorkers[nameOfRestaurant] = {};
         } 
         for (let workers of rest) {
            let arrOfWorkers = workers.split(/[, ]/).filter(x => x != '');
            for (let i = 0; i < arrOfWorkers.length; i = i + 2) {
               let nameOfWorker = arrOfWorkers[i];
               let salaryOfWorker = Number(arrOfWorkers[i + 1]);
               objOfWorkers[nameOfRestaurant][nameOfWorker] = salaryOfWorker;
            }
         }
      }
      let entries = Object.entries(objOfWorkers);
      let avgSalary = 0;
      let sum = 0;
      let arrOfSum = [];

      for (let [key, value] of entries) {
         sum = 0;
         counter = 0;
         avgSalary = 0;
         let max = 0;

         Object.entries(value).forEach(el=>{
            if (Number(el[1]) > max) {
               max = Number(el[1]);
            }
            sum += Number(el[1]);
            counter++;
         });
         avgSalary = sum / counter;
         arrOfSum.push(avgSalary);

         if ((avgSalary >= arrOfSum[0] && arrOfSum.length == 1) || avgSalary > arrOfSum[arrOfSum.length-2]) {
            let outputResult = `Name: ${key} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${max.toFixed(2)}`;
            let outputResultElement = document.querySelector('#bestRestaurant p');
            let outputResultElementNames = document.querySelector('#workers p');
            outputResultElement.textContent = outputResult;
            let entriesOfValues = Object.entries(value).sort((a,b)=>b[1]-a[1]);
            let outputResultNames = '';
            for (let eachEl of entriesOfValues) {
               outputResultNames += `Name: ${eachEl[0]} With Salary: ${eachEl[1]} `;
            }
            outputResultElementNames.textContent = outputResultNames;
         }
      }
   }
}
