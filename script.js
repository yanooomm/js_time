var a;
var today = new Date();
var day = today.getDay();
var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', ' Пятница', 'Суббота'];
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
hoursAM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var i = 0; i < hoursAM.length; i++)
{
    if (hoursAM[i] == hour){
        a = 'AM'
    }
    else{
        a = 'PM'
    }
}
alert("Сегодня: " + days[day] + '\n' + "Текущее время: " + hour + a + ' : ' + minute + ' : ' + seconds)
