<script type="text/javascript">
//
window.addEventListener("load", function() {

	// Extract the value of the language the browser is set to:
	const getLang = navigator.language;
	console.log("getLang = ", getLang);
	//
	var valueFormTitle = document.getElementsByClassName("gform_title")[0];
	var valueSubmitButton = document.querySelector("#submit_button");
	//
	var formEl = document.getElementById("807");
	var prefillWarning1 = document.getElementById("tfa_330-DB"); // span inside this is 'This form is customized especially for'
	var prefillWarning2 = document.getElementById("tfa_330-DA"); // span inside this is 'If this is not you, do not complete this form!'
	var formIntro = document.getElementById("tfa_456");
	var firstName = document.getElementById("tfa_1-L"); 
	var lastName = document.getElementById("tfa_2-L");
	var birthDate = document.getElementById("tfa_134-L"); 
	var mmPlaceholder = document.getElementById("tfa_156").options[0];
	var ddPlaceholder = document.getElementById("tfa_157").options[0];
	var yyyyPlaceholder = document.getElementById("tfa_158").options[0];
	var preferredLanguage = document.getElementById("tfa_91-L"); 
	// var employer = document.getElementById("tfa_22-L"); 
	var department = document.getElementById("tfa_457-L");
	// var facility = document.getElementById("tfa_6-L");
	var jobTitle = document.getElementById("tfa_385-L");
	// var facilityPlaceholder = document.getElementById("tfa_6").options[0];
	var departmentPlaceholder = document.getElementById("tfa_457").options[0];
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
	var membershipAuthBlock = document.getElementById("tfa_350-HTML"); 
	var duesAuthBlock = document.getElementById("tfa_351-HTML"); 
	var duesNote = document.getElementById("tfa_128-HTML");
	var polOptOut = document.getElementById("tfa_122-L"); 
	var polOptOutCheckbox = document.getElementById("tfa_123-L"); 
	var signature = document.getElementById("tfa_386-L");
	var signatureHH = document.getElementById("tfa_386-HH");
	var membershipAuthTitle = document.getElementById("tfa_116-L");
	var membershipAuthLL = document.getElementById("tfa_379-L");
	var duesAuthTitle = document.getElementById("tfa_355-L");
	var duesAuthLL = document.getElementById("tfa_380-L");
	var aboutSigningH4 = document.getElementById("tfa_626-L");
	var aboutSigningBody = document.getElementById("tfa_627-HTML");
	var getInvolved = document.getElementById("tfa_628-L");
	var yes = document.getElementById("tfa_629-L");
	var combinedLL = document.getElementById("tfa_377");


	//
	// US English:
	if (getLang.startsWith("en")) {
		console.log("Processing en-US");
		//
		document.title = "SEIU 503 Union Authorization and Membership Application";
		valueFormTitle.innerHTML = "SEIU 503 Union Authorization and Membership Application";
		valueSubmitButton.defaultValue = "Submit";
		//
		prefillWarning1.innerText = 'This form is customized especially for'
	    prefillWarning2.innerText = 'If this is not you, do not complete this form!'
	    formIntro.innerHTML = "Now is our chance. By joining together with SEIU Local 503 we will strengthen our voices to bargain for improved pay, benefits, and working conditions. This form is your commitment to stand together with your co-workers and build a union together.";
		firstName.innerHTML = "First Name";
		lastName.innerHTML = "Last Name";
		birthDate.innerHTML = `Birth Date`;
		birthDate.classList.add("reqMark");
		birthDate.style.cssText += 'font-size:inherit!important;font-style:inherit!important;';
		mmPlaceholder.innerHTML = "Month";
		ddPlaceholder.innerHTML = "Day";
		yyyyPlaceholder.innerHTML = "Year";
		preferredLanguage.innerHTML = "Preferred language";
		// employer.innerHTML = "Employer";
		// facility.innerHTML = "Facility";
		department.innerHTML = "Department";
		jobTitle.innerHTML = "Job Title";
		employerNote.innerHTML = `<p>Note: This form is ONLY for student workers at Portland State University. If you work somewhere else and want to sign a union membership form, <strong><a href="https://seiu503signup.org">you can do that here.</a></strong></p>`;
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
		polOptOut.innerHTML = "Check the box below if you would like the portion of dues spent on political power to go toward SEIU 503’s scholarship fund.";
		polOptOutCheckbox.innerHTML = "Opt out of worker political power";
		signature.innerText = "Signature";
		signatureHH.innerHTML = "Enter your full legal name. This will act as your signature.";
		membershipAuthTitle.innerHTML = "Membership and Union Representation Authorization";
		membershipAuthLL.innerHTML = "I request and voluntarily accept membership in SEIU Local 503 and its successors or assigns (collectively “Local 503”). This means I will receive the benefits and abide by the obligations of membership set forth in both Local 503’s and the Service Employees International Union’s Constitutions and Bylaws. I authorize Local 503 to act as my representative in collective bargaining over wages, benefits, and other terms/conditions of employment with my employer, and as my exclusive representative where authorized by law. My membership will be continuous, unless I resign by providing notice to Local 503 via U.S. mail (or other method if permitted by Local 503 policies). I know that union membership is voluntary and not a condition of employment, and that I can decline to join without reprisal. I understand that my signature may be used to obtain certification of SEIU Local 503, OPEU as the exclusive bargaining representative, without an election."
		duesAuthTitle.innerHTML = "Dues Deduction / Checkoff Authorization";
		duesAuthLL.innerHTML = "I request and voluntarily authorize my employer to deduct from my earnings and to pay to Local 503 and its successors and assigns (collectively “Local 503”) an amount equal to Local 503’s regular dues, and other fees or assessments uniformly applicable to members of Local 503. This dues deduction authorization shall remain in effect unless I revoke it by providing notice to Local 503 via U.S. mail (or other method if permitted by Local 503’s policies) within 15 days before or after (1) the annual anniversary date of this agreement or (2) the termination of the applicable collective bargaining agreement between my employer and union (“my window periods”). This authorization will renew automatically from year to year even if I have resigned my membership, unless I revoke it during one of my window periods and as required by Local 503’s policies. This authorization is voluntary and is not a condition of my employment, and I can decline to agree to it without reprisal. I understand that all members benefit from everyone’s commitments because they help build a strong union that is able to plan for the future.";
		combinedLL.innerText = `** Membership Authorization: ${membershipAuthLL.textContent} ** Dues Deduction / Checkoff Authorization: ${duesAuthLL.textContent}`;
		aboutSigningH4.innerHTML = `<h4>About signing a union authorization card</h4>`;
		aboutSigningBody.innerHTML = `<p>PSU SWU is the collective union of all student employees at Portland State University and is in the process of forming. To be recognized, we need a majority of support from student employees. At this point, confidential signatures are collected, and when a majority is reached, will be filed and counted by the Employee Relations Board of Oregon. Once we get recognition, we can elect a team of student workers to bargain with the university for a contract that covers wages, benefits and working conditions.</p><p><br></p><p>No one will be asked to pay any dues or fees until the contract has been approved by a vote of PSU Student Employees. In SEIU Local 503, dues would be around $9 for every $500 you earn (in exact terms, 1.7% of pay + $2.75/month). Dues are one of the ways we form a strong union with resources. <br><br></p>
            <p>If you have questions or want to get more involved, <a href="http://instagram.com/psustudentworkers" target="_blank">DM us on Instagram</a>, email us at <a target="_blank" href="mailto:pdxstudentunion@gmail.com">pdxstudentunion@gmail.com</a> or visit the <a href="http://www.seiu503.org/studentworkers-faq" target="_blank">Frequently Asked Questions</a> page</p>`;
        getInvolved.innerText = 'I want to get involved! Contact me about how I can help form a union with my co-workers';
        yes.innerText = 'Yes!';

		}
	//
	// Spanish:
	else if (getLang.startsWith("es")) {
		console.log("Processing es-ES");
		//
		document.title = "Autorización de representación y formulario de membresía del SEIU 503";
		valueFormTitle.innerHTML = "Autorización de representación y formulario de membresía del SEIU 503";
		valueSubmitButton.defaultValue = "Enviar";
		//
		prefillWarning1.innerText = 'Este formulario está personalizado especialmente para'
	    prefillWarning2.innerText = '¡Si no es usted, no complete este formulario!'
	    formIntro.innerHTML = "Ahora es nuestra oportunidad. Al unirnos al Local 503 de SEIU, fortaleceremos nuestra voz para negociar mejores salarios, beneficios y condiciones laborales. Este formulario es su compromiso de unirse a sus compañeros y forjar juntos un sindicato.";
		firstName.innerHTML = "Primer nombre";
		lastName.innerHTML = "Apellido";
		birthDate.innerHTML = `Fecha de nacimiento`;
		birthDate.classList.add("reqMark");
		birthDate.style.cssText += 'font-size:inherit!important;font-style:inherit!important;';
		mmPlaceholder.innerHTML = "Mes";
		ddPlaceholder.innerHTML = "Día";
		yyyyPlaceholder.innerHTML = "Año";
		preferredLanguage.innerHTML = "Idioma preferido";
		// employer.innerHTML = "Empleador";
		// facility.innerHTML = "Instalación";
		department.innerHTML = "Departamento";
		jobTitle.innerHTML = "Clasificación";
		departmentPlaceholder.innerHTML = "Seleccione...";
		// facilityPlaceholder.innerHTML = "Seleccione...";
		employerNote.innerHTML = `<p>Nota: Este formulario es SOLO para trabajadores estudiantiles de la Universidad Portland State. Si trabaja en otro lugar y desea hacerse miembro/a de la unión, <strong><a href="https://seiu503signup.org">puede hacerlo aquí.</a></strong></p>`;
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
		duesNote.innerHTML = "<strong>Nota: Su membresía no se activará y no se deducirán ningunas cuotas ni contribuciones de CAPE de su cheque hasta que negocie y vote para aprobar su primer contrato de unión con su empleador.</strong>"
		polOptOut.innerHTML = "Seleccione esta casilla si quiere que una parte de las cuotas se invierta en el poder político para mejorar el fondo para becas de SEIU 503.";
		polOptOutCheckbox.innerHTML = "Optar por no participar del poder político de los trabajadores";
		signature.innerText = "Firma";
		signatureHH.innerHTML = "Ingrese su nombre legal completo. Esto servirá como su firma.";
		membershipAuthTitle.innerHTML = "Autorización de membresía y representación de unión";
		membershipAuthLL.innerHTML = "Solicito y acepto voluntariamente la membresía en SEIU Local 503 y sus sucesores o cesionarios (en conjunto “Local 503”). Esto significa que recibiré los beneficios y cumpliré las obligaciones derivadas de la membresía que se estipulan en la Constitución y los Estatutos de Local 503 y de la Unión Internacional de Empleados de Servicios. Autorizo a Local 503 para que actúe como mi representante en las negociaciones colectivas relativas a salarios, beneficios y demás términos/condiciones laborales que lleve a cabo con mi empleador, y como mi representante exclusivo en los casos que la ley lo permita. Mi membresía será permanente, a menos que renuncie a la misma por medio de un aviso dirigido a Local 503 y lo envíe a través del correo postal de los EE. UU. (u otro método, si así lo permiten las políticas de Local 503). Sé que la membresía de la unión es voluntaria y no es una condición laboral, y que puedo rechazar la opción de unirme sin que esto implique represalias. Entiendo que mi firma puede usarse para obtener la certificación de SEIU Local 503, OPEU como representante exclusivo de negociación, sin necesidad de elección."
		duesAuthTitle.innerHTML = "Autorización de aportes/deducción de cuotas";
		duesAuthLL.innerHTML = "Solicito y autorizo voluntariamente que mi empleador deduzca de mis ganancias, y le pague a Local 503 y a sus sucesores y cesionarios (en conjunto “Local 503”), un monto equivalente a las cuotas ordinarias de Local 503 y demás cargos y avalúos que sean aplicables a los miembros de Local 503. Esta autorización para deducir las cuotas seguirá vigente a menos que yo la revoque por medio de un aviso dirigido a Local 503 y lo envíe a través del correo postal de los EE. UU. (u otro método, si así lo permiten las políticas de Local 503) en un plazo de 15 días antes o después de (1) la fecha de aniversario de este acuerdo o (2) la fecha de terminación del Contrato Colectivo de Trabajo correspondiente celebrado entre la unión y mi empleador (“los márgenes estipulados”). Esta autorización se renovará automáticamente cada año, incluso en caso de que renuncie a mi membresía, salvo que yo la revoque durante uno de los márgenes estipulados y de acuerdo con las políticas de Local 503. Esta autorización es voluntaria y no es una condición laboral, así que puedo rechazarla sin que esto suponga represalias. Comprendo que todos(as) los(as) miembros se benefician de los compromisos que todos(as) asumen porque ayudan a crear una unión fuerte que es capaz de planear a futuro."
		combinedLL.innerText = `** Membership Authorization: ${membershipAuthLL.textContent} ** Dues Deduction / Checkoff Authorization: ${duesAuthLL.textContent}`
		aboutSigningH4.innerHTML = `<h4>Acerca de la firma de una tarjeta de autorización de la unión</h4>`;
		aboutSigningBody.innerHTML = `<p>PSU SWU es la unión de todos los estudiantes empleados de la Universidad Portland State y está en proceso de formación. Para ser reconocidos, necesitamos el apoyo mayoritario de los estudiantes empleados. En este punto, se recolectan firmas confidenciales y, una vez alcanzada la mayoría, la Junta de Relaciones Laborales de Oregón las archivará y contabilizará. Una vez reconocidos, podremos elegir un equipo de estudiantes trabajadores para negociar con la universidad un contrato que cubra salarios, beneficios y condiciones laborales. Nadie tendrá que pagar cuotas ni honorarios hasta que el contrato sea aprobado por votación de los estudiantes empleados de PSU. En SEIU Local 503, las cuotas serían de aproximadamente $9 por cada $500 de ingresos (en términos exactos, el 1.7% del salario + $2.75 al mes). Las cuotas son una de las maneras en que formamos un sindicato sólido y con recursos. <br><br></p>
			<p>Si tienes preguntas o quieres participar más, <a href="http://instagram.com/psustudentworkers" target="_blank">envíanos un mensaje directo en Instagram</a>, un correo electrónico a <a target="_blank" href="mailto:pdxstudentunion@gmail.com">pdxstudentunion@gmail.com</a> o visita la página de <a href="http://www.seiu503.org/studentworkers-faq" target="_blank">Preguntas frecuentes</a>.</p>`;
		getInvolved.innerText = '¡Quiero participar! Contáctame para saber cómo puedo ayudar a formar una unión con mis compañeros.';
		        yes.innerText = '¡Sí!';
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
