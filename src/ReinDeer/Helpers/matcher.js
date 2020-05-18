

export default function matcher(rule, entity_value){
  let predicate = rule.predicate,
    match_type = rule.match_type;

  let match_value = rule.match_value;

  switch (predicate) {
    case "eq":
      break;
    case "gteq":
      switch(match_type){
        case "value":
          if(match_value === entity_value){
            return true
          }
          break;
        default:
          return false
      }
      break;
    case "not_in":
      switch (match_type) {
        case "value":
          if(match_value.indexOf(entity_value) === -1){
            return true
          }
          break;
        case "formula":
          break;
        case "entity":
          break;
        default:
          return false
      }
      break;
    default:
      return false
  }
  return false
}