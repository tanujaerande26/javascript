var checkLeapYear=function (leapyear){
    if(leapyear==null||leapyear==undefined||isNaN(leapyear)){
        console.log(`${leapyear} Enter valid input`);
    }
    else{
        if((0==leapyear%4)&&(0!==leapyear%100)||(0==leapyear%400)){
            console.log(`${leapyear} is a leep year`);
       }
       else{
        console.log(`${leapyear} This is not leapyear`);
       }
    }
    }
    checkLeapYear(2020);
    checkLeapYear(1999);
    checkLeapYear(1600);
    checkLeapYear(2022);
    checkLeapYear(1945);
    checkLeapYear(null);
    checkLeapYear("Twnntity Twinty");
    checkLeapYear(undefined);
    checkLeapYear(NaN);
    checkLeapYear(1750);