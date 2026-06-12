export interface RoadConfig {
  canvas: HTMLCanvasElement;
  side: 'left' | 'right';
  roadWidth?: number;
  waveAmplitude1?: number;
  waveAmplitude2?: number;
}

export function initRoad(config: RoadConfig): () => void {
  const {
    canvas,
    side,
    roadWidth = 160,
    waveAmplitude1 = 90,
    waveAmplitude2 = 30
  } = config;

  const ctx = canvas.getContext('2d')!;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(window.scrollY);
  };

  const draw = (scrollY: number) => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (w < 1024) return;

    const phase = scrollY / 400;
    const overflow = roadWidth + 120;
    const STEPS = 300;
    const spine: { x: number; y: number }[] = [];
    const centerX = side === 'left' ? w * 0.05 : w * 0.75;

    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      const y = -overflow + t * (h + overflow * 2);
      const wave1 = Math.sin(t * Math.PI * 2.2 + phase) * waveAmplitude1;
      const wave2 = Math.sin(t * Math.PI * 4.1 + phase * 1.2) * waveAmplitude2;
      spine.push({ x: centerX + wave1 + wave2, y });
    }

    const leftPts: [number, number][] = [];
    const rightPts: [number, number][] = [];

    for (let i = 0; i < spine.length; i++) {
      const prev = spine[Math.max(i - 2, 0)];
      const next = spine[Math.min(i + 2, spine.length - 1)];
      const dx = next.x - prev.x;
      const dy = next.y - prev.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const { x, y } = spine[i];
      leftPts.push([x + nx * roadWidth / 2, y + ny * roadWidth / 2]);
      rightPts.push([x - nx * roadWidth / 2, y - ny * roadWidth / 2]);
    }

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const edgeColor = isLight ? '#000000' : 'rgba(255,255,255,0.18)';
    const centerColor = isLight ? 'rgba(180,90,0,0.9)' : 'rgba(220,130,0,0.85)';

    const drawSmooth = (pts: [number, number][], style: string, width: number, dash: number[] = []) => {
      if (pts.length < 2) return;
      ctx.beginPath();
      ctx.setLineDash(dash);
      ctx.strokeStyle = style;
      ctx.lineWidth = width;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.moveTo(pts[0][0], pts[0][1]);

      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i][0] + pts[i + 1][0]) / 2;
        const my = (pts[i][1] + pts[i + 1][1]) / 2;
        ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
      }

      const last = pts[pts.length - 1];
      ctx.lineTo(last[0], last[1]);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    drawSmooth(leftPts, edgeColor, 2.5);
    drawSmooth(rightPts, edgeColor, 2.5);

    const spinePts = spine.map(p => [p.x, p.y] as [number, number]);
    drawSmooth(spinePts, centerColor, 2, [20, 18]);
  };

  const onScroll = () => draw(window.scrollY);
  const onThemeChange = () => draw(window.scrollY);

  const themeObserver = new MutationObserver(onThemeChange);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', resize);
  resize();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', resize);
    themeObserver.disconnect();
  };
}
