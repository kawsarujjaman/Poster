

document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
}) 


function toggle(event) {
  var myCollapse = document.getElementsByClassName('collapse')[0];
  var bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: true
  });


}


var input = document.querySelector("#telephone");
      window.intlTelInput(input, {
        allowDropdown: true,
        autoInsertDialCode: true,
        autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        formatOnDisplay: true,
        // geoIpLookup: function(callback) {
        //   fetch("https://ipapi.co/json")
        //     .then(function(res) { return res.json(); })
        //     .then(function(data) { callback(data.country_code); })
        //     .catch(function() { callback("us"); });
        // },
        hiddenInput: "full_number",
        // initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        nationalMode: true,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        preferredCountries: ['es', 'bd'],
        separateDialCode: true,
        showFlags: true,
        utilsScript: "build/js/utils.js"
      });



      $(function(){
        $('.selectpicker').selectpicker();
    });

    // Modal
    const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
