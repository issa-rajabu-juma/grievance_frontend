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