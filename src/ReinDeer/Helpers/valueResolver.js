/**
 * Finds value of a given entity_key from data
 *
 * @constructor
 * @author: kumar.abinash@finly.io
 * @param {object} data - form-entity-config
 * @todo
 *   - Write logic for nested entities
 *
 * @tutorial - Requires context, bind it before calling the function
 *    eg., rootEntityValue.bind(context)("policy_id")
 */

function rootEntityValue(entity_key) {
  return this.state.form_data[entity_key];
}

function nestedEntityValue(entity_key){
  return "Hello";
}

export {rootEntityValue, nestedEntityValue};