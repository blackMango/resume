$(function(){
	$('#fullpage').fullpage({
		navigation:true,
		navigationPosition:'right',
		anchors:['s1','s2','s3','s4','s5','s6'],
		/*afterLoad:function(link,index){
        	switch(link){
        		case 's2':fn2();
        		break;
        		case 's3':fn3();
        		break;
        	}
		},
		//index,nextIndex,direction
		//离开的序号 到达的序号 滚动的方向
		onLeave:function(index,nextIndex,direction){
            switch(index){
            	case 2:back2(); break;
            	case 3:back3(); break;

            }
		}*/
	})
})