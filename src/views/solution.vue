<template>
  <div class="c-solution">
    <div class="banner">
      <div class="img-banner wow fadeInDown"><img src="../assets/img/solution/banner.png"></div>
      <h3 class="banner-t wow fadeInDown">{{$t('solution.text1')}}</h3>
      <p class="banner-c wow fadeInDown">{{$t('solution.text2')}}</p>
    </div>
    <div class="wrap-b">
      <div class="b-t wow fadeInDown ">{{$t('solution.text3')}}</div>
      <ul class="ul-img">
        <li class="li-img  wow fadeInDown">
          <div class="img-box">
            <img src="../assets/img/solution/Freetouse.svg" v-show="isPC">
            <img src="../assets/img/appSolution/Freetouse.svg" v-show="!isPC">
          </div>
          <div class="li-t">{{$t('solution.text4')}}</div>
          <div class="li-c">{{$t('solution.text5')}}</div>
        </li>
        <li class="li-img  wow fadeInDown">
          <div class="img-box li-white">
            <img src="../assets/img/solution/SimpleUI.svg" v-show="isPC">
            <img src="../assets/img/appSolution/SimpleUI.svg" v-show="!isPC">
          </div>
          <div class="li-t">{{$t('solution.text6')}}</div>
          <div class="li-c">{{$t('solution.text7')}}</div>
        </li>
        <li class="li-img  wow fadeInDown">
          <div class="img-box li-white">
            <img src="../assets/img/solution/Encryptedinformation.svg" v-show="isPC">
            <img src="../assets/img/appSolution/Encryptedinformation.svg" v-show="!isPC">
          </div>
          <div class="li-t">{{$t('solution.text8')}}</div>
          <div class="li-c">{{$t('solution.text9')}}</div>
        </li>
        <li class="li-img  wow fadeInDown">
          <div class="img-box li-white">
            <img src="../assets/img/solution/Instantmessaging.svg" v-show="isPC">
            <img src="../assets/img/appSolution/Instantmessaging.svg" v-show="!isPC">
          </div>
          <div class="li-t">{{$t('solution.text10')}}</div>
          <div class="li-c">{{$t('solution.text11')}}</div>
        </li>
        <li class="li-img wow fadeInDown">
          <div class="img-box">
            <img src="../assets/img/solution/Versionmaintenance.svg" v-show="isPC">
            <img src="../assets/img/appSolution/Versionmaintenance.svg" v-show="!isPC">
          </div>
          <div class="li-t">{{$t('solution.text12')}}</div>
          <div class="li-c">{{$t('solution.text13')}}</div>
        </li>
      </ul>
    </div>
    <div class="wrap-c">
      <div class="b-t wow fadeInDown">{{$t('solution.text14')}}</div>
      <ul class="ul-text   wow fadeInDown">
        <li class="li-text">
          <div class="li-tit">{{$t('solution.text15')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text16')}}</h3></div>
          <div class="li-2">{{$t('solution.text17')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text18')}}</h3></div>
          <div class="li-2">{{$t('solution.text19')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text20')}}</h3></div>
          <div class="li-2">{{$t('solution.text21')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text22')}}</h3></div>
          <div class="li-2">{{$t('solution.text23')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text24')}}</h3></div>
          <div class="li-2">{{$t('solution.text25')}}</div>
        </li>
        <li class="li-text li-two">
          <div class="li-tit">{{$t('solution.text26')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text27')}}</h3></div>
          <div class="li-2">{{$t('solution.text28')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text29')}}</h3></div>
          <div class="li-2">{{$t('solution.text30')}}</div>
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text31')}}</h3></div>
          <div class="li-2">{{$t('solution.text32')}}</div>
<!--          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text33')}}</h3></div>-->
<!--          <div class="li-2">{{$t('solution.text34')}}</div>-->
          <div class="img-box"><img src="../assets/img/solution/Check-3.svg"><h3>{{$t('solution.text35')}}</h3></div>
          <div class="li-2">{{$t('solution.text36')}}</div>
        </li>
        <li class="li-text">
          <div class="li-tit">{{$t('solution.text37')}}</div>
          <div class="li-2 li-3">{{$t('solution.text38')}}</div>
          <div class="btn">{{$t('solution.text39')}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'
  export default {
   data() {
     return{
       isPC: Boolean,
       list: [
         // {img:require('../assets/img/solution/')}
       ]
     }
   },
    mounted () {
      window.onresize = () => {
        if (window.innerWidth > 1200) {
          this.isPC = true
        } else if (window.innerWidth < 1200 && window.innerWidth > 780) {
          this.isPC = false
        } else {
          this.isPC = true
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
  @white: #fff;
  .banner{
    text-align: center;
    background: @blue;
    min-height: 150px;
    padding: 180px 0 160px;
    @media screen and (max-width: 1200px){
      padding: 90px 0 80px;
    }
    .img-banner{
      width: 390px;
      margin: 0 auto;
      @media screen and (max-width: 1200px){
        width: 200px;
      }
      img{
        width: 100%;
      }
    }
    .banner-t{
      margin: 40px 0 10px;
      color: @white;
      font-size: 68px;
      @media screen and (max-width: 1200px){
        font-size: 18px;
        margin: 40px 0 20px;
      }
    }
    .banner-c{
      padding-bottom: 98px;
      color: @white;
      font-size: 24px;
      @media screen and (max-width: 1200px){
        font-size: 14px;
        padding-bottom: 0;
      }
    }
  }
  .wrap-b{
    width: 100%;
    height: auto;
    background: @bg;
    .b-t{
      width: 1300px;
      margin: 0 auto 60px;
      padding-top: 186px;
      font-size: 34px;
      color: @tit;
      @media screen and (max-width: 1300px){
        width: 100%;
        text-align: center;
      }
      @media screen and (max-width: 1200px){
        padding-top: 50px;
        font-size: 18px;
      }
      @media screen and (max-width: 600px){
        text-align: left;
        padding: 50px 20px 0;
        margin-bottom: 20px;
      }
    }
    .ul-img{
      width: 1300px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 1300px){
        width: 100%;
        padding: 0 20px;
        justify-content: center;
      }
      @media screen and (max-width: 916px){
       justify-content: center;
      }
      .li-img{
        width: 380px;
        margin-right: 60px;
        &:nth-child(3n){
          margin-right: 0;
          @media screen and (max-width: 1300px){
            margin-right: 60px;
          }
        }
        @media screen and (max-width: 1200px){
          &:last-child{
            margin-right: 0;
          }
        }
        @media screen and (max-width: 1200px){
          width: 686px;
        }
        @media screen and (max-width: 750px){
          width: 480px;
        }
        @media screen and (max-width: 1000px){
          margin-right: 0!important;
        }
        @media screen and (max-width: 600px){
          margin-right: 0 !important;
          width: 100%;
        }
        .img-box{
          width: 380px;
          height: 340px;
          background:@blue ;
          display: flex;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 1200px){
            width: 686px;
            height: 510px;
          }
          @media screen and (max-width: 750px){
            width: 480px;
            height: 200px;
          }
          @media screen and (max-width: 600px){
            margin-right: 0;
            width: 100%;
            height: 200px;
          }
          &.li-white{
            background:@white ;
          }
        }
        .li-t{
          font-size: 20px;
          color: @tit;
          margin: 20px 0 10px;
          @media screen and (max-width: 1200px){
           font-size: 16px;
          }
        }
        .li-c{
          font-size: 18px;
          color: @grey;
          margin-bottom: 80px;
          @media screen and (max-width: 1200px){
            font-size: 14px;
            margin-bottom: 40px;
          }
        }
      }
    }
  }
  .wrap-c{
    .b-t{
      width: 1300px;
      margin: 0 auto 60px;
      padding-top: 186px;
      font-size: 34px;
      color: @tit;
      @media screen and (max-width: 1300px){
        width: 100%;
       text-align: center;
      }
      @media screen and (max-width: 600px){
       text-align: left;
      }
      @media screen and (max-width: 1200px){
        text-align: center;
        margin: 0 auto 30px;
        padding-top: 40px;
        font-size: 18px;
      }
    }
    .ul-text{
      width: 1300px;
      margin: 0 auto;
      display: flex;
      padding-bottom: 238px;
      flex-wrap: wrap;
      justify-content: center;
      @media screen and (max-width: 1300px){
        width: 100%;

      }
      @media screen and (max-width: 1200px){
        padding: 0 20px 50px;
      }
      @media screen and (max-width: 1300px){
        width: 100%;
      }
      .li-text{
        width: 400px;
        border: 2px solid #e5efff;
        height: auto;
        margin-right: 40px;
        border-radius: 8px;
        padding: 50px 20px 60px;
        @media screen and (max-width: 1200px){
          margin-bottom: 40px;
          width: 450px;
          height: 626px;
        }
        @media screen and (max-width: 950px){
          margin-right: 0;
        }
        @media screen and (max-width: 500px){
          width: 100%;

        }
        &:last-child{
          margin-right: 0;
        }
        &.li-two{
          border: 1px solid #042e7a;
          @media screen and (max-width: 1200px){
            margin-right: 0;
          }
          @media screen and (max-width: 996px){
            margin-right: 40px;
          }
          @media screen and (max-width: 900px){
            margin-right: 0;
          }
        }
        .li-tit{
          font-size: 24px;
          color: @tit;
          @media screen and (max-width: 1200px){
            font-size: 16px;
          }
        }
        .img-box{
          margin:  30px 0 20px;
          display: flex;
          h3{
            margin-left: 10px;
            font-size: 18px;
            color: @tit;
            @media screen and (max-width: 1200px){
              font-size: 14px;
            }
          }
        }
        .btn{
          line-height: 68px;
          text-align: center;
          width: 100%;
          height: 68px;
          border-radius: 4px;
          font-size: 18px;
          color: @blue;
          border: 2px solid #9bcaff;
        }
        .li-2{
          margin-bottom: 20px;
          font-size: 18px;
          color: @grey;
          @media screen and (max-width: 1200px){
            font-size: 14px;
          }
        }
        .li-3{
          line-height: 1.5;
          margin: 30px 0 60px;
        }
      }
    }
  }
</style>
