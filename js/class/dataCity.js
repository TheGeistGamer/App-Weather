let basedata = [];

export function data(id, info) {
    basedata.push({id,info});
}

export function checkData(str) {
    if(basedata.length == 0) return false;

    else{
        let container = '';
        for(let val of basedata) {
            container = val.info[2] == str;

            if(container) return container;
        }
    }
}


