let data = [
    {
        name: 'Huzaifa',
        email: 'huzaifa@gmail.com',
        dob: '23-03-2002',
        experienceYears: 8,
        department: 'CS',
        joiningDate: '12-07-2020'
    },
    {
        name: 'Wasiq',
        email: 'wasiq@gmail.com',
        dob: '23-03-2009',
        experienceYears: 1,
        department: 'CS',
        joiningDate: '12-07-2020'
    },
    {
        name: "Maaz",
        email: "maaz@gmail.com",
        dob: '23-1-2000',
        experienceYears: 10,
        department: 'IT',
        joiningDate: '13-2-2014'
    },
    {
        name: 'Hasan',
        email: 'hasan@gmail.com',
        dob: '23-03-2004',
        experienceYears: 3,
        department: 'CS',
        joiningDate: '12-07-2020'
    },
    {
        name: 'Sami Ullah',
        email: 'sami@gmail.com',
        dob: '23-03-2006',
        experienceYears: 1.5,
        department: 'CS',
        joiningDate: '12-07-2020'
    },
];

// Printing Initial Values
console.log('\nData is: ');
for(let i=0;  i< data.length; i++) {
    console.log('Name: ' + data[i].name + ', Experience: ' + data[i].experienceYears)
}

// Sorting in Descending Order
let m = 0;
for(let i=0; i < data.length; i++){
    for(j=0; j < data.length; j++){
        if(data[i].experienceYears > data[j].experienceYears) {
            m = data[j].experienceYears;
            data[j].experienceYears = data[i].experienceYears;
            data[i].experienceYears = m;
        }
    }
}

// Printing Values after sorting data
console.log('Data after sorting wrt experience is: ');
for(let i=0;  i< data.length; i++) {
    console.log('Name: ' + data[i].name + ', Experience: ' + data[i].experienceYears)
}


// Deleting entries having experience greater than 2
let k = 0, n = 0;
for(let i=0; i < data.length; i++) {
    if(data[i].experienceYears > 2) {
        n = i;
        while(n < data.length) {
            if(n != data.length - 1){
                data[n] = data[n+1];
            }
            n++; 
        }
        data[data.length - 1] = null;
        data.length--;

        // Rechecking if at the same index the new entry's experience is also greater than 2
        if(data[i].experienceYears > 2) {
            i--;
        }
    }
}

// Printing Final Values
console.log('Data after deleting elements having experience greater than 2 is: ');
for(let i = 0;  i < data.length; i++) {
    console.log('Name: ' + data[i].name + ', Experience: ' + data[i].experienceYears)
}