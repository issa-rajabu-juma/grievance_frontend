export function getItemByUID(object: any, uid: any) {
    let output = Array()

    if (object !== null) {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const item = object[key];
          if (item.user === uid) {
            output.push(item)
            break
          }
        }
      } 
    }

    return output
}

export function getSingleItem(array: any) {
    if (array.length === 1) {
         for (let index = 0; index < array.length; index++) {
            return array[index]            
        }
    }
}

export function getGriever(grievers: any, user: any) {
   
    // console.log(grievers)
    const griever = getItemByUID(grievers, user.id)[0]
    console.log(griever)
    const grv = getItemByUID(grievers, user.id)
    console.log(grv === griever)
    // return grv
}

export function object2array(object: any) {
  let data = Array()
  if (object !== null) {

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const obj = object[key];
      data.push(obj)
    }
  }
}
  return data
}


export function segmentGrievances(object: any, bin: any) {
  let data = Array()
  if (object !== null) {
     for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const obj = object[key];
      if (bin === 'anonymous' && obj.anonymous === 1) {
        data.push(obj)
      }

      if (bin === 'default' && obj.anonymous === 0) {
        data.push(obj)
      }

      if (bin === 'ongoing' && obj.operational_status !== 'closed') {
        if (obj.operational_status !== 'resolved') {
          data.push(obj)
        }
      }

      if (bin === 'resolved' && obj.operational_status === 'resolved') {
        data.push(obj)
      }

      if (bin === 'closed' && obj.operational_status === 'closed') {
        data.push(obj)
      }

      if (bin === 'reopened' && obj.operational_status === 'reopened') {
        data.push(obj)
      }

    }
  }
  }

  return data
}