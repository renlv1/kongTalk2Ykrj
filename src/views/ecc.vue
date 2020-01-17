<template>
  <div class="eccOne-warp">
    <div class="banner">
      <div class="content">
        <div class="bgImg fadeInDown wow">
          <img src="../assets/eccImg/ecc_banner.svg" alt="">
        </div>
        <h4 class="title fadeInDown wow">{{$t('about.text5')}}</h4>
        <p class="article fadeInDown wow">{{$t('about.text6')}}</p>
      </div>
    </div>
    <div class="symmetrical-encryption">
      <h4 class="title fadeInDown wow">{{$t('ecc.text2')}} </h4>
      <p class="article fadeInDown wow">{{$t('ecc.text3')}}</p>
      <p class="article fadeInDown wow">{{$t('ecc.text4')}}</p>
      <div class="hell-kong-img fadeInDown wow"></div>
      <div class="des-content fadeInDown wow">
        <div class="title">{{$t('ecc.text5')}}</div>
        <ul>
          <li v-for="(item,index) in $t('ecc.eccDes')" :key="index">
            <div class="tit">{{item.tit}}</div>
            <div class="textp">{{item.text}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="one-way">
      <div class="title fadeInDown wow">{{$t('ecc.text6')}}</div>
      <div class="article fadeInDown wow">{{$t('ecc.text6_1')}}{{$t('ecc.text6_2')}}</div>
      <div class="one-way-img fadeInDown wow"></div>
      <div class="include-con fadeInDown wow">
        <div class="tit">{{$t('ecc.text10')}}{{$t('ecc.text11')}}</div>
        <div class="tit">{{$t('ecc.text12')}}{{$t('ecc.text13')}}</div>
      </div>
    </div>
    <div class="asymmetric-encryption">
      <div class="title fadeInDown wow">{{$t('ecc.text14')}}</div>
      <p class="textp fadeInDown wow">{{$t('ecc.text15')}}</p>
      <p class="textp fadeInDown wow">{{$t('ecc.text16')}}</p>
      <p class="textp fadeInDown wow">{{$t('ecc.text17')}}</p>
      <div class="ae-img fadeInDown wow"></div>
      <div class="des-content fadeInDown wow">
        <div class="title">{{$t('ecc.text18')}}</div>
        <ul>
          <li v-for="(item,index1) in $t('ecc.rsaDatas')" :key="index1">
            <div class="tit">{{item.tit}}</div>
            <div class="textp">{{item.text}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="key-exchange">
      <div class="title fadeInDown wow">{{$t('ecc.text20')}}</div>
      <p class="article fadeInDown wow">{{$t('ecc.text21')}}</p>
      <div class="key-img fadeInDown wow"></div>
      <div class="des-content fadeInDown wow">
        <div class="title">{{$t('ecc.text21_1')}}</div>
        <ul>
          <li>
            <div class="tit">{{$t('ecc.text22_tit')}}</div>
            <div class="textp">{{$t('ecc.text22')}}</div>
          </li>
          <li>
            <div class="tit">{{$t('ecc.text23_tit')}}</div>
            <div class="textp">{{$t('ecc.text23')}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-key-infrastructure">
      <div class="title fadeInDown wow">{{$t('ecc.text24')}}</div>
      <p class="article fadeInDown wow">{{$t('ecc.text25')}}</p>
      <p class="article fadeInDown wow">{{$t('ecc.text26')}}</p>
      <div class="p-key-img fadeInDown wow"></div>
      <div class="last-text fadeInDown wow">{{$t('ecc.text27')}}</div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  .des-content-comm {
    width: 800px;
    @media @pc {
      width: 700px;
    }
    @media @iPad {
      width: 100%;
      font-size: 14px;
    }
    .mAuto;
    color: @black;
    font-size: 18px;
    text-align: left;

    .title {
      padding-bottom: 30px;
      font-size: 18px;
    }

    ul {
      li {
        margin-bottom: 20px;

        .tit {
          font-size: 20px;
          margin-bottom: 10px;
          @media @pc {
            font-size: 18px;
          }
        }

        .textp {
          width: 100%;
          font-size: 16px;
          color: @text_color;
          line-height: 1.5;
          @media @pc {
            font-size: 14px;
          }
        }
      }
    }
  }

  .eccOne-warp {
    width: 100%;

    .banner {
      width: 100%;
      @media @pc {
        height: auto;
        padding-bottom: 160px;
        padding-left: 20px;
        padding-right: 20px;
      }
      @media @iPad {
        height: auto;
        padding-bottom: 40px;
      }
      background-color: @fff;
      .allCenter;
      align-items: flex-start;

      .content {
        width: auto;
        padding-top: 132px;
        padding-bottom: 80px;
        text-align: center;
        @media @pc {
          padding-top: 40px;
          padding-bottom: 0;
        }

        .bgImg {
          .mAuto;
          @media @iPad {
            width: 280px;
            img {
              width: 100%;
            }
          }
        }

        .title {
          font-size: 68px;
          color: @title_color;
          padding: 50px 0 30px;
          @media @iPad {
            font-size: 28px;
          }
        }

        .article {
          color: @black;
          font-size: 24px;
          @media @iPad {
            font-size: 14px;
          }
        }
      }
    }

    .symmetrical-encryption {
      width: 100%;
      height: auto;
      padding: 112px 0 146px;
      background-color: @area_bg_color;
      text-align: center;
      @media @pc {
        // 1200px
        padding-left: 20px;
        padding-right: 20px;
      }
      @media @iPad {
        // 768px
        padding: 50px 20px 40px;
        text-align: left;
      }

      .title {
        font-size: 34px;
        color: @tit_color;
        @media @iPad {
          font-size: 18px;
        }
      }

      .article {
        width: 1080px;
        @media @pc {
          width: 700px;
        }
        @media @iPad {
          width: 100%;
        }
        .mAuto;
        font-size: 16px;
        color: @text_color;
        line-height: 1.5;
        @media @iPad {
          width: 100%;
          text-align: left;
          font-size: 14px;
        }

        &:nth-of-type(1) {
          padding-top: 20px;
        }
      }

      .hell-kong-img {
        width: 648px;
        height: 400px;
        background: url("../assets/eccImg/symmetric-encryption.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        margin-top: 66px;
        margin-bottom: 146px;
        @media @iPad {
          width: 324px;
          height: 200px;
          margin-top: 50px;
          margin-bottom: 50px;
        }
      }

      .des-content {
        .des-content-comm;
      }
    }

    .one-way {
      width: 100%;
      padding: 112px 0 122px;
      text-align: center;
      @media @iPad {
        padding: 50px 20px 40px;
        text-align: left;
      }

      .title {
        font-size: 34px;
        color: @tit_color;
        @media @iPad {
          font-size: 18px;
        }
      }

      .article {
        width: 1200px;
        font-size: 16px;
        color: @text_color;
        line-height: 1.5;
        .mAuto;
        margin-bottom: 20px;
        &:nth-of-type(2) {
          padding-top: 20px;
          @media @iPad {
            padding-top: 15px;
          }
        }

        &:nth-of-type(3) {
          padding-bottom: 100px;
          @media @iPad {
            padding-bottom: 50px;
          }
        }
        @media @pc {
          width: 740px;
          font-size: 14px;
        }
        @media @iPad {
          width: 100%;
          font-size: 14px;
          text-align: left;
        }
      }

      .one-way-img {
        width: 904px;
        height: 396px;
        background: url("../assets/eccImg/one-way-hash-encryption.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        @media @pc {
          width: 700px;
        }
        @media @iPad {
          width: 342px;
          height: 152px;
        }
      }

      .c-are {
        width: 764px;
        font-size: 20px;
        color: #2d3235;
        margin: 0 auto;
        text-align: left;
        padding-top: 112px;
        @media @iPad {
          font-size: 14px;
          text-align: left;
          padding-top: 50px;
        }
      }

      .include-con {
        padding-top: 10px;
        text-align: center;
        margin: 50px auto 0;
        color: #687992;
        font-size: 16px;
        .tit{
          margin-top: 10px;
        }
      }
    }

    .asymmetric-encryption {
      width: 100%;
      padding: 112px 0;
      background-color: @area_bg_color;
      text-align: center;
      @media @pc {
        padding-left: 20px;
        padding-right: 20px;
      }
      @media @iPad {
        padding: 50px 20px;
      }

      .title {
        font-size: 34px;
        color: @tit_color;
        padding-bottom: 20px;
        @media @iPad {
          font-size: 18px;
          text-align: left;
        }
      }

      .textp {
        width: 1200px;
        color: @text_color;
        font-size: 16px;
        .mAuto;
        line-height: 1.5;
        @media @pc {
          width: 100%;
          font-size: 14px;
        }
        @media @iPad {
          text-align: left;
          &:nth-of-type(2) {
            padding: 10px 0;
          }
        }
      }

      .ae-img {
        width: 914px;
        height: 400px;
        .mAuto;
        background: url("../assets/eccImg/asymmetric-encryption.svg") no-repeat center;
        background-size: contain;
        @media @pc {
          width: 700px;
        }
        @media @iPad {
          width: 344px;
          height: 152px;
          margin: 50px auto;
        }
        @media @mob {
          width: 334px;
        }
      }

      .des-content {
        .des-content-comm;
        padding-top: 100px;
        @media @iPad {
          padding-top: 0;
          ul {
            li {
              margin-bottom: 4px;

              .textp {
                font-size: 14px;
              }
            }
          }
        }
      }
    }

    .key-exchange {
      padding: 112px 0 122px;
      text-align: center;
      @media @iPad {
        padding: 50px 20px;
        text-align: left;
      }

      .title {
        font-size: 34px;
        color: @tit_color;
        @media @iPad {
          font-size: 18px;
        }
      }

      .article {
        font-size: 16px;
        padding: 20px 0 70px;
        color: @text_color;
        @media @pc {
          font-size: 14px;
          padding: 15px 0 0;
        }
      }

      .key-img {
        width: 1200px;
        height: 400px;
        background: url("../assets/eccImg/key-exchange.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        @media @pc {
          width: 700px;
        }
        @media @iPad {
          width: 344px;
          height: 150px;
          margin: 50px auto;
        }
        @media @mob {
          width: 334px;
          height: 150px;
          margin: 50px auto;
        }
      }

      .des-content {
        .des-content-comm;
        padding-top: 124px;
        @media @iPad {
          padding-top: 0;
          ul {
            li {
              .tit {
                font-size: 16px;
              }
            }
          }
        }
      }
    }

    .p-key-infrastructure {
      width: 100%;
      background-color: @area_bg_color;
      padding: 112px 0 78px;
      text-align: center;
      @media @iPad {
        padding: 50px 20px;
        text-align: left;
      }

      .title {
        font-size: 34px;
        color: @tit_color;
        padding-bottom: 20px;
        @media @iPad {
          font-size: 18px;
        }
      }

      .article {
        width: 940px;
        .mAuto;
        font-size: 16px;
        color: @text_color;
        line-height: 1.5;
        @media @pc {
          width: 700px;
          font-size: 14px;
        }
        @media @iPad {
          width: 100%;
        }
      }

      .p-key-img {
        width: 908px;
        height: 400px;
        background: url("../assets/eccImg/public-key-Infrastructure.svg") no-repeat center;
        background-size: contain;
        .mAuto;
        margin: 60px auto;
        @media @pc {
          width: 700px;
          height: 300px;
        }
        @media @iPad {
          width: 344px;
          height: 150px;
          margin: 50px auto;
        }
        @media @mob {
          width: 334px;
        }
      }

      .last-text {
        width: 1000px;
        .mAuto;
        line-height: 1.5;
        color: @text_color;
        font-size: 16px;
        @media @pc {
          width: 700px;
        }
        @media @iPad {
          width: 100%;
          font-size: 14px;
          text-align: center;
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
