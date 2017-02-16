window.onload=function(){
	var oUl=document.getElementById('ul');
	var aLi=oUl.getElementsByTagName('li');
    var aDiv=document.getElementsByTagName('div');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			this.getElementsByTagName('div')[0].style.display='block';
			this.getElementsByTagName('a')[0].style.background='red';
		}
		aLi[i].onmouseout=function(){
			this.getElementsByTagName('div')[0].style.display='none';
			this.getElementsByTagName('a')[0].style.background='none';
		}
	}
}