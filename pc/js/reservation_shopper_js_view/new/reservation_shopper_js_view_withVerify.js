const CountryCode = [{ name: "Afghanistan", dial_code: "+93", code: "AF" }, { name: "Aland Islands", dial_code: "+358", code: "AX" }, { name: "Albania", dial_code: "+355", code: "AL" }, { name: "Algeria", dial_code: "+213", code: "DZ" }, { name: "AmericanSamoa", dial_code: "+1684", code: "AS" }, { name: "Andorra", dial_code: "+376", code: "AD" }, { name: "Angola", dial_code: "+244", code: "AO" }, { name: "Anguilla", dial_code: "+1264", code: "AI" }, { name: "Antarctica", dial_code: "+672", code: "AQ" }, { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" }, { name: "Argentina", dial_code: "+54", code: "AR" }, { name: "Armenia", dial_code: "+374", code: "AM" }, { name: "Aruba", dial_code: "+297", code: "AW" }, { name: "Australia", dial_code: "+61", code: "AU" }, { name: "Austria", dial_code: "+43", code: "AT" }, { name: "Azerbaijan", dial_code: "+994", code: "AZ" }, { name: "Bahamas", dial_code: "+1242", code: "BS" }, { name: "Bahrain", dial_code: "+973", code: "BH" }, { name: "Bangladesh", dial_code: "+880", code: "BD" }, { name: "Barbados", dial_code: "+1246", code: "BB" }, { name: "Belarus", dial_code: "+375", code: "BY" }, { name: "Belgium", dial_code: "+32", code: "BE" }, { name: "Belize", dial_code: "+501", code: "BZ" }, { name: "Benin", dial_code: "+229", code: "BJ" }, { name: "Bermuda", dial_code: "+1441", code: "BM" }, { name: "Bhutan", dial_code: "+975", code: "BT" }, { name: "Bolivia, Plurinational State of", dial_code: "+591", code: "BO" }, { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" }, { name: "Botswana", dial_code: "+267", code: "BW" }, { name: "Brazil", dial_code: "+55", code: "BR" }, { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO" }, { name: "Brunei Darussalam", dial_code: "+673", code: "BN" }, { name: "Bulgaria", dial_code: "+359", code: "BG" }, { name: "Burkina Faso", dial_code: "+226", code: "BF" }, { name: "Burundi", dial_code: "+257", code: "BI" }, { name: "Cambodia", dial_code: "+855", code: "KH" }, { name: "Cameroon", dial_code: "+237", code: "CM" }, { name: "Canada", dial_code: "+1", code: "CA" }, { name: "Cape Verde", dial_code: "+238", code: "CV" }, { name: "Cayman Islands", dial_code: "+ 345", code: "KY" }, { name: "Central African Republic", dial_code: "+236", code: "CF" }, { name: "Chad", dial_code: "+235", code: "TD" }, { name: "Chile", dial_code: "+56", code: "CL" }, { name: "China", dial_code: "+86", code: "CN" }, { name: "Christmas Island", dial_code: "+61", code: "CX" }, { name: "Cocos (Keeling) Islands", dial_code: "+61", code: "CC" }, { name: "Colombia", dial_code: "+57", code: "CO" }, { name: "Comoros", dial_code: "+269", code: "KM" }, { name: "Congo", dial_code: "+242", code: "CG" }, { name: "Congo, The Democratic Republic of the Congo", dial_code: "+243", code: "CD" }, { name: "Cook Islands", dial_code: "+682", code: "CK" }, { name: "Costa Rica", dial_code: "+506", code: "CR" }, { name: "Cote d'Ivoire", dial_code: "+225", code: "CI" }, { name: "Croatia", dial_code: "+385", code: "HR" }, { name: "Cuba", dial_code: "+53", code: "CU" }, { name: "Cyprus", dial_code: "+357", code: "CY" }, { name: "Czech Republic", dial_code: "+420", code: "CZ" }, { name: "Denmark", dial_code: "+45", code: "DK" }, { name: "Djibouti", dial_code: "+253", code: "DJ" }, { name: "Dominica", dial_code: "+1767", code: "DM" }, { name: "Dominican Republic", dial_code: "+1849", code: "DO" }, { name: "Ecuador", dial_code: "+593", code: "EC" }, { name: "Egypt", dial_code: "+20", code: "EG" }, { name: "El Salvador", dial_code: "+503", code: "SV" }, { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" }, { name: "Eritrea", dial_code: "+291", code: "ER" }, { name: "Estonia", dial_code: "+372", code: "EE" }, { name: "Ethiopia", dial_code: "+251", code: "ET" }, { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK" }, { name: "Faroe Islands", dial_code: "+298", code: "FO" }, { name: "Fiji", dial_code: "+679", code: "FJ" }, { name: "Finland", dial_code: "+358", code: "FI" }, { name: "France", dial_code: "+33", code: "FR" }, { name: "French Guiana", dial_code: "+594", code: "GF" }, { name: "French Polynesia", dial_code: "+689", code: "PF" }, { name: "Gabon", dial_code: "+241", code: "GA" }, { name: "Gambia", dial_code: "+220", code: "GM" }, { name: "Georgia", dial_code: "+995", code: "GE" }, { name: "Germany", dial_code: "+49", code: "DE" }, { name: "Ghana", dial_code: "+233", code: "GH" }, { name: "Gibraltar", dial_code: "+350", code: "GI" }, { name: "Greece", dial_code: "+30", code: "GR" }, { name: "Greenland", dial_code: "+299", code: "GL" }, { name: "Grenada", dial_code: "+1473", code: "GD" }, { name: "Guadeloupe", dial_code: "+590", code: "GP" }, { name: "Guam", dial_code: "+1671", code: "GU" }, { name: "Guatemala", dial_code: "+502", code: "GT" }, { name: "Guernsey", dial_code: "+44", code: "GG" }, { name: "Guinea", dial_code: "+224", code: "GN" }, { name: "Guinea-Bissau", dial_code: "+245", code: "GW" }, { name: "Guyana", dial_code: "+595", code: "GY" }, { name: "Haiti", dial_code: "+509", code: "HT" }, { name: "Holy See (Vatican City State)", dial_code: "+379", code: "VA" }, { name: "Honduras", dial_code: "+504", code: "HN" }, { name: "Hong Kong", dial_code: "+852", code: "HK" }, { name: "Hungary", dial_code: "+36", code: "HU" }, { name: "Iceland", dial_code: "+354", code: "IS" }, { name: "India", dial_code: "+91", code: "IN" }, { name: "Indonesia", dial_code: "+62", code: "ID" }, { name: "Iran", dial_code: "+98", code: "IR" }, { name: "Iraq", dial_code: "+964", code: "IQ" }, { name: "Ireland", dial_code: "+353", code: "IE" }, { name: "Isle of Man", dial_code: "+44", code: "IM" }, { name: "Israel", dial_code: "+972", code: "IL" }, { name: "Italy", dial_code: "+39", code: "IT" }, { name: "Jamaica", dial_code: "+1876", code: "JM" }, { name: "Japan", dial_code: "+81", code: "JP" }, { name: "Jersey", dial_code: "+44", code: "JE" }, { name: "Jordan", dial_code: "+962", code: "JO" }, { name: "Kazakhstan", dial_code: "+77", code: "KZ" }, { name: "Kenya", dial_code: "+254", code: "KE" }, { name: "Kiribati", dial_code: "+686", code: "KI" }, { name: "Korea, Democratic People's Republic of Korea", dial_code: "+850", code: "KP" }, { name: "Korea, Republic of South Korea", dial_code: "+82", code: "KR" }, { name: "Kuwait", dial_code: "+965", code: "KW" }, { name: "Kyrgyzstan", dial_code: "+996", code: "KG" }, { name: "Laos", dial_code: "+856", code: "LA" }, { name: "Latvia", dial_code: "+371", code: "LV" }, { name: "Lebanon", dial_code: "+961", code: "LB" }, { name: "Lesotho", dial_code: "+266", code: "LS" }, { name: "Liberia", dial_code: "+231", code: "LR" }, { name: "Libyan Arab Jamahiriya", dial_code: "+218", code: "LY" }, { name: "Liechtenstein", dial_code: "+423", code: "LI" }, { name: "Lithuania", dial_code: "+370", code: "LT" }, { name: "Luxembourg", dial_code: "+352", code: "LU" }, { name: "Macao", dial_code: "+853", code: "MO" }, { name: "Macedonia", dial_code: "+389", code: "MK" }, { name: "Madagascar", dial_code: "+261", code: "MG" }, { name: "Malawi", dial_code: "+265", code: "MW" }, { name: "Malaysia", dial_code: "+60", code: "MY" }, { name: "Maldives", dial_code: "+960", code: "MV" }, { name: "Mali", dial_code: "+223", code: "ML" }, { name: "Malta", dial_code: "+356", code: "MT" }, { name: "Marshall Islands", dial_code: "+692", code: "MH" }, { name: "Martinique", dial_code: "+596", code: "MQ" }, { name: "Mauritania", dial_code: "+222", code: "MR" }, { name: "Mauritius", dial_code: "+230", code: "MU" }, { name: "Mayotte", dial_code: "+262", code: "YT" }, { name: "Mexico", dial_code: "+52", code: "MX" }, { name: "Micronesia, Federated States of Micronesia", dial_code: "+691", code: "FM" }, { name: "Moldova", dial_code: "+373", code: "MD" }, { name: "Monaco", dial_code: "+377", code: "MC" }, { name: "Mongolia", dial_code: "+976", code: "MN" }, { name: "Montenegro", dial_code: "+382", code: "ME" }, { name: "Montserrat", dial_code: "+1664", code: "MS" }, { name: "Morocco", dial_code: "+212", code: "MA" }, { name: "Mozambique", dial_code: "+258", code: "MZ" }, { name: "Myanmar", dial_code: "+95", code: "MM" }, { name: "Namibia", dial_code: "+264", code: "NA" }, { name: "Nauru", dial_code: "+674", code: "NR" }, { name: "Nepal", dial_code: "+977", code: "NP" }, { name: "Netherlands", dial_code: "+31", code: "NL" }, { name: "Netherlands Antilles", dial_code: "+599", code: "AN" }, { name: "New Caledonia", dial_code: "+687", code: "NC" }, { name: "New Zealand", dial_code: "+64", code: "NZ" }, { name: "Nicaragua", dial_code: "+505", code: "NI" }, { name: "Niger", dial_code: "+227", code: "NE" }, { name: "Nigeria", dial_code: "+234", code: "NG" }, { name: "Niue", dial_code: "+683", code: "NU" }, { name: "Norfolk Island", dial_code: "+672", code: "NF" }, { name: "Northern Mariana Islands", dial_code: "+1670", code: "MP" }, { name: "Norway", dial_code: "+47", code: "NO" }, { name: "Oman", dial_code: "+968", code: "OM" }, { name: "Pakistan", dial_code: "+92", code: "PK" }, { name: "Palau", dial_code: "+680", code: "PW" }, { name: "Palestinian Territory, Occupied", dial_code: "+970", code: "PS" }, { name: "Panama", dial_code: "+507", code: "PA" }, { name: "Papua New Guinea", dial_code: "+675", code: "PG" }, { name: "Paraguay", dial_code: "+595", code: "PY" }, { name: "Peru", dial_code: "+51", code: "PE" }, { name: "Philippines", dial_code: "+63", code: "PH" }, { name: "Pitcairn", dial_code: "+872", code: "PN" }, { name: "Poland", dial_code: "+48", code: "PL" }, { name: "Portugal", dial_code: "+351", code: "PT" }, { name: "Puerto Rico", dial_code: "+1939", code: "PR" }, { name: "Qatar", dial_code: "+974", code: "QA" }, { name: "Romania", dial_code: "+40", code: "RO" }, { name: "Russia", dial_code: "+7", code: "RU" }, { name: "Rwanda", dial_code: "+250", code: "RW" }, { name: "Reunion", dial_code: "+262", code: "RE" }, { name: "Saint Barthelemy", dial_code: "+590", code: "BL" }, { name: "Saint Helena, Ascension and Tristan Da Cunha", dial_code: "+290", code: "SH" }, { name: "Saint Kitts and Nevis", dial_code: "+1869", code: "KN" }, { name: "Saint Lucia", dial_code: "+1758", code: "LC" }, { name: "Saint Martin", dial_code: "+590", code: "MF" }, { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" }, { name: "Saint Vincent and the Grenadines", dial_code: "+1784", code: "VC" }, { name: "Samoa", dial_code: "+685", code: "WS" }, { name: "San Marino", dial_code: "+378", code: "SM" }, { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" }, { name: "Saudi Arabia", dial_code: "+966", code: "SA" }, { name: "Senegal", dial_code: "+221", code: "SN" }, { name: "Serbia", dial_code: "+381", code: "RS" }, { name: "Seychelles", dial_code: "+248", code: "SC" }, { name: "Sierra Leone", dial_code: "+232", code: "SL" }, { name: "Singapore", dial_code: "+65", code: "SG" }, { name: "Slovakia", dial_code: "+421", code: "SK" }, { name: "Slovenia", dial_code: "+386", code: "SI" }, { name: "Solomon Islands", dial_code: "+677", code: "SB" }, { name: "Somalia", dial_code: "+252", code: "SO" }, { name: "South Africa", dial_code: "+27", code: "ZA" }, { name: "South Sudan", dial_code: "+211", code: "SS" }, { name: "South Georgia and the South Sandwich Islands", dial_code: "+500", code: "GS" }, { name: "Spain", dial_code: "+34", code: "ES" }, { name: "Sri Lanka", dial_code: "+94", code: "LK" }, { name: "Sudan", dial_code: "+249", code: "SD" }, { name: "Suriname", dial_code: "+597", code: "SR" }, { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ" }, { name: "Swaziland", dial_code: "+268", code: "SZ" }, { name: "Sweden", dial_code: "+46", code: "SE" }, { name: "Switzerland", dial_code: "+41", code: "CH" }, { name: "Syrian Arab Republic", dial_code: "+963", code: "SY" }, { name: "Taiwan", dial_code: "+886", code: "TW" }, { name: "Tajikistan", dial_code: "+992", code: "TJ" }, { name: "Tanzania, United Republic of Tanzania", dial_code: "+255", code: "TZ" }, { name: "Thailand", dial_code: "+66", code: "TH" }, { name: "Timor-Leste", dial_code: "+670", code: "TL" }, { name: "Togo", dial_code: "+228", code: "TG" }, { name: "Tokelau", dial_code: "+690", code: "TK" }, { name: "Tonga", dial_code: "+676", code: "TO" }, { name: "Trinidad and Tobago", dial_code: "+1868", code: "TT" }, { name: "Tunisia", dial_code: "+216", code: "TN" }, { name: "Turkey", dial_code: "+90", code: "TR" }, { name: "Turkmenistan", dial_code: "+993", code: "TM" }, { name: "Turks and Caicos Islands", dial_code: "+1649", code: "TC" }, { name: "Tuvalu", dial_code: "+688", code: "TV" }, { name: "Uganda", dial_code: "+256", code: "UG" }, { name: "Ukraine", dial_code: "+380", code: "UA" }, { name: "United Arab Emirates", dial_code: "+971", code: "AE" }, { name: "United Kingdom", dial_code: "+44", code: "GB" }, { name: "United States", dial_code: "+1", code: "US" }, { name: "Uruguay", dial_code: "+598", code: "UY" }, { name: "Uzbekistan", dial_code: "+998", code: "UZ" }, { name: "Vanuatu", dial_code: "+678", code: "VU" }, { name: "Venezuela, Bolivarian Republic of Venezuela", dial_code: "+58", code: "VE" }, { name: "Vietnam", dial_code: "+84", code: "VN" }, { name: "Virgin Islands, British", dial_code: "+1284", code: "VG" }, { name: "Virgin Islands, U.S.", dial_code: "+1340", code: "VI" }, { name: "Wallis and Futuna", dial_code: "+681", code: "WF" }, { name: "Yemen", dial_code: "+967", code: "YE" }, { name: "Zambia", dial_code: "+260", code: "ZM" }, { name: "Zimbabwe", dial_code: "+263", code: "ZW" }];
renderDataBuyer(CountryCode, "code", "default");
function renderDataBuyer(e, t, l) {
    let i = ""; if ("code" == t) { for (let a = 0; a < e.length; a++)i += `<li onclick="select_code_val(this)" class="li-item" data-dial_code="${e[a].dial_code}" data-code="${e[a].code}"> (${e[a].dial_code}) ${e[a].name}</li>`; if ("default" == l) for (var c = 0; c < document.querySelector(".buyer-info-content").getElementsByClassName("package-number-items").length; c++)document.querySelector(".buyer-info-content").getElementsByClassName("package-number-items")[c].querySelector(".drop-item").innerHTML = i; else l.closest(".package-code-item").querySelector(".drop-item").innerHTML = i } else if ("agency" == t) {
        for (let n = 0; n < e.length; n++)i += `<li onclick="select_agency(this)" class="li-item">
<input type="hidden" value="${e[n].date_id}" class="id">${e[n].date_value}</li>`; l.closest(".package-info-item ").querySelector(".drop-item").innerHTML = i
    }
}
function toggle_code(e, o) { reset_drop_item_buyer(), e.closest(".package-info-item").querySelector(".drop-item").classList.toggle("drop-item-toggle"), renderDataBuyer(CountryCode, "code", e) }
function reset_drop_item_buyer() { for (var e = 0; e < document.getElementsByClassName("buyer-info-content").length; e++)for (var t = 0; t < document.getElementsByClassName("buyer-info-content")[e].getElementsByClassName("drop-item").length; t++)document.getElementsByClassName("buyer-info-content")[e].getElementsByClassName("drop-item")[t].classList.contains("drop-item-toggle") && document.getElementsByClassName("buyer-info-content")[e].getElementsByClassName("drop-item")[t].classList.remove("drop-item-toggle") }
function autoComplete_search_buyer(e, a, t) { if ("code" == t) { a.classList.add("run-autoComplete_search"); var r = e.target.value, l = CountryCode.filter((e, a) => e.name.toUpperCase().includes(r.toUpperCase()) || e.dial_code.includes(r)); renderDataBuyer(l, "code", a) } else { var r = e.target.value, l = data_agency.filter((e, a) => e.date_value.toUpperCase().includes(r.toUpperCase())); renderDataBuyer(l, "agency", a) } }
function tab_key_buyer(e, o) { 13 === (e = e || window.event).keyCode || 40 === e.keyCode || 38 === e.keyCode || o.classList.contains("run-autoComplete_search") || o.click() }
function select_code_val(e) { e.closest(".package-info-item").querySelector(".code").value = e.getAttribute("data-dial_code"), e.closest(".package-info-item").querySelector(".description") && (e.closest(".package-info-item").querySelector(".description").remove(), e.closest(".package-info-item").querySelector("input").classList.remove("invalid")), e.closest(".package-info-item").querySelector(".drop-item").classList.remove("drop-item-toggle"), e.closest(".package-info-item").querySelector(".code").classList.remove("run-autoComplete_search") }
function passenger_type(e, t) {
    if ("passenger" == t) {
        e.classList.add("active"), e.nextElementSibling.classList.remove("active"), e.closest(".buyer-info-content").querySelector(".agency-content").classList.add("unvisible"), e.closest(".buyer-info-content").querySelector(".passenger-content").classList.remove("unvisible"), e.closest(".buyer-info-content").querySelector(".passenger-content").querySelectorAll(".package-info-item").forEach(e => e.classList.remove("unvisible")); for (var n = 0; n < document.querySelector(".passenger-content").getElementsByTagName("input").length; n++)"hidden" !== document.querySelector(".passenger-content").getElementsByTagName("input")[n].getAttribute("type") && document.querySelector(".passenger-content").getElementsByTagName("input")[n].classList.add("necessary"), document.querySelector(".passenger-content").getElementsByTagName("input")[n].classList.contains("has-dash") && document.querySelector(".passenger-content").getElementsByTagName("input")[n].classList.remove("necessary"), document.querySelector(".passenger-content").getElementsByTagName("input")[n].setAttribute("name", document.querySelector(".passenger-content").getElementsByTagName("input")[n].getAttribute("data-name")); document.querySelector(".agency-content").querySelector(".name").classList.remove("necessary"), document.querySelector(".agency-content").querySelector(".name").value = "", document.querySelector(".agency-content").querySelector(".agency-information-container").classList.add("unvisible"), document.querySelector(".agency-content").querySelector(".agency-information-container").innerHTML = `<div id="ballsWaveG">
                <div id="ballsWaveG_1" class="ballsWaveG"></div>
                <div id="ballsWaveG_2" class="ballsWaveG"></div>
                <div id="ballsWaveG_3" class="ballsWaveG"></div>
                <div id="ballsWaveG_4" class="ballsWaveG"></div>
                <div id="ballsWaveG_5" class="ballsWaveG"></div>
                <div id="ballsWaveG_6" class="ballsWaveG"></div>
                <div id="ballsWaveG_7" class="ballsWaveG"></div>
                <div id="ballsWaveG_8" class="ballsWaveG"></div>
            </div>`, document.querySelector(".mid").value = 24;
        for (var s = 0; s < e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input").length; s++)if (e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input")[s].classList.contains("necessary")) e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input")[s].setAttribute("name", "")
    }
    else {
        renderDataBuyer(data_agency, "agency", document.querySelector(".agency-content").querySelector(".name")), e.classList.add("active"), e.previousElementSibling.classList.remove("active"), e.closest(".buyer-info-content").querySelector(".agency-content").classList.remove("unvisible"), e.closest(".buyer-info-content").querySelector(".passenger-content").classList.add("unvisible"), e.closest(".buyer-info-content").querySelector(".passenger-content").querySelectorAll(".package-info-item").forEach(e => e.classList.add("unvisible")); for (var n = 0; n < document.querySelector(".passenger-content").getElementsByTagName("input").length; n++)"hidden" === document.querySelector(".passenger-content").getElementsByTagName("input")[n].getAttribute("type") && document.querySelector(".passenger-content").getElementsByTagName("input")[n].classList.contains("has-dash") || document.querySelector(".passenger-content").getElementsByTagName("input")[n].classList.remove("necessary"), document.querySelector(".passenger-content").getElementsByTagName("input")[n].setAttribute("name", ""); document.querySelector(".agency-content").querySelector(".name").classList.add("necessary"), document.querySelector(".mid").value = 18; for (var s = 0; s < e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input").length; s++)
            if (e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input")[s].classList.contains("necessary")) e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input")[s].setAttribute("name", e.closest(".buyers-info-content").querySelector(".counter-info-content").getElementsByTagName("input")[s].getAttribute("data-name"))
    }
}
const data_agency = new Array();
function toggle_agency_list(e) { reset_drop_item_buyer(), e.closest(".package-info-item").querySelector(".drop-item").classList.toggle("drop-item-toggle"), 0 == e.getAttribute("data-load") && (e.closest(".package-info-item").querySelector(".fa-spinner").classList.remove("unvisible"), $.get("/Client_Agency_List.bc", function (t) { e.closest(".package-info-item").querySelector(".drop-item").innerHTML = t, e.setAttribute("data-load", 1), e.closest(".package-info-item").querySelector(".fa-spinner").classList.add("unvisible"); for (var i = 0; i < document.querySelector(".agency-content").querySelector(".drop-item").getElementsByClassName("li-item").length; i++)data_agency.push({ date_value: `${document.querySelector(".agency-content").querySelector(".drop-item").getElementsByClassName("li-item")[i].innerText}`, date_id: `${document.querySelector(".agency-content").querySelector(".drop-item").getElementsByClassName("li-item")[i].querySelector(".id").value}` }) })) }
function select_agency(e) { e.closest(".package-info-item").querySelector(".name").setAttribute("data-agencyid", e.closest(".li-item").querySelector(".id").value); e.closest(".package-info-item").querySelector(".name").value = e.innerText, e.closest(".package-info-item").querySelector(".drop-item").classList.remove("drop-item-toggle"), e.closest(".agency-content").querySelector(".agency-information-container").classList.remove("unvisible"), $.post("/Client_Agency-Information.bc", { id: e.closest(".li-item").querySelector(".id").value }, function (n) { e.closest(".agency-content").querySelector(".agency-information-container").innerHTML = n }) }
// function renderData(e,a,t){let l="";if("area"==a)for(let i=0;i<e.length;i++)l+=`<li onclick="select_area_val(this)" class="li-item" data-id="${e[i].date_id}" data-value="${e[i].date_value}">${e[i].date_value}</li>`;else for(let d=0;d<e.length;d++)l+=`<li onclick="select_date_val(this)" class="li-item" data-id="${e[d].date_id}" data-value="${e[d].date_value}">${e[d].date_value}</li>`;t.closest(".passenger-date-item").querySelector(".drop-item").innerHTML=l}
function toggle_more_buyer_info(e) { e.closest(".buyer-info-content").querySelector(".more-buyer-info-content").classList.toggle("unvisible") }

// updated login

function check_isChanged(element) { element.dataset.changed = 1; }

function verifyUserRequest(element, type) {
    if (type == 'email') {
        var objEditUser = `{
                    "email": "${document.querySelector(".verify-request-container").querySelector(".email-verify").value}",
                    "password": "${document.querySelector(".verify-request-container").querySelector(".password-verify").value}",
                    "verifyType": "email"
                }`
        $bc.setSource("db.verifyrequest", {
            objEditUser: objEditUser,
            rkey: document.querySelector(".main-rkey").value,
            run: true
        })
    } else {
        if (element.dataset.type == 'verifyrequest') {
            var objEditUser = `{
                        "mobile": "${document.querySelector(".verify-request-container").querySelector(".mobile-verify").value}",
                        "verifyType": "mobile"
                    }`
            $bc.setSource("db.verifyrequest", {
                objEditUser: objEditUser,
                rkey: document.querySelector(".main-rkey").value,
                run: true
            })
        } else if (element.dataset.type == 'mobileverify') {
            var objEditUser = `{
                        "code": "${document.querySelector(".verify-request-container").querySelector(".code-verify").value}",
                        "hashid": "${document.querySelector(".verify-request-container").querySelector(".code-verify").dataset.hashid}"
                    }`
            $bc.setSource("db.mobileverify", {
                objEditUser: objEditUser,
                run: true
            })
        }

    }
}
function verifyRequestClosed(element) {
    document.querySelector(".verify-request-container").classList.toggle("verify-request-container-toggle");
    document.querySelectorAll(".verify-request-content").forEach(e => {
        e.classList.add("unvisible");
    })
}

async function onProcessedVerifyRequest(args) {
    const response = args.response;
    const responseJson = await response.json();
    if (!responseJson.errorMessage) {
        if (responseJson.errorid == 1) {
            console.log('verifyrequest' + responseJson.message)
        } else if (responseJson.errorid == 4) {
            document.querySelector(".main-verify-request-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> ورودی ها نامعتبر است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".main-verify-request-container").querySelector(".error-result")) {
                    document.querySelector(".main-verify-request-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 3) {
            document.querySelector(".main-verify-request-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> از زمان اعتبار کلید قبلی ${responseJson.remain_time} ثانیه باقی مانده است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".main-verify-request-container").querySelector(".error-result")) {
                    document.querySelector(".main-verify-request-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 46) {
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> فرمت شماره همراه وارد شده صحیح نیست </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".error-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 47) {
            document.querySelector(".email-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center">  فرمت ایمیل وارد شده صحیح نیست  </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".email-verify-container").querySelector(".error-result")) {
                    document.querySelector(".email-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 48) {
            document.querySelector(".mobile-verify-container").querySelector(".code-verify-container").classList.remove("unvisible");
            document.querySelector(".mobile-verify-container").querySelector(".btn-item").innerHTML = `فعال سازی شماره همراه`;
            document.querySelector(".mobile-verify-container").querySelector(".btn-item").dataset.type = `mobileverify`;
            document.querySelector(".mobile-verify-container").querySelector(".code-verify").dataset.hashid = responseJson.hashid;
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="true-result text-center">کد احراز هویت از طریق پیامک ارسال شد</div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".true-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".true-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 49) {
            document.querySelector(".email-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center">ایمیل برای کاربر دیگری ثبت شده است</div>`
            );
            setTimeout(function () {
                if (document.querySelector(".email-verify-container").querySelector(".error-result")) {
                    document.querySelector(".email-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 50) {
            document.querySelector(".email-verify-container").insertAdjacentHTML('beforeend',
                `<div class="true-result text-center">ایمیل فعالسازی ارسال شده است</div>`
            );
            setTimeout(function () {
                if (document.querySelector(".email-verify-container").querySelector(".true-result")) {
                    document.querySelector(".email-verify-container").querySelector(".true-result").remove();
                }
                document.querySelector(".verify-request-container").classList.toggle("verify-request-container-toggle");
                document.querySelectorAll(".verify-request-content").forEach(e => {
                    e.classList.add("unvisible");
                })

            }, 3000);
            if (document.querySelector(".check-has-data")) {
                document.querySelector(".check-has-data").querySelectorAll("input").forEach(e => {
                    if (e.dataset.verify) {
                        if (e.classList.contains("email")) {
                            e.setAttribute("data-verify", true)
                        }
                    }
                })
            }
        }


    }
}
async function onProcessedMobileverify(args) {
    const response = args.response;
    const responseJson = await response.json();
    if (!responseJson.errorMessage) {
        if (responseJson.errorid == 60) {
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> از زمان اعتبار کلید قبلی ${responseJson.remain_time} ثانیه باقی مانده است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".error-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 10) {
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> ورودی ها نامعتبر است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".error-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 1) {
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> اعتبار کلید پایان یافته است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".error-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 4) {
            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="error-result text-center"> کد وارد شده نامعتبر است </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".error-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".error-result").remove();
                }

            }, 3000);
        } else if (responseJson.errorid == 11) {

            document.querySelector(".mobile-verify-container").insertAdjacentHTML('beforeend',
                `<div class="true-result text-center"> فعال سازی با موفقیت انجام شد </div>`
            );
            setTimeout(function () {
                if (document.querySelector(".mobile-verify-container").querySelector(".true-result")) {
                    document.querySelector(".mobile-verify-container").querySelector(".true-result").remove();
                }
                document.querySelector(".mobile-verify-container").querySelector(".code-verify-container").classList.add("unvisible");
                document.querySelector(".mobile-verify-container").querySelector(".btn-item").dataset.type = `verifyrequest`;
                document.querySelector(".mobile-verify-container").querySelector(".btn-item").innerHTML = `ارسال کد`;
                document.querySelector(".verify-request-container").classList.toggle("verify-request-container-toggle");
                document.querySelectorAll(".verify-request-content").forEach(e => {
                    e.classList.add("unvisible");
                })

            }, 3000);

            if (document.querySelector(".check-has-data")) {
                document.querySelector(".check-has-data").querySelectorAll("input").forEach(e => {
                    if (e.dataset.verify) {
                        if (e.classList.contains("mobile")) {
                            e.setAttribute("data-verify", true)
                        }
                    }
                })
            }
        }
    }
}