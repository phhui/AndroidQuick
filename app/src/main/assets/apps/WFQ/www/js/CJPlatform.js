class CJgamePlatform {
    getPlatformId(){
        return 4;
    }
    isDebug(){
        return false;
    }
}
CJgamePlatform.prototype.name = 'cjgame';
window.platform = new CJgamePlatform();