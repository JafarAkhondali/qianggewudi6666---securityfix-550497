// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action:{
      "method":"play"
    },
    thisMusicId:"",
    musicName:"",
    musicImage:"",
   // 歌词数据
   LrcData:[],
   //当前播放歌词的位置
   lrcindex:-1,
   //歌词滚动位置
   top:0,
   //初始位置
   playtime:"00:00",
   // 整个的时间
   sumtime:"00:00",
   //进度条最大值
   max:0,
  //  进度条当前值
   move:0,
   //歌曲id列表
   idlist:[],
   mode:"single"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.idlist)
    var mid=options.id
    var idliststr=options.idlist
    // 把传过来的字符串进行拆分
    var idlist=idliststr.split(",")
    //进行id的赋值
    this.setData({
      thisMusicId:mid,
      idlist:idlist
    })
   //歌曲详情的渲染
   this.musicshow()
   // 歌词渲染
   this.lrcshow()
  },
  //歌曲详情渲染的方法
  musicshow:function(){
     var id= this.data.thisMusicId
    //  先存储当前对象
     var that=this
    //  通过歌曲id来进行接口的数据拼接
    var url="https://music.163.com/api/song/detail/?ids=["+id+"]"
    // 网络请求
    wx.request({
      url: url,
      success: (result) => {
        var name=result.data.songs[0].name
        var pic= result.data.songs[0].album.blurPicUrl
        that.setData({
          "musicImage":pic,
          "musicName":name
        })
      },
    })
  },
  /**
   * 歌词渲染方法
   * 
   */
  lrcshow:function(){
     var id=this.data.thisMusicId
     var that=this
     var url="http://music.163.com/api/song/lyric?os=pc&id="+id+"&lv=-1&kv=-1&tv=-1"
     wx.request({
       url: url, 
       success: (result) => {
         var lrcStr= result.data.lrc.lyric
        //  console.log(lrcStr)
        /**
         *  歌词是字符串
         * 需求：
         *   1 歌词显示
         *   2 时间和歌词的匹配歌词进行自动高亮显示和滚动
         * 1[00:00.000] 作词 : 尹初七
           2[00:01.000] 作曲 : 柏松
           3[00:02.000] 编曲 : 彭圣杰
           4[00:15.554]
           5[00:28.054]偏偏秉烛夜游
           [00:31.054]午夜星辰 似奔走之友
           [00:34.554]爱你每个结痂伤口
           [00:37.554]酿成的陈年烈酒
           歌词解析:
           1,进行字符串的拆分，把每一句拆开
           2，进行每一句的拆分拆分成时间和歌词并且存储成列表
           3，进行歌词显示
         */ 
        // 拆分 见到换行就拆分
        var lrclist=lrcStr.split("\n")
        //定义正则 [03:44.76]  你已经留下我
        var re= /\[\d{2}:\d{2}\.\d{2,3}\]/
        //定义空列表进行数据整合的存储
        var lrcnewlist=[]
        // 遍历列表
        for(var i=0;i<lrclist.length;i++){
           //获取时间
           var itemdate= lrclist[i].match(re)
          // 判断数据不为空
          if (itemdate!=null) {
             //获取时间字符串
            var itemdate=itemdate[0]
            if (itemdate!=null) {
                //获取歌词
            var itemlrc=lrclist[i].replace(re,"")
            // 时间整理：要把[02:37.051]格式的时间整理成可以进行运算的以秒为单位的数字
            var itemdate=itemdate.slice(1,-1)
            // 进行时间的再次拆分 以：拆分
            var timelist=itemdate.split(":")
            // 进行分和秒的运算 统一成秒钟
            var h=timelist[0]
            var s=timelist[1]
            // console.log(h+"  "+s)
            var time=parseFloat(h)*60+parseFloat(s)
            // console.log(time)
            // [[0000,歌词],[0010,歌词]]
            lrcnewlist.push([time,itemlrc])
            }
          
          }
        }
        // console.log(lrcnewlist)
        that.setData({
          LrcData:lrcnewlist
        })
       },  
     })
  },
    /**
     * 歌曲进度改变方法
     */
    timechange:function(result){
      // 歌词滚动
         //思路:
         // 匹配事件，拿到当前播放的事件和歌词时间进行比对从而判断当前唱到的位置然后进行高亮显示和滚动
         var playtime= result.detail.currentTime
         var lrctimelist=this.data.LrcData
         // 进行数据的遍历
         for (var i=0;i<lrctimelist.length-1;i++){
            // 进行比对判断
            if(lrctimelist[i][0]<playtime&&playtime<lrctimelist[i+1][0]){
              //  console.log(lrctimelist[i][1]+" "+i)
               this.setData({
                 lrcindex:i
               })
            }
            //拿到当前的歌词下标
            var index=this.data.lrcindex
            // console.log(index)
            this.setData({
              top:(index-5)*30
            })
         }
     //进度条动画执行和时间数据的改变
     // 设置当前播放的时长
    //  console.log(playtime)
    // 进行当前播放值的格式化
    var m=playtime/60
    m=Math.floor(m)
    var s=playtime%60
    s=Math.floor(s)
    if(m<10){
      m="0"+m
    }
    if(s<10){
      s="0"+s
    }
    // console.log(m+"："+s)
   
    //找总歌曲的时长
      var sum=result.detail.duration
      //进行总时长的格式化
      var sum_m=Math.floor(sum/60)
      var sum_s=Math.floor(sum%60)
      if(sum_m<10){
        sum_m="0"+sum_m
      }
      if(sum_s<10){
        sum_s="0"+sum_s
      }
      console.log(sum_m+":"+sum_s)
      this.setData({
        "playtime":m+":"+s,
        "sumtime":sum_m+":"+sum_s,
        "max":sum,
        "move":playtime
      }) 

    },
    /**
     * 拖动进度条的方法
     */
    sliderchange:function(even){
      console.log(even.detail.value)
      // 覆盖当前的值进行UI效果的修改
      var v=even.detail.value
      this.setData({
        move:v
      })
      //进行播放器的覆盖 
      // 进行播放器当前播放进度数据的修改
      this.setData({
        action:{
          method:"setCurrentTime",
          data:v
        }
      })
      //要进行播放按钮UI效果的修改
      this.setData({
        action:{
          method:"play"
        }
      })
    },
  /**
   * 暂停按钮点击*/ 
  playdate:function(){
        // 拿到当前状态值
        var date=this.data.action.method
        // console.log(date)
        // 判断当前状态
        if (date=="play") {
          // 正在播放时候让其暂停
          this.setData({
            action:{
              "method":"pause"
            }
          })
        } else {
          this.setData({
            action:{
              "method":"play"
            }
          })
        }
  },
  /**
   * 下一首
   */
  nextSong:function(){
      // console.log("下一首")
      //思路：通过id列表进行下一首的替换（1，图片。2，名称，3，歌词）
      // 拿到id列表
      var ids=this.data.idlist
      // 获取当前id
      var id=this.data.thisMusicId
      // 判断当前歌曲的位置
      var index=-1
      for(var i=0;i<ids.length;i++){
        if (id==ids[i]) {
          index=i
          break
        }
      }
      console.log(index)
      //更新歌曲
      //三元运算符判断当前歌曲是不是最后一首歌，如果是最后一首歌就回到第一首
      this.setData({
        thisMusicId:index==ids.length-1?0:ids[index+1]
      })
      //重新进行赋值action
      this.setData({
        action:{
          "method":"play"
        }
      })
      // 更新歌曲
      //歌曲详情更新
      this.musicshow()
      //歌词更新
      this.lrcshow()
  },
/**
   * 上一首
   */
  prevSong:function(){
    var ids=this.data.idlist
    // 获取当前id
    var id=this.data.thisMusicId
    // 判断当前歌曲的位置
    var index=-1
    for(var i=0;i<ids.length;i++){
      if (id==ids[i]) {
        index=i
        break
      }
    }
    console.log(index)
    //更新歌曲
    //三元运算符判断当前歌曲是不是最后一首歌，如果是最后一首歌就回到第一首
    this.setData({
      thisMusicId:index==0?ids[length-1]:ids[index-1]
    })
    //重新进行赋值action
    this.setData({
      action:{
        "method":"play"
      }
    })
    // 更新歌曲
    //歌曲详情更新
    this.musicshow()
    //歌词更新
    this.lrcshow()
},
// 歌曲播放完执行
changeMusic:function(){
    var mode=this.data.mode
    //single 单曲，loop循环
    if(mode=="single"){
      //单曲循环 重复设置歌曲id
      this.setData({
         thisMusicId:this.data.thisMusicId
      })
      //播放状态的更新设定
      this.setData({
        action:{
          method:"play"
        }
      })
      // 下一首
    }else{
      this.nextSong()
    }
     this.setData(
       {
         top:0,
         lrcindex:0
       }
     )
},
changemode:function(){
  if (this.data.mode=="loop") {
    this.setData({
      mode:"single"
    })
  } else {
    this.setData({
      mode:"loop"
    })
  }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})