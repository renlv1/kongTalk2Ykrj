<template>
  <div class="about-w">
    <div class="about-m">
      <h3 class="title">{{$t('about.text4')}}</h3>
      <div class="content-w">
        <p class="text">{{$t('about.text2')}}{{$t('about.text3')}}</p>
      </div>
      <div class="img-box">
        <img src="@img/about/page1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
.about-m{
  padding: 150px 0;
  @media screen and (max-width: 1200px) {
    padding: 50px 20px;
  }
  .title{
    font-size: 68px;
    color: #042e7a;
    text-align: center;
    @media screen and (max-width: 1200px) {
      font-size: 30px;
      line-height: 1.5;
      font-weight: bold;
      text-align: left;
    }
  }
  .content-w{
    width: 1200px;
    margin: 30px auto 60px;
    @media screen and (max-width: 1300px) {
      width: 100%;
      margin: 20px auto 30px;
    }
    .text{
      font-size: 18px;
      color: #687992;
      text-align: center;
      line-height: 1.5;
      @media screen and (max-width: 1200px) {
        text-align: left;
        font-size: 14px;
      }
    }
  }
  .img-box{
    img{
      display: block;
      margin: 0 auto;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
}
</style>
