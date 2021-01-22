// https://github.com/arfin-2020/Assignment-03

//Function 01
function kilometerToMeter(kilo) {
  if (kilo <= 0) {
    return "please enter valid value"; //if value is invalid that function return this
  } else {
    var result = kilo * 1000;
    return result;
  }
}

//function:02
function budgetCalculator(watch, phone, laptop) {
  if (watch <= 0 && phone <= 0 && laptop <= 0) {
    return "please enter valid value."; //if value is invalid that function return this
  } else {
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var sum = watch + phone + laptop;
    return sum;
  }
}

//function:03
function hotelCost(days) {
  var stayInHotelBill = 0;
  if (days <= 10) {
    stayInHotelBill = days * 100; //fist 10 days bills
  } else if (days <= 20) {
    var for10days = 10 * 100;
    var remaining = days - 10;
    var for20days = remaining * 80;
    stayInHotelBill = for10days + for20days; //First 20 days bills
  } else {
    var for10days = 10 * 100;
    var for20days = 10 * 80;
    var remaining = days - 20;
    var for20Updays = remaining * 50;
    stayInHotelBill = for10days + for20days + for20Updays; //First 20 up days bills
  }
  return stayInHotelBill;
}

//function:04
function megaFriend(arr) {
  var length = 0;
  var longest;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length <= 0) {
      return "Enter  Fullfill Name"; //if value is invalid that function return
    } else if (arr[i].length > length) {
      var length = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

