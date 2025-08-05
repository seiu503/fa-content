<script type="text/javascript"> 

  window.addEventListener("load", function() {

    const mmEl = document.getElementById("tfa_129");
    const ddEl = document.getElementById("tfa_133");
    const yyyyEl = document.getElementById("tfa_131");
    const dobEl = document.getElementById("tfa_113");

    var mmSelect = document.getElementById("tfa_156");
    var ddSelect = document.getElementById("tfa_157");
    var yyyySelect = document.getElementById("tfa_158");

    const dateSelects = [mmSelect, ddSelect, yyyySelect];

    // switch helper for dateOptions
    const getMaxDay = month => {
      switch (month) {
        case "02":
          return 29;
        case "04":
        case "06":
        case "09":
        case "11":
          return 30;
        default:
          return 31;
      }
    };

    // function to adjust date select based on mm value
    const dateOptions = () => {
      const selectVal = el => el.options[el.selectedIndex].text;
      const mm = selectVal(mmSelect);
      const max = getMaxDay(mm);
      let dates = [];
      for (let i = 1; i <= max; i++) {
        if (i < 10) {
          dates.push("0" + i);
        } else {
          dates.push(i.toString());
        }
      }
      dates.unshift("");
      return dates;
    };

    // dynamically fills yyyy select with last 100 years
    const yearOptions = () => {
      let years = [];
      for (
        let i = new Date().getFullYear() - 99;
        i <= new Date().getFullYear();
        i++
      ) {
        years.unshift(i.toString());
      }
      years.unshift("");
      return years;
    };

    function emptyCombo(selectEl) {
      selectEl.options.length = 1;
      return selectEl;
    }

    function appendChildren(el, children) {
      return el.append(...children);
    }

    function populateCombo(selectEl, items) {
      return appendChildren(selectEl, items.map(item => new Option(item, item)));
    }

    mmSelect.addEventListener('change', function() {
      populateCombo(emptyCombo(ddSelect), dateOptions());
    })

    populateCombo(emptyCombo(yyyySelect), yearOptions());

    

    // date formatter for submitting to Salesforce
    const formatSFDate = date => {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    };


    // convert MM DD YYYY to SF-formatted birthdate
    const formatBirthdate = (mm, dd, yyyy) => {
      console.log("formatBirthdate");
      console.log(mm, dd, yyyy);
      const dobRaw = `${mm}/${dd}/${yyyy}`;
      console.log(dobRaw);
      return formatSFDate(dobRaw);
    };

    dateSelects.forEach(field => field.addEventListener('change', function() {
      console.log('updating birthdate field from selects');
      const selectVal = el => el.options[el.selectedIndex].text;
      dobEl.value = formatBirthdate(selectVal(mmSelect), selectVal(ddSelect), selectVal(yyyySelect));
    }));

  });

</script>


