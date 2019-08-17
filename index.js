import * as tf from '@tensorflow/tfjs';

const MODEL_URL = '/model/tensorflowjs_model.pb'
const WEIGHTS_URL = '/model/weights_manifest.json'

// https://js.tensorflow.org/api/0.15.1/#loadFrozenModel
const model = await tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL)

const prediction = model.predict()

document.write(5 + 6);
