interface Project {
  name: string;
  description: string;
  link: string;
}
export const projects: Project[] = [
  {
    name: "Elemental",
    description:
      "A website to help you with chemistry calculations. Built with Vue and TypeScript, it mainly processes data from a json and matches it to the input.",
    link: "https://elemental-mocha.vercel.app",
  },
  {
    name: "Blog",
    description:
      "A simple blog built with some template and Astro. Astro is nice",
    link: "https://blog.tnixc.space",
  },
  {
    name: "Maintainer at Catppuccin",
    description:
      "A very nice color scheme. I write css(pain) for userstyles. And they have nice people on discord too.",
    link: "https://github.com/catppuccin/catppuccin",
  },
  {
    name: "Dotfiles",
    description:
      "My dotfiles for my macOS setup. Includes my yabai config, sketchybar config, and more. I also have a seperate repo for my firefox user css. It is a mess and probably outdated.",
    link: "https://github.com/Tnixc/dots",
  },
  {
    name: "nu-hist",
    description: "A simple rust cli to read from nu shell's sqlite history and shows the most used commands",
    link: "https://github.com/Tnixc/nu-hist",
  },
  {
    name: "Other projects",
    description:
      "I have more projects on my github. You can check them out there. Theres 3 previous versions of this website, and another repo where I build some cool ui stuff",
    link: "https://github.com/Tnixc",
  },
];
