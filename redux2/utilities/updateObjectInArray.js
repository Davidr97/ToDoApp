
export const updateObjectInArray = (newObj, updateBy, arr) => {
    return arr.map(obj => obj[updateBy] === newObj[updateBy] ? ({
        ...obj,
        ...newObj
    }) : obj)
};
