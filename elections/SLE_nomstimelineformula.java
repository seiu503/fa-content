IF(
  /* CASE 1: missing data */
  OR(
    ISBLANK(Nomination_Timeline__c),
    ISBLANK(Nomination_Timeline__r.Nomination_Start_Date_Time__c),
    ISBLANK(Nomination_Timeline__r.Nomination_End_Date_Time__c)
  ),
  "Nominations for " & Name & " are not scheduled yet",

  /* ELSE: open/close dates exist -> branch on whether NOW() falls in between open/close dates */
  IF(
    /* CASE 2: open date in future */
    NOW() < Nomination_Timeline__r.Nomination_Start_Date_Time__c,

    "Nominations for " & Name & " are not open yet; check back after " &
    CASE(MONTH(DATEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c)),
      1,"January",2,"February",3,"March",4,"April",5,"May",6,"June",
      7,"July",8,"August",9,"September",10,"October",11,"November",12,"December",""
    )
    & " " & TEXT(DAY(DATEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c)))
    & ", " & TEXT(YEAR(DATEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c)))
    & ", "
    & TEXT(MOD(HOUR(TIMEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c)) + 11, 12) + 1)
    & ":" & RIGHT("00" & TEXT(MINUTE(TIMEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c))), 2)
    & " "
    & IF(HOUR(TIMEVALUE(Nomination_Timeline__r.Nomination_Start_Date_Time__c)) < 12, "AM", "PM"),

    /* ELSE of CASE 2 -> CASE 3 or 4 */
    IF(
      /* CASE 3: close date in past */
      NOW() > Nomination_Timeline__r.Nomination_End_Date_Time__c,

      "Nominations for " & Name & " closed on " &
      CASE(MONTH(DATEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c)),
        1,"January",2,"February",3,"March",4,"April",5,"May",6,"June",
        7,"July",8,"August",9,"September",10,"October",11,"November",12,"December",""
      )
      & " " & TEXT(DAY(DATEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c)))
      & ", " & TEXT(YEAR(DATEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c)))
      & ", "
      & TEXT(MOD(HOUR(TIMEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c)) + 11, 12) + 1)
      & ":" & RIGHT("00" & TEXT(MINUTE(TIMEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c))), 2)
      & " "
      & IF(HOUR(TIMEVALUE(Nomination_Timeline__r.Nomination_End_Date_Time__c)) < 12, "AM", "PM"),

      /* CASE 4: noms open now (else of inner IF) */
      "Nominations for " & Name & " are open now."
    )
  )
)