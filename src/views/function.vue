<template>
  <div class="c-function">
    <div class="wrap-a wrap padd">
      <div class="img-l"><img src="../assets/img/function/basicChat.svg"></div>
      <div class="img-r ">
        <h3 class="tit">{{$t('function.text1')}}</h3>
        <div class="chat-t">{{$t('function.text2')}}</div>
        <div class="chat-c">{{$t('function.text3')}}</div>
        <div class="chat-t">{{$t('function.text4')}}</div>
        <div class="chat-c">{{$t('function.text5')}}</div>
        <div class="chat-t">{{$t('function.text6')}}</div>
        <div class="chat-c">{{$t('function.text7')}}</div>
        <div class="chat-t">{{$t('function.text8')}}</div>
        <div class="chat-c">{{$t('function.text9')}}</div>
        <div class="chat-t">{{$t('function.text10')}}</div>
        <div class="chat-c">{{$t('function.text11')}}</div>
      </div>
    </div>
    <div class="wrap-b wow fadeInUp padd">
      <div class="wrap">
        <div class="b-t2 mob">{{$t('function.text13')}}</div>
        <div class="b-c b-c1 mob wrapper-pc">{{$t('function.text14')}}</div>
        <div class="b-c mob wrapper-pc" >{{$t('function.text15')}}</div>
        <div class="b-c mob wrapper-mobile" >{{$t('function.text14')}} {{$t('function.text15')}}</div>
        <div class="b-c mob"><a class="other" :href="`${url}?sao=1&appIos=${this.$store.state.downloadLink.ios}&appAnd=${this.$store.state.downloadLink.android}`" target="_blank">{{$t('function.text16')}}</a> {{$t('function.text17')}} <a class="other" href="https://web.kongkong-chat.com" target="_blank">{{$t('function.text18')}}</a> {{$t('function.text19')}}</div>
        <div class="img-b wrapper-pc" ><img src="../assets/img/function/accountExchange.png"></div>
        <div class="img-b app-img wrapper-mobile" ><img src="../assets/img/function/accountExchange.png"></div>
      </div>
    </div>
    <div class="wrap-c wrap padd">
      <div class="c-l wow fadeInLeft">
        <div class="c-t">{{$t('function.text20')}}</div>
        <div class="c-1 c-c">{{$t('function.text21')}}</div>
        <div class="c-2 c-c">{{$t('function.text22')}}</div>
        <div class="c-3 c-c">{{$t('function.text23')}}</div>
      </div>
      <div class="c-r  wow fadeInRight wrapper-pc" ><img src="../assets/img/function/Collaborativework.svg"></div>
      <div class="c-r  wow fadeInRight wrapper-mobile app-img" ><img src="../assets/img/function/Collaborativework.svg"></div>
    </div>
    <div class="wrap-d wrap-b  wow fadeInUp padd">
      <h3 class="d-t1">{{$t('function.text24')}}</h3>
      <div class="d-c d-c2">{{$t('function.text25')}}</div>
      <div class="d-c ">{{$t('function.text26')}}</div>
      <div class="img-d web-img wrapper-pc" ><img src="../assets/img/function/Notification.svg"></div>
      <div class="img-d app-img wrapper-mobile" ><img src="../assets/img/function/Notification.svg"></div>
    </div>
    <div class="wrap-f wrap padd wrapper-pc">
      <div class="img-f wow fadeInLeft">
        <img src="../assets/img/function/Securityprivacy.svg">
      </div>
      <div class="f-r wow fadeInRight">
        <h3 class="f-t1">{{$t('function.text27')}}</h3>
        <div class="f-t">{{$t('function.text28')}}</div>
        <div class="f-c">{{$t('function.text29')}}</div>
        <div class="f-t">{{$t('function.text30')}}</div>
        <div class="f-c">{{$t('function.text31')}}</div>
        <div class="f-t">{{$t('function.text32')}}</div>
        <div class="f-c">{{$t('function.text33')}}</div>
      </div>
    </div>
    <div class="f-app wrap padd wrapper-mobile" >
      <div class="f-r wow fadeInRight">
        <h3 class="f-t1">{{$t('function.text27')}}</h3>
        <div class="f-t">{{$t('function.text28')}}</div>
        <div class="f-c">{{$t('function.text29')}}</div>
        <div class="f-t">{{$t('function.text30')}}</div>
        <div class="f-c">{{$t('function.text31')}}</div>
        <div class="f-t">{{$t('function.text32')}}</div>
        <div class="f-c">{{$t('function.text33')}}</div>
      </div>
      <div class="img-f wow fadeInLeft">
        <img src="../assets/img/function/Securityprivacy.svg">
      </div>
    </div>
    <div class="more wow fadeInUp padd" v-show="isPC">
      <div class="more-1">{{$t('function.text34')}}</div>
      <div class="more-2">{{$t('function.text35')}}</div>
    </div>
    <div class="more wow fadeInUp padd" v-show="!isPC">
      <div class="more-1">{{$t('function.text34')}} {{$t('function.text35')}}</div>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'
  export default {
    data(){
      return{
      	url: window.location.href,
        isPC: Boolean,
      }
    },
	  created () {
		  var u = navigator.userAgent;
		  this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		  this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		  let isScan = this.$route.query.sao
		  if (isScan) {
			  if (this.isiOS) {
				  location.href = this.$route.query.appIos
			  } else {
				  location.href = this.$route.query.appAnd
        }
		  }
	  },
    mounted () {
      window.onresize = () => {
      if (window.innerWidth > 1200) {
          this.isPC = true
        } else {
          this.isPC = false
        }
      }
      this.$nextTick(() => {
        var wow = new WOW({
          live: false
        })
        wow.init()
      })
    },
  }
</script>

<style lang="less" scoped>
  @black:#000;
  @grey:#687992;
  @bg:#f6f8fa;
  @blue:#1f8aff;
  @tit: #1c1e21;
.wrap{
  width: 1100px;
  margin:0 auto;
  @media screen and (max-width: 1200px){
    width: 100%;
  }
}
.padd{
  @media screen and (max-width: 1200px){
    padding: 0 20px;
  }
}
.mob{
  @media screen and (max-width: 1200px){
    text-align: left !important;
  }
}
.wrap-a{
  display: flex;
  padding-bottom: 100px;
  @media screen and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
  .img-l{
    margin-top: 226px;
    margin-right: 90px;
    width: 584px;
    @media screen and (max-width: 1200px){
      margin: 50px auto 0;
    }
    @media screen and (max-width: 786px){
      width: 280px;
      margin: 100px auto 0;
    }
    img{
      width: 100%;
    }
  }
  .img-r{
    margin-top: 180px;
    @media screen and (max-width: 1200px){
      margin-top: 50px;
      padding-bottom: 40px;
    }
    .tit{
      font-size: 34px;
      color: @black;
      margin-bottom: 20px;
      @media screen and (max-width: 1200px){
        font-size: 18px;
      }
    }
    .chat-t{
      color: @black;
      font-size: 24px;
      margin-bottom: 10px;
      @media screen and (max-width: 1200px){
        font-size: 14px;
      }
    }
    .chat-c{
      font-size: 18px;
      color: @grey;
      margin-bottom: 30px;
      @media screen and (max-width: 1200px){
        font-size: 14px;
      }
    }
  }
}
  .wrap-b{
    width: 100%;
    height: auto;
    background: @bg;
    padding-bottom: 160px;
    @media screen and (max-width: 1200px){
      padding-bottom: 40px;
    }
    .img-b{
      margin: 118px auto 0;
      width: 909px;
      &.app-img{
        @media screen and (max-width: 1200px){
          width: 100%;
          margin: 60px auto 0;
        }
      }
      img{
        width: 100%;
      }
    }
    .b-t1{
      text-align: center;
      font-size: 20px;
      color: @black;
      padding-top: 100px;
      @media screen and (max-width: 1200px){
        font-size: 18px;
        padding-top: 50px;
      }
    }
    .b-t2{
      text-align: center;
      font-size: 34px;
      color: @black;
      margin-top: 10px;
      padding-top: 100px;
      @media screen and (max-width: 1200px){
        font-size: 18px;
        margin-bottom: 20px;
        padding-top: 50px;
      }
    }
    .b-c1{
      /*margin-top: 10px;*/
    }
    .b-c{
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
      color: @grey;
      @media screen and (max-width: 1200px){
        font-size: 14px;
        line-height: 1.5;
      }
      .other{
        color: @blue;
      }
    }
  }
  .wrap-c{
    display: flex;
    @media screen and (max-width: 1200px){
     flex-direction: column;
    }
    .c-l{
      margin-right: 86px;
      padding-top: 180px;
      @media screen and (max-width: 1200px){
        margin-right: 0;
        padding-top: 50px;
      }
      .c-t{
        font-size: 34px;
        color: @black;
        @media screen and (max-width: 1200px){
         font-size: 20px;
        }
      }
      .c-c{
        margin-top: 40px;
        color: @grey;
        font-size: 18px;
        @media screen and (max-width: 1200px){
          margin-top: 20px;
          font-size: 14px;
        }
      }
    }
    .c-r{
      width: 535px;
      padding-top: 100px;
      @media screen and (max-width: 1200px){
        margin: 0 auto;
      }
      &.app-img{
        @media screen and (max-width: 786px){
          margin: 0 auto;
          width: 100%;
          padding: 50px 0;
          img{
            width: 100%;
          }
        }
      }
    }
  }
  .wrap-d{
    .d-t1{
      padding-top: 140px;
      font-size: 34px;
      text-align: center;
      color: @tit;
      @media screen and (max-width: 1200px){
        text-align: left;
        padding-top: 50px;
        font-size: 20px;
      }
    }
    .d-c{
      font-size: 18px;
      text-align: center;
      color: @grey;
      @media screen and (max-width: 1200px){
        text-align: left;
        font-size: 14px;
        line-height: 1.5;
      }
      &.d-c2{
        margin-top: 20px;
      }
    }
    .img-d{
      width: 663px;
      margin: 74px auto 0;
      @media screen and (max-width: 786px){
       width: 100%;
        margin: 50px auto;
       img{
         width: 100%;
        }
      }
    }
  }
  .f-app{
    @media (min-width: 1200px) {
      display: none
    }
    @media (max-width: 1200px) {
      display: block
    }
    .img-f{
      padding-top: 220px;
      position: relative;
      width: 663px;
      @media screen and (max-width: 1200px){
        padding-top: 50px;
      }
      @media screen and (max-width: 820px){
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .f-r{
      margin-left: 100px;
      padding-top: 254px;
      @media screen and (max-width: 1200px){
        margin-left: 0;
        padding-top: 75px;
      }
      .f-t1{
        font-size: 34px;
        color: @black;
        margin-bottom: 20px;
        @media screen and (max-width: 1200px){
          font-size: 20px;
        }
      }
      .f-t{
        font-size: 24px;
        color: @black;
        margin-bottom: 10px;
        @media screen and (max-width: 1200px){
          font-size: 14px;
        }
      }
      .f-c{
        font-size: 18px;
        color: @grey;
        margin-bottom: 20px;
        @media screen and (max-width: 1200px){
          font-size: 14px;
        }
      }
    }
  }
  .wrap-f{
    padding-bottom: 220px;
    display: flex;
    @media screen and (max-width: 1200px){
      padding-bottom: 100px;
    }
    @media (max-width: 1200px) {
      display: none
    }
    @media (min-width: 1200px) {
      display: flex;
    }
    .img-f{
      padding-top: 220px;
      position: relative;
      width: 663px;
      @media screen and (max-width: 1200px){
        padding-top: 50px;
      }
      @media screen and (max-width: 820px){
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .f-r{
      margin-left: 100px;
      padding-top: 254px;
      @media screen and (max-width: 1200px){
        margin-left: 0;
        padding-top: 75px;
      }
      .f-t1{
        font-size: 34px;
        color: @black;
        margin-bottom: 20px;
        @media screen and (max-width: 1200px){
         font-size: 20px;
        }
      }
      .f-t{
        font-size: 24px;
        color: @black;
        margin-bottom: 10px;
        @media screen and (max-width: 1200px){
          font-size: 14px;
        }
      }
      .f-c{
        font-size: 18px;
        color: @grey;
        margin-bottom: 20px;
        @media screen and (max-width: 1200px){
          font-size: 14px;
        }
      }
    }
  }
  .more{
    padding: 50px 0;
    text-align: center;
    background: @blue;
    font-size: 28px;
    color: #fff;
    @media screen and (max-width: 1200px){
      font-size: 14px;
      padding: 20px;
    }
  }
</style>
