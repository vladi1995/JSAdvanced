"use strict";
function generateReport() {
    const headerElementTr = document.getElementsByTagName('thead')[0].querySelector('tr:first-child');
    const headerElementsTh = headerElementTr.querySelectorAll('th');
    let counter = 0;
    let arr = [];
    let selectedTds = [];
    let lastArr = [];
    let obj = {};
    let arrOfObj = [];
    let nameOf = '';
    for (let el of headerElementsTh) {
        counter++;
        const selectedInput = el.querySelector('input');
        if (selectedInput.checked) {
            selectedTds = document.querySelectorAll(`tbody tr td:nth-child(${counter})`);
            arr.push(selectedInput.name);
            lastArr.push(selectedTds);
        }
    }
    let info = document.querySelectorAll('tbody tr');
    if (lastArr.length > 1) {
        for (let i = 0; i < info.length; i++) {
            obj = {};
            for (let j = 0; j < lastArr.length; j++) {
                let key = arr[j];
                if (lastArr[j][i].textContent == undefined) {
                    lastArr[j][i].textContent = " ";
                }
                obj[key] = lastArr[j][i].textContent.trim();
            }
            arrOfObj.push(obj);
        }
        let textAreaId = document.getElementById('output');
        textAreaId.value = JSON.stringify(Object.values(arrOfObj));
    } else if (lastArr.length == 1) {
        let key = arr[0];
        for (let i = 0; i < info.length; i++) {
            obj = {};
            if (lastArr[0][i].textContent == undefined) {
                lastArr[0][i].textContent = " ";
            }
            obj[key] = (lastArr[0][i]).textContent.trim();
            arrOfObj.push(obj);
        }

        let textAreaId = document.getElementById('output');
        textAreaId.value = JSON.stringify(Object.values(arrOfObj));
    }
}  
// function generateReport() {
//     let output = document.getElementById('output');

//     //All input type = checkbox = 7
//     let boxes = document.querySelectorAll('thead tr th input');

//     //All tr = 20
//     let info = document.querySelectorAll('tbody tr');
//     let arr = [];

//     //All is 7*20 = 140
    
//     for (let i = 0; i < info.length; i++) { //All tr`s
//         let obj = {};
//         for (let j = 0; j < boxes.length; j++) { //All inputs
//             if (boxes[j].checked) { //If input == checked
//                 obj[boxes[j].name] = info[i].children[j].textContent;
//             }
//         }
//         arr.push(obj);
//     }
//     output.value = JSON.stringify(arr);
// }