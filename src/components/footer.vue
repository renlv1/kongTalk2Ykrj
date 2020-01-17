<template>
  <div class="footer-w">
    <div class="footer-a">
      <ul class="uls">
        <router-link to="/" tag="li" class="list cursor">Kong messenger</router-link>
        <router-link to="/function" tag="li" class="list cursor">{{$t('common.text2')}}</router-link>
        <router-link to="/ecc" tag="li" class="list cursor">{{$t('common.text3')}}</router-link>
        <router-link to="/solution" tag="li" class="list cursor">{{$t('common.text6')}}</router-link>
        <router-link to="/download" tag="li" class="list cursor">{{$t('common.text9')}}</router-link>
        <router-link to="/about" tag="li" class="list cursor">{{$t('common.text10')}}</router-link>
      </ul>
      <ul class="uls">
        <router-link to="/download" tag="li" class="list cursor">Application</router-link>
        <a target="_blank" :href="downloadUrl.ios" class="list cursor">iOS</a>
        <a target="_blank" :href="downloadUrl.android" class="list cursor">Android</a>
        <a target="_blank" :href="downloadUrl.web" class="list cursor">MAC or PC web version</a>
      </ul>
      <ul class="uls">
        <li class="list">Cooperation</li>
        <li class="list">QQ：1915028726</li>
        <li class="list">TEL：+14435939752</li>
        <li class="list">E-mail：<span class="email">phanthicamly27@gmail.com</span></li>
      </ul>
      <ul class="uls">
        <li class="list">Provide</li>
        <router-link to="/solution?a=1" class="list" >{{$t('home.text35')}}</router-link>
        <router-link to="/solution?a=2" class="list">{{$t('home.text36')}}</router-link>
        <li class="list">{{$t('home.text37')}}</li>
        <li class="list">{{$t('home.text38')}}</li>
      </ul>
    </div>
    <div class="footer-a">
      <p class="copyright">©2019 KongMessenger Software Open Co.,Ltd. Rights Reserved</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	import axios from 'axios'
	export default {
		data() {
			return {
				downloadUrl: ''
			}
		},
		created () {
			this.getUrl()
		},
		methods: {
			getUrl () {
				axios.get('https://api.kongkong-chat.com/version/getDownloadUrl').then(res => {
					if (res.status === 200) {
						this.downloadUrl = res.data.data
						this.$store.commit('SET_LINK', res.data.data)
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
.email{
  word-break: break-all;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    display: inline-block;
  }
}
.cursor{
  cursor: pointer;
}
.footer-w{
  background-color: #042e7a;
  padding: 50px 0 20px;
  min-height: 317px;
  @media screen and (max-width: 1200px) {
    padding: 20px 0 20px;
  }
  .footer-a{
    width: 1320px;
    margin: 0 auto;
    display: flex;
    color: #fff;
    font-size: 14px;
    @media screen and (max-width: 1400px) {
      width: 100%;
      padding: 0 50px;
    }
    @media screen and (max-width: 1200px) {
      padding: 0 20px;
      flex-wrap: wrap;
    }
    .copyright{
      font-size: 14px;
      color: rgba(255,255,255,.8);
      margin-top: 50px;
      @media screen and (max-width: 1200px){
        margin-top: 0;
        color: rgba(255,255,255,.6);
      }
    }
    .uls{
      flex: 1;
      &:last-child{
        margin-right: 0;
        flex: none;
      }
      @media screen and (max-width: 1200px){
        width: 50%;
        flex: none;
        margin-bottom: 30px;
        &:nth-child(even) {
          width: 40%;
        }
        &:nth-child(odd) {
          width: 60%;
          padding-right: 10px;
        }
      }
      .list{
        margin-bottom: 20px;
        line-height: 1.5;
        display: block;
        &:first-child{
          margin-bottom: 30px;
          @media screen and (max-width: 1200px){
            margin-bottom: 20px;
            color: rgba(255,255,255,.6);
          }
        }
      }
    }
  }
}
</style>
