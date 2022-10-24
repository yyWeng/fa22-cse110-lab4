for (const property in statistics) {
    if(property.startsWith('r'))
    console.log(`${property}: ${statistics[property]}`);
    else if (statistics[property]/2!=1){
        console.log(`${property}: ${statistics[property]}`)
    }
}