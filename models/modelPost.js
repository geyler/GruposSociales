import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const modelPost = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  red: {
    type: String,
    required: true,
  },
  vistas: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  creador: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

modelPost.plugin(mongoosePaginate);

const MPost = models.MPost || model('MPost', modelPost);

export default MPost;
