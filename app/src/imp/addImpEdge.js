// add implementation phase edges

const bubbleTxt = require('../helpers/bubbleTxt.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.asto.concept
  let trgNodeCpt = trgNode.asto.concept

  switch (true) {
    case srcNodeCpt === 'micronet' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'connects')
      break
    case srcNodeCpt === 'micronet' && trgNodeCpt === 'net':
      addEdge(cy, srcNodeId, trgNodeId, 'requests')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'network connection':
      addEdge(cy, srcNodeId, trgNodeId, 'connects')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'net':
      addEdge(cy, srcNodeId, trgNodeId, 'belongs')
      break
    case srcNodeCpt === 'device' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'net' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'requests')
      break
    case srcNodeCpt === 'net' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    case srcNodeCpt === 'network connection' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'requires')
      break
    case srcNodeCpt === 'information' && trgNodeCpt === 'application':
      addEdge(cy, srcNodeId, trgNodeId, 'requires')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'runs')
      break
    case srcNodeCpt === 'application' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'has')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'application':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'knows')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'application':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'uses')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'knows')
      break
    case srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'poses')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'threat':
      addEdge(cy, srcNodeId, trgNodeId, 'mitigates')
      break
    case srcNodeCpt === 'constraint' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'imposes')
      break
    case srcNodeCpt === 'mechanism' && trgNodeCpt === 'constraint':
      addEdge(cy, srcNodeId, trgNodeId, 'satisfies')
      break
    case srcNodeCpt === 'mechanism' && trgNodeCpt === 'vulnerability':
      addEdge(cy, srcNodeId, trgNodeId, 'protects')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'vulnerability':
      addEdge(cy, srcNodeId, trgNodeId, 'exploits')
      break
    case srcNodeCpt === 'threat' && trgNodeCpt === 'asset':
      addEdge(cy, srcNodeId, trgNodeId, 'targets')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'micronet':
      addEdge(cy, srcNodeId, trgNodeId, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'network connection':
      addEdge(cy, srcNodeId, trgNodeId, 'affects')
      break
    case srcNodeCpt === 'vulnerability' && trgNodeCpt === 'application':
      addEdge(cy, srcNodeId, trgNodeId, 'affects')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'device':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'application':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    case srcNodeCpt === 'asset' && trgNodeCpt === 'information':
      addEdge(cy, srcNodeId, trgNodeId, 'is')
      break
    default:
      bubbleTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
