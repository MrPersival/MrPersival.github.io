function openLink(linkName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(linkName).style.display = "block";
    tablinkPressed = document.getElementsByClassName("tablinkPressed");
    for (i = 0; i < tablinkPressed.length; i++) {
      tablinkPressed[i].classList.replace("tablinkPressed", "tablink");
    }
    elmnt.classList.replace("tablink", "tablinkPressed");
  
}

function openReportType(reportName, elmnt) {
    var i, reportContents;
    reportContents = document.getElementsByClassName("reportType");
    for (i = 0; i < reportContents.length; i++) {
        reportContents[i].style.display = "none";
    }

    document.getElementById(reportName).style.display = "block";
    
    document.querySelector("#dropbtnReports").textContent = elmnt.textContent;
  
}


detectivesCount = 1;

function addDt() {
  detectivesCount++;

  var detectiveData = document.createElement("div");
  detectiveData.id = "detectiveData" + detectivesCount;

  var dtRankText = document.createTextNode(" Звание: ");
  var dtRankInput = document.createElement("input");
  dtRankInput.id = "dtRank" + detectivesCount;
  detectiveData.appendChild(dtRankText);
  detectiveData.appendChild(dtRankInput);

  var dtPositionText = document.createTextNode(" Должность: ");
  var dtPositionInput = document.createElement("input");
  dtPositionInput.id = "dtPosition" + detectivesCount;
  detectiveData.appendChild(dtPositionText);
  detectiveData.appendChild(dtPositionInput);

  var dtNameSurnameText = document.createTextNode(" Имя фамилия: ");
  var dtNameSurnameInput = document.createElement("input");
  dtNameSurnameInput.id = "dtNameSurname" + detectivesCount;
  detectiveData.appendChild(dtNameSurnameText);
  detectiveData.appendChild(dtNameSurnameInput);

  detectiveData.appendChild(document.createElement("br"));

  document.getElementById("detectives").appendChild(detectiveData);
  
}

function removeDt() {
  if(detectivesCount > 0) {
    document.getElementById("detectiveData" + detectivesCount).remove();
    detectivesCount--;
  }
}


witnessCount = 0;

function addWitness() {
  witnessCount++;

  var witnessData = document.createElement("div");
  witnessData.id = "witnessData" + witnessCount;

  var witnessNameSurnameText = document.createTextNode(" Имя фамилия: ");
  var witnessNameSurnameInput = document.createElement("input");
  witnessNameSurnameInput.id = "witnessNameSurname" + witnessCount;
  witnessData.appendChild(witnessNameSurnameText);
  witnessData.appendChild(witnessNameSurnameInput);

  var witnessDOBText = document.createTextNode(" Дата рождения: ");
  var witnessDOBInput = document.createElement("input");
  witnessDOBInput.id = "witnessDOB" + witnessCount;
  witnessData.appendChild(witnessDOBText);
  witnessData.appendChild(witnessDOBInput);

  var witnessPhoneText = document.createTextNode(" Контактный номер: ");
  var witnessPhoneInput = document.createElement("input");
  witnessPhoneInput.id = "witnessPhone" + witnessCount;
  witnessData.appendChild(witnessPhoneText);
  witnessData.appendChild(witnessPhoneInput);

  var witnessAdressText = document.createTextNode(" Адрес проживания: ");
  var witnessAdressInput = document.createElement("input");
  witnessAdressInput.id = "witnessAdress" + witnessCount;
  witnessData.appendChild(witnessAdressText);
  witnessData.appendChild(witnessAdressInput);

  witnessData.appendChild(document.createElement("br"));

  
  var witnessStatementText = document.createTextNode(" Полученая информация: ");
  var witnessStatementInput = document.createElement("textarea");
  witnessStatementInput.id = "witnessStatement" + witnessCount;
  witnessData.appendChild(witnessStatementText);
  witnessData.appendChild(document.createElement("br"));
  witnessData.appendChild(witnessStatementInput);
  
  witnessData.appendChild(document.createElement("br"));

  document.getElementById("witnesses").appendChild(witnessData);
  
}

function removeWitness() {
  if (witnessCount > 0) {
    document.getElementById("witnessData" + witnessCount).remove();
    witnessCount--;
  }
}


evidenceCount = 0;

function addEvidence() {
  evidenceCount++;

  var evidenceData = document.createElement("div");
  evidenceData.id = "evidenceData" + evidenceCount;

  var evidenceDescribtionText = document.createTextNode(" Улика #" + evidenceCount + ": ");
  var evidenceDescribtionInput = document.createElement("input");
  evidenceDescribtionInput.id = "evidenceDescribtion" + evidenceCount;
  evidenceData.appendChild(evidenceDescribtionText);
  evidenceData.appendChild(evidenceDescribtionInput);
  
  evidenceData.appendChild(document.createElement("br"));

  document.getElementById("evidences").appendChild(evidenceData);
  
}

function removeEvidence() {
  if (evidenceCount > 0) {
    document.getElementById("evidenceData" + evidenceCount).remove();
    evidenceCount--;
  } 
}

participantsCount = 0;

function addParticipant() {
  participantsCount++;

  var participantsData = document.createElement("div");
  participantsData.id = "participantsData" + participantsCount;

  var participantsNameSurnameText = document.createTextNode(" Имя фамилия: ");
  var participantsNameSurnameInput = document.createElement("input");
  participantsNameSurnameInput.id = "participantsNameSurname" + participantsCount;
  participantsData.appendChild(participantsNameSurnameText);
  participantsData.appendChild(participantsNameSurnameInput);

  var participantsStatusText = document.createTextNode(" Статус: ");
  var participantsStatusInput = document.createElement("input");
  participantsStatusInput.id = "participantsStatus" + participantsCount;
  participantsStatusInput.setAttribute('list', "dataListStatus" + participantsCount) ;
  var participantsDataListStatus = document.createElement("datalist")
  participantsDataListStatus.id = "dataListStatus" + participantsCount
  var option1 = document.createElement("option")
  option1.value = "ИНФОРМАТОР"
  var option2 = document.createElement("option")
  option2.value = "ПОТЕРПЕВШИЙ"
  var option3 = document.createElement("option")
  option3.value = "ПОДОЗРЕВАЕМЫЙ"
  participantsDataListStatus.appendChild(option1)
  participantsDataListStatus.appendChild(option2)
  participantsDataListStatus.appendChild(option3)

  participantsData.appendChild(participantsStatusText);
  participantsData.appendChild(participantsStatusInput);
  participantsData.appendChild(participantsDataListStatus);

  var participantsConditionText = document.createTextNode(" Cостояние: ");
  var participantsConditionInput = document.createElement("input");
  participantsConditionInput.id = "participantsCondition" + participantsCount;
  participantsConditionInput.setAttribute('list', "dataListCondition" + participantsCount) ;
  var participantsDataListCondition = document.createElement("datalist")
  participantsDataListCondition.id = "dataListCondition" + participantsCount
  var option1 = document.createElement("option")
  option1.value = "ЖИВ"
  var option2 = document.createElement("option")
  option2.value = "ПРОПАЛ"
  var option3 = document.createElement("option")
  option3.value = "УБИТ"
  var option4 = document.createElement("option")
  option4.value = "АРЕСТОВАН"
  participantsDataListCondition.appendChild(option1)
  participantsDataListCondition.appendChild(option2)
  participantsDataListCondition.appendChild(option3)
  participantsDataListCondition.appendChild(option4)

  participantsData.appendChild(participantsConditionText);
  participantsData.appendChild(participantsConditionInput);
  participantsData.appendChild(participantsDataListCondition);

  var participantsRaceText = document.createTextNode(" Раса: ");
  var participantsRaceInput = document.createElement("input");
  participantsRaceInput.id = "participantsRace" + participantsCount;
  participantsRaceInput.setAttribute('list', "dataListRace" + participantsCount) ;
  var participantsDataListRace = document.createElement("datalist")
  participantsDataListRace.id = "dataListRace" + participantsCount
  var option1 = document.createElement("option")
  option1.value = "БЕЛЫЙ ИЛИ ЕВРОПЕОИД"
  var option2 = document.createElement("option")
  option2.value = "ЧЕРНЫЙ ИЛИ АФРОАМЕРИКАНЕЦ"
  var option3 = document.createElement("option")
  option3.value = "ИСПАНОЯЗЫЧНЫЙ ИЛИ ЛАТИНОАМЕРИКАНЕЦ"
  var option4 = document.createElement("option")
  option4.value = "АМЕРИКАНСКИЙ ИНДЕЕЦ"
  var option5 = document.createElement("option")
  option5.value = "АЗИАТ"
  var option6 = document.createElement("option")
  option6.value = "БЛИЖНЕВОСТОЧНЫЙ"
  participantsDataListRace.appendChild(option1)
  participantsDataListRace.appendChild(option2)
  participantsDataListRace.appendChild(option3)
  participantsDataListRace.appendChild(option4)
  participantsDataListRace.appendChild(option5)
  participantsDataListRace.appendChild(option6)

  participantsData.appendChild(participantsRaceText);
  participantsData.appendChild(participantsRaceInput);
  participantsData.appendChild(participantsDataListRace);

  participantsData.appendChild(document.createElement("br"));

  var participantsAgeText = document.createTextNode(" Возраст: ");
  var participantsAgeInput = document.createElement("input");
  participantsAgeInput.id = "participantsAge" + participantsCount;
  participantsData.appendChild(participantsAgeText);
  participantsData.appendChild(participantsAgeInput);

  var participantsAdressText = document.createTextNode(" Место жительства: ");
  var participantsAdressInput = document.createElement("input");
  participantsAdressInput.id = "participantsAdress" + participantsCount;
  participantsData.appendChild(participantsAdressText);
  participantsData.appendChild(participantsAdressInput);

  var participantsPhoneText = document.createTextNode(" Номер телефона: ");
  var participantsPhoneInput = document.createElement("input");
  participantsPhoneInput.id = "participantsPhone" + participantsCount;
  participantsData.appendChild(participantsPhoneText);
  participantsData.appendChild(participantsPhoneInput);

  participantsData.appendChild(document.createElement("br"));

  var participantsNotesText = document.createTextNode(" Примечания: ");
  var participantsNotesInput = document.createElement("input");
  participantsNotesInput.id = "participantsNotes" + participantsCount;
  participantsNotesInput.placeholder = "ЗАПОЛНИТЬ/ОТСУТСТВУЮТ."
  participantsNotesInput.size = 30
  participantsData.appendChild(participantsNotesText);
  participantsData.appendChild(participantsNotesInput);

  var participantsStatementText = document.createTextNode(" Показания: ");
  var participantsStatementInput = document.createElement("input");
  participantsStatementInput.id = "participantsStatement" + participantsCount;
  participantsStatementInput.placeholder = "НОМЕР ЗАПИСИ ДОПРОСА/НОМЕР ОТЧЁТА ОБ ОПРОСЕ/ОТСУТСТВУЮТ."
  participantsStatementInput.size = 65
  participantsData.appendChild(participantsStatementText);
  participantsData.appendChild(participantsStatementInput);

  var participantsImageText = document.createTextNode(" Ссылка на фотографию: ");
  var participantsImageInput = document.createElement("input");
  participantsImageInput.id = "participantsPhoto" + participantsCount;
  participantsImageInput.placeholder = "https://i.imgur.com/exempel.png"
  participantsData.appendChild(participantsImageText);
  participantsData.appendChild(participantsImageInput);



  participantsData.appendChild(document.createElement("br"));

  document.getElementById("participants").appendChild(participantsData);
  
}

function removeParticipant() {
  if (witnessCount > 0) {
    document.getElementById("participantsData" + participantsCount).remove();
    participantsCount--;
  }
}

function generateReportNumber() {
  var dataTime = document.getElementById("datetime").value
  return "#" + dataTime[8] + dataTime[9] +  dataTime[5] + dataTime[6] + dataTime[0] + dataTime[1] +  dataTime[2] + dataTime[3] + "-" + dataTime[11] + dataTime[12] +  dataTime[14] + dataTime[15]
}

function generateStatus() {
  if(document.getElementById("investigating").value = true) {
    return   `[checkbox=check-square][/checkbox]Расследуется
    [checkbox=square][/checkbox]Завершено (передано в суд)
    [checkbox=square][/checkbox]Завершено (иное)`
  }

  if(document.getElementById("sentToCourt").value = true) {
    return   `[checkbox=square][/checkbox]Расследуется
    [checkbox=check-square][/checkbox]Завершено (передано в суд)
    [checkbox=square][/checkbox]Завершено (иное)`
  }

  if(document.getElementById("closedOther").value = true) {
    return   `[checkbox=square][/checkbox]Расследуется
    [checkbox=square][/checkbox]Завершено (передано в суд)
    [checkbox=check-square][/checkbox]Завершено (иное)`
  }
}

function generateDetectivesList(){
  var list = "  " + document.getElementById("dtRank1").value + ", " +  document.getElementById("dtPosition1").value + " — " + document.getElementById("dtNameSurname1").value
  for (let i = 2; i <= detectivesCount; i++) {
    list += `
    ` + document.getElementById("dtRank" + i).value + ", " +  document.getElementById("dtPosition"  + i).value + " — " + document.getElementById("dtNameSurname"  + i).value
  }
  return list
}

function generateWittnesList(){

  if(witnessCount > 0) {
    var list = `[checkbox=square][/checkbox]Отсутствуют
    [checkbox=check-square][/checkbox]Имеются`
    for(i = 1; i <= witnessCount; i++) {
      list += `
      [altspoiler=${document.getElementById("witnessNameSurname" + i).value}][tab][tr]
      [td][b]ИМЯ ФАМИЛИЯ:[/b]
      ${document.getElementById("witnessNameSurname" + i).value}[/td]
      [td][b]ДАТА РОЖДЕНИЯ[/b] 
      ${document.getElementById("witnessDOB" + i).value}[/td]
      [td][b]КОНТАКТНЫЙ НОМЕР:[/b]
      ${document.getElementById("witnessPhone" + i).value}
      [/td]
      [td][b]АДРЕС ПРОЖИВАНИЯ:[/b] 
      ${document.getElementById("witnessAdress" + i).value}[/td][/tr][/tab]
      [tab][tr][td][b]ПОЛУЧЕННАЯ ИНФОРМАЦИЯ:[/b]
      ${document.getElementById("witnessStatement" + i).value}[/td][tr][/tab]
      [/altspoiler]`
    }
    return list
  }
  else {
    var list = `[checkbox=check-square][/checkbox]Отсутствуют
    [checkbox=square][/checkbox]Имеются`
    return list
  }
}

function generateEvidence(){
  var list = "[*]" + document.getElementById("evidenceDescribtion1").value
  for(i = 2; i <= evidenceCount; i++) {
    list += `
    [*]${document.getElementById("evidenceDescribtion" + i).value}`
  }
  return list
}

function generatePartcipitions(){
  var list = ""
  for(i = 1; i <= participantsCount; i++) {
    list += `[tab][tr][td][size=85][b]ИМЯ ФАМИЛИЯ:[/b] ${document.getElementById("participantsNameSurname" + i).value}.
    [b]СТАТУС:[/b]    ${document.getElementById("participantsStatus" + i).value}.
    [b]СОСТОЯНИЕ:[/b]    ${document.getElementById("participantsCondition" + i).value}.
    [b]РАСА:[/b]    ${document.getElementById("participantsRace" + i).value}.
    [b]ВОЗРАСТ:[/b]    ${document.getElementById("participantsAge" + i).value}.
    [b]МЕСТО ЖИТЕЛЬСТВА:[/b]    ${document.getElementById("participantsAdress" + i).value}.
    [b]НОМЕР ТЕЛЕФОНА:[/b]    ${document.getElementById("participantsPhone" + i).value}.
    [b]ПРИМЕЧАНИЯ:[/b]    ${document.getElementById("participantsNotes" + i).value}.
    [b]ПОКАЗАНИЯ:[/b]    ${document.getElementById("participantsStatement" + i).value}.[/size]
    [/td][td2][img] ${document.getElementById("participantsPhoto" + i).value}[/img][/td2][/tr][/tab] `
  }
  return list
}

function createReport() {
  console.log(document.getElementById("datetime").value)
  var report = `[textarea][float=left][b]LOS SANTOS COUNTY SHERIFF DEPARTMENT
  DETECTIVE DIVISION
  HOMICIDE BUREAU
  
  LAW AGENCY ONLY[/b][/float][right][img]https://i.imgur.com/WWutEty.png[/img][/right]
  [legend=Предварительная информация по делу]
  [tab][tr]
  [td][b]Номер дела:[/b] 
  ${generateReportNumber()}[/td]
  [td][b]ОБВИНЕНИЕ:[/b] 
  ${document.getElementById("charges").value}[/td]
  [td][b]Статус:[/b]
  ${generateStatus()}
  [/td][/tr][/tab]
  [tab][tr][td][b]Список следователей:[/b]
  ${generateDetectivesList()}
  [/td]
  [td][b]Точный адрес места инцидента:[/b] ${document.getElementById("adress").value}
  [/td]
  [/tr]
  [/tab][/legend]
  [br]
  [legend=Основная информация]
  [br]
  [legend=Описание происшествия]
  ${document.getElementById("incidentDescription").value}
  [/legend]
  [br]
  [legend=Свидетели] ${generateWittnesList()}
  [/legend]
  [br]
  [legend=Место преступления]
  [br]
  [legend=Описание сцены преступления]
  ${document.getElementById("sceneDescription").value}
  [/legend]
  [br]
  [legend=Перечень улик]
  [list]${generateEvidence()}
  [/list]
  [/legend]
  [br]
  [legend=Прикрепленные файлы]
  [altspoiler=Фотографии с места инцидента]
  ${document.getElementById("photos").value}
  [/altspoiler]
  [/legend]
  [/legend]
  [/legend]
  [br]
  [legend=Лица, вовлеченные в инцидент: потерпевшие, подозреваемые, информаторы] 
  ${generatePartcipitions()}
  [/legend]
  [/textarea]`

  document.getElementById("generatedReport").value = report
}

function copyReport() {
  // Get the text field
  var copyText = document.getElementById("generatedReport");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Отчет скопирован!");
}