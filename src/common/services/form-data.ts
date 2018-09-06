export const transformToFromData = (obj: any): any => {
    const formDataModel = new FormData();
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            formDataModel.append(key, obj[key]);
        }
    }
    return formDataModel;
}