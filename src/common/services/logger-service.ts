export const logger = (screen: string, title: string, data: any) => {
    console.log('Started---------------------------------------------->');
    console.log(`${screen} Screen`.toLocaleUpperCase());
    console.log(`${title}`.toLocaleUpperCase());
    console.log(data);
    console.log('End---------------------------------------------->');
}
