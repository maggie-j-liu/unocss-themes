# unocss-themes

This is an unocss variant generator that generates variants for multiple color themes. It's similar to the [tailwind-themes](https://github.com/maggie-j-liu/tailwind-themes) plugin, but for [unocss](https://github.com/antfu/unocss). 

To use it, install the package:

```bash
# using npm
npm install unocss-themes

# using yarn
yarn add unocss-themes
```

The package will generate variants, which you'll need to add to your unocss config. To generate variants, pass in a `themes` object. For example,

```js
import unocssThemes from "unocss-themes"

const variants = unocssThemes({
  themes: {
    blue: ".blue",
    purple: ".theme-purple",
  },
})
```

Each key is the name of the variant (so a key of `blue` would create classes such as `blue:text-blue-900`) and each value is the selector that activates the variant (a value of `".theme-purple"` means that the purple variant will be activated if a class of `.theme-purple` exists earlier in the HTML tree). In addition, attributify mode is enabled so `class="blue:text-blue-900"` and `blue="text-blue-900` will both work.

The function will return an array of variants that you should add to your unocss config like so:

```js
unocss({
  variants: [
    ...unocssThemes({
      themes: {
        blue: ".blue",
        purple: ".theme-purple",
      },
    }),
    // add your custom variants here
  ],
})
```

To see an example of unocss-themes in action, check out the [unocss-themes demo](https://unocssthemes.vercel.app).
