<template>
  <div class="home">
    <div class="banner">
      <div class="img-box fadeInDown wow">
        <img src="@img/home/banner-logo.svg" alt="">
      </div>
      <h1 class="kong fadeInDown wow">KongMessenger</h1>
      <p class="kong1 fadeInDown wow">{{$t('home.text1')}}</p>
      <div class="btn-a fadeInDown wow" @click="$router.push('/download')">{{$t('home.text2')}}</div>
    </div>
    <div class="page1">
      <p class="title-a-c fadeInDown wow">{{$t('home.text3')}}</p>
      <ul class="uls-a">
        <li class="list-a  fadeInLeft wow">
          <div class="img-box">
            <img src="@img/home/page1_1.svg" alt="">
          </div>
          <p class="desc-a">{{$t('home.text4')}}</p>
        </li>
        <li class="list-a  fadeInLeft wow">
          <div class="img-box">
            <img src="@img/home/page1_2.svg" alt="">
          </div>
          <p class="desc-a">{{$t('home.text5')}}</p>
        </li>
        <li class="list-a fadeInRight wow">
          <div class="img-box">
            <img src="@img/home/page1_3.svg" alt="">
          </div>
          <p class="desc-a">{{$t('home.text6')}}</p>
        </li>
        <li class="list-a fadeInRight wow">
          <div class="img-box">
            <img src="@img/home/page1_4.svg" alt="">
          </div>
          <p class="desc-a">{{$t('home.text7')}}</p>
        </li>
      </ul>
      <div class="more-btn  fadeInDown wow" @click="$router.push('/ecc')">{{$t('home.text8')}}</div>
    </div>
    <div class="page2">
      <div class="left-img  fadeInLeft wow">
        <img src="@img/home/page2_ad.png" alt="">
      </div>
      <ul class="right  fadeInRight wow" :class="{'en-right': isEn === 'EN'}">
        <p class="title-a-c">{{$t('home.text40')}}</p>
        <li class="r-list-item">
          <div class="img-box">
            <img src="@img/home/page2_2.svg" alt="">
          </div>
          <div class="r-right-a">
            <h6 class="sm-title">{{$t('home.text11')}}</h6>
            <p class="sm-desc">{{$t('home.text12')}}</p>
          </div>
        </li>
        <li class="r-list-item">
          <div class="img-box">
            <img src="@img/home/page2_1.svg" alt="">
          </div>
          <div class="r-right-a">
            <h6 class="sm-title">{{$t('home.text15')}}</h6>
            <p class="sm-desc">{{$t('home.text16')}}</p>
          </div>
        </li>
        <li class="r-list-item">
          <div class="img-box">
            <img src="@img/home/page2_3.svg" alt="">
          </div>
          <div class="r-right-a">
            <h6 class="sm-title">{{$t('home.text9')}}</h6>
            <p class="sm-desc">{{$t('home.text10')}}</p>
          </div>
        </li>

        <li class="r-list-item">
          <div class="img-box">
            <img src="@img/home/page2_4.svg" alt="">
          </div>
          <div class="r-right-a">
            <h6 class="sm-title">{{$t('home.text13')}}</h6>
            <p class="sm-desc">{{$t('home.text14')}}</p>
          </div>
        </li>

      </ul>
      <div class="page2-img-m">
        <img src="@img/home/page2_ad.png" alt="">
      </div>
    </div>
    <div class="page3">
      <p class="title-a-c fadeInDown wow">{{$t('home.text17')}}</p>
      <ul class="uls-a">
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_1.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text18')}}</p>
          <p class="small-desc">{{$t('home.text19')}}</p>
        </li>
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_2.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text20')}}</p>
          <p class="small-desc">{{$t('home.text21')}}</p>
        </li>
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_3.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text22')}}</p>
          <p class="small-desc">{{$t('home.text23')}}</p>
        </li>
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_4.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text24')}}</p>
          <p class="small-desc">{{$t('home.text25')}}</p>
        </li>
<!--        <li class="list-a fadeInDown wow">-->
<!--          <div class="img-box">-->
<!--            <img src="@img/home/page3_5.svg" alt="">-->
<!--          </div>-->
<!--          <p class="big-title">{{$t('home.text26')}}</p>-->
<!--          <p class="small-desc">{{$t('home.text27')}}</p>-->
<!--        </li>-->
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_5.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text28')}}</p>
          <p class="small-desc">{{$t('home.text29')}}</p>
        </li>
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_6.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text30')}}</p>
          <p class="small-desc">{{$t('home.text31')}}</p>
        </li>
        <li class="list-a fadeInDown wow">
          <div class="img-box">
            <img src="@img/home/page3_7.svg" alt="">
          </div>
          <p class="big-title">{{$t('home.text32')}}</p>
          <p class="small-desc">{{$t('home.text33')}}</p>
        </li>
      </ul>
    </div>
    <div class="page4">
      <div class="title-a-m">{{$t('home.text34')}}</div>
      <div class="left-img  fadeInLeft wow">
        <img src="@img/home/page4_ad.png" alt="">
      </div>
      <div class="right fadeInRight wow">
        <div class="title-a-c">{{$t('home.text34')}}</div>
        <ul class="ul-a">
          <router-link to="/solution?a=1" class="list-a">
            <div class="img-box">
              <img src="@img/home/page4_1.svg" alt="">
            </div>
            <span class="desc">{{$t('home.text35')}}</span>
          </router-link>
          <router-link to="/solution?a=2" class="list-a">
            <div class="img-box">
              <img src="@img/home/page4_2.svg" alt="">
            </div>
            <span class="desc">{{$t('home.text36')}}</span>
          </router-link>
          <li class="list-a">
            <div class="img-box">
              <img src="@img/home/page4_3.svg" alt="">
            </div>
            <span class="desc">{{$t('home.text37')}}</span>
          </li>
          <li class="list-a">
            <div class="img-box">
              <img src="@img/home/page4_4.svg" alt="">
            </div>
            <span class="desc">{{$t('home.text38')}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="page5">
      <div class="title-a-c fadeInDown wow">{{$t('common.text14')}}</div>
      <ul class="product-list pc-list fadeInDown wow">
        <a class="list-img" :href="$store.state.downloadLink.ios" target="_blank"><img src="@img/home/APPStore.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.android" target="_blank"><img src="@img/home/google-play.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.web" target="_blank"><img src="@img/home/web.svg" alt=""></a>
      </ul>
      <ul class="product-list m-list">
        <li class="list-img" :href="$store.state.downloadLink.ios" target="_blank"><img src="@img/common/m_APP_Store.svg" alt=""></li>
        <li class="list-img" :href="$store.state.downloadLink.android" target="_blank"><img src="@img/common/m_google_play.svg" alt=""></li>
        <li class="list-img" :href="$store.state.downloadLink.web" target="_blank"><img src="@img/common/m_web.svg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import {WOW} from 'wowjs'
export default {
  data () {
  	return {
  		isEn: window.localStorage.getItem('_kongTLang_')
    }
  },
	mounted () {
		this.$nextTick(() => {
			var wow = new WOW({
				live: false
			})
			wow.init()
		})
	}
};
</script>

<style scoped lang="less">
img{
  width: 100%;
  display: block;
}
.title-a-c{
  color: #010713;
  font-size: 36px;
  margin-bottom: 80px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
}
.home{
  color: #fff;
  .banner{
    margin-top: -100px;
    width: 100%;
    padding: 200px 0 156px;
    background: url("../assets/img/home/home_bg.svg") no-repeat center / cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
      margin-top: -60px;
      padding: 80px 0;
    }
    .img-box{
      width: 216px;
      display: block;
      @media screen and (max-width: 1200px) {
        width: 150px;
      }
    }
  }
  .kong{
    font-size: 68px;
    margin: 20px 0 30px;
    @media screen and (max-width: 1200px) {
      font-size: 30px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
  .kong1{
    font-size: 24px;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }
  .btn-a{
    font-size: 18px;
    margin-top: 36px;
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background-color: #1f8aff;
    cursor: pointer;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
      width: 240px;
      height: 50px;
      border-radius: 25px;
    }
  }
  .page1{
    padding: 120px 0;
    @media screen and (max-width: 1200px) {
      padding: 40px 0;
    }
    .title-a-c{
      text-align: center;
    }
    .uls-a{
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
      }
      .list-a{
        width: 342px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-right: 1px solid #F1F4F8;
        @media screen and (max-width: 1200px) {
          width: 50%;
          padding: 20px 0;
          &:nth-child(n + 3){
            margin-top: 20px;
          }
        }
        &:last-child{
          border-right: none;
        }
        .desc-a{
          font-size: 20px;
          color: #000;
          margin-top: 30px;
          @media screen and (max-width: 1200px) {
            font-size: 14px;
            margin-top: 20px;
            font-weight: bold;
          }
        }
      }
    }
    .more-btn{
      width: 300px;
      height: 60px;
      border-radius: 30px;
      border: 2px solid #1f8aff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #1f8aff;
      margin: 80px auto 0;
      transition: .3s;
      &:hover{
        background-color: #1f8aff;
        color: #fff;
      }
      @media screen and (max-width: 1200px) {
        margin-top: 30px;
        font-size: 14px;
        width: 240px;
        height: 50px;
        border-radius: 25px;
      }
    }
  }
  .page2{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f8fa;
    padding-top: 80px;
    @media screen and (max-width: 1200px) {
      padding-top: 40px;
      display: block;
    }
    .left-img{
      @media screen and (max-width: 1200px) {
        display: none;
      }
      img{
        width: 565px;
        display: block;
      }
    }
    .right{
      margin-left: 66px;
      &.en-right{
        width: 634px;
        @media screen and (max-width: 1200px) {
          width: 100%;
          margin: 0;
        }
      }
      @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0;
      }
      .title-a-c{
        text-align: left;
        @media screen and (max-width: 1200px) {
          text-align: center;
          margin-bottom: 50px;
        }
      }
      .r-title{
        font-size: 36px;
        color: #010713;
        margin-bottom: 90px;
      }
      .r-list-item{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        &:last-child{
          margin-bottom: 0;
        }
        @media screen and (max-width: 1200px) {
          padding: 0 20px;
          img{
            width: 30px;
          }
        }
        .r-right-a{
          margin-left: 30px;
          .sm-title{
            font-size: 24px;
            color: #000;
            margin-bottom: 15px;
            @media screen and (max-width: 1200px) {
              font-size: 16px;
              margin-bottom: 8px;
              font-weight: bold;
            }
          }
          .sm-desc{
            font-size: 18px;
            line-height: 1.5;
            color: #687992;
            @media screen and (max-width: 1200px) {
              font-size: 14px;
            }
          }
        }
      }
    }
    .page2-img-m{
      display: none;
      @media screen and (max-width: 1200px) {
        display: block;
        width: 80%;
        margin: 0 auto;
        padding: 50px 0;
      }
    }
  }
  .page3{
    padding: 100px 0;
    @media screen and (max-width: 1200px) {
      padding: 40px 0;
    }
    .title-a{
      font-size: 36px;
      color: #010713;
      text-align: center;
      margin-bottom: 100px;
    }
    .uls-a{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 1350px;
      margin: 0 auto;
      @media screen and (max-width: 1400px) {
        padding: 0 20px;
        width: 100%;
      }
      @media screen and (max-width: 1200px) {
        padding: 0;
      }
      .list-a{
        width: 33.33%;
        margin-bottom: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 20px 50px;
        @media screen and (max-width: 1200px) {
          width: 100%;
          margin-bottom: 0;
        }
        .big-title{
          font-size: 24px;
          color: #010713;
          margin: 38px 0 36px;
          @media screen and (max-width: 1200px) {
            font-size: 20px;
          }
        }
        .small-desc{
          font-size: 20px;
          color: #687992;
          line-height: 1.5;
          text-align: center;
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  .page4{
    background-color: #f6f8fa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0 80px ;
    @media screen and (max-width: 1200px) {
      padding: 40px 20px;
      display: block;
    }
    .title-a-c{
      text-align: left;
    }
    .left-img img{
      width: 800px;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
    .title-a-m{
      display: none;
      @media screen and (max-width: 1200px) {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: center;
        color: #010713;
      }
    }
    .right{
      margin-left: 50px;
      @media screen and (max-width: 1200px) {
        margin-left: 0;
      }
      .title-a-c{
        display: block;
        @media screen and (max-width: 1200px) {
          display: none;
        }
      }
      .ul-a{
        @media screen and (max-width: 1200px) {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .list-a{
          width: 400px;
          height: 120px;
          cursor: pointer;
          display: flex;
          padding-left: 40px;
          align-items: center;
          color: #000;
          font-size: 24px;
          border-radius: 8px;
          background-color: #fff;
          margin-top: 30px;
          @media screen and (max-width: 1200px) {
            width: 48%;
            height: 80px;
            padding-left: 5px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 15px;
            &:nth-child(even){
              margin-left: 5px;
            }
            &:nth-child(odd){
              margin-right: 5px;
            }
          }
          .img-box{
            margin-right: 30px;
            @media screen and (max-width: 1200px) {
              margin-right: 8px;
              img{
                width: 30px;
              }
            }
          }
          .desc{
            @media screen and (max-width: 1200px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .page5{
    padding: 100px 0;
    @media screen and (max-width: 1200px) {
      padding: 40px 0;
    }
    .title-a{
      text-align: center;
      font-size: 40px;
      color: #1d3446;
      margin-bottom: 80px;
    }
    .product-list{
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px) {
        padding: 0 10px;
      }
      .list-img{
        margin-right: 44px;
        cursor: pointer;
        display: block;
        &:last-child{
          margin-right: 0;
        }
        @media screen and (max-width: 1200px) {
          margin-right: 8px;
          flex: 1;
        }
      }
    }
    .pc-list{
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    .m-list{
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
