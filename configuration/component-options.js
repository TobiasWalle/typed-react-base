const {
  buildSubGeneratorOptions
} = require('../utils/build-sub-generator-options');
const {
  GeneratorOptionCollection
} = require('../models/generator-option-collection');
const {
  GeneratorOption
} = require('../models/generator-option');

module.exports = buildSubGeneratorOptions(
  'component',
  new GeneratorOptionCollection([
    new GeneratorOption('flat', {
      cliOptions: {
        alias: 'f',
        type: Boolean,
        desc: 'Generates the component files directly into the destination folder, without generating a subfolder ' +
        'with the component name',
        default: false
      }
    }),
    new GeneratorOption('stateless', {
      cliOptions: {
        alias: 's',
        type: Boolean,
        desc: 'Generates a stateless component instead of a stateful one. This also means there will be' +
        ' no styles generated for this component',
        default: false
      }
    })
  ])
);