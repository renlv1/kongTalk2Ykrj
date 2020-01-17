<template>
    <div class="mEcc-warp">
      <div class="main">
        <div class="banner-c">
          <div class="content">
            <div class="bgImg fadeInDown wow"></div>
            <h4 class="title fadeInDown wow">{{$t('common.text5')}}</h4>
            <div class="title-m fadeInDown wow">KongMessenger</div>
            <div class="title-m fadeInDown wow">{{$t('about.text7')}}</div>
            <p class="article fadeInDown wow">{{$t('ecc.text1')}}</p>
          </div>
        </div>
        <div class="banner">
          <div class="title fadeInDown wow">{{$t('mEcc.text1')}}</div>
          <div class="banner-img fadeInDown wow"></div>
          <div class="tit tit-a fadeInDown wow">{{$t('mEcc.text2')}}</div>
          <p class="text fadeInDown wow">{{$t('mEcc.text3')}}</p>
          <p class="text fadeInDown wow">{{$t('mEcc.text4')}}</p>
          <p class="text fadeInDown wow">{{$t('mEcc.text5')}}</p>
          <div class="tit tit-b fadeInDown wow">{{$t('mEcc.text6')}}</div>
          <div class="banner-list-img fadeInDown wow">
            <div class="img"></div>
          </div>
        </div>
        <div class="detail">
          <div class="title fadeInDown wow">{{$t('mEcc.text7')}}</div>
          <div class="textp fadeInDown wow" v-for="(item,index) in $t('mEcc.detailList')">{{item.text}}</div>
          <div class="detail-img fadeInDown wow"></div>
        </div>
      </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.mEcc-warp{
  width: 100%;
  .banner-c{
    width: 100%;
    @media @pc {
      height: auto;
      padding-bottom: 0;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media @iPad {
      height: auto;
    }
    background-color: @fff;
    .allCenter;
    align-items: flex-start;
    .title-m{
      display: none;
      color: #042e7a;
      font-size: 30px;
      @media @pc {
        display: block;
      }
    }
    .content{
      width: auto;
      padding-top: 132px;
      padding-bottom: 80px;
      text-align: center;
      @media @pc {
        padding: 80px 0 50px;
      }
      .bgImg{
        width: 364px;
        height: 352px;
        background: url("../assets/eccImg/banner.svg") no-repeat center;
        background-size: cover;
        .mAuto;
        @media @iPad {
          width: 182px;
          height: 176px;
          margin-bottom: 20px;
        }
      }
      .title{
        font-size: 68px;
        color: @title_color;
        padding: 50px 0 30px;
        @media @pc {
          display: none;
        }
        @media @iPad {
          font-size: 28px;
        }
      }
      .article{
        color: @black;
        font-size: 24px;
        @media @iPad {
          font-size: 14px;
          padding-top: 30px;
        }
      }
    }
  }
  .main{
    width: 100%;
    .banner{
      width: 100%;
      padding-top: 150px;
      padding-bottom: 56px;
      background-color: #f6f8fa;
      @media @pc{
        padding: 40px 20px 40px;
        height: auto;
      }
      .title{
        width: 775px;
        .mAuto;
        font-size: 34px;
        color: @tit_color;
        padding-bottom: 90px;
        text-align: center;
        @media @iPad{
          width: 100%;
          font-size: 18px;
          text-align: left;
          padding-bottom: 30px;
        }
      }
      .banner-img{
        width: 1438px;
        height: 530px;
        background: url("../assets/eccImg/mEcc-banner.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        @media screen and (max-width: 1438px){
          width: 1200px;
        }
        @media @pc{
          width: 100%;
          height: 1100px;
          background: url("../assets/eccImg/app/banner.svg") no-repeat center;
          background-size: contain;
        }
        @media @iPad{
          width: 344px;
          height: 840px;
        }
        @media @mob{
          width: 334px;
          height: 840px;
        }
      }
      .tit{
        width: 1320px;
        .mAuto;
        font-size: 18px;
        color: @tit_color;
        @media screen and (max-width:1320px){
          width: 1200px;
        }
        @media @pc{
          width: 100%;
        }
      }
      .tit-a{
        padding-top: 112px;
        @media @iPad{
          padding-top: 50px;
        }
      }
      .tit-b{
        padding-top: 60px;
      }
      .text{
        width: 1320px;
        @media screen and (max-width:1320px){
          width: 1200px;
        }
        @media @pc{
          width: 100%;
          font-size: 16px;
          padding-bottom: 10px;
        }
        .mAuto;
        font-size: 18px;
        color: @text_color;
        &:nth-of-type(1){
          padding-top: 20px;
        }
        &:nth-last-of-type{
          padding-bottom: 60px;
        }
      }
      .banner-list-img{
        width: 1320px;
        height: 308px;
        .mAuto;
        margin-top: 90px;
        @media @pc{
          width: 1200px;
          height: auto;
        }
        @media @iPad{
          width: 100%;
        }
        .img{
          width: 1130px;
          height: 308px;
          background: url("../assets/eccImg/a-rsa-algorithm.svg") no-repeat center;
          background-size: contain;
          @media @pc{
            width: 640px;
            height: 689px;
            background: url("../assets/eccImg/app/a-rsa-algorithm.svg")no-repeat center;
            background-size: contain;
            margin: 0 auto;
          }
          @media @iPad{
            width: 344px;
            height: 350px;
          }
          @media @mob{
            width: 334px;
          }
        }
      }
    }
    .detail{
      width: 100%;
      height: auto;
      padding: 140px 0 180px;
      @media @pc{
        padding: 0 20px;
      }
      @media @iPad{
        padding: 50px 20px;
      }
      .title{
        font-size: 34px;
        color: @tit_color;
        text-align: center;
        padding-bottom: 90px;
        @media @pc{
         padding-top: 50px;
        }
        @media @iPad{
          padding-top: 0;
          padding-bottom: 20px;
          font-size: 18px;
        }
      }
      .textp{
        width: 1400px;
        .mAuto;
        font-size: 18px;
        color: @text_color;
        padding-bottom: 30px;
        @media screen and (max-width: 1400px){
          width: 1200px;
        }
        @media @pc{
          width: 100%;
          font-size: 16px;
          padding-bottom: 20px;
        }
      }
      .detail-img{
        width: 1400px;
        height: 400px;
        background: url("../assets/eccImg/kongTalk-detail.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        @media screen and (max-width: 1400px){
          width: 1200px;
        }
        @media @pc{
          width: 654px;
          background: url("../assets/eccImg/app/kongTalk-detail.svg") no-repeat center;
          background-size: contain;
          margin-top: 100px;
        }
        @media @iPad{
          margin-top: 34px;
          width: 344px;
          height: 268px;
        }
        @media @mob{
          width: 334px;
        }
      }
    }
  }
}
</style>
<script>
	import {WOW} from 'wowjs'

	export default {
		data() {
			return {
				name: ''
			}
		},
		mounted() {
			this.$nextTick(() => {
				var wow = new WOW({
					live: false
				})
				wow.init()
			})
		}
	}
</script>
