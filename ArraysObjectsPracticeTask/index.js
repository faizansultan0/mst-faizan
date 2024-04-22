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

console.log('\nData is: ');
for(let i=0;  i< data.length; i++) {
    console.log('Name: ' + data[i].name + ', Experience: ' + data[i].experienceYears)
}

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

console.log('Data after sorting wrt experience is: ');
for(let i=0;  i< data.length; i++) {
    console.log('Name: ' + data[i].name + ', Experience: ' + data[i].experienceYears)
}