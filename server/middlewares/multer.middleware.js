import path from 'path';
import multer from 'multer';

const upload = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (_req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (_req, file, cb) => {
    let ext = path.extname(file.originalname);

    if (
      ext !== '.jpg' &&
      ext !== '.jpeg' &&
      ext !== '.webp' &&
      ext !== '.png'
    ) {
      cb(new Error(`Unsupported file type ! ${ext}`), false);
    }
    cb(null, true);
  },
});

export default upload;
