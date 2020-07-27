window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","eui.LoginUI":"resource/skins/login/login.exml","TreasureItem":"resource/eui_skins/TreasureItem.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay","redPoint"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i(),this.redPoint_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.smoothing = false;
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 27.5;
		t.source = "";
		t.verticalCenter = -28;
		t.visible = false;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = "10";
		t.right = "10";
		t.size = 30;
		t.textColor = 0x2e2e2e;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 10;
		t.right = 10;
		t.size = 32;
		t.text = "1234";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/login/CloseBtnSkin.exml'] = window.CloseBtnSkin = (function (_super) {
	__extends(CloseBtnSkin, _super);
	function CloseBtnSkin() {
		_super.call(this);
		this.skinParts = ["bg","selectIcon","iconDisplay","redPoint","imgDouble"];
		
		this.currentState = "up";
		this.height = 60;
		this.width = 130;
		this.elementsContent = [this.bg_i(),this.selectIcon_i(),this.iconDisplay_i(),this.redPoint_i(),this.imgDouble_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("selectIcon","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",0.9),
					new eui.SetProperty("iconDisplay","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("selectIcon","visible",false),
					new eui.SetProperty("iconDisplay","alpha",0.5)
				])
		];
	}
	var _proto = CloseBtnSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selectIcon_i = function () {
		var t = new eui.Image();
		this.selectIcon = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 27.5;
		t.source = "";
		t.verticalCenter = -28;
		t.visible = false;
		return t;
	};
	_proto.imgDouble_i = function () {
		var t = new eui.Image();
		this.imgDouble = t;
		t.horizontalCenter = 29;
		t.source = "";
		t.verticalCenter = -26;
		t.visible = false;
		return t;
	};
	return CloseBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/additional/AdditionalSkin.exml'] = window.AdditionalSkin = (function (_super) {
	__extends(AdditionalSkin, _super);
	function AdditionalSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AdditionalSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 2;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Button1_i(),this._Button2_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 347;
		t.scale9Grid = new egret.Rectangle(16,28,54,56);
		t.source = "ewaineirong_duihuakuang";
		t.width = 711;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(41,8,9,49);
		t.source = "ewaineirong_wzdw";
		t.width = 693;
		t.x = 8.13;
		t.y = 27;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.21;
		t.icon = "ewaineirong_gman";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 361.13;
		t.x = 170.93;
		t.y = 120.1;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.21;
		t.icon = "ewaineirong_bxy";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 273.13;
		t.x = 217.5;
		t.y = 243.71;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ewaineirong_5z";
		t.x = 177.5;
		t.y = 118.1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "肯定要偷看一下啊，嘻嘻~";
		t.x = 150.06;
		t.y = 37.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "198";
		t.textColor = 0xff5e79;
		t.x = 285.06;
		t.y = 138.71;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "原价396";
		t.textColor = 0x773918;
		t.x = 273.06;
		t.y = 176.71;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 5;
		t.source = "ewaineirong_hongxian";
		t.x = 261.5;
		t.y = 179;
		return t;
	};
	return AdditionalSkin;
})(eui.Skin);generateEUI.paths['resource/skins/collection/CollectionItemSkin.exml'] = window.CollectionItemSkin = (function (_super) {
	__extends(CollectionItemSkin, _super);
	function CollectionItemSkin() {
		_super.call(this);
		this.skinParts = ["img","imgMask","lockIcon","videoIcon","goldIcon","price","priceBox"];
		
		this.elementsContent = [this.img_i(),this.imgMask_i(),this.lockIcon_i(),this.videoIcon_i(),this.priceBox_i()];
	}
	var _proto = CollectionItemSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 160;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.width = 160;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ty_zezhao";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.lockIcon_i = function () {
		var t = new eui.Image();
		this.lockIcon = t;
		t.source = "ui_1.zhencang_suo";
		return t;
	};
	_proto.videoIcon_i = function () {
		var t = new eui.Image();
		this.videoIcon = t;
		t.source = "ui_1.zhencang_sptb";
		t.x = 101.7;
		t.y = 1.64;
		return t;
	};
	_proto.priceBox_i = function () {
		var t = new eui.Group();
		this.priceBox = t;
		t.elementsContent = [this.goldIcon_i(),this.price_i()];
		return t;
	};
	_proto.goldIcon_i = function () {
		var t = new eui.Image();
		this.goldIcon = t;
		t.source = "ui_1.zhencang_zstb";
		t.x = 16.569;
		t.y = 119;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.BitmapLabel();
		this.price = t;
		t.x = 60;
		t.y = 132;
		return t;
	};
	return CollectionItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/collection/CollectionSkin.exml'] = window.CollectionSkin = (function (_super) {
	__extends(CollectionSkin, _super);
	var CollectionSkin$Skin1 = 	(function (_super) {
		__extends(CollectionSkin$Skin1, _super);
		function CollectionSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("selected",
					[
						new eui.SetProperty("_Image1","source","ui_1.zhencang_hy_2")
					])
			];
		}
		var _proto = CollectionSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ui_1.zhencang_hy_1";
			t.percentWidth = 100;
			return t;
		};
		return CollectionSkin$Skin1;
	})(eui.Skin);

	var CollectionSkin$Skin2 = 	(function (_super) {
		__extends(CollectionSkin$Skin2, _super);
		function CollectionSkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("selected",
					[
						new eui.SetProperty("_Image1","source","ui_1.zhencang_cz_2")
					])
			];
		}
		var _proto = CollectionSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ui_1.zhencang_cz_1";
			t.percentWidth = 100;
			return t;
		};
		return CollectionSkin$Skin2;
	})(eui.Skin);

	function CollectionSkin() {
		_super.call(this);
		this.skinParts = ["bg","dbGroup2","girl","txtImg","btnClose","listBg","tab1","tab0","list","sc","list2","sc2","body","img"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.body_i(),this.img_i()];
	}
	var _proto = CollectionSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.body_i = function () {
		var t = new eui.Group();
		this.body = t;
		t.alpha = 1;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.verticalCenter = -40;
		t.width = 715;
		t.elementsContent = [this.dbGroup2_i(),this.girl_i(),this.txtImg_i(),this._Image2_i(),this.btnClose_i(),this.listBg_i(),this._Image3_i(),this._Group1_i(),this.tab1_i(),this.tab0_i(),this.sc_i(),this.sc2_i()];
		return t;
	};
	_proto.dbGroup2_i = function () {
		var t = new eui.Group();
		this.dbGroup2 = t;
		t.x = 26;
		t.y = 183;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zhencang_ggy_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.girl_i = function () {
		var t = new eui.Image();
		this.girl = t;
		t.source = "zhencang_ggy_2";
		t.x = -400;
		t.y = 121;
		return t;
	};
	_proto.txtImg_i = function () {
		var t = new eui.Image();
		this.txtImg = t;
		t.source = "zhencang_ggy_3";
		t.x = 730;
		t.y = 219.65;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ui_1.zhencang_bt";
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.icon = "ui_1.zhencang_gb";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 87.38;
		t.x = 620;
		t.y = 150;
		return t;
	};
	_proto.listBg_i = function () {
		var t = new eui.Rect();
		this.listBg = t;
		t.ellipseHeight = 45;
		t.ellipseWidth = 45;
		t.fillColor = 0xFFFFFF;
		t.height = 550;
		t.horizontalCenter = 0.5;
		t.width = 710;
		t.y = 366.36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 520;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(22,23,16,14);
		t.source = "ui_1.shangcheng_dw2";
		t.width = 690;
		t.y = 382.44;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 407.709;
		t.x = 273;
		t.y = 271.84;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 70;
		t.y = 68;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 148.348;
		t.y = 68;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 291;
		t.y = 68;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 362.79;
		t.y = 68;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.ToggleSwitch();
		this.tab1 = t;
		t.label = "";
		t.x = 485.71;
		t.y = 916.41;
		t.skinName = CollectionSkin$Skin1;
		return t;
	};
	_proto.tab0_i = function () {
		var t = new eui.ToggleSwitch();
		this.tab0 = t;
		t.label = "";
		t.x = 260;
		t.y = 916.41;
		t.skinName = CollectionSkin$Skin2;
		return t;
	};
	_proto.sc_i = function () {
		var t = new eui.Scroller();
		this.sc = t;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.visible = false;
		t.width = 674;
		t.x = 22.76;
		t.y = 389.36;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = CollectionItemSkin;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.sc2_i = function () {
		var t = new eui.Scroller();
		this.sc2 = t;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.width = 674;
		t.x = 22.76;
		t.y = 400;
		t.viewport = this.list2_i();
		return t;
	};
	_proto.list2_i = function () {
		var t = new eui.List();
		this.list2 = t;
		t.itemRendererSkinName = CollectionItemSkin;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.alpha = 0;
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 725;
		t.height = 1450;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "pic1";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 720;
		return t;
	};
	return CollectionSkin;
})(eui.Skin);generateEUI.paths['resource/skins/creationRole/CreationSkin.exml'] = window.CreationSkin = (function (_super) {
	__extends(CreationSkin, _super);
	function CreationSkin() {
		_super.call(this);
		this.skinParts = ["userName","suiJiBtn","queDingBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = CreationSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ty_db_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.userName_i(),this.suiJiBtn_i(),this.queDingBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "denglu_srdk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.TextInput();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maxChars = 4;
		t.textColor = 0x2e2e2e;
		t.width = 410;
		t.x = 68.92;
		t.y = 114.7;
		return t;
	};
	_proto.suiJiBtn_i = function () {
		var t = new eui.Button();
		this.suiJiBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.06;
		t.icon = "dengluye_tz";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 79.32;
		t.x = 496.42;
		t.y = 81.5;
		return t;
	};
	_proto.queDingBtn_i = function () {
		var t = new eui.Button();
		this.queDingBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.06;
		t.icon = "denglu_jryx";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 329.38;
		t.x = 144;
		t.y = 267;
		return t;
	};
	return CreationSkin;
})(eui.Skin);generateEUI.paths['resource/skins/dicountgift/DiscountBtnSkin.exml'] = window.DiscountBtnSkin = (function (_super) {
	__extends(DiscountBtnSkin, _super);
	function DiscountBtnSkin() {
		_super.call(this);
		this.skinParts = ["bg","selectIcon","iconDisplay","time","state"];
		
		this.height = 130;
		this.width = 100;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DiscountBtnSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.selectIcon_i(),this.iconDisplay_i(),this.time_i(),this.state_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "xianshi_xsth";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectIcon_i = function () {
		var t = new eui.Image();
		this.selectIcon = t;
		t.source = "";
		t.x = 45;
		t.y = 60;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.source = "";
		t.x = 45;
		t.y = 60;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 21;
		t.stroke = 1;
		t.strokeColor = 0xea526b;
		t.text = "11:33:33";
		t.textColor = 0xffffff;
		t.y = 108;
		return t;
	};
	_proto.state_i = function () {
		var t = new eui.Image();
		this.state = t;
		t.horizontalCenter = 0.5;
		t.source = "ui_1.xianshi_klq";
		t.visible = false;
		t.y = 108;
		return t;
	};
	return DiscountBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/dicountgift/DiscountGiftSkin.exml'] = window.DiscountGiftSkin = (function (_super) {
	__extends(DiscountGiftSkin, _super);
	function DiscountGiftSkin() {
		_super.call(this);
		this.skinParts = ["clickGroup","buyBtn","rightBtn","leftBtn","day","progress","list","time","get","group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DiscountGiftSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.clickGroup_i(),this.group_i()];
		return t;
	};
	_proto.clickGroup_i = function () {
		var t = new eui.Group();
		this.clickGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 10;
		t.elementsContent = [this._Image2_i(),this.buyBtn_i(),this.rightBtn_i(),this.leftBtn_i(),this.day_i(),this._Image3_i(),this.progress_i(),this._Scroller1_i(),this.time_i(),this.get_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "xsth_hb";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 300;
		t.y = 527;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Button();
		this.rightBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.icon = "xianshi_xiangzuo";
		t.label = "";
		t.scaleX = 1;
		t.skinName = "CloseBtnSkin";
		t.x = 552;
		t.y = 309;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Button();
		this.leftBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.icon = "xianshi_xiangzuo";
		t.label = "";
		t.scaleX = -1;
		t.skinName = "CloseBtnSkin";
		t.x = 152;
		t.y = 309;
		return t;
	};
	_proto.day_i = function () {
		var t = new eui.Image();
		this.day = t;
		t.source = "xianshi_tiansu_1";
		t.x = 43;
		t.y = 142;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xianshi_jdt_1";
		t.x = 251;
		t.y = 186;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.source = "xianshi_jdt_3";
		t.x = 251;
		t.y = 186;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.horizontalCenter = 0;
		t.y = 287;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = DiscountItemSkin;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0xea39b6;
		t.text = "1:33:33 后过期";
		t.textColor = 0xfff8e1;
		t.y = 491;
		return t;
	};
	_proto.get_i = function () {
		var t = new eui.Image();
		this.get = t;
		t.horizontalCenter = 0;
		t.source = "jieshu_ylq";
		t.visible = false;
		t.y = 264.34;
		return t;
	};
	return DiscountGiftSkin;
})(eui.Skin);generateEUI.paths['resource/skins/dicountgift/DiscountItemSkin.exml'] = window.DiscountItemSkin = (function (_super) {
	__extends(DiscountItemSkin, _super);
	function DiscountItemSkin() {
		_super.call(this);
		this.skinParts = ["good","price"];
		
		this.height = 110;
		this.width = 210;
		this.elementsContent = [this.good_i(),this.price_i()];
	}
	var _proto = DiscountItemSkin.prototype;

	_proto.good_i = function () {
		var t = new eui.Image();
		this.good = t;
		t.source = "xianshi_tb_ys";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "x 600";
		t.textColor = 0xf46cb9;
		t.verticalCenter = 0;
		t.width = 85;
		t.x = 124;
		return t;
	};
	return DiscountItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/extravideo/ExtraBuySkin.exml'] = window.ExtraBuySkin = (function (_super) {
	__extends(ExtraBuySkin, _super);
	function ExtraBuySkin() {
		_super.call(this);
		this.skinParts = ["bg","selectIcon","iconDisplay","sale","curPrice","oldPrice","redPoint","imgDouble"];
		
		this.currentState = "up";
		this.height = 102;
		this.elementsContent = [this.bg_i(),this.selectIcon_i(),this.iconDisplay_i(),this.sale_i(),this.curPrice_i(),this.oldPrice_i(),this._Image1_i(),this.redPoint_i(),this.imgDouble_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("selectIcon","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",0.9),
					new eui.SetProperty("iconDisplay","scaleY",0.9),
					new eui.SetProperty("sale","scaleX",0.9),
					new eui.SetProperty("sale","scaleY",0.9),
					new eui.SetProperty("curPrice","scaleX",0.9),
					new eui.SetProperty("curPrice","scaleY",0.9),
					new eui.SetProperty("oldPrice","scaleX",0.9),
					new eui.SetProperty("oldPrice","scaleY",0.9)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("selectIcon","visible",false),
					new eui.SetProperty("iconDisplay","alpha",0.5)
				])
		];
	}
	var _proto = ExtraBuySkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selectIcon_i = function () {
		var t = new eui.Image();
		this.selectIcon = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "ewaineirong_gman";
		t.verticalCenter = 0;
		return t;
	};
	_proto.sale_i = function () {
		var t = new eui.Image();
		this.sale = t;
		t.horizontalCenter = -123;
		t.source = "ewaineirong_5z";
		t.y = -3.47;
		return t;
	};
	_proto.curPrice_i = function () {
		var t = new eui.Label();
		this.curPrice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "198";
		t.textAlign = "center";
		t.textColor = 0xFF5E79;
		t.width = 95.33;
		t.x = 103.89;
		t.y = 13;
		return t;
	};
	_proto.oldPrice_i = function () {
		var t = new eui.Label();
		this.oldPrice = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 21;
		t.text = "原价:3961";
		t.textAlign = "center";
		t.textColor = 0x773918;
		t.width = 119;
		t.x = 89.88;
		t.y = 49;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.source = "ewaineirong_hongxian";
		t.touchEnabled = false;
		t.x = 98;
		t.y = 60;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.horizontalCenter = 27.5;
		t.source = "";
		t.verticalCenter = -28;
		t.visible = false;
		return t;
	};
	_proto.imgDouble_i = function () {
		var t = new eui.Image();
		this.imgDouble = t;
		t.horizontalCenter = 29;
		t.source = "";
		t.verticalCenter = -26;
		t.visible = false;
		return t;
	};
	return ExtraBuySkin;
})(eui.Skin);generateEUI.paths['resource/skins/extravideo/ExtraVideoSkin.exml'] = window.ExtraVideoSkin = (function (_super) {
	__extends(ExtraVideoSkin, _super);
	function ExtraVideoSkin() {
		_super.call(this);
		this.skinParts = ["bg","buyBtn","closeBtn","content","group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.group_i()];
	}
	var _proto = ExtraVideoSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 0;
		t.horizontalCenter = 0.5;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.buyBtn_i(),this.closeBtn_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 347;
		t.scale9Grid = new egret.Rectangle(16,28,54,56);
		t.source = "ewaineirong_duihuakuang";
		t.width = 711;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(41,8,9,49);
		t.source = "ewaineirong_wzdw";
		t.width = 693;
		t.x = 8.13;
		t.y = 27;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.21;
		t.icon = "ewaineirong_gman";
		t.label = "";
		t.skinName = "ExtraBuySkin";
		t.width = 361.13;
		t.x = 170.93;
		t.y = 120.1;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.21;
		t.icon = "ui_1.ewaineirong_bxy";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 273.13;
		t.x = 217.5;
		t.y = 243.71;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "肯定要偷看一下啊，嘻嘻~";
		t.y = 37.5;
		return t;
	};
	return ExtraVideoSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GMSkin.exml'] = window.GMSkin = (function (_super) {
	__extends(GMSkin, _super);
	function GMSkin() {
		_super.call(this);
		this.skinParts = ["msg","sure"];
		
		this.height = 72;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GMSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.msg_i(),this.sure_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 50;
		t.source = "ty_zezhao";
		t.width = 720;
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.TextInput();
		this.msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.textColor = 0xffffff;
		t.width = 669;
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.sure_i = function () {
		var t = new eui.Button();
		this.sure = t;
		t.anchorOffsetY = 0;
		t.icon = "ty_zyk_sz";
		t.label = "BTN";
		t.x = 606;
		t.y = -2.5;
		return t;
	};
	return GMSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/LoadingBarSkin.exml'] = window.LoadingBarSkin = (function (_super) {
	__extends(LoadingBarSkin, _super);
	function LoadingBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 47;
		this.width = 601;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = LoadingBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "jiazai_jdt_0";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "jiazai_jdt_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return LoadingBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["bar","barText"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiazai_db";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.bar_i(),this.barText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiazai_LOGO";
		t.y = -82.18;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.83;
		t.horizontalCenter = 0;
		t.skinName = "LoadingBarSkin";
		t.value = 50;
		t.width = 510.34;
		t.y = 231.62;
		return t;
	};
	_proto.barText_i = function () {
		var t = new eui.Label();
		this.barText = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "100%";
		t.textColor = 0xf7c3c3;
		t.verticalAlign = "middle";
		t.y = 269.85;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/login/LoginPanelSkin.exml'] = window.LoginPanelSkin = (function (_super) {
	__extends(LoginPanelSkin, _super);
	function LoginPanelSkin() {
		_super.call(this);
		this.skinParts = ["loginBg","yhbg","aniGroup","userName","msgTxt","loginBtn","group","btnGG","btnFB","btnGuest","overseasGroup","kuaiJieDengLu","zhongGao"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.kuaiJieDengLu_i(),this.zhongGao_i()];
	}
	var _proto = LoginPanelSkin.prototype;

	_proto.kuaiJieDengLu_i = function () {
		var t = new eui.Group();
		this.kuaiJieDengLu = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.loginBg_i(),this.yhbg_i(),this.aniGroup_i(),this.group_i(),this.overseasGroup_i()];
		return t;
	};
	_proto.loginBg_i = function () {
		var t = new eui.Image();
		this.loginBg = t;
		t.horizontalCenter = 0;
		t.source = "login_db";
		t.verticalCenter = 0;
		return t;
	};
	_proto.yhbg_i = function () {
		var t = new eui.Image();
		this.yhbg = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.source = "yh_bq";
		t.visible = false;
		return t;
	};
	_proto.aniGroup_i = function () {
		var t = new eui.Group();
		this.aniGroup = t;
		t.bottom = 420;
		t.height = 200;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 37;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this.userName_i(),this.msgTxt_i(),this.loginBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zhanghao";
		t.x = 46;
		t.y = 1;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.TextInput();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 40;
		t.prompt = "请输入手机号码";
		t.textColor = 0xffffff;
		t.width = 426.85;
		t.x = 102.53;
		t.y = 0;
		return t;
	};
	_proto.msgTxt_i = function () {
		var t = new eui.Label();
		this.msgTxt = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf73636;
		t.y = 63.2;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Button();
		this.loginBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94.66;
		t.icon = "login_djks";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 634.67;
		t.x = 0;
		t.y = 72.24;
		return t;
	};
	_proto.overseasGroup_i = function () {
		var t = new eui.Group();
		this.overseasGroup = t;
		t.anchorOffsetX = 0;
		t.bottom = 12;
		t.height = 200;
		t.width = 720;
		t.x = 1;
		t.elementsContent = [this.btnGG_i(),this.btnFB_i(),this.btnGuest_i()];
		return t;
	};
	_proto.btnGG_i = function () {
		var t = new eui.Button();
		this.btnGG = t;
		t.height = 60;
		t.icon = "ui_1.dl_an_2";
		t.width = 120;
		t.x = 134.552;
		t.y = 27.509;
		return t;
	};
	_proto.btnFB_i = function () {
		var t = new eui.Button();
		this.btnFB = t;
		t.height = 60;
		t.icon = "ui_1.dl_an_1";
		t.width = 120;
		t.x = 506.321;
		t.y = 27.509;
		return t;
	};
	_proto.btnGuest_i = function () {
		var t = new eui.Button();
		this.btnGuest = t;
		t.height = 60;
		t.icon = "ui_1.dl_an_0";
		t.width = 120;
		t.x = 303.955;
		t.y = 151.987;
		return t;
	};
	_proto.zhongGao_i = function () {
		var t = new eui.Group();
		this.zhongGao = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(6,9,16,10);
		t.source = "denglu_bj";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 101.5;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Image3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 54;
		t.text = "健康游戏忠告";
		t.textColor = 0xff5c86;
		t.x = 150.53;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "抵制不良游戏";
		t.textColor = 0xFF5C86;
		t.x = 22.43;
		t.y = 108.25;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "拒绝盗版游戏";
		t.textColor = 0xFF5C86;
		t.x = 335.43;
		t.y = 109.16;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "注意自我保护";
		t.textColor = 0xFF5C86;
		t.x = 22.43;
		t.y = 187.94;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "警防受骗上当";
		t.textColor = 0xFF5C86;
		t.x = 336.34;
		t.y = 188.85;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "适度游戏益脑";
		t.textColor = 0xFF5C86;
		t.x = 22.43;
		t.y = 263.69;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "沉迷游戏伤身";
		t.textColor = 0xFF5C86;
		t.x = 338.46;
		t.y = 264.6;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "合理安排时间";
		t.textColor = 0xFF5C86;
		t.x = 27.28;
		t.y = 338.23;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 44;
		t.text = "享受健康生活";
		t.textColor = 0xFF5C86;
		t.x = 340.28;
		t.y = 342.17;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "本网络游戏社会年满16周岁以上的用户使用";
		t.textColor = 0xff5c86;
		t.x = 10.27;
		t.y = 765.57;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "为了您的健康，请合理控制游戏时间";
		t.textColor = 0xFF5C86;
		t.x = 52.97;
		t.y = 817.99;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "软著：2017SR009983";
		t.textColor = 0xFF5C86;
		t.x = 0;
		t.y = 895.43;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "出版单位：广州盈正信息技术有限公司";
		t.textColor = 0xFF5C86;
		t.x = 142;
		t.y = 937.88;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "著作权人：厦门秀漫互娱网络科技有限公司";
		t.textColor = 0xFF5C86;
		t.x = 122;
		t.y = 978.8;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "审批文号：新广出审[2017]2428号";
		t.textColor = 0xFF5C86;
		t.x = 332;
		t.y = 895.43;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 312;
		t.y = 862.63;
		return t;
	};
	return LoginPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/main/MainList.exml'] = window.MainList = (function (_super) {
	__extends(MainList, _super);
	function MainList() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i()];
	}
	var _proto = MainList.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 1280;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ui_1.ty_zezhao";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.verticalCenter = 0;
		t.width = 623;
		t.x = 48.5;
		t.viewport = this._List1_i();
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
		t.anchorOffsetX = 0;
		t.itemRendererSkinName = MainListItem;
		t.width = 623;
		t.x = -77.33;
		t.y = -100;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	return MainList;
})(eui.Skin);generateEUI.paths['resource/skins/main/MainListItem.exml'] = window.MainListItem = (function (_super) {
	__extends(MainListItem, _super);
	function MainListItem() {
		_super.call(this);
		this.skinParts = ["content","img","price","priceGroup","group"];
		
		this.width = 623;
		this.elementsContent = [this.group_i()];
	}
	var _proto = MainListItem.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.width = 623;
		t.x = 650;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.content_i(),this.img_i(),this.priceGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(41,46,34,4);
		t.source = "juqing_xx";
		t.top = 0;
		t.width = 623;
		t.x = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.bottom = 30;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 26;
		t.text = "你想看什么电影？GV已回访过恢复规划你想看什么电影？GV已回访过恢复规划";
		t.textAlign = "center";
		t.textColor = 0x4E5CA5;
		t.top = 30;
		t.verticalAlign = "middle";
		t.width = 372;
		t.wordWrap = true;
		t.x = 122.66;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetX = 24.5;
		t.anchorOffsetY = 21.5;
		t.source = "juqing_sp";
		t.verticalCenter = 0.5;
		t.x = 79;
		return t;
	};
	_proto.priceGroup_i = function () {
		var t = new eui.Group();
		this.priceGroup = t;
		t.verticalCenter = 0;
		t.x = 498.63;
		t.elementsContent = [this._Image2_i(),this.price_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "juqing_zs";
		t.x = -6;
		t.y = 0;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "688";
		t.textAlign = "center";
		t.textColor = 0xF295C5;
		t.verticalCenter = 4;
		t.x = 52.03;
		return t;
	};
	return MainListItem;
})(eui.Skin);generateEUI.paths['resource/skins/main/MainSkin.exml'] = window.MainSkin = (function (_super) {
	__extends(MainSkin, _super);
	function MainSkin() {
		_super.call(this);
		this.skinParts = ["bg","djBg","djPic","zbPic","clickGroup","storyName","key","keyGroup","keyBtn","gold","zsGroup","zsBtn","setBtn","videoBtn","xx","xxBg","count","caidan","add","topGroup","pppp","nnnn","ggg","list","sc","scGroup","chapter","title","chapterGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group8_i(),this.scGroup_i(),this.chapterGroup_i(),this._Image23_i(),this._Image24_i()];
	}
	var _proto = MainSkin.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.djBg_i(),this.djPic_i(),this.zbPic_i(),this.clickGroup_i(),this.topGroup_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group7_i(),this.pppp_i(),this.nnnn_i(),this.ggg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1460;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "denglu_bj";
		t.verticalCenter = 0;
		return t;
	};
	_proto.djBg_i = function () {
		var t = new eui.Image();
		this.djBg = t;
		t.horizontalCenter = 0;
		t.source = "item_dk";
		t.verticalCenter = -68;
		return t;
	};
	_proto.djPic_i = function () {
		var t = new eui.Image();
		this.djPic = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -68;
		return t;
	};
	_proto.zbPic_i = function () {
		var t = new eui.Image();
		this.zbPic = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 175;
		return t;
	};
	_proto.clickGroup_i = function () {
		var t = new eui.Group();
		this.clickGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.storyName_i(),this.keyGroup_i(),this.keyBtn_i(),this.zsGroup_i(),this.zsBtn_i(),this.setBtn_i(),this.videoBtn_i(),this.caidan_i(),this.add_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "ui_1.sf_ya";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_zj";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.storyName_i = function () {
		var t = new eui.Label();
		this.storyName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.size = 25;
		t.text = "原来是你啊";
		t.textAlign = "center";
		t.width = 140;
		t.x = 67.32;
		t.y = 21.63;
		return t;
	};
	_proto.keyGroup_i = function () {
		var t = new eui.Group();
		this.keyGroup = t;
		t.x = 243.92;
		t.y = 4.92;
		t.elementsContent = [this._Image3_i(),this.key_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.ty_zyk_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.key_i = function () {
		var t = new eui.Label();
		this.key = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.keyBtn_i = function () {
		var t = new eui.Button();
		this.keyBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 390;
		t.y = 4.96;
		return t;
	};
	_proto.zsGroup_i = function () {
		var t = new eui.Group();
		this.zsGroup = t;
		t.x = 446.46;
		t.y = 5.36;
		t.elementsContent = [this._Image4_i(),this.gold_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.ty_zyk_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Label();
		this.gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.zsBtn_i = function () {
		var t = new eui.Button();
		this.zsBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 594.65;
		t.y = 4.52;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_sz";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 656.18;
		t.y = 6.92;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Button();
		this.videoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.33;
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 103.34;
		t.x = 613.62;
		t.y = 72.85;
		return t;
	};
	_proto.caidan_i = function () {
		var t = new eui.Group();
		this.caidan = t;
		t.x = 478;
		t.y = 80;
		t.elementsContent = [this._Image5_i(),this.xx_i(),this.xxBg_i(),this._Image6_i(),this.count_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_1";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xx_i = function () {
		var t = new eui.Image();
		this.xx = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_0";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xxBg_i = function () {
		var t = new eui.Image();
		this.xxBg = t;
		t.anchorOffsetX = 42.5;
		t.anchorOffsetY = 60;
		t.rotation = 5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "jieshu_smcd_2";
		t.x = 59;
		t.y = 80;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_smcd";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.BitmapLabel();
		this.count = t;
		t.font = "jiesu_zt";
		t.horizontalCenter = 0;
		t.letterSpacing = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "55/12";
		t.visible = false;
		t.y = 28;
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.BitmapLabel();
		this.add = t;
		t.font = "aixin_zt";
		t.horizontalCenter = 186.5;
		t.letterSpacing = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "x+5";
		t.visible = false;
		t.y = 110;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.visible = false;
		t.x = 569;
		t.y = 860;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 411.41;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 536.29;
		t.y = 30.34;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 625.34;
		t.wordWrap = true;
		t.x = 42.17;
		t.y = 112.36;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "点击继续";
		t.textColor = 0xFF9DC4;
		t.x = 589.83;
		t.y = 258.35;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.visible = false;
		t.x = 359;
		t.y = 865;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 411.41;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 536.29;
		t.y = 30.34;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 625.34;
		t.wordWrap = true;
		t.x = 42.17;
		t.y = 112.36;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "点击继续";
		t.textColor = 0xFF9DC4;
		t.x = 589.83;
		t.y = 258.35;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.visible = false;
		t.x = 217;
		t.y = 886;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 411.41;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 536.29;
		t.y = 30.34;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 625.34;
		t.wordWrap = true;
		t.x = 42.17;
		t.y = 112.36;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "点击继续";
		t.textColor = 0xFF9DC4;
		t.x = 589.83;
		t.y = 258.35;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 78;
		t.y = 913;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 411.41;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 536.29;
		t.y = 30.34;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 625.34;
		t.wordWrap = true;
		t.x = 42.17;
		t.y = 112.36;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "点击继续";
		t.textColor = 0xFF9DC4;
		t.x = 589.83;
		t.y = 258.35;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 5;
		t.y = 947;
		t.elementsContent = [this._Image15_i(),this._Group5_i(),this._Group6_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 440;
		t.y = 0;
		t.elementsContent = [this._Image16_i(),this._Label13_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 100;
		t.y = 30;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -20;
		t.y = 0;
		t.elementsContent = [this._Image17_i(),this._Label14_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "王先森";
		t.x = 90;
		t.y = 30;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 13;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 625.34;
		t.wordWrap = true;
		t.x = 42.17;
		t.y = 112.36;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "点击继续";
		t.textColor = 0xFF9DC4;
		t.x = 590;
		t.y = 258;
		return t;
	};
	_proto.pppp_i = function () {
		var t = new eui.Group();
		this.pppp = t;
		t.bottom = 277;
		t.visible = false;
		t.x = 0;
		t.elementsContent = [this._Image18_i(),this._Label17_i(),this._Label18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "juqing_dh_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "王";
		t.textAlign = "center";
		t.width = 124.67;
		t.x = 486;
		t.y = 27.32;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 104;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "我是专门从上海赶过来看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0x585858;
		t.width = 510;
		t.wordWrap = true;
		t.x = 134.16;
		t.y = 77.07;
		return t;
	};
	_proto.nnnn_i = function () {
		var t = new eui.Group();
		this.nnnn = t;
		t.bottom = 322;
		t.visible = false;
		t.x = -700;
		t.elementsContent = [this._Image19_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "juqing_dh_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "王先森";
		t.x = 49.32;
		t.y = 23.33;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 104;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "我是专门从上海赶过来看怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 510;
		t.wordWrap = true;
		t.x = 14.14;
		t.y = 77.07;
		return t;
	};
	_proto.ggg_i = function () {
		var t = new eui.Group();
		this.ggg = t;
		t.visible = false;
		t.x = 83;
		t.y = 844;
		t.elementsContent = [this._Image20_i(),this._Label21_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "juqing_dh_3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 104;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "我是专门从上看你的，你最近怎么样？看到我开不开心，感不感动，快表扬我.....";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 510;
		t.wordWrap = true;
		t.x = 23;
		t.y = 14.43;
		return t;
	};
	_proto.scGroup_i = function () {
		var t = new eui.Group();
		this.scGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image21_i(),this.sc_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.sc_i = function () {
		var t = new eui.Scroller();
		this.sc = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 623;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = MainListItem;
		t.x = -77.33;
		t.y = -100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.chapterGroup_i = function () {
		var t = new eui.Group();
		this.chapterGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image22_i(),this._Group9_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(6,9,16,10);
		t.source = "denglu_bj";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -101;
		t.elementsContent = [this.chapter_i(),this.title_i()];
		return t;
	};
	_proto.chapter_i = function () {
		var t = new eui.Label();
		this.chapter = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 130;
		t.text = "第一章";
		t.textAlign = "center";
		t.textColor = 0xff646f;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 90;
		t.text = "美女房东六字";
		t.textAlign = "center";
		t.textColor = 0xFF646F;
		t.width = 720;
		t.x = 0;
		t.y = 280;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = -200;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = -200;
		return t;
	};
	return MainSkin;
})(eui.Skin);generateEUI.paths['resource/skins/main/OffLine.exml'] = window.OffLine = (function (_super) {
	__extends(OffLine, _super);
	function OffLine() {
		_super.call(this);
		this.skinParts = ["circle"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OffLine.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.circle_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.3;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Image();
		this.circle = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 90;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "jiazai";
		t.verticalCenter = 0;
		return t;
	};
	return OffLine;
})(eui.Skin);generateEUI.paths['resource/skins/plotEnd/PlotEndItemSkin.exml'] = window.PlotEndItemSkin = (function (_super) {
	__extends(PlotEndItemSkin, _super);
	function PlotEndItemSkin() {
		_super.call(this);
		this.skinParts = ["select","content","group"];
		
		this.height = 47;
		this.width = 320;
		this.elementsContent = [this.group_i()];
	}
	var _proto = PlotEndItemSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.x = 350;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.select_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_xx_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.select_i = function () {
		var t = new eui.Image();
		this.select = t;
		t.source = "ui_1.jieshu_xx_2";
		t.visible = false;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "我来选衣服";
		t.textAlign = "center";
		t.x = 42.58;
		t.y = 19.37;
		return t;
	};
	return PlotEndItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/plotEnd/PlotEndItemSkin1.exml'] = window.plotEndItemSkin1 = (function (_super) {
	__extends(plotEndItemSkin1, _super);
	function plotEndItemSkin1() {
		_super.call(this);
		this.skinParts = ["content"];
		
		this.elementsContent = [this.content_i()];
	}
	var _proto = plotEndItemSkin1.prototype;

	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.alpha = 0;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "或许";
		t.top = 10;
		t.x = 0;
		return t;
	};
	return plotEndItemSkin1;
})(eui.Skin);generateEUI.paths['resource/skins/plotEnd/PlotEndSkin.exml'] = window.PlotEndSkin = (function (_super) {
	__extends(PlotEndSkin, _super);
	function PlotEndSkin() {
		_super.call(this);
		this.skinParts = ["bg","endBg","complete","person","titleNum","txtList","txtGroup","titleNum2","title","zhixian","selectList","selectSC","selectGroup","goBtn","keyCost","keyImg","goGroup","record","replayBtn","perfect","videoBg","videoImg2","videoImg","mask2","mask3","videoGroup","dbGroup","bgGroup","key","keyGroup","keyBtn","gold","goldGroup","goldBtn","setBtn","videoBtn","discountBtn","xx","xxBg","count","caidan","tipGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.endBg_i(),this.complete_i(),this.person_i(),this._Image1_i(),this.txtGroup_i(),this.selectGroup_i(),this.goGroup_i(),this.record_i(),this.replayBtn_i(),this.perfect_i(),this.videoBg_i(),this.videoGroup_i(),this.dbGroup_i(),this.bgGroup_i(),this._Group1_i(),this.tipGroup_i(),this._Image8_i(),this._Image9_i()];
	}
	var _proto = PlotEndSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "jieshu_bjtp";
		t.verticalCenter = 0;
		return t;
	};
	_proto.endBg_i = function () {
		var t = new eui.Image();
		this.endBg = t;
		t.alpha = 0;
		t.source = "jieshu_bjtp_1";
		t.verticalCenter = -313.5;
		t.x = 325;
		return t;
	};
	_proto.complete_i = function () {
		var t = new eui.Image();
		this.complete = t;
		t.anchorOffsetX = 170;
		t.anchorOffsetY = 53;
		t.scaleX = 3;
		t.scaleY = 3;
		t.source = "jieshu_bjtp_2";
		t.verticalCenter = -320;
		t.x = 480.35;
		return t;
	};
	_proto.person_i = function () {
		var t = new eui.Image();
		this.person = t;
		t.source = "r8_xiao";
		t.verticalCenter = 80;
		t.x = -1300;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "jieshu_db";
		return t;
	};
	_proto.txtGroup_i = function () {
		var t = new eui.Group();
		this.txtGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 478.79;
		t.verticalCenter = 82.5;
		t.width = 348;
		t.x = 365.01;
		t.elementsContent = [this.titleNum_i(),this._Scroller1_i()];
		return t;
	};
	_proto.titleNum_i = function () {
		var t = new eui.Label();
		this.titleNum = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第一章";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.width = 320;
		t.x = 29.87;
		t.y = 75.95;
		t.viewport = this.txtList_i();
		return t;
	};
	_proto.txtList_i = function () {
		var t = new eui.List();
		this.txtList = t;
		t.anchorOffsetX = 0;
		t.itemRendererSkinName = plotEndItemSkin1;
		t.x = 1.52;
		t.y = -1.52;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	_proto.selectGroup_i = function () {
		var t = new eui.Group();
		this.selectGroup = t;
		t.anchorOffsetY = 0;
		t.height = 501.33;
		t.verticalCenter = 73.5;
		t.visible = false;
		t.x = 363.49;
		t.elementsContent = [this.titleNum2_i(),this.title_i(),this.zhixian_i(),this.selectSC_i()];
		return t;
	};
	_proto.titleNum2_i = function () {
		var t = new eui.Label();
		this.titleNum2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第一章";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "-妈妈来了";
		t.x = 373.06;
		t.y = 46.42;
		return t;
	};
	_proto.zhixian_i = function () {
		var t = new eui.Label();
		this.zhixian = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "支线：";
		t.x = 32.29;
		t.y = 106.57;
		return t;
	};
	_proto.selectSC_i = function () {
		var t = new eui.Scroller();
		this.selectSC = t;
		t.visible = false;
		t.width = 320;
		t.x = 28.48;
		t.y = 129.03;
		t.viewport = this.selectList_i();
		return t;
	};
	_proto.selectList_i = function () {
		var t = new eui.List();
		this.selectList = t;
		t.anchorOffsetX = 0;
		t.itemRendererSkinName = PlotEndItemSkin;
		t.width = 168;
		t.x = -77.33;
		t.y = -100;
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		return t;
	};
	_proto.goGroup_i = function () {
		var t = new eui.Group();
		this.goGroup = t;
		t.bottom = 350;
		t.x = 840;
		t.elementsContent = [this.goBtn_i(),this.keyCost_i(),this.keyImg_i()];
		return t;
	};
	_proto.goBtn_i = function () {
		var t = new eui.Button();
		this.goBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113.33;
		t.icon = "ui_1.jieshu_jx";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 311.34;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keyCost_i = function () {
		var t = new eui.Label();
		this.keyCost = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.size = 39;
		t.text = "9";
		t.textAlign = "center";
		t.textColor = 0xff5e79;
		t.width = 46;
		t.x = 87.53;
		t.y = 34.35;
		return t;
	};
	_proto.keyImg_i = function () {
		var t = new eui.Image();
		this.keyImg = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 28;
		t.source = "chongwen_xhzj_1";
		t.x = 55;
		t.y = 55;
		return t;
	};
	_proto.record_i = function () {
		var t = new eui.Label();
		this.record = t;
		t.bottom = 320;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "完美通关：0/2";
		t.x = 840;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 201;
		t.height = 113.33;
		t.icon = "ui_1.jieshu_cwzj";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 304.68;
		t.x = 840;
		return t;
	};
	_proto.perfect_i = function () {
		var t = new eui.Image();
		this.perfect = t;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 73;
		t.scaleX = 3;
		t.scaleY = 3;
		t.source = "jieshu_wmtg";
		t.verticalCenter = -169;
		t.visible = false;
		t.x = 606;
		return t;
	};
	_proto.videoBg_i = function () {
		var t = new eui.Image();
		this.videoBg = t;
		t.bottom = 0;
		t.horizontalCenter = 0.5;
		t.source = "jiesu_kuang";
		t.touchEnabled = false;
		return t;
	};
	_proto.videoGroup_i = function () {
		var t = new eui.Group();
		this.videoGroup = t;
		t.bottom = 20;
		t.height = 119;
		t.horizontalCenter = 0;
		t.width = 646;
		t.elementsContent = [this.videoImg2_i(),this.videoImg_i(),this.mask2_i(),this.mask3_i()];
		return t;
	};
	_proto.videoImg2_i = function () {
		var t = new eui.Image();
		this.videoImg2 = t;
		t.source = "e9_out_pic";
		t.x = 646;
		t.y = 0;
		return t;
	};
	_proto.videoImg_i = function () {
		var t = new eui.Image();
		this.videoImg = t;
		t.source = "e9_out_pic";
		t.x = 14;
		t.y = 0;
		return t;
	};
	_proto.mask2_i = function () {
		var t = new eui.Image();
		this.mask2 = t;
		t.source = "e9_out_pic";
		t.x = 14;
		t.y = 0;
		return t;
	};
	_proto.mask3_i = function () {
		var t = new eui.Image();
		this.mask3 = t;
		t.source = "e9_out_pic";
		t.x = 14;
		t.y = 0;
		return t;
	};
	_proto.dbGroup_i = function () {
		var t = new eui.Group();
		this.dbGroup = t;
		t.bottom = 20;
		t.height = 119;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 646;
		return t;
	};
	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(90,24,540,151);
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -2.5;
		t.top = 0;
		t.elementsContent = [this.keyGroup_i(),this.keyBtn_i(),this.goldGroup_i(),this.goldBtn_i(),this.setBtn_i(),this.videoBtn_i(),this.discountBtn_i(),this.caidan_i()];
		return t;
	};
	_proto.keyGroup_i = function () {
		var t = new eui.Group();
		this.keyGroup = t;
		t.x = 243.92;
		t.y = 4.92;
		t.elementsContent = [this._Image3_i(),this.key_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ty_zyk_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.key_i = function () {
		var t = new eui.Label();
		this.key = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.keyBtn_i = function () {
		var t = new eui.Button();
		this.keyBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 390;
		t.y = 4.96;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.x = 446.46;
		t.y = 5.36;
		t.elementsContent = [this._Image4_i(),this.gold_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ty_zyk_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Label();
		this.gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.goldBtn_i = function () {
		var t = new eui.Button();
		this.goldBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 594.65;
		t.y = 4.52;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_sz";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 656.18;
		t.y = 6.92;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Button();
		this.videoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.33;
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 103.34;
		t.x = 613.62;
		t.y = 72.85;
		return t;
	};
	_proto.discountBtn_i = function () {
		var t = new eui.Button();
		this.discountBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.skinName = "DiscountBtnSkin";
		t.visible = false;
		t.x = 19;
		t.y = 13.85;
		return t;
	};
	_proto.caidan_i = function () {
		var t = new eui.Group();
		this.caidan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 479.33;
		t.y = 80;
		t.elementsContent = [this._Image5_i(),this.xx_i(),this.xxBg_i(),this._Image6_i(),this.count_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_1";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xx_i = function () {
		var t = new eui.Image();
		this.xx = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_0";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xxBg_i = function () {
		var t = new eui.Image();
		this.xxBg = t;
		t.anchorOffsetX = 42.5;
		t.anchorOffsetY = 60;
		t.rotation = 5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "jieshu_smcd_2";
		t.x = 59;
		t.y = 104;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_smcd";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.BitmapLabel();
		this.count = t;
		t.font = "jiesu_zt";
		t.horizontalCenter = 0;
		t.letterSpacing = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "55/12";
		t.visible = false;
		t.y = 28;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.alpha = 0;
		t.top = 48;
		t.x = 402;
		t.elementsContent = [this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_dhk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 24;
		t.text = "可观看彩蛋视频";
		t.textAlign = "center";
		t.width = 99;
		t.x = 8;
		t.y = 6;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = -200;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = -200;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		return t;
	};
	return PlotEndSkin;
})(eui.Skin);generateEUI.paths['resource/skins/review/ReviewChapterItemSkin.exml'] = window.ReviewChapterItemSkin = (function (_super) {
	__extends(ReviewChapterItemSkin, _super);
	function ReviewChapterItemSkin() {
		_super.call(this);
		this.skinParts = ["chapter","title","isNew","tip","select1","content1","group1","select2","content2","group2","perfect","group"];
		
		this.height = 151;
		this.width = 603;
		this.elementsContent = [this.group_i()];
	}
	var _proto = ReviewChapterItemSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.alpha = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Label1_i(),this.tip_i(),this._Group2_i(),this.perfect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "chongwen_lbdk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 38;
		t.x = 38;
		t.y = 34;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.chapter_i(),this.title_i(),this.isNew_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.chapter_i = function () {
		var t = new eui.Label();
		this.chapter = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "章节";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "标题";
		t.textColor = 0xffffff;
		t.x = 67;
		t.y = 0;
		return t;
	};
	_proto.isNew_i = function () {
		var t = new eui.Image();
		this.isNew = t;
		t.anchorOffsetX = 33.5;
		t.anchorOffsetY = 14.5;
		t.source = "chongwen_new";
		t.visible = false;
		t.x = 139;
		t.y = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "支线：";
		t.x = 14;
		t.y = 95;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "无";
		t.visible = false;
		t.x = 94;
		t.y = 95;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 82;
		t.y = 76;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.group1_i(),this.group2_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.select1_i(),this.content1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "chongwen_xx_1";
		t.x = 9;
		t.y = 18;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.source = "jieshu_xx_2";
		t.visible = false;
		t.x = 3;
		t.y = 1;
		return t;
	};
	_proto.content1_i = function () {
		var t = new eui.Label();
		this.content1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "我来选衣服";
		t.textAlign = "center";
		t.x = 42.58;
		t.y = 19.37;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.visible = false;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image3_i(),this.select2_i(),this.content2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "chongwen_xx_1";
		t.x = 7;
		t.y = 18;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.source = "jieshu_xx_2";
		t.visible = false;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.content2_i = function () {
		var t = new eui.Label();
		this.content2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "我来选衣服";
		t.textAlign = "center";
		t.x = 42.58;
		t.y = 19.37;
		return t;
	};
	_proto.perfect_i = function () {
		var t = new eui.Image();
		this.perfect = t;
		t.source = "chongwen_wmtg";
		t.visible = false;
		t.x = 353;
		t.y = 19;
		return t;
	};
	return ReviewChapterItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/review/ReviewChapterSkin.exml'] = window.ReviewChapterSkin = (function (_super) {
	__extends(ReviewChapterSkin, _super);
	function ReviewChapterSkin() {
		_super.call(this);
		this.skinParts = ["clickGroup","keyImg","list"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.clickGroup_i(),this._Group1_i()];
	}
	var _proto = ReviewChapterSkin.prototype;

	_proto.clickGroup_i = function () {
		var t = new eui.Group();
		this.clickGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.keyImg_i(),this._Image4_i(),this._Image5_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 828;
		t.scale9Grid = new egret.Rectangle(84,90,444,59);
		t.source = "chongwen_dk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "chongwen_xhzj";
		t.x = 43;
		t.y = 100;
		return t;
	};
	_proto.keyImg_i = function () {
		var t = new eui.Image();
		this.keyImg = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 28;
		t.source = "chongwen_xhzj_1";
		t.x = 154;
		t.y = 122;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.chongwen_cwzj";
		t.x = 262;
		t.y = 19;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 614;
		t.scale9Grid = new egret.Rectangle(7,7,46,46);
		t.source = "shangcheng_dw2";
		t.width = 607;
		t.x = 44;
		t.y = 156;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 580;
		t.width = 603;
		t.x = 46;
		t.y = 171;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ReviewChapterItemSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	return ReviewChapterSkin;
})(eui.Skin);generateEUI.paths['resource/skins/review/ReviewDlgSkin.exml'] = window.ReviewDlgSkin = (function (_super) {
	__extends(ReviewDlgSkin, _super);
	function ReviewDlgSkin() {
		_super.call(this);
		this.skinParts = ["clickGroup","noBtn","yesBtn","msg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.clickGroup_i(),this._Group1_i()];
	}
	var _proto = ReviewDlgSkin.prototype;

	_proto.clickGroup_i = function () {
		var t = new eui.Group();
		this.clickGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.noBtn_i(),this.yesBtn_i(),this.msg_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 482;
		t.scale9Grid = new egret.Rectangle(86,100,523,42);
		t.source = "ui_1.chongwen_dk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new eui.Button();
		this.noBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.06;
		t.icon = "tanchuang_f";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 243.38;
		t.x = 78.62;
		t.y = 291;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.06;
		t.icon = "tanchuang_s";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 243.38;
		t.x = 389;
		t.y = 291;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.maxWidth = 550;
		t.size = 26;
		t.text = "重温该章节，需要消耗钥匙*1111，是否确定重温？";
		t.textAlign = "center";
		t.textColor = 0x4e5ca5;
		t.width = 560;
		t.wordWrap = true;
		t.x = 73;
		t.y = 181;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.tanchuang_ts";
		t.x = 296;
		t.y = 13;
		return t;
	};
	return ReviewDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/set/SetSkin.exml'] = window.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
	function SetSkin() {
		_super.call(this);
		this.skinParts = ["clickGroup","btnCwzj","switch","userName","userId","group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.clickGroup_i(),this.btnCwzj_i(),this.group_i()];
	}
	var _proto = SetSkin.prototype;

	_proto.clickGroup_i = function () {
		var t = new eui.Group();
		this.clickGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ui_1.ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 83;
		t.horizontalCenter = 0;
		t.source = "ui_1.ty_djgb";
		return t;
	};
	_proto.btnCwzj_i = function () {
		var t = new eui.Button();
		this.btnCwzj = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.06;
		t.icon = "ui_1.tanchuang_cwzj";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.visible = false;
		t.width = 243.38;
		t.x = 237.08;
		t.y = 726.34;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this._Image5_i(),this._Image6_i(),this.userName_i(),this.userId_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ty_ck";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 189;
		t.y = 291.03;
		t.elementsContent = [this._Image4_i(),this.switch_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.tanchuang_bjyy";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.switch_i = function () {
		var t = new eui.Image();
		this.switch = t;
		t.source = "ui_1.tanchuang_kg_1";
		t.x = 141.83;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.tanchuang_sz";
		t.x = 262.01;
		t.y = 15.05;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(27,6,5,36);
		t.source = "ui_1.tanchuang_srk";
		t.width = 330;
		t.x = 153;
		t.y = 147.39;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "王先森";
		t.textAlign = "center";
		t.textColor = 0x2e2e2e;
		t.width = 311;
		t.x = 162;
		t.y = 158.39;
		return t;
	};
	_proto.userId_i = function () {
		var t = new eui.Label();
		this.userId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "ID:230";
		t.textColor = 0x4e5ca5;
		t.y = 226.39;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 35;
		t.right = 50;
		t.size = 8;
		t.text = "V_1.0.0.1";
		t.textColor = 0x8E8D8D;
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/skins/shop/ShopItemSkin.exml'] = window.ShopItemSkin = (function (_super) {
	__extends(ShopItemSkin, _super);
	function ShopItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","num","price"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.num_i(),this._Image1_i(),this.price_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "ui_1.shangcheng_ysdk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Image();
		this.num = t;
		t.horizontalCenter = 0;
		t.source = "ui_1.ys_1";
		t.y = 15.58;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.shangcheng_an";
		t.x = 12;
		t.y = 160;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Image();
		this.price = t;
		t.horizontalCenter = 0.5;
		t.source = "je_6";
		t.y = 166.83;
		return t;
	};
	return ShopItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/shop/ShopSkin.exml'] = window.ShopSkin = (function (_super) {
	__extends(ShopSkin, _super);
	function ShopSkin() {
		_super.call(this);
		this.skinParts = ["dbGroup2","img","bg","dbGroup","closeBtn","btn1","btn2","list","time","timeGroup","body"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.body_i()];
	}
	var _proto = ShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,28,28);
		t.source = "ty_zezhao";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.body_i = function () {
		var t = new eui.Group();
		this.body = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = -29;
		t.elementsContent = [this._Image2_i(),this.dbGroup2_i(),this.img_i(),this.dbGroup_i(),this.closeBtn_i(),this._Image4_i(),this._Image5_i(),this.btn1_i(),this.btn2_i(),this._Scroller1_i(),this.timeGroup_i(),this._Group2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 23;
		t.source = "ui_1.shangcheng_sc";
		t.y = 0;
		return t;
	};
	_proto.dbGroup2_i = function () {
		var t = new eui.Group();
		this.dbGroup2 = t;
		t.x = 23;
		t.y = 183;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zhencang_ggy_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "zhencang_ggy_2";
		t.x = -400;
		t.y = 121;
		return t;
	};
	_proto.dbGroup_i = function () {
		var t = new eui.Group();
		this.dbGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 316.37;
		t.y = 162.42;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "shangcheng_ysdh";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.icon = "ui_1.zhencang_gb";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 87.38;
		t.x = 620;
		t.y = 150;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 565;
		t.scale9Grid = new egret.Rectangle(22,14,31,47);
		t.source = "ui_1.zhencang_dk";
		t.width = 710;
		t.x = 0;
		t.y = 377;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 496;
		t.scale9Grid = new egret.Rectangle(22,23,16,14);
		t.source = "ui_1.shangcheng_dw2";
		t.width = 670;
		t.x = 25;
		t.y = 401;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.source = "ui_1.shangcheng_ys_2";
		t.touchEnabled = true;
		t.x = 260;
		t.y = 927;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.source = "ui_1.shangcheng_zs_1";
		t.touchEnabled = true;
		t.x = 485;
		t.y = 927;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.x = 43.95;
		t.y = 418;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.itemRendererSkinName = ShopItemSkin;
		t.width = 631;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 18;
		t.requestedColumnCount = 3;
		t.verticalGap = 11;
		return t;
	};
	_proto.timeGroup_i = function () {
		var t = new eui.Group();
		this.timeGroup = t;
		t.x = 282;
		t.y = 294;
		t.elementsContent = [this._Image6_i(),this.time_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.shangcheng_djs";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "center";
		t.y = 8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 407.709;
		t.x = 277;
		t.y = 284;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 70;
		t.y = 68;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 148.348;
		t.y = 68;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 291;
		t.y = 68;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.zhencang_zs1";
		t.x = 362.79;
		t.y = 68;
		return t;
	};
	return ShopSkin;
})(eui.Skin);generateEUI.paths['resource/skins/storyend/StoryEndSkin.exml'] = window.StoryEndSkin = (function (_super) {
	__extends(StoryEndSkin, _super);
	function StoryEndSkin() {
		_super.call(this);
		this.skinParts = ["keyImg","list","pass","key","keyGroup","keyBtn","gold","goldGroup","goldBtn","setBtn","videoBtn","xx","xxBg","count","caidan","discountBtn","videoBg","videoImg2","videoImg","mask2","mask3","videoGroup","dbGroup","tipGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Image7_i(),this._Group2_i(),this.caidan_i(),this.discountBtn_i(),this.videoBg_i(),this.videoGroup_i(),this.dbGroup_i(),this._Image12_i(),this.tipGroup_i()];
	}
	var _proto = StoryEndSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jieshu_bjtp";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "jieshu_db";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = 21;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.keyImg_i(),this._Image5_i(),this._Image6_i(),this._Scroller1_i(),this.pass_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 828;
		t.scale9Grid = new egret.Rectangle(84,90,444,59);
		t.source = "chongwen_dk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "chongwen_xhzj";
		t.x = 43;
		t.y = 100;
		return t;
	};
	_proto.keyImg_i = function () {
		var t = new eui.Image();
		this.keyImg = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 28;
		t.source = "chongwen_xhzj_1";
		t.x = 154;
		t.y = 120;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.chongwen_cwzj";
		t.x = 262;
		t.y = 22;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 614;
		t.scale9Grid = new egret.Rectangle(7,7,46,46);
		t.source = "shangcheng_dw2";
		t.width = 607;
		t.x = 44;
		t.y = 156;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 580;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 603;
		t.y = 171.19;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ReviewChapterItemSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto.pass_i = function () {
		var t = new eui.Label();
		this.pass = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 29;
		t.text = "完美通关:00/00";
		t.textColor = 0x6db9f9;
		t.y = 106.61;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ui_1.chongwen_zimu";
		t.top = 139;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this.keyGroup_i(),this.keyBtn_i(),this.goldGroup_i(),this.goldBtn_i(),this.setBtn_i(),this.videoBtn_i()];
		return t;
	};
	_proto.keyGroup_i = function () {
		var t = new eui.Group();
		this.keyGroup = t;
		t.x = 243.92;
		t.y = 4.92;
		t.elementsContent = [this._Image8_i(),this.key_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ty_zyk_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.key_i = function () {
		var t = new eui.Label();
		this.key = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.keyBtn_i = function () {
		var t = new eui.Button();
		this.keyBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 390;
		t.y = 4.96;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.x = 446.46;
		t.y = 5.36;
		t.elementsContent = [this._Image9_i(),this.gold_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ty_zyk_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Label();
		this.gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 24;
		t.text = "16666";
		t.textAlign = "center";
		t.width = 71;
		t.x = 69.08;
		t.y = 20.48;
		return t;
	};
	_proto.goldBtn_i = function () {
		var t = new eui.Button();
		this.goldBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_0";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 594.65;
		t.y = 4.52;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.icon = "ui_1.ty_zyk_sz";
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 60;
		t.x = 656.18;
		t.y = 6.92;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Button();
		this.videoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.33;
		t.label = "";
		t.skinName = "CloseBtnSkin";
		t.width = 103.34;
		t.x = 613.62;
		t.y = 72.85;
		return t;
	};
	_proto.caidan_i = function () {
		var t = new eui.Group();
		this.caidan = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 479.33;
		t.y = 80;
		t.elementsContent = [this._Image10_i(),this.xx_i(),this.xxBg_i(),this._Image11_i(),this.count_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_1";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xx_i = function () {
		var t = new eui.Image();
		this.xx = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jieshu_smcd_0";
		t.x = 21;
		t.y = 13;
		return t;
	};
	_proto.xxBg_i = function () {
		var t = new eui.Image();
		this.xxBg = t;
		t.anchorOffsetX = 42.5;
		t.anchorOffsetY = 60;
		t.rotation = 5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "jieshu_smcd_2";
		t.x = 59;
		t.y = 104;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_smcd";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.BitmapLabel();
		this.count = t;
		t.font = "jiesu_zt";
		t.horizontalCenter = 0;
		t.letterSpacing = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "55/12";
		t.visible = false;
		t.y = 28;
		return t;
	};
	_proto.discountBtn_i = function () {
		var t = new eui.Button();
		this.discountBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.skinName = "DiscountBtnSkin";
		t.visible = false;
		t.x = 19;
		t.y = 13.85;
		return t;
	};
	_proto.videoBg_i = function () {
		var t = new eui.Image();
		this.videoBg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "jiesu_kuang";
		return t;
	};
	_proto.videoGroup_i = function () {
		var t = new eui.Group();
		this.videoGroup = t;
		t.bottom = 20;
		t.height = 119;
		t.horizontalCenter = 0;
		t.width = 646;
		t.elementsContent = [this.videoImg2_i(),this.videoImg_i(),this.mask2_i(),this.mask3_i()];
		return t;
	};
	_proto.videoImg2_i = function () {
		var t = new eui.Image();
		this.videoImg2 = t;
		t.source = "e9_out_pic";
		t.x = 646;
		return t;
	};
	_proto.videoImg_i = function () {
		var t = new eui.Image();
		this.videoImg = t;
		t.source = "e9_out_pic";
		t.x = 14;
		return t;
	};
	_proto.mask2_i = function () {
		var t = new eui.Image();
		this.mask2 = t;
		t.source = "e9_out_pic";
		t.x = 14;
		return t;
	};
	_proto.mask3_i = function () {
		var t = new eui.Image();
		this.mask3 = t;
		t.source = "e9_out_pic";
		t.x = 14;
		return t;
	};
	_proto.dbGroup_i = function () {
		var t = new eui.Group();
		this.dbGroup = t;
		t.bottom = 20;
		t.height = 119;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 646;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.alpha = 0;
		t.top = 48;
		t.x = 402;
		t.elementsContent = [this._Image13_i(),this._Label1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "ui_1.jieshu_dhk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 24;
		t.text = "可观看彩蛋视频";
		t.textAlign = "center";
		t.width = 99;
		t.x = 8;
		t.y = 6;
		return t;
	};
	return StoryEndSkin;
})(eui.Skin);generateEUI.paths['resource/skins/tips/TipsSkin.exml'] = window.TipsSkin = (function (_super) {
	__extends(TipsSkin, _super);
	function TipsSkin() {
		_super.call(this);
		this.skinParts = ["bg","icon","lab","group"];
		
		this.height = 58;
		this.width = 400;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TipsSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 350;
		t.x = 25;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this._Group1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0.9;
		t.height = 58;
		t.horizontalCenter = 0;
		t.source = "ty_xtts";
		t.touchEnabled = false;
		t.width = 397;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 44;
		t.horizontalCenter = 0.5;
		t.y = 7;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.icon_i(),this.lab_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.paddingLeft = 25;
		t.paddingRight = 25;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.scaleX = 0.66;
		t.scaleY = 0.66;
		t.source = "jieshu_jx_1";
		t.touchEnabled = false;
		t.y = 3;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "+2000";
		t.textAlign = "left";
		t.textColor = 0xfff5e0;
		t.touchEnabled = false;
		return t;
	};
	return TipsSkin;
})(eui.Skin);