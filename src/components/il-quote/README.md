# `il-quote`

This component represents a quote or testimontial, with optional attribution.

All the text is centered, and the attributed and secondary text is below the quote at a fixed length. 

The margins are set before and after the quote. 

Quote marks are added automatically before and after the quote. 

The quote itself does not have special formatting, links, etc. The attributed and/or secondary text may be links, and may use emphasis. None of the text may have heading information. 

## Basic use

```
<il-quote>
Either university presses will embrace new technology and offer scholarly content in new forms to researchers and under new business models, or they will follow the music industry and spend all of their resources on trying to protect their territory -- unsuccessfully.
<p slot="attributed">Laura Cerruti</p>
<p slot="secondary">Director of Digital Content Development, University of California Press, profiled in Against the Grain</p>
</il-quote>
```