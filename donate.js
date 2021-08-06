// double-click preventer
function ClientSideClick(myButton) {
    // Client side validation
    if (typeof (Page_ClientValidate) == 'function') {
        if (Page_ClientValidate() == false)
        { return false; }
    }

    //make sure the button is not of type "submit" but "button"
    if (myButton.getAttribute('type') == 'button') {
        // disable the button
        myButton.disabled = true;
        myButton.className = "btn-inactive";
        myButton.value = "processing...";
    }
    return true;
}

// label adjuster
$(document).ready(function () {
    $('input, textarea, select').on('focus', function () {
        $(this).parent().find('label').addClass('moveUp');
    });
    $('input, textarea, select').on('focusout', function () {
        if (!$(this).val())
        {
            $(this).parent().find('label').removeClass('moveUp');
        }
    });

});
$('input.form-control').each(function () {
    var val = $(this).val().trim();
    if (val.length > 0) {
        $(this).parent().find('label').addClass('moveUp');
    }
});
$('textarea.form-control').each(function () {
    var val = $(this).val().trim();
    if (val.length > 0) {
        $(this).parent().find('label').addClass('moveUp');
    }
});

// Donation Person Type
$(document).ready(function () {
    $('.two-contributor-title').hide();
    $('#hdnAddressTitle').val($('#AddressTitle').text());
    $('#btnCompany').click(function () {
        $('#panelFirstLastName').hide();
        $('#panelOtherName').hide();
        $('#panelEmployOcc').hide();
        $('#panelOtherEmployer').hide();
        $('#panelCompanyName').fadeIn('fast');
        $('.two-contributor-title').hide();
        $('#CompanyDonation').val('t');
        $('#SecondDonation').val('f');
        $('#btnCompany').prop("disabled", true);
        $('#btnPersonal').prop("disabled", false);
        $('#btnSecond').prop("disabled", false);
        $('#NameFirst').prop("required", false);
        $('#NameLast').prop("required", false);
        $('#NameCompany').prop("required", true);
        $('#NameFirstOther').prop("required", false);
        $('#NameLasttOther').prop("required", false);
        $('#Occupation').prop("required", false);
        $('#Employer').prop("required", false);
        $('#OccupationOther').prop("required", false);
        $('#EmployerOther').prop("required", false);
        //New
        $('#AddressTitle').text('Company address');
    });
    $('#btnPersonal').click(function () {
        $('#panelFirstLastName').fadeIn('fast');
        $('#panelOtherName').hide();
        $('#panelEmployOcc').fadeIn('fast');
        $('#panelOtherEmployer').hide();
        $('#panelCompanyName').hide();
        $('.two-contributor-title').hide();
        $('#CompanyDonation').val('f');
        $('#SecondDonation').val('f');
        $('#btnCompany').prop("disabled", false);
        $('#btnPersonal').prop("disabled", true);
        $('#btnSecond').prop("disabled", false);
        $('#NameFirst').prop("required", true);
        $('#NameLast').prop("required", true);
        $('#NameCompany').prop("required", false);
        $('#NameFirstOther').prop("required", false);
        $('#NameLastOther').prop("required", false);
        // Occupation/Employer Required Amount
        if ($('#Occupation').attr('requireamount') !== null && parseFloat($('#Amount').val()) < parseFloat($('#Occupation').attr('requireamount'))) {
            $('#Occupation').prop("required", false);
            $('#Employer').prop("required", false);
        }
        else {
            $('#Occupation').prop("required", true);
            $('#Employer').prop("required", true);
        }
        $('#OccupationOther').prop("required", false);
        $('#EmployerOther').prop("required", false);
        //New
        $('#AddressTitle').text($('#hdnAddressTitle').val());
    });
    $('#btnSecond').click(function () {
        $('#panelFirstLastName').fadeIn('fast');
        $('#panelOtherName').fadeIn('fast');
        $('#panelEmployOcc').fadeIn('fast');
        $('#panelOtherEmployer').fadeIn('fast');
        $('.two-contributor-title').fadeIn('fast');
        $('#panelCompanyName').hide();
        $('#CompanyDonation').val('f');
        $('#SecondDonation').val('t');
        $('#btnCompany').prop("disabled", false);
        $('#btnPersonal').prop("disabled", false);
        $('#btnSecond').prop("disabled", true);
        $('#NameFirst').prop("required", true);
        $('#NameLast').prop("required", true);
        $('#NameCompany').prop("required", false);
        $('#NameFirstOther').prop("required", true);
        $('#NameLastOther').prop("required", true);
        // Occupation/Employer Required Amount
        if ($('#Occupation').attr('requireamount') !== null && parseFloat($('#Amount').val()) < parseFloat($('#Occupation').attr('requireamount'))) {
            $('#Occupation').prop("required", false);
            $('#Employer').prop("required", false);
            $('#OccupationOther').prop("required", false);
            $('#EmployerOther').prop("required", false);
        }
        else {
            $('#Occupation').prop("required", true);
            $('#Employer').prop("required", true);
            $('#OccupationOther').prop("required", true);
            $('#EmployerOther').prop("required", true);
        }
        //New
        $('#AddressTitle').text($('#hdnAddressTitle').val());
    });
});
$('.efund_choice').each(function () {
    if ($('#CompanyDonation').val() == 't') {
        $('#btnCompany').prop("disabled", true);
        $('#panelFirstLastName').hide();
        $('#panelOtherName').hide();
        $('#panelEmployOcc').hide();
        $('#panelOtherEmployer').hide();
        $('#panelCompanyName').fadeIn('fast');
        $('#NameFirst').prop("required", false);
        $('#NameLast').prop("required", false);
        $('#Occupation').prop("required", false);
        $('#Employer').prop("required", false);
        $('#NameCompany').prop("required", true);
    }
    else if ($('#SecondDonation').val() == 't') {
        $('#btnSecond').prop("disabled", true);
        $('#panelFirstLastName').fadeIn('fast');
        $('#panelOtherName').fadeIn('fast');
        $('#panelEmployOcc').fadeIn('fast');
        $('#panelOtherEmployer').fadeIn('fast');
        $('#panelCompanyName').hide();
        $('#NameFirst').prop("required", true);
        $('#NameLast').prop("required", true);
        $('#NameFirstOther').prop("required", true);
        $('#NameLastOther').prop("required", true);
        if ($('#Occupation').attr('requireamount') !== null && parseFloat($('#Amount').val()) < parseFloat($('#Occupation').attr('requireamount'))) {
            $('#OccupationOther').prop("required", false);
            $('#EmployerOther').prop("required", false);
        }
        else {
            $('#OccupationOther').prop("required", true);
            $('#EmployerOther').prop("required", true);
        }
    }
    else {
        $('#btnPersonal').prop("disabled", true);
        $('#NameFirst').prop("required", true);
        $('#NameLast').prop("required", true);
    }
});

// Monthly Donation
$(document).ready(function () {
    $('#btnOneTime').prop("disabled", true);
    $('#btnOneTime').click(function () {
        $('.efund_RecurringDonation').hide();
        $('#panelMonthlyDonation').hide(); // legacy
        $('.efund_RecurringMessage').hide();
        $('#Iterations').prop("required", false);
        $('#Iterations').removeAttr("pattern");
        $('#btnOneTime').prop("disabled", true);
        $('#btnWeekly').prop("disabled", false);
        $('#btnMonthly').prop("disabled", false);
        $('#btnQuarterly').prop("disabled", false);
        $('#btnAnnually').prop("disabled", false);
    });
    $('#btnWeekly').click(function () {
        $('.efund_RecurringDonation').fadeIn('fast');
        $('#panelMonthlyDonation').fadeIn('fast'); // legacy
        $('.efund_RecurringMessage').hide();
        $('#weeklyMessage').fadeIn('fast');
        $('#Iterations').prop("required", true);
        $('#Iterations').attr("pattern", "^[1-9][0-9]*");
        $('#btnOneTime').prop("disabled", false);
        $('#btnWeekly').prop("disabled", true);
        $('#btnMonthly').prop("disabled", false);
        $('#btnQuarterly').prop("disabled", false);
        $('#btnAnnually').prop("disabled", false);
        $('#IterationsLabel').text("Weeks");
    });
    $('#btnMonthly').click(function () {
        $('.efund_RecurringDonation').fadeIn('fast');
        $('#panelMonthlyDonation').fadeIn('fast'); // legacy
        $('.efund_RecurringMessage').hide();
        $('#monthlyMessage').fadeIn('fast');
        $('#Iterations').prop("required", true);
        $('#Iterations').attr("pattern", "^[1-9][0-9]*");
        $('#btnOneTime').prop("disabled", false);
        $('#btnWeekly').prop("disabled", false);
        $('#btnMonthly').prop("disabled", true);
        $('#btnQuarterly').prop("disabled", false);
        $('#btnAnnually').prop("disabled", false);
        $('#IterationsLabel').text("Months");
    });
    $('#btnQuarterly').click(function () {
        $('.efund_RecurringDonation').fadeIn('fast');
        $('#panelMonthlyDonation').fadeIn('fast'); // legacy
        $('.efund_RecurringMessage').hide();
        $('#quarterlyMessage').fadeIn('fast');
        $('#Iterations').prop("required", true);
        $('#Iterations').attr("pattern", "^[1-9][0-9]*");
        $('#btnOneTime').prop("disabled", false);
        $('#btnWeekly').prop("disabled", false);
        $('#btnMonthly').prop("disabled", false);
        $('#btnQuarterly').prop("disabled", true);
        $('#btnAnnually').prop("disabled", false);
        $('#IterationsLabel').text("Quarters");
    });
    $('#btnAnnually').click(function () {
        $('.efund_RecurringDonation').fadeIn('fast');
        $('#panelMonthlyDonation').fadeIn('fast'); // legacy
        $('.efund_RecurringMessage').hide();
        $('#annuallyMessage').fadeIn('fast');
        $('#Iterations').prop("required", true);
        $('#Iterations').attr("pattern", "^[1-9][0-9]*");
        $('#btnOneTime').prop("disabled", false);
        $('#btnWeekly').prop("disabled", false);
        $('#btnMonthly').prop("disabled", false);
        $('#btnQuarterly').prop("disabled", false);
        $('#btnAnnually').prop("disabled", true);
        $('#IterationsLabel').text("Years");
    });
});

// CC Number and Security Code Format and Length
$(document).ready(function () {
    $('#CCNumber').on('input', function () {
        let maxLength, csvLength;
        if ( /^3[47]/.test( $(this).val() ) ) {
            maxLength = 15;
            csvLength = 4;
        } else {
            maxLength = 16;
            csvLength = 3;
        }
        $(this).attr({
            'maxlength': maxLength,
            'pattern': '[0-9]{' + maxLength +'}'
        });
        $('#CCSecurity').attr({
            'placeholder': '•'.repeat(csvLength),
            'maxlength': csvLength,
            'pattern': '[0-9]{' + csvLength + '}'
        });
    });
});

// CC Number Validation
$(document).ready(function () {
    $('.efundForm').on('submit', function () {
        let ccNum = $('#CCNumber').val().trim();
        if ((/^3[47]/.test(ccNum) && (ccNum.length === 15)) || (!/^3[47]/.test(ccNum) && (ccNum.length === 16))) {
            let validCC = validateCC(ccNum);
            if (!validCC) {
                $('#CCNumber').parent().addClass('ccErrorMsg');
                return false;
            }
        }
        $('#CCNumber').parent().removeClass('ccErrorMsg');
        return true;
    });
    function validateCC(ccNum) {
        var mod10 = ccNum.replace(/\D/g, '').split('').reverse()
            .map((x, i) => (i % 2 === 1) ? (x * 2) : parseInt(x))
            .map((x) => (x > 9) ? (x - 9) : x)
            .reduce((a, c) => a + c) % 10;
        return (mod10 === 0);
    }
});

// CC Address Display
$(document).ready(function () {
    $('#CCAddressDifferent').change(function () {
        if (this.checked) {
            $('#panelCCAddress').fadeIn('fast');
            $('#CCAddress').prop("required", true);
            $('#CCCity').prop("required", true);
            $('#CCState').prop("required", true);
            $('#CCZip').prop("required", true);
            $('#CCZip').attr("pattern", "[0-9]{5}");
            $('#CCAddressDifferentColumn').removeClass('col-xs-12').addClass('col-xs-6 col-sm-8');
        }
        else {
            $('#panelCCAddress').hide();
            $('#CCAddress').prop("required", false);
            $('#CCCity').prop("required", false);
            $('#CCState').prop("required", false);
            $('#CCZip').prop("required", false);
            $('#CCZip').removeAttr("pattern");
            $('#CCAddressDifferentColumn').addClass('col-xs-12').removeClass('col-xs-6 col-sm-8');
        }
    });
});

// Highlight Amounts
$('.efund_PaymentOptionItem').each(function () {
    if (($('#Amount').val()) && ($('#Amount').val() != '0') && ($('#Amount').val() == $(this).attr('data-amount'))) {
        $('.efund_PaymentOptionItem').removeClass("selectedOption");
        $(this).addClass("selectedOption");
        $('#OtherAmount').val('');
        $('#OtherAmount').parent().find('label').removeClass('moveUp');
        $('#mainSubmit').val($('#mainSubmit').val() + ' $' + $(this).attr('data-amount'));
        $('#Amount').val($(this).attr('data-amount'));
        if ($('#paypal-error').css('display') === 'none'){
            $('#paypal-button').css('display', 'block');
            $('#paypal-warning').css('display', 'none');
        }
    }
});
$('#OtherAmount').each(function () {
    if (($(this).val()) && ($(this).val() != '0')) {
        $('.efund_PaymentOptionItem').removeClass("selectedOption");
        $('#mainSubmit').val($('#mainSubmit').val() + ' $' + $(this).val());
        $('#Amount').val($(this).val());
        if ($('#paypal-error').css('display') === 'none') {
            $('#paypal-button').css('display', 'block');
            $('#paypal-warning').css('display', 'none');
        }
    }
});

// Only Decimals and Numbers
$(document).ready(function () {
    $("#OtherAmount").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

// Only Numbers
$(document).ready(function () {
    $(".numbersOnly").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$(document).ready(function () {
    var currentDate = new Date(),
        currentMonth = currentDate.getMonth() + 1,
        getYear = (new Date()).getFullYear();


    // Highlight Amounts
    $('.efund_PaymentOptionItem').on('click', function () {
        $('.efund_PaymentOptionItem').removeClass("selectedOption");
        $(this).addClass("selectedOption");
        $('#OtherAmount').val('');
        $('#OtherAmount').parent().find('label').removeClass('moveUp');
        if ($('#mainSubmit').val().indexOf("$") <= 0) {
            $('#mainSubmit').val($('#mainSubmit').val() + " $");
        }
        $('#mainSubmit').val($('#mainSubmit').val().substr(0, $('#mainSubmit').val().indexOf("$") + 1));
        $('#mainSubmit').val($('#mainSubmit').val() + $(this).attr('data-amount'));
        $('#Amount').val($(this).attr('data-amount'));
        //Paypal messages
        if ($('#paypal-error').css('display') === 'none') {
            $('#paypal-button').css('display', 'block');
            $('#paypal-warning').css('display', 'none');
        }
        // Employer/Occupation Require Amount
        if ($('#Occupation').attr('requireamount') !== undefined) {
            var amount = parseFloat($('#Amount').val());
            var required = parseFloat($('#Occupation').attr('requireamount'));
            if (amount > required) {
                $('#Occupation').prop("required", true);
                $('#Employer').prop("required", true);
                if ($('#SecondDonation').val() == 't') {
                    $('#OccupationOther').prop("required", true);
                    $('#EmployerOther').prop("required", true);
                }
            }
            else {
                $('#Occupation').prop("required", false);
                $('#Employer').prop("required", false);
                if ($('#SecondDonation').val() == 't') {
                    $('#OccupationOther').prop("required", false);
                    $('#EmployerOther').prop("required", false);
                }
            }
        }
    });

    // Other Amount field is emptied if input value is set to 0
    $('#OtherAmount').on('focus', function () {
        if ($(this).val() == '0') {
            $(this).val('');
        }
    });
    $('#OtherAmount').on('focusout', function () {
        if (($(this).val()) && (parseFloat($(this).val()) != 0)) {
            $('.efund_PaymentOptionItem').removeClass("selectedOption");
            if ($('#mainSubmit').val().indexOf("$") <= 0) {
                $('#mainSubmit').val($('#mainSubmit').val() + " $");
            }
            $('#mainSubmit').val($('#mainSubmit').val().substr(0, $('#mainSubmit').val().indexOf("$") + 1));
            $('#mainSubmit').val($('#mainSubmit').val() + $(this).val());
            $('#Amount').val($(this).val());
            if ($('#paypal-error').css('display') === 'none') {
                $('#paypal-button').css('display', 'block');
                $('#paypal-warning').css('display', 'none');
            }
        } else {
            $(this).val('');
            $(this).parent().find('label').removeClass('moveUp');
            if (!($('.selectedOption')[0])) {
                $('#Amount').val('0');
            }
            if (parseFloat($('#Amount').val()) == 0 && $('#paypal-error').css('display') === 'none'){
                $('#paypal-button').css('display', 'none');
                $('#paypal-warning').css('display', 'block');
            }
        }
        // Employer/Occupation Required Amount
        if ($('#Occupation').attr('requireamount') !== undefined) {
            var amount = parseFloat($('#Amount').val());
            var required = parseFloat($('#Occupation').attr('requireamount'));
            if (amount > required) {
                $('#Occupation').prop("required", true);
                $('#Employer').prop("required", true);
                if ($('#SecondDonation').val() == 't') {
                    $('#OccupationOther').prop("required", true);
                    $('#EmployerOther').prop("required", true);
                }
            }
            else {
                $('#Occupation').prop("required", false);
                $('#Employer').prop("required", false);
                if ($('#SecondDonation').val() == 't') {
                    $('#OccupationOther').prop("required", false);
                    $('#EmployerOther').prop("required", false);
                }
            }
        }
    });

    // Does not allow Space key to be used in fields with provided class selector
    $('.disallow-spaces').on('keydown', function (e) {
        if (e.keyCode == 32) return false;
    });

    // 'Other Amount' - Limit out 2 decimal spaces 
    $('#OtherAmount').on('input', function () {
        this.value = this.value.match(/^\d+\.?\d{0,2}/);
    });
    // 'Other Amount' Validating
    $('#OtherAmount').on('focusout', function () {
        var typedVal = $(this).val(),
            setVal = 5; // Change to grab value of hidden field

        if (typedVal < setVal) {
            $(this).addClass('fail');
        } else {
            $(this).removeClass('fail');
        }
    });

    // Add 20 years out to Year field
    for (var i = 0; i < 20; i++) {
        var yearAdj = getYear + i
        $('#ExpYear').append('<option>' + yearAdj + '</option>');
    }

    // Month Validating - Must be between 1-12 and not before currentMonth if the currentYear matches ExpYear
    $('.expMonth').on('focusout', function () {
        var totalVal = $(this).val(),
            typedChar = this.value.length,
            selYear = $('.expYear').val();

        if ((selYear == getYear) && (totalVal < currentMonth)) {
            $(this).addClass('fail');
        } else {
            if ((totalVal > 12) && (typedChar >= 1)) {
                $(this).addClass('fail');
            } else if ((totalVal <= 0) && (typedChar >= 1)) {
                $(this).addClass('fail');
            } else {
                $(this).removeClass('fail');
            }
        }
    });

    //Form click event
    $("#mainSubmit").click(function (event) {
        //Display message if PayPal checkout button is visible
        if ($('#paypal-button').css('display') === 'block') {
            $('#paypal-continue').css('display', 'block');
        }
    });

    //Make sure PayPal is all good
    if ($('#PayPalPayerID').length) {
        if ($('#PayPalPayerID').val() != "" && $('#PayPalPaymentID').val() != "") {
            // Forbid amounts
            disableAmounts();

            //Make credit card fields not required
            $('#creditcard-opt input[type="text"]').removeAttr('required');

            // Toggle paypal payment option
            $('#ccNavButton').parent().removeClass('active');
            $('#ppNavButton').parent().addClass('active');

            //Show the correct content
            $('#creditcard-opt').removeClass("active in");
            $('#paypal-opt').addClass("active in");

            // Set correct paypal message or content
            $('#paypal-button').css('display', 'none');
            $('#paypal-success').css('display', 'block');
        }
        //PayPal error message on reload
        else if ($('#PayPalError').val() != "") {
            $('#paypal-button').css('display', 'none');
            $('#paypal-error').css('display', 'block');
        }
    }
});

function disableAmounts() {
    $('#OtherAmount').prop('disabled', true);
    $('#OtherAmountLabel').css('background-color', '#EEE');
    $('.efund_PaymentOptionItem').each(function () {
        $(this).addClass('disable-click');
    });
    $('#ccNavButton').addClass('disable-click');
}

// Resize Amount Buttons
$(window).on('load resize', function() {
  const minBtnWidth = 100;
  let   $btnList, rowWidth, btnsPerRow, numBtns, btnWidth, inputWidth;

  $btnList = $('.efund_PaymentOptionList');
  rowWidth   = $btnList.innerWidth() - ( parseInt($btnList.css('padding-left')) + parseInt($btnList.css('padding-right')) );
  btnsPerRow = Math.floor( rowWidth / minBtnWidth );
  numBtns    = $('.efund_PaymentOptionItem').length;
  
  if ( numBtns < btnsPerRow ) {
    btnWidth = minBtnWidth;
  } else {
    btnWidth = rowWidth / btnsPerRow;
  }
  
  if ( numBtns % btnsPerRow === 0 ) {
    inputWidth = rowWidth;
  } else {
    inputWidth = Math.floor( rowWidth - ((numBtns % btnsPerRow) * btnWidth) );
  }
  
  // Set button and input width
  $('.efund_PaymentOptionItem').width( btnWidth );
  $('.efund_PaymentOptionOther').width( inputWidth );
});

// Recurring Buttons Styling
$(document).ready(function () {
  $('#efund_recurring_btns').children('.btn-wrapper').last().addClass('last');
});

// Resize Recurring Tabs
$(window).on('load resize', function() {
  const minBtnWidth = 80;
  let   $btnList, rowWidth, btnsPerRow, numBtns, btnWidth, inputWidth;

  $btnList = $('#efund_recurring_btns');
  rowWidth   = $btnList.innerWidth() - ( parseInt($btnList.css('padding-left')) + parseInt($btnList.css('padding-right')) );
  btnsPerRow = Math.floor( rowWidth / minBtnWidth );
  numBtns    = $btnList.find('.btn-wrapper').length;
  
  if ( numBtns <= btnsPerRow ) {
    btnWidth = rowWidth / numBtns;
    inputWidth = rowWidth;
    $btnList.find('.btn').css('height','44px');
  } else {
    btnWidth = rowWidth / 2;
    inputWidth = rowWidth / 2;
    $btnList.find('.btn').css('height','54px');
  }
  
  // if ( numBtns % btnsPerRow === 0 ) {
  //   inputWidth = rowWidth;
  // } else {
  //   inputWidth = Math.floor( rowWidth - ((numBtns % btnsPerRow) * btnWidth) );
  // }
  
  // Set button and input width
  $btnList.find('.btn-wrapper').width( btnWidth );
  $('.efund_RecurringDonation').width( inputWidth );
});
