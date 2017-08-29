// defines the phase specific functions

// require design modules
const dgn = require('../design/design.js')

// require design-state Models
const dgnState = require('../design-state/dgnState.js')

// reguire implementation modules
const imp = require('../implementation/implementation.js')

// require implementation-state modules
const impState = require('../implementation-state/impState.js')

// const count = cy => totalNodes(cy)

// phases model validation
const validateFunc = (cy, phase) => {
  if (phase === 'design') {
    dgn.validate(cy)
  } else if (phase === 'design-state') {
    dgnState.validate(cy)
  } else if (phase === 'implementation') {
    imp.validate(cy)
  } else if (phase === 'implementation-state') {
    impState.validate(cy)
  }
}

// phases model overview
const overviewFunc = (cy, phase) => {
  if (phase === 'design') {
    dgn.overview(cy)
  } else if (phase === 'design-state') {
    dgnState.overview(cy)
  } else if (phase === 'implementation') {
    imp.overview(cy)
  } else if (phase === 'implementation-state') {
    impState.overview(cy)
  }
}

module.exports = {
  totalNodes: require('./totalNodes.js'),
  validateFunc: validateFunc,
  overviewFunc: overviewFunc
}
