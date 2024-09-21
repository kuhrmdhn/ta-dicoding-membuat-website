const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['assets/script.js', 'assets/animation.js','assets/global.css', 'assets/animation.css', 'assets/theme.css'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  sourcemap: true,
  loader: {
    '.png': 'file',
    '.webp': 'file',
    '.css': 'css'
  },
}).catch(() => process.exit(1));
