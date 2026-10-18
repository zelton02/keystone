/**
 * Optional stylelint layer. The zero-dependency audit above is the default gate;
 * this config is for projects that already run stylelint and want editor feedback.
 *
 * Requires: stylelint, stylelint-declaration-strict-value
 */
export default {
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "color-no-hex": true,
    "declaration-property-value-disallowed-list": {
      "/^(margin|padding|gap|inset|top|right|bottom|left)/": ["/^[0-9.]+(px|rem|em)$/"],
    },
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke"],
      { ignoreValues: ["transparent", "currentColor", "inherit", "none"] },
    ],
  },
};
