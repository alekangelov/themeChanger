var checkBox = document.getElementById("theme");

var theme = {
    themeChange: function () {
        var linkNode = document.getElementById('linktheme');
        var mainTheme = 'assets/main.css';
        var darkTheme = 'assets/dark.css';
            if (checkBox.checked == true) {
                linkNode.href=darkTheme;
                console.log("now it's dark");
            } else {
                linkNode.href=mainTheme;
                console.log("now it's light")
            }
    }
}

checkBox.onclick = theme.themeChange;
