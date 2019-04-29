;(function (win){
    var ui = {
        panel:function(id,parms){
            if(typeof id !== "string")
                throw new Error("必须传入一个类型为String的id")
            var panelDom = document.getElementById(id);
            var panelUI = document.createElement("div");
            panelUI.style.cssText = "height: 200px; width:150px;background:#aabbcc; border:1px solid #000"
            panelDom.appendChild(panelUI);
        }
    }

    window.UI = ui;
})(window)
