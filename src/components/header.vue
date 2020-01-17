<template>
  <div class="header-w">
<!--    PC端导航-->
    <div class="header-t">
      <h1 class="logo_tit">
        <router-link to="/">
          <img src="@img/common/logo.svg" alt="">
        </router-link>
      </h1>
      <ul class="head-nav">
        <li v-for="(item,index) in nav" :key="index" :class="{'has-child': item.child, 'active-n': isActive2 && index === 1}" @click="gotoPath(item.path)">
          <router-link excat :to="item.path" class="text" :class="{'router-link-exact-active': isActive === index}">
            <span class="info-text">{{item.text}}</span>
            <div class="child" v-if="item.child" @click.stop>
              <router-link :to="childItem.path" excat v-for="(childItem, i) in item.child" :key="i">{{childItem.text}}</router-link>
            </div>
          </router-link>
        </li>
        <li class="lang-list">
          <div class="lang-list-m">
            <div class="info-text">{{currentLang}}</div>
            <div class="select-l">
              <div class="select-item" v-for="(item, i) in langArr" :key="i" @click="switchLang(item)">{{item.text}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
<!--    移动端 导航-->
    <div class="mobile-w">
      <div class="mobile-header">
        <h1 class="logo_tit" :class="{'opacity-logo': mLogoShow}">
          <router-link to="/">
            <img src="@img/common/m_logo.svg" alt="">
          </router-link>
        </h1>
        <div class="menu" @click="menuShow = true">
          <img src="@img/common/m_menu.svg" alt="">
        </div>
      </div>
      <div class="mobile-menu" v-show="menuShow">
        <div class="close" @click="closeMenu">
          <img src="@img/common/m_close.svg" alt="">
        </div>
        <div class="kong" @click="goHome">
          <img src="@img/common/m_muen_k.svg" alt="">
        </div>
        <ul class="m-uls">
          <li class="m-list" v-for="(item, index) in nav" @click="mSelect(item, index)" :key="index" :class="{'drop-list': item.child, 'current-list': currentShow1 && flagIndex === index}">
            <div class="text" :class="{'drop-down': item.child}">{{item.text}}</div>
            <div class="m-child" @click.stop v-show="item.child">
              <div class="text" v-for="(child, mindex) in item.child" :key="mindex" @click="goto(child)">{{child.text}}</div>
            </div>
          </li>
          <li class="m-list drop-list" @click="mSelect(1, 5)" :class="{'current-list': currentShow2 && flagIndex === 5}">
            <div class="text drop-down">{{currentLang}}</div>
            <div class="m-child" @click.stop>
              <div class="text"  v-for="(child, mindex) in langArr" :key="mindex" @click="switchLang(child)">{{child.text}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				isActive2: false,
				mLogoShow: false,
				menuShow: false,
				flagIndex: -1,
				currentShow2: false,
				currentShow1: false,
				lang: '',
				currentLang: 'CN',
				isActive: false,
        langArr: [
	        {text: 'EN', lang: 'EN'},
	        {text: this.$t('common.text13'), lang: 'CN'},
        ],
				nav: [
					{
						text: this.$t('common.text2'),
						path: '/function',
					},
					{
						text: this.$t('common.text3'),
						path: '/ecc',
						child: [
							{
								text: this.$t('common.text4'),
								path: '/ecc'
							},
							{
								text: this.$t('common.text5'),
								path: '/mEcc'
							}
						]
					},
					{
						text: this.$t('common.text6'),
						path: '/solution',
					},
					{
						text: this.$t('common.text9'),
						path: '/download'
					},
					{
						text: this.$t('common.text10'),
						path: '/about'
					}
				]
      }
		},
    created () {
			if (window.localStorage.getItem('_kongTLang_')) {
				if (window.localStorage.getItem('_kongTLang_') === 'CN') {
					this.currentLang = this.$t('common.text13')
        } else {
					this.currentLang = 'EN'
        }
      } else {
				this.currentLang = window.localStorage.getItem('_kongTLang_')
      }
    },
    mounted () {
			this.mLogoShowFn()
    },
    methods: {
	    mLogoShowFn () {
	    	if (this.$route.path === '/' || this.$route.path === '/solution') {
	    		this.mLogoShow = true
        } else {
			    this.mLogoShow = false
        }
	    	this.isActive2 = false
	    	if (this.$route.path === '/mEcc') {
	    		this.isActive2 = true
        }
      },
	    closeMenu () {
	    	this.menuShow = false
		    this.currentShow1 = false
		    this.currentShow2 = false
		    this.flagIndex = -1
      },
	    goHome () {
		    this.menuShow = false
		    this.flagIndex = -1
		    this.currentShow1 = false
		    this.currentShow2 = false
		    this.$router.push('/')
      },
	    goto (item) {
		    this.$router.push(item.path)
		    this.menuShow = false
		    this.flagIndex = -1
		    this.currentShow1 = false
		    this.currentShow2 = false
      },
	    mSelect(item, index) {
		    this.flagIndex = -1
	    	if (index === 1) {
	    		this.flagIndex = index
	    		this.currentShow1 = !this.currentShow1
			    this.currentShow2 = false
        } else if (index === 5) {
			    this.flagIndex = 5
			    this.currentShow1 = false
			    this.currentShow2 = !this.currentShow2
        } else {
	    		this.menuShow = false
			    this.flagIndex = -1
			    this.currentShow1 = false
			    this.currentShow2 = false
          this.$router.push(item.path)
        }
      },
	    switchLang (obj) {
		    window.localStorage.setItem('_kongTLang_', obj.lang)
        this.currentLang = obj.text
		    window.location.reload()
	    },
	    gotoPath (path) {
		    if (this.$route.path !== path) {
			    this.$router.push(path)
		    }
	    }
    },
    watch: {
			'$route': 'mLogoShowFn'
    }
	}
</script>

<style lang="less" scoped>
  @blue: #042e7a;
  .header-w{
    width: 100%;
    height: 100px;
    background-color: #042e7a;
    font-size: 14px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    &.home-header{
      background-color: transparent;
    }
    &.home-header2{
      background-color: #06296E;
    }
    &.solution-header{
      background-color: #1f8aff;
      .head-nav{
        li:hover{
          color: #06296E;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      height: 60px;
    }
    .header-t{
      width: 1320px;
      height: 100%;
      transition: .3s;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1400px){
        width: 100%;
        padding: 0 50px;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
      .logo_tit a{
        display: block;
      }
    }
    .head-nav{
      height: 100%;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      li{
        transition: .3s;
        cursor: pointer;
        position: relative;
        text-align: center;
        color: #fff;
        width: auto;
        padding: 0 30px;
        font-size: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        &:hover{
          color: #1f8aff;
        }
        &:nth-child(3) {
          .router-link-exact-active{
            color: #042e7a !important;
          }
        }
        .text{
          position: relative;
          width: 100%;
          &.router-link-exact-active{
            color: #1f8aff;
          }
          .info-text{
            display: inline-flex;
            line-height: 1.2;
          }
        }
        &.has-child .info-text:after{
          content: '';
          display: inline-block;
          border: 6px solid transparent;
          border-top-color: #fff;
          vertical-align: middle;
          margin-top: 6px;
          margin-left: 10px;
        }
        &.has-child.active-n {
          color: #1f8aff;
        }
        &:hover{
          .child{
            opacity: 1;
            top: 35px;
            visibility: visible;
            transition: .3s .1s;
          }
          .text:after{
            border-top-color: #fff;
          }
        }
        &:last-child{
          padding-right: 0;
          .text{
            line-height: 36px;
            height: 36px;
            border: 1px solid #fff;
            border-radius: 20px;
            padding: 0 25px;
            color: #fff;
            transition: .5s;
            &:hover{
              background:#fff;
              color: #fff;
            }
          }
        }
      }
      .child{
        position: absolute;
        opacity: 0;
        text-align: left;
        right: 0;
        top: 20px;
        line-height: 30px;
        visibility: hidden;
        background: #fff;
        box-shadow: 0 2px 5px rgba(9,131,239,.15);
        padding: 10px 0;
        a{
          display: block;
          padding: 10px 30px;
          white-space: nowrap;
          text-align: right;
          color: #042e7a;
          &:hover, &.router-link-exact-active{
            color: #1f8aff;
          }
        }
        &.hide{
          visibility: hidden !important;
          transition: none !important;
        }
      }
    }
    .lang-list{
      &:hover .select-l{
        opacity: 1;
        top: 35px;
        visibility: visible;
        transition: .3s .1s;
      }
      .lang-list-m{
        position: relative;
      }
      .info-text{
        &::after{
          content: '';
          display: inline-block;
          border: 6px solid transparent;
          border-top-color: #fff;
          vertical-align: middle;
          margin-left: 10px;
          left: auto;
          right: -15px;
          top: 5px;
          bottom: auto;
        }
      }
      .select-l{
        position: absolute;
        opacity: 0;
        text-align: left;
        right: 0;
        top: 20px;
        line-height: 30px;
        visibility: hidden;
        background: #fff;
        box-shadow: 0 2px 5px rgba(9, 131, 239, 0.15);
        padding: 10px 0;
        .select-item{
          padding: 10px 30px;
          white-space: nowrap;
          text-align: right;
          color: #042e7a;
        }
      }
    }
    .switch-lang{
      color: #fff !important;
      cursor: auto !important;
      span{
        cursor: pointer;
      }
      span.active{
        color: #fff !important;
      }
    }
    .mobile-w{
      display: none;
      @media screen and (max-width: 1200px) {
        height: 100%;
        display: block;
      }
      .mobile-header{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
      }
      .logo_tit{
        padding: 10px 10px 10px 30px;
        &.opacity-logo{
          opacity: 0;
        }
        a{
          display: block;
        }
        img{
          height: 40px;
          display: block;
        }
      }
      .menu{
        display: block;
        padding: 10px 30px 10px  10px;
        img{
          height: 26px;
          display: block;
        }
      }
      .mobile-menu{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #1f8aff;
        padding: 0 20px;
        overflow: auto;
        .close{
          position: absolute;
          right: 10px;
          top: 10px;
          img{
            width: 50px;
            height: 50px;
          }
        }
        .kong{
          margin: 60px 0 30px;
          @media screen and (max-width: 340px) {
            margin: 50px 0 15px;
          }
          img{
            height: 40px;
            display: block;
          }
        }
        .m-uls{
          .m-list{
            border-bottom: 1px solid rgba(255,255,255,.2);
            padding: 20px 0 20px 10px;
            font-size: 16px;
            color: #fff;
            height: 62px;
            overflow: hidden;
            transition: all .3s linear;
            &.drop-list{
              padding-left: 0;
            }
            &.current-list{
              height: 159px;
              .drop-down::after{
                transform: rotate(180deg);
                margin-top: -6px;
              }
              .drop-down{
                border-bottom: 1px solid rgba(255,255,255,.2);
              }
            }
            .m-child{
              .text{
                font-size: 14px;
                display: block;
                padding: 15px 0 7px 10px;
                &:last-child {
                  padding-bottom: 0;
                }
              }
            }
          }
          .drop-down{
            width: 70%;
            padding-bottom: 20px;
            padding-left: 10px;
            &::after{
              content: '';
              display: inline-block;
              border: 6px solid transparent;
              border-top-color: #fff;
              vertical-align: middle;
              margin-top: 6px;
              margin-left: 10px;
              transition: all .3s linear;
            }
          }
        }
      }
    }
  }
</style>
