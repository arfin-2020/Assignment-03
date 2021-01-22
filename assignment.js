

function kilometerToMeter(kilo){
    if(kilo<=0){
            return "please enter valid value";
    }
    else{
        var result = kilo*1000;
        return result;
    }
    
}



function budgetCalculator(watch,phone,laptop){
    if(watch<=0 && phone<=0 && laptop<=0){
        return "please enter valid value";
    }
    else{
        var watch = watch*50;
        var phone = phone*100;
        var laptop = laptop*500;
        var sum = watch+phone+laptop;
        return sum;
    }
    
}


function hotelCost(days)
{
    var stayInHotelBill= 0;
    if(days<=10){
        stayInHotelBill = days*100;
    }else if(days<=20){
        var for10days = 10*100;
        var remaining = days-10;
        var for20days = remaining*80;
        stayInHotelBill = for10days+for20days;
    }
    else{
        var for10days = 10*100;
        var for20days = 10*80;
        var remaining = days-20;
        var for20Updays = remaining*50; 
        stayInHotelBill = for10days+for20days+for20Updays;
    }
    return stayInHotelBill
}


function megaFriend(arr){
    var length = 0;
    var longest;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > length) {
        var length = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;

}
var array = ["Mississippi","Delaware","Ohio","Sangamon","Black","Current","Chattahochee"];
var result = megaFriend(array);
  console.log(result);
