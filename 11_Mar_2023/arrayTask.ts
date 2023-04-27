{
    let cities: String[] = ["rwp", "isl", "lhr", "mul"];
    let userCity: string = "rwp";
    let isCleanCity: boolean = false;

    for (let city of cities) {
        if (city.toLowerCase() === userCity.toLowerCase()) {
            isCleanCity = true;
            break;
        }
    }

    if (isCleanCity) console.log(`${userCity} is a Clean City`);
    else console.log(`${userCity} is not a Clean City`);
}
