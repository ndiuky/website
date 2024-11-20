document.addEventListener("DOMContentLoaded", function () {
  const loadingTextElement = document.getElementById("loadingText");
  const consoleElement = document.getElementById("console");
  const consoleOutputElement = document.getElementById("consoleOutput");
  const consoleResponseElement = document.getElementById("consoleResponse");
  const consoleInputElement = document.getElementById("consoleInput");
  consoleInputElement.style.outline = "1px solid #0d0d0d";

  const loadingSteps = [
    "main() = function{}",
    "main()",
    "site = {}",
    "site.load = function(self)",
    "site:load()",
    "#Log: Site loading complete.",
    "                            ",
  ];

  let currentStep = 0;
  let symbolChangeInterval = null;

  const showFinalText = () => {
    loadingTextElement.textContent = loadingSteps[currentStep];
    currentStep++;
    if (currentStep >= loadingSteps.length) {
      clearInterval(symbolChangeInterval);
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        consoleElement.style.display = "block";
        displayWelcomeMessage();
      }, 500);
    } else {
      setTimeout(updateLoadingText, 500);
    }
  };

  const updateLoadingText = () => {
    if (currentStep < loadingSteps.length) {
      let charArray = loadingSteps[currentStep].split("");
      symbolChangeInterval = setInterval(() => {
        loadingTextElement.textContent = charArray
          .map((char) =>
            Math.random() < 0.5
              ? char
              : String.fromCharCode(33 + Math.floor(Math.random() * 94))
          )
          .join("");
      }, 10);

      setTimeout(() => {
        clearInterval(symbolChangeInterval);
        showFinalText();
      }, 200);
    }
  };

  setTimeout(updateLoadingText, 1000);

  const colorSymbols = (text) => {
    // Define colors for different symbols
    const symbolColors = {
      "@": "black",
      "#": "#fcb53f",
      o: "lightgray",
      "-": "white",
      "*": "white",
      "|": "white",
      "=": "white",
      ".": "white",
      ":": "#fcd2ba",
      "&": "#ec8b28",
      _: "white",
      "\\": "white",
      "/": "white",
    };

    // Replace each symbol with a span element with the appropriate color
    return text.replace(/[@#o\-\*\|\=.:&_\\\/]/g, (match) => {
      const color = symbolColors[match] || "inherit";
      return `<span style="color: ${color};">${match}</span>`;
    });
  };

  const displayWelcomeMessage = () => {
    const welcomeMessageArt = `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@.====.@@@@@@@.====.@@@@@@@@
@@@@@@o*####o=.=_=.=o&&&&*o@@@@@@@
@@@@@@|#########|&&&&&&&&&|@@@@@@@
@@@@@@|#########|&&&&&&&&&|@@@@@@@
@@.===|#########|&&&&&&&&&|===.@@@
@@|:::|#o*****o#|&o*****o&|:::|@@@
@@|:::|#|:::::|#|=*:::::|&|:::|@@@
@@|:::|#|:::::*=*:::::::|&|:::|@@@
@@*===*#\\_.:::::::::::._/&*===*@@@
@@@@|#####|:::::::::::|&&&&&|@@@@@
@@@@|#####|:::::::::::|&&&&&|@@@@@
@@@@*=====*===========*=====*@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;

    const welcomeMessageText = `
<span style="color: lightblue;">root@ndiukyDEV</span>
<span style="color: lightgray;">---------------</span>
<span style="color: lightblue;">OS: </span><span style="color: lightgray;">IDK OS x14_88</span>
<span style="color: lightblue;">Host: </span><span style="color: lightgray;">chromium</span>
<span style="color: lightblue;">Kernel: </span><span style="color: lightgray;">idkernel-69</span>
<span style="color: lightblue;">Packages: </span><span style="color: lightgray;">0 (it's not an os)</span>
<span style="color: lightblue;">Shell: </span><span style="color: lightgray;">bash 5.0.18</span>
<span style="color: lightblue;">Resolution: </span><span style="color: lightgray;">600x900</span>
<span style="color: lightblue;">Terminal: </span><span style="color: lightgray;">/dev/tmx1</span>
<span style="color: lightblue;">CPU: </span><span style="color: lightgray;">Intel Bebrium 6900U (1) @ 1.488GHz</span>
<span style="color: lightblue;">GPU: </span><span style="color: lightgray;">RTX 5090 Super TI Ultra</span>
<span style="color: lightblue;">Memory: </span><span style="color: lightgray;">2MiB / -256MiB</span>
        `;

    const styledMessageArt = colorSymbols(welcomeMessageArt);

    document.getElementById("asciiArt").innerHTML = styledMessageArt;
    document.getElementById("asciiText").innerHTML = welcomeMessageText;
  };

  consoleInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = consoleInputElement.value.trim();
      consoleInputElement.value = "";
      processCommand(command);

      // Scroll to the bottom of the console output
      const lastResponseElement = consoleResponseElement.lastElementChild;
      if (lastResponseElement) {
        lastResponseElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  const processCommand = (command) => {
    let response = "";
    switch (command.toLowerCase()) {
      case "help":
        response = `
All available commands:

    <span style="color: white;">help</span> - show this text
    <span style="color: white;">contact</span> - contact Ndiuky
    <span style="color: white;">hello</span> - greet the user
    <span style="color: white;">bye</span> - don't say it
    <span style="color: white;">amogus</span> - sussy
    <span style="color: white;">sus</span> - sussy too
                `;
        break;
      case "hello":
        response = "Hello!";
        break;
      case "contact":
        response = "You can contact me at anod100002@gmail.com.";
        break;
      case "amogus":
        response = "ඞ";
        break;
      case "sus":
        response = "ඞඞඞ";
        break;
      case "bye":
        response = `Don't leave me!`;
        break;
      default:
        response = "Unknown command.";
        break;
    }
    consoleResponseElement.innerHTML += `<div style="color: lightgray">${response}</div>`;
  };
});
