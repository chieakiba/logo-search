// global variable
var scholarshipOption;
var educationOption;
var logos;
var firstLogo = "<img class='first' src='logos/aci.png' alt='ACI'>";
var secondLogo = "<img class='second' src='logos/acm - fade copy 2.png' alt='ACM'>";
var thirdLogo = "<img class='third' src='logos/afe - fade.png' alt='AFE'>";
var fourthLogo = "<img class='fourth' src='logos/acm - fade copy 2.png' alt='ACM'>";
var fifthLogo = "<img class='fifth' src='logos/afe - fade.png' alt='AFE'>";
var sixthLogo = "<img class='sixth' src='logos/aci.png' alt='ACI'>";
var seventhLogo = "<img class='seventh' src='logos/afe - fade.png' alt='AFE'>";
var eighthLogo = "<img class='eighth' src='logos/aci.png' alt='ACI'>";
var ninthLogo = "<img class='ninth' src='logos/acm - fade copy 2.png' alt='ACM'>";


$(document).ready(function() {
    $('.logos').append(firstLogo, secondLogo, thirdLogo, fourthLogo, fifthLogo, sixthLogo, seventhLogo, eighthLogo, ninthLogo);
    $('.scholarship li').click(function() {
         let scholarshipOption = $(this).children().html();
        $('.program').text(scholarshipOption);
    })
    $('.education li').click(function() {
        let educationOption = $(this).children().html();
        $('.education-level').text(educationOption);
    })
    $('.search').click(function() {
        if (scholarshipOption.match('SEARCH ALL') && educationOption.match('SEARCH ALL')) {
            $('.first').attr('src', 'logos/aci - color.png');
            $('.second').attr('src', 'logos/acm - color.png');
            $('.third').attr('src', 'logos/afe color.png');
            $('.fourth').attr('src', 'logos/acm - color.png');
            $('.fifth').attr('src', 'logos/afe color.png');
            $('.sixth').attr('src', 'logos/aci - color.png');
            $('.seventh').attr('src', 'logos/afe color.png');
            $('.eighth').attr('src', 'logos/aci - color.png');
            $('.ninth').attr('src', 'logos/acm - color.png');
        } else if (scholarshipOption.match('SCHOLARSHIP PROGRAM') && educationOption.match('HIGH SCHOOL')) {
            $('.first').attr('src', 'logos/aci.png');
            $('.second').attr('src', 'logos/acm - fade copy 2.png');
            $('.third').attr('src', 'logos/afe - fade.png');
            $('.fourth').attr('src', 'logos/acm - fade copy 2.png');
            $('.fifth').attr('src', 'logos/afe - fade.png');
            $('.sixth').attr('src', 'logos/aci.png');
            $('.seventh').attr('src', 'logos/afe - fade.png');
            $('.eighth').attr('src', 'logos/aci.png');
            $('.ninth').attr('src', 'logos/acm - fade copy 2.png');
            $('.first').attr('src', 'logos/aci - color.png');
            $('.sixth').attr('src', 'logos/aci - color.png');
            $('.eighth').attr('src', 'logos/aci - color.png');

        } else if (scholarshipOption.match('LOAN PROGRAM') && educationOption.match('HIGH SCHOOL')) {
            $('.first').attr('src', 'logos/aci.png');
            $('.second').attr('src', 'logos/acm - fade copy 2.png');
            $('.third').attr('src', 'logos/afe - fade.png');
            $('.fourth').attr('src', 'logos/acm - fade copy 2.png');
            $('.fifth').attr('src', 'logos/afe - fade.png');
            $('.sixth').attr('src', 'logos/aci.png');
            $('.seventh').attr('src', 'logos/afe - fade.png');
            $('.eighth').attr('src', 'logos/aci.png');
            $('.ninth').attr('src', 'logos/acm - fade copy 2.png');
            $('.second').attr('src', 'logos/acm - color.png');
            $('.fourth').attr('src', 'logos/acm - color.png');
            $('.ninth').attr('src', 'logos/acm - color.png');
        } else if (scholarshipOption.match('SCHOLARSHIP PROGRAM') && educationOption.match('KINDERGARTEN')) {
            $('.first').attr('src', 'logos/aci.png');
            $('.second').attr('src', 'logos/acm - fade copy 2.png');
            $('.third').attr('src', 'logos/afe - fade.png');
            $('.fourth').attr('src', 'logos/acm - fade copy 2.png');
            $('.fifth').attr('src', 'logos/afe - fade.png');
            $('.sixth').attr('src', 'logos/aci.png');
            $('.seventh').attr('src', 'logos/afe - fade.png');
            $('.eighth').attr('src', 'logos/aci.png');
            $('.ninth').attr('src', 'logos/acm - fade copy 2.png');
            $('.third').attr('src', 'logos/afe color.png');
            $('.fifth').attr('src', 'logos/afe color.png');
            $('.seventh').attr('src', 'logos/afe color.png');
        } else if (scholarshipOption.match('LOAN PROGRAM') && educationOption.match('KINDERGARTEN')) {
            $('.first').attr('src', 'logos/aci.png');
            $('.second').attr('src', 'logos/acm - fade copy 2.png');
            $('.third').attr('src', 'logos/afe - fade.png');
            $('.fourth').attr('src', 'logos/acm - fade copy 2.png');
            $('.fifth').attr('src', 'logos/afe - fade.png');
            $('.sixth').attr('src', 'logos/aci.png');
            $('.seventh').attr('src', 'logos/afe - fade.png');
            $('.eighth').attr('src', 'logos/aci.png');
            $('.ninth').attr('src', 'logos/acm - fade copy 2.png');
            $('.sixth').attr('src', 'logos/aci - color.png');
            $('.second').attr('src', 'logos/acm - color.png');
            $('.seventh').attr('src', 'logos/afe color.png');
        }
    })
})