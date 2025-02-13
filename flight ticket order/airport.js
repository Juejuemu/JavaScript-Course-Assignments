function lookup(city,day){
    //   alert("I am seeing a city of " + city + " and a day of " + day); 
    //   REMOVE ME! Only for testing. This is REALLY in my version -- DO NOT USE.
    //   This is ONLY included so you can have an IDEA of how this should work.
    //   The "real" lookup() is in my library.  If you don't remove this, that one won't work.
    var nday = parseInt(day);
      switch(nday){
        case 0: return sunday(city); break;
        case 1: return monday(city); break;
        /*case 2: return tuesday(city); break;
        case 3: return wednesday(city); break;
        case 4: return thursday(city); break;
        case 5: return friday(city); break;
        case 6: return saturday(city); break; */
        default: alert("Monterey, we have a problem!  I'm seeing a day of " + nday);
      }
    }



    function sunday(city){
    //  I am also ONLY for testing.  And also, if you DO NOT remove me, your program won't work correctly!
        var returnString = "";
          switch(city){
            case "New York City": returnString = "MAS 123©Sunday©05:30©17:00©$500.00"; return returnString; break;
            case "Honolulu": returnString = "MAS 999©Sunday©10:00©13:00©$650.00"; return returnString; break;
            case "Hong Kong": returnString = "MAS 888©Sunday©09:00©15:00©$850.00"; return returnString; break;
            case "Beijing": returnString = "MAS 222©Sunday©11:00©18:00©$950.00"; return returnString; break;
            case "Tokyo": returnString = "MAS 456©Sunday©10:00©02:00©$800.00"; return returnString; break;
            case "Ulaanbaatar": returnString = "MAS 777©Sunday©08:00©15:00©$600.00"; return returnString; break;
            case "London": returnString = "MAS 555©Sunday©12:00©12:00©$625.00"; return returnString; break;   
            default: alert("Destination invalid!  I'm seeing a destination of " + city); break;
          }
    }

    function monday(city){
      //  I am also ONLY for testing.  And also, if you DO NOT remove me, your program won't work correctly!
          var returnString = "";
            switch(city){
              case "New York City": returnString = "MAS 123©Monday©05:30©17:00©$500.00"; return returnString; break;
              case "Honolulu": returnString = "MAS 999©Sunday©10:00©13:00©$650.00"; return returnString; break;
              case "Hong Kong": returnString = "MAS 888©Sunday©09:00©15:00©$850.00"; return returnString; break;
              case "Beijing": returnString = "MAS 222©Sunday©11:00©18:00©$950.00"; return returnString; break;
              case "Tokyo": returnString = "MAS 456©Sunday©10:00©02:00©$800.00"; return returnString; break;
              case "Ulaanbaatar": returnString = "MAS 777©Sunday©08:00©15:00©$600.00"; return returnString; break;
              case "London": returnString = "MAS 555©Sunday©12:00©12:00©$625.00"; return returnString; break;   
              default: alert("Destination invalid!  I'm seeing a destination of " + city); break;
            }
      }