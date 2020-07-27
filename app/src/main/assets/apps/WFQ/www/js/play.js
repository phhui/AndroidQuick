defUrl="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8";
var isFirst=true;
var player;
function play(url,hideBtn){
	player=new chplayer({container: 'video',variable:'player',video: url||defUrl,html5m3u8:true});
	$(".video").css("display","block");
	$(".videoMask").css("display","block");
	if(hideBtn)player.hideCloseBtn();
}
function closeVideo(){
	if(player){
		player.pause();
		player=null;
		console.log("play.js:close video");
	}
	$(".video").css("display","none");
	EventHelper.call("js_video_exit");
}
function showPlayer(){
	setTimeout(()=>{
		$(".videoMask").css("display","none");
	},500);
}
function playOrPause(play){
	if(player)player.playOrPause(play);
}