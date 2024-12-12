
interface Data {
  [key: string]: string | undefined | null | WildCardObject
}

interface WildCardObject {
  [key: string]: string | undefined | null
}

export const mapData = (data: Data | Data[], mappingValues: string[][]) => {
  if (!(data instanceof Array)) {
    data = [data]
  }
  const flattenedArrays = flattenObject(data)
  const formattedData: Map<string, string[]> = new Map()
  for (const array of flattenedArrays) {
    const arrayKeys = array.map(element => element[0])
    for (const lookUpKey of mappingValues) {

      if (arrayKeys.includes(lookUpKey[0])) {
        if (formattedData.has(lookUpKey[1])) {
          const tempArray = formattedData.get(lookUpKey[1])
          if (tempArray) {
            const tempValue = array.find(element => element[0] === lookUpKey[0])
            if (tempValue) {
              formattedData.set(lookUpKey[1], tempArray?.concat(tempValue[1]))
            }
          }
        } else {
          const tempValue = array.find(element => element[0] === lookUpKey[0])
          if (tempValue) {
            formattedData.set(lookUpKey[1], [tempValue[1]])
          }
        }
      } else {
        if (formattedData.has(lookUpKey[1])) {
          const tempArray = formattedData.get(lookUpKey[1])
          if (tempArray) {
            formattedData.set(lookUpKey[1], tempArray?.concat(''))
          }
        } else {
          formattedData.set(lookUpKey[1], [''])
        }
      }
    }
  }

  const tempReturnData: string[][] = Array.from(formattedData).map(element => [element[0], ...element[1]])
  const returnData: string[][] = transpose(tempReturnData)
  return returnData
}

const transpose = (array: string[][]) => {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

export const flattenObject = (data: Data[]) => {
  const returnArray: string[][][] = []
  for (const dataElement of data) {
    const tempArray: string[][] = []
    const firstLevelKeys = Object.keys(dataElement)
    for (const firstLevelKey of firstLevelKeys) {
      if (typeof dataElement[firstLevelKey] === 'string') {
        tempArray.push([firstLevelKey, dataElement[firstLevelKey]])
      } else if (dataElement[firstLevelKey] instanceof Array) {
        for (const subElement of dataElement[firstLevelKey]) {
          if (subElement.value) {
            tempArray.push([firstLevelKey + '.' + subElement.id, subElement.value])
          }
        }
      } else if (dataElement[firstLevelKey] instanceof Object) {
        const secondLevelKeys = Object.keys(dataElement[firstLevelKey])
        for (const secondLevelKey of secondLevelKeys) {
          if (dataElement[firstLevelKey][secondLevelKey]) {
            tempArray.push([firstLevelKey + '.' + secondLevelKey, dataElement[firstLevelKey][secondLevelKey] as string])
          }
        }
      }

    }
    returnArray.push(tempArray)
  }
  return returnArray
}



