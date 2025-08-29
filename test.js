import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['src/assets/*.{svg}'], {
    destination: 'src/assets',
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  console.log('Imágenes convertidas a WebP');
})();