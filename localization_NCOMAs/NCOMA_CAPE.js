<script type="text/javascript">
//
window.addEventListener("load", function() {

	// Extract the value of the language the browser is set to:
	const getLang = navigator.language;
	console.log("getLang = ", getLang);

	// hide form if no OMA prefill val
	// tfa_326 = CAID, tfa_390 = OMA ID
	const params = new URLSearchParams(window.location.search);
	const isPrefill = params.has('tfa_326') && params.has('tfa_390');
	console.log(`isPrefill: ${isPrefill}`);
	if (!isPrefill) {
		console.log('no prefill values, redirecting to CAPE page');
		window.location.replace("https://seiu503.org/get-involved/cape-and-political-action/");
	}

	// localization
	var valueFormTitle = document.getElementById("806-T");
	var valueSubmitButton = document.querySelector("#submit_button");
	//
	var formEl = document.getElementById("806");
	var prefillWarning1 = document.getElementById("tfa_330-DB"); // span inside this is 'This form is customized especially for'
	var prefillWarning2 = document.getElementById("tfa_330-DA"); // span inside this is 'If this is not you, do not complete this form!'
	var firstName = document.getElementById("tfa_1-L"); 
	var lastName = document.getElementById("tfa_2-L");
	// var birthDate = document.getElementById("tfa_134-L"); 
	// var mmPlaceholder = document.getElementById("tfa_156").options[0];
	// var ddPlaceholder = document.getElementById("tfa_157").options[0];
	// var yyyyPlaceholder = document.getElementById("tfa_158").options[0];
	// var preferredLanguage = document.getElementById("tfa_91-L"); 
	var employer = document.getElementById("tfa_22-L"); 
	var employerValue = document.getElementById('tfa_22');
	// var facility = document.getElementById("tfa_6-L");
	var jobTitle = document.getElementById("tfa_385-L");
	// var facilityPlaceholder = document.getElementById("tfa_6").options[0];
	var employerNote = document.getElementById("tfa_127-HTML"); 
	var address = document.getElementById("tfa_32-L"); 
	var addressNote = document.getElementById("tfa_32-HH");
	var city = document.getElementById("tfa_34-L"); 
	var state = document.getElementById("tfa_35-L");
	var zip = document.getElementById("tfa_39-L"); 
	var email = document.getElementById("tfa_3-L"); 
	var emailNote = document.getElementById("tfa_3-HH");
	var phone = document.getElementById("tfa_4-L"); 
	var phoneNote = document.getElementById("tfa_4-HH");
	var smsOptOut = document.getElementById("tfa_114-L");
	var smsOptOutCheckbox = document.getElementById("tfa_115-L");
	// var representationAuthBlock = document.getElementById("tfa_375-HTML");
	// var membershipAuthBlock = document.getElementById("tfa_350-HTML"); 
	// var duesAuthBlock = document.getElementById("tfa_351-HTML"); 
	var CAPEIntro = document.getElementById("tfa_353-HTML");
	var CAPEamount = document.getElementById("tfa_356-L");
	var otherOption = document.getElementById("tfa_360-L");
	var otherAmount = document.getElementById("tfa_361-L");
	var duesNote = document.getElementById("tfa_128-HTML");
	// var polOptOut = document.getElementById("tfa_122-L"); 
	// var polOptOutCheckbox = document.getElementById("tfa_123-L"); 
	var signature = document.getElementById("tfa_386-L");
	var signatureHH = document.getElementById("tfa_386-HH");
	var joinUs = document.getElementById("tfa_387-L");
	var CAPECopy = document.getElementById("tfa_388-HTML");
	var membershipAuthTitle = document.getElementById("tfa_116-L");
	var membershipAuthLL = document.getElementById("tfa_379-L");
	var duesAuthTitle = document.getElementById("tfa_355-L");
	var duesAuthLL = document.getElementById("tfa_380-L");
	var CAPEAuthTitle = document.getElementById("tfa_120-L");
	var CAPEAuthLL1 = document.getElementById("tfa_382-L");
	var CAPEAuthLL2 = document.getElementById("tfa_383-HTML");
	// var signatureNote1 = document.getElementById("tfa_116-HH"); // membership auth
	// var signatureNote2 = document.getElementById("tfa_355-HH"); // dues auth
	// var signatureNote3 = document.getElementById("tfa_120-HH"); // cape auth
	var CAPECheckbox = document.getElementById("tfa_120");
	var CAPEsignatureHint = document.getElementById("tfa_361-HH");
	var combinedLL = document.getElementById("tfa_377"); // jcl
	var capeComputed = document.getElementById("tfa_378");



	// replace employer name in noncontract form warning
	let employerValueCalc;
    function getParam(name) {
      var v = new URLSearchParams(window.location.search).get(name);
      console.log(`getParam: ${v ? v.replace(/\+/g, ' ') : ''}`);
      return v ? v.replace(/\+/g, ' ') : '';
    }
    function setWorkplace() {
      var el = document.getElementById('workplace-name');
      if (!el) return;
      var v = getParam('tfa_22');
      console.log(`setWorkplace: ${v}`);
      if (v) {
      	el.textContent = v;
      	employerValueCalc = v;
      }
    }
    if (document.readyState !== 'loading') setWorkplace();
    else document.addEventListener('DOMContentLoaded', setWorkplace);


	//
	// US English:
	if (getLang.startsWith("en")) {
		console.log("Processing en-US");
		//
		document.title = "Contribute to CAPE: Citizen Action for Political Education";
		valueFormTitle.innerHTML = "Contribute to CAPE: Citizen Action for Political Education";
		valueSubmitButton.defaultValue = "Submit";
		//
		prefillWarning1.innerText = 'This form is customized especially for'
	    prefillWarning2.innerText = 'If this is not you, do not complete this form!'
		firstName.innerHTML = "First Name";
		lastName.innerHTML = "Last Name";
		// birthDate.innerHTML = `Birth Date`;
		// birthDate.classList.add("reqMark");
		// birthDate.style.cssText += 'font-size:inherit!important;font-style:inherit!important;';
		// mmPlaceholder.innerHTML = "Month";
		// ddPlaceholder.innerHTML = "Day";
		// yyyyPlaceholder.innerHTML = "Year";
		// preferredLanguage.innerHTML = "Preferred language";
		employer.innerHTML = "Employer";
		// facility.innerHTML = "Facility";
		jobTitle.innerHTML = "Job Title";
		employerNote.innerHTML = `<p>Note: This form is ONLY for workers at <strong>${employerValueCalc}</strong>. If you work somewhere else and want to contribute to CAPE, <strong><a href="https://seiu503signup.org?cape=true">you can do that here.</a></strong></p>`;
		address.innerHTML = "Address";
		addressNote.innerHTML = "Please enter your physical street address here, not a P.O. box.";
		city.innerHTML = "City";
		state.innerHTML = "State";
		zip.innerHTML = "ZIP Code";
		email.innerHTML = "Email";
		emailNote.innerHTML = "Please use your personal email if you have one, since some employers limit union communication via work email. If you don't have a personal email, work email is fine. If you don't have an email address, call us at 1.844.503.7348 to sign up over the phone.";
		phone.innerHTML = "Phone";
		phoneNote.innerHTML = "† By providing my phone number, I understand that the Service Employees International Union (SEIU), its local unions, and affiliates may use automated calling technologies and/or text message me on my cellular phone on a periodic basis. SEIU will never charge for text message alerts. Carrier message and data rates may apply to such alerts. Reply STOP to stop receiving messages; reply HELP for more information.";
		smsOptOut.innerHTML = "Opt out of receiving mobile alerts";
		smsOptOutCheckbox.innerHTML = "Opt out";
		CAPEIntro.innerHTML = `<h3>Contribute to CAPE: Citizen Action for Political Education</h3><p><em>Collective political action to raise wages, protect benefits, fund public services, and build strong communities.</em></p><p>This contribution qualifies for the Oregon Political Tax Credit. Single filers are eligible for a credit up to $50/year; joint filers up to $100 per year.</p>`
		CAPEAuthTitle.innerHTML = `CAPE Contribution Authorization`
		CAPEAuthLL1.innerHTML = `I hereby authorize my Employer to deduct the designated amount from my monthly earnings as a contribution to SEIU Local 503, OPEU CAPE.`
	 	CAPEAuthLL2.innerHTML = `<p>This authorization is made voluntarily based on my specific understanding that:</p><ol><li>I am not required to sign this form or make voluntary contributions to SEIU CAPE as a condition of my employment or membership in the union;</li><li>I may refuse to contribute without reprisal;</li><li>Under law, only union members and executive / administrative staff who are U.S. Citizens or lawful permanent residents are eligible to contribute to CAPE;</li><li>The contribution amounts on this form are merely suggestions, and I may contribute more or less by this or other means without fear of favor or disadvantage from SEIU or my employer;</li><li>SEIU CAPE uses the money it receives for political purposes – including, but not limited to, making contributions to and expenditures on behalf of candidates for federal, state, and local offices – and addressing political issues of public importance.</li></ol><p>This authorization shall remain in effect until revoked by me in writing via U.S. mail to SEIU. Contributions or gifts to SEIU Local 503, OPEU CAPE are not tax deductible as charitable contributions.</p>`

		CAPEamount.innerHTML = "Monthly donation amount";
		otherOption.innerHTML = "Other";
		otherAmount.innerHTML = "Other monthly contribution amount";
		CAPEsignatureHint.innerHTML = "Minimum $1. If you do not want to contribute, do not submit this form."
		signatureHH.innerHTML = "Enter your full legal name. This will act as your signature.";
		signature.innerHTML = "Signature";
		joinUs.innerText = "Join us";
		CAPECopy.innerHTML = `<div id="quoteCon" style="display:flex;">
		  <div>
		  <div style="position:relative;">
		    <svg style="color: rgb(83, 16, 120);
		  transform: scaleX(-1);
		  position: absolute;
		  top: -3px;
		  left: -5px;
		  opacity: 0.8;
		  user-select: none;
		  width: 1em;
		  height: 1em;
		  display: inline-block;
		  flex-shrink: 0;
		  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
		  fill: currentcolor;
		  font-size: 1.5rem;" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteIcon"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
		  <p style="margin: 0px;
		  font-weight: 400;
		  font-size: 1rem;
		  line-height: 1.5;
		  text-indent: 20px;">I can’t 
		write big checks, but I contribute what I can each month to CAPE. And 
		I’ve seen the results in strong contracts with great economics and 
		helping to shape an Oregon where everyone feels safe and has a fair 
		shot. Join me and thousands of other SEIU 503 members and keep our 
		political program strong.</p>
		    <svg style="color: rgb(83, 16, 120);
		  position: absolute;
		  bottom: 5px;
		  right: -10px;
		  opacity: 0.8;
		  user-select: none;
		  width: 1em;
		  height: 1em;
		  display: inline-block;
		  flex-shrink: 0;
		  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
		  fill: currentcolor;
		  font-size: 1.5rem;" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteIcon"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
		  </div>
		  <p style="margin: 0px;
		  font-weight: 400;
		  font-size: 1rem;
		  line-height: 1.5;
		  color: rgb(83, 16, 120);
		  font-style: italic;
		  padding-top: 10px;">—Ibrahim Coulibaly, BOLI Civil Rights Investigator, CAPE Chair</p>
		  </div>
		    <img src="https://seiu503.tfaforms.net/forms/get_image/3/7scGYMrpwLhJ4AmGzpnPSKaz7NFBsDhTavVfsbrhguy4A78N4DFrJV8YyKklhV5i-ibrahim_coulibaly_300-Bq8u2x_N.png" alt="Ibrahim Coulibaly" style="display: block;
		  background-size: cover;
		  background-repeat: no-repeat;
		  background-position: center center;
		  width: 100%;
		  object-fit: cover;
		  min-width: 200px;
		  min-height: 200px;  
		      "></div>`
		combinedLL.innerText = `**CAPE Authorization: I hereby authorize my Employer to deduct the designated amount from my monthly earnings as a contribution to SEIU Local 503, OPEU CAPE.  This authorization is made voluntarily based on my specific understanding that:      I am not required to sign this form or make voluntary contributions to SEIU CAPE as a condition of my employment or membership in the union;     I may refuse to contribute without reprisal;     Under law, only union members and executive / administrative staff who are U.S. Citizens or lawful permanent residents are eligible to contribute to CAPE;     The contribution amounts on this form are merely suggestions, and I may contribute more or less by this or other means without fear of favor or disadvantage from SEIU or my employer;     SEIU CAPE uses the money it receives for political purposes – including, but not limited to, making contributions to and expenditures on behalf of candidates for federal, state, and local offices – and addressing political issues of public importance.  This authorization shall remain in effect until revoked by me in writing via U.S. mail to SEIU. Contributions or gifts to SEIU Local 503, OPEU CAPE are not tax deductible as charitable contributions.`

		}
	//
	// Spanish:
	else if (getLang.startsWith("es")) {
		console.log("Processing es-ES");
		//
		document.title = "Aporte al CAPE: acción ciudadana en favor de la educación política";
		valueFormTitle.innerHTML = "Aporte al CAPE: acción ciudadana en favor de la educación política";
		valueSubmitButton.defaultValue = "Enviar";
		//
		prefillWarning1.innerText = 'Este formulario está personalizado especialmente para'
	    prefillWarning2.innerText = '¡Si no es usted, no complete este formulario!'
		firstName.innerHTML = "Primer nombre";
		lastName.innerHTML = "Apellido";
		// birthDate.innerHTML = `Fecha de nacimiento`;
		// birthDate.classList.add("reqMark");
		// birthDate.style.cssText += 'font-size:inherit!important;font-style:inherit!important;';
		// mmPlaceholder.innerHTML = "Mes";
		// ddPlaceholder.innerHTML = "Día";
		// yyyyPlaceholder.innerHTML = "Año";
		// preferredLanguage.innerHTML = "Idioma preferido";
		employer.innerHTML = "Empleador";
		// facility.innerHTML = "Instalación";
		jobTitle.innerHTML = "Clasificación";
		// facilityPlaceholder.innerHTML = "Seleccione..."
		employerNote.innerHTML = `<p>Nota: Este formulario es SOLO para trabajadores de <strong>${employerValueCalc}</strong>. Si trabaja en otro lugar y desea aportar al fondo CAPE, <strong><a href="https://seiu503signup.org?cape=true">puede hacerlo aquí.</a></strong></p>`;
		address.innerHTML = "Calle particular";
		addressNote.innerHTML = "Ingrese su dirección física aquí, no un apartado postal (P.O. Box).";
		city.innerHTML = "Ciudad";
		state.innerHTML = "Estado";
		zip.innerHTML = "Código postal";
		email.innerHTML = "Correo electrónico particular";
		emailNote.innerHTML = "Use su correo electrónico particular, si tiene uno, ya que algunos empleadores limitan la comunicación de la unión a través del correo electrónico del trabajo. Si no tiene un correo electrónico personal, puede usar el correo electrónico del trabajo. Si no tiene una dirección de correo electrónico, llámenos al 1.844.503.7348 para registrarse por teléfono.";
		phone.innerHTML = "Mejor teléfono";
		phoneNote.innerHTML = "† Al proporcionar mi número de teléfono, entiendo que la Unión Internacional de Empleados de Servicios (SEIU, por sus siglas en inglés), sus uniones locales y sus afiliados pueden usar tecnologías automatizadas para llamarme y/o para enviar mensajes de texto a mi celular periódicamente. SEIU nunca cobrará por las alertas de mensaje de texto. Pueden aplicar tarifas por el envío de mensaje y el uso de datos para dichas alertas. Responda con la palabra STOP para dejar de recibir mensajes; responda con la palabra HELP para obtener más información.";
		smsOptOut.innerHTML = "No deseo recibir alertas por mensaje de texto";
		smsOptOutCheckbox.innerHTML = "Optar por no participar";

		CAPEIntro.innerHTML = `<h3>Aporte al CAPE: acción ciudadana en favor de la educación política</h3><p><em>Acción política colectiva que busca aumentar los salarios, proteger los beneficios, financiar los servicios públicos y fortalecer las comunidades.</em></p><p>Este aporte cumple con los requisitos del crédito fiscal de Oregón. Los (las) declarantes solteros(as) son elegibles para recibir un crédito anual de hasta $50; mientras que los (las) declarantes conjuntos(as) pueden recibir hasta $100 anuales.</p>`
		CAPEAuthTitle.innerHTML = `Autorización de aportes de CAPE`
		CAPEAuthLL1.innerHTML = `Por medio del presente, y tras haber enviado este formulario, autorizo a mi Empleador a deducir de mis ganancias mensuales el monto designado como aporte al CAPE de SEIU Local 503, OPEU.`
	 	CAPEAuthLL2.innerHTML = `<div id="capeLL2"><p>Esta autorización es voluntaria y se basa en mis conocimientos específicos de que:</p><ol><li>Esta autorización es voluntaria y no supone una condición para mantener mi membresía en la Unión.</li><li>Puedo rechazar el aporte sin que esto suponga represalias;</li><li>En virtud de la ley federal, solo los (las) miembros de la unión y el personal administrativo/ejecutivo de la misma que sean ciudadanos(as) de los EE.UU. o residentes permanentes legales son elegibles para aportar al COPE de SEIU. </li><li>Los montos del aporte que se indicaron anteriormente solo son sugerencias, de modo que puedo abstenerme de aportar o cambiar el monto sin que esto suponga represalias por parte de SEIU Local 503.</li><li>Mi aporte se utilizará para respaldar a los (las) candidatos(as) apoyados(as) por la CAPE y el Comité sobre Educación Política (por su sigla en inglés COPE) y cubrir los gastos relacionados con las elecciones de cargos federales, locales, legislativos y estatales. Estos(as) funcionarios(as) elegidos(as) toman decisiones fundamentales relativas a salarios, atención de salud, jubilación y otros beneficios y leyes que afectan a nuestras comunidades. Una parte de mi aporte también se puede destinar para el Comité sobre Educación Política de SEIU (COPE de SEIU). </li></ol><p>Esta autorización permanecerá vigente hasta que yo la revoque por escrito. Este aporte es adicional a las cuotas de la membresía. Los aportes u obsequios a la CAPE de SEIU no son deducibles de impuestos como aportes benéficos.</p></div>`

		CAPEamount.innerHTML = "Monto de la donación mensual";
		otherOption.innerHTML = "Otro";
		otherAmount.innerHTML = "Otro monto de la donación mensual";
		CAPEsignatureHint.innerHTML = "Mínimo $1. Si no desee aportar, no envíe este formulario."
		duesNote.innerHTML = "<strong>Nota: Su membresía no se activará y no se deducirán ningunas cuotas ni contribuciones de CAPE de su cheque hasta que negocie y vote para aprobar su primer contrato de unión con su empleador.</strong>"

		signatureHH.innerHTML = "Ingrese su nombre legal completo. Esto servirá como su firma.";
		signature.innerHTML = "Firma";
		joinUs.innerText = "Únase a nosotros";
		CAPECopy.innerHTML = `<div id="quoteCon" style="display:flex;">
		  <div>
		  <div style="position:relative;">
		    <svg style="color: rgb(83, 16, 120);
		  transform: scaleX(-1);
		  position: absolute;
		  top: -3px;
		  left: -5px;
		  opacity: 0.8;
		  user-select: none;
		  width: 1em;
		  height: 1em;
		  display: inline-block;
		  flex-shrink: 0;
		  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
		  fill: currentcolor;
		  font-size: 1.5rem;" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteIcon"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
		  <p style="margin: 0px;
		  font-weight: 400;
		  font-size: 1rem;
		  line-height: 1.5;
		  text-indent: 20px;">No puedo ofrecer grandes sumas, pero mensualmente aporto lo que puedo al CAPE. Si juntamos todos nuestros recursos, demostraremos que podemos elegir legisladores en Oregón que lucharán por las familias trabajadoras y nuestros clientes.</p>
		    <svg style="color: rgb(83, 16, 120);
		  position: absolute;
		  bottom: 5px;
		  right: -10px;
		  opacity: 0.8;
		  user-select: none;
		  width: 1em;
		  height: 1em;
		  display: inline-block;
		  flex-shrink: 0;
		  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
		  fill: currentcolor;
		  font-size: 1.5rem;" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatQuoteIcon"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
		  </div>
		  <p style="margin: 0px;
		  font-weight: 400;
		  font-size: 1rem;
		  line-height: 1.5;
		  color: rgb(83, 16, 120);
		  font-style: italic;
		  padding-top: 10px;">—Ibrahim Coulibaly, Investigador de Derechos Civiles de BOLI, Presidente del Concilio CAPE</p>
		  </div>
		    <img src="https://seiu503.tfaforms.net/forms/get_image/3/7scGYMrpwLhJ4AmGzpnPSKaz7NFBsDhTavVfsbrhguy4A78N4DFrJV8YyKklhV5i-ibrahim_coulibaly_300-Bq8u2x_N.png" alt="Ibrahim Coulibaly" style="display: block;
		  background-size: cover;
		  background-repeat: no-repeat;
		  background-position: center center;
		  width: 100%;
		  object-fit: cover;
		  min-width: 200px;
		  min-height: 200px;  
		      "></div>`
		combinedLL.innerText = `**CAPE Authorization: Por medio del presente, y tras haber enviado este formulario, autorizo a mi Empleador a deducir de mis ganancias mensuales el monto designado como aporte al CAPE de SEIU Local 503, OPEU.  Esta autorización es voluntaria y se basa en mis conocimientos específicos de que: • Esta autorización es voluntaria y no supone una condición para mantener mi membresía en la Unión. • Puedo rechazar el aporte sin que esto suponga represalias; • En virtud de la ley federal, solo los (las) miembros de la unión y el personal administrativo/ejecutivo de la misma que sean ciudadanos(as) de los EE.UU. o residentes permanentes legales son elegibles para aportar al COPE de SEIU. • Los montos del aporte que se indicaron anteriormente solo son sugerencias, de modo que puedo abstenerme de aportar o cambiar el monto sin que esto suponga represalias por parte de SEIU Local 503. • Mi aporte se utilizará para respaldar a los (las) candidatos(as) apoyados(as) por la CAPE y el Comité sobre Educación Política (por su sigla en inglés COPE) y cubrir los gastos relacionados con las elecciones de cargos federales, locales, legislativos y estatales. Estos(as) funcionarios(as) elegidos(as) toman decisiones fundamentales relativas a salarios, atención de salud, jubilación y otros beneficios y leyes que afectan a nuestras comunidades. Una parte de mi aporte también se puede destinar para el Comité sobre Educación Política de SEIU (COPE de SEIU). Esta autorización permanecerá vigente hasta que yo la revoque por escrito. Este aporte es adicional a las cuotas de la membresía. Los aportes u obsequios a la CAPE de SEIU no son deducibles de impuestos como aportes benéficos.`
		// combinedLL.innerText = `** Membership Authorization: ${membershipAuthLLOnly.textContent} ** Dues Deduction / Checkoff Authorization: ${duesAuthLLOnly.textContent}`

		}
	//
	else {
	console.log("Processing ** unknown **")
	//
	// document.title = "** unknown **-language title.";
	// valueFormTitle.innerHTML = "Form Title: ** unknown **";
	// valueSubmitButton.defaultValue = "Submit: ** unknown **";
	// //
	// textInput_01.innerHTML = "First Name ** unknown ** Test";
	// textInput_02.innerHTML = "Last Name ** unknown ** Test";
	// textInput_03.innerHTML = "Email ** unknown ** Test";
	// textInput_04.innerHTML = "Company ** unknown ** Test";
	};

	// concatenate legal language if CAPE auth checked
	// don't need this for CAPE-only form
	// CAPECheckbox.addEventListener('change', function() {
	// 	console.log('CAPE change');
	// 	if (CAPECheckbox.checked = true && !combinedLL.innerText.includes('** CAPE Authorization')) {
	// 		combinedLL.innerText = `** Membership Authorization: ${membershipAuthLL.textContent} ** Dues Deduction / Checkoff Authorization: ${duesAuthLL.textContent} ** CAPE Authorization: ${CAPEAuthLL1.textContent} ${CAPEAuthLL2.textContent}`
	// 	}
	// })


	// replace error message text
	formEl.addEventListener('submit', function() {
		console.log('submitclick');
		function replaceTextInDOM(searchText, replaceText) {
			console.log('replaceText')
		  const elements = document.querySelectorAll('span'); 

		  elements.forEach(element => {
		    if (element.textContent.includes(searchText)) {
		      element.textContent = element.textContent.replaceAll(searchText, replaceText);
		    }
		  });
		}

		if (getLang.startsWith("es")) {
			replaceTextInDOM("This field is required.", "Requerido");
			replaceTextInDOM("This does not appear to be a valid email address.", "Dirección de correo electrónico no válida");
			replaceTextInDOM("Please enter a valid 5-digit ZIP code", "Ingrese un código postal válido de 5 dígitos");
			replaceTextInDOM("This does not appear to be a valid date.", "Ingrese una fecha válida.");
			replaceTextInDOM("Please enter a valid phone number", "Ingrese un número de teléfono válido");
			replaceTextInDOM("This date must be between", "La fecha debe ser entre");
		}

	})

});
</script>