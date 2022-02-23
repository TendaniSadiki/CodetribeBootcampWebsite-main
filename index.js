
//Personal Info
let personalInfo ={
    name: 'Name: Edmond Tendani',
    surname:'Surname: Sadiki',
    age: 'Age: 23',
    nationality: 'Nationality: South African',
    gender: 'Gender: Male'

}
//print output
document.getElementById('name').innerHTML = personalInfo.name;
document.getElementById('surname').innerHTML = personalInfo.surname;
document.getElementById('age').innerHTML = personalInfo.age;
document.getElementById('nationality').innerHTML = personalInfo.nationality;
document.getElementById('gender').innerHTML = personalInfo.gender;

//Educational background
let educationalBackground ={
    schoolName: 'High school attended: Muthuhadini Combined School',
    grade:'Highest grade passed: Grade 12',
    year: 'Year: 2018'

}
//print output
document.getElementById('schoolName').innerHTML = educationalBackground.schoolName;
document.getElementById('grade').innerHTML = educationalBackground.grade;
document.getElementById('year').innerHTML = educationalBackground.year;
//Working Experience
let experience = {
    experience: " None"
}
//print output
document.getElementById("experience").innerHTML=experience.experience;

//Myprojects array
let projects = ["How to calculate area with Python","How to calculate Range with python",
"How to calculate average with python","How old will you be in 100 years Python",
"How to convert hour to seconds using python","How to create a guess number game with python part 1"
,"How to create a guess number game with python part 2","Which year will you be turning 100 years old with python"
,"How to create Python Rock Paper Scissors (Beginner tutorial)"
, "How to install python in visual studio code in windows 10 2021"]
//print output
document.getElementById('project1').innerHTML = projects[0];
document.getElementById('project2').innerHTML = projects[1];
document.getElementById('project3').innerHTML = projects[2];
document.getElementById('project4').innerHTML = projects[3];
document.getElementById('project5').innerHTML = projects[4];
document.getElementById('project6').innerHTML = projects[5];
document.getElementById('project7').innerHTML = projects[6];
document.getElementById('project8').innerHTML = projects[7];
document.getElementById('project9').innerHTML = projects[8];
document.getElementById('project10').innerHTML = projects[9];

//Info for employers
let employersInfo = {
    info : "I'm looking forward to work on any Projects in order to complete my goals and gain more skills, because I'm a well focused person and I always finish what I start."
}
document.getElementById('info').innerHTML = employersInfo.info;

//Little about me
let littleAbout ={
    username: 'Tendani',
    bio: "Edmond Tendani Sadiki, Web developer, I'm inspired by the little things I do and I'm well focused person who is looking to work with Codetribe/ Mlab to to achieve my dreams.I'm looking forward to work as a developer and ready to work on any project.",  
    bio2: "I design my imagination and thought through coding and I really love to work as a team because I learn from others and from my mistakes."

}
document.getElementById('username').innerHTML = littleAbout.username;
document.getElementById('bio').innerHTML = littleAbout.bio;
document.getElementById('bio2').innerHTML = littleAbout.bio2;

function Submit(){
let userInfo ={
    usersName: '',
    usersSurname:'',
    usersEmail: '',
    usersSubject: ''
}
document.getElementById('usersName').innerHTML = userInfo.usersName;
document.getElementById('usersSurname').innerHTML = userInfo.usersSurname;
document.getElementById('usersEmail').innerHTML = userInfo.usersEmail;
document.getElementById('usersSubject').innerHTML = userInfo.usersSubject;
console.log(userInfo)
}
