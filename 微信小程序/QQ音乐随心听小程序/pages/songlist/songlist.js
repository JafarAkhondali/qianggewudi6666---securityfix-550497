// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[
      "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4147099.gif",
      "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4140282.jpg",
      "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4130048.gif",
      "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4138247.gif",
      "http://y.gtimg.cn/music/common//upload/t_musicmall_focus/4126983.jpg",
      "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4127020.jpg"


    ],
    musiclist:[
      {
        "pic":"https://p1.music.126.net/RdkFwjv73ATKNE2ajwxyog==/109951163013685863.jpg",
        "mname":"Papillon",
        "name":"王嘉尔",
        "id":"501467216"
      },
    
      {
        "pic":"https://p1.music.126.net/pizjUFhx-qV35z1Q0ievRQ==/109951165547270359.jpg",
        "mname":"反转地球",
        "name":"潘玮柏",
        "id":"139688"
      },
      
      {
        "id":"29450548",
        "name":"邓紫棋",
        "mname":"龙卷风",
        "pic":"https://p2.music.126.net/UjLNuIBU47XdHd24e3U21w==/6631154627821015.jpg"
      },
      {
        "id":"1450574147",
        "name":"蔡徐坤",
        "mname":"情人",
        "pic":"https://p1.music.126.net/Z4tngqEcC2SiW16CvmPlkg==/109951165013302726.jpg"
      } ,
      {
        "id":"1363948882",
        "name":"松柏",
        "mname":"让世间美好环环相扣",
        "pic":"https://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg"
      },
      {
        "id":"385973",
        "name":"五月天",
        "mname":"恋爱ing",
        "pic":"https://p2.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg"

      },
      {
         "id":"165339",
         "pic":"https://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
         "name":"汪苏泷",
         "mname":"万有引力"
      },
     
      {
        "pic":"https://p1.music.126.net/S1971yo30x4LPXbfFNY8Tw==/109951165199559720.jpg",
        "mname":"可惜没如果",
        "name":"林俊杰",
        "id":"1468114203"
      },
    ],
    "musiclist2":[   
      { pic:"https://p1.music.126.net/Ls6pVy1PUNbJkEICs8-MYQ==/3240260768542190.jpg",
  musicname:"我们的明天",
  name:"鹿晗",
  id:"29771231"
  
},{
pic:"https://p2.music.126.net/CcthX_ZCexIdriZADoNn3g==/109951165628166191.jpg",
name:"林俊杰",
musicname:"江南",
id:"26305527"

},{
pic:"https://p1.music.126.net/QxEeLH5eD56vBtVbFaB_PA==/3297435375324551.jpg",
musicname:"电影《前任2：备胎反击战》主题曲",
name:"张艺兴",
id:"36668004"
},
{
id:"1833633769",
pic:"https://p1.music.126.net/CaQIm9X9xy9CMhc86e3qaA==/109951165847509270.jpg",
name:"邓紫棋",
musicname:"超能力"
},
{ 
id:"528350087",
name:"黄子韬",
musicname:"Beggar",
pic:"https://p1.music.126.net/DNSyJYijGR3dA-vUsvE80g==/109951163202167950.jpg"
}
 ],
    //输入框输入的值
    keyWord:"",
    //新的搜索结果列表
    resultmusicList:[],
    // 定义存储封面的额数组
    musicPiclist:[],
    idlist:[],
    //歌曲个数
    sum:10
  },
  // 播放按钮
  play:function(even){
      var mid= even.currentTarget.dataset.id
      var idlist=this.data.idlist
      // 页面路由
      wx.navigateTo({
        // 跳转路径
        url: '/pages/play/play?id='+mid+"&idlist="+idlist
      })
  },
  /**
   * 改变输入框的值
   */
  changeWord:function(evens){
    // 获取当前输入框输入的值
      var w= evens.detail.value
      // 进行输入值存储
      this.setData({
        keyWord:w
      })
  }
  ,
  /**
   * 
   * 搜索按钮
   */
  search:function(){
     //获取输入框数据
    var w= this.data.keyWord
    var url="https://music.163.com/api/search/get?s="+w+"&type=1&limit="+this.data.sum
    var that=this
    //定义专门进行id存储的数组
    var idlist=[]
    // 网络请求
    wx.request({
      url: url,
      success: (result) => {
        // 解析结果值
        // console.log(result.data.result.songs)
        var songlist=result.data.result.songs
        //把数据进行存储到data当中
        that.setData({
          resultmusicList:songlist
        })
        // 获取到id以后进行数组存储
        for(var i=0;i<songlist.length;i++){
          //把列表当中的id取出来存储到新的数组当中
          idlist.push(songlist[i].id)
        }
        // console.log(idlist)
        //把id列表进行data数据的存储
        that.setData({
            idlist:idlist
        })
        //覆盖之前封面
        this.setData({
          "musicPiclist":[]
        })
        that.getMusicImage(idlist,0,idlist.length)
      },
      
    })
  },
  /**
   * 
   *封面查询方法
    递归函数
    （1存放id的数组，2递归下标，3存储长度）
   */
  getMusicImage:function(idlist,i,length){
       //获取当前数组
       var musicPiclist=this.data.musicPiclist
       var that=this
       var url="https://music.163.com/api/song/detail/?id=1359595520&ids=["+idlist[i]+"]"
      //  console.log(url)
      wx.request({
        url: url,
        success: (result) => {
          // 通过id值获取到对应的封面数据
            //  console.log(result.data.songs[0].album.blurPicUrl)
            var picitem=  result.data.songs[0].album.blurPicUrl
            //把当前封面追加到数组当中
            musicPiclist.push(picitem)
            that.setData({
              musicPiclist:musicPiclist
            })
             //  判断条件来进行调用
           if(++i<length){
              that.getMusicImage(idlist,i,length)
           }
        }
      })
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var Idlist=[]
    //下拉加载提示
    wx.showLoading({
      title: '正在加载',
    })
    //获取输入框的值判断是否为空
    var word=this.data.keyWord
    var that=this
    var sum=this.data.sum
    if(word!=""){
      sum+=2
      wx.request({
        url: "https://music.163.com/api/search/get?s="+word+"&type=1&limit="+sum,
        
        success: (result) => {
          var songlist=result.data.result.songs
        //把数据进行存储到data当中
        that.setData({
          resultmusicList:songlist,
          sum:sum
        })
        //id存储
        for(var i=0;i<songlist.length;i++){
          Idlist.push(songlist[i].id)
        }
        this.setData({
          "musicPiclist":[]
        })
        that.getMusicImage(Idlist,0,Idlist.length)
        },
      
      })
    }



    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})