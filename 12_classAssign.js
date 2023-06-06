console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`                                                    Step 1 : Vehicle Information`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
class Vehicle 
{
    constructor(name, price, engine, transmission, fuelType )
    {
        this.name = name;
        this.price = price;
        this.engine = engine;
        this.transmission = transmission;
        this.fuelType = fuelType;
    }
    showDetails()
    {
        console.log(`Name: ${this.name}, Price : ${this.price}, Engine : ${this.engine}, Transmission :  ${this.transmission}, FuelType :  ${this.fuelType}`);
        console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
    }
}

const tatasafari = new Vehicle("Tata Safari", "18.62 lakh", "1956cc", "Manual", "Diesel");
const lamborgini = new Vehicle("Lamborghini Huracan EVO", "4.99cr", "5204cc", "Automatic", "Petrol");
const tatatiago = new Vehicle("Tata Tiago", "5.82 lakh", "1199cc", "Manual", "Petrol");
const mclaren = new Vehicle("Mclaren 720S", "4.65cr", "3994cc", "Automatic", "Petrol");
const mercedes = new Vehicle("Mercedes-Benz", "4.65cr", "2999 cc", "Automatic", "Diesel & Petrol");

const arrayOfVehicles = [tatasafari, lamborgini, tatatiago, mclaren, mercedes];
for (const element of arrayOfVehicles) 
{
    element.showDetails();
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`                                                    Step 2 : College Information`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------`);

class College{
    constructor(name ,phone, landmark, collegeCode)
    {
     this.name = name;
     this.phone = phone;
     this.landmark = landmark;
     this.collegeCode = collegeCode;   
    }
 }
 const dnclg = new College("D.N.College", "02582556674", "Wakad Road","185200");
 const dharival = new College("Dharival College", "0280268176", "Viman Nagar","236544");
 const raisony = new College("Raisony College", "9675123486", "Aakashvani chauk","9696663");
 const imrclg = new College("I.M.R College", "8574236145m", "Gandhi Udyan","222222");

function traverObject(arrayOfClg)
{
    for (const key in arrayOfClg) 
    {
        if (Object.hasOwnProperty.call(arrayOfClg, key)) 
        {
            const element = arrayOfClg[key];
            console.log(`${key} : ${element}`);
        }
    }
}
traverObject(dnclg);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
traverObject(dharival);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
traverObject(raisony);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);
traverObject(imrclg);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);

