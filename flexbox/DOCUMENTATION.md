Flexbox properties:

- **display: flex**: Implement flexbox in a container.
- **flex-direction: row**: Align the main axis of the flexbox container horizontally.
- **flex-direction: column**: Align the main axis of the flexbox container vertically.
- **justify-content: \<value>**: Justify the content of the flexbox container according to its main axis.
- align-items: \<value>\*\*: Align the content of the flexbox container according to its cross axis.
- **align-self: \<value>**: Overrides the _align-items_ value for a specific item.

Breakpoints:

The breakpoints used are based on the values preset by [bootstrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/), specifically the _medium_ and _large_ breakpoints.

The css properties for these breakpoints are in a separate file for better control of the styles:

- _medium_: media-query-md.css
- _large_: media-query-lg.css
