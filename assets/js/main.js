function global() {
  return {
    isMobileMenuOpen: false,
    isDarkMode: false,
    themeInit() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      } else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        this.isDarkMode = false;
      }
    },
    themeSwitch() {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        this.isDarkMode = false;
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      }
    },
  };
}

function startTypewriter(id) {
  const element = document.getElementById(id);

  const typewriter = new Typewriter(element, {
    loop: true,
  });

  typewriter
    .typeString("I'm a software engineer.")
    .pauseFor(2500)
    .deleteChars(18)
    .typeString('full-stack developer.')
    .pauseFor(2500)
    .deleteChars(21)
    .typeString('web developer.')
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('problem solver.')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString('cat fancier.')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('gamer.')
    .pauseFor(2500)
    .start();
}

startTypewriter('introduce');
