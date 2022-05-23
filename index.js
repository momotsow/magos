$(window).on('load', function () {
    $('.preloader').fadeOut();
});


// const form = document.querySelector("form"),
// statusTxt = form.querySelector(".button-area span");

// form.onsubmit = (e)=>{
//   e.preventDefault();
//   statusTxt.style.color = "#0D6EFD";
//   statusTxt.style.display = "block";
//   statusTxt.innerText = "Sending your message...";
//   form.classList.add("disabled");

//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "contact-form-process.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState == 4 && xhr.status == 200){
//       let response = xhr.response;
//       if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1){
//         statusTxt.style.color = "red";
//       }else{
//         form.reset();
//         setTimeout(()=>{
//           statusTxt.style.display = "none";
//         }, 3000);
//       }
//       statusTxt.innerText = response;
//       form.classList.remove("disabled");
//     }
//   }
//   let formData = new FormData(form);
//   xhr.send(formData);
// }


///
var form = $('#myForm'); // contact form
var submit = $('.submit-btn'); // submit button
var alert = $('.alert-msg'); // alert div for show alert message

// form submit event
form.on('submit', function(e) {
    e.preventDefault(); // prevent default form submit

    $.ajax({
        url: 'contact-form-process.php', // form action url
        type: 'POST', // form submit method get/post
        dataType: 'html', // request type html/json/xml
        data: form.serialize(), // serialize form data
        beforeSend: function() {
            alert.fadeOut();
            submit.html('Sending....'); // change submit button text
        },
        success: function(data) {
            alert.html(data).fadeIn(); // fade in response data
            form.trigger('reset'); // reset form
            submit.attr("style", "display: none !important");; // reset submit button text
        },
        error: function(e) {
            console.log(e)
        }
    });
});
///

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("mybtn");
    // var less = document.getElementById("less")

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
    //   less.style.display = "none";
      btnText.textContent = "Read more"; 
      moreText.style.display = "none";
    } else {
        
      dots.style.display = "none";
    //   less.style.display = "inline";
      btnText.textContent  = 'Read less'; 
      moreText.style.display = "inline";
    }
  }

//   function readLess() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
//     moreText.style.display = "none";
//     less.style.display = "none";
    
//   }