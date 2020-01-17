<template>
  <div class="download-w">
    <div class="download-a">
      <div class="img-box">
        <img src="@img/download/banner.svg" alt="">
      </div>
      <h3 class="title">{{$t('download.text2')}}</h3>
      <p class="desc">{{$t('download.text1')}}</p>
      <ul class="product-list pc-img">
        <a class="list-img" :href="$store.state.downloadLink.ios" target="_blank"><img src="@img/home/APPStore.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.android" target="_blank"><img src="@img/home/google-play.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.web" target="_blank"><img src="@img/home/web.svg" alt=""></a>
      </ul>
      <ul class="product-list m-img">
        <a class="list-img" :href="$store.state.downloadLink.ios" target="_blank"><img src="@img/home/m_APP_store.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.android" target="_blank"><img src="@img/home/m_Google_play.svg" alt=""></a>
        <a class="list-img" :href="$store.state.downloadLink.web" target="_blank"><img src="@img/home/m_web.svg" alt=""></a>
      </ul>
      <div class="qrcode-w" v-show="isShow">
        <div id="qrcode"></div>
        <p class="text-a">{{$t('common.text15')}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import QRCode from 'qrcodejs2'
	export default {
		data() {
			return {
				isShow: false
      }
		},
    computed: {
	    config () {
	    	return this.$store.state.downloadLink.ios
      }
    },
    created () {
	    var u = navigator.userAgent;
	    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	    let isScan = this.$route.query.sao
	    if (isScan) {
		    if (this.isAndroid) {
			    location.href = this.$route.query.appAnd
		    }
		    if (this.isiOS) {
			    location.href = this.$route.query.appIos
		    }
	    }
    },
    mounted() {
			setTimeout(() => {
				let that = this
				let qrcode = new QRCode('qrcode', {
					width: 200,
					height: 200,        // 高度
					text: `${window.location.href}?sao=1&appIos=${this.$store.state.downloadLink.ios}&appAnd=${this.$store.state.downloadLink.android}`
				})
        that.isShow = true
      }, 1000)
    }
	}
</script>

<style scoped lang="less">
.download-w{
  background-color: #042e7a;
}
.download-a{
  color: #fff;
  padding: 180px 0 80px;
  @media screen and (max-width: 1200px) {
    padding: 50px 20px 30px 20px;
  }
  .img-box{
    img{
      display: block;
      margin: 0 auto;
      @media screen and (max-width: 1200px) {
        width: 120px;
      }
    }
  }
  .title{
    font-size: 68px;
    margin: 20px 0;
    text-align: center;
    @media screen and (max-width: 1200px) {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.3;
    }
  }
  .desc{
    text-align: center;
    font-size: 24px;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
      line-height: 1.5;
    }
  }
  .product-list{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      img{
        width: 300px;
      }
    }
    .list-img{
      margin-right: 44px;
      cursor: pointer;
      display: block;
      &:last-child{
        margin-right: 0;
      }
      @media screen and (max-width: 1200px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
  .pc-img{
    @media screen and (max-width: 1200px){
      display: none;
    }
  }
  .m-img{
    @media screen and (min-width: 1200px){
      display: none;
    }
  }
  .qrcode-w{
    margin: 0 auto;
    #qrcode{
      margin: 70px auto 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: #fff;
      border-radius: 4px;
      width: 220px;
      @media screen and (max-width: 1200px) {
        margin: 30px auto;
      }
    }
    .text-a{
      text-align: center;
      font-size: 18px;
      color: #fff;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
    }
  }
}
</style>
