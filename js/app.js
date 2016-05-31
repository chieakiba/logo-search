// global variable
var scholarshipOption;
var educationOption;
var logos;

$(document).ready(function() {
    $('.scholarship li').click(function() {
        scholarshipOption = $(this).children().html();
        $('.program').text(scholarshipOption);
    })
    $('.education li').click(function() {
        educationOption = $(this).children().html();
        $('.education-level').text(educationOption);
    })
    $('.search').click(function() {
        if ((scholarshipOption.match('SEARCH ALL')) && (educationOption.match('SEARCH ALL'))) {
            $('.first').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.sixth').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.eighth').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.second').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.fourth').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.ninth').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.third').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
            $('.fifth').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
            $('.seventh').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
        }
    })
    $('.search').click(function() {
        if ((scholarshipOption.match('SCHOLARSHIP PROGRAM')) && (educationOption.match('HIGH SCHOOL'))) {
            $('.first').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.sixth').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.eighth').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
        }
    })
    $('.search').click(function() {
        if ((scholarshipOption.match('LOAN PROGRAM')) && (educationOption.match('HIGH SCHOOL'))) {
            $('.second').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.fourth').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.ninth').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
        }
    })
    $('.search').click(function() {
        if ((scholarshipOption.match('SCHOLARSHIP PROGRAM')) && (educationOption.match('KINDERGARTEN'))) {
            $('.third').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
            $('.fifth').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
            $('.seventh').replaceWith('<img src="logos/afe color.png" alt=afe-color>')
        }
    })
    $('.search').click(function() {
        if ((scholarshipOption.match('LOAN PROGRAM')) && (educationOption.match('KINDERGARTEN'))) {
            $('.sixth').replaceWith('<img src="logos/aci - color.png" alt=aci-color>');
            $('.second').replaceWith('<img src="logos/acm - color.png" alt=acm-color>');
            $('.seventh').replaceWith('<img src="logos/afe color.png" alt=afe-color>');
        }
    })
})