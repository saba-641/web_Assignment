    var checkedValue = [];
    var row;
    var data;

    function getRadioValue(theRadioGroup) {
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }
    function getCheckBox(thisCheckBoxGroup) {
       // var checkedValue = [];
        const inputElements = document.getElementsByName(thisCheckBoxGroup);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                 checkedValue.push(inputElements[i].value);              
            }

        } return checkedValue;
    }

    function savedata() {

        var nationaldd = document.getElementById("nationlitydd");
         data = {
            "name": document.getElementById('nametxt').value,
            "name2": document.getElementById('nametxt2').value,
            "address": document.getElementById('address').value,
            "gender": getRadioValue('gender'),
            "dob": document.getElementById('dob').value,
            "nationality": nationaldd.options[nationaldd.selectedIndex].text,
            "lang": getCheckBox("lang"),
            "email": document.getElementById('mailtxt').value,
            "filename" : document.getElementById('File1').value,
            "message": document.getElementById('msgtxt').value
        }
        console.log(data);      
        createtablerow();


    }

    function createtablerow() {

        table = document.getElementById('form_result');    
        var columnCount = table.rows[0].cells.length;

         //Add the data rows.
            row = table.insertRow(-1);

            var cell1 = row.insertCell(-1);
            var cell9 = row.insertCell(-1);
            var cell10 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            var cell8 = row.insertCell(-1);

            cell1.innerHTML = data.name;
            cell9.innerHTML = data.name2;
            cell10.innerHTML = data.address;
            cell2.innerHTML = data.gender
            cell3.innerHTML = data.dob;
            cell4.innerHTML = data.nationality;
            cell5.innerHTML = data.lang;
            cell6.innerHTML = data.email;
            cell7.innerHTML = data.filename;
            cell8.innerHTML = data.message;
             //here i am adding the row
            table.appendChild(row);


    }