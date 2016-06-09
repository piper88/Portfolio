var projectView = {};

// articleView.handleMainNav = function() {
//   // if we click on home, hide about section, and show home section, and vice versa
//   /* TODO: Complete the delegated event handler below to help power the tabs feature.
//       Clicking any .tab element should:
//           1.) Hide all the .tab-content sections
//           2.) Fade in the single .tab-content section that is associated with the clicked .tab element's data-content attribute. */
//   $('.main-nav').on('click', '.tab', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
//   $('.main-nav .tab:first').click();
// };

projectView.handleNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.content-to-toggle').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.handleNav();
