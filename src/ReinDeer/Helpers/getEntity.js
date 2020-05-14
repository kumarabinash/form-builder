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


export default function getEntity(data, field_key) {
  if(data.hasOwnProperty('field_key') && data['field_key'] === field_key){
    return data
  }

  if(data.hasOwnProperty('entities')){
    let entities = Object.values(data['entities']), entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], field_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  } else if (Object.values(data).filter((item) => typeof item === 'object' && item !== null).length){
    let entities = Object.values(data).filter((item) => typeof item === 'object' && item !== null);
    let entity;
    for(let i = 0; i < entities.length; i++){
      entity = getEntity(entities[i], field_key);
      if(typeof entity === 'object' && entity !== undefined){
        break
      }
    }
    return entity;
  }
}
