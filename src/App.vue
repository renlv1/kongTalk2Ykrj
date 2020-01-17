<template>
  <div id="app">
    <v-header :class="{'home-header': homeHeader2 === true,'home-header2': homeHeader === true, 'solution-header': solutionShow === true}"></v-header>
    <keep-alive>
      <router-view class="content-m-y" />
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
  	data () {
  		return{
			  homeHeader: false,
			  homeHeader2: false,
			  headerShow: true,
        solutionShow: false,
      }
    },
  	components: {
		  vHeader: resolve => require(['@/components/header.vue'], resolve),
		  vFooter: resolve => require(['@/components/footer.vue'], resolve)
    },
	  mounted () {
  		this.handleScroll()
		  window.addEventListener('scroll', this.handleScroll, true)
	  },
    methods: {
	    handleScroll () {
		    if (this.$route.path === '/') {
			    let topm = document.documentElement.scrollTop || document.body.scrollTop || document.querySelector('#app').scrollTop
          if (topm > 0) {
	          this.homeHeader = true
	          this.homeHeader2 = false
          } else {
	          this.homeHeader2 = true
	          this.homeHeader = false
          }
		    } else {
			    this.homeHeader = false
			    this.homeHeader2 = false
        }
	    },
	    getRoute () {
		    this.handleScroll()
		    if (this.$route.path === '/solution') {
			    this.solutionShow = true
		    } else {
			    this.solutionShow = false
		    }
		    let route = this.$route.path
		    if (route === '/') {
			    document.title = 'KongMessenger ' + this.$t('home.text1')
		    } else if (route === '/function') {
			    document.title = 'KongMessenger' + this.$t('function.text13')
		    } else if (route === '/ecc') {
			    document.title = 'KongMessenger ' + this.$t('common.text4')
		    } else if (route === '/mEcc') {
			    document.title = this.$t('common.text5')
		    } else if (route === '/solution') {
			    document.title = 'KongMessenger ' + this.$t('solution.text1') + ' '+ this.$t('solution.text2')
		    } else if (route === '/download') {
			    document.title = this.$t('download.text1')
		    } else if (route === '/about') {
			    document.title = 'KongMessenger ' + this.$t('common.text10')
		    }
      }
    },
    created() {
  		this.getRoute()
    },
    watch: {
  		'$route': 'getRoute'
    }
  }
</script>

<style lang="less">
@import "assets/css/reset";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  background-color: #fff;
}
.content-m-y{
  padding-top: 100px;
  min-height: calc(100vh - 317px);
  overflow-x: hidden;
  @media screen and (max-width: 1200px) {
    padding-top: 60px;
    min-height: auto;
  }
}
</style>
