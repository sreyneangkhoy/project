// alert(123)
var id = document.getElementById('id');
var Name= document.getElementById('name');
var messenger= document.getElementById('messenger');
var btn_submit = document.getElementById('btn-submit');

var student = {
    id:"NULL",
    Name:"NULL",
    messenger:0,
};
btn_submit.addEventListener('click',function(){
  student.id = id.value;
  student.Name = Name.value;
  student.messenger = messenger.value;
  console.log(student);
});