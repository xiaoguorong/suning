{//轮播图
	const lunbotu=document.querySelectorAll(".lunbotu");
	const lunbodian=document.querySelectorAll(".banner_btn");
	const lunbo_box=document.querySelector(".banner_middle");
	const left=document.querySelector(".banner_zjian");
	const right=document.querySelector(".banner_yjian");
	lunbodian.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<lunbotu.length;i++){
				lunbodian[i].classList.remove("active");
				lunbotu[i].classList.remove("active");
			}
			this.classList.add("active");
			lunbotu[index].classList.add("active");
			n=index;
		}
	})
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n==lunbotu.length){
			n=0;
		}
		if(n<0){
			n=lunbotu.length-1;
		}
		for(let i=0;i<lunbotu.length;i++){
				lunbotu[i].classList.remove("active");
				lunbodian[i].classList.remove("active");
			}
		lunbodian[n].classList.add("active");
		lunbotu[n].classList.add("active");
	 }
	lunbo_box.onmouseenter=function(){
		clearInterval(t);
	}
	lunbo_box.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	right.onclick=function(){//点击太快会轮播图
		if(flag){
			flag=false;
			move();
		}
	}
	left.onclick=function(){
		if(flag){
			n-=2;
			flag=false;
			move();
		}
	}
	lunbotu.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
{//滚动高度到达一定高度时出现dingbu和左边导航
	const allitem=document.querySelector(".allitem");
	const left_nav=document.querySelector(".left_nav");
	window.onscroll=function(){
		let scrollHeight=document.documentElement.scrollTop;
		if(scrollHeight>1200){
			allitem.style.display="block"
		}else{
			allitem.style.display="none"
		}
		if(scrollHeight>2900){
			left_nav.style.display="block"
		}else{
			left_nav.style.display="none"
		}
	}
}
{//点击左边导航内容随着移动
	let ss=document.querySelectorAll(".left_nav>ul>li");
	let bb=document.querySelectorAll(".bb");
	ss.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=bb[index].offsetTop-50;
		//document.documentElement.scrollTop=oo;
			let sudu=(ot-document.documentElement.scrollTop)/8;
			let now=document.documentElement.scrollTop;
			let time=0;
			let t=setInterval(function(){
				time+=25;
           	 	now+=sudu;
            	if(time==200){
            		clearInterval(t);
           		}
            document.documentElement.scrollTop=now;
			},25)
		}
	})
//左边导航的颜色会随着内容移动变化
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for (let i=0;i<bb.length;i++){
			if(st>=bb[i].offsetTop-50){
				for (let i=0;i<ss.length;i++){
					ss[i].classList.remove("active");
				}
				ss[i].classList.add("active");
			}
		}
	})
}
{//点击top回到顶部
	let dingbu=document.querySelector(".dingbu");
	dingbu.onclick=function(){
		let st=document.documentElement.scrollTop;
		var t=setInterval(function(){
			st-=1000;
			if (st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},10)
	}
}
{//大聚惠移动效果
	let dajuhui=document.querySelector(".guanggao3_bottom_yidong");
	let dajuhui_left=document.querySelector(".guanggao3_bottom_jiantou");
	let dajuhui_right=document.querySelector(".guanggao3_bottom_jiantou1");
	let n=1;
	let flag=true;
	dajuhui_right.onclick=function(){  
		if(flag){
		n++;
		flag=false;
		dajuhui.style.transition="all 1s";
		dajuhui.style.marginLeft=-1000*n+"px";		
	}}
	dajuhui.addEventListener("transitionend",function(){
		flag=true;
		if(n==4){
			dajuhui.style.transition="none";
			dajuhui.style.marginLeft=-1000+"px";	
			n=1;
		}
		if(n==0){
			dajuhui.style.transition="none";
			dajuhui.style.marginLeft=-3000+"px";	
			n=3;
		}
	})
	dajuhui_left.onclick=function(){ 
		if(flag) {
		n--;
		flag=false;
		dajuhui.style.transition="all 1s";
		dajuhui.style.marginLeft=-1000*n+"px";		
	}}
}
{//排行榜移动效果
	const paihangbang=document.querySelector(".paihangbang_yidong");
	const paihangbang_left=document.querySelector(".guanggao3_bottom_jiantou2");
	const paihangbang_right=document.querySelector(".guanggao3_bottom_jiantou3");
	const paihangbang_lunbodian=document.querySelectorAll(".guanggao4_3_btn");
	let p=1;
	let flag=true;
	paihangbang_lunbodian.forEach(function(ele,index){
		ele.onmouseenter=function(){			
			for(let i=0;i<3;i++){
				paihangbang_lunbodian[i].classList.remove("guanggao4_3_btn_bg");
			}
			p=index+1;
			paihangbang.style.transition="all 1s";
			paihangbang.style.marginLeft=-390*p+"px";
			this.classList.add("guanggao4_3_btn_bg");
		}
	})
	paihangbang_left.onclick=function(){
		if(flag){
		p--;
		flag=false;
		paihangbang.style.transition="all 1s";
		paihangbang.style.marginLeft=-390*p+"px";
		for(let i=0;i<3;i++){
				paihangbang_lunbodian[i].classList.remove("guanggao4_3_btn_bg");
			}
		if(p==0){
			paihangbang_lunbodian[2].classList.add("guanggao4_3_btn_bg");
		}else{
			paihangbang_lunbodian[p-1].classList.add("guanggao4_3_btn_bg");
	}}}
	paihangbang_right.onclick=function(){
		if(flag){
		p++;
		flag=false;
		paihangbang.style.transition="all 1s";
		paihangbang.style.marginLeft=-390*p+"px";
		for(let i=0;i<3;i++){
			paihangbang_lunbodian[i].classList.remove("guanggao4_3_btn_bg");
		}
		if(p==4){
			paihangbang_lunbodian[0].classList.add("guanggao4_3_btn_bg");
		}else{
			paihangbang_lunbodian[p-1].classList.add("guanggao4_3_btn_bg");
	}}}
	paihangbang.addEventListener("transitionend",	
		function(){
		flag=true;
		if(p==4){
			paihangbang.style.transition="none";
			paihangbang.style.marginLeft=-390+"px";
			p=1;
		}
		if(p==0){
			paihangbang.style.transition="none";
			paihangbang.style.marginLeft=-390*3+"px";
			p=3;
		}
	})
}
{//视频移动效果
	const shipin_yidongb=document.querySelectorAll(".ad_right_middle");
	const shipin_yidongs=document.querySelectorAll(".shipinshipin");
	shipin_yidongs.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<shipin_yidongb.length;i++){
				shipin_yidongs[i].classList.remove("active");
				shipin_yidongb[i].classList.remove("active");
			}
			this.classList.add("active");
			shipin_yidongb[index].classList.add("active");
			n=index;
		}
	})
}
{//视频翻转效果
	let shipinfanzhuan=document.querySelector(".ad_right_middle_bottom ul");
	let shipinfanzhuan_left=document.querySelector(".ad_right_middle_bottom_jiantou1");
	let shipinfanzhuan_right=document.querySelector(".ad_right_middle_bottom_jiantou2");
	let n=1;
	let flag=true;
	shipinfanzhuan_left.onclick=function(){
		if(flag){
		n--;
		flag=false;
		shipinfanzhuan.style.transition="all 1s";
		shipinfanzhuan.style.marginLeft=-390*n+"px";
	}}
	shipinfanzhuan_right.onclick=function(){
		if(flag){
		n++;	
		flag=false;
		shipinfanzhuan.style.transition="all 1s";
		shipinfanzhuan.style.marginLeft=-390*n+"px";
	}}
	shipinfanzhuan.addEventListener("transitionend",function(){
		flag=true;
		if(n==3){
		shipinfanzhuan.style.transition="none";
		shipinfanzhuan.style.marginLeft=-390+"px";
		n=1;
		}
		if(n==0){
		shipinfanzhuan.style.transition="none";
		shipinfanzhuan.style.marginLeft=-390*2+"px";
		n=2;
		}
	})
}
{//乐玶购翻转效果
	let lepingfanzhuan=document.querySelector(".ad_leping_bottom");
	let lepingfanzhuan_left=document.querySelector(".ad_right_middle_bottom_jiantou5");
	let lepingfanzhuan_right=document.querySelector(".ad_right_middle_bottom_jiantou6");
	let n=1;
	let flag=true;
	lepingfanzhuan_left.onclick=function(){
		if(flag){
		flag=false;
		n--;
		lepingfanzhuan.style.transition="all 1s";
		lepingfanzhuan.style.marginLeft=-590*n+"px";
	}}
	lepingfanzhuan_right.onclick=function(){
		if(flag){
		flag=false;
		n++;
		lepingfanzhuan.style.transition="all 1s";	
		lepingfanzhuan.style.marginLeft=-590*n+"px";
	}}
	lepingfanzhuan.addEventListener("transitionend",function(){
		flag=true;
		if(n==4){
			lepingfanzhuan.style.transition="none";
			lepingfanzhuan.style.marginLeft=-590+"px";
			n=1;
		}
		if(n==0){
			lepingfanzhuan.style.transition="none";
			lepingfanzhuan.style.marginLeft=-590*3+"px";
			n=3;
		}
	})
}
{//右边导航top
	function rightnav(rightnav){
	let right_nav_top=rightnav.querySelector(".rightnavleft");
	let right_nav_dingbu=rightnav.querySelector(".rightnavright");
	right_nav_top.onmouseenter=function(){
		right_nav_dingbu.style.width=70+"px";
	}
	right_nav_top.onmouseleave=function(){
		right_nav_dingbu.style.width=0+"px";
	}
	}
	let rightnavlist=document.querySelectorAll(".rightnav");
	rightnavlist.forEach(function(ele){
		rightnav(ele);
	})
}
{//点击top回到顶部
	let right_nav_top=document.querySelector(".right_nav_top");
	right_nav_top.onclick=function(){
		let st=document.documentElement.scrollTop;
		var t=setInterval(function(){
			st-=1000;
			if (st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},10)
	}
}
{//顶部翻动
 	const nav_type=document.querySelectorAll(".banner_left li");
	const nav_item=document.querySelectorAll(".banner_left_tutu");
	console.log(nav_item)
	nav_type.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<nav_type.length;i++){
				nav_item[i].classList.remove("banner_left_tutu_xiaoguo");
			}
			nav_item[index].classList.add("banner_left_tutu_xiaoguo");
		}
		ele.onmouseleave=function(){
			nav_item[index].classList.remove("banner_left_tutu_xiaoguo");
		}
	})
}
{//关注滚动
let guanzhu_all=document.querySelector(".guanzhu_all");
let guanzhuguanzhu=document.querySelector(".guanzhuguanzhu");
let guanzhu_all1=document.querySelectorAll(".guanzhu_all1");
let m=1;
function guanzhu_all_gun(){
	m++;
	guanzhu_all.style.transition="all 0.5s linear";
  	guanzhu_all.style.marginTop=-118*m+"px";
  	guanzhu_all.addEventListener("transitionend",function(){
  		if(m==2){		
  			guanzhu_all.style.transition="none";	
			guanzhu_all.style.marginTop=0+"px";
			m=0;
  		}})
}
let tt=setInterval(guanzhu_all_gun,1000);
guanzhuguanzhu.onmouseenter=function(){
	clearInterval(tt);
}
guanzhuguanzhu.onmouseleave=function(){
	tt=setInterval(guanzhu_all_gun,1000);
}
}