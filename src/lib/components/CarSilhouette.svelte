<!-- Blueprint-style side profile of the solar car, drawn with theme tokens so it adapts to light/dark. -->
<svg viewBox="0 0 640 230" role="img" aria-label="Side profile drawing of the WSC-26 solar car">
  <!-- measurement guides -->
  <g class="guides">
    <line x1="48" y1="34" x2="48" y2="196" />
    <line x1="596" y1="34" x2="596" y2="196" />
    <line x1="48" y1="40" x2="596" y2="40" />
  </g>

  <!-- ground -->
  <line class="ground" x1="20" y1="196" x2="620" y2="196" />

  <!-- wheels -->
  <g class="wheel">
    <circle cx="168" cy="174" r="22" />
    <circle cx="168" cy="174" r="8" />
    <circle cx="472" cy="174" r="22" />
    <circle cx="472" cy="174" r="8" />
  </g>

  <!-- body -->
  <path
    class="body"
    d="M48 172
       C 96 130, 190 104, 320 100
       C 450 96, 552 128, 596 166
       L 596 172
       C 560 180, 480 184, 320 184
       C 160 184, 84 180, 48 172
       Z"
  />

  <!-- canopy -->
  <path class="canopy" d="M336 100 C 354 76, 396 76, 416 98" />

  <!-- solar array cells along the top surface -->
  <g class="cells">
    <line x1="96" y1="140" x2="106" y2="127" />
    <line x1="128" y1="130" x2="137" y2="118" />
    <line x1="160" y1="122" x2="168" y2="110" />
    <line x1="192" y1="115" x2="199" y2="104" />
    <line x1="224" y1="110" x2="230" y2="100" />
    <line x1="256" y1="106" x2="261" y2="97" />
    <line x1="288" y1="103" x2="292" y2="95" />
    <line x1="448" y1="106" x2="456" y2="116" />
    <line x1="480" y1="112" x2="488" y2="122" />
    <line x1="512" y1="120" x2="520" y2="131" />
    <line x1="544" y1="130" x2="552" y2="142" />
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: auto;
  }

  .guides {
    stroke: var(--border);
    stroke-width: 1;
    stroke-dasharray: 4 6;
  }

  .ground {
    stroke: var(--border-strong);
    stroke-width: 1.5;
  }

  .wheel circle {
    fill: none;
    stroke: var(--text-faint);
    stroke-width: 2;
  }

  .body {
    fill: var(--surface-raised);
    stroke: var(--text);
    stroke-width: 2.5;
    stroke-linejoin: round;
  }

  .canopy {
    fill: none;
    stroke: var(--text);
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  .cells line {
    stroke: var(--accent);
    stroke-width: 2.5;
    stroke-linecap: round;
  }
</style>
