// NOTE styled-jsx does not support interpolation for these variables without first adding
// `@media` to the styled jsx, so your css needs to look like this:
// @media ${large} { ... }

export const extraLarge = ' (min-width: 1431px)'
export const large = ' (min-width: 1140px) and (max-width: 1430px)'
export const medium = ' (min-width: 768px) and (max-width: 1139px)'
export const small = ' (max-width: 767px)'
export const smallPortrait = ' (max-width: 767px) and (orientation: portrait)'
export const smallLandscape = ' (max-width: 767px) and (orientation: landscape)'
export const verySmall = ' (max-width: 450px)'
export const print = ' print'
