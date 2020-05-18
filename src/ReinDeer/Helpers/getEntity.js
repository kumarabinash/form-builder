/**
 * Finds form-entity from given forms-entity-config
 *
 * @constructor
 * @author: kumar.abinash@finly.io
 * @param {object} data - form-entity-config
 * @todo
 *   - Right now it updates the dependencies one after the other in the state, can be combined together to update state at once
 *
 * @returns
 */


export default function getEntity(data, entity_key) {
  if(data.hasOwnProperty('entity_key') && data['entity_key'] === entity_key){
    return data
  }

  if(data.hasOwnProperty('entities')){
    let entities = Object.values(data['entities']), entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], entity_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  } else if (Object.values(data).filter((item) => typeof item === 'object' && item !== null).length){
    let entities = Object.values(data).filter((item) => typeof item === 'object' && item !== null);
    let entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], entity_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  }
}

function getEntityWithPath(config, path){
  return path.split("/").reduce((acc, shard) => {
    return acc[shard];
  }, config);
}


export {getEntityWithPath};
