var checkBox = document.getElementById("theme");


var theme = {
    themeChange: function () {
        var linkNode = document.getElementById('linktheme');
        var theme = {
            "mainTheme": "assets/main.css",
            "darkTheme": "assets/dark.css",
        }
            if (checkBox.checked == true) {
                linkNode.href=theme['darkTheme'];
                console.log("now it's dark");
            } else {
                linkNode.href=theme['mainTheme'];
                console.log("now it's light")
            }
    },
};

document.onkeyup = function checkBoxSwitch(e) {
    if (e.which == 37 || e.which == 39) {
        if (checkBox.checked == true) {
            checkBox.checked = false;
        } else if (checkBox.checked == false) {
            checkBox.checked = true;
        }
    }
    theme.themeChange();
};

checkBox.onclick = theme.themeChange;
