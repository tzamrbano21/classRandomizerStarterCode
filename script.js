$(document).ready(function(){
var students=["Jennifer", "David", "Tonny", "Kevin", "Bradley"];
$("#studentButton").click(function(){
    var randomStudents=Math.floor(Math.random()*students.length);
    $("#studentDisplay").html(students[randomStudents]);
});
    var teachers=["Aaron", "Alyxe", "Justin", "Julia", "Zach"];
    $("#teacherButton).click(function(){
        var randomTeachers=Math.floor(Math.random()*teachers.length);
        $("#teacherDisplay").html(teachers[randomTeachers]);
});
});
