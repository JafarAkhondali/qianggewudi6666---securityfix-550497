var data1={
    'list|3': [{
     'id|+1': 1,
     //名
     'name':'@cname',
     'ename':'@last',
     'cfirst':'@cfirst',
     'point':'@integer',
     'birthday':'@date',
     'img':'@image(500x300)',
     //随机标题
     'title':'@title',
     //随机标题内容，字数为20
     'content':'@cword(20)',
     //生成地址
     'url':"@url",
     //生成ip
     'ip':"@ip",
     //生成邮箱
     'email':"@email",
     //生成区域
     'erea':'@region',
     //生成省，市
     'city':'@city(true)',
     //县
     'contry':'@county(true)',
     //'id':'@ID',
     'zip':'@zip',
     'guid':'@guid'
 }]
}
var data2={
    'news|5-30':[{
        "id_news":"@increment",
        "title_news":"@ctitle(8, 15)",
        "time_news":"@date"
}]
}
Mock.mock("http://www.qhdlink-student.top/student/coach.php","post",data1)