var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function () {
  // addLine(
  //   "__________________________________________________________________________________________________________"
  // );
  loopLines(banner, "", 0);
  addLine(
    "___________ฅ^._.^ฅ____________________ฅ^._.^ฅ____________________ฅ^._.^ฅ____________________ฅ^._.^ฅ___________"
  );
  addLine("<br> Welcome to my portfolio.");
  addLine("______________________________________");
  addLine("");
  addLine("<br> (づ｡◕‿‿◕｡)づ  /ᐠ - ˕ -マ  ฅ/ᐠ. ̫ .ᐟ\\ฅ ");
  addLine(
    "<br> Type <span class=\"command\">'help'</span> to view the list of existing commands."
  );
  addLine("<br>_________________________________________________");
  addLine("<br/>");
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  //cmd enter pressed
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    // addLine("user@thoriqakhdn:~$ " + command.innerHTML, "no-animation", 0);
    cmds(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  //backward cmd used
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  //forward cmd used
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

//output lines
function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

//
function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function cmds(cmd) {
  switch (cmd.toLowerCase()) {
    //Main cmd
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "about":
      loopLines(about, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "socials":
      loopLines(social, "color2 margin", 80);
      break;
    case "meow":
      loopLines(meow, "color2 margin", 80);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    //Cmd in social
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 50);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 50);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening Github...", "color2", 50);
      newTab(github);
      break;
    //Cmd in project
    case "filmify":
      addLine("Opening Filmify...", "color2", 50);
      newTab(porto1);
      break;
    case "pretonic":
      addLine("Opening Pretonic...", "color2", 50);
      newTab(kedaikopi);
      break;
    default:
      addLine(
        '<span class="inherit">Command tidak ditemukan, ketik <span class="command">\'help\'</span> untuk melihat list command yang ada.</span>',
        "error",
        100
      );
  }
}
