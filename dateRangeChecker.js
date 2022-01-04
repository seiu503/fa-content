const dateRanges = [
  {
    "subLocalNumber": 1,
    "subLocalName": "Retirees",
    "openDate": "2/1/20",
    "closeDate": "3/13/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 81,
    "subLocalName": "Eastern Oregon University",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 82,
    "subLocalName": "Western Oregon University",
    "openDate": "1/14/20",
    "closeDate": "2/11/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 83,
    "subLocalName": "Oregon State University",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 84,
    "subLocalName": "Southern Oregon University",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 85,
    "subLocalName": "University of Oregon",
    "openDate": "1/8/20",
    "closeDate": "2/12/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 89,
    "subLocalName": "Portland State University",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 90,
    "subLocalName": "Oregon Institute of Technology",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 96,
    "subLocalName": "Child Care",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 98,
    "subLocalName": "Addus",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 99,
    "subLocalName": "Homecare",
    "openDate": "1/2/20",
    "closeDate": "2/7/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 108,
    "subLocalName": "Oregon Housing & Community Services",
    "openDate": "2/3/20",
    "closeDate": "3/13/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 109,
    "subLocalName": "Oregon Department of Fish And Wildlife",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 123,
    "subLocalName": "DOGAMI",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 125,
    "subLocalName": "Dept of Administrative Services",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 137,
    "subLocalName": "Dept of Justice",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 140,
    "subLocalName": "Portland Public School District",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 150,
    "subLocalName": "Dept of Revenue",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 170,
    "subLocalName": "Treasury Department",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 198,
    "subLocalName": "Beaverton - City Of",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 199,
    "subLocalName": "Tigard - City Of",
    "openDate": "1/15/20",
    "closeDate": "3/4/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 274,
    "subLocalName": "Oregon Dept of Veterans Affairs",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 294,
    "subLocalName": "Marion County Employees",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 333,
    "subLocalName": "Health/Licensing Boards and Commissions",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 390,
    "subLocalName": "Linn County Employees",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 392,
    "subLocalName": "Oregon State Hospital",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 393,
    "subLocalName": "Pendleton Cottage",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 415,
    "subLocalName": "Oregon Youth Authority",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 440,
    "subLocalName": "Dept of Consumer & Business Serv",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 459,
    "subLocalName": "Public Employees Retirement System",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 471,
    "subLocalName": "Employment Department",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 496,
    "subLocalName": "Josephine County Public Works",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 497,
    "subLocalName": "Jackson County Employees",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 501,
    "subLocalName": "Cascade Aids Project",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 543,
    "subLocalName": "Oregon State Library",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 570,
    "subLocalName": "Oregon Public Broadcasting",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 575,
    "subLocalName": "Higher Education Coordinating Commission (HECC)",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 581,
    "subLocalName": "Dept of Education",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 584,
    "subLocalName": "Teachers Standards & Practices Comm",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 585,
    "subLocalName": "Blind Commission Workers",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 592,
    "subLocalName": "Central Oregon Irrigation District",
    "openDate": "12/11/19",
    "closeDate": "1/8/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 596,
    "subLocalName": "Baker County Employees",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 603,
    "subLocalName": "Dept of Agriculture",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 629,
    "subLocalName": "Dept of Forestry",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 690,
    "subLocalName": "Water Resources Workers",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 697,
    "subLocalName": "Coos Bay - North Bend Water Board",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 730,
    "subLocalName": "ODOT",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 733,
    "subLocalName": "Oregon Parks & Recreation Dept",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 735,
    "subLocalName": "Driver & Motor Vehicle Services",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 777,
    "subLocalName": "Basin Transit Service",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 839,
    "subLocalName": "Bureau of Labor And Industries",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 858,
    "subLocalName": "Adult Foster Homes",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 902,
    "subLocalName": "Oregon Supported Living Program",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 904,
    "subLocalName": "The Child Center",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 905,
    "subLocalName": "Education Northwest",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 908,
    "subLocalName": "LCOG",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 910,
    "subLocalName": "The Dalles City Employees Assn.",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 921,
    "subLocalName": "Cannon Beach - City Of",
    "openDate": "1/29/20",
    "closeDate": "2/26/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 923,
    "subLocalName": "Wallowa Co. Roads Dept",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 924,
    "subLocalName": "Wallowa Cty Professional Employees Union",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 926,
    "subLocalName": "Wilsonville - City Of",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 937,
    "subLocalName": "OR Cascade West CoG",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 938,
    "subLocalName": "Pendleton - City Of",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": true,
    "photo": false
  },
  {
    "subLocalNumber": 963,
    "subLocalName": "CODA",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 985,
    "subLocalName": "Curry County",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 987,
    "subLocalName": "Parry Center For Children",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 995,
    "subLocalName": "Springfield - City Of",
    "openDate": "2/3/20",
    "closeDate": "3/2/20",
    "statement": false,
    "photo": false
  },
  {
    "subLocalNumber": 999,
    "subLocalName": "Alvord Taylor",
    "openDate": "1/2/20",
    "closeDate": "1/31/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 200,
    "subLocalName": "DHS/OHA",
    "openDate": "1/2/20",
    "closeDate": "2/7/20",
    "statement": true,
    "photo": true
  },
  {
    "subLocalNumber": 97,
    "subLocalName": "Nursing Homes",
    "openDate": "1/17/20",
    "closeDate": "2/14/20",
    "statement": true,
    "photo": true
  }
];
  var subLocalName;
  var openDate;
  var closeDate;
  var statement;
  var photo;
  var options = { year: "numeric", month: "short", day: "numeric" };

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", options);
  }

  function getDateRange(subLocalName) {
    console.log(`getDateRange: ${subLocalName}`);
      let returnValue;
      if (subLocalName.startsWith('DHS')) {
          console.log(`DHS: ${subLocalName}`);
          const subLocal = dateRanges.find(subLocal => subLocal['subLocalNumber'] === 200);
          openDate = new Date(subLocal.openDate);
          closeDate = new Date(subLocal.closeDate);
          statement = subLocal.statement;
          photo = subLocal.photo;
          returnValue = `${formatDate(openDate)} to ${formatDate(closeDate)}`
          console.log(returnValue);
        } else {
          dateRanges.map(function(subLocal) {
            if (subLocal['subLocalName'].startsWith(subLocalName)) {
              console.log(`Match: ${subLocalName}`);
              openDate = new Date(subLocal.openDate);
              closeDate = new Date(subLocal.closeDate);
              statement = subLocal.statement;
              photo = subLocal.photo;
              returnValue = `${formatDate(openDate)} to ${formatDate(closeDate)}`
              console.log(returnValue);
            }
          });
        }

      return [returnValue, statement, photo];
    }

  // get text value of selected option
  function getSelectedText(elementId) {
    var el = document.getElementById(elementId);

    if (el.selectedIndex === -1) {
        return null;
     }
    return el.options[el.selectedIndex].text;
  }



  document.addEventListener("DOMContentLoaded", function(){
    console.log('dom loaded');

    function checkDateRange(subLocalName) {
      // find date range based on sublocalName
      var dateRange = getDateRange(subLocalName)[0];
      var statement = getDateRange(subLocalName)[1];
      var photo = getDateRange(subLocalName)[2];
      console.log(`dateRange: ${dateRange}, statement: ${statement}, photo: ${photo}`);

      // append hidden button to DOM
      var hiddenButton = document.createElement('button');
      hiddenButton.setAttribute("id", "hiddenButton");
      hiddenButton.setAttribute("data-modal-prefix-class", "simple-animated");
      // **** **** replace with id for modal content block wrapper **** **** //
      hiddenButton.setAttribute("data-modal-content-id", "tfa_519");
      hiddenButton.setAttribute("data-modal-title", "Nominations for " + subLocalName + " are not currently open.");
      hiddenButton.setAttribute("data-modal-close-text", "Close");
      hiddenButton.setAttribute("data-modal-close-title", "Close");
      hiddenButton.setAttribute("class", "js-modal invisible");
      document.body.insertBefore(hiddenButton, document.body.firstChild);

      // check if today's date is outside the date range.
      // if so, simulate a click on the
      // hidden button to trigger the modal opening
      const today = new Date();
      console.log(`today: ${today}`);
      console.log(`openDate: ${openDate}`);
      console.log(`closeDate: ${closeDate}`);
      // set close time at 5pm on closing date
      const closeDatePlusHours = new Date(closeDate.setHours(closeDate.getHours() + 17));
      console.log(`closeDatePlusHours: ${closeDatePlusHours}`);
      console.log(`closeDatePlusHours date and time: ${closeDatePlusHours.getDate()} ${closeDatePlusHours.getHours()}`);
      console.log(`today > closeDatePlusHours? ${today > closeDatePlusHours}`);
      console.log(`today < openDate? ${today < openDate}`);
      if (today > closeDatePlusHours || today < openDate) {
        console.log('modal open');

        // generate the explanatory text
        const tooLate = `<p class="dateInfo">Nominations for ${subLocalName} closed on ${formatDate(closeDate)} at 5pm. For more information on election timelines, please visit <a href="http://www.seiu503.org">seiu503.org</a></p>.`;
        const tooSoon = `<p class="dateInfo">Nominations for ${subLocalName} will open on ${formatDate(openDate)} and close on ${formatDate(closeDate)} at 5pm. Please check back during the nomination open window to submit your nomination.</p>`;
        const info = (
           today > closeDatePlusHours ?
           tooLate :
           today < openDate ?
           tooSoon : ''
        );
        console.log(info);

        // append info to dateRange display div
        const dateRangeSpan = document.getElementById('dateRange');
        const dateRangeDates = `<p class="dateRange">${subLocalName} Nominations open: ${dateRange}<p>`;
        const infoHtml = `${dateRangeDates} ${info}`;

        dateRangeSpan.innerHTML = info;
        console.log(dateRangeSpan.innerHTML);

        // open the modal
        document.getElementById("hiddenButton").click();

        // hide the rest of the form, disable submit button
        document.getElementById("tfa_636").setAttribute('style','display:none;');
        document.getElementById("tfa_662").setAttribute('style','display:none;');
        document.getElementById("submit_button").setAttribute('disabled','true');

      } else {
        // display the rest of the form, re-enable submit button
        document.getElementById("tfa_636").setAttribute('style','display:block;');
        document.getElementById("tfa_662").setAttribute('style','display:block;');
        document.getElementById("submit_button").removeAttribute('disabled');
      }

      // if photo
      if (photo) {
        // show photo section
        document.getElementById("tfa_2310").setAttribute('style','display:block;');
      } else {
        // hide photo section
        document.getElementById("tfa_2310").setAttribute('style','display:none;');
      }

      // if statement
      if (statement) {
        // show statement section
        document.getElementById("tfa_2309").setAttribute('style','display:block;');
      } else {
        // hide statement section
        document.getElementById("tfa_2309").setAttribute('style','display:none;');
      }
    }

    // when sublocal is selected: tfa_533: care provider
    document.getElementById('tfa_533').addEventListener('change', function() {
      subLocalName = getSelectedText('tfa_533');
      console.log(`subLocalName: ${subLocalName}`);
      checkDateRange(subLocalName);
    });

    // when sublocal is selected: tfa_12308: public services: state
    document.getElementById('tfa_12308').addEventListener('change', function() {
      subLocalName = getSelectedText('tfa_12308');
      console.log(`subLocalName: ${subLocalName}`);
      checkDateRange(subLocalName);
    });

    // when sublocal is selected: tfa_12289: public services: hiEd/lGov
    document.getElementById('tfa_12289').addEventListener('change', function() {
      subLocalName = getSelectedText('tfa_12289');
      console.log(`subLocalName: ${subLocalName}`);
      checkDateRange(subLocalName);
    });

    // when division is selected: tfa_1178: retirees
    document.getElementById('tfa_1178').addEventListener('change', function() {
      console.log(getSelectedText('tfa_1178'));
      if (getSelectedText('tfa_1178') === 'Retirees') {
        subLocalName = getSelectedText('tfa_1178');
        console.log(`subLocalName: ${subLocalName}`);
        checkDateRange(subLocalName);
      }

    });



  });